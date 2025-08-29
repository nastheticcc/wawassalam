'use client';
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-6 font-serif">
      {/* Judul Utama */}
      <h1 className="text-3xl font-bold mb-6 text-center">Short Profile</h1>

      {/* Bagian Profile */}
      <motion.div
        initial={{ opacity:0, y:20 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.5 }}
        className="bg-white p-6 rounded-3xl shadow-lg"
      >
        <div className="flex flex-col gap-2 text-lg">
          <p><span className="font-semibold">Nama:</span> Naswa Ayu Cahya Kirana</p>
          <p><span className="font-semibold">Sekolah:</span> SMKN 8 MALANG</p>
          <p><span className="font-semibold">Jurusan:</span> RPL</p>
        </div>
      </motion.div>

      {/* Judul Motivasi */}
      <h1 className="text-2xl font-bold mt-10 mb-4 text-center">Motivasi Belajar Coding</h1>

      {/* Bagian Motivasi */}
<motion.div
  initial={{ opacity:0, y:20 }}
  animate={{ opacity:1, y:0 }}
  transition={{ duration:0.5 }}
  className="bg-white p-6 rounded-3xl shadow-lg text-lg leading-relaxed"
>
  <p>
    Belajar coding bukan hanya tentang menulis baris-baris kode, tapi juga tentang membuka peluang tanpa batas untuk menciptakan sesuatu yang bermanfaat. Dengan coding, kita bisa mewujudkan ide menjadi aplikasi, website, atau game sendiri, sekaligus melatih logika dan kemampuan memecahkan masalah. Selain itu, skill ini membuat kita siap menghadapi dunia digital yang terus berkembang, memberikan fleksibilitas dalam bekerja, dan menyiapkan masa depan yang lebih cerah.
  </p>
</motion.div>

{/* Spacer biar tombol kebawah */}
<div className="h-32"></div>  

{/* Tombol Navigasi */}
<div className="flex justify-center gap-4">
  <Link href="/" className="bg-purple-400 text-white p-2 rounded shadow hover:bg-purple-500">
    Home
  </Link>
  <Link href="/projects" className="bg-purple-400 text-white p-2 rounded shadow hover:bg-purple-500">
    Projects
  </Link>
  <Link href="/skills" className="bg-purple-400 text-white p-2 rounded shadow hover:bg-purple-500">
    Skills
  </Link>
  <Link href="/contact" className="bg-purple-400 text-white p-2 rounded shadow hover:bg-purple-500">
    Contact
  </Link>
</div>
    </div>
  );
}