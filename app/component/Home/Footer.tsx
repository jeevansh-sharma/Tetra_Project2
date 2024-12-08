
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'
import { Outfit } from 'next/font/google'
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})
export function Footer(){
    return(
        <section className="w-screen h-[70vh] bg-neutral-950">
            <div className="max-w-6xl  mx-auto flex flex-col">
                <div className="flex flex-row mt-24 space-x-24  justify-center">
                    <div className="flex flex-col items-center justify-center mb-6 ">
                        
                        <h2 className={`${outfit.className} text-[#EDEADE] font-bold  text-3xl`}>TetraEdTech</h2>


                    </div>
                    <div className="flex flex-col">
                        
                        <h2 className={`${outfit.className} text-[#EDEADE]  text-xl`}>Weebly themes<br/> pre-sale faqs<br/> submit a ticket
                        </h2>


                    </div>
                    <div className="flex flex-col">
                        
                        <h2 className={`${outfit.className} text-[#EDEADE]  text-xl`}>Services<br/> Theme Tweak
                        </h2>


                    </div>
                    <div className="flex flex-col">
                        
                        <h2 className={`${outfit.className} text-[#EDEADE] text-xl`}>Showcase<br/> Widget<br/> Support
                        </h2>


                    </div>
                    <div className="flex flex-col">
                        
                        <h2 className={`${outfit.className} text-[#EDEADE] text-xl`}>About Us<br/>Contact us<br/>Affiliates<br/>Resources
                        </h2>


                    </div>

                </div>
                <div>

                </div>

                <div className="text-center max-w-5xl ml-16 justify-center   h-px bg-[#EDEADE] opacity-35 mt-14 "></div>
                <div className='flex items-center justify-center mt-20 space-x-2 '>

                   <div className='flex justify-center items-center rounded-full border w-12 h-12'><FacebookIcon className='text-[#EDEADE] '/></div> 
                   <div className='flex justify-center items-center rounded-full border w-12 h-12'><TwitterIcon className='text-[#EDEADE] '/></div> 
                   <div className='flex justify-center items-center rounded-full border w-12 h-12'><YoutubeIcon className='text-[#EDEADE] '/></div> 
                   <div className='flex justify-center items-center rounded-full border w-12 h-12'><InstagramIcon className='text-[#EDEADE] '/></div> 
                </div>
                <div className='flex items-center justify-center mt-3 '>
                    <p className={`${outfit.className} font-normal text-[#EDEADE] `}>@Copyright. All rights reserved. </p>
                </div>

            </div>
           
        </section>
    )
}