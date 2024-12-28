import TrailingImage from "@/components/animata/container/TrailingImage";
import ScrollReveal from "@/components/animata/text/ScrollText";
import { InView } from "@/components/motionui/inView";

import { Outfit } from 'next/font/google'
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})
export function Overview(){
    return(
        <div className='mt-20 mb-24  max-w-5xl mx-auto flex flex-col items-center justify-center'>
   
    <TrailingImage/>
  
 
  
</div>

    )
}