# 🌐 How to Add Resend DNS Records in Vercel

Based on your screenshot, here is exactly what to type into the Vercel DNS boxes. You need to add **3 separate records**.

---

## Record 1: DKIM (The Long Key)

1.  **Name**: `resend._domainkey`
2.  **Type**: Select **TXT**
3.  **Value**: Paste the long key starting with `p=MIG...` (Copy this from your Resend dashboard)
4.  **Priority**: (Leave empty)
5.  Click **Add**.

---

## Record 2: SPF (Sender Policy)

1.  **Name**: `send`
2.  **Type**: Select **TXT**
3.  **Value**: `v=spf1 include:amazonses.com ~all`
4.  **Priority**: (Leave empty)
5.  Click **Add**.

---

## Record 3: MX Record (Email Delivery)

1.  **Name**: `send`
2.  **Type**: Select **MX**
3.  **Value**: `feedback-smtp.eu-west-1.amazonses.com`
4.  **Priority**: `10`
5.  Click **Add**.

---

## ✅ Final Step: Verify

1.  After adding all 3 records in Vercel, go back to your **Resend Dashboard**.
2.  Click **"Verify DNS Records"**.
3.  It should turn **Green** within a few minutes.
