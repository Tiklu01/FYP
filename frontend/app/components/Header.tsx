

// "use client";
// import { useState } from "react";
// import { Menu, Brain } from "lucide-react";

// export default function Header() {
//     const [open, setOpen] = useState(false);

//     return (
//         <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-100">
//             <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//                 <div className="flex items-center gap-3">
//                     {/* Brain Icon */}
//                     <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-700">
//                         <Brain className="w-6 h-6" />
//                     </div>
//                     {/* Project Name - AIMind */}
//                     <span className="font-extrabold text-2xl md:text-3xl text-slate-900">
//                         AIMind
//                     </span>
//                 </div>

//                 {/* Navbar with slightly increased font */}
//                 <nav className="hidden md:flex items-center gap-8 text-slate-700 font-medium text-lg">
//                     <a href="#features" className="hover:text-sky-700">Features</a>
//                     <a href="#community" className="hover:text-sky-700">Community</a>
//                     <a href="#about" className="hover:text-sky-700">About</a>
//                     <a href="#contact" className="hover:text-sky-700">Contact</a>
//                 </nav>

//                 <div className="flex items-center gap-3">
//                     <a
//                         href="/(auth)/login"
//                         className="hidden md:inline-block px-5 py-3 rounded-lg bg-sky-600 text-white text-lg font-medium hover:bg-sky-700 transition"
//                     >
//                         Sign in
//                     </a>
//                     <button
//                         onClick={() => setOpen(!open)}
//                         className="md:hidden p-3 rounded-md hover:bg-sky-50"
//                     >
//                         <Menu className="w-6 h-6 text-slate-700" />
//                     </button>
//                 </div>

//             </div>

//             {open && (
//                 <div className="md:hidden bg-white border-t border-slate-100 py-4">
//                     <nav className="flex flex-col items-center gap-3 text-lg">
//                         <a href="#features" onClick={() => setOpen(false)}>Features</a>
//                         <a href="#community" onClick={() => setOpen(false)}>Community</a>
//                         <a href="#about" onClick={() => setOpen(false)}>About</a>
//                         <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
//                         <a
//                             href="/(auth)/login"
//                             className="px-4 py-2 mt-2 rounded-lg bg-sky-600 text-white"
//                         >
//                             Sign in
//                         </a>
//                     </nav>
//                 </div>
//             )}
//         </header>
//     );
// }

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { Menu, Brain } from "lucide-react";

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-100">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//         <div className="flex items-center gap-3">
//           <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-700">
//             <Brain className="w-6 h-6" />
//           </div>
//           <span className="font-extrabold text-2xl md:text-3xl text-slate-900">
//             AIMind
//           </span>
//         </div>

//         <nav className="hidden md:flex items-center gap-8 text-slate-700 font-medium text-lg">
//           <a href="#features" className="hover:text-sky-700">Features</a>
//           <a href="#community" className="hover:text-sky-700">Community</a>
//           <a href="#about" className="hover:text-sky-700">About</a>
//           <a href="#contact" className="hover:text-sky-700">Contact</a>
//         </nav>

//         <div className="flex items-center gap-3">
//           <Link
//             href="/login"
//             className="hidden md:inline-block px-5 py-3 rounded-lg bg-sky-600 text-white text-lg font-medium hover:bg-sky-700 transition"
//           >
//             Sign in
//           </Link>
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden p-3 rounded-md hover:bg-sky-50"
//           >
//             <Menu className="w-6 h-6 text-slate-700" />
//           </button>
//         </div>
//       </div>

//       {open && (
//         <div className="md:hidden bg-white border-t border-slate-100 py-4">
//           <nav className="flex flex-col items-center gap-3 text-lg">
//             <a href="#features" onClick={() => setOpen(false)}>Features</a>
//             <a href="#community" onClick={() => setOpen(false)}>Community</a>
//             <a href="#about" onClick={() => setOpen(false)}>About</a>
//             <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

//             <Link
//               href="/login"
//               className="px-4 py-2 mt-2 rounded-lg bg-sky-600 text-white w-3/4 text-center"
//               onClick={() => setOpen(false)}
//             >
//               Sign in
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, Brain } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Project Name */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-700">
            <Brain className="w-6 h-6" />
          </div>
          <span className="font-extrabold text-2xl md:text-3xl text-slate-900">
            AIMind
          </span>
        </Link>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-8 text-slate-700 font-medium text-lg">
          <a href="#features" className="hover:text-sky-700">Features</a>
          <a href="#community" className="hover:text-sky-700">Community</a>
          <a href="#about" className="hover:text-sky-700">About</a>
          <a href="#contact" className="hover:text-sky-700">Contact</a>
        </nav>

        {/* Sign in button + mobile menu */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden md:inline-block px-5 py-3 rounded-lg bg-sky-600 text-white text-lg font-medium hover:bg-sky-700 transition"
          >
            Sign in
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-3 rounded-md hover:bg-sky-50"
          >
            <Menu className="w-6 h-6 text-slate-700" />
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4">
          <nav className="flex flex-col items-center gap-3 text-lg">
            <a href="#features" onClick={() => setOpen(false)}>Features</a>
            <a href="#community" onClick={() => setOpen(false)}>Community</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

            <Link
              href="/login"
              className="px-4 py-2 mt-2 rounded-lg bg-sky-600 text-white w-3/4 text-center"
              onClick={() => setOpen(false)}
            >
              Sign in
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}



