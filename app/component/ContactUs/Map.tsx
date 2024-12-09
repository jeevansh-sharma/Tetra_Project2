import { PinContainer } from '@/components/ui/animated3d-pin';
import { Outfit } from 'next/font/google'
import { FaCircleArrowRight } from "react-icons/fa6";
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})
export default function Map(){
    return(
        <section className="flex flex-row bg-neutral-950 h-screen w-screen">
            <div className="flex flex-col ml-32 mt-32">
                <h1 className={`font-bold text-white text-8xl`}>Navigate <span className={`font-normal`}>to</span>   </h1>
                <h1 className={`font-bold text-white text-8xl mt-6`}>Our <span className={`font-normal`}>Office</span> </h1>
                
            <div className='mt-14'>
            <button className="px-8 py-3 bg-orange-400 text-black font-semibold rounded-full flex items-center ">
            <span className={`flex flex-row ${outfit.className} font-medium text-xl items-center  `}>Navigate Now <span className="ml-2 "><FaCircleArrowRight size={28}/></span>  </span>
            </button>
            </div>
            </div>
            
            
            <PinContainer
        title="OFFICE LOCATION"
        href="https://www.google.com/maps/place/WeWork+Forum/@28.4957826,77.0922101,15.49z/data=!4m6!3m5!1s0x390d19b66c8c2f21:0xb8120a4412f7ea62!8m2!3d28.4968821!4d77.0919037!16s%2Fg%2F11gxb2sl77?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
      >
        <div className='  w-[300px] h-[500px]'>
            <img src="/map.png" alt="image" className='w-[330px] h-[530px]  object-cover'></img>
            </div>
            </PinContainer>

        </section>
    )
}