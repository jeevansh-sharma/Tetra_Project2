import Link from "next/link";
import { motion } from "framer-motion";
import { TfooterItem } from "@/constants";
import { LinkHover, TextMask } from "@/animation";

export default function NewFooter() {
	const phrases = ["Are you Ready to start?"];
	return (
		<section
			className="w-full h-screen bg-[#e1e1e1] relative "
			id="contact">
			<div className="flex items-center justify-center flex-col h-full">
				<div className="w-full h-[8vh] " />
				<div className="flex items-center justify-center flex-col gap-y-[30px] w-full h-auto ">
					<div>
						<h1 className="text-[#202020] uppercase leading-none sm:text-[80px] md:text-[100px] text-[100px] font-bold tracking-tight">
							<TextMask>{phrases}</TextMask>
						</h1>
					</div>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ ease: "easeInOut", duration: 0.5, delay: 0.8 }}>
						<p className="text-[25px] text-[#202020] mt-[-20px] tracking-wider">
                        Click on the button:

						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}>
						<Link
							href={"mailto:Zainsoftwear11?subject=Portfolio%20Website"}
							className="uppercase text-[25px] text-[#202020] tracking-wider font-semibold">
							tetraEdTech@gmail.com
						</Link>
					</motion.div>
				</div>
				
			</div>
		</section>
	);
}
