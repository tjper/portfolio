import React, { useState } from 'react';

import Layout from '../components/Layout';
import { Title } from '../components/Title';
import { Paragraph } from '../components/Paragraph';
import { Cheatsheets } from '../components/Cheatsheets';
import { Props as CheatsheetProps } from '../components/Cheatsheet';
import { CheatsheetTag } from '../components/CheatsheetTag';

import { createClient as createGistClient, Tag, Tags } from '../lib/gist';

type Props = {
  cheatsheets: CheatsheetProps[];
};
export default function CheatsheetsPage({ cheatsheets }: Props) {
  const [filters, setFilters] = useState<Tag[] | null>(null);
  const handleTagClick = (tag: Tag) => {
    if (!filters) {
      setFilters([tag]);
      return;
    }

    const found = filters?.includes(tag);
    if (found) {
      setFilters(filters.filter((t) => t !== tag));
      return;
    }

    setFilters([...filters, tag]);
  };

  return (
    <Layout title="Cheatsheets | T. James Perry">
      <Title size="lg">Cheatsheets</Title>
      <Paragraph>
        When I recognize a tool is critical to my workflow I will consider building out a cheatsheet for it. This helps
        me explore and memorize the critical details of the tool and share what I have learned with others.
      </Paragraph>
      <Title size="md">Tags</Title>
      <div className="flex flex-wrap space-x-3">
        {Tags.map((tag) => {
          const selected = filters?.includes(tag);
          return <CheatsheetTag key={tag} tag={tag} onClick={handleTagClick} selected={selected} />;
        })}
      </div>
      <Cheatsheets cheatsheets={cheatsheets} onClick={handleTagClick} filters={filters} />
    </Layout>
  );
}

export async function getStaticProps() {
  if (!process.env.GITHUB_ACCESS_TOKEN) return;

  const client = createGistClient(process.env.GITHUB_ACCESS_TOKEN!);
  const gists = await client.list();

  return {
    props: {
      cheatsheets: gists,
    },
  };
}
