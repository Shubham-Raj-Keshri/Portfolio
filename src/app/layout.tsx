import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubham Raj Keshri — Full Stack Engineer",
  description:
    "Full Stack Engineer specializing in React, Next.js, TypeScript, Node.js and PostgreSQL. Building scalable, modern web applications.",
  keywords: ["Shubham Raj Keshri", "Full Stack Engineer", "Frontend Developer", "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  authors: [{ name: "Shubham Raj Keshri" }],
  creator: "Shubham Raj Keshri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shubhamkeshri.dev",
    title: "Shubham Raj Keshri — Full Stack Engineer",
    description: "Full Stack Engineer specializing in React, Next.js, TypeScript, Node.js and PostgreSQL.",
    siteName: "Shubham Raj Keshri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Raj Keshri — Full Stack Engineer",
    description: "Full Stack Engineer specializing in React, Next.js, TypeScript, Node.js and PostgreSQL.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shubham Raj Keshri",
  jobTitle: "Full Stack Engineer",
  url: "https://shubhamkeshri.dev",
  sameAs: ["https://github.com/Shubham-Raj-Keshri", "https://www.linkedin.com/in/shubham-raj-keshri/"],
  email: "shubhamkeshri2020@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "India" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-[#050505] text-[#f5f5f7] antialiased">{children}</body>
    </html>
  );
}
