# FlowSync — B2B SaaS Marketing Website

FlowSync is a modern, responsive marketing website for a fictional B2B software company focused on AI-powered workflow automation, team collaboration, and business productivity.

This project was built as part of the **Digital Heroes Web Development Training Task**.

## 🚀 Live Demo

**Website:** https://flowsync-sandy.vercel.app/

**GitHub:** `YOUR_GITHUB_REPOSITORY_URL`

---

## 📌 Project Overview

FlowSync is designed as a production-style SaaS marketing website with reusable React components, responsive layouts, semantic HTML, accessibility considerations, SEO metadata, Open Graph tags, and structured data.

The website contains four primary pages:

* **Home** — Product introduction, features, statistics, testimonials, FAQ, and CTA
* **Product** — Platform capabilities, integrations, and security
* **Pricing** — Pricing plans, billing toggle, feature comparison, FAQ, and CTA
* **Contact** — Contact information and accessible contact form

---

## ✨ Features

### Marketing & UI

* Responsive design for mobile, tablet, and desktop
* Modern B2B SaaS visual design
* Reusable components
* Data-driven pricing and FAQ sections
* Responsive navigation
* Interactive pricing billing toggle
* FAQ accordion
* Clear calls-to-action
* Consistent typography, spacing, buttons, and cards

### Accessibility

* Semantic HTML structure
* Correct heading hierarchy
* Accessible navigation
* Keyboard-friendly interactive elements
* Visible focus states
* Skip-to-content link
* Proper form labels
* Accessible FAQ controls using `aria-expanded` and `aria-controls`
* Accessible pricing comparison table
* Descriptive image alt text

### SEO

* Unique page titles
* Meta descriptions
* Canonical URLs
* Robots metadata
* Open Graph metadata
* Twitter/X card metadata
* Author metadata
* SEO-friendly page structure

### Structured Data

The website includes JSON-LD structured data using Schema.org:

* `Organization`
* `SoftwareApplication`
* `FAQPage`

Structured data was validated using Google's Rich Results Test and Schema.org validation tools.

---

## 🛠️ Tech Stack

* React
* Vite
* Tailwind CSS
* React Router
* React Helmet Async
* Lucide React
* JavaScript (ES6+)
* Vercel

---

## 📁 Project Structure

```text
flowsync/
├── public/
│   ├── logo.png
│   └── og-image.png
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── CTA.jsx
│   │   ├── PricingCard.jsx
│   │   ├── ContactForm.jsx
│   │   ├── ProductHero.jsx
│   │   ├── PlatformOverview.jsx
│   │   ├── Integrations.jsx
│   │   ├── Security.jsx
│   │   ├── SEO.jsx
│   │   ├── OrganizationSchema.jsx
│   │   ├── SoftwareSchema.jsx
│   │   └── FAQSchema.jsx
│   │
│   ├── data/
│   │   ├── features.js
│   │   ├── faq.js
│   │   └── pricing.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Product.jsx
│   │   ├── Pricing.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧩 Component Architecture

The project follows a reusable component-based architecture.

For example, pricing plans are stored as data:

```text
pricing.js
     ↓
Pricing.jsx
     ↓
PricingCard.jsx
```

This allows content such as pricing plans, features, and FAQs to be changed without modifying the underlying layout components.

The same approach is used for:

* Features
* Pricing plans
* FAQs
* Testimonials
* Navigation
* CTA sections

This makes the website easier for a content team to extend.

---

## ♿ Accessibility

Accessibility was considered throughout the application.

Implemented improvements include:

* Semantic `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`
* Logical heading hierarchy
* Keyboard-accessible controls
* `:focus-visible` styles
* Skip navigation link
* Accessible form labels
* Required form fields
* ARIA attributes for interactive FAQ elements
* Accessible pricing comparison table
* Meaningful image `alt` attributes

---

## 🔎 SEO & Structured Data

Each page has its own SEO metadata using `react-helmet-async`.

The SEO component provides:

* `<title>`
* Meta description
* Canonical URL
* Robots metadata
* Open Graph title
* Open Graph description
* Open Graph image
* Open Graph URL
* Twitter/X card metadata

Structured data includes:

```text
Organization
SoftwareApplication
FAQPage
```

---

## ⚡ Performance

Performance was considered during development through:

* Responsive image sizing
* Image dimensions to reduce layout shifts
* Lazy loading for non-critical images
* Reusable components
* Minimal dependencies
* Vite production build
* Optimized CSS through Tailwind CSS
* Avoiding unnecessary JavaScript

### Performance Evidence

Performance was tested using:

* Chrome Lighthouse
* Google PageSpeed Insights

### Evidence

Add your final screenshots to an `evidence/` folder before submission:

```text
evidence/
├── lighthouse-mobile.png
├── pagespeed-mobile.png
└── schema-validation.png
```

---

## 💻 Run Locally

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd flowsync
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local Vite development URL.

---

## 📦 Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🌐 Deployment

The website is deployed using Vercel.

**Production URL:**

https://flowsync-sandy.vercel.app/

---

## 📊 Evaluation Requirements

| Requirement                | Implementation                  |
| -------------------------- | ------------------------------- |
| 4+ marketing pages         | Home, Product, Pricing, Contact |
| Responsive layout          | Tailwind CSS                    |
| Reusable architecture      | Shared React components         |
| Semantic HTML              | Implemented                     |
| Keyboard accessibility     | Implemented                     |
| SEO metadata               | Implemented on every page       |
| Open Graph                 | Implemented                     |
| Organization Schema        | Implemented                     |
| SoftwareApplication Schema | Implemented                     |
| FAQPage Schema             | Implemented                     |
| Lighthouse testing         | Completed                       |
| PageSpeed testing          | Completed                       |
| Public GitHub repository   | Available                       |
| Live deployment            | Vercel                          |

---

## 🎯 Digital Heroes Training Task

This website was built for the Digital Heroes Web Development Training Task.

**Built for Digital Heroes Training Task**

---

## 👩‍💻 Author

**Charu Mehra**

Frontend / MERN Stack Developer

Built with React, Tailwind CSS, and attention to accessibility, SEO, performance, and responsive design.
