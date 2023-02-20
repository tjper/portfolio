import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Terminal = ({ children }: Props) => (
  <div className="text-md w-full rounded-md bg-slate-900 p-2 text-neutral-300">
    <code>
      <span className="text-[#f78c6c]">{'>'} </span>
      {children}
    </code>
  </div>
);
