"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Page() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Set your special date here
  const specialDate = new Date("2024-12-31")

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const difference = specialDate.getTime() - now.getTime()

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [specialDate])

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200">
      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-500"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight,
            }}
            animate={{
              y: -100,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Heart size={Math.random() * 20 + 10} />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4">Para Meu Amor ❤️</h1>
          <p className="text-xl text-pink-700">Cada dia ao seu lado é uma nova aventura de amor</p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 rounded-xl p-8 backdrop-blur-sm mb-20"
        >
          <h2 className="text-2xl text-pink-600 text-center mb-6">Tempo até nosso momento especial</h2>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="bg-pink-100 rounded-lg p-4">
              <div className="text-3xl font-bold text-pink-600">{timeLeft.days}</div>
              <div className="text-pink-500">Dias</div>
            </div>
            <div className="bg-pink-100 rounded-lg p-4">
              <div className="text-3xl font-bold text-pink-600">{timeLeft.hours}</div>
              <div className="text-pink-500">Horas</div>
            </div>
            <div className="bg-pink-100 rounded-lg p-4">
              <div className="text-3xl font-bold text-pink-600">{timeLeft.minutes}</div>
              <div className="text-pink-500">Minutos</div>
            </div>
            <div className="bg-pink-100 rounded-lg p-4">
              <div className="text-3xl font-bold text-pink-600">{timeLeft.seconds}</div>
              <div className="text-pink-500">Segundos</div>
            </div>
          </div>
        </motion.div>

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

