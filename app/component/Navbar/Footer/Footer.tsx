export default function Index() {
  return (
    <div className="flex w-full justify-between gap-10 text-xs mt-6">
      <a
        href="https://www.instagram.com/tetraedtechlimited/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-300 transform hover:scale-110 hover:text-[#F97316]"
      >
        Instagram
      </a>
      <a
        href="https://www.facebook.com/tetraedtechlimited/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-300 transform hover:scale-110 hover:text-[#F97316]"
      >
        Facebook
      </a>
      <a
        href="https://www.linkedin.com/company/tetraedtechlimited?originalSubdomain=in"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-300 transform hover:scale-110 hover:text-[#F97316]"
      >
        LinkedIn
      </a>
    </div>
  );
}