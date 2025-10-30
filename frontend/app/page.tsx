// export default function Home() {
//   return (
//     <main>
//       <h1>Welcome to Next.js!</h1>
//     </main>
//   );
// }

// app/page.tsx
// import Image from "next/image";

// export default function HomePage() {
//   return (
//     <main className="min-h-screen flex flex-col items-center justify-start py-12 px-6 bg-white">
//       {/* Header */}
//       <header className="w-full max-w-3xl flex items-center justify-between mb-10">
//         <div className="flex items-center space-x-2">
//           <div className="w-6 h-6 bg-[#DCE6FA] rounded-full" />
//           <h1 className="text-2xl font-semibold text-[#1E2A3A]">AIMind</h1>
//         </div>

//         <nav className="flex items-center space-x-8 text-[#1E2A3A]">
//           <a href="#" className="hover:text-blue-600">Home</a>
//           <button className="px-4 py-2 bg-[#E0E9FF] text-[#1E2A3A] font-medium rounded-md hover:bg-[#C8D8FF]">
//             Sign in
//           </button>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section className="w-full max-w-3xl text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A3A] mb-4">
//           Your companion for mental wellness
//         </h2>
//         <p className="text-gray-600 mb-8 text-lg">
//           Empower your mental health with AI-powered tools, therapy, and community support.
//         </p>

//         <button className="px-6 py-3 bg-[#1E2A3A] text-white rounded-md font-medium mb-10 hover:bg-[#2C3E50]">
//           Get started
//         </button>

//         <div className="flex justify-center mb-10">
//           <Image
//             src="/illustration.png"
//             alt="Wellness illustration"
//             width={200}
//             height={200}
//             className="rounded-md"
//           />
//         </div>

//         <div className="flex justify-center gap-6 mb-12">
//           <span className="flex items-center space-x-2 text-[#1E2A3A] font-medium">
//             <span>💡</span> <span>AI-powered</span>
//           </span>
//           <span className="flex items-center space-x-2 text-[#1E2A3A] font-medium">
//             <span>💬</span> <span>Therapy</span>
//           </span>
//           <span className="flex items-center space-x-2 text-[#1E2A3A] font-medium">
//             <span>👥</span> <span>Community</span>
//           </span>
//         </div>
//       </section>

//       {/* Community Section */}
//       <section className="w-full max-w-3xl bg-[#F5F8FF] rounded-2xl p-6 shadow-sm">
//         <h3 className="text-xl font-semibold text-[#1E2A3A] mb-4">Community</h3>
//         <div className="flex items-start space-x-3">
//           <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-medium text-gray-700">
//             J
//           </div>
//           <div>
//             <p className="font-semibold text-[#1E2A3A]">John</p>
//             <p className="text-gray-600 mt-1">
//               I found the meditation playlist very helpful!
//             </p>
//             <div className="flex space-x-4 mt-3 text-gray-600">
//               <button className="hover:text-blue-600">❤️ Like</button>
//               <button className="hover:text-blue-600">💬 Comment</button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}





