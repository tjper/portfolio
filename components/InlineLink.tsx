import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

type Props = LinkProps & {
  children?: ReactNode;
};

export const InlineLink = (props: Props) => {
  const { children, ...rest } = props;

  return (
    <Link
      className="underline decoration-sky-500 decoration-2 underline-offset-4 transition-all hover:underline-offset-1"
      {...rest}
    >
      {children}
    </Link>
  );
};
