// Read lazily inside each function so the secret is always current at call time
const FROM = "Hire Path Solutions <hello@hirepathsolutions.com>";
const ADMIN_EMAIL = "Hirepathsolutionshps@gmail.com";
const LOGO_URL = "https://hirepathsolutions.com/logo.png";
const SITE_URL = "https://hirepathsolutions.com";

export interface ConfirmationEmailData {
  name: string;
  email: string;
  phone: string;
  scheduleType: "Regular" | "VIP";
  cohortName: string;
  has_laptop?: boolean;
}

export interface WaitlistEmailData {
  name: string;
  email: string;
  program_name: string;
}

export interface CareerAssessmentEmailData {
  full_name: string;
  email: string;
  phone: string;
  city?: string;
  state?: string;
  education_level?: string;
  field_of_study?: string;
  job_title?: string;
  years_experience?: string;
  industry?: string;
  current_skills?: string;
  skills_to_gain?: string;
  target_role?: string;
  work_preference?: string;
  timeline?: string;
  contact_method?: string;
  best_time?: string;
}

// ── Shared base shell ─────────────────────────────────────────────────────────

function baseShell(contentHtml: string): string {
  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Hire Path Solutions</title>
  <!--[if !mso]><!-->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <!--<![endif]-->
  <style>
    /* Reset */
    * { box-sizing: border-box; }
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }

    /* Animations — degrade gracefully in unsupported clients */
    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(18px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes goldPulse {
      0%   { opacity: 0.5; }
      50%  { opacity: 1; }
      100% { opacity: 0.5; }
    }
    @keyframes shimmer {
      0%   { background-position: -400px 0; }
      100% { background-position: 400px 0; }
    }

    .card-animate {
      animation: fadeSlideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
    }
    .gold-bar-animate {
      animation: goldPulse 3s ease-in-out 0.7s infinite;
    }

    /* Responsive */
    @media screen and (max-width: 600px) {
      .card-wrap { width: 100% !important; padding: 0 !important; }
      .card-inner { border-radius: 0 !important; }
      .card-body { padding: 32px 24px !important; }
      .card-header { padding: 28px 24px !important; }
      .card-footer { padding: 20px 24px !important; }
      .btn-cta { display: block !important; text-align: center !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#F7F5F0;font-family:'Inter',Arial,sans-serif;color:#0A0A0A;">

  <!-- Outer wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F7F5F0;padding:48px 16px;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table role="presentation" class="card-wrap card-animate" width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">
          <tr>
            <td class="card-inner" style="background:#ffffff;border-radius:8px;border:1px solid #E8E5DF;overflow:hidden;box-shadow:0 4px 32px rgba(10,10,10,0.06);">

              <!-- Header -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="card-header" style="background:#0A0A0A;padding:32px 40px;text-align:center;">
                    <a href="${SITE_URL}" style="text-decoration:none;display:inline-block;">
                      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
                        <tr>
                          <td style="vertical-align:middle;padding-right:10px;">
                            <img src="${LOGO_URL}" alt="Hire Path Solutions" width="36" height="36" style="display:block;border-radius:7px;width:36px;height:36px;" />
                          </td>
                          <td style="vertical-align:middle;">
                            <span style="font-family:Georgia,'Times New Roman',serif;font-size:20px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;display:inline;">
                              Hire Path <span style="color:#C9971C;">Solutions</span>
                            </span>
                          </td>
                        </tr>
                      </table>
                    </a>
                  </td>
                </tr>

                <!-- Gold accent bar -->
                <tr>
                  <td class="gold-bar-animate" style="height:2px;background:linear-gradient(90deg,transparent 0%,#C9971C 30%,#E8B830 50%,#C9971C 70%,transparent 100%);font-size:0;line-height:0;">&nbsp;</td>
                </tr>
              </table>

              <!-- Body -->
              ${contentHtml}

              <!-- Footer -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="height:1px;background:#E8E5DF;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
                <tr>
                  <td class="card-footer" style="background:#F7F5F0;padding:24px 40px;text-align:center;">
                    <p style="margin:0 0 6px;font-family:'JetBrains Mono',Courier,monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;color:#888888;">
                      Hire Path Solutions &nbsp;·&nbsp; Lagos, Nigeria
                    </p>
                    <p style="margin:0;font-size:11px;color:#aaaaaa;line-height:1.6;">
                      <a href="tel:+2348068579982" style="color:#aaaaaa;text-decoration:none;">+234 806 857 9982</a>
                      &nbsp;·&nbsp;
                      <a href="${SITE_URL}" style="color:#aaaaaa;text-decoration:none;">hirepathsolutions.com</a>
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>
        </table>
        <!-- /Card -->

      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ── Shared UI primitives ───────────────────────────────────────────────────────

function eyebrow(text: string): string {
  return `<p style="margin:0 0 10px;font-family:'JetBrains Mono',Courier,monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.22em;color:#C9971C;">${text}</p>`;
}

function heading(text: string): string {
  return `<h1 style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:28px;font-weight:700;color:#0A0A0A;line-height:1.25;letter-spacing:-0.5px;">${text}</h1>`;
}

function bodyText(text: string, extra = ""): string {
  return `<p style="margin:0 0 20px;font-size:15px;line-height:1.75;color:#3D3D3D;${extra}">${text}</p>`;
}

function dataRow(label: string, value: string, first = false): string {
  const borderTop = first ? "" : "border-top:1px solid #E8E5DF;";
  return `<tr>
    <td style="padding:9px 0;font-family:'JetBrains Mono',Courier,monospace;font-size:11px;text-transform:uppercase;letter-spacing:0.12em;color:#888888;${borderTop}">${label}</td>
    <td style="padding:9px 0;font-size:13px;color:#0A0A0A;text-align:right;font-weight:600;${borderTop}">${value}</td>
  </tr>`;
}

function dataTable(rows: [string, string][]): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F7F5F0;border-radius:6px;border:1px solid #E8E5DF;margin:0 0 28px;">
    <tr>
      <td style="padding:20px 24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${rows.map(([l, v], i) => dataRow(l, v, i === 0)).join("")}
        </table>
      </td>
    </tr>
  </table>`;
}

function ctaButton(href: string, label: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:4px 0 28px;">
    <tr>
      <td style="border-radius:4px;background:#0A0A0A;">
        <a href="${href}" class="btn-cta" style="display:inline-block;background:#0A0A0A;color:#C9971C;font-family:'JetBrains Mono',Courier,monospace;font-size:11px;font-weight:500;text-decoration:none;padding:14px 32px;border-radius:4px;letter-spacing:0.15em;text-transform:uppercase;">${label}</a>
      </td>
    </tr>
  </table>`;
}

function divider(): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;">
    <tr>
      <td style="height:1px;background:linear-gradient(90deg,transparent,#E8E5DF 20%,#E8E5DF 80%,transparent);font-size:0;line-height:0;">&nbsp;</td>
    </tr>
  </table>`;
}

// ── VA Blueprint confirmation email ───────────────────────────────────────────

function buildConfirmationHtml(data: ConfirmationEmailData): string {
  const price = data.scheduleType === "VIP" ? "₦100,000" : "₦50,000";
  const firstName = data.name.split(" ")[0];

  const body = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td class="card-body" style="padding:40px 40px 32px;">

        ${eyebrow("Application Confirmed")}
        ${heading(`Welcome aboard, ${firstName}!`)}
        ${bodyText(`Your application and payment have been received. You have officially secured your seat in the <strong style="color:#0A0A0A;">${data.cohortName}</strong>. We're thrilled to have you.`)}

        ${dataTable([
          ["Name",         data.name],
          ["Email",        data.email],
          ["Phone",        data.phone],
          ["Plan",         data.scheduleType],
          ["Amount Paid",  price],
        ])}

        ${bodyText(`Our team will reach out via <strong>WhatsApp or phone</strong> within 24 hours with your onboarding details and cohort start date.`)}

        ${ctaButton("https://wa.me/2348068579982", "Message Us on WhatsApp")}

        ${divider()}

        <p style="margin:0;font-size:13px;line-height:1.7;color:#888888;font-style:italic;">
          If you have any questions before then, reply to this email or message us directly on WhatsApp. We're here for you.
        </p>

      </td>
    </tr>
  </table>`;

  return baseShell(body);
}

// ── Career assessment — applicant email ───────────────────────────────────────

function buildCareerAssessmentApplicantHtml(data: CareerAssessmentEmailData): string {
  const firstName = data.full_name.split(" ")[0];

  const body = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td class="card-body" style="padding:40px 40px 32px;">

        ${eyebrow("Assessment Received")}
        ${heading(`Thanks, ${firstName}!`)}
        ${bodyText(`We've received your career assessment and are reviewing your profile. One of our career coaches will reach out within <strong>24 – 48 hours</strong> with your personalised career plan and next steps.`)}

        ${dataTable([
          ["Name",  data.full_name],
          ["Email", data.email],
          ["Phone", data.phone],
        ])}

        ${bodyText(`In the meantime, feel free to message us on WhatsApp if you have any questions — we're always happy to help.`)}

        ${ctaButton("https://wa.me/2348068579982", "Message Us on WhatsApp")}

        ${divider()}

        <p style="margin:0;font-size:13px;line-height:1.7;color:#888888;font-style:italic;">
          You're one step closer to building the career you deserve. We'll be in touch soon.
        </p>

      </td>
    </tr>
  </table>`;

  return baseShell(body);
}

// ── Career assessment — admin email ───────────────────────────────────────────

function buildCareerAssessmentAdminHtml(data: CareerAssessmentEmailData): string {
  const rows: [string, string][] = [
    ["Name",              data.full_name],
    ["Email",             data.email],
    ["Phone",             data.phone],
    ["Location",          [data.city, data.state].filter(Boolean).join(", ") || "—"],
    ["Education",         data.education_level   || "—"],
    ["Field of Study",    data.field_of_study    || "—"],
    ["Job Title",         data.job_title         || "—"],
    ["Experience",        data.years_experience  || "—"],
    ["Industry",          data.industry          || "—"],
    ["Current Skills",    data.current_skills    || "—"],
    ["Skills to Gain",    data.skills_to_gain    || "—"],
    ["Target Role",       data.target_role       || "—"],
    ["Work Preference",   data.work_preference   || "—"],
    ["Timeline",          data.timeline          || "—"],
    ["Preferred Contact", data.contact_method    || "—"],
    ["Best Time",         data.best_time         || "—"],
  ];

  const body = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td class="card-body" style="padding:40px 40px 32px;">

        ${eyebrow("New Submission")}
        ${heading(`Career Assessment`)}
        ${bodyText(`A new career assessment has been submitted. Full details are below.`)}

        ${dataTable(rows)}

        ${ctaButton(`mailto:${data.email}`, `Reply to ${data.full_name.split(" ")[0]}`)}

      </td>
    </tr>
  </table>`;

  return baseShell(body);
}

// ── Enrollment admin alert ────────────────────────────────────────────────────

function buildEnrollmentAdminHtml(data: ConfirmationEmailData): string {
  const price = data.scheduleType === "VIP" ? "₦100,000" : "₦50,000";

  const body = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td class="card-body" style="padding:40px 40px 32px;">

        ${eyebrow("New Enrolment")}
        ${heading(`${data.name} just enrolled`)}
        ${bodyText(`A new student has completed payment and secured their seat.`)}

        ${dataTable([
          ["Name",         data.name],
          ["Email",        data.email],
          ["Phone",        data.phone],
          ["Plan",         data.scheduleType],
          ["Amount Paid",  price],
          ["Cohort",       data.cohortName],
          ["Has Laptop",   data.has_laptop ? "Yes" : "No"],
        ])}

        ${ctaButton(`mailto:${data.email}`, `Reply to ${data.name.split(" ")[0]}`)}

      </td>
    </tr>
  </table>`;

  return baseShell(body);
}

// ── Waitlist admin alert ───────────────────────────────────────────────────────

function buildWaitlistAdminHtml(data: { name: string; email: string; program_name: string }): string {
  const body = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td class="card-body" style="padding:40px 40px 32px;">

        ${eyebrow("New Waitlist Signup")}
        ${heading(`${data.name} joined the waitlist`)}
        ${bodyText(`Someone has expressed interest in an upcoming program.`)}

        ${dataTable([
          ["Name",    data.name],
          ["Email",   data.email],
          ["Program", data.program_name],
        ])}

        ${ctaButton(`mailto:${data.email}`, `Reply to ${data.name.split(" ")[0]}`)}

      </td>
    </tr>
  </table>`;

  return baseShell(body);
}

// ── Waitlist confirmation to user ─────────────────────────────────────────────

function buildWaitlistApplicantHtml(data: { name: string; email: string; program_name: string }): string {
  const firstName = data.name.split(" ")[0];

  const body = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td class="card-body" style="padding:40px 40px 32px;">

        ${eyebrow("You're on the list")}
        ${heading(`Got it, ${firstName}!`)}
        ${bodyText(`You've been added to the waitlist for <strong style="color:#0A0A0A;">${data.program_name}</strong>. We'll reach out as soon as enrollment opens — you'll be among the first to know.`)}

        ${dataTable([
          ["Name",    data.name],
          ["Email",   data.email],
          ["Program", data.program_name],
        ])}

        ${bodyText(`In the meantime, feel free to message us if you have any questions.`)}

        ${ctaButton("https://wa.me/2348068579982", "Message Us on WhatsApp")}

        ${divider()}

        <p style="margin:0;font-size:13px;line-height:1.7;color:#888888;font-style:italic;">
          We're working hard to launch this program. We appreciate your interest and can't wait to have you.
        </p>

      </td>
    </tr>
  </table>`;

  return baseShell(body);
}

// ── Public API ─────────────────────────────────────────────────────────────────

export async function sendConfirmationEmail(data: ConfirmationEmailData): Promise<void> {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    console.error("[email] RESEND_API_KEY not set — skipping email");
    return;
  }

  const [studentRes, adminRes] = await Promise.all([
    fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [data.email],
        subject: `You're in, ${data.name.split(" ")[0]}! Your seat is confirmed — Hire Path Solutions`,
        html: buildConfirmationHtml(data),
      }),
    }),
    fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [ADMIN_EMAIL],
        subject: `New Enrolment: ${data.name} — ${data.scheduleType} Plan`,
        html: buildEnrollmentAdminHtml(data),
      }),
    }),
  ]);

  if (!studentRes.ok) console.error("[email] Student confirmation error:", await studentRes.text());
  else console.log("[email] Confirmation sent to", data.email);

  if (!adminRes.ok) console.error("[email] Admin enrolment alert error:", await adminRes.text());
  else console.log("[email] Enrolment admin alert sent");
}

export async function sendWaitlistEmail(data: WaitlistEmailData): Promise<void> {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    console.error("[email] RESEND_API_KEY not set — skipping waitlist email");
    return;
  }

  const [userRes, adminRes] = await Promise.all([
    fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [data.email],
        subject: `You're on the waitlist, ${data.name.split(" ")[0]}! — Hire Path Solutions`,
        html: buildWaitlistApplicantHtml(data),
      }),
    }),
    fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [ADMIN_EMAIL],
        subject: `New Waitlist Signup: ${data.name} — ${data.program_name}`,
        html: buildWaitlistAdminHtml(data),
      }),
    }),
  ]);

  if (!userRes.ok) console.error("[email] Waitlist user email error:", await userRes.text());
  else console.log("[email] Waitlist confirmation sent to", data.email);

  if (!adminRes.ok) console.error("[email] Waitlist admin alert error:", await adminRes.text());
  else console.log("[email] Waitlist admin alert sent");
}

export async function sendCareerAssessmentEmail(data: CareerAssessmentEmailData): Promise<void> {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    console.error("[email] RESEND_API_KEY not set — skipping career assessment email");
    return;
  }

  const [applicantRes, adminRes] = await Promise.all([
    fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [data.email],
        subject: `We received your assessment, ${data.full_name.split(" ")[0]}! — Hire Path Solutions`,
        html: buildCareerAssessmentApplicantHtml(data),
      }),
    }),
    fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [ADMIN_EMAIL],
        subject: `New Career Assessment: ${data.full_name}`,
        html: buildCareerAssessmentAdminHtml(data),
      }),
    }),
  ]);

  if (!applicantRes.ok) console.error("[email] Applicant email error:", await applicantRes.text());
  else console.log("[email] Career assessment confirmation sent to", data.email);

  if (!adminRes.ok) console.error("[email] Admin email error:", await adminRes.text());
  else console.log("[email] Career assessment admin notification sent");
}
