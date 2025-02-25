"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { useEffect, useState } from "react"

export default function FloatingHearts() {
  const [mounted, setMounted] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 })

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    setMounted(true)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-500"
          initial={{
            x: Math.random() * dimensions.width,
            y: dimensions.height,
          }}
          animate={{
            y: -100,
            x: Math.random() * dimensions.width,
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

