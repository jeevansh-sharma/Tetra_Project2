import Image from "next/image";

import { Marquee, TextMask } from "@/animation";

export default function Testimonials() {
	const phares = ["what my"];
	const phares1 = ["client says"];
	return (
		<section className="py-[80px] bg-[#e1e1e1] relative ">
			<div className="w-full flex justify-start padding-x pb-[40px] pl-[60px]">
				<h1 className="text-[#202020] uppercase leading-none sm:text-[80px] md:text-[100px] text-[100px] font-bold overflow-hidden">
					<TextMask>{phares}</TextMask>
					<TextMask>{phares1}</TextMask>
				</h1>
			</div>
			<div className="w-full flex flex-col gap-[20px] bg-[#e1e1e1] relative ">
				<Marquee baseVelocity={-0.2}>
					<div className="flex m-0 gap-x-[20px] items-center mr-[20px] bg-[#e1e1e1] relative z-[60]">
						{testimonials.slice(0, 4).map((item) => (
							<div
								className="flex flex-col gap-[20px]"
								key={item.id}>
								<div className="min-w-[500px] min-h-[400px] py-[20px] px-[40px] border border-[#222222]/10 rounded-[10px] bg-[#d6d5d5] flex flex-col gap-[20px] justify-between">
									<p className="text-black text-[30px] font-medium leading-tight tracking-wide">
										{item.text}
									</p>
									<div className="flex items-center gap-[20px]">
										<Image
											src={item.src}
											alt="asd"
											width={50}
											height={50}
											className="rounded-full h-[60px] w-[60px]"
										/>
										<div className="flex flex-col">
											<h1 className="text-black text-[18px] font-medium leading-tight">
												{item.name}
											</h1>
											<p className="text-black text-[16px] font-normal leading-tight">
												{item.username}
											</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</Marquee>
				<Marquee baseVelocity={0.1}>
					<div className="flex m-0 gap-x-[20px] items-center mr-[20px] bg-[#e1e1e1] relative z-[60]">
						{testimonials.slice(5).map((item) => (
							<div
								className="flex flex-col gap-[20px]"
								key={item.id}>
								<div className="min-w-[500px] min-h-[400px] py-[20px] px-[40px] border border-[#222222]/10 rounded-[10px] bg-[#d6d5d5] flex flex-col gap-[20px] justify-between">
									<p className="text-black text-[30px] font-medium leading-tight tracking-wide">
										{item.text}
									</p>
									<div className="flex items-center gap-[20px]">
										<Image
											src={item.src}
											alt="asd"
											width={50}
											height={50}
											className="rounded-full h-[60px] w-[60px]"
										/>
										<div className="flex flex-col">
											<h1 className="text-black text-[18px] font-medium leading-tight">
												{item.name}
											</h1>
											<p className="text-black text-[16px] font-normal leading-tight">
												{item.username}
											</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</Marquee>
			</div>
		</section>
	);
}
export const testimonials = [
    {
        id: 1,
        text: "Tetra EdTech's web development skills are outstanding! They transformed our outdated site into a modern, responsive masterpiece. Highly recommended!",
        src: "/person.png",
        name: "Amit Sharma",
        username: "@amitdeveloper",
    },
    {
        id: 2,
        text: "The attention to detail Tetra EdTech brought to our project was amazing. They exceeded our expectations and delivered on time.",
		src: "/person.png",
        name: "Priya Patel",
        username: "@priyadesigns",
    },
    {
        id: 3,
        text: "Tetra EdTech is a fantastic web development company! They quickly understood our needs and built a site that's both functional and beautiful.",
		src: "/person.png",
        name: "Ravi Kumar",
        username: "@ravidev",
    },
    {
        id: 4,
        text: "Working with Tetra EdTech was a pleasure. Their creativity and technical skills took our website to the next level!",
        src: "/person.png",
        name: "Anjali Verma",
        username: "@anjaliweb",
    },
    {
        id: 5,
        text: "I’ve worked with many developers, but Tetra EdTech stands out. Their code is clean, their designs are user-friendly, and they always meet deadlines.",
		src: "/person.png",
        name: "Vikram Desai",
        username: "@vikramdev",
    },
    {
        id: 6,
        text: "Tetra EdTech's expertise in web development is top-notch. Our new e-commerce platform runs smoother and faster thanks to them.",
		src: "/person.png",
        name: "Sneha Rao",
        username: "@snehasites",
    },
    {
        id: 7,
        text: "Tetra EdTech not only delivered a visually stunning site but also optimized it for SEO, giving us a boost in traffic. Highly impressed!",
        src: "/person.png",
        name: "Karan Singh",
        username: "@karanweb",
    },
    {
        id: 8,
        text: "If you're looking for a reliable, talented web developer, Tetra EdTech is your go-to. They’re professional, fast, and creative!",
		src: "/person.png",
        name: "Neha Agarwal",
        username: "@nehaweb",
    },
    {
        id: 9,
        text: "Tetra EdTech’s web work is incredible. Our site's performance and user experience have improved significantly since the redesign.",
		src: "/person.png",
        name: "Rajesh Mehta",
        username: "@rajeshtech",
    },
    {
        id: 10,
        text: "Tetra EdTech is a genius when it comes to web development. They were able to turn our ideas into a beautiful, functional reality.",
		src: "/person.png",
        name: "Kavita Joshi",
        username: "@kavitadesigns",
    },
    {
        id: 11,
        text: "We had a complicated project, and Tetra EdTech handled it with ease. Their problem-solving skills are unmatched.",
		src: "/person.png",
        name: "Sandeep Chauhan",
        username: "@sandeepweb",
    },
    {
        id: 12,
        text: "Tetra EdTech's professionalism and passion for web development truly shine through in their work. We couldn’t be happier with our website!",
        src: "/person.png",
        name: "Isha Sharma",
        username: "@ishadesigns",
    }
];


