import type { Metadata } from "next";

import "./globals.css";
import NavTabs from "@/components/animata/container/nav-tabs";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
            <NavTabs tabs={[
    'Profile',
    'Search',
    'About Us',
    'Contact Us',
    'Settings'
  ]}/>
        {children}
      </body>
    </html>
  );
}
