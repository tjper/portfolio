import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useDarkModeContext } from '../context/darkmode';
import { Icon } from './Icon';
import { Typography } from './Typography';
import { Divider } from './Divider';

import twitter from '../public/static/twitter.png';
import youtube from '../public/static/youtube.png';
import githubBlack from '../public/static/github-black.png';
import githubWhite from '../public/static/github-white.png';

import { Bars3Icon } from '@heroicons/react/24/outline';
import { FolderIcon } from '@heroicons/react/24/outline';
import { HomeIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/outline';
import { SunIcon } from '@heroicons/react/24/outline';

type Props = {
  children?: ReactNode;
  title?: string;
  submenu?: SubMenuItem[];
};

const Layout = (props: Props) => {
  const { children, title, submenu } = props;

  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const { enabled: darkMode, toggle: toggleDarkMode } = useDarkModeContext();

  const isHome = router.pathname === '/';
  const isAbout = router.pathname === '/about';
  const isCheatsheets = router.pathname === '/cheatsheets';

  return (
    <div className={`m-auto ${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <div className="dark:bg-zinc-800 dark:text-zinc-50 text-zinc-900">
        <header className="fixed z-50 w-full bg-stone-50 px-7 py-3 dark:bg-zinc-900">
          <Link href="/" className="absolute left-1/2 top-4 flex max-w-fit -translate-x-1/2 transform items-center space-x-2">
            <Icon />
            <Typography size="lg">T. James Perry</Typography>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <button
                onClick={() => setMenuVisible(!menuVisible)}
                className="h-10 w-10 rounded-full bg-zinc-200 hover:border hover:border-zinc-300 active:bg-zinc-300 dark:bg-black dark:hover:border-zinc-900 dark:active:bg-zinc-900"
              >
                <Bars3Icon className="m-auto h-8" />
              </button>
            </div>
            <button
              onClick={() => toggleDarkMode()}
              className="h-10 w-10 rounded-full bg-zinc-200 hover:border hover:border-zinc-300 active:bg-zinc-300 dark:bg-black dark:hover:border-zinc-900 dark:active:bg-zinc-900"
            >
              {darkMode ? <SunIcon className="m-auto h-7" /> : <MoonIcon className="m-auto h-7" />}
            </button>
          </div>
        </header>
        <div
          className={`fixed h-screen w-80 flex flex-col bg-stone-50 px-8 pt-20 pb-4 dark:bg-zinc-900 ${
            menuVisible ? '' : '-translate-x-full'
          } transition-transform`}
        >
          <nav className="flex flex-col space-y-2 grow-0">
            <Link href="/" className={`flex items-center space-x-3 px-2 border-l-4  ${isHome && 'border-cyan-600'}`}>
              <HomeIcon className="h-6" />
              <Typography size="md">Home</Typography>
            </Link>
            <Link href="/about" className={`flex items-center space-x-3 px-2 border-l-4 ${isAbout && 'border-cyan-600'}`}>
              <MagnifyingGlassIcon className="h-6" />
              <Typography size="md">About</Typography>
            </Link>
            <Link href="/cheatsheets" className={`flex items-center space-x-3 px-2 border-l-4 ${isCheatsheets && 'border-cyan-600'}`}>
              <FolderIcon className="h-6" />
              <Typography size="md">Cheatsheets</Typography>
            </Link>
          </nav>
          <div className="m-auto w-5/6 mt-8 mb-5">
            <Divider />
          </div>
          <div className="flex items-center justify-evenly">
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
          {submenu && (
            <>
              <div className="m-auto w-5/6 mt-5 mb-8">
                <Divider />
              </div>
              <nav className="flex flex-col space-y-1.5 pr-8 overflow-y-scroll">
                {submenu.map((item) => (
                  <Link key={item.id} href="/">
                    <Typography size="xs">
                      <div className="truncate">{item.title}</div>
                    </Typography>
                  </Link>
                ))}
              </nav>
            </>
          )}
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
