import { Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})
export function Innovative(){
    return(
        <section className="relative bg-[#e1e1e1] flex flex-col w-screen h-[450px]">
           <div className='flex w-full flex-col mt-16 justify-center'>
              <h1 className={`${outfit.className} text-center  font-bold text-4xl md:text-6xl lg:text-7xl `}>Reasonable <span className={`${outfit.className} font-light`}>Prices</span></h1>             
              <h1 className={`${outfit.className} text-center mt-0 md:mt-4 font-bold text-4xl md:text-6xl lg:text-7xl `}>For Innnovative     <span className={`${outfit.className} font-light`}>Solutions</span></h1>             

           </div>
           <div>
            <h1 className={`${outfit.className} text-center text-[#6b6d70] mt-[40px] md:mt-[65px] font-normal text-sm md:text-base lg:text-xl `}>At Tetra Edtech, we offer affordable solutions to help educational institutions<br/>
achieve excellence. Partner with us to enhance quality. 
</h1>
           </div>
           <div className='hidden md:block absolute left-0 top-60 md:top-72 lg:top-80 border border-[#6b6d70] w-8 md:w-20 lg:w-40 xl:w-64'></div>
           <div className='hidden md:block absolute right-0 top-60 md:top-72 lg:top-80 border border-[#6b6d70] w-8 md:w-20 lg:w-40 xl:w-64'></div>
        </section>
    )
}