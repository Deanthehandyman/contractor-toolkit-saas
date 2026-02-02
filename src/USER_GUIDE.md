# 🛠️ How to Use the Contractor Toolkit - Easy Guide

## ⚡ Quick Start (5 Minutes)

### Step 1: Get the Code Running

Open your terminal and run these 3 commands:

```bash
git clone https://github.com/Deanthehandyman/contractor-toolkit-saas.git
cd contractor-toolkit-saas
npm install
npm start
```

**Wait for it to finish...** The app will open automatically at `http://localhost:3000`

You should see a dashboard with 6 boxes:
- Job Timer
- Mileage Tracker
- Field Notes
- Estimator
- Invoicer
- CRM

---

## 📖 How to Use Each Tool

### 1. ⏱️ JOB TIMER - Track How Long You Work

**What it does:** Measures time spent on jobs

**How to use:**
1. Type a job name (example: "Roof Inspection")
2. Click **Start** button
3. Timer counts up (0:00:01, 0:00:02, etc.)
4. Click **Pause** to stop temporarily
5. Click **Start** again to continue
6. Click **Reset** to start over

**Example:**
- You start a job at 9:00 AM
- Timer shows 02:45:30 (2 hours, 45 minutes, 30 seconds)
- You know the job took that long

---

### 2. 🚗 MILEAGE TRACKER - Calculate Tax Deductions

**What it does:** Tracks miles driven to client jobs and calculates tax deductions

**How to use:**
1. Date auto-fills with today's date
2. Enter **Start Odometer** (example: 10000)
3. Enter **End Odometer** (example: 10050)
4. Enter **Notes** (example: "Client visit Dallas to Arlington")
5. Click **Log Trip**
6. Trip appears in the list
7. See **Total Miles** and **Tax Deduction** at the bottom

**Example:**
- Drive from office (10000 miles) to client (10050 miles) = 50 miles
- App shows: Total Miles: 50, Tax Deduction: $32.75
- Formula: 50 miles × $0.655 per mile = $32.75

**Delete trips:** Click the red "Delete" button

---

### 3. 📝 FIELD NOTES - Remember Important Details

**What it does:** Save important notes about jobs with tags

**How to use:**
1. Enter a **Title** (example: "Roof Damage")
2. Enter **Content** (example: "Found 5 missing shingles on south side")
3. Enter **Tags** (example: "urgent, roof repair")
4. Click **Save Note**
5. Note appears as a card with the tag badges

**Example:**
- Title: "Roof Assessment"
- Content: "Roof is 15 years old, needs replacement in 2-3 years"
- Tags: "inspection, follow-up"
- Click Save → See your note as a card

**Delete notes:** Click the red "Delete" button on any note

---

### 4. 💰 ESTIMATOR - Create Price Quotes

**What it does:** Calculate total cost of a job with line items

**How to use:**
1. First row has "Sample Item" - edit it
2. Change **Description** (example: "Labor")
3. Change **Quantity** (example: 8)
4. Change **Price** (example: 75)
5. Row shows total: 8 × 75 = $600
6. Click **Add Item** for more rows
7. Add all items needed
8. Bottom shows **Total** (sum of all items)
9. Click red **Delete** to remove items

**Example Job Quote:**
- Item 1: Materials, qty 1, price $200 = $200
- Item 2: Labor, qty 8, price $75 = $600
- Item 3: Travel, qty 1, price $50 = $50
- **Total: $850**

---

### 5. 📄 INVOICER - Send to Customers

**What it does:** Creates professional invoices

**How to use:**
1. Enter **Client Name** (example: "ABC Corp")
2. Enter **Email** (example: "contact@abccorp.com")
3. Enter **Phone** (example: "214-555-0100")
4. Enter **Address** (example: "123 Main St, Dallas TX")
5. Items from Estimator show automatically
6. App calculates:
   - Subtotal (sum of items)
   - Tax (10% of subtotal)
   - Total (subtotal + tax)
7. Click **Print Invoice** to print/save as PDF

**Example:**
- Client: "John's Home Repair"
- Email: "john@homerepair.com"
- Phone: "214-555-0123"
- Address: "456 Oak Ave, Dallas TX"
- Items subtotal: $300
- Tax 10%: $30
- **Invoice Total: $330**
- Click Print → Save as PDF or print

---

### 6. 👥 CRM - Manage Your Clients

**What it does:** Keep a list of all your customers

**How to use:**
1. One client (John Doe) already in the list
2. Enter **Client Name** (example: "Jane Smith")
3. Enter **Phone** (example: "214-555-0150")
4. Enter **Address** (example: "789 Pine St, Arlington TX")
5. Click **Add Client**
6. Client appears in table below
7. Click red **Delete** to remove clients

**Example:**
- Name: "John Smith"
- Phone: "214-555-0200"
- Address: "999 Elm St, Irving TX"
- Click Add Client → Appears in list

---

## 🔄 REAL WORLD EXAMPLE - A Day at Work

### Scenario: Roof Inspection Job

**Morning (8:00 AM):**
1. Open app
2. Go to **CRM** → Already have "John Doe" as customer
3. Go to **Job Timer** → Type "John's Roof Inspection"
4. Click **Start** (starts at 8:05 AM)

**During work:**
1. Drive to client:
   - **Mileage Tracker**: Start 10000, End 10025 = 25 miles
2. At the job, find damage:
   - **Field Notes**: Title "Roof Damage", Content "5 missing shingles", Tag "urgent"

**Afternoon (11:45 AM):**
1. Finish inspection
2. **Job Timer** shows 3:40:00
3. Click **Stop**

**Back at office:**
1. **Estimator**: Create quote
   - Labor: 3.67 hours × $100 = $367
   - Materials: Shingles $200
   - Total: $567
2. **Invoicer**: Create invoice for John Doe
   - Subtotal: $567
   - Tax 10%: $56.70
   - Total: $623.70
   - Click Print → Save as PDF
3. **Mileage Tracker**: Drive back
   - Start 10025, End 10050 = 25 miles
   - Total for day: 50 miles = $32.75 tax deduction

**Day Summary:**
- Worked: 3:40:00
- Drove: 50 miles ($32.75 deduction)
- Created invoice: $623.70
- Saved notes for follow-up

---

## ⚠️ Common Questions

**Q: Where does my data go?**
A: Data stays on your computer while the app is open. When you close and reopen, data clears. (Can add saving feature later)

**Q: Can I delete and start over?**
A: Yes! Refresh your browser (F5) and everything clears. Or use Delete buttons on individual items.

**Q: How do I print an invoice?**
A: Go to Invoicer, click "Print Invoice" button, choose "Save as PDF" from print dialog.

**Q: Can I edit items after adding?**
A: Yes! Click on any field (in tables) and change the value. It updates automatically.

**Q: How do I export my data?**
A: Screenshot the tables or use Print to save as PDF.

---

## 🎯 Tips & Tricks

✅ **Tip 1:** Start Job Timer FIRST, then do the work
✅ **Tip 2:** Add Field Notes while on the job (take photos too!)
✅ **Tip 3:** Create Estimate same day as job for accuracy
✅ **Tip 4:** Track Mileage immediately - don't forget!
✅ **Tip 5:** Print Invoice right away to send to client
✅ **Tip 6:** Add clients to CRM for repeat business

---

## 🚀 Next Features Coming

- Save data to cloud
- Export to Excel/PDF
- Photo attachments
- GPS location tracking
- Payment processing
- Email invoices directly

---

## ❓ Need Help?

**App not starting?**
- Make sure you have Node.js installed
- Try: `npm install` again
- Try: `npm start` again

**Something looks broken?**
- Open browser DevTools (F12)
- Check the Console tab for errors
- Report issue with screenshot

**Forgot what a button does?**
- Hover over buttons (tooltips coming soon)
- Check this guide again

---

## 📱 Mobile Users

The app works on phones too!
- Landscape mode recommended
- Scroll side-to-side on tables
- Touch-friendly buttons

---

**Version:** 1.0
**Last Updated:** February 1, 2026
**Created for:** Dallas Contractor Dean

**You're all set! Go make some money! 💰**
