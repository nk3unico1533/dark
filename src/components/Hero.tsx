import React from 'react'

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] relative z-10">
      <h1 className="text-6xl font-extrabold gradient-text mb-6 animate-pulse">
        Dark Aurora
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl mb-8">
        Um sistema web avançado de consultas com design futurista e tecnologia neon-cyberpunk.
      </p>
      <a
        href="/auth"
        className="px-6 py-3 text-lg font-bold rounded-lg bg-gradient-to-r from-neon-purple to-neon-cyan hover:opacity-80 neon-glow transition"
      >
        Entrar no Sistema
      </a>
    </section>
  )
}
