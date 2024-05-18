import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://spgazphrokakjwawojxz.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwZ2F6cGhyb2tha2p3YXdvanh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU0NDcwMTMsImV4cCI6MjAzMTAyMzAxM30.91D6fPcRSkp3-1iaJCNCLHSsSzeU8xidvh_DKmB3s1M"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)