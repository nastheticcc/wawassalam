'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity:0, y:20 }}
      animate={{ opacity:1, y:0 }}
      transition={{ duration:0.5 }}
      className="text-center"
    >
      {/* Tambahan Judul */}
      <h2 className="text-4xl font-extrabold mb-6">WAWA'S PROFILE</h2>

      <Image
        src="/profile2.jpg"
        alt="Foto Profile"
        width={150}
        height={150}
        className="rounded-full mx-auto object-cover aspect-square"
      />
      <h1 className="text-3xl font-bold mt-4">Wawa</h1>
      <p className="text-lg mt-2">Web Developer | UI/UX Enthusiast</p>
      <div className="mt-4 flex justify-center gap-4 flex-wrap">
        <Link href="/about" className="bg-white p-2 rounded shadow hover:bg-gray-200">About</Link>
        <Link href="/projects" className="bg-white p-2 rounded shadow hover:bg-gray-200">Projects</Link>
        <Link href="/skills" className="bg-white p-2 rounded shadow hover:bg-gray-200">Skills</Link>
        <Link href="/contact" className="bg-white p-2 rounded shadow hover:bg-gray-200">Contact</Link>
      </div>
    </motion.div>
  );
}