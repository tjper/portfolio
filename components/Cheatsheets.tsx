import React from 'react';
import { Cheatsheet, Props as CheatsheetProps } from './Cheatsheet';
import { Tag } from '../lib/gist';

type Props = {
  cheatsheets: CheatsheetProps[];
  filters: Tag[] | null;
  onClick: (tag: Tag) => void;
};

export const Cheatsheets = ({ cheatsheets, filters, onClick }: Props) => {
  return (
    <div className="flex flex-col space-y-4">
      {cheatsheets.map((cheatsheet) => (
        <Cheatsheet key={cheatsheet.title} {...cheatsheet} filters={filters} onClick={onClick} />
      ))}
    </div>
  );
};
