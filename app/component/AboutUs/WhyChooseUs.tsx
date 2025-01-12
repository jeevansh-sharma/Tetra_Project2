import TiltedCover from "@/components/animata/container/CardShift";
import { InView } from "@/components/motionui/inView";

import { Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})
export function WhyChooseUs() {
    return (
      <div className="bg-neutral-950 md:h-[890px]  lg:h-[500px] text-white py-12 pl-3 lg:pl-8 relative">






        <div className=" z-10 max-w-5xl mx-auto text-center flex flex-col justify-end ">
          {/* Header Section */}
          <InView
          variants={{
            hidden: { opacity: 0, y: 50, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ margin: '0px 0px -200px 0px' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center justify-center gap-4 ">
            <div className="flex flex-col items-center justify-center space-x-6 w-full">
              
              <h1 className="text-4xl md:text-7xl text-white">
              <span className={`${outfit.className} font-semibold`}>Our Proud </span> <span className={`${outfit.className} font-extralight`}>Achievements</span></h1>
              <div  className='w-[8rem]  my-3 h-[0.3rem] bg-[#F97316]'></div>
            </div>
  
            
          </div>
          </InView>
          <div className="flex w-full flex-wrap items-center justify-center">
        <TiltedCover image={{
        alt: "Yoga Event at Universal College Patran",
        src: "/award1.jpeg"
      }}>
          <div className="p-2">
  <div
    className="mb-0 md:mb-2 font-semibold  text-foreground/80 text-[0.5rem] leading-[0.7rem] md:text-sm"
   
  >
    Yoga Event at Universal College Patran
  </div>
  <p
    className="leading-2 text-muted-foreground text-[0.4rem] leading-[0.6rem] md:text-sm"
    
  >
    Tetra Edtech Limited was honored with the opportunity to organize a rejuvenating and impactful yoga event at Universal College Atran, promoting wellness and mindfulness among the community.
  </p>
</div>

        </TiltedCover>

        <TiltedCover direction="right" tiltCover={false} image={{
        alt: " Heritage Fest and Job Fair",
        src: "/award2.jpeg"
      }}>
          <div className="p-2">
            <div className="mb-0 md:mb-2 text-[0.5rem] leading-[0.7rem] md:text-sm font-semibold text-foreground/80"> Heritage Fest and Job Fair</div>
            <p className="leading-2 text-[0.4rem] leading-[0.6rem] md:text-sm text-muted-foreground">
            Our dedication to cultural enrichment and career development was acknowledged through an award for successfully arranging a vibrant Heritage Fest and a well-curated Job Fair.<span className="hidden md:inline"> These events provided a unique platform for showcasing cultural pride while facilitating meaningful career opportunities.</span>
            </p>
          </div>
        </TiltedCover>

        <TiltedCover direction="right" image={{
        alt: "Work desk",
        src: "/award3.jpeg"
      }}>
          <div className="p-2">
            <div className="mb-1 md:mb-2 text-[0.5rem] leading-[0.7rem] md:text-sm font-semibold text-foreground/80">Seminar at Punjab Group of Colleges</div>
            <p className="leading-2 text-[0.4rem] leading-[0.6rem] md:text-sm text-muted-foreground">
            Tetra Edtech Limited was invited to deliver an insightful seminar at Punjab Group of Colleges, where we shared knowledge and expertise, fostering growth and learning among the students and faculty.
            </p>
          </div>
        </TiltedCover>
      </div>
          
        </div>
      </div>
    );
  }