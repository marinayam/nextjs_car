import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "mCar",
  description: "車種検索ができるアプリ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}