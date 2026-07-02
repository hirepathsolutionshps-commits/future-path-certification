const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM = "Hire Path Solutions <onboarding@resend.dev>";

export interface ConfirmationEmailData {
  name: string;
  email: string;
  phone: string;
  scheduleType: "Regular" | "VIP";
  cohortName: string;
}

function buildHtml(data: ConfirmationEmailData): string {
  const price = data.scheduleType === "VIP" ? "₦100,000" : "₦50,000";
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Application Confirmed</title>
</head>
<body style="margin:0;padding:0;background:#F7F5F0;font-family:'Inter',Arial,sans-serif;color:#0A0A0A;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F5F0;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" style="max-width:560px;background:#ffffff;border-radius:8px;border:1px solid #E8E5DF;overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="background:#0A0A0A;padding:32px 40px;text-align:center;">
              <p style="margin:0;font-family:Georgia,serif;font-size:22px;font-weight:700;color:#C9971C;letter-spacing:-0.5px;">
                Hire Path Solutions
              </p>
              <p style="margin:6px 0 0;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:3px;">
                Healthcare VA Training
              </p>
            </td>
          </tr>

          <!-- Gold bar -->
          <tr>
            <td style="height:3px;background:linear-gradient(90deg,transparent,#C9971C,transparent);"></td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <p style="margin:0 0 8px;font-size:13px;text-transform:uppercase;letter-spacing:3px;color:#C9971C;font-family:monospace;">
                Application Confirmed
              </p>
              <h1 style="margin:0 0 24px;font-family:Georgia,serif;font-size:26px;font-weight:700;color:#0A0A0A;line-height:1.2;">
                Welcome aboard, ${data.name.split(" ")[0]}!
              </h1>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#3D3D3D;">
                Your application and payment have been received. You have officially secured your seat in the <strong>${data.cohortName}</strong>.
              </p>

              <!-- Details box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F5F0;border-radius:6px;border:1px solid #E8E5DF;margin-bottom:28px;">
                <tr>
                  <td style="padding:24px 28px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;font-size:13px;color:#888;">Name</td>
                        <td style="padding:6px 0;font-size:13px;color:#0A0A0A;text-align:right;font-weight:600;">${data.name}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:13px;color:#888;border-top:1px solid #E8E5DF;">Email</td>
                        <td style="padding:6px 0;font-size:13px;color:#0A0A0A;text-align:right;border-top:1px solid #E8E5DF;">${data.email}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:13px;color:#888;border-top:1px solid #E8E5DF;">Phone</td>
                        <td style="padding:6px 0;font-size:13px;color:#0A0A0A;text-align:right;border-top:1px solid #E8E5DF;">${data.phone}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:13px;color:#888;border-top:1px solid #E8E5DF;">Plan</td>
                        <td style="padding:6px 0;font-size:13px;color:#0A0A0A;text-align:right;border-top:1px solid #E8E5DF;font-weight:600;">${data.scheduleType}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:13px;color:#888;border-top:1px solid #E8E5DF;">Amount Paid</td>
                        <td style="padding:6px 0;font-size:14px;color:#C9971C;text-align:right;border-top:1px solid #E8E5DF;font-weight:700;font-family:monospace;">${price}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#3D3D3D;">
                Our team will reach out via <strong>WhatsApp or phone</strong> within 24 hours to send you onboarding details and your cohort start date.
              </p>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding:8px 0 28px;">
                    <a href="https://wa.me/2348068579882" style="display:inline-block;background:#0A0A0A;color:#C9971C;font-size:13px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:4px;letter-spacing:0.5px;">
                      Message Us on WhatsApp
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F7F5F0;border-top:1px solid #E8E5DF;padding:24px 40px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#888;line-height:1.6;">
                Hire Path Solutions &middot; Lagos, Nigeria<br/>
                08068579882
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendConfirmationEmail(data: ConfirmationEmailData): Promise<void> {
  if (!RESEND_API_KEY) {
    console.error("[email] RESEND_API_KEY not set — skipping email");
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [data.email],
      subject: `Your seat is confirmed, ${data.name.split(" ")[0]}! Hire Path Solutions`,
      html: buildHtml(data),
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("[email] Resend error:", res.status, text);
  } else {
    console.log("[email] Confirmation sent to", data.email);
  }
}
