'use client';

import { createTheme } from '@mantine/core';

import { Source_Sans_3 } from 'next/font/google'
const sourceSans3 = Source_Sans_3({ subsets: ['latin'] })
export const theme = createTheme({
  /* Put your mantine theme override here */
    fontFamily: sourceSans3.style.fontFamily,
});
