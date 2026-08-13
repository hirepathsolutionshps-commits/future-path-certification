---
name: Resend deployment key
description: Resend API key and deployment requirements for confirmation emails
---

The confirmation-email code uses `RESEND_API_KEY` at server runtime. Resend rejects revoked, mistyped, or expired keys with HTTP 401, while the current API route may still return a successful-looking response if the email helper skips or logs the provider failure.

**Why:** An invalid Resend key can make forms and payments appear successful while no confirmation email is delivered.

**How to apply:** Test the key against Resend before debugging the form. Configure the valid key in Vercel Production and redeploy; keep it server-only and never expose it through a `VITE_` variable.