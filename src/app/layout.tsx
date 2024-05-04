import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSas = IBM_Plex_Sans({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Gravitron",
  description: "Create your website",
};

// COMPONENTS
import Header from '../components/interface/Header';
import MbHeader from '../components/interface/MbHeader';
import Footer from '../components/interface/Footer';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet" />
      </head>

      <body className={`${ibmPlexSas.className} bg-[--black-1100] overflow-x-hidden`}>
        <Header />
        <MbHeader />

        {children}

        <Footer />
      </body>
    </html>
  );
}
