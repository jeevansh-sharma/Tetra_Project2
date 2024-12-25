import TextBorderAnimation from "@/components/animata/text/text-border-animation";

export function NavbarTop(){
    return (
        <div className='w-full h-16 bg-[#282828]  '>
            <div className='flex flex-row items-center px-5'>
                <img src='/log2.png' className='object-cover h-16 w-24'></img>
                <div className='flex flex-row items-center justify-between gap-x-14 ml-[25%]'>
                    <TextBorderAnimation text="Service" className="text-sm text-white" />
                    <TextBorderAnimation text="Portfolio" className="text-sm text-white" />
                    <TextBorderAnimation text="About us" className="text-sm text-white" />
                    <TextBorderAnimation text="Our Team" className="text-sm text-white" />
                    
                </div>
                <button className='bg-transparent text-white border border-white px-6 ml-[20%]  rounded-xl text-sm'>Contact</button>
            </div>
        </div>
    )
}