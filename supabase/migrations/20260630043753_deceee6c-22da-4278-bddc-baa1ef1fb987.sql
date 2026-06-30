CREATE TABLE public.cohorts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  starts_on DATE,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT ON public.cohorts TO anon;
GRANT SELECT ON public.cohorts TO authenticated;
GRANT ALL ON public.cohorts TO service_role;

ALTER TABLE public.cohorts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active cohorts"
  ON public.cohorts FOR SELECT
  USING (is_active = true);

CREATE TABLE public.students (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  has_laptop BOOLEAN NOT NULL DEFAULT false,
  schedule_type TEXT NOT NULL DEFAULT 'Regular',
  cohort_id UUID REFERENCES public.cohorts(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.students TO anon;
GRANT INSERT, SELECT ON public.students TO authenticated;
GRANT ALL ON public.students TO service_role;

ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can apply (insert)"
  ON public.students FOR INSERT
  WITH CHECK (
    char_length(name) > 0 AND char_length(name) <= 120
    AND char_length(phone) > 0 AND char_length(phone) <= 40
    AND char_length(email) > 0 AND char_length(email) <= 255
    AND schedule_type IN ('Regular', 'VIP')
  );

INSERT INTO public.cohorts (name, starts_on, is_active)
VALUES ('New Cohort · 6 Weeks', (now() + interval '14 days')::date, true);