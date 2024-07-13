import { Link2Icon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Outpost from '../../public/outpost.png';
import Image from 'next/image';

const iconSize = 18;

const Home = () => {
  return (
    <div>
      <nav className='flex flex-row justify-between py-4 max-w-[80vw] mx-auto'>
        <div className='flex flex-row items-center space-x-2'>
          <Link2Icon height={iconSize + 2} width={iconSize + 2}></Link2Icon>
          <h1 className='text-lg font-bold'>Shawrty</h1>
        </div>
        <div className='flex flex-row space-x-5 items-center'>
          <Link href={'#features'}>Features</Link>
          <Link href={'#pricing'}>Pricing</Link>
          <Link href={'#features'}>About</Link>
        </div>
        <div>
          <button className='px-5 py-1 rounded-3xl bg-primary'>Login</button>
        </div>
      </nav>

      <hr className='border-foreground/10' />

      <main className='flex flex-col space-y-32 py-24'>
        {/* Hero Section */}
        <section
          className='flex flex-col md:flex-row max-w-[80vw] m-auto space-x-5'
          id='hero'
        >
          <div className='flex flex-col flex-1 justify-center items-center'>
            <h2 className='max-w-48 font-bold text-3xl text-center'>
              Shorten URLs and Share them with Ease
            </h2>
          </div>
          <div className='flex-1 flex items-center justify-start'>
            <Image
              className='max-w-[80%]'
              width={500}
              height={500}
              src={Outpost}
              alt='alt'
            ></Image>
          </div>
        </section>

        {/* Features Section */}
        <section
          className='grid grid-cols-3 max-w-[60vw] m-auto gap-8'
          id='features'
        >
          <div className='flex flex-col space-y-1'>
            <Link2Icon width={iconSize} height={iconSize}></Link2Icon>
            <h4 className='font-bold'>Shorten</h4>
            <p>Shorten URLs easily using our webapp</p>
          </div>
          <div className='flex flex-col space-y-1'>
            <Link2Icon width={iconSize} height={iconSize}></Link2Icon>
            <h4 className='font-bold'>Shorten</h4>
            <p>Shorten URLs easily using our webapp</p>
          </div>
          <div className='flex flex-col space-y-1'>
            <Link2Icon width={iconSize} height={iconSize}></Link2Icon>
            <h4 className='font-bold'>Shorten</h4>
            <p>Shorten URLs easily using our webapp</p>
          </div>
          <div className='flex flex-col space-y-1'>
            <Link2Icon width={iconSize} height={iconSize}></Link2Icon>
            <h4 className='font-bold'>Shorten</h4>
            <p>Shorten URLs easily using our webapp</p>
          </div>
          <div className='flex flex-col space-y-1'>
            <Link2Icon width={iconSize} height={iconSize}></Link2Icon>
            <h4 className='font-bold'>Shorten</h4>
            <p>Shorten URLs easily using our webapp</p>
          </div>
          <div className='flex flex-col space-y-1'>
            <Link2Icon width={iconSize} height={iconSize}></Link2Icon>
            <h4 className='font-bold'>Shorten</h4>
            <p>Shorten URLs easily using our webapp</p>
          </div>
        </section>

        {/* Pricing */}
        <section
          className='flex flex-row max-w-[60vw] m-auto space-x-3'
          id='pricing'
        >
          <div className='rounded-xl bg-primary/30 flex flex-col p-4'>
            <h4 className='text-2xl font-bold text-center'>Basic</h4>
            <p className='text-lg text-center'>Free</p>
            <ul className='mt-4'>
              <li>Shorten URLs</li>
              <li>Upto 200 URLs</li>
              <li>Expiry upto 20 days</li>
            </ul>
            <button className='bg-primary rounded-xl py-1 mx-4 mt-12'>
              Get Started
            </button>
          </div>
          <div className='rounded-xl bg-primary/30 flex flex-col p-4'>
            <h4 className='text-2xl font-bold text-center'>Basic</h4>
            <p className='text-lg text-center'>Free</p>
            <ul className='mt-4'>
              <li>Shorten URLs</li>
              <li>Upto 200 URLs</li>
              <li>Expiry upto 20 days</li>
            </ul>
            <button className='bg-primary rounded-xl py-1 mx-4 mt-12'>
              Get Started
            </button>
          </div>
          <div className='rounded-xl bg-primary/30 flex flex-col p-4'>
            <h4 className='text-2xl font-bold text-center'>Basic</h4>
            <p className='text-lg text-center'>Free</p>
            <ul className='mt-4'>
              <li>Shorten URLs</li>
              <li>Upto 200 URLs</li>
              <li>Expiry upto 20 days</li>
            </ul>
            <button className='bg-primary rounded-xl py-1 mx-4 mt-12'>
              Get Started
            </button>
          </div>
        </section>
      </main>

      <hr className='border-foreground/10' />

      <div id='footer' className='max-w-[70vw] m-auto py-4'>
        <p>Made by Aaryan Dongre / Mulitet4</p>
      </div>
    </div>
  );
};

export default Home;
