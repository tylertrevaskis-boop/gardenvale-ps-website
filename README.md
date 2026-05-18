# Gardenvale Primary School Website

A modern, clean website rebuild for Gardenvale Primary School. Built with Next.js, Tailwind CSS, and deployed to Vercel.

## Design Direction

- **Clean & modern** with lots of white space
- **School colours**: Navy (`#003D5C`), Cyan (`#5DCCFF`), Orange (`#FF6B35`)
- **Fonts**: Cormorant Garamond (headings) + Outfit (body)
- **Responsive** design for mobile, tablet, and desktop

## Features

- Sticky navigation with "Enrol now" CTA
- Hero section with split layout (navy text panel + image)
- Stats strip (450+ students, Prep–6, 2 campuses, Est. 1921)
- **HERRRby values** section (school centrepiece)
- **PERCI learner dispositions** section (woven into learning narrative)
- Quick links (Calendar, Newsletter, School Council, Wellbeing)
- News card grid (3 cards with "View all" link)
- Learning section (photo + text about our approach)
- Wellbeing section (text + photo)
- Footer with full contact info and 4 link columns

## Project Structure

```
gardenvale-homepage/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── StatsStrip.tsx
│   ├── HERRRby.tsx
│   ├── PERCI.tsx
│   ├── QuickLinks.tsx
│   ├── NewsCards.tsx
│   ├── Learning.tsx
│   ├── Wellbeing.tsx
│   └── Footer.tsx
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json
```

## Setup

1. **Clone the repo** (once pushed to GitHub)
```bash
git clone <repo-url>
cd gardenvale-homepage
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Add Your Logo
Replace the "G" placeholder in `components/Navigation.tsx` with your actual logo:
```tsx
<img src="/GPS_Shield-Vertical-Navy.png" alt="Gardenvale Primary" className="w-10 h-10" />
```

### Add Real Images
Replace placeholder image sections with actual school photos. Each placeholder is marked with emoji (📷, 📚, 🌟, etc.).

### Update Content
Edit component files to replace placeholder text with real copy:
- Hero tagline and description
- Values descriptions
- News articles
- Section text

### School Details
Update contact info in `components/Footer.tsx`:
- Senior/Junior campus addresses
- Phone numbers
- Email

## Building for Production

```bash
npm run build
npm start
```

This creates an optimized production build.

## Deployment to Vercel

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit: Gardenvale homepage prototype"
git push origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import the GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Domain Setup**
   - Once deployed, connect your custom domain `gardenvaleps.vic.edu.au`
   - Vercel provides DNS configuration instructions

## Pages to Build

Once the homepage is approved, create these additional pages:
- `/about` - School history, vision, campuses
- `/learning` - Full learning overview, curriculum
- `/wellbeing` - Wellbeing programs, support
- `/community` - School council, parents, staff, students
- `/news` - News blog/archive
- `/enrolments` - Enrolment information, forms
- `/contact` - Contact form, locations

## Next Steps

- [ ] Add actual school photos to placeholder sections
- [ ] Replace emoji placeholders with real images
- [ ] Create About page
- [ ] Create Learning page
- [ ] Create Wellbeing page
- [ ] Create Community page
- [ ] Create News archive page
- [ ] Create Enrolments page
- [ ] Create Contact page
- [ ] Set up contact form (Formspree, Netlify Forms, etc.)
- [ ] Add newsletter signup
- [ ] Deploy to Vercel

## Tech Stack

- **Framework**: Next.js 14+ (Static Export)
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Cormorant Garamond + Outfit)
- **Hosting**: Vercel
- **Repository**: GitHub

## Support

For questions about the design or setup, reach out to the web team.

---

*Built with clean code, intentional design, and Gardenvale values in mind.*
