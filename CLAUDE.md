# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Gibb Lawyers is a law firm website built with React, Vite, TypeScript, Tailwind CSS, and shadcn/ui. The firm was established in 1892 and operates offices in Ipoh, Kuala Lumpur, Penang, and Teluk Intan, Malaysia. The website showcases legal services, lawyer profiles, and provides contact functionality with email notifications via Supabase.

## Development Commands

### Core Commands
```bash
npm install                 # Install dependencies
npm run dev                 # Start dev server (localhost:8080)
npm run build               # Production build
npm run build:dev           # Development build
npm run lint                # Run ESLint
npm run preview             # Preview production build
```

### Supabase Commands
```bash
supabase login              # Login to Supabase
supabase link --project-ref fcneqcsiixednrukbpxe  # Link to project
supabase functions deploy send-contact-email      # Deploy edge function
supabase db push            # Apply database migrations
```

## Architecture Overview

### Frontend Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC plugin
- **Routing**: React Router v6 (client-side routing)
- **State Management**: TanStack Query for server state
- **UI Components**: shadcn/ui (Radix UI primitives + Tailwind)
- **Styling**: Tailwind CSS with custom design tokens
- **Forms**: React Hook Form + Zod validation

### Backend Integration
- **Database**: Supabase (PostgreSQL)
- **Email Service**: Supabase Edge Functions + Resend API
- **Data Tables**: `contacts`, `user_roles`
- **Edge Functions**: `send-contact-email` for automated email notifications

### Project Structure
```
src/
├── components/           # Reusable components
│   ├── ui/              # shadcn/ui components
│   ├── Header.tsx       # Site navigation
│   ├── Footer.tsx       # Site footer
│   ├── Layout.tsx       # Page layout wrapper
│   └── ServicePageTemplate.tsx  # Template for service pages
├── pages/               # Route pages
│   ├── Index.tsx        # Homepage
│   ├── Lawyers.tsx      # Lawyers listing
│   ├── Services.tsx     # Services listing
│   ├── Contact.tsx      # Contact form
│   ├── lawyers/         # Individual lawyer profiles
│   └── services/        # Individual service pages
├── lib/                 # Utilities
│   ├── utils.ts         # Tailwind class merging
│   └── emailService.ts  # Email notification service
├── integrations/
│   └── supabase/        # Supabase client and types
└── hooks/               # Custom React hooks
```

## Design System

### Brand Colors
The site uses a traditional law firm aesthetic with gold/bronze accents:
- **Primary Gold**: `#C18C43` (gibb-gold)
- **Bronze**: `#B87333` (gibb-bronze)
- **Background**: `#FAF8F5` (cream/ivory)
- **Text**: `#2F2F2F` (dark gray)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Legal Documents**: Crimson Text (serif)

All custom design tokens are defined in `tailwind.config.ts` and can be referenced using the `gibb-*` class prefixes.

### Component Patterns
- Use `Layout` component for consistent page structure with header/footer
- Service pages use `ServicePageTemplate` for standardized layout
- All UI components from shadcn/ui are in `src/components/ui/`
- Import path alias `@/` maps to `src/` directory

## Email Notification System

The contact form triggers automated emails via Supabase:

1. **Database Trigger**: When a row is inserted into `contacts` table, a trigger invokes the edge function
2. **Edge Function**: `send-contact-email` sends two emails:
   - Admin notification to law firm
   - Client acknowledgment confirming receipt
3. **Email Service**: Uses Resend API with branded HTML templates
4. **Configuration**: See `EMAIL_SETUP.md` for full setup instructions

### Environment Variables (Supabase)
- `RESEND_API_KEY`: API key for Resend email service
- `ADMIN_EMAIL`: Law firm email for notifications

## Routing Structure

All routes use client-side routing via React Router. Key routes:
- `/` - Homepage
- `/lawyers` - Lawyers listing
- `/lawyers/:lawyer-slug` - Individual lawyer profiles
- `/services` - Services listing
- `/services/:service-slug` - Individual service pages
- `/contact` - Contact form
- `/chinese`, `/korean` - Localized language pages
- `/privacy-policy`, `/terms-of-service`, `/disclaimer`, `/faq` - Legal pages

**Important**: All new routes must be added ABOVE the catch-all `*` route in `App.tsx:87`.

## TypeScript Configuration

TypeScript is configured with relaxed settings for rapid development:
- `noImplicitAny: false`
- `noUnusedParameters: false`
- `noUnusedLocals: false`
- `strictNullChecks: false`

This allows for flexible development but consider enabling stricter checks for production code.

## Styling Guidelines

### Tailwind Usage
- Use the `cn()` utility from `lib/utils.ts` for conditional classes
- Prefer Tailwind classes over custom CSS
- Brand colors are available as `gibb-gold`, `gibb-bronze`, `gibb-gray-*`
- Responsive breakpoints follow standard Tailwind conventions

### Component Composition
- shadcn/ui components are already styled with brand tokens
- Extend components by composing with Tailwind classes
- Use `variant` props where available for component variations

## Accessibility

The site implements accessibility features:
- Skip link to main content (`SkipLink` component)
- Semantic HTML structure
- ARIA labels where appropriate
- Focus management for navigation

## CI/CD and Deployment

### GitHub Actions Workflows

The project uses a **single unified workflow** (`.github/workflows/main.yml`) with 3 conditional jobs:

#### Job 1: Build (Always runs)
Runs on every push/PR to `main` or `develop`:
- Lints code with ESLint
- Builds project in production mode
- Uploads build artifacts

#### Job 2: Deploy to VPS (Only on main)
Automatically deploys to VPS when pushing to `main`:
- Builds production bundle
- Uploads files to VPS via SCP
- Executes deployment commands on VPS
- Creates backup of previous deployment
- Only runs after build job succeeds
- Requires VPS secrets configured in GitHub

#### Job 3: Deploy Supabase (Only when supabase/ changes)
Deploys Supabase resources when `supabase/**` files change on `main`:
- Deploys edge functions
- Pushes database migrations
- Can also be triggered manually
- Requires GitHub secrets:
  - `SUPABASE_ACCESS_TOKEN`: Supabase access token
  - `SUPABASE_PROJECT_REF`: Project reference (fcneqcsiixednrukbpxe)

#### Dependabot (`.github/dependabot.yml`)
Automated dependency updates:
- Weekly npm dependency updates (Mondays at 09:00)
- Monthly GitHub Actions updates
- Creates labeled PRs for review

**Why one file?** Simpler to manage and maintain. Jobs run conditionally based on branch and file changes.

### Deployment Options

**Option 1: VPS (Current - Automated via GitHub Actions)**
- Automatic deployment on push to `main` branch
- Uses SSH/SCP to upload files
- Nginx serves static files
- Includes automatic backup and rollback
- See `.github/SETUP.md` for complete setup guide

**Option 2: Lovable**
- Deploy directly via Lovable platform
- Automatic deployments on git push
- Domain: `gibblawyers.com`

**Option 3: Manual VPS Deployment**
- Run `npm run build`
- Upload `dist/` to VPS: `scp -r dist/* user@vps:/var/www/gibblawyers/current/`
- Reload Nginx: `ssh user@vps "sudo systemctl reload nginx"`

### Build Output
- Production builds are created with `npm run build`
- Development builds use `npm run build:dev`
- Vite outputs to `dist/` directory
- Server runs on port 8080 in development

## Known Patterns

### Page Creation
When creating a new page:
1. Create component in `src/pages/`
2. Import and add route in `App.tsx`
3. Ensure route is above the `*` catch-all
4. Wrap content in `Layout` component
5. Set page title and description via Layout props

### Service Page Creation
For new service pages, use the `ServicePageTemplate` component which provides:
- Consistent layout and spacing
- Hero section with title and description
- Content sections with proper typography
- Automatic breadcrumb navigation

### Form Handling
Contact forms use:
- React Hook Form for form state
- Zod for validation schemas
- TanStack Query for mutations
- Toast notifications for user feedback
