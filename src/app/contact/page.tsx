'use client';
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  const socials = [
    { name:"Instagram", link:"https://www.instagram.com/nastheticcc?igsh=MTJmaDVnNmN5MjdxZw==" },
    { name:"Tiktok", link:"https://www.tiktok.com/@nastheticsjh?_t=ZS-8z22YbmMSYi&_r=1" },
    { name:"Spotify", link:"https://open.spotify.com/playlist/5JVBTaaUx0PwWXcuYeTMII?si=hqNaRYhHQ2uDyEhQ5SR5pg&pi=a-KYq3tA5uSgGq" },
    { name:"Youtube", link:"https://youtube.com/@nastudieys?si=xgF9blOljgHOu3eX" },
    { name:"Locket", link:"https://locket.cam/inwawaworld" },
  ];

  return (
    <motion.div
      initial={{ opacity:0, y:20 }}
      animate={{ opacity:1, y:0 }}
      transition={{ duration:0.5 }}
      className="max-w-md mx-auto text-center px-4 py-8"
    >
      {/* Judul */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Contact</h1>

      {/* Daftar sosial */}
      <div className="flex flex-col gap-3 mb-6">
        {socials.map((s,i)=>(
          <a 
            key={i} 
            href={s.link} 
            target="_blank" 
            className="bg-white text-black p-2 rounded shadow text-center hover:bg-gray-200"
          >
            {s.name}
          </a>
        ))}
      </div>

      {/* Tombol navigasi */}
<div className="flex justify-center gap-4 flex-wrap mt-6">
  <Link href="/" className="bg-purple-400 text-white p-2 rounded shadow hover:bg-purple-500">Home</Link>
  <Link href="/about" className="bg-purple-400 text-white p-2 rounded shadow hover:bg-purple-500">About</Link>
  <Link href="/projects" className="bg-purple-400 text-white p-2 rounded shadow hover:bg-purple-500">Projects</Link>
  <Link href="/skills" className="bg-purple-400 text-white p-2 rounded shadow hover:bg-purple-500">Skills</Link>
</div>

    </motion.div>
  );
}