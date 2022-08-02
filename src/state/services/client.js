import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://xtecetfrgnltwyrkzmgq.supabase.co';
// eslint-disable-next-line max-len
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0ZWNldGZyZ25sdHd5cmt6bWdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkzODc3MDksImV4cCI6MTk3NDk2MzcwOX0.cDGpWSOPggsy4efY9Zu3xMqiCk99m8TvAftRW-twuo8';
export const client = createClient(supabaseUrl, supabaseKey);
