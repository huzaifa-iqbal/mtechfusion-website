TECH FUSION — FINAL FORM DELIVERY PATCH

Destinations:
- Contact form -> info@mtechfusion.com
- Get a Quote -> sales@mtechfusion.com
- Careers + resume -> careers@mtechfusion.com

1. Copy this patch into the project root and replace matching files.
2. Run: npm install
3. Create .env.local in the project root from .env.example.
4. Put the real password for info@mtechfusion.com only in .env.local.
5. Restart: npm run dev
6. Test Contact, Quote, and Careers Apply.
7. Do not commit .env.local to GitHub.

For deployment, add the same SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASSWORD values in Vercel Project Settings -> Environment Variables.
