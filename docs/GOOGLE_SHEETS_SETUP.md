# Google Sheets Setup for Contact Form Leads

Every time someone submits the contact form, a new row is automatically appended to your Google Sheet with all fields + timestamp + source.

---

## Step 1 – Prepare your Google Sheet

1. Open (or create) your Google Sheet.
2. On **Row 1**, add these headers in order:

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| DateTime | Name | Email | Phone | Company | City | Service | Message | Source |

---

## Step 2 – Add the Apps Script

1. In your Sheet, go to **Extensions → Apps Script**.
2. Delete any existing code and paste the following:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.datetime  || '',
      data.name      || '',
      data.email     || '',
      data.phone     || '',
      data.company   || '',
      data.city      || '',
      data.service   || '',
      data.message   || '',
      data.source    || 'Website Contact Form',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Save** (give the project any name, e.g. `GrowmoreLeads`).

---

## Step 3 – Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon ⚙️ next to "Type" and select **Web app**.
3. Set:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy** and authorise when prompted.
5. Copy the **Web App URL** (looks like `https://script.google.com/macros/s/ABC.../exec`).

---

## Step 4 – Add to Environment Variables

Paste the URL into your `.env.local`:

```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

And add the same variable in your **Render dashboard** under Environment Variables.

Also add your Web3Forms server-side key (without `NEXT_PUBLIC_` prefix):

```env
WEB3FORMS_KEY=your-web3forms-access-key
```

---

## Re-deploy note

Any time you edit the Apps Script code, you must create a **new deployment** (not update existing) and update the URL in your environment variables.
