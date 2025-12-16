# 📧 Resend Domain DNS Configuration Guide

This guide contains the EXACT records you need to add to your domain provider's DNS settings to verify your domain with Resend.

---

## 1. Domain Verification Records (CRITICAL)

These records authorize Resend to send emails on your behalf. Without these, emails will land in spam or be blocked.

### **Record 1: DKIM (DomainKeys Identified Mail)**

This signature prevents email spoofing.

| Type | Name / Host | Value / Content | Priority |
|------|------------|-----------------|----------|
| **TXT** | `resend._domainkey` | `p=MIGfMA0GCSqGSIb3DQEB...` <br>*(Copy the FULL long string from your dashboard)* | N/A |

---

### **Record 2: SPF (Sender Policy Framework)**

This tells email providers which servers are allowed to send mail for you.

| Type | Name / Host | Value / Content | Priority |
|------|------------|-----------------|----------|
| **TXT** | `send` | `v=spf1 include:amazonses.com ~all` | N/A |

---

### **Record 3: Return-Path MX**

This handles bounced emails (e.g., if you send to an invalid address).

| Type | Name / Host | Value / Content | Priority |
|------|------------|-----------------|----------|
| **MX** | `send` | `feedback-smtp.eu-west-1.amazonses.com` | **10** |

---

## 2. Optional Recommended Records

### **Record 4: DMARC (Domain-based Message Authentication, Reporting, and Conformance)**

This tells email providers what to do if an email fails the SPF/DKIM check. Setting it to `p=none` is safe for testing.

| Type | Name / Host | Value / Content | Priority |
|------|------------|-----------------|----------|
| **TXT** | `_dmarc` | `v=DMARC1; p=none;` | N/A |

---

## 3. How to Add These Records (General Steps)

1.  **Log in** to your Domain Provider (GoDaddy, Namecheap, Cloudflare, Vercel, etc.).
2.  Find **DNS Settings** or **Manage DNS**.
3.  Click **Add New Record**.
4.  **Copy & Paste** the Type, Name, and Value from the tables above.
    *   *Note: For the long DKIM key, make sure you copy the WHOLE thing.*
5.  Click **Save**.
6.  Repeat for all 3 (or 4) records.

---

## 4. Verification

1.  Go back to your **Resend Dashboard**.
2.  Click the **"Verify DNS Records"** button.
3.  If the status stays "Pending", **wait 5-10 minutes** and refresh. DNS changes can sometimes take time to propagate.

---

## ❓ Common Issues

*   **"Name" field**: Some providers (like GoDaddy) only want the first part (e.g., `send`). Others want the full domain (e.g., `send.yourdomain.com`). Start with just the short name (`send`, `resend._domainkey`).
*   **"Priority" field**: Only required for **MX** records. Set it to `10`.
