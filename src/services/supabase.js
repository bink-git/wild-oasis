import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://wadriqbvghxrdgsycuwj.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhZHJpcWJ2Z2h4cmRnc3ljdXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3NTgxOTAsImV4cCI6MjA1OTMzNDE5MH0.zFJQnCv0BltrzOTS246_HdWG6LIx39Dwdvjk_DC6d2k';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
