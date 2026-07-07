1) PRODUCT
AtlasHaven is a SaaS consultancy operations dashboard that lets local SMB digital‑marketing agencies create, manage, and track proposals and intake data in one place. The core value is turning ad‑hoc proposal and client intake work into a repeatable, trackable pipeline: intake form → structured case study → branded proposal → e‑signature-ready PDF. It solves the pain of scattered docs, inconsistent proposals, and manual follow‑ups (from the research: agencies struggle with inconsistent processes and no centralized CRM/proposal workflow). Primary user: time‑pressed ops managers and principals at small‑to‑mid agencies who need a simple, fast, premium‑looking tool to convert leads and run campaigns.

2) WHO IT’S FOR (ICP)
- ICP: Small‑to‑mid digital‑marketing agencies in AZ/CA servicing local SMBs; 1–6 people, $150k–$1M revenue. They sell SEO, social, and paid ads packages.
- How it shapes the product: clean, high‑contrtrast premium UI (Bebas Neue + Inter), fast onboarding, mobile‑aware layouts, and proposal/intake flows that convert. Tone: confident, direct, no fluff. No social sign‑in — email + password (Supabase auth) only.

3) LOOK & FEEL
- Vibe: bold, confident, high‑contrtrast, premium.
- Palette: primary #0EA5E9, accent #F59E0B, background #0B1020, surface #1A2040, text #F8FAFC, text secondary #94A3B8, border #334155.
- Typography: heading Bebas Neue (display), body Inter (regular/medium), mono JetBrains Mono.
- Spacing/layout: tight 6‑8px base scale, generous header/section vertical rhythm, card surfaces on #1A2040 with subtle border.
- Components: primary button (#0EA5E9 fill, white text), accent button/outline (#F59E0B), secondary button/ghost, input/outline, toast notifications, modal sheet.
- Iconography: geometric, bold, dark-on-light or accent-fill per spec.
- Imagery: abstract geometric shapes, dashboard screenshots, placeholder logos (no real client logos).
- Motion: smooth 200ms transitions, subtle scale on hover, drawer slide-in, toast pop.

Main screens:
- Landing (kept): full‑width hero with value prop, CTA to features/pricing, use cases, CTA to sign up. Reuse design tokens.
- Auth/signin: centered card, logo + wordmark, email + password + submit, social sign-in omitted, link to reset, alternate “sign up” route.
- Dashboard (Today): top bar (brand left, profile/avatar right), primary KPI Today metric, secondary KPIs, two primary actions (New Proposal, New Intake), filter/sort, recent proposals table.
- CRM/Contacts: list view, search/filter, detail drawer, edit inline.
- Proposals: list, create wizard, editor (name, scope, pricing table, e‑signature placeholder), save/send/download PDF.
- Intake Form: form builder or fixed form with sections (business info, goals, current channels, budget, timeline), multi-step optional, summary before submit.
- Case Studies: grid/list, filter by industry, detail page.
- Pricing: 3 tiers (founded, growth, enterprise) with feature matrix and CTA.
- Contact: form + footer links.
- Settings: profile, API keys (placeholder), billing (placeholder), logout.

4) USER FLOWS
- Sign up: email/password → verify email (Supabase) → redirect to Dashboard/Today.
- Onboard: guided checklist (add first client, create first intake template, build first proposal) with skip.
- Core action (New Proposal): choose template or start blank → fill details → auto‑populate from CRM → review → download PDF or “Send for e‑sign” (placeholder) → success toast + proposal list.
- Intake flow: select intake template → multi-step form → summary → submit → creates a CRM contact + case study draft → redirect to proposal pre-filled.
- CRM flow: search/filter → open contact → add note/link proposal → quick action buttons.
- Case study page: list → filter → detail with embedded proposal and metrics.
States: loading, error, empty, success, draft vs published, saving.

5) PAGES/ROUTES
- Landing (/) — hero, features, use cases, CTA, footer.
- Auth/signin (/sign-in) — email + password form.
- Auth/signup (/sign-up) — same fields, terms.
- Reset-password (/reset-password/:token) — set new password.
- Dashboard (/dashboard) — Today view primary.
- Dashboard/proposals (/dashboard/proposals) — list/create.
- Dashboard/proposals/:id/edit (/dashboard/proposals/:id/edit) — editor.
- Dashboard/intake (/dashboard/intake) — list/form builder.
- Dashboard/contacts (/dashboard/contacts) — CRM list + detail drawer.
- Dashboard/case-studies (/dashboard/case-studies) — grid + detail.
- Dashboard/case-studies/:id (/dashboard/case-studies/:id) — full case study.
- Pricing (/pricing) — 3 tiers + FAQ.
- Contact (/contact) — form.
- Settings (/settings) — profile, API, billing, logout.
All pages share top nav (logo, primary links, auth/user menu) and footer.

6) CORE FEATURES
- Auth (Supabase Auth via @supabase/ssr): email + password, magic link disabled, session persistence, protected routes middleware.
- CRM: contacts list with search/filter/tags, detail drawer with timeline of interactions, notes, attachments placeholder.
- Proposal Generator: wizard UI to create proposals (name, description, line items, pricing, discounts), auto‑calculate totals, save draft, download PDF (client-only generation), copy link, status (draft/sent/accepted).
- Intake Form: configurable sections and fields (text, select, range, file), multi-step support, conditional logic basics, save/resume, submit creates contact + case study draft.
- Case Study Page: display intake data + proposal outcomes, metrics (estimated vs actual revenue, timeline), tags, filter by industry/status.
- Pricing Page: 3 subscription tiers with feature comparison and CTA to contact/signup.
- Contact Page: form with honeypot, reCAPTCHA placeholder, success/error states.
- Settings: profile update, API key list (read-only placeholder), billing link (placeholder), logout.
- Responsive Shell: mobile drawer nav, top bar user menu, toast notifications, skeleton loaders.

7) DATA MODEL
- users: id (uuid PK), email (text, unique), email_confirmed (boolean), created_at (timestamptz), updated_at (timestamptz), full_name (text), avatar_url (text).
- contacts: id (uuid PK), user_id (fk users), name (text), email (text), company (text), phone (text), source (text), status (text), tags (jsonb), notes (jsonb[]), created_at, updated_at.
- proposals: id (uuid PK), user_id (fk), contact_id (fk, nullable), name (text), description (text), status (text: draft/sent/accepted), data (jsonb for line items), total_amount (numeric), created_at, updated_at.
- intake_templates: id (uuid PK), user_id (fk), name (text), steps (jsonb[]), is_active (boolean).
- intake_submissions: id (uuid PK), template_id (fk), contact_id (fk, nullable), answers (jsonb), notes (jsonb[]), status (text), created_at.
- case_studies: id (uuid PK), user_id (fk), contact_id (fk), proposal_id (fk, nullable), title (text), industry (text), summary (text), metrics (jsonb), assets (jsonb[]), created_at.
- notifications: id (uuid PK), user_id (fk), message (text), read (boolean), created_at.

8) AUTH
- Use Supabase Auth with email + password via @supabase/ssr.
- Provide sign-in, sign-up, password reset, sign-out flows.
- Middleware protects /dashboard/* and authenticated routes; unauthenticated → /sign-in.
- User session persisted; idle timeout handled by Supabase.
- No social/OAuth buttons.

9) FILES
- app/layout.tsx — root layout with theme vars and nav/footer.
- app/loading.tsx — global spinner/skeleton.
- app/page.tsx — landing page (kept).
- app/sign-in/page.tsx — sign-in form.
- app/sign-up/page.tsx — sign-up form.
- app/reset-password/[token]/page.tsx — reset password.
- dashboard/layout.tsx — dashboard shell with top bar and nav.
- dashboard/page.tsx — Today view.
- dashboard/proposals/page.tsx — proposals list + create.
- dashboard/proposals/[id]/edit/page.tsx — proposal editor.
- dashboard/intake/page.tsx — intake list/form.
- dashboard/contacts/page.tsx — contacts list + detail drawer.
- dashboard/case-studies/page.tsx — case studies list.
- dashboard/case-studies/[id]/page.tsx — case study detail.
- pricing/page.tsx — pricing tiers.
- contact/page.tsx — contact form.
- settings/page.tsx — settings/profile/API/billing.
- components/ui/buttons.tsx — primary, secondary, ghost, icon.
- components/ui/inputs.tsx — text, select, checkbox, radio.
- components/ui/cards.tsx — surface card, stat card.
- components/ui/toast.tsx — toast container + provider.
- components/ui/modal.tsx — modal/sheet.
- components/ui/skeleton.tsx — skeleton loader.
- components/layout/top-nav.tsx — top bar with user menu.
- components/layout/footer.tsx — footer links.
- components/nav/drawer.tsx — mobile nav drawer.
- hooks/use-toast.ts — toast logic.
- hooks/use-api.ts — api client with auth.
- lib/supabase/client.ts — Supabase client via @supabase/ssr.
- lib/supabase/auth.ts — auth helpers (signIn, signUp, signOut, getSession).
- lib/validators/proposal.ts — Zod schemas for proposals.
- lib/validators/intake.ts — Zod schemas for intake.
- public/logo.svg — dark logo per spec.
- public/favicon.ico.
- tailwind.config.ts — purge/content includes app/**/*.{ts,tsx}.
- next.config.mjs — next config.
- package.json — deps: next, react, react-dom, @supabase/ssr, @supabase/supabase-js, zod, react-hook-form, yup (or zod), @tanstack/react-query, clsx, lucide-react.

10) ACCEPTANCE CHECKLIST
- [ ] Supabase project configured with email + password enabled; auth middleware tested.
- [ ] Landing page loads with existing design tokens; all CTA links route correctly.
- [ ] Sign-in and sign-up pages accept email + password, show error toast on failure, redirect to dashboard on success.
- [ ] Password reset page works via Supabase reset link.
- [ ] Middleware redirects unauthenticated users from /dashboard to /sign-in.
- [ ] Dashboard Today view shows KPIs, New Proposal and New Intake primary CTAs; toasts on action.
- [ ] Proposal list loads; create wizard saves draft; download PDF works (client-side generation).
- [ ] Intake form saves submissions; creates contact and case study draft.
- [ ] Contacts list searchable/filterable; detail drawer opens.
- [ ] Case studies list/filter works; detail page renders.
- [ ] Pricing page renders 3 tiers with feature matrix; CTA links contact.
- [ ] Contact form submits; success toast appears.
- [ ] Settings page updates profile; logout clears session and redirects to sign-in.
- [ ] Responsive: top bar collapses to mobile drawer; pages reflow correctly.
- [ ] Build compiles with no TypeScript errors; Lighthouse performance > 80 on desktop.
- [ ] Deploy preview on Vercel passes; environment variables for Supabase configured.