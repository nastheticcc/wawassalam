'use client';
import { motion } from "framer-motion";
import Link from "next/link";

const skills = [
  "C#", "Java", "HTML", "CSS", "JavaScript", 
  "Github", "Git", "React", "Vite", "Flowgorithm", 
  "Flutter", "TypeScript"
];

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity:0, y:20 }}
      animate={{ opacity:1, y:0 }}
      transition={{ duration:0.5 }}
      className="max-w-3xl mx-auto text-center px-4 py-8"
    >
      {/* Judul */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Skills</h1>

      {/* Grid Skills */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {skills.map((s, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">{s}</div>
        ))}
      </div>

      {/* Tombol Navigasi di bawah grid */}
      <div className="flex justify-center gap-4 flex-wrap mt-6">
        <Link href="/" className="bg-purple-400 text-white p-2 rounded shadow hover:bg-purple-500">Home</Link>
        <Link href="/about" className="bg-purple-400 text-white p-2 rounded shadow hover:bg-purple-500">About</Link>
        <Link href="/projects" className="bg-purple-400 text-white p-2 rounded shadow hover:bg-purple-500">Projects</Link>
        <Link href="/contact" className="bg-purple-400 text-white p-2 rounded shadow hover:bg-purple-500">Contact</Link>
      </div>
    </motion.div>
  );
}