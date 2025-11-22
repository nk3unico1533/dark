import React, { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { supabase } from '../lib/supabaseClient'

export default function Profile() {
  const { user, signOut } = useAuth()
  const [profile, setProfile] = useState<any>(null)

  useEffect(() => {
    if (!user) return
    const fetchProfile = async () => {
      const { data } = await supabase.from('profiles').select('*').eq('user_id', user.id).single()
      setProfile(data)
    }
    fetchProfile()
  }, [user])

  if (!user) return <p className="text-center text-gray-400">Faça login para acessar seu perfil.</p>

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center pt-24">
      <h1 className="text-4xl font-bold gradient-text mb-6">Meu Perfil</h1>
      {profile ? (
        <div className="glass-panel p-6 w-96 text-left text-sm text-gray-300">
          <p><strong>Display Name:</strong> {profile.display_name}</p>
          <p><strong>Username:</strong> @{profile.username}</p>
          <p><strong>ID Numérico:</strong> #{String(profile.numeric_id).padStart(5, '0')}</p>
          <p><strong>Role:</strong> {profile.role ?? 'user'}</p>
          <p><strong>Criado em:</strong> {new Date(profile.created_at).toLocaleString()}</p>
        </div>
      ) : (
        <p>Carregando perfil...</p>
      )}
      <button
        onClick={signOut}
        className="mt-6 px-5 py-2 bg-gradient-to-r from-neon-fuchsia to-neon-cyan rounded-lg font-semibold hover:opacity-80"
      >
        Sair
      </button>
    </div>
  )
}
