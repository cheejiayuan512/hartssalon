import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import {Navbar} from "@/components/Navbar/Navbar";
import {Footer} from "@/components/Footer/Footer";

export const metadata = {
  title: 'HARTS Salon',
  description: 'Boutique Hair Salon in SG',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
            <Navbar/>
            {children}
            <Footer/>
        </MantineProvider>
      </body>
    </html>
  );
}
