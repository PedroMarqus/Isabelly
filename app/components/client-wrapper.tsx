"use client"

import dynamic from "next/dynamic"

const FloatingHearts = dynamic(() => import("./floating-heart"), {
  ssr: false,
})

export default function ClientWrapper() {
  return <FloatingHearts />
}

