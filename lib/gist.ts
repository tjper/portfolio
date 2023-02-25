import { Octokit } from 'octokit';

class Client {
  private github: Octokit;

  constructor(accessToken: string) {
    this.github = new Octokit({ auth: accessToken });
  }

  async list(): Promise<Gist[]> {
    const iterator = this.github.paginate.iterator(this.github.rest.gists.list, {
      per_page: 30,
    });

    var total: Gist[] = [];
    for await (const { data: gists } of iterator) {
      for (const gist of gists) {
        if (!gist.public) {
          continue;
        }
        if (!gist.description) {
          continue;
        }

        // Ensure that description exists on Gist. This module expects a Gist
        // to have a description with the following format...
        //
        // { title }\{ tag|[tag]|... }\[ description ]
        //
        // The title and tags fields are required. The tags field is list of
        // tags all seperated by the "|" character. The description is
        // optional. An example description is below.
        //
        // E.G:
        // Exit Neovim\neovim|editor\This is how you exit neovim.
        const info = gist.description;
        const parts = info.trim().split('\\');
        if (parts.length < 2 || parts.length > 3) {
          continue;
        }

        const files: File[] = [];
        for (const [_, file] of Object.entries(gist?.files)) {
          if (!file.filename || !file.language || !file.raw_url) {
            continue;
          }

          const resp = await fetch(file.raw_url);
          const content = await resp.text();

          files.push({
            name: file.filename,
            language: file.language,
            content: content,
          });
        }

        const [title, tagsUnion] = parts;
        const tags = tagsUnion.trim().split('|');
        const description = parts.length === 3 ? parts[2] : '';

        total.push({
          title: title,
          tags: tags,
          description: description,
          files: files,
        });
      }
    }

    return total;
  }
}

let client: Client | undefined = undefined;

export function createClient(accessToken: string) {
  if (client) {
    return client;
  }
  client = new Client(accessToken);
  return client;
}

export type Gist = {
  title: string;
  tags: string[];
  description?: string;
  files: File[];
};

export type File = {
  name: string;
  language: string;
  content: string;
};
