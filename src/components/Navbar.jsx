import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const Navbar = ({visible=true}) => {
  return (
    <header
      className={`fixed top-0 w-full z-50 bg-gray-900 shadow-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ color: "white" }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo or Name */}
        <div
          className="font-bold tracking-wider"
          style={{ color: 'white', fontSize: '30px',fontFamily:"monospace", font:"bold" }}
        >
          Let's connect 🤝
        </div>


        {/* Social Icons */}
        <div className="flex gap-6 md:gap-10 text-lg px-2">
        <a 
            href="https://github.com/harshitdixit14" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition duration-300 hover:opacity-70"
            style={{ color: 'white', fontSize: '40px'}}
        >
            <FaGithub />
        
        </a>
        </div>
        <div className="flex gap-6 md:gap-10 text-lg px-2">
        <a 
            href="https://www.linkedin.com/in/harshit-dixit-9b2471261/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition duration-300 hover:opacity-70"
            style={{ color: 'white' , fontSize: '40px'}}
        >
            <FaLinkedin />
        </a>
        </div>
        <div className="flex gap-6 md:gap-10 text-lg px-2">
        <a 
            href="https://leetcode.com/u/2sComplement/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition duration-300 hover:opacity-70"
            style={{ color: 'white' , fontSize: '40px'}}
        >
            <SiLeetcode />
        </a>
        </div>
        <div className="flex gap-6 md:gap-10 text-lg px-2">
        <a 
            href="mailto:harshitdixit188@gmail.com" 
            className="transition duration-300 hover:opacity-70"
            style={{ color: 'white' , fontSize: '40px'}}
        >
            <FaEnvelope />
        </a>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;