// import { ReactNode } from "react";

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html>
//       <body>{children}</body>
//     </html>
//   );
// }


// app/layout.tsx
// import "./globals.css";
// import { ReactNode } from "react";

// export const metadata = {
//   title: "AIMind | Your Companion for Mental Wellness",
//   description: "Empower your mental health with AI-powered tools, therapy, and community support.",
// };

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-[#f9fbfc] text-gray-800">{children}</body>
//     </html>
//   );
// }


import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIMind — Your Companion for Mental Wellness",
  description:
    "Empower your mental health with AI-powered tools, therapy, and a caring community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-gradient-to-b from-sky-50 to-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}



