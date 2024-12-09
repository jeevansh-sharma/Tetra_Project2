import { InView } from "@/components/motionui/inView";

import { Outfit } from 'next/font/google'
import Image from "next/image";
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})
export function OurVision(){
    return(
        <div className='mt-20 mb-20  max-w-6xl mx-auto flex flex-row justify-between '>
   
  <div className='flex flex-col  max-w-md mx-auto'>
 
    <Image src="/ourVision.jpg" alt='ok' className='w-full h-full mr-24  ' />
 
  </div>
  <div className='flex flex-col items-center  max-w-xl pl-40 mr-28'>
     <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ margin: '0px 0px -200px 0px' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
  <h1 className={`${outfit.className} font-semibold text-6xl `}> Our <span className='font-extralight' >Vision</span></h1>
    <p className={`${outfit.className} text-base text-gray-400 mt-16`}>At Tetra Edtech, our mission is to empower educational institutions with cutting-edge solutions designed to elevate the quality of education and drive institutional excellence. Through comprehensive services such as digital marketing, event management, and accreditation support, we ensure that institutions are equipped to thrive in an ever-evolving educational landscape.</p>
    <p className={`${outfit.className} text-base text-gray-400 mt-12`}>Our commitment to excellence extends to teacher training and Faculty Development Programs (FDP), fostering an environment of continuous learning and growth. At Tetra Edtech, we believe every institution has the potential to achieve greatness, and we work tirelessly to make that a reality.solutions designed to elevate the quality of education and drive institutional excellence. Through comprehensive services such as digital marketing, event management, and accreditation support, we ensure that institutions are equipped to thrive in an ever-evolving educational landscape. </p>

    </InView>
  
     

    

  </div>
  
</div>

    )
}