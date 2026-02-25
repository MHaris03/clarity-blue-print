import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ServicePage({ title, description, ctaLink, ctaText }) {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12 text-center">
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-500">
        {title}
      </h1>

      <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-10">
        {description}
      </p>

      {ctaLink && (
        <Link
          to={ctaLink}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition flex items-center gap-2"
        >
          {ctaText} <ArrowRight size={18} />
        </Link>
      )}
    </section>
  );
}