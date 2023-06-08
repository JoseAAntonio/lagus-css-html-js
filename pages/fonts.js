import { Poppins, Roboto } from 'next/font/google';
 
export const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
});
 
export const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
});