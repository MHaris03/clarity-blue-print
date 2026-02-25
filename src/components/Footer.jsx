import { Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-4">Clarity Blueprint</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            A modern clarity system designed to help you make aligned decisions
            in life, work, and relationships.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Clarity</a></li>
            <li><a href="/services">The Work</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-4">Connect</h3>
          <div className="flex gap-4 text-gray-400">
            <Linkedin className="hover:text-blue-500 cursor-pointer" />
            <Instagram className="hover:text-pink-500 cursor-pointer" />
            <Twitter className="hover:text-blue-400 cursor-pointer" />
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 text-center py-6 text-gray-500 text-xs">
        © {new Date().getFullYear()} Clarity Blueprint. All rights reserved.
      </div>
    </footer>
  );
}