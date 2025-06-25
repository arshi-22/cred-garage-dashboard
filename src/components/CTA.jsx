"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 text-center ">
      <motion.h2
        className="text-4xl font-bold text-gray-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Ready to Garage?
      </motion.h2>
      <motion.p
        className="text-gray-400 mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Get all things vehicle in one place
      </motion.p>
      <motion.button
        className="mt-8 px-6 py-3 bg-green-500 text-black font-semibold rounded-full hover:bg-green-400 transition"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        join CRED
      </motion.button>
    </section>
  );
}
