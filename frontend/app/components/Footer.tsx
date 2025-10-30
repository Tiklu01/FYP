import { Github, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-white text-lg">AIMind</h3>
          <p className="mt-2 text-slate-400 text-sm">
            Empowering mental health through AI, empathy, and connection.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-sky-400"><Twitter /></a>
            <a href="#" className="hover:text-sky-400"><Instagram /></a>
            <a href="#" className="hover:text-sky-400"><Github /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} AIMind. All rights reserved.
      </div>
    </footer>
  );
}
