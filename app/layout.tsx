import * as React from 'react';

import { fontMono, fontSans } from '~/common/fonts';
import { cn } from '~/common/utils';

import './style.css';

export const metadata = {
  title: 'Shopnify',
  description: 'An open source web-based marketplace application',
  manifest: '/manifest.json',
  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      { url: '/favicon.ico', sizes: '16x16' },
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={cn('font-sans', fontSans.variable, fontMono.variable)}>
        {children}
      </body>
    </html>
  );
}
