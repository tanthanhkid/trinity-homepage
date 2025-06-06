# Trinity Software Technology Company Homepage

Modern, responsive homepage for Trinity Software Technology Company (phanmemtrinity.com) built with Next.js 15, React 19, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with React 19 and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Turbopack for fast development builds
- **Interactive UI**: Framer Motion animations and Lucide React icons
- **SEO Ready**: Next.js App Router with metadata support
- **Professional Sections**: Hero, Services, Benefits, Testimonials, Contact

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3
- **Frontend**: React 19.0.0
- **Styling**: Tailwind CSS 4
- **Typography**: @next/font (migrating to next/font)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Language**: TypeScript 5
- **Build Tool**: Turbopack (for development)

## 📁 Project Structure

```
trinity-homepage/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles
│   │   └── favicon.ico
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx  # Site navigation
│   │   │   └── Footer.tsx      # Site footer
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Hero section
│   │   │   ├── Services.tsx    # Services showcase
│   │   │   ├── Benefits.tsx    # Benefits section
│   │   │   ├── Testimonials.tsx # Client testimonials
│   │   │   └── Contact.tsx     # Contact information
│   │   └── ui/
│   │       ├── button.tsx      # Reusable button component
│   │       └── card.tsx        # Reusable card component
│   ├── data/
│   │   └── company.ts          # Company information & content
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── components.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation & Development

1. **Clone and navigate to the project**:
   ```bash
   cd trinity-homepage
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build Commands

```bash
# Development with Turbopack (recommended)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## 🌐 Live Preview

- **Development**: http://localhost:3000
- **Network**: http://[your-ip]:3000 (accessible on local network)

## 📝 Content Management

Company information, services, testimonials, and contact details are managed in:
```typescript
src/data/company.ts
```

This file contains:
- Company information and taglines
- Services and their descriptions
- Key advantages and benefits
- Client testimonials
- Contact information

## 🎨 Styling

The project uses **Tailwind CSS 4** with custom utility classes:
- Responsive design utilities
- Custom color schemes (blue/purple gradients)
- Animation classes
- Glass morphism effects

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Docker
```bash
# Build production image
docker build -t trinity-homepage .

# Run container
docker run -p 3000:3000 trinity-homepage
```

### Static Export
```bash
# For static hosting
npm run build
npm run export
```

## 🔧 Configuration

### Environment Variables
Create `.env.local` for environment-specific settings:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Next.js Configuration
Custom settings in `next.config.ts`:
- Turbopack configuration
- Image optimization
- Custom webpack settings

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🎯 Performance

- **Fast Refresh**: Instant feedback during development
- **Turbopack**: Next-generation bundler for 10x faster builds
- **Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic route-based code splitting

## 🤝 Company Information

**Trinity Software Technology Company**
- Website: phanmemtrinity.com
- Email: info@phanmemtrinity.com
- Phone: 0946 011 320
- Address: Pearl Plaza, 561A Điện Biên Phủ, Bình Thạnh, Hồ Chí Minh

## 📋 TODO

- [ ] Migrate from @next/font to next/font
- [ ] Add more interactive animations
- [ ] Implement dark mode toggle
- [ ] Add multi-language support
- [ ] Optimize for Core Web Vitals

## 📄 License

Proprietary - Trinity Software Technology Company

---

Built with ❤️ by Trinity Software Technology Company

## 🎯 Project Overview

### Company Information
- **Name**: Công ty TNHH Công Nghệ Phần Mềm Trinity
- **Industry**: Software Development & Digital Transformation
- **Location**: Pearl Plaza, 561A Điện Biên Phủ, Bình Thạnh, Ho Chi Minh City
- **Contact**: 0946 011 320 | info@phanmemtrinity.com
- **Tax ID**: 0318676600

## 🏗️ Website Structure

### Navigation
- Main navigation with Blog section
- Mobile-responsive hamburger menu

### Homepage Sections (Top to Bottom)

1. **Hero Section**
   - Headline: "Chuyển Đổi Số Toàn Diện" (Comprehensive Digital Transformation)
   - Subheadline: AI & Automation emphasis for 20-30% cost savings
   - Primary CTA: "Liên hệ Demo" button
   - Gradient background with modern imagery

2. **Key Advantages Section**
   - Technology selection expertise
   - Customization capabilities  
   - Commercial experience across industries
   - High-speed processing solutions

3. **Project Deployment Section**
   - Agile Scrum methodology highlight
   - Process visualization

4. **Technology Focus Section**
   - AI and Automation solutions
   - Digital transformation expertise
   - Industry-specific applications

5. **Support & Service Highlights**
   - Lifetime warranty
   - 24/7 technical support
   - Flexible online/offline assistance
   - Complete source code handover

6. **Testimonials Section**
   - Client testimonials from:
     - Demax Industrial Co., LTD (ERP system)
     - Cty CP Asatek (UI/UX improvements)
     - Individual client (AI document processing)

7. **Contact Section**
   - "Bắt đầu ngay hôm nay" (Start Today) CTA
   - Zalo messaging integration
   - Contact form

8. **Footer**
   - Company details and contact information
   - Copyright notice
   - Social links

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **TypeScript**: Full type safety
- **Performance**: Image optimization, lazy loading, code splitting

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient themes
- **Background**: White with gradient overlays
- **Typography**: Source Sans 3 or similar modern sans-serif

### Key Design Principles
- Modern, minimalist aesthetic
- Professional corporate styling
- Mobile-first responsive design
- Accessibility compliance (WCAG 2.1)

## ⚡ Performance Requirements

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **TTFB (Time to First Byte)**: < 600ms

### Optimization Strategies
- Next.js Image component for all images
- Lazy loading for below-the-fold content
- Code splitting and dynamic imports
- Minimize bundle size with tree shaking
- Implement proper caching strategies
- Use WebP/AVIF images with fallbacks

## 🛠️ Setup Instructions

### Prerequisites
```bash
node >= 18.0.0
npm >= 8.0.0
```

### Installation

1. **Initialize Next.js Project**
```bash
npx create-next-app@latest trinity-homepage --typescript --tailwind --app
cd trinity-homepage
```

2. **Install shadcn/ui**
```bash
npx shadcn-ui@latest init
```

3. **Install Required shadcn Components**
```bash
# Core components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add avatar
npx shadcn-ui@latest add sheet
npx shadcn-ui@latest add form
npx shadcn-ui@latest add input
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add navigation-menu
```

4. **Additional Dependencies**
```bash
npm install framer-motion lucide-react @next/font
```

### Development Commands
```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */  
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

## 🎯 Key Features to Implement

### Core Functionality
- [x] Responsive navigation with mobile menu
- [x] Hero section with gradient backgrounds
- [x] Service showcase with hover effects
- [x] Client testimonials carousel
- [x] Contact form with validation
- [x] Zalo messaging integration
- [x] Multi-language support (Vietnamese/English)

### Performance Features
- [x] Image optimization and lazy loading
- [x] Critical CSS inlining
- [x] Preloading of important resources
- [x] Service worker for caching
- [x] Progressive enhancement

### UI/UX Enhancements
- [x] Smooth scroll animations
- [x] Micro-interactions on hover states
- [x] Loading states and skeleton screens
- [x] Error handling and feedback
- [x] Dark mode support (optional)

## 📊 Services to Highlight

1. **Custom Software Development**
   - Tailored solutions for businesses
   - Industry expertise across sectors

2. **AI & Automation Solutions**
   - Machine learning implementation
   - Process automation tools

3. **ERP Systems**
   - Enterprise resource planning
   - Business process optimization

4. **Web Development**
   - Modern web applications
   - E-commerce solutions

5. **Digital Transformation Consulting**
   - Strategy development
   - Technology roadmapping

## 🔧 Development Guidelines

### Code Standards
- Use TypeScript for all components
- Follow ESLint and Prettier configurations
- Implement proper error boundaries
- Write unit tests for critical components
- Use semantic HTML and ARIA labels

### Component Structure
```
src/
├── app/                 # Next.js App Router
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   ├── sections/       # Page sections
│   └── layout/         # Layout components
├── lib/                # Utilities and configurations
├── styles/             # Global styles
└── public/             # Static assets
```

### Performance Checklist
- [ ] Implement Next.js Image component
- [ ] Add loading states for all async operations
- [ ] Optimize bundle size (analyze with @next/bundle-analyzer)
- [ ] Implement proper SEO meta tags
- [ ] Add sitemap and robots.txt
- [ ] Configure CSP headers
- [ ] Implement analytics (Google Analytics/GTM)

## 🚀 Deployment

### Build Optimization
```bash
npm run build
npm run start
```

### Recommended Hosting
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**

## 📞 Contact Integration

### Zalo Messaging
- Implement Zalo OA (Official Account) integration
- Add Zalo chat widget
- Configure callback URLs

### Contact Form
- Form validation with proper error messages
- Email integration (SendGrid/Nodemailer)
- Success/error feedback states

## 🎨 Brand Assets Needed

- Company logo (SVG format preferred)
- Product screenshots
- Team photos
- Client testimonial photos
- Gradient backgrounds and patterns

## 📈 Analytics & Monitoring

- Google Analytics 4 setup
- Core Web Vitals monitoring
- Error tracking (Sentry recommended)
- Performance monitoring
- User behavior analysis

---

## 🔄 Development Workflow

1. **Setup**: Follow installation instructions
2. **Design**: Create component mockups based on original site
3. **Build**: Implement sections incrementally
4. **Test**: Performance and cross-browser testing
5. **Optimize**: Core Web Vitals and accessibility
6. **Deploy**: Production deployment with monitoring

## 📝 Notes

- Maintain Vietnamese language authenticity
- Ensure professional corporate appearance
- Focus on mobile experience (60%+ traffic expected)
- Implement proper loading states for better UX
- Consider internationalization for future expansion

For questions or clarification, contact: info@phanmemtrinity.com