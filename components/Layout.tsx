import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import { useDarkModeContext } from '../context/darkmode';
import { Icon } from './Icon';
import { Typography } from './Typography';

import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';
import githubBlack from '../images/github-black.png';
import githubWhite from '../images/github-white.png';

import { Bars3Icon } from '@heroicons/react/24/outline';
import { FolderIcon } from '@heroicons/react/24/outline';
import { HomeIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/outline';

type Props = {
  children?: ReactNode;
  title?: string;
  submenu?: SubMenuItem[];
};

const Layout = (props: Props) => {
  const { children, title, submenu } = props;

  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const {enabled: darkMode, toggle: toggleDarkMode} = useDarkModeContext();

  return (
    <div className={`m-auto ${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="dark:bg-zinc-800 dark:text-zinc-50">
        <header className="fixed z-50 w-full bg-stone-50 px-7 py-3 dark:bg-zinc-900">
          <div className="absolute left-1/2 flex max-w-fit -translate-x-1/2 transform items-center space-x-2">
            <Icon />
            <Typography size="lg">T. James Perry</Typography>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <button onClick={() => setMenuVisible(!menuVisible)} className="h-10 w-10 rounded-full bg-zinc-200 active:bg-zinc-300 hover:border hover:border-zinc-300 dark:bg-black dark:active:bg-zinc-900 dark:hover:border-zinc-900">
                <Bars3Icon className="m-auto h-8" />
              </button>
            </div>
            <button onClick={() => toggleDarkMode()} className="h-10 w-10 rounded-full bg-zinc-200 active:bg-zinc-300 hover:border hover:border-zinc-300 dark:bg-black dark:active:bg-zinc-900 dark:hover:border-zinc-900">
              <MoonIcon className="m-auto h-7" />
            </button>
          </div>
        </header>
        <div
          className={`fixed h-screen w-80 flex-col bg-stone-50 dark:bg-zinc-900 p-8 pt-20 ${
            menuVisible ? '' : '-translate-x-full'
          } transition-all`}
        >
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
          <div className="flex space-x-4">
            <Link href="/">
              <Image src={twitter} alt="Twitter" height={24} />
            </Link>
            <Link href="https://www.youtube.com/@tjper">
              <Image src={youtube} alt="YouTube" height={24} />
            </Link>
            <Link href="https://www.github.com/tjper">
              <Image src={darkMode ? githubWhite : githubBlack} alt="Github" height={24} />
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="m-auto h-screen overflow-y-auto scroll-smooth px-12 pt-24">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

type SubMenuItem = {
  id: string;
  title: string;
};
