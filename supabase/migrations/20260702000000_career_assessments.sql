CREATE TABLE public.career_assessments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT,
  state TEXT,
  education_level TEXT,
  field_of_study TEXT,
  job_title TEXT,
  years_experience TEXT,
  industry TEXT,
  current_skills TEXT,
  skills_to_gain TEXT,
  target_role TEXT,
  work_preference TEXT,
  timeline TEXT,
  contact_method TEXT,
  best_time TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert only for public intake; reads are restricted to service role (admin)
GRANT INSERT ON public.career_assessments TO anon;
GRANT INSERT ON public.career_assessments TO authenticated;
GRANT ALL ON public.career_assessments TO service_role;

ALTER TABLE public.career_assessments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a career assessment"
  ON public.career_assessments FOR INSERT
  WITH CHECK (
    char_length(full_name) > 0 AND char_length(full_name) <= 120
    AND char_length(email) > 0 AND char_length(email) <= 255
    AND char_length(phone) > 0 AND char_length(phone) <= 40
  );
