import { ReactNode } from 'react';

export type ParagraphSize = 'xl' | 'lg' | 'md';
export type ParagraphWeight = 'light' | 'extralight';

type Props = {
  children?: ReactNode;
  size?: ParagraphSize;
  weight?: ParagraphWeight;
};

export const Paragraph = (props: Props) => {
  const { children, size = 'md', weight = 'extralight' } = props;

  const fontWeight = weightMap[weight];
  const textSize = sizeMap[size];

  return <p className={`my-2 indent-4 leading-relaxed ${textSize} ${fontWeight}`}>{children}</p>;
};

const weightMap: Record<ParagraphWeight, string> = {
  light: 'font-light',
  extralight: 'font-extralight',
};

const sizeMap: Record<ParagraphSize, string> = {
  xl: 'text-2xl',
  lg: 'text-xl',
  md: 'text-lg',
};
