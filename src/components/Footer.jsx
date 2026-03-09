import { NavLink } from "react-router-dom";
import { Linkedin, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const services = [
    { name: "Clarity Operating System™", path: "/operating-system" },
    { name: "Executive Alignment Session™", path: "/executive-alignment" },
    { name: "Relational Architecture™", path: "/relational-architecture" },
    { name: "Clarity AI Session", path: "/clarity-ai" },
    { name: "Professional Alignment System™", path: "/professional-alignment" },
  ];

  return (
    <footer className="bg-gradient-to-r from-black via-[#0a0f1f] to-black border-t border-[#1455c0]/30 mt-20 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row md:justify-between gap-10">

        {/* Logo and Description */}
        <div className="flex flex-col md:w-1/3">
          <NavLink to="/" className="flex items-center mb-4">
            <img src="/logo.png" alt="Clarity Logo" className="h-32 w-32 mr-3" />
          </NavLink>
          <p className="text-gray-400 text-sm leading-relaxed">
            A modern clarity system designed to help you make aligned decisions
            in life, work, and relationships.
          </p>

          {/* Email */}
          <a
            href="mailto:Info@clarityblueprintsystem.com"
            className="mt-4 flex items-center gap-2 text-md font-semibold text-gray-400 hover:text-[#3b82f6] transition"
          >
            <Mail className="hover:text-[#3b82f6] cursor-pointer transition" />
            Info@clarityblueprintsystem.com
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-10 md:w-2/3">

          {/* Main Pages */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2 text-md">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#1455c0] font-semibold"
                      : "hover:text-[#3b82f6] transition"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#1455c0] font-semibold"
                      : "hover:text-[#3b82f6] transition"
                  }
                >
                  About Clarity
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#1455c0] font-semibold"
                      : "hover:text-[#3b82f6] transition"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/privacy-policy"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#1455c0] font-semibold"
                      : "hover:text-[#3b82f6] transition"
                  }
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/terms-condition"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#1455c0] font-semibold"
                      : "hover:text-[#3b82f6] transition"
                  }
                >
                  Terms & Conditions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#1455c0] font-semibold"
                      : "hover:text-[#3b82f6] transition"
                  }
                >
                  FAQ
                </NavLink>
              </li>
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
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#1455c0] font-semibold"
                        : "hover:text-[#3b82f6] transition"
                    }
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
              <Linkedin className="hover:text-[#3b82f6] cursor-pointer transition" />
              <Instagram className="hover:text-[#3b82f6] cursor-pointer transition" />
              <Twitter className="hover:text-[#3b82f6] cursor-pointer transition" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-[#1455c0]/20 text-center py-6 text-gray-500 text-xs">
        © {new Date().getFullYear()} Clarity Blueprint. All rights reserved.
      </div>
    </footer>
  );
}