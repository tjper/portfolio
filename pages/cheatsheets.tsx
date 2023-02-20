import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Title } from '../components/Title';
import { Paragraph } from '../components/Paragraph';
import { Cheatsheets } from '../components/Cheatsheets';
import { Props as CheatsheetProps } from '../components/Cheatsheet';
import { CheatsheetTag, Tag, Tags } from '../components/CheatsheetTag';

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
  const cheatsheets = [
    {
      id: 1,
      title: 'Closing Neovim',
      tags: ['neovim'],
      answer: { kind: 'code', text: ':q' },
    },
    {
      id: 2,
      title: 'Opening Neovim',
      tags: ['neovim', 'terminal'],
      answer: { kind: 'terminal', prompt: 'nvim' },
    },
    {
      id: 3,
      title: 'Go For-Loop',
      tags: ['go'],
      answer: { kind: 'editor', language: 'go', text: goForLoop },
    },
  ];

  return {
    props: {
      cheatsheets: cheatsheets,
    },
  };
}

const goForLoop = `l := 10
for i := 0; i < l; i++ {
  // do something
}`;
