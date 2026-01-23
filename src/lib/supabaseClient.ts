import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://yenyutcmdqdzbpxhpssi.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inllbnl1dGNtZHFkemJweGhwc3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwMjkzODksImV4cCI6MjA4NDYwNTM4OX0._lOtrt3MA9gL6UAb9lZivLbCCQBWKZKrjKvnTz5MIa4"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)