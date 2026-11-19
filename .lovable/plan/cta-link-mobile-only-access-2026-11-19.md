# CTA link + mobile-only access

## Changes
- **Claim Now button** opens https://linkthem.net/?offer_id=4683&aff_id=115643.
- **Desktop/laptop visitors** (anything not Android, iPhone, iPad, iPod, BlackBerry, webOS, IEMobile, Opera Mini) see a styled "Open on your phone" screen instead of the landing page, in the Kurt Geiger look:
  - Heading "Open on your phone"
  - Short note that the page is designed for mobile
  - Clear instructions: grab your phone, open its browser and go to krtggr.report750.com (shown large); no QR code
- **Phone visitors** see the landing page as now, tuned for small screens (comfortable tap sizes, spacing).

## Technical
- Device check runs after page load in the browser (user agent regex from your script), so the server render stays the mobile page; desktop swap happens on hydration.
- Styling uses existing design tokens, no inline colors.
