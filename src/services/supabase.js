
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dewfqnmhekdvwpnbwdts.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRld2Zxbm1oZWtkdndwbmJ3ZHRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4NDIzMzUsImV4cCI6MjAwOTQxODMzNX0.ZZJKmYG-dOiFs66il8bFKd3y3jQ_UC5FDph8_9H4tqE"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;