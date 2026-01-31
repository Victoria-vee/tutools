# Tutools - Copilot Instructions

## Project Overview

**Tutools** is a frontend-focused tutoring platform landing page built with vanilla HTML, CSS, and SVG. It's a single-page marketing site designed to showcase tutoring services and encourage user signup/login.

## Architecture & Key Files

### Static File Structure
- **[index.html](../index.html)**: Single landing page with header navigation, hero section with CTA
- **[styles.css](../styles.css)**: CSS custom properties system (CSS variables) for theming and responsive design
- **[images/](../images/)**: Static assets (SVG animations, PNG illustrations)

### Design System
The project uses **CSS variables** defined in `:root` for consistent theming:
- Colors: `--bg`, `--primary`, `--primary-soft`, `--text-main`, `--text-muted`, `--border`
- Typography: `--fs-h1`, `--fs-h2`, `--fs-h3`, `--fs-body`, `--fs-small`
- Animations: `--transition-fast` (0.2s), `--transition-normal` (0.35s)
- Shadows: `--shadow`

Reference these variables instead of hardcoding colors/sizes.

## Key Patterns & Conventions

### SVG Logo Component
The logo uses inline SVG with CSS-controlled circles. The pattern:
- `.logo-badge` wrapper contains both SVG and `<h1>`
- Two `<circle>` elements filled with primary colors
- Responsive sizing via media queries at 720px breakpoint

### Navigation & Links
- Anchor tags (`<a>`) have consistent hover effects: scale transform + color inversion
- Navigation links have `--transition-normal` applied for smooth animation
- "Start Learning" CTA button uses primary color background with white text

### Responsive Design
- **Mobile breakpoint**: 720px max-width
- Content grid switches from row to column layout at breakpoint
- Logo and image sizes reduce proportionally
- Uses flexbox for layout (no grid in this project)

### Typography
- **Headers**: 'Sora' font family (variable weight 100-800)
- **Body**: 'Inter' font family (variable weight 100-900)
- Fonts imported from Google Fonts with extensive weight/style variations

## Common Tasks

### Adding New Sections
1. Add section element inside `<section>` tag
2. Use `.content` class wrapper for consistent margins (100px left/right on desktop)
3. Update flexbox alignment as needed (align-items, justify-content)
4. Add corresponding media query if content changes layout below 720px

### Updating Colors
Always update `:root` CSS variables first, then apply via `var(--variable-name)` throughout. Current color palette focuses on blue tones (`--primary: #4F6DFF`) with soft backgrounds.

### SVG Icons & Patterns
Commented-out code in HTML shows a tiled SVG pattern system using `<symbol>` definitions for reusable icons (calculator, brain, library, laptop). This pattern can be uncommented to add background decoration.

## Known Quirks & Notes

- **HTML comments** contain substantial commented-out SVG pattern code (lines 32-82). This appears to be a previous approach that was disabled but kept as reference.
- **Links reference external pages**: `login.html` is referenced but may not exist yet
- **Image paths**: Uses `/images/` absolute paths; ensure these resolve correctly in deployment
- **Header background**: Uses `--text-muted` color (#64748B - a slate gray) which differs from typical header styling patterns

## Development Notes

- This is a **static site** - no build process or bundler required
- Local development: Open `index.html` directly in browser or use a simple HTTP server
- No JavaScript currently; all interactions are CSS-based (hover effects, transitions)
- Git repository exists but appears minimal (no branches/workflows visible)

## Next Steps / Common Additions

If expanding this project, consider:
- Adding JavaScript for interactive navigation/scrolling
- Creating additional pages (login.html, about.html, services.html)
- Implementing form functionality for contact section
- Using the SVG pattern system in comments to enhance visual design
- Setting up a proper build process if complexity increases
