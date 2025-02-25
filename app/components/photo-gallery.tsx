"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function PhotoGallery() {
  return (
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
  )
}

