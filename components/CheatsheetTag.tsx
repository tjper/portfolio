import React from 'react';

type Props = {
  tag: Tag;
  selected?: boolean;
  onClick: (tag: Tag) => void;
};

export const CheatsheetTag = ({ tag, selected, onClick }: Props) => {
  const bgColor = selected ? selectedBackgroundColorMap[tag] : backgroundColorMap[tag];
  const borderColor = selected ? borderColorMap[tag] : '';

  return (
    <button id={tag} onClick={() => onClick(tag)}>
      <span
        className={`rounded-b-sm rounded-t-lg px-1.5 py-0.5 font-medium transition-all hover:underline-offset-1 ${borderColorMap} ${bgColor} ${borderColor}`}
      >
        {tag}
      </span>
    </button>
  );
};

export const Tags = ['terminal', 'neovim', 'nextjs', 'go'] as const;
export type Tag = (typeof Tags)[number];

const selectedBackgroundColorMap: Record<Tag, string> = {
  terminal: 'bg-sky-100',
  neovim: 'bg-red-100',
  nextjs: 'bg-amber-100',
  go: 'bg-lime-100',
};

const backgroundColorMap: Record<Tag, string> = {
  terminal: 'bg-sky-50',
  neovim: 'bg-red-50',
  nextjs: 'bg-amber-50',
  go: 'bg-lime-50',
};

const borderColorMap: Record<Tag, string> = {
  terminal: 'border-sky-100',
  neovim: 'border-red-100',
  nextjs: 'border-amber-100',
  go: 'border-lime-100',
};
