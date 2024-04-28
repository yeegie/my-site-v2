import type { Metadata } from 'next';
import Head from 'next/head'
import { Roboto } from 'next/font/google';
import './globals.scss';

import Providers from './providers';

const roboto = Roboto({ subsets: ['cyrillic', 'latin'], weight: '500' });

export const metadata: Metadata = {
  title: 'Berdovskiy',
  description: 'Portfolio site.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
