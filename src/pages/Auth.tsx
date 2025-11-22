import React from 'react'
import AuthForm from '../components/AuthForm'
import Particles from '../components/Particles'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Auth() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <Particles />
      <Header />
      <main className="flex-1 flex flex-col justify-center z-10">
        <AuthForm />
      </main>
      <Footer />
    </div>
  )
}
