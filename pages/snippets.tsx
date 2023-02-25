import React, { useState } from 'react';

import Layout from '../components/Layout';
import { Title } from '../components/Title';
import { Paragraph } from '../components/Paragraph';
import { Snippets } from '../components/Snippets';
import { Props as SnippetProps } from '../components/Snippet';
import { SnippetTag } from '../components/SnippetTag';

import { createClient as createGistClient } from '../lib/gist';

type Props = {
  snippets: SnippetProps[];
  tags: string[];
};

export default function SnippetsPage({ snippets, tags }: Props) {
  const [filters, setFilters] = useState<string[] | null>(null);
  const handleTagClick = (tag: string) => {
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
    <Layout title="Snippets | T. James Perry">
      <Title size="lg">Snippets</Title>
      <Paragraph>
        When I recognize an interesting snippet of code, I make a point of adding it to this collection. This helps me
        track various patterns and anti-patterns, and share what I have found with others. Click on a tag below to
        filter through the snippets.
      </Paragraph>
      {snippets.length > 0 && (
        <>
          <Title size="md">Tags</Title>
          <div className="flex flex-wrap space-x-3">
            {tags.map((tag) => {
              const selected = filters?.includes(tag);
              return <SnippetTag key={tag} tag={tag} onClick={handleTagClick} selected={selected} />;
            })}
          </div>
          <Snippets snippets={snippets} onClick={handleTagClick} filters={filters} />
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  if (!process.env.GITHUB_ACCESS_TOKEN) return;

  const client = createGistClient(process.env.GITHUB_ACCESS_TOKEN!);
  const gists = await client.list();
  const tags = Array.from(new Set(gists.map((gist) => gist.tags).flat(1)));

  return {
    props: {
      snippets: gists,
      tags: tags,
    },
  };
}
