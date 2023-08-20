import Layout from '@/components/layout/Layout';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next Meetup App',
  description:
    'Meetup event app for the College organizers who want to organize meetups and events without any hassle and confusion. A one stop solution for college nerds',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
