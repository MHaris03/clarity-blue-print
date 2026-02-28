import { NavLink } from "react-router-dom";
import { Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const services = [
    { name: "Clarity Operating System™", path: "/operating-system" },
    { name: "Executive Alignment Session™", path: "/executive-aligement" },
    { name: "Relational Architecture™", path: "/relational-architecture" },
    { name: "Clarity AI Session", path: "/clarity-ai" },
    { name: "Professional Alignment System™", path: "/professional-aligement" },
  ];

  return (
    <footer className="bg-[#0b0b0b] border-t border-gray-800 mt-20 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row md:justify-between gap-10">

        {/* Logo and Description */}
        <div className="flex flex-col md:w-1/3">
          <NavLink to="/" className="flex items-center mb-4">
            <img src="/bg.png" alt="Clarity Logo" className="h-32 w-32 mr-3" />
            {/* <span className="text-xl font-bold text-white">Clarity Blueprint</span> */}
          </NavLink>
          <p className="text-gray-400 text-sm leading-relaxed">
            A modern clarity system designed to help you make aligned decisions
            in life, work, and relationships.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-10 md:w-2/3">
          {/* Main Pages */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2 text-md">
              <li><NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>Home</NavLink></li>
              <li><NavLink to="/about-us" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>About Clarity</NavLink></li>
              {/* <li><NavLink to="/services" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>The Work</NavLink></li> */}
              <li><NavLink to="/contact-us" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>Contact</NavLink></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-md">
              {services.map((service, i) => (
                <li key={i}>
                  <NavLink 
                    to={service.path} 
                    className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}
                  >
                    {service.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="flex gap-4 text-gray-400">
              <Linkedin className="hover:text-blue-500 cursor-pointer" />
              <Instagram className="hover:text-pink-500 cursor-pointer" />
              <Twitter className="hover:text-blue-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-800 text-center py-6 text-gray-500 text-xs">
        © {new Date().getFullYear()} Clarity Blueprint. All rights reserved.
      </div>
    </footer>
  );
}