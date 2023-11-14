// The following translation removes TypeScript-specific syntax and features.

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body class="${inter.className}">${children}</body>
    </html>
  );
}

export { metadata, RootLayout };
