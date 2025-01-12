import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

export function LetsTalk() {
  return (
    <div className="flex flex-col md:flex-col bg-none overflow-hidden max-w-screen md:max-w-3xl lg:max-w-[1000px] xl:max-w-5xl mx-3 md:mx-auto mb-24">
      {/* Heading Section */}
      <div className="w-full text-center pt-1 md:pt-12 pb-8">
        <h1
          className={`${outfit.className} font-semibold text-4xl md:text-5xl lg:text-7xl`}
        >
          Let&apos;s <span className="font-extralight">Talk</span>
        </h1>
      </div>

      {/* Contact Information */}
      <div className="flex flex-col items-center md:items-start  mx-auto w-full md:w-[80%] lg:w-[60%]">
        {/* Phone Number */}
        <div className="flex flex-col md:flex-row gap-x-7 lg:gap-x-0 items-center sm:items-start  py-3">
          <div className="bg-black border border-white rounded-full flex items-center justify-center md:justify-start w-[310px] md:w-[330px] h-11 md:h-11 pl-0 md:pl-7 py-1">
            <h1
              className={`${outfit.className} font-extrabold text-lg sm:text-lg lg:text-xl text-white`}
            >
              Phone <span className={`${outfit.className} font-light`}>Number</span>
            </h1>
          </div>
          <h1
            className={`${outfit.className} font-normal text-left sm:text-left mt-2 sm:mt-0 sm:ml-6 text-lg sm:text-lg lg:text-xl`}
          >
            +91 9315515944
          </h1>
        </div>

        {/* Email ID */}
        <div className="flex flex-col md:flex-row items-center gap-x-7 lg:gap-x-0 sm:items-start py-3">
          <div className="bg-black border border-white rounded-full flex items-center justify-center md:justify-start w-[310px] md:w-[330px] h-11 md:h-11 pl-0 md:pl-7 py-1">
            <h1
              className={`${outfit.className} font-extrabold text-lg sm:text-lg lg:text-xl text-white`}
            >
              Email<span className={`${outfit.className} font-light`}> Id</span>
            </h1>
          </div>
          <h1
            className={`${outfit.className} font-normal text-left sm:text-left mt-2 sm:mt-0 sm:ml-6 text-lg md:text-lg lg:text-xl`}
          >
            infotetraedtech@gmail.com
          </h1>
        </div>

        {/* Head Office Address */}
        <div className="flex flex-col md:flex-row items-center gap-x-7 lg:gap-x-0 sm:items-start py-3">
          <div className="bg-black border border-white rounded-full flex items-center justify-center md:justify-start w-[310px] md:w-[330px] h-11 md:h-11 pl-0 md:pl-7 py-1">
            <h1
              className={`${outfit.className} font-extrabold text-lg sm:text-lg lg:text-xl text-white`}
            >
              Head<span className={`${outfit.className} font-light`}> Office</span>{" "}
              Address
            </h1>
          </div>
          <h1
            className={`${outfit.className} font-normal text-justify sm:text-left mt-2 sm:mt-0 sm:ml-6 text-lg md:text-lg lg:text-xl`}
          >
            Wework Forum, DLF Cyber <br/> City, DLF Phase 3,
            Sector 24,<br className=''/> Gurugram, Haryana 122002
          </h1>
        </div>

        {/* Corporate Office Address */}
        <div className=" flex  flex-col md:flex-row items-center sm:items-start gap-x-7 lg:gap-x-0 py-3">
          <div className="bg-black border border-white rounded-full flex items-center justify-center md:justify-start w-[310px] md:w-[330px] h-11 md:h-11 pl-0 md:pl-7 py-1">
            <h1
              className={`${outfit.className} font-extrabold text-lg sm:text-lg lg:text-xl text-white`}
            >
              Corporate{" "}
              <span className={`${outfit.className} font-light`}>Office</span>{" "}
              Address
            </h1>
          </div>
          <h1
            className={`${outfit.className} font-normal text-center px-6 md:px-0 md:text-left sm:text-left mt-2 sm:mt-0 sm:ml-6  text-lg md:text-lg lg:text-xl`}
          >
            9th Floor,Tricity Trade Tower, <br className='' />
            Patiala Rd, nearby Radisson <br className=''/>
            hotel, Zirakpur, Nabha,<br className=''/> Punjab 140603
          </h1>
        </div>
      </div>
    </div>
  );
}
