import * as React from 'react';

import { fontMono, fontSans } from '~/common/fonts';
import { cn } from '~/common/utils';

import './style.css';

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
