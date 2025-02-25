"use client"

import { motion } from "framer-motion"

export default function LoveLetter() {
  return (
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
        Cada momento ao seu lado é como um sonho que se torna realidade. Seu sorriso ilumina meus dias, e seu amor faz
        meu coração transbordar de felicidade. Você é a pessoa mais especial que já conheci, e sou grato(a) por ter você
        em minha vida.
        <br />
        <br />
        Com todo meu amor,
        <br />
        Seu amor
      </p>
    </motion.div>
  )
}

