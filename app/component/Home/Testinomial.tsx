'use client'
import { AnimatedTestimonials } from "@/components/ui/animated-testinomials";
import { Outfit } from 'next/font/google'
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})
export function Testinomial(){

    const testimonials = [
        {
          quote:
            "The attention to detail and cleaning floor have completely transformed our workflow. This is exactly what I have been looking for in this competitive world",
          name: "Devansh Arora",
          designation: "Sweeper at Office",
          src: "/devansh.enc",
        },
        {
          quote:
            "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable. Everthing is good do work work work",
          name: "Jeevansh Sharma",
          designation: "Free Lancer",
          src: "/jeevansh2.png",
        },
        {
          quote:
            "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple. Stay focused and work harder you will eventually reach your goal",
          name: "Arpit Mehendiratta",
          designation: "Free lancer",
          src: "/arpit.jpg",
        },
        {
          quote:
            "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
          name: "Gautam Sachdeva",
          designation: "Business Man ",
          src: "/gaut.jpeg",
        },
        {
          quote:
            "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
          name: "Lisa Thompson",
          designation: "VP of Technology at FutureNet",
          src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ];
    return(
        <section className=" h-[800px] w-screen flex flex-col bg-gray-50 items-center justify-center ">
    <div className="flex flex-row  items-center justify-center mt-16  ">
        <p className={`${outfit.className} text-7xl font-semibold relative  pb-4`}>What <span className={`${outfit.className} font-light`}>our clients say</span>  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-52 border-b-2 border-black"></span></p>
        <img src="/comma2.png" alt="vv" className="object-cover h-24 w-24 "></img>
    </div>
   

    <AnimatedTestimonials  testimonials={testimonials} />
   
        </section>
    )
}