import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://otsrrgvxxackaxcvtzcl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90c3JyZ3Z4eGFja2F4Y3Z0emNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5NTg1MTYsImV4cCI6MjA4NTUzNDUxNn0.iOzIijBab21rrznPi9MTSQn0JV6S5eNSlXStGG5HYiA'

export const supabase = createClient(supabaseUrl, supabaseKey)
