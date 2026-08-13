---
name: Paystack deployment keys
description: Paystack public and secret key requirements for this Vercel deployment
---

The Paystack inline checkout key is a public, build-time Vite variable and must be a `pk_test_...` or `pk_live_...` key. The server-side verification key is a separate `PAYSTACK_SECRET_KEY` value beginning with the matching `sk_test_...` or `sk_live_` prefix.

**Why:** Paystack reports “Please enter a valid Key” when the browser receives an empty key, a secret key, a key with whitespace/quotes, or a key from the opposite test/live mode.

**How to apply:** Configure `VITE_PAYSTACK_PUBLIC_KEY` in Vercel for the relevant deployment environment and redeploy after changing it. Keep `PAYSTACK_SECRET_KEY` server-only and use the same test/live mode as the public key.