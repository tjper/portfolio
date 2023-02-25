import { ReactNode } from 'react';

export type ParagraphSize = 'xl' | 'lg' | 'md' | 'sm';
export type ParagraphWeight = 'light' | 'extralight';

type Props = {
  children?: ReactNode;
  size?: ParagraphSize;
  weight?: ParagraphWeight;
  compact?: boolean;
};

export const Paragraph = (props: Props) => {
  const { children, size = 'md', weight = 'extralight', compact = false } = props;

  const fontWeight = weightMap[weight];
  const textSize = sizeMap[size];
  const margin = compact ? 'my-2' : 'my-4';

  return <p className={`indent-8 leading-relaxed ${margin} ${textSize} ${fontWeight}`}>{children}</p>;
};

const weightMap: Record<ParagraphWeight, string> = {
  light: 'font-light',
  extralight: 'font-extralight',
};

const sizeMap: Record<ParagraphSize, string> = {
  xl: 'text-2xl',
  lg: 'text-xl',
  md: 'text-lg',
  sm: 'text-md',
};
