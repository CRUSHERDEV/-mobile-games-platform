
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qkebjviacnbsucpbngft.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrZWJqdmlhY25ic3VjcGJuZ2Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2ODgzMDAsImV4cCI6MjA3OTI2NDMwMH0.yYbiYCKSwqvoahG2Anv2baVoTq1lNu32SShO0_3PEOM'

export const supabase = createClient(supabaseUrl, supabaseKey)
