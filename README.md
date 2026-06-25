# Healthy Pharmacy Website

A modern, premium healthcare startup website built with Next.js, React, Tailwind CSS, and Framer Motion. Designed for maximum conversion with a focus on prescription transfers, medication delivery, and personalized pharmacy care.

## Features

✨ **Hero Section** - Eye-catching headline with dual CTAs and floating design elements
🎨 **Feature Cards** - Three compelling feature highlights with icons and descriptions
📝 **Prescription Transfer Form** - Interactive form with validation and success animations
📊 **Statistics Section** - Animated counters showcasing key metrics
⭐ **Testimonials Carousel** - Customer testimonials with 5-star ratings and smooth transitions
🧭 **Sticky Navbar** - Blur effect when scrolling, smooth navigation
📱 **Fully Responsive** - Mobile-first design that works on all devices
🎭 **Premium Animations** - Smooth Framer Motion animations throughout

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist (Next.js default)

## Project Structure

```
healthypharmacy/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   ├── globals.css         # Global styles
│   └── favicon.ico
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   └── index.ts
│   └── sections/           # Page sections
│       ├── Navbar.tsx
│       ├── HeroSection.tsx
│       ├── FeaturesSection.tsx
│       ├── TransferFormSection.tsx
│       ├── StatisticsSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── Footer.tsx
│       └── index.ts
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd healthypharmacy
```

2. Dependencies are already installed. To reinstall if needed:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## Available Scripts

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization Guide

### Editing Contact Information
Update these files with your actual pharmacy details:
- **Phone number**: `components/sections/HeroSection.tsx` (line ~95)
- **Address**: `components/sections/HeroSection.tsx` (line ~97) and `components/sections/Footer.tsx` (line ~196)
- **Email**: `components/sections/Footer.tsx` (line ~186)

### Changing Colors
Edit `tailwind.config.ts` to customize the color scheme:
- `primary` - Blue colors (primary actions)
- `accent` - Green colors (secondary accents)

### Adding Your Logo
Replace the "HP" placeholder in the Navbar component:
1. Open `components/sections/Navbar.tsx`
2. Replace the logo div (around line 30) with your logo image or SVG

### Connecting the Transfer Form
The form is ready for backend integration. To connect your API:

1. Open `components/sections/TransferFormSection.tsx`
2. Find the `handleSubmit` function (around line 94)
3. Replace the TODO comment with your actual API endpoint:

```typescript
const response = await fetch('/api/prescriptions/transfer', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```

### Customizing Testimonials
Edit the testimonials in `components/sections/TestimonialsSection.tsx`:
- Update the `testimonials` array with real customer reviews
- Add profile images (currently using initials as placeholders)

### Updating Statistics
Edit the statistics in `components/sections/StatisticsSection.tsx`:
- Change values in the `stats` array
- Customize icons and labels

## Customization Tips

### Animations
All animations use Framer Motion. Adjust animation properties in individual components:
- `duration` - Animation speed in seconds
- `delay` - Delay before animation starts
- `variants` - Custom animation states

### Typography
The site uses Geist font family. To change:
1. Update `app/layout.tsx` imports
2. Modify font variables in the HTML tag

### Spacing & Layout
Adjust spacing using Tailwind classes (p-, m-, gap-, etc.):
- Large sections use `py-20` (80px vertical padding)
- Cards use `p-8` (32px padding)

## Performance Optimization

- ✓ Production build optimized with Turbopack
- ✓ Server-side rendering for fast initial loads
- ✓ CSS-in-JS optimizations with Tailwind
- ✓ Image optimization ready (use Next.js Image component for images)

## Deployment

### Deploy to Vercel (Recommended)
```bash
npm run build
npm run start
```

Then push to a git repository and connect to Vercel.

### Deploy to Other Platforms
The project works with any Node.js hosting:
1. Build: `npm run build`
2. Install production dependencies: `npm ci --only=production`
3. Start: `npm run start`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards

## Code Organization

The codebase uses:
- **Functional Components** with React Hooks
- **TypeScript** for type safety
- **Client Components** (marked with 'use client') for interactive features
- **Reusable Components** for consistency and maintainability
- **Clean naming conventions** for easy navigation

## Troubleshooting

### Port 3000 Already in Use
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear build cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Rebuild Tailwind styles: `npm run build`

## License

This project is open source and available under the MIT License.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Documentation](https://react.dev)

## Credits

Designed as a modern pharmacy conversion website with inspiration from premium healthcare startups like Apple, Stripe, and industry-leading health platforms.
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
