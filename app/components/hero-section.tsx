"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
      <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4">Love U Isa ❤️</h1>
      <p className="text-xl text-pink-700">Cada dia ao seu lado é uma dádiva dada por Deus</p>
    </motion.div>
  )
}

