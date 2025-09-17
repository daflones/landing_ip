import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rpydvmgnquvmwnowcmpp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJweWR2bWducXV2bXdub3djbXBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4NDg2NDQsImV4cCI6MjA3MjQyNDY0NH0.9PcLL_QcgnqJqXJ7wKLPbKdN4XMPN6YVELzyLXFRfMk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false
  }
})
