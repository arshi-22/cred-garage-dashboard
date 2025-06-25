"use client";

import { motion } from "framer-motion";

export default function Sidebar({ show, toggle }) {
  if (!show) return null;

  return (
    <motion.aside
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 w-72 h-screen  text-gray-400 p-6 shadow-lg z-40"
    >
      <button
        onClick={toggle}
        className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        aria-label="Close Sidebar"
      >
        ×
      </button>

      <div className="flex flex-col items-center mt-8">
        <img
          src="https://i.pravatar.cc/100"
          alt="User Avatar"
          className="w-20 h-20 rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold">John</h2>
        <p className="text-sm text-gray-400">Level 7</p>
      </div>

      <div className="mt-8 w-full">
        <h3 className="text-sm text-gray-400 mb-2">XP Progress</h3>
        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
          <div className="bg-green-500 h-full w-[65%] rounded-full" />
        </div>
        <p className="text-xs text-gray-400 mt-1 text-right">1300 / 2000 XP</p>
      </div>
    </motion.aside>
  );
}
