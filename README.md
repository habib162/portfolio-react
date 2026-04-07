# Habib | Portfolio

A modern, responsive personal portfolio website built with **React** and **Tailwind CSS**, showcasing my skills and experience as a Full-Stack Web Developer specializing in **PHP Laravel** and **React**.

---

## Live Preview

🔗 [https://portfoliome-rust.vercel.app](https://portfoliome-rust.vercel.app)

---

## Features

- Fully responsive design (mobile, tablet, desktop)
- Smooth scroll single-page layout
- Animated hero section with floating image and wave name effect
- Filterable projects grid
- Working contact form via **EmailJS** (sends directly to Gmail)
- Dark theme with accent green color palette

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Intro with animated name, floating profile image, CV download |
| **About** | Bio, stats (3.5+ years experience, 30+ projects) |
| **Services** | Laravel Backend, React Frontend, REST API, Database, Full-Stack, Auth |
| **Projects** | Filterable portfolio grid by category |
| **Blog** | Latest articles / thoughts |
| **Contact** | EmailJS-powered contact form |

---

## Tech Stack

- **React 18** — UI library
- **Vite** — build tool
- **Tailwind CSS v3** — utility-first styling
- **EmailJS** — contact form email delivery
- **Inter** — Google Font

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## EmailJS Setup

To activate the contact form:

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Connect your Gmail service → copy **Service ID**
3. Create an email template with `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}` → copy **Template ID**
4. Get your **Public Key** from Account → API Keys
5. Paste all three into `src/components/Contact.jsx`:

```js
const EMAILJS_SERVICE_ID  = 'your_service_id'
const EMAILJS_TEMPLATE_ID = 'your_template_id'
const EMAILJS_PUBLIC_KEY  = 'your_public_key'
```

---

## Author

**Habiburrahman**
Full-Stack Web Developer — PHP Laravel & React
📍 Uttara, Dhaka
📧 habiburrahman.easca@gmail.com
