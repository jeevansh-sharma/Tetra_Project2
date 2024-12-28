import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Index() {
  return (
    <div className="flex w-full justify-between gap-10 text-xs mt-6">
      <a
        href="https://www.instagram.com/tetraedtechlimited/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-300 transform flex flex-col items-center text-xs text-gray-400 hover:scale-110 hover:text-[#F97316]"
      >
        <FaInstagram size={18} className="text-xl mb-2 text-gray-400 " />
        Instagram
      </a>
      <a
        href="https://www.facebook.com/tetraedtechlimited/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-300 transform flex flex-col text-gray-400 items-center hover:scale-110 hover:text-[#F97316]"
      >
        <FaFacebook size={18} className="text-xl mb-2 text-gray-400" />
        Facebook
      </a>
      <a
        href="https://www.linkedin.com/company/tetraedtechlimited?originalSubdomain=in"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-300 transform flex flex-col text-gray-400 items-center hover:scale-110 hover:text-[#F97316]"
      >
        <FaLinkedin size={18} className="text-xl mb-2 text-gray-400" />
        LinkedIn
      </a>
    </div>
  );
}
