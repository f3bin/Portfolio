import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Febin Joseph — Frontend Engineer',
  description: 'Portfolio of Febin Joseph, a frontend-focused software engineer building thoughtful digital experiences with React, Next.js and TypeScript.',
  openGraph: {
    title: 'Febin Joseph — Frontend Engineer',
    description: 'I build thoughtful, performant digital experiences.',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
