'use client';
import React, { useEffect, useState } from 'react';
import {
  CopyIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  TrashIcon,
} from '@radix-ui/react-icons';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { add, get, remove } from './actions';

const iconSize = 18;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [urls, setUrls] = useState([]);
  const [addUrl, setAddUrl] = useState('');

  async function handleAdd() {
    const add_response = await add(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTcyMDkwODQ4NywiZXhwIjoxNzIwOTEyMDg3fQ.HH6lD3JnpWbE5hbDXenP22UWqgYc74tX8rtbfPn2YmM',
      'https://google.com'
    );

    const response = await get(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTcyMDkwODQ4NywiZXhwIjoxNzIwOTEyMDg3fQ.HH6lD3JnpWbE5hbDXenP22UWqgYc74tX8rtbfPn2YmM'
    );

    setUrls(response.urls);
  }

  async function handleDelete(id) {
    const delete_response = await remove(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTcyMDkwODk3MCwiZXhwIjoxNzIwOTEyNTcwfQ.Hgtk8G384i-kRceUP37WxkUgX5IDbkVzlIIGuJOhBX8',
      id
    );

    console.log(delete_response);

    const response = await get(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTcyMDkwODQ4NywiZXhwIjoxNzIwOTEyMDg3fQ.HH6lD3JnpWbE5hbDXenP22UWqgYc74tX8rtbfPn2YmM'
    );

    setUrls(response.urls);
  }

  async function handleInit() {
    const response = await get(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTcyMDkwODQ4NywiZXhwIjoxNzIwOTEyMDg3fQ.HH6lD3JnpWbE5hbDXenP22UWqgYc74tX8rtbfPn2YmM'
    );

    setLoading(false);
    setUrls(response.urls);
  }

  useEffect(() => {
    handleInit();
    return () => {};
  }, []);

  return (
    <div className='p-5 w-full'>
      <h2 className='text-3xl'>Dashboard</h2>
      {/* Search Bar and Add Button */}
      <section className='flex flex-row items-center mt-4 space-x-2'>
        <Dialog>
          <DialogTrigger asChild>
            <div
              id='add'
              className='p-5 bg-primary-foreground rounded-lg cursor-pointer'
            >
              <PlusIcon></PlusIcon>
            </div>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle>Add URL</DialogTitle>
              <DialogDescription>
                Add the original URL you want to shorten here. Click add once
                you're done
              </DialogDescription>
            </DialogHeader>
            <div className='py-4'>
              <input
                onChange={(e) => {
                  setAddUrl(e.target.value);
                }}
                type='text'
                placeholder='Original URL'
                className='border-white/30 rounded-md border-[1px] bg-white/5 w-full p-2 placeholder:text-white/30 text-white'
              />
            </div>
            <DialogFooter>
              <button
                className='bg-white/90 hover:bg-white text-background p-2 px-3 rounded-lg transition-all'
                onClick={() => {
                  handleAdd();
                }}
              >
                Add URL
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <div
          id='search'
          className='flex-1 flex flex-row items-center p-4 bg-primary-foreground w-full rounded-lg  px-5'
        >
          <input
            placeholder='Search'
            type='text'
            className='bg-transparent w-full placeholder:text-muted'
          />
          <MagnifyingGlassIcon
            className='text-muted'
            height={iconSize}
            width={iconSize}
          ></MagnifyingGlassIcon>
        </div>
      </section>

      {/* URLs */}
      <section id='urls' className='grid grid-cols-3 gap-2 mt-2 w-full'>
        {!loading &&
          urls.map((urlObj) => {
            return (
              <div
                id='card'
                className='flex flex-row justify-between bg-primary-foreground p-4 rounded-md space-x-3'
              >
                <div className='flex flex-col'>
                  <a href={urlObj.originalUrl}>{urlObj.originalUrl}</a>
                  <a className='text-muted' href={urlObj.originalUrl}>
                    https://shawrty.vercel.app/{urlObj.shortenedUrl}
                  </a>
                </div>
                <div className='flex flex-col items-center justify-between'>
                  <CopyIcon
                    className='cursor-pointer'
                    height={iconSize}
                    width={iconSize}
                  ></CopyIcon>
                  <TrashIcon
                    onClick={() => {
                      handleDelete(urlObj.id);
                    }}
                    className='cursor-pointer'
                    height={iconSize + 3}
                    width={iconSize + 3}
                  ></TrashIcon>
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default App;
