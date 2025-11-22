import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export function useCredits(userId?: string) {
  const [credits, setCredits] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userId) return
    const fetchCredits = async () => {
      const { data, error } = await supabase
        .from('user_credits')
        .select('credits_remaining')
        .eq('user_id', userId)
        .single()
      if (!error && data) setCredits(data.credits_remaining)
      setLoading(false)
    }
    fetchCredits()
  }, [userId])

  return { credits, loading }
}
