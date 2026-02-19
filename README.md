# Growmore Parking Solutions - Website

Modern, responsive Next.js website for Growmore Parking Solutions Pvt Limited - a professional valet parking and parking management company.

## Features

- ✅ Modern, responsive design with green and white theme
- ✅ SEO optimized with proper meta tags and structure
- ✅ Built with Next.js 14 (App Router)
- ✅ Styled with Tailwind CSS
- ✅ Fast performance and optimized images
- ✅ Mobile-first responsive design
- ✅ Interactive contact form
- ✅ Comprehensive service pages
- ✅ Smooth animations and transitions

## Pages

1. **Home** - Hero section, features, services overview, testimonials
2. **Services** - Detailed service descriptions with features and benefits
3. **About Us** - Company story, mission, vision, values
4. **Contact** - Contact form and information

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Language**: JavaScript (React)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
growmore-parking-solutions/
├── app/
│   ├── layout.js          # Root layout with Header/Footer
│   ├── page.js            # Home page
│   ├── globals.css        # Global styles
│   ├── about/
│   │   └── page.js        # About page
│   ├── services/
│   │   └── page.js        # Services page
│   └── contact/
│       └── page.js        # Contact page
├── components/
│   ├── Header.js          # Navigation header
│   └── Footer.js          # Footer component
├── logo/
│   └── logo.png           # Company logo
├── public/
│   └── logo/              # Public assets
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## Customization

### Colors

The theme uses green and white colors. Primary green shades can be customized in `tailwind.config.js`:

```js
colors: {
  primary: {
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    // ...
  }
}
```

### Logo

Replace the logo file in `/logo/logo.png` with your company logo.

### Contact Information

Update contact details in:
- `components/Header.js`
- `components/Footer.js`
- `app/contact/page.js`

## SEO Optimization

Each page includes:
- Proper meta titles and descriptions
- Semantic HTML structure
- Open Graph tags
- Optimized headings hierarchy
- Alt text for images

## Performance

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized CSS with Tailwind
- Fast page transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Growmore Parking Solutions Pvt Limited. All rights reserved.

## Contact

For any queries regarding the website:
- Email: info@growmoreparking.com
- Phone: +91 123 456 7890
