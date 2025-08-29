'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  const projects = [
    { name:"@ipnuippnuarjosari", img:"/ippnu.jpg", description:"Pertama kali ikut acara IPNU IPPNU Hari Santri Nasional 2025" },
    { name:"@bdi_vohiema", img:"/bdi.jpg", description:"Pertama kali juga jadi panitia Maulid Nabi 2024 di sekolah" }
  ];

  return (
    <motion.div
      initial={{ opacity:0, y:20 }}
      animate={{ opacity:1, y:0 }}
      transition={{ duration:0.5 }}
      className="max-w-4xl mx-auto text-center px-4 py-8"
    >
      {/* Judul */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Project</h1>

      {/* Grid Projects */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {projects.map((p,i)=>(
          <div key={i} className="bg-white p-4 rounded shadow text-center">
            <Image src={p.img} alt={p.name} width={300} height={200} className="mx-auto rounded" />
            <h2 className="font-semibold mt-2">{p.name}</h2>
            <p className="mt-1">{p.description}</p>
          </div>
        ))}
      </div>

      {/* Tombol Navigasi di bawah grid */}
      <div className="flex justify-center gap-4 flex-wrap mt-6">
        <Link href="/" className="bg-purple-400 text-white p-2 rounded shadow hover:bg-purple-500">Home</Link>
        <Link href="/about" className="bg-purple-400 text-white p-2 rounded shadow hover:bg-purple-500">About</Link>
        <Link href="/skills" className="bg-purple-400 text-white p-2 rounded shadow hover:bg-purple-500">Skills</Link>
        <Link href="/contact" className="bg-purple-400 text-white p-2 rounded shadow hover:bg-purple-500">Contact</Link>
      </div>
    </motion.div>
  );
}