"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Countdown({ specialDate }: { specialDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const difference = Math.abs(specialDate.getTime() - now.getTime())

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white/80 rounded-xl p-8 backdrop-blur-sm mb-20"
    >
      <h2 className="text-2xl text-pink-600 text-center mb-6">A quanto tempo sou feliz</h2>
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
  )
}

