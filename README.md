# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Predisposizione progetto:
1.Installare pacchetti necessari
-creazione progetto con vite e react
npm create vite@latest ./ -- --template react

-pacchetto tailwindcss
npm install -D tailwindcss
npx tailwindcss init

-pacchetti necessari a questo progettonpm install --legacy-peer-deps@react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
npm install --legacy-peer-deps -D postcss autoprefixer

-pacchetto per integrare Tailwindcss in vite-plugin-react
npm install --legacy-peer-deps -D postcss autoprefixer
npx tailwindcss init -p

Note di sviluppo
