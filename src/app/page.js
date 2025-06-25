"use client";

import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsCard";
import Sidebar from "../components/Sidebar";
import { FaUserCircle } from "react-icons/fa";
import { useState, useEffect, createContext, useContext } from "react";
import { motion } from "framer-motion";
import CTA from "../components/CTA";
import LoadingSkeleton from "../components/LoadingSkeleton";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function Page() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.style.setProperty("--background", "#0a0a0a");
      root.style.setProperty("--foreground", "#ededed");
    } else {
      root.style.setProperty("--background", "#ffffff");
      root.style.setProperty("--foreground", "#171717");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const local = localStorage.getItem("sidebar");
    setShowSidebar(local === "true");

    const timeout = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, []);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const toggleSidebar = () => {
    const next = !showSidebar;
    setShowSidebar(next);
    localStorage.setItem("sidebar", next.toString());
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`flex relative ${darkMode ? "dark" : ""}`}>
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 text-white bg-black/40 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
          <button
            onClick={toggleSidebar}
            className="w-10 h-10 text-white bg-black/40 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
          >
            <FaUserCircle size={24} />
          </button>
        </div>
      </div>

      <div className="flex relative ">
        <div className="fixed top-6 right-6 z-50">
          <button
            onClick={toggleSidebar}
            className="w-10 h-10 text-white bg-black/40 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
          >
            <FaUserCircle size={24} />
          </button>
        </div>

        {showSidebar && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
            onClick={toggleSidebar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}

        <Sidebar show={showSidebar} toggle={toggleSidebar} />
        <main className="flex-1">
          {isLoading ? (
            <div className="p-10 space-y-10">
              <LoadingSkeleton lines={1} width="w-2/3" />
              <LoadingSkeleton lines={3} />
            </div>
          ) : (
            <>
              <HeroSection />
              <BenefitsSection />
              <CTA />
            </>
          )}
        </main>
      </div>
    </ThemeContext.Provider>
  );
}
