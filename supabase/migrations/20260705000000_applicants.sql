-- ── Applicants table ─────────────────────────────────────────────────────────
create table if not exists public.applicants (
  id         uuid        primary key default gen_random_uuid(),
  full_name  text        not null,
  email      text        not null,
  phone      text        not null,           -- stored as +234XXXXXXXXXX
  state      text        not null,
  city       text        not null,
  cv_url     text,                           -- path inside cv-uploads bucket
  created_at timestamptz not null default now()
);

-- RLS: anyone can submit, only service_role can read
alter table public.applicants enable row level security;

create policy "anon_insert_applicants"
  on public.applicants
  for insert
  to anon, authenticated
  with check (true);

-- ── Storage bucket ────────────────────────────────────────────────────────────
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'cv-uploads',
  'cv-uploads',
  false,
  512000,   -- 500 KB in bytes
  array['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
)
on conflict (id) do nothing;

-- Allow anon/authenticated to upload into cv-uploads
create policy "anon_upload_cv"
  on storage.objects
  for insert
  to anon, authenticated
  with check (bucket_id = 'cv-uploads');
