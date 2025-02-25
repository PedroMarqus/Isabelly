"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { useEffect, useState } from "react"

export default function FloatingHearts() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-500"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: typeof window !== "undefined" ? window.innerHeight : 1000,
          }}
          animate={{
            y: -100,
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
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
  )
}

