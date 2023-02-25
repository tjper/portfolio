import React from 'react';
import { Snippet, Props as SnippetProps } from './Snippet';
import { Tag } from '../lib/gist';

type Props = {
  snippets: SnippetProps[];
  filters: Tag[] | null;
  onClick: (tag: Tag) => void;
};

export const Snippets = ({ snippets, filters, onClick }: Props) => {
  return (
    <div className="flex flex-col space-y-4">
      {snippets.map((snippet, index) => (
        <Snippet key={index} {...snippet} filters={filters} onClick={onClick} />
      ))}
    </div>
  );
};
