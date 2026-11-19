# Kurt Geiger gift card landing page

Recreate the uploaded landing page layout as the home page, restyled for Kurt Geiger.

## Content
- Header: "KURT GEIGER" wordmark with a thin accent line.
- Title "Complete Your Registration", subtitle "Follow these simple steps to claim your $750 Kurt Geiger gift card".
- 4 numbered steps:
  1. Click on "Claim Now"
  2. Enter your email and basic info
  3. Complete 4-5 sponsored deals (changed from 3-5)
  4. Enjoy your $750 Kurt Geiger gift card!
- Big "CLAIM NOW" button + agreement note.
- FAQ accordion (4 questions, answers updated to 4-5 deals and $750).
- Footer links: User Agreement, Privacy Policy, KurtGeiger.com.

## Design
- Kurt Geiger luxury feel: black and white base, soft blush pink accent, gold-tone highlights, elegant serif headings (Playfair Display) with clean sans body.
- Step numbers in black circles, cards with fine borders, black CLAIM NOW button with pink hover.
- Mobile-first, centered narrow column like the original.

## Technical
- Rewrite src/routes/index.tsx, tokens in src/styles.css, fonts via link in __root head, shadcn Accordion for FAQ, unique head() metadata.
- Claim Now link uses a placeholder "#" until you share the destination URL.
