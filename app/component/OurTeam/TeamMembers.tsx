import { FocusCards } from "@/components/ui/FocusCards";


export function FocusCardsDemo() {
  const cards = [
    {
      title: "Parveen kumar",
      src: "/t1.jpg",
    },
    {
      title: "Parveen kumar",
      src: "/t1.jpg",
    },
    {
      title: "Parveen kumar",
      src: "/t1.jpg",
    },
    {
      title: "Gautam kumar",
      src: "/t1.jpg",
    },
    {
      title: "Randeep kumar",
      src: "/t1.jpg",
    },
    {
      title: "Parveen kumar",
      src: "/t1.jpg", 
    },
    {
      title: "Parveen kumar",
      src: "/t1.jpg", 
    },
    {
      title: "Parveen kumar",
      src: "/t1.jpg", 
    },
    {
      title: "Parveen kumar",
      src: "/t1.jpg", 
    },
    {
      title: "Parveen kumar",
      src: "/t1.jpg", 
    },
    {
      title: "Parveen kumar",
      src: "/t1.jpg", 
    },
    {
      title: "Parveen kumar",
      src: "/t1.jpg", 
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
