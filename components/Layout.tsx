import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Content } from './Post';

type Props = {
  children?: ReactNode;
  title?: string;
  contents: Content[];
};

const Layout = (props: Props) => {
  const { children, title, contents } = props;

  return (
    <div className='max-w-screen-xl m-auto'>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='flex'>
        <div className='flex flex-col min-w-fit'>
          <h1>T James Perry</h1>
          <div>
            <nav className='flex flex-col'>
              <Link href="/">Timeline</Link>
              <Link href="/">Resume</Link>
            </nav>
          </div>
          <div>
            <nav className='flex flex-col'>
              {contents.map((content) => (
                <Link key={content.id} href="/">{content.title}</Link>
              ))}
            </nav>
          </div>
        </div>
        <div className=''>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
