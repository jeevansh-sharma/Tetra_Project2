import { FocusCards } from "@/components/ui/FocusCards";


export function FocusCardsDemo() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "/1.png",
    },
    {
      title: "Valley of life",
      src: "/2.png",
    },
    {
      title: "Sala behta hi jayega",
      src: "/3.png",
    },
    {
      title: "Camping is for pros",
      src: "/4.png",
    },
    {
      title: "The road not taken",
      src: "/5.png",
    },
    {
      title: "The First Rule",
      src:  "/6.png",  
    },
  ];

  return(
    <>
    <div className="w-screen py-16 mb-4 ">
 
    <h1 className="text-6xl text-center font-bold  mb-16">Meet Our <span className="font-normal">team</span> </h1>
    
    
<FocusCards cards={cards} />
</div>
    </>

)
    
}
