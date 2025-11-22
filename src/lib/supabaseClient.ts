import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ywixjcjjoqoxptoxryzf.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3aXhqY2pqb3FveHB0b3hyeXpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4MTk4MzUsImV4cCI6MjA3OTM5NTgzNX0.d0cJyhAq1DhZTX3twvhSmrJ1GaEL1tF-636yoJ0Qn7s'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
