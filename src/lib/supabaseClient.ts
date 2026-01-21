import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ygmmkhwjtzdytyydlkwr.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnbW1raHdqdHpkeXR5eWRsa3dyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxNzMzMTQsImV4cCI6MjA3Mjc0OTMxNH0.ahs5vuI-t_CkXgzCTboA5tUxqKdl0Q1DlatuJRsvpms"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)