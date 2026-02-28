import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, Cpu, Users, Layers, Activity, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Services data for desktop only
  const services = [
    { name: "Clarity Operating System", path: "/operating-system", description: "Personal decision & energy blueprint", icon: <Cpu size={20} className="text-[#1455c0]" /> },
    { name: "Executive Alignment Session", path: "/executive-aligement", description: "Strategic clarity under pressure", icon: <Activity size={20} className="text-[#1455c0]" /> },
    { name: "Relational Architecture", path: "/relational-architecture", description: "Communication & partnership alignment", icon: <Users size={20} className="text-[#1455c0]" /> },
    { name: "Clarity AI Session", path: "/clarity-ai", description: "Guided clarity through structured analysis", icon: <Layers size={20} className="text-[#1455c0]" /> },
    { name: "Professional Alignment System", path: "/professional-aligement", description: "Career & income architecture", icon: <Activity size={20} className="text-[#1455c0]" /> },
  ];

  const mobileServices = [
    { name: "Clarity Operating System", path: "/operating-system" },
    { name: "Executive Alignment Session", path: "/executive-aligement" },
    { name: "Relational Architecture", path: "/relational-architecture" },
    { name: "Clarity AI Session", path: "/clarity-ai" },
    { name: "Professional Alignment System", path: "/professional-aligement" },
  ];

  return (
    <nav className="bg-black text-white fixed w-full z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/">
          <img src='/Clarityblueprint.jpeg' alt="Clarity Logo" className="h-20 w-24" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className="hover:text-blue-500 transition" activeClassName="text-blue-500 font-semibold">Home</NavLink>
          <NavLink to="/about-us" className="hover:text-blue-500 transition" activeClassName="text-blue-500 font-semibold">About</NavLink>

          {/* Services Dropdown (Desktop Only) */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 hover:text-blue-500 transition"
            >
              Services <ChevronDown size={16} />
            </button>

            {servicesOpen && (
              <div className="absolute top-8 right-0 bg-[#111] border border-gray-800 rounded-lg shadow-lg w-80 py-2">
                {services.map((service, i) => (
                  <NavLink
                    key={i}
                    to={service.path}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-gray-900 transition"
                    activeClassName="bg-gray-900 border-l-4 border-[#1455c0]"
                    onClick={() => setServicesOpen(false)}
                  >
                    {service.icon}
                    <div>
                      <span className="font-medium text-gray-200">{service.name}</span>
                      <span className="block text-xs text-gray-400">{service.description}</span>
                    </div>
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/contact-us" className="hover:text-blue-500 transition" activeClassName="text-blue-500 font-semibold">Contact Us</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 h-full w-full bg-black border-r border-gray-800 p-6 flex flex-col z-50 transform transition-transform duration-300">

          {/* Logo and Close Button */}
          <div className="flex items-center justify-between mb-6">
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              <img src='/Clarityblueprint.jpeg' alt="Clarity Logo" className="h-20 w-24" />
            </NavLink>
            <button onClick={() => setIsOpen(false)}>
              <X size={26} />
            </button>
          </div>

          {/* Mobile Links with vertical spacing */}
          <div className="flex flex-col space-y-4">
            <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>Home</NavLink>
            <NavLink to="/about-us" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>About Clarity</NavLink>

            {mobileServices.map((service, i) => (
              <NavLink
                key={i}
                to={service.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}
              >
                {service.name}
              </NavLink>
            ))}

            <NavLink to="/contact-us" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>Contact Us</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}