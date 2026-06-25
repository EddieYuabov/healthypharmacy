# CONFIGURATION GUIDE

This guide helps you customize and configure your Healthy Pharmacy website for production use.

## Quick Start Customizations

### 1. Update Business Information (PRIORITY)

**Location**: Various components  
**Time to complete**: 5 minutes

#### Hero Section - Update Phone & Address
File: `components/sections/HeroSection.tsx` (lines 93-98)

Find:
```jsx
<span>(555) 123-4567</span>
...
<span>New York, NY 10001</span>
```

Replace with your actual pharmacy details.

#### Footer - Update Contact Info
File: `components/sections/Footer.tsx` (lines 185-210)

Update:
- Phone number (line 190)
- Email address (line 200)
- Physical address (lines 207-210)
- Social media links (lines 169-184)

### 2. Add Your Logo
**Location**: `components/sections/Navbar.tsx` (lines 30-35)  
**Time to complete**: 10 minutes

Replace the placeholder "HP" box with your logo:

Option A: Use an image
```jsx
<Image 
  src="/logo.png" 
  alt="Healthy Pharmacy" 
  width={40} 
  height={40}
  className="rounded-xl"
/>
```

Option B: Use an SVG
```jsx
<svg className="w-10 h-10" viewBox="0 0 100 100">
  {/* Your SVG code here */}
</svg>
```

### 3. Customize Colors
**Location**: `tailwind.config.ts`  
**Time to complete**: 10 minutes

The theme uses:
- `primary-*` - Blue colors (0-900 shades)
- `accent-*` - Green colors (0-900 shades)

Example: To change primary from blue to purple:
```ts
primary: {
  50: '#f3e8ff',
  100: '#e9d5ff',
  // ... all the way to 900
}
```

Common Tailwind colors available: blue, green, purple, red, orange, pink, indigo, cyan, teal

### 4. Update Testimonials
**Location**: `components/sections/TestimonialsSection.tsx` (lines 21-38)

Replace placeholder testimonials with real customer reviews:

```ts
const testimonials: Testimonial[] = [
  {
    name: 'Your Customer Name',
    role: 'Patient',
    content: 'Their actual quote here...',
    rating: 5,
    initials: 'AB',  // First letters of name
    bgColor: 'bg-blue-100',
  },
  // Add more...
];
```

### 5. Update Statistics
**Location**: `components/sections/StatisticsSection.tsx` (lines 15-33)

Replace with your actual pharmacy metrics:

```ts
const stats: StatItem[] = [
  {
    value: 'Your Region',
    label: 'Serving',
    icon: '🗺️',
  },
  {
    value: '100K+',  // Your number
    label: 'Prescriptions Filled',
    icon: '💊',
  },
  // ...
];
```

## Backend Integration

### Connect the Transfer Form to Your API

The transfer form is fully ready for backend integration.

**Location**: `components/sections/TransferFormSection.tsx` (lines 89-120)

In the `handleSubmit` function, replace:

```typescript
// For now, simulate success after a delay
await new Promise((resolve) => setTimeout(resolve, 1500));
```

With your actual API call:

```typescript
try {
  const response = await fetch('/api/prescriptions/transfer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) throw new Error('API error');
  const data = await response.json();

  // API call successful
  setIsSuccess(true);
  // ... rest of your success logic
} catch (error) {
  console.error('Form submission error:', error);
  // Add error handling here
  alert('Error submitting form. Please try again.');
}
```

### Form Data Structure

The form collects and sends the following data:

```typescript
{
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  currentPharmacy: string;
  medications: string;
  contactMethod: 'phone' | 'email' | 'text';
}
```

Example POST request body:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "phone": "(555) 123-4567",
  "email": "john@example.com",
  "currentPharmacy": "CVS",
  "medications": "Lisinopril 10mg, Metformin 500mg",
  "contactMethod": "phone"
}
```

## Advanced Customizations

### Add New Sections

To add a new section:

1. Create a new file in `components/sections/`:
```bash
touch components/sections/NewSection.tsx
```

2. Build your component following this pattern:
```tsx
'use client';

import { motion } from 'framer-motion';

export function NewSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Your content here */}
      </div>
    </section>
  );
}
```

3. Add to `components/sections/index.ts`:
```ts
export { NewSection } from './NewSection';
```

4. Import and add to `app/page.tsx`:
```tsx
import { NewSection } from '@/components/sections';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Other sections */}
        <NewSection />
      </main>
      <Footer />
    </>
  );
}
```

### Modify Button Behavior

The "Transfer Prescription" button in the hero scrolls to the form. To change this:

**File**: `components/sections/HeroSection.tsx` (line 67)

Current:
```jsx
onClick={() => document.getElementById('transfer')?.scrollIntoView({ behavior: 'smooth' })}
```

Alternatives:
```jsx
// Navigate to a different page
onClick={() => router.push('/transfer')}

// Open a modal
onClick={() => setShowModal(true)}

// External link
onClick={() => window.location.href = 'https://example.com'}
```

### Add Email Notifications

When someone submits the form, you might want to send them an email. In your backend API:

```javascript
// Example: Node.js/Express
app.post('/api/prescriptions/transfer', async (req, res) => {
  const { email, firstName, lastName } = req.body;
  
  // Send confirmation email
  await sendEmail({
    to: email,
    subject: 'Prescription Transfer Started',
    html: `Hi ${firstName},\n\nWe've received your prescription transfer request...`
  });
  
  // Save to database
  const transfer = await PrescriptionTransfer.create(req.body);
  
  res.json({ success: true, transferId: transfer.id });
});
```

## Environment Variables

If you need environment variables (for API keys, URLs, etc.):

1. Create `.env.local` in the root directory:
```
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_PHARMACY_ID=123
API_SECRET_KEY=your_secret_key
```

2. Use in components:
```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

fetch(`${apiUrl}/prescriptions/transfer`, {
  method: 'POST',
  body: JSON.stringify(data),
});
```

Note: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Never expose secrets.

## Analytics Setup

### Google Analytics
Add to `app/layout.tsx` inside the `<head>`:
```tsx
<Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID" />
<Script
  id="google-analytics"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'YOUR_GA_ID');
    `,
  }}
/>
```

### Track Form Submissions
In `TransferFormSection.tsx`:
```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  // Track event
  if (typeof gtag !== 'undefined') {
    gtag('event', 'form_submission', {
      form_name: 'prescription_transfer',
    });
  }
  
  // ... rest of form logic
};
```

## Performance Optimization

### Enable Image Optimization
If you add images, use Next.js Image component:

```tsx
import Image from 'next/image';

<Image
  src="/testimonial.jpg"
  alt="Customer"
  width={80}
  height={80}
  className="rounded-full"
/>
```

### Optimize Fonts
Already optimized with Geist. To add more fonts:

Edit `app/layout.tsx`:
```tsx
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

// Use in HTML className
```

## SEO Optimization

The site already has basic SEO setup in `app/layout.tsx`. Enhance it:

```typescript
export const metadata: Metadata = {
  title: "Healthy Pharmacy | Your Pharmacy, Reimagined",
  description: "Transfer your prescriptions in minutes. Fast delivery and personalized care.",
  keywords: ["pharmacy", "prescription", "medication delivery"],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://healthypharmacy.com',
    siteName: 'Healthy Pharmacy',
    images: [
      {
        url: 'https://healthypharmacy.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};
```

## Testing Your Changes

After making changes:

1. **Development**: `npm run dev`
2. **Production build**: `npm run build && npm run start`
3. **Test on mobile**: Use browser dev tools or visit from phone

## Common Issues & Solutions

### Colors not updating
- Clear build cache: `rm -rf .next`
- Restart dev server: Stop and run `npm run dev` again

### Form not submitting
- Check browser console for errors (F12)
- Verify API endpoint is correct
- Ensure CORS is enabled if using external API

### Animations stuttering
- Reduce number of animated elements on screen
- Use `will-change: transform` in Tailwind if needed
- Test on slower devices

### Mobile layout broken
- Check responsive classes in Tailwind (sm:, md:, lg:)
- Test with `npm run dev` on phone or mobile browser view

## Useful Resources

- Tailwind Docs: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- Next.js: https://nextjs.org/docs
- React: https://react.dev
- TypeScript: https://www.typescriptlang.org/docs/

## Support

For help with customization:
1. Review inline code comments
2. Check TypeScript types for prop definitions
3. Search documentation for specific frameworks
4. Consult AI assistants or development forums

Good luck with your pharmacy website! 🎉
