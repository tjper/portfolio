import { ReactNode } from 'react';

export type TitleSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type TitleWeight = 'light' | 'extralight';

type Props = {
  children?: ReactNode;
  size?: TitleSize;
  weight?: TitleWeight;
  compact?: boolean;
};
export const Title = (props: Props) => {
  const { children, size = 'xl', weight = 'extralight', compact = false } = props;

  const fontWeight = weightMap[weight];
  const textSize = sizeMap[size];
  const margin = compact ? 'my-2' : 'my-4';

  return <h2 className={`${margin} ${textSize} ${fontWeight}`}>{children}</h2>;
};

const weightMap: Record<TitleWeight, string> = {
  light: 'font-light',
  extralight: 'font-extralight',
};

const sizeMap: Record<TitleSize, string> = {
  xl: 'text-4xl',
  lg: 'text-3xl',
  md: 'text-2xl',
  sm: 'text-xl',
  xs: 'text-lg',
};
