import { FocusCards } from "@/components/ui/FocusCards";
import { Outfit } from "next/font/google";

// Import the 'Outfit' font with proper usage
const outfit = Outfit({ subsets: ["latin"] });

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Aarav Singh",
      src: "/t1.jpg",
    },
    {
      title: "Isha Sharma",
      src: "/t1.jpg",
    },
    {
      title: "Vivaan Gupta",
      src: "/t1.jpg",
    },
    {
      title: "Ananya Mishra",
      src: "/t1.jpg",
    },
    {
      title: "Kabir Mehta",
      src: "/t1.jpg",
    },
    {
      title: "Diya Verma",
      src: "/t1.jpg",
    },
    {
      title: "Rohan Khanna",
      src: "/t1.jpg",
    },
    {
      title: "Saanvi Choudhary",
      src: "/t1.jpg",
    },
    {
      title: "Aryan Patel",
      src: "/t1.jpg",
    },
    {
      title: "Avni Saxena",
      src: "/t1.jpg",
    },
    {
      title: "Krishna Nair",
      src: "/t1.jpg",
    },
    {
      title: "Aditi Deshmukh",
      src: "/t1.jpg",
    },
  ];

  return (
    <>
      <div className="w-screen pt-16 pb-0 md:pt-16 md:pb-16 mb-0 md:mb-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center space-x-6 w-full">
            <h1 className="text-4xl md:text-7xl text-black ">
              <span className={`${outfit.className} font-semibold`}>
                Meet Our
              </span>{" "}
              <span className={`${outfit.className} font-extralight`}>
                Team
              </span>
            </h1>
            <div className="w-[8rem] mb-10 mt-2 h-[0.3rem] bg-[#F97316]" />
          </div>
        </div>

        <FocusCards cards={cards} />
      </div>
    </>
  );
}
