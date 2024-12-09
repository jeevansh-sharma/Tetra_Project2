import { Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})
export function Innovative(){
    return(
        <section className="relative bg-[#fffaf7] flex flex-col w-screen h-[450px]">
           <div className='flex w-full flex-col mt-16 justify-center'>
              <h1 className={`${outfit.className} text-center  font-bold text-7xl `}>Reasonable <span className={`${outfit.className} font-light`}>Prices</span></h1>             
              <h1 className={`${outfit.className} text-center mt-4 font-bold text-7xl `}>For Innnovative     <span className={`${outfit.className} font-light`}>Solutions</span></h1>             

           </div>
           <div>
            <h1 className={`${outfit.className} text-center text-[#6b6d70] mt-[65px] font-normal text-xl `}>At Tetra Edtech, we offer affordable solutions to help educational institutions<br/>
achieve excellence. Partner with us to enhance quality. 
</h1>
           </div>
           <div className='absolute left-0 top-80 border border-[#6b6d70] w-64'></div>
           <div className='absolute right-0 top-80 border border-[#6b6d70] w-64'></div>
        </section>
    )
}