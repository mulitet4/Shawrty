import React from 'react';
import { Link2Icon, GearIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const iconSize = 18;

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col'>
      <nav className='flex flex-row items-center justify-between px-5 bg-primary-foreground w-full py-4 shadow-black/20 shadow-xl'>
        <Link href={'/'}>
          <div className='flex flex-row items-center space-x-1 text-muted'>
            <Link2Icon height={22} width={22}></Link2Icon>
            <h1 className='text-xl font-semibold'>Shawrty</h1>
          </div>
        </Link>

        <div className='flex flex-row space-x-4'>
          <Link
            href={'/dashboard'}
            className='text-muted hover:text-muted-foreground transition-all'
          >
            <div className='flex flex-row space-x-1 items-center'>
              <Link2Icon height={iconSize} width={iconSize}></Link2Icon>
              <p>Dashboard</p>
            </div>
          </Link>

          <Link
            href={'/settings'}
            className='text-muted hover:text-muted-foreground transition-all'
          >
            <div className='flex flex-row space-x-1 items-center'>
              <GearIcon height={iconSize} width={iconSize}></GearIcon>
              <p>Settings</p>
            </div>
          </Link>
        </div>
      </nav>
      <div className='flex-1'>{children}</div>
    </div>
  );
};

export default Layout;
