import { Inter, Roboto } from "next/font/google";
import "./globals.css";

// Load Google Fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Metadata
export const metadata = {
  title: 'My PWA App',
  description: 'A Progressive Web App built with Next.js',
  themeColor: '#000000',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/image192.png', sizes: '192x192', type: 'image/png' }
    ],
    apple: [
      { url: '/image180.png', sizes: '180x180', type: 'image/png' },
      { url: '/image120.png', sizes: '120x120', type: 'image/png' },
      { url: '/image152.png', sizes: '152x152', type: 'image/png' }
    ]
  }
};

// Root Layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* General PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />

        {/* iOS Specific Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="My PWA App" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/image180.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/image152.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/image120.png" />
      </head>
      <body className={`${inter.className} ${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}


