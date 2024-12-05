import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    
    <>
    
    <Link href="/director" className="mr-1 text-red-400">director</Link>
    <MacbookScroll/>
    </>
  );
}
