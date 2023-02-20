import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Code = ({ children }: Props) => (
  <div className="text-md d w-full rounded-md bg-slate-900 p-2 text-neutral-300">
    <code>{children}</code>
  </div>
);
