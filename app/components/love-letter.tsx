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
      <h2 className="text-7xl text-pink-600 text-center mb-6">Carta de Amor</h2>
      <p className="text-pink-700 leading-relaxed">
        Meu amor,
        <br />
        <br />
        Desde que você apareceu em minha vida novamente (olhe o contador) eu nunca mais fui triste. Você cura meus medos e inseguranças apenas com seu amor e carinho. <br />
        Todo dia em minhas orações eu agradeço a Deus pelo nosso relacionamento, pois eu nunca imaginei viver algo tão incrível assim, e sério eu naõ podia querer alguem melhor para compartilhar a vida. Cada momento com você se torna um momento especial, eu não poderia colocar uma galeria de fotos (abaixo) com todos nossos momentos especiais, pois para isso precisariamos de fotos sempre que estivemos juntos. Você tem o poder de transformar uma coisa que seria absurdamente chata em algo inesperadamente legal somente com o seu jeito de ser e com a nossa conexão.
        E por falar em conexão, que conexão hein! Nós combinamos em absolutamente tudo, sentimos quando um precisa do outro e conseguimos entender até mesmo olhares. Eu realmente acredito que sejamos almas gêmeas, pois é impossível existir um casal tão perfeito quanto nós. 
        Obrigado por me completar a cada dia amor, eu realmente espero que tenhamos uma vida toda de experiências juntos, pois não consigo imaginar um futuro sem você. 
        Para finalizar gostaria de mencionar algumas coisas que me encantam em você, são elas: seu estilo, sua voz, seu sorriso, seu olhar, seu corpo, seu jeito, sua fé, sua beleza, sua inteligência, sua força, sua gentileza, sua empatia, seu amor por mim, sua delicadeza e ao mesmo tempo sua chucrisse na real tudo em você me encanta kkkkkkk.
        <br />
        <br />
        Com todo meu amor,
        <br />
        Cowboy da Isa
      </p>
    </motion.div>
  )
}

