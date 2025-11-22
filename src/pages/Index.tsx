import React from 'react'
import Hero from '../components/Hero'
import Particles from '../components/Particles'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Index() {
  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <Particles />
      <Header />
      <main className="z-10 flex-1 flex flex-col items-center justify-center">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
