
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})
export function LetsTalk(){
    return (
        <div className="flex flex-col  bg-none max-w-5xl mx-auto mb-24 ">
            <div className="w-full text-center pt-24 pb-12 ">
            <h1 className={`${outfit.className} font-semibold text-7xl`}> Let&apos;s <span className='font-extralight' >Talk</span></h1>

            </div>
            <div className='w-[60wh] flex  flex-col items-start  mx-auto  '>
              <div className='flex flex-row py-3 '>
                <div className='bg-black border border-white rounded-full flex items-center justify-start w-[330px] h-11 pl-7 py-1'><h1 className={`${outfit.className} font-extrabold text-xl text-white`}>Phone <span className={`${outfit.className} font-light`}> Number</span></h1></div>
                <h1 className={`${outfit.className} font-normal text-center py-2 ml-12 text-xl`}>+91 9306706661 </h1>

              </div>
              <div className='flex flex-row py-3 '>
                <div className='bg-black border border-white rounded-full flex items-center justify-start w-[330px] h-11 pl-7 py-1'><h1 className={`${outfit.className} font-extrabold text-xl text-white`}>Email<span className={`${outfit.className} font-light`}> Id</span></h1></div>
                <h1 className={`${outfit.className} font-normal text-center py-2 ml-12 text-xl`}>infotetraedtech@gmail.com </h1>

              </div>
              <div className='flex flex-row py-3 '>
                <div className='bg-black border border-white rounded-full  flex items-center justify-start w-[330px] h-11 pl-7 py-1'><h1 className={`${outfit.className} font-extrabold text-xl  text-white`}>Head<span className={`${outfit.className} font-light`}> Office</span> Address</h1></div>
                <div className='flex'>

                <h1 className={`${outfit.className} font-normal text-left py-2 ml-12 text-xl`}>WeWork DLF Phase 3 Cyber<br/> City, Gurugram </h1>
                </div>

              </div>
              <div className='flex flex-row py-3 '>
                <div className='bg-black border border-white rounded-full  flex items-center justify-start w-[330px] h-11 pl-7 py-1'><h1 className={`${outfit.className} font-extrabold text-xl  text-white`}>Corporate{" "}<span className={`${outfit.className} font-light`}> Office{" "}</span> Address</h1></div>
                <div className='flex'>

                <h1 className={`${outfit.className} font-normal text-left py-2 ml-12 text-xl`}>9th Floor, Tricity Trade Tower,<br/>
Patiala Rd, nearby Radisson<br/>
hotel, Zirakpur, Nabha, Punjab<br/>
140603
 </h1>
                </div>

              </div>
            
              

     
       

            </div>

        </div>
    )
}