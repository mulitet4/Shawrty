// import { Inter } from 'next/font/google';
import { Rubik } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

// const inter = Inter({ subsets: ['latin'] });
const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'Shawrty',
  description: 'Shawrten your urls with ease',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='dark'>
      <body className={rubik.className + ' bg-background'}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
