CREATE TABLE public.program_waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  program_name TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert only for public intake; reads are restricted to service role (admin)
GRANT INSERT ON public.program_waitlist TO anon;
GRANT INSERT ON public.program_waitlist TO authenticated;
GRANT ALL ON public.program_waitlist TO service_role;

ALTER TABLE public.program_waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join the waitlist"
  ON public.program_waitlist FOR INSERT
  WITH CHECK (
    char_length(name) > 0 AND char_length(name) <= 120
    AND char_length(email) > 0 AND char_length(email) <= 255
    AND char_length(program_name) > 0
  );
