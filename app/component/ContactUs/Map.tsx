import { PinContainer } from '@/components/ui/animated3d-pin';
import { Outfit } from 'next/font/google'
import Link from 'next/link';
import { FaCircleArrowRight } from "react-icons/fa6";
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})
export default function Map(){
    return(
        <section className="flex flex-row bg-neutral-950 h-[350px]  md:h-[700px] lg:h-[700px] xl:h-screen w-screen  overflow-hidden">
            <div className="flex flex-col ml-10 md:ml-16  lg:ml-28 xl:ml-52 mt-24 md:mt-32">
                <h1 className={`font-bold text-white text-3xl md:text-6xl lg:text-8xl`}>Navigate <span className={`font-normal`}>to</span>   </h1>
                <h1 className={`font-bold text-white text-3xl md:text-6xl lg:text-8xl mt-3 md:mt-6`}>Our <span className={`font-normal`}>Office</span> </h1>
                
            <div className= 'mt-6 md:mt-14 '>
            <Link href="https://www.google.com/maps/place/WeWork+Forum/@28.4957826,77.0922101,15.49z/data=!4m6!3m5!1s0x390d19b66c8c2f21:0xb8120a4412f7ea62!8m2!3d28.4968821!4d77.0919037!16s%2Fg%2F11gxb2sl77?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D" className="py-1 md:py-3 w-[140px] md:w-[240px] mr-5 md:mr-0 bg-orange-400 text-black font-semibold rounded-full flex justify-center items-center ">
            <span className={`flex flex-row ${outfit.className} font-medium text-xs md:text-xl text-center  `}>Navigate Now <span className="ml-2 "><FaCircleArrowRight className='w-4 h-4 md:w-7  md:h-7'/></span>  </span>
            </Link>
            </div>
            </div>
            
            
            <PinContainer
        title="OFFICE LOCATION"
        href="https://www.google.com/maps/place/WeWork+Forum/@28.4957826,77.0922101,15.49z/data=!4m6!3m5!1s0x390d19b66c8c2f21:0xb8120a4412f7ea62!8m2!3d28.4968821!4d77.0919037!16s%2Fg%2F11gxb2sl77?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
      >
        <div className='w-[100px] h-[220px] md:w-[250px] md:h-[500px] lg:w-[250px] lg:h-[500px] xl:w-[300px] xl:h-[500px]'>
            <img src="/map.png" alt="image" className='w-[130px] h-[250px] md:w-[330px] md:h-[530px]  object-cover'></img>
            </div>
            </PinContainer>

        </section>
    )
}