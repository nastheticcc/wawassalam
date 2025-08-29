'use client';
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Judul */}
      <h1 className="font-bold text-xl">My Portfolio</h1>

      {/* Darkmode toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-white text-black px-2 py-1 rounded"
      >
        {darkMode ? "Light" : "Dark"}
      </button>
    </nav>
  );
}