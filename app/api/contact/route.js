import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, city, service, message } = body

    // Validate required fields
    if (!name || !email || !phone || !city || !service || !message) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }

    const datetime = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    })

    const source = 'Website Contact Form'

    // ── Append Row to Google Sheets via Apps Script Webhook ──────────────────
    const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL

    if (sheetsWebhookUrl) {
      try {
        await fetch(sheetsWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            datetime,
            name,
            email,
            phone,
            company: company || 'N/A',
            city,
            service,
            message,
            source,
          }),
        })
      } catch (sheetsErr) {
        console.error('Google Sheets webhook error:', sheetsErr)
      }
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 })
  }
}
