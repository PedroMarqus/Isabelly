"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export default function PhotoGallery() {
  // Array com as extensões de arquivo suportadas
  const extensions = ["jpg", "jpeg", "png", "webp"]
  const totalPhotos = 6 // Número total de fotos que você tem

  // Estado para controlar quais imagens falharam ao carregar
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set())

  const handleImageError = (index: number) => {
    setFailedImages((prev) => new Set([...prev, index]))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {[...Array(totalPhotos)].map((_, i) => {
        const photoIndex = i + 1

        // Se a imagem falhou ao carregar, tenta a próxima extensão ou usa placeholder
        if (failedImages.has(photoIndex)) {
          return (
            <div
              key={photoIndex}
              className="relative h-64 rounded-xl overflow-hidden hover:scale-105 transition-transform"
            >
              <Image
                src={`/placeholder.svg?height=256&width=384`}
                alt={`Momento especial ${photoIndex}`}
                fill
                className="object-cover"
              />
            </div>
          )
        }

        return (
          <div
            key={photoIndex}
            className="relative h-64 rounded-xl overflow-hidden group hover:scale-105 transition-transform"
          >
            {/* Tenta carregar a imagem com a primeira extensão */}
            <Image
              src={`/foto${photoIndex}.jpg`}
              alt={`Momento especial ${photoIndex}`}
              fill
              className="object-cover"
              onError={() => handleImageError(photoIndex)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay com número da foto */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-white text-lg">Foto {photoIndex}</p>
            </div>
          </div>
        )
      })}
    </motion.div>
  )
}

