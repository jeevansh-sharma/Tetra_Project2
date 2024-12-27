import { InView } from "@/components/motionui/inView";

import { Outfit } from 'next/font/google'
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})
export function Overview(){
    return(
        <div className='mt-20 mb-20  max-w-6xl mx-auto flex flex-row justify-between '>
   
  <div className='flex flex-col px-16  max-w-lg'>
  <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ margin: '0px 0px -200px 0px' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
    <h1 className={`${outfit.className}font-semibold text-7xl`}>Discover<br/> Our <span className='font-extralight' >Studio</span></h1>
    <p className={`${outfit.className} text-lg text-gray-500 mt-16`}>At Tetra Edtech, our mission is to empower educational institutions with cutting-edge solutions designed to elevate the quality of education and drive institutional excellence. Through comprehensive services such as digital marketing, event management, and accreditation support, we ensure that institutions are equipped to thrive in an ever-evolving educational landscape.</p>
    <p className={`${outfit.className} text-lg text-gray-500 mt-12`}>Our commitment to excellence extends to teacher training and Faculty Development Programs (FDP), fostering an environment of continuous learning and growth. At Tetra Edtech, we believe every institution has the potential to achieve greatness, and we work tirelessly to make that a reality. </p>

  </InView>
  </div>
  <div className='flex items-center justify-center pr-36 pl-20'>
  
  <img src="/over1.jpg" alt='ok' className='w-full h-full ml-16  ' />
  
     

    

  </div>
  
</div>

    )
}