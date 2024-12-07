import { InView } from "@/components/motionui/inView";

import { Outfit } from 'next/font/google'
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})
export function Overview(){
    return(
        <div className='mt-20 mb-20  max-w-6xl mx-auto flex flex-row justify-between '>
   
  <div className='flex flex-col px-5  max-w-lg'>
  <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ margin: '0px 0px -200px 0px' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
    <h1 className={`${outfit.className}font-semibold text-7xl`}>Discover<br/> Our <span className='font-extralight' >Studio</span></h1>
    <p className={`${outfit.className} text-base text-gray-400 mt-16`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus non earum officiis odio cumque in, tempora doloremque praesentium natus possimus ratione ipsam eligendi harum, laudantium itaque iure dolorum debitis. Temporibus quas dolores esse ad quasi eos eveniet similique? Et dignissimos at nemo non! Ab ipsam consequuntur ipsa nam, fugiat nulla!</p>
    <p className={`${outfit.className} text-base text-gray-400 mt-16`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus non earum officiis odio cumque in, tempora doloremque praesentium natus possimus ratione ipsam eligendi harum, laudantium itaque iure dolorum debitis. Temporibus quas dolores esse ad quasi eos eveniet similique? Et dignissimos at nemo non! Ab ipsam consequuntur ipsa nam, fugiat nulla!</p>

  </InView>
  </div>
  <div className='flex items-center justify-center px-36'>
  
  <img src="/over1.jpg" alt='ok' className='w-full h-full ml-16  ' />
  
     

    

  </div>
  
</div>

    )
}