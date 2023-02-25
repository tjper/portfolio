import React from 'react';
import { Tag } from '../lib/gist';

type Props = {
  tag: Tag;
  selected?: boolean;
  onClick: (tag: Tag) => void;
};

export const SnippetTag = ({ tag, selected, onClick }: Props) => {
  const bgColor = selected ? selectedBackgroundColorMap[tag] : backgroundColorMap[tag];
  const borderColor = selected ? borderColorMap[tag] : '';

  return (
    <button id={tag} onClick={() => onClick(tag)}>
      <span
        className={`rounded-b-sm rounded-t-lg px-1.5 py-0.5 font-medium transition-all hover:underline-offset-1 dark:text-zinc-900 ${borderColorMap} ${bgColor} ${borderColor}`}
      >
        {tag}
      </span>
    </button>
  );
};

const selectedBackgroundColorMap: Record<Tag, string> = {
  terminal: 'bg-sky-200',
  neovim: 'bg-red-200',
  nextjs: 'bg-amber-200',
  go: 'bg-lime-200',
};

const backgroundColorMap: Record<Tag, string> = {
  terminal: 'bg-sky-100',
  neovim: 'bg-red-100',
  nextjs: 'bg-amber-100',
  go: 'bg-lime-100',
};

const borderColorMap: Record<Tag, string> = {
  terminal: 'border-sky-200',
  neovim: 'border-red-200',
  nextjs: 'border-amber-200',
  go: 'border-lime-200',
};
