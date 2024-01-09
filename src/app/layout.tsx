import { Metadata } from 'next';
import { headers } from 'next/headers';
//Internal app
import { RootLayoutProps } from '@/interfaces';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: '%s | Indigo',
      default: 'Indigo',
    },
    description: '',
    icons: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '32x32',
        url: '/images/favicon.ico',
      },
    ],
  };
}

async function getData() {
  const headersList = headers();
  console.log('🚀 ~ file: page.tsx:28 ~ getData ~ headersList:', headersList);
  // const authHeader = headers().get('authorization');

  return '...';
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();
  console.log('🚀 ~ file: layout.tsx:33 ~ RootLayout ~ data:', data);
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
