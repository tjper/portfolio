import { Title } from './Title';
import { SnippetTag } from './SnippetTag';
import { SnippetFile } from './SnippetFile';
import { Gist, Tag } from '../lib/gist';
import { Paragraph } from './Paragraph';

export type Props = Gist & {
  filters: Tag[] | null;
  onClick: (tag: Tag) => void;
};

export const Snippet = (props: Props) => {
  const { title, tags, description, files, filters, onClick } = props;

  if (filters && !isFilteredFor(tags, filters)) {
    return;
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <Title size="sm" compact>
          {title}
        </Title>
        <div className="flex space-x-3">
          {tags.map((tag) => {
            const selected = filters?.includes(tag);
            return <SnippetTag key={tag} tag={tag} selected={selected} onClick={onClick} />;
          })}
        </div>
      </div>
      {description && (
        <Paragraph size="sm" compact>
          {description}
        </Paragraph>
      )}
      <div className="mt-4 flex flex-col space-y-4">
        {files.map((file, index) => (
          <SnippetFile key={index} {...file} />
        ))}
      </div>
    </div>
  );
};

const isFilteredFor = (has: Tag[], needs: Tag[]) => {
  const set = new Set(has);
  return needs.every((tag) => set.has(tag));
};
