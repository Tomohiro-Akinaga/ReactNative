import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cviozqkmjqyxhkqcalbg.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2aW96cWttanF5eGhrcWNhbGJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3MjU3OTcsImV4cCI6MjA2NzMwMTc5N30.EWdHqBDSiYOqzrU7cI3VcJZQLmySyOCc02C7rB4Qqeg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
