import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { Typography } from './Typography';

import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';
import github from '../images/github.png';

import { FolderIcon } from '@heroicons/react/24/outline';
import { HomeIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

type Props = {
  children?: ReactNode;
  title?: string;
  submenu?: SubMenuItem[];
};

const Layout = (props: Props) => {
  const { children, title, submenu } = props;

  return (
    <div className="m-auto max-w-screen-2xl">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex">
        <div className="fixed mt-40 flex w-60 flex-col">
          <div className="mb-4">
            <Typography>T. James Perry</Typography>
          </div>
          <div className="mb-4">
            <nav className="flex flex-col space-y-1">
              <Link href="/" className="flex items-center space-x-3">
                <HomeIcon className="h-5" />
                <Typography size="md">Home</Typography>
              </Link>
              <Link href="/about" className="flex items-center space-x-3">
                <MagnifyingGlassIcon className="h-5" />
                <Typography size="md">About</Typography>
              </Link>
              <Link href="/cheatsheets" className="flex items-center space-x-3">
                <FolderIcon className="h-5" />
                <Typography size="md">Cheatsheets</Typography>
              </Link>
            </nav>
          </div>
          {submenu && (
            <div className="border-t-2 border-cyan-600 pt-4">
              <nav className="flex flex-col space-y-1">
                {submenu.map((item) => (
                  <Link key={item.id} href="/">
                    <Typography size="xs">
                      <div className="truncate">{item.title}</div>
                    </Typography>
                  </Link>
                ))}
              </nav>
            </div>
          )}
          <div className="mt-4 flex space-x-4">
            <Link href="/">
              <Image src={twitter} alt="Twitter" height={24} />
            </Link>
            <Link href="https://www.youtube.com/@tjper">
              <Image src={youtube} alt="YouTube" height={24} />
            </Link>
            <Link href="https://www.github.com/tjper">
              <Image src={github} alt="Github" height={24} />
            </Link>
          </div>
        </div>
        <div className="m-auto h-screen w-7/12 overflow-y-auto scroll-smooth px-24 pt-20">{children}</div>
      </div>
    </div>
  );
};

export default Layout;

type SubMenuItem = {
  id: string;
  title: string;
};
