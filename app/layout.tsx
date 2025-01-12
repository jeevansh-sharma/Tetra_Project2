import type { Metadata } from "next";
import "./globals.css";




import FollowCursor from "@/components/ui/FollowCursor";


export const metadata: Metadata = {
  title: "TetraEdTech",
  description: "www.tetraedtech.com",
  icons:{
    icon: "/logologo2.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 


{
  return (
    <html lang="en">
      <body className=" overflow-y-scroll scrollbar-thin">
        {/* Add the Preloader here */}
        
        <FollowCursor/>

        {children}
       
      </body>
    </html>
  );
}
