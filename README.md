## Personal Portfolio (Vite + React + Tailwind)

Modern, fast, and responsive developer portfolio built with Vite, React, and Tailwind CSS. It showcases projects, skills, experience, and contact details with a clean UI and smooth UX.

### Live Demo
- Deployed URL: `https://<your-domain-or-github-pages>` (update if deployed)

### Features
- **Responsive design**: Looks great on mobile, tablet, and desktop.
- **Projects section**: Reusable `ProjectCard` components.
- **Skills section**: Toggleable categories via `SkillsToggle`.
- **About and Journey sections**: Clear narrative with visuals.
- **Contact form UI**: Ready for integration with a backend or form service.
- **Fast dev experience**: Vite HMR, modern React, and Tailwind v4.

### Tech Stack
- **Frontend**: React 19, ReactDOM 19
- **Build tool**: Vite 7
- **Styling**: Tailwind CSS 4 with `@tailwindcss/vite`
- **Linting**: ESLint 9 with React Hooks and Refresh plugins

---

## Getting Started

### Prerequisites
- Node.js 18+ (recommended) and npm 9+
  - Check versions:
    ```bash
    node -v
    npm -v
    ```

### Installation
```bash
npm install
```

### Development
Start the local dev server with hot reload:
```bash
npm run dev
```
Vite will print a local URL (usually `http://localhost:5173`).

### Production Build
```bash
npm run build
```
The optimized output will be generated in the `dist` directory.

### Preview Production Build
```bash
npm run preview
```

---

## Available Scripts
- **dev**: Launches Vite dev server with HMR.
- **build**: Bundles the app for production.
- **preview**: Serves the built app locally.
- **lint**: Runs ESLint across the project.

---

## Project Structure
Key files and directories:
- `index.html`: App HTML entry.
- `src/main.jsx`: React bootstrap and mounting.
- `src/App.jsx`: App-level composition and routing (if any).
- `src/index.css`: Global styles and Tailwind layers.
- `src/components/`: Reusable UI sections and cards
  - `Navbar.jsx`, `Hero.jsx`, `About.jsx`, `Journey.jsx`
  - `Projects.jsx`, `ProjectCard.jsx`, `Card.jsx`, `Item.jsx`
  - `Skills.jsx`, `SkillsToggle.jsx`, `TechCard.jsx`
  - `Contact.jsx`, `Footer.jsx`
- `src/assets/`: Images and SVGs used throughout the app.
- `public/`: Static assets served as-is (e.g., `logo.png`).
- `vite.config.js`: Vite configuration.
- `eslint.config.js`: ESLint configuration.

---

## Styling with Tailwind CSS v4
This project uses Tailwind CSS 4 with the official Vite integration:
- Dependency: `@tailwindcss/vite`
- Tailwind is applied via `src/index.css` with `@import` layers.
- No PostCSS config required for basic usage.

Useful references:
- Tailwind CSS: `https://tailwindcss.com/docs`
- Vite: `https://vitejs.dev/guide/`
- React: `https://react.dev/learn`

---

## Customization
- Update personal info, links, and content in the components under `src/components`.
- Replace images in `src/assets` and `public/logo.png`.
- Tweak theme and spacing using Tailwind utility classes in JSX.

---

## Deployment
You can deploy the `dist` folder to any static hosting:
- GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static server.
General flow:
1. Build: `npm run build`
2. Deploy the `dist/` directory per your host’s instructions.

---

## Contact
Add your contact details and social links:
- Email: `you@example.com`
- LinkedIn: `https://www.linkedin.com/in/your-handle`
- GitHub: `https://github.com/your-handle`

---

## License
This project is for personal portfolio use. You may adapt it for your own portfolio. For broader reuse or attribution preferences, add a specific license (e.g., MIT) here.
