import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
import { Outfit } from 'next/font/google';
import { Index } from './Curve';
import { motion } from 'framer-motion';
import TransitionLink from '../Transition';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

export function Footer() {
  return (
    <footer className="relative w-screen bg-neutral-950 text-[#EDEADE]">
      <Index />
      <div className="max-w-6xl mx-auto py-16 px-6 flex flex-col">
        {/* Main Row: All Sections in a Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0"
        >
          {/* Section 1: Company Name and Description */}
          <div className="flex flex-col items-start text-left space-y-4 max-w-xs">
            <h2 className={`${outfit.className} text-4xl font-semibold`}>TetraEdTech</h2>
            <p className={`${outfit.className} text-sm font-light`}>
              Empowering businesses and individuals with cutting-edge technology and solutions to
              achieve unparalleled growth.
            </p>
          </div>

          {/* Section 2: Main and Corporate Offices */}
          <div className="flex flex-col items-start space-y-6">
            <div>
              <h3 className={`${outfit.className} text-lg font-semibold mb-2`}>Main Office</h3>
              <p className={`${outfit.className} text-sm`}>
              Hd 458, Wework Dlf Forum, Dlf Qe,<br/> Gurgaon, Haryana, India, 122002
              </p>
            </div>
            <div>
              <h3 className={`${outfit.className} text-lg font-semibold mb-2`}>Corporate Office</h3>
              <p className={`${outfit.className} text-sm`}>
              Hd 460, Wework Dlf Forum, Dlf Qe,<br/> Zirakpur, Haryana, India, 122002
              </p>
            </div>
          </div>

          {/* Section 3: Quick Links */}
          <div className="flex flex-col items-start">
  <h3 className={`${outfit.className} text-lg font-semibold mb-4`}>Quick Links</h3>
  <ul className={`${outfit.className} text-sm space-y-2`}>
    {[
      { href: '/about_us', label: 'About Us' },
      { href: '/services', label: 'Services' },
      { href: '/contact_us', label: 'Contact Us' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/our_team', label: 'Our Team' },
    ].map(({ href, label }) => (
      <li key={href} className="group flex items-center space-x-2">
        <TransitionLink 
          href={href} 
          label={
            <span 
              className="group-hover:text-[#F97316] group-hover:translate-x-2 transition-all duration-300"
            >
              {label}
            </span>
          } 
        />
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="hidden group-hover:block text-[#F97316]"
        >
          →
        </motion.div>
      </li>
    ))}
  </ul>
</div>

          {/* Section 4: Contact Information */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className={`${outfit.className} text-lg font-semibold`}>Contact Information</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <FacebookIcon className="w-6 h-6 text-[#EDEADE] hover:text-white" />
              </a>
              <a href="#" aria-label="Twitter">
                <TwitterIcon className="w-6 h-6 text-[#EDEADE] hover:text-white" />
              </a>
              <a href="#" aria-label="YouTube">
                <YoutubeIcon className="w-6 h-6 text-[#EDEADE] hover:text-white" />
              </a>
              <a href="#" aria-label="Instagram">
                <InstagramIcon className="w-6 h-6 text-[#EDEADE] hover:text-white" />
              </a>
            </div>
            <p className={`${outfit.className} text-sm`}>
              Phone: +91 9898989898<br />
              Email: tetraedtech@gmail.com
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-[#EDEADE] opacity-30 my-8"></div>

        {/* Footer Bottom */}
        <div className="text-center">
          <p className={`${outfit.className} text-sm font-light`}>
            © 2024 TetraEdTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
