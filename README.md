<div align="center">

# Anshuman Kumar Singh — Portfolio

**Data Analytics & Software Development**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-3F6E58?style=for-the-badge&logo=vercel&logoColor=white)](https://anshuman-portfolio-two.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/anshuman-kumar-singh-b294b1343)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/anshumanks2004)

</div>

---

## 📌 Overview

Personal portfolio website for **Anshuman Kumar Singh**, a BCA Data Analytics graduate from Galgotias University. Built with **Next.js 16**, **Tailwind CSS v4**, and **TypeScript** — featuring smooth scroll-triggered animations, a typewriter hero, and a clean editorial design system.

---

## ✨ Features

- **Typewriter headline** with blinking cursor on the Hero section
- **Scroll-triggered animations** — fade-in + directional slide via `IntersectionObserver` (no external animation library)
- **Staggered cascade** for Skills tags, Experience timeline items, and Project cards
- **Pulsing timeline dots** on the Experience section
- **Project card glow** — green border + shadow on hover
- **Shimmer hover effect** on skill and tech stack tags
- **Contact link lift** — subtle 2px raise + shadow on hover
- **Navbar slide-down** entrance animation on load
- **`prefers-reduced-motion`** respected — all animations gracefully disabled for accessibility
- **Responsive** — mobile-first layout, hamburger nav on small screens

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Space Grotesk + IBM Plex Sans (Google Fonts) |
| Icons | [Lucide React](https://lucide.dev/) |
| Animations | CSS Keyframes + `IntersectionObserver` (zero deps) |
| Deployment | Vercel |

---

## 📂 Folder Structure

```
anshuman-portfolio/
├── app/
│   ├── globals.css        # Design tokens, keyframes, animation utilities
│   ├── layout.tsx         # Root layout with font config & metadata
│   └── page.tsx           # Main page assembly
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Sticky nav with mobile hamburger menu
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx       # Typewriter + animated stats
│   │   ├── About.tsx
│   │   ├── Skills.tsx     # Staggered tag cascade + shimmer hover
│   │   ├── Experience.tsx # Timeline with pulsing dots
│   │   ├── Projects.tsx   # Cards with glow border hover
│   │   ├── Certifications.tsx
│   │   └── Contact.tsx    # Link lift hover + resume download
│   └── ui/
│       ├── AnimatedSection.tsx  # Reusable scroll-trigger wrapper
│       └── icons.tsx
│
├── data/                  # Static content (profile, projects, skills…)
├── public/
│   ├── images/            # Profile photo
│   └── resume/            # Downloadable PDF resume
└── types/                 # Shared TypeScript interfaces
```

---

## 🚀 Running Locally

```bash
# 1. Clone the repo
git clone https://github.com/anshumanks2004/anshuman-portfolio.git
cd anshuman-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📄 Sections

| Section | Description |
|---|---|
| **Hero** | Name, headline with typewriter effect, CTA buttons, profile photo, key stats |
| **About** | Bio, education details, location |
| **Skills** | Grouped skill tags — Analytics, Programming, Data Processing, ML, Soft Skills |
| **Experience** | Timeline of 3 internships (Alteryx, Google for Developers, AWS Academy) |
| **Projects** | OEMS — Online Examination & Monitoring System (Python · Flask · MySQL) |
| **Certifications** | Professional certifications |
| **Contact** | Email, phone, LinkedIn, GitHub, resume download |

---

## 📬 Contact

| | |
|---|---|
| **Email** | anshumanks2123@gmail.com |
| **Phone** | +91-9259090072 |
| **LinkedIn** | [anshuman-kumar-singh-b294b1343](https://linkedin.com/in/anshuman-kumar-singh-b294b1343) |
| **Location** | Noida, Uttar Pradesh, India |

---

<div align="center">

Made with ❤️ by **Anshuman Kumar Singh**

</div>
