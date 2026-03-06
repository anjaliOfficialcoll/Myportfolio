# FormSpree Setup Instructions

Your contact form is now configured to use FormSpree! Follow these simple steps:

## Step 1: Sign Up for FormSpree

1. Go to [https://formspree.io](https://formspree.io)
2. Click "Get Started" or "Sign Up"
3. Create a free account (supports 50 submissions/month)

## Step 2: Create a New Form

1. After logging in, click "New Form" or "+" button
2. Give your form a name (e.g., "Portfolio Contact Form")
3. You'll receive a unique Form ID

## Step 3: Update Your Environment Variable

1. Copy your Form ID from FormSpree (looks like: `abc123xyz`)
2. Open `.env.local` file in your project root
3. Replace `YOUR_FORM_ID` with your actual Form ID:
   ```
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/abc123xyz
   ```

## Step 4: Restart Your Development Server

```bash
# Stop the current server (Ctrl+C) and restart
npm run dev
```

## Step 5: Test Your Contact Form

1. Go to your portfolio contact section
2. Fill out the form and submit
3. Check your email - FormSpree will send you the message!

## Features Included:

✅ All form submissions sent directly to your email
✅ Spam protection built-in
✅ Email verification for new forms
✅ FormSpree dashboard to view all submissions
✅ No backend or email server configuration needed

## Free Tier Limits:

- 50 submissions per month
- 1000 submissions total
- Upgrade to paid plan for unlimited submissions

## Notes:

- On first submission, FormSpree will send you a verification email
- Click the link in that email to activate your form
- After activation, all submissions will be forwarded to your email
- You can customize email templates and add AJAX responses in FormSpree settings

## Need Help?

Check out [FormSpree Documentation](https://help.formspree.io/)
