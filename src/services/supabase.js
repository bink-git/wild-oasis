import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://dhivtflmnftovidsdxup.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoaXZ0ZmxtbmZ0b3ZpZHNkeHVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyMjE1NDIsImV4cCI6MjAxNTc5NzU0Mn0.9FhGMROnrN7RrvjdFucDrBHeox76EfFeuxYE3CMkhXg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
