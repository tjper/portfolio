import { ReactNode } from 'react';

export type TitleSize = 'xl' | 'lg' | 'md';
export type TitleWeight = 'light' | 'extralight';

type Props = {
  children?: ReactNode;
  size?: TitleSize;
  weight?: TitleWeight;
};
export const Title = (props: Props) => {
  const { children, size = 'xl', weight = 'extralight' } = props;

  const fontWeight = weightMap[weight];
  const textSize = sizeMap[size];

  return <h2 className={`my-4 ${textSize} ${fontWeight}`}>{children}</h2>;
};

const weightMap: Record<TitleWeight, string> = {
  light: 'font-light',
  extralight: 'font-extralight',
};

const sizeMap: Record<TitleSize, string> = {
  xl: 'text-4xl',
  lg: 'text-3xl',
  md: 'text-2xl',
};
