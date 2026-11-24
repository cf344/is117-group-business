
# DESIGN.md — Morrow Beauty Studio

**Original Contributor:** Tasnim Fariha (Member 3)

**Integration Updates:** Clara (Member 2)

**Project:** IS117 Group Business — Morrow Beauty Studio

**Status:** Design direction and research-to-feature rationale documented; partial form/mobile checks and teammate feedback are recorded in [QA.md](QA.md). Team decision and peer retry for open feedback remain pending.

## 1. Design Goals

Morrow Beauty Studio is designed to help college students, young adults, and everyday customers explore beauty services, understand sample prices, and request appointments through a simple and welcoming website.

The website includes six service categories:

- Hair
- Facials
- Brows
- Nails
- Lashes
- Makeup

Our goal is to make the customer experience convenient, readable, organized, and accessible.

An appointment request is not an automatically confirmed appointment.

## 2. Brand Identity

**Business Name:** Morrow Beauty Studio

**Brand Promise:** Everyday care, thoughtfully done.

### Brand Personality

- Welcoming
- Clean
- Approachable
- Professional
- Calm
- Trustworthy

### Brand Archetype

The Caregiver archetype supports our focus on comfort, guidance, and everyday personal care.

The website communicates this personality through friendly language, organized information, and a simple appointment process.

## 3. Visual Direction

### Original Proposal

The original design proposed warm cream backgrounds, dark charcoal text, and muted rose accents.

### Final Implemented Direction

During website integration, the design was updated to match the cream and sage green visual identity established in the homepage.

| Color | Hex Code | Purpose |
|---|---|---|
| Warm paper | #fbf8f2 | Main background |
| Cream | #f1eadf | Secondary backgrounds |
| Sage green | #dce6d7 | Highlighted sections |
| Dark green | #355d49 | Buttons and important information |
| Dark charcoal green | #28352d | Main text |
| Muted green | #657168 | Supporting text |
| Terracotta | #bd795d | Decorative accents and focus indicators |
| Warm white | #fffefa | Cards and forms |

The final palette maintains the original goal of creating a calm, welcoming, and professional beauty salon experience.

## 4. Typography

The website uses:

- Georgia and other serif fonts for major headings.
- Arial and other sans-serif fonts for body text.
- Larger, readable service descriptions.
- 20px text in appointment form inputs.
- Clear heading hierarchy.
- Bold labels for important form fields.

The typography is intended to make information easy to scan and understand.

## 5. Website Layout

### Homepage

The homepage introduces the business and includes:

- Brand name and navigation.
- Main introductory section.
- Appointment request button.
- Six service cards.
- Sample pricing information.
- Brand promise and customer approach.
- Educational demonstration notice.

### Services Page

The services page includes:

- Six organized service categories.
- Individual service descriptions.
- Clearly labeled sample prices.
- Pricing explanations.
- Direct access to the appointment form.

Services without established sample prices are marked as "To be confirmed."

### Appointment Request Page

The appointment form includes:

- Service selection organized by category.
- Preferred appointment date.
- Preferred appointment time.
- Fictional customer name.
- Fictional email address.
- Required-field validation.
- Future date and time validation.
- Privacy information.
- Submit appointment request button.

### Confirmation Page

The confirmation page includes:

- Unique appointment request ID.
- Selected service.
- Preferred date.
- Preferred time.
- Pending approval status.
- Explanation of browser-based storage.
- Return to homepage button.
- Request another appointment button.

## 6. Two Honest Persuasion Techniques

### Technique 1 — Transparent Pricing

The website displays sample prices before visitors request an appointment.

Starting prices are clearly identified, and services without established prices are marked as "To be confirmed."

The website does not present sample prices as guaranteed final prices.

**Expected benefit:** Visitors can make more informed decisions about their preferred services.

**Verification:** Ask a reviewer to find a service price and explain whether it is a sample price, starting price, or unconfirmed price.

### Technique 2 — Clear Booking Expectations

The website explains that submitting the form creates a demonstration appointment request marked as pending approval.

The website does not claim that a real appointment has been reserved.

**Expected benefit:** Visitors understand what happens after submitting the form.

**Verification:** Ask a reviewer to submit a demo request and explain whether a real appointment has been confirmed.

## 7. Alternative Design Approaches

### Approach A — Service-First Booking

Visitors explore service descriptions and sample prices before opening the appointment form.

Potential advantages:

- Helps visitors compare services.
- Makes pricing information available before booking.
- Supports visitors who are unsure which service to select.

### Approach B — Quick Booking

Visitors open the appointment form directly from the homepage.

Potential advantages:

- Reduces navigation steps.
- Supports visitors who already know which service they want.
- Provides a convenient appointment request process.

### Current Implementation

The website supports both approaches through separate navigation paths.

Visitors can browse services first or access the appointment form directly.

Peer testing is still needed to compare the two approaches using the same customer tasks.

## 8. Member 3 — Confirmation and Data Storage

Tas developed the confirmation page and browser-based appointment storage functionality.

The implemented appointment process is:

1. Receive a valid appointment request from Member 2's form.
2. Generate a unique appointment request ID.
3. Save the selected service, preferred date, preferred time, request ID, and pending status.
4. Redirect the visitor to the confirmation page.
5. Retrieve the saved appointment using its request ID.
6. Display the appointment details and pending approval status.
7. Display an error message when a saved request cannot be found or retrieved.

The appointment storage functionality is implemented in appointment-storage.js.

The confirmation page retrieves the saved information from browser localStorage.

## 9. Privacy and Ethical Design

The appointment form asks visitors to use fictional contact information.

The following information is saved locally:

- Appointment request ID.
- Selected service.
- Preferred date.
- Preferred time.
- Pending appointment status.

Names and email addresses are not stored or transmitted.

Saved requests can be retrieved using the confirmation URL in the same browser, provided the browser's saved data has not been cleared.

The website does not:

- Process real payments.
- Reserve real appointment times.
- Send appointment requests to a real salon.
- Display fake customer reviews.
- Use misleading discounts or false urgency.

## 10. Research and Design Connections

Detailed research findings are available in:

- [Shared Research](RESEARCH.md)
- [Member 2 Research](MEMBER2_RESEARCH.md)
- [Member 3 Research](MEMBER3_RESEARCH.md)

| Research source | Research observation or focus | Design decision | Planned verification |
|---|---|---|---|
| Salon I Am | Service presentation and pricing | Organized service categories and sample prices | Find a service and its price |
| Hina's Salon | Service organization and customer information | Clear descriptions and navigation | Locate a preferred service |
| Lush Atelier | Beauty branding and service presentation | Consistent visual identity | Review branding across pages |
| European Wax Center | Member 2 observed an easy booking experience | Simple appointment request form | Complete a demo request |
| GlossGenius | Salon website and booking tool features | Confirmation details and organized booking flow | Submit and retrieve a demo request |
| Ulta Beauty — [Services and Events](https://www.ulta.com/beautyservices/all) | Service categories and a direct appointment route; observed appointment link redirected to login | Present service/pricing information before the request action and make the request outcome explicit | Published demo request and confirmation path tested; see [QA.md](QA.md) |

GlossGenius was reviewed as a salon software resource rather than as an individual salon website.

The design decisions represent our team's application of research findings and planning assumptions. Their effectiveness must be evaluated through testing.

## 11. Responsive and Accessible Design

The website includes:

- Responsive desktop, tablet, and mobile layouts.
- Visible navigation on smaller screens.
- Readable text.
- Descriptive form labels.
- Visible keyboard focus indicators.
- Form validation messages.
- Reduced-motion support.
- Flexible service card layouts.

These features are implemented in the code. Partial browser checks and a reviewer-reported screen-reader result are recorded in [QA.md](QA.md); full keyboard, assistive-technology details, and additional mobile/zoom checks remain to be documented.

## 12. Verification Checklist

| Check | Expected Observation | Status |
|---|---|---|
| Homepage navigation | Links open the correct pages | Checked from homepage/services to booking |
| Service categories | All six categories are visible | Present in published page; full content audit pending |
| Pricing transparency | Sample and unconfirmed prices are clearly identified | Present in published copy; reviewer task pending |
| Appointment form | Visitors can select a service, date, and time | Valid demo request completed |
| Required fields | Empty submissions are rejected | Checked with native browser validation |
| Invalid email | Incorrect email format is rejected | Checked with malformed test email |
| Date and time | Past appointment times are rejected | Past time on current date rejected; year boundary needs follow-up |
| Confirmation summary | Matches the submitted information | Service/date/time/status checked |
| Unique request IDs | Separate requests have different IDs | One ID observed; uniqueness across multiple requests not yet checked |
| Storage and retrieval | Saved requests can be retrieved | Confirmation reloaded in same browser successfully |
| Missing request | An appropriate error message appears | Unknown request ID showed an error state |
| Booking status | Clearly displays pending approval | Checked; demo does not represent a confirmed reservation |
| Privacy | Names and emails are not stored | Confirmed by code review of local storage fields |
| Mobile layout | Pages remain readable and usable | No horizontal overflow observed at 320–390 px |
| Keyboard accessibility | Interactive elements can be reached and operated | Tab order checked with no trap; full keyboard operation pending |
| Screen reader | Labels/statuses are announced and usable | Omari reports it worked as intended; AT/browser details not recorded |

Observed browser results and limitations are documented in [QA.md](QA.md). Checks not yet run remain explicitly marked as pending above.

## 13. Team Contributions and Integration

### Omari — Member 1

- Homepage design.
- Services and pricing page.
- Original cream and sage green visual identity.
- Shared stylesheet.

### Clara — Member 2

- Appointment request form.
- Form validation.
- Larger form typography.
- Website integration.
- Consistent branding and navigation across pages.

### Tas — Member 3

- Original design proposal.
- Confirmation page.
- Unique appointment request IDs.
- Browser-based appointment storage and retrieval.

The integration updates preserve the original responsibilities and functionality developed by each team member.

## 14. Peer Review

Each member will review another member's work.

- Omari reviews Clara's appointment form.
- Clara reviews Tas's confirmation and storage functionality.
- Tas reviews Omari's homepage and services.

Feedback will be documented through GitHub Issues.

Changes will be explained, implemented where appropriate, and retested before resolved issues are closed.

## 15. AI Usage

AI assisted with organizing the original design proposal, updating documentation, improving website styling, and integrating website features.

The team is responsible for reviewing the code, checking research claims, testing website functionality, and documenting actual observations.

No unperformed tests are represented as successful.

## 16. Project Links

- [Published Website](https://cf344.github.io/is117-group-business/)
- [Services and Prices](https://cf344.github.io/is117-group-business/services.html)
- [Appointment Request Form](https://cf344.github.io/is117-group-business/booking.html)
- [GitHub Repository](https://github.com/cf344/is117-group-business)
- [GitHub Issues](https://github.com/cf344/is117-group-business/issues)
