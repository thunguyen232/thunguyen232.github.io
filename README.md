# Thu Nguyen — BI/Data Analyst Portfolio

A responsive, dependency-free portfolio website built with HTML, CSS, and vanilla JavaScript.

## Included

- Responsive desktop, tablet, and mobile layouts
- Sticky navigation with active-section highlighting
- Hero analytics dashboard illustration built entirely with HTML/CSS/SVG
- About, experience timeline, technical skills, projects, education, and contact sections
- Resume download
- Scroll reveal animations with reduced-motion support
- GitHub Pages deployment workflow

## Run locally

```bash
npm start
```

Then open `http://localhost:8080`.

You can also run:

```bash
python3 -m http.server 8080
```

## Customize

- Main content: `index.html`
- Styling: `styles.css`
- Navigation and animations: `script.js`
- Resume: `assets/Thu_Nguyen_Resume.pdf`

Update the LinkedIn URL in `index.html` if your public profile URL differs from the placeholder used here.

## Deploy with GitHub Pages

1. Create a GitHub repository and push this project.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions**.
4. The included workflow deploys automatically after each push to `main`.
