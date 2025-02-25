"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Countdown from "../app/components/countdown"
import FloatingHearts from "../app/components/floating-heart"

export default function Page() {
  // Set your special date here
  const specialDate = new Date("2024-12-31")

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200">
      <FloatingHearts />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4">Para Meu Amor ❤️</h1>
          <p className="text-xl text-pink-700">Cada dia ao seu lado é uma nova aventura de amor</p>
        </motion.div>

        {/* Countdown */}
        <Countdown specialDate={specialDate} />

        {/* Love Letter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/80 rounded-xl p-8 backdrop-blur-sm mb-20"
        >
          <h2 className="text-2xl text-pink-600 text-center mb-6">Carta de Amor</h2>
          <p className="text-pink-700 leading-relaxed">
            Meu amor,
            <br />
            <br />
            Cada momento ao seu lado é como um sonho que se torna realidade. Seu sorriso ilumina meus dias, e seu amor
            faz meu coração transbordar de felicidade. Você é a pessoa mais especial que já conheci, e sou grato(a) por
            ter você em minha vida.
            <br />
            <br />
            Com todo meu amor,
            <br />
            Seu amor
          </p>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="relative h-64 rounded-xl overflow-hidden hover:scale-105 transition-transform">
              <Image
                src={`/placeholder.svg?height=256&width=384`}
                alt={`Momento especial ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </main>
    </div>
  )
}

