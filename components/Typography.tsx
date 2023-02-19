import { ReactNode } from 'react';

export type TypographySize = 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type TypographyWeight = 'light' | 'extralight';

type Props = {
  children?: ReactNode;
  size?: TypographySize;
  weight?: TypographyWeight;
};

export const Typography = (props: Props) => {
  const { children, size = 'xl', weight = 'extralight' } = props;

  const fontWeight = weightMap[weight];

  switch (size) {
    case 'xl':
      return <h1 className={`text-3xl ${fontWeight}`}>{children}</h1>;
    case 'lg':
      return <h2 className={`text-2xl ${fontWeight}`}>{children}</h2>;
    case 'md':
      return <h3 className={`text-xl ${fontWeight}`}>{children}</h3>;
    case 'sm':
      return <h4 className={`text-lg ${fontWeight}`}>{children}</h4>;
    case 'xs':
      return <h4 className={`text-md ${fontWeight}`}>{children}</h4>;
  }
};

const weightMap: Record<TypographyWeight, string> = {
  light: 'font-light',
  extralight: 'font-extralight',
};
