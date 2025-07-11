import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import HomeLayout from '@/components/layout/home-layout';

export const metadata: Metadata = {
  title: 'Unblocked Games G+',
  description: 'Explore the Best Free Unblocked Games Online!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <HomeLayout>
          {children}
        </HomeLayout>
        <Toaster />
      </body>
    </html>
  );
}
