# Lumiere Stay & Table

Production-grade demo website for a luxury restaurant and boutique hotel.

## Project Structure

- `client` - Vite, React, Tailwind CSS, Framer Motion, React Router, Swiper, React Helmet Asynccls
    
- `server` - Node.js, Express, security middleware, reservation/contact endpoints, optional MongoDB and Nodemailer wiring

## Run Locally

```bash
npm install
npm install --prefix client
npm install --prefix server
npm run dev
```

Frontend: `http://localhost:5173`  
Backend: `http://localhost:5000/api/health`

## Production Notes

- Add real brand imagery or self-host optimized images for production.
- Set `MONGODB_URI` in `server/.env` to persist reservations.
- Set mail environment variables to enable confirmation/enquiry email delivery.
- Update phone numbers, address, OpenGraph URL, and Google Maps embed for the actual venue.
