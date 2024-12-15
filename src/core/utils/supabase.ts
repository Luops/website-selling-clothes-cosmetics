import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://jbeevpdahiikggtjfioq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpiZWV2cGRhaGlpa2dndGpmaW9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyNzQ2MzcsImV4cCI6MjA0OTg1MDYzN30.CZ-veSIop1tCQZv53INQuki0Fqjenu-ZtkH3oV4FeUw"
);
