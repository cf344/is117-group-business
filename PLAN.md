
# PLAN.md — Morrow Beauty Studio

**Course:** IS117 — NJIT

**Project:** Group Business Website

**Team Members:** Omari, Clara, and Tas

**Updated:** November 23, 2026

**Status:** Website implemented; testing and peer review pending.

## 1. Project Goal

Our goal is to develop a welcoming and easy-to-use beauty salon website that allows visitors to explore services, understand sample prices, and request appointments without unnecessary steps.

The website is an educational demonstration and does not process real payments or reserve actual appointments.

## 2. Target Audience

Our primary audience includes college students and young adults looking for convenient beauty services.

Our secondary audience includes everyday customers and working professionals who value clear pricing, organized information, and convenient appointment requests.

These audience preferences are planning hypotheses that require further verification.

## 3. Alternative Approaches

### Approach A — Service-First Booking

Visitors explore available services and sample prices before opening the appointment form.

Advantages:

- Helps visitors compare services.
- Provides pricing information before booking.
- Supports customers who are unsure which service to choose.

Potential limitation:

- Requires additional navigation before reaching the appointment form.

### Approach B — Quick Booking

Visitors open the appointment form directly from the homepage and select their preferred service.

Advantages:

- Reduces navigation steps.
- Helps returning visitors who already know what they want.
- Makes appointment requests convenient.

Potential limitation:

- Visitors may skip important service and pricing information.

### Current Design Direction

Our website combines both approaches.

Visitors can browse services first or use the direct appointment request button.

We chose this combined direction because different visitors may have different needs.

Both navigation paths require testing before we can determine which approach is more effective.

## 4. User Stories

### User Story 1 — Explore Services

As a new visitor, I want to explore the available beauty services so that I can choose a treatment that meets my needs.

### User Story 2 — Understand Pricing

As a customer with a budget, I want to see sample prices before requesting an appointment so that I can make an informed decision.

### User Story 3 — Request an Appointment

As a busy customer, I want to select a service, preferred date, and time so that I can request an appointment conveniently.

### User Story 4 — Review Appointment Details

As a customer submitting an appointment request, I want to see a confirmation summary and request ID so that I can verify my information.

### User Story 5 — Retrieve a Saved Request

As a returning visitor, I want to reopen my saved appointment confirmation so that I can review my previous request.

## 5. Essential Features and Observable Checks

| Feature | Observable success check | Owner |
|---|---|---|
| Homepage | All six service categories are visible and navigation links work. | Omari |
| Services and pricing | Visitors can find a service description and its sample price or unconfirmed pricing label. | Omari |
| Appointment form | Visitors can select a service, future date, and preferred time. | Clara |
| Form validation | Empty fields, invalid emails, and past appointment dates or times are rejected. | Clara |
| Confirmation page | The displayed service, date, and time match the submitted information. | Tas |
| Unique request ID | Two separate appointment requests generate different IDs. | Tas |
| Browser storage | A saved appointment can be retrieved after reopening its confirmation URL in the same browser. | Tas |
| Responsive design | Pages remain readable and usable on desktop and mobile devices. | All members |
| Keyboard accessibility | Interactive elements can be reached and operated using the keyboard. | All members |

All checks require actual testing before being marked as passed.

## 6. Brand Promise and Visual Choices

### Brand Promise

Everyday care, thoughtfully done.

### Brand Archetype

Caregiver.

### Brand Personality

- Welcoming
- Calm
- Friendly
- Professional
- Approachable

### Visual Choices

- Cream and warm neutral backgrounds.
- Sage green and dark green accents.
- Serif headings.
- Readable sans-serif body text.
- Rounded cards and buttons.
- Consistent navigation.
- Organized service categories.

These choices are intended to create a comfortable and welcoming customer experience.

## 7. Honest Persuasion

### Transparent Pricing

Visitors can review sample prices before requesting an appointment.

Services without established sample prices are marked as "To be confirmed."

Verification:

Ask a reviewer to locate a service price and explain whether the displayed amount is a sample price, starting price, or unconfirmed price.

### Clear Appointment Expectations

The website clearly explains that appointment requests are pending approval.

No real appointment is automatically confirmed.

Verification:

Ask a reviewer to submit a demo appointment request and explain whether an actual appointment has been reserved.

## 8. Technical Plan

### Frontend

- HTML for website structure.
- CSS for styling and responsive design.
- JavaScript for form validation and appointment functionality.

### Data Storage

Browser localStorage is used to save demo appointment requests.

The saved information includes:

- Unique appointment request ID.
- Selected service.
- Preferred appointment date.
- Preferred appointment time.
- Pending appointment status.

Names and email addresses are not stored or transmitted.

The website does not use a live booking backend or real payment system.

### Publication

The website is published using GitHub Pages.

## 9. Team Work Division

### Omari — Member 1

Research:

- Compare existing beauty salon websites.
- Examine service presentation, pricing, and navigation.

Programming:

- Homepage.
- Services and pricing page.
- Original shared stylesheet.

Testing:

- Review Clara's appointment form.
- Test required fields and validation.
- Document feedback and observed results.

### Clara — Member 2

Research:

- Review the European Wax Center booking experience.
- Identify ways to simplify appointment requests.

Programming:

- Appointment request form.
- Service selection.
- Date and time selection.
- Form validation.
- Website integration and consistency improvements.

Testing:

- Review Tas's confirmation page.
- Verify request details and unique IDs.
- Test browser storage and retrieval.
- Document feedback and observed results.

### Tas — Member 3

Research:

- Review GlossGenius salon website and appointment tools.
- Examine design, customer trust, and booking features.

Programming:

- Confirmation page.
- Unique appointment request IDs.
- Browser-based storage and retrieval.
- Missing-request error handling.

Testing:

- Review Omari's homepage and services.
- Test navigation and pricing visibility.
- Document feedback and observed results.

### Shared Responsibilities

All members contribute to research, programming, documentation, peer review, testing, and final project preparation.

GitHub commits and individual records will document actual contributions.

## 10. Peer Review Plan

| Reviewer | Work being reviewed | Main task |
|---|---|---|
| Omari | Clara's appointment form | Submit valid and invalid appointment requests. |
| Clara | Tas's confirmation and storage | Verify appointment details, request IDs, and saved request retrieval. |
| Tas | Omari's homepage and services | Find a service, understand its price, and navigate to booking. |

Each reviewer should:

1. Complete the assigned task.
2. Record actual observations.
3. Identify any problems or useful improvements.
4. Create a GitHub issue documenting feedback.
5. Allow the responsible member to respond.
6. Retest accepted changes.
7. Record the final result.

## 11. Comparing the Two Approaches

Both approaches should be evaluated using the same tasks.

### Task 1

Find the 30-minute facial, identify its sample price, and request an appointment.

### Task 2

Request a preferred beauty service for a future date and time, then locate the appointment request ID.

### Comparison Criteria

- Task completion.
- Number of navigation steps.
- Ease of finding information.
- Confusing instructions or controls.
- Understanding of the pending approval status.
- Reviewer preference and reasoning.

Results have not yet been collected.

## 12. Project Milestones

### Research

- [x] Select the business concept.
- [x] Research existing salon websites.
- [x] Compare two business positions.
- [x] Develop two audience hypotheses.
- [x] Connect research to design decisions.

### Design and Development

- [x] Establish the brand identity.
- [x] Develop the homepage.
- [x] Develop the services page.
- [x] Develop the appointment form.
- [x] Implement form validation.
- [x] Develop the confirmation page.
- [x] Implement appointment storage.
- [x] Integrate website navigation.
- [x] Apply consistent branding.
- [x] Publish through GitHub Pages.

### Verification

- [ ] Verify the latest published website.
- [ ] Test navigation and service links.
- [ ] Test appointment form validation.
- [ ] Test confirmation and storage.
- [ ] Compare both booking approaches.
- [ ] Test mobile responsiveness.
- [ ] Test keyboard navigation.
- [ ] Complete peer review.
- [ ] Address feedback and retest.

### Final Documentation

- [x] README.md
- [x] RESEARCH.md
- [x] MEMBER2_RESEARCH.md
- [x] MEMBER3_RESEARCH.md
- [x] DESIGN.md
- [x] PLAN.md
- [ ] Update QA.md with observed results.
- [ ] Complete LEARNING.md.
- [ ] Prepare final submission links.

## 13. Definition of Done

The project will be considered complete when:

- All website pages are accessible.
- All essential features work as intended.
- Appointment requests are saved and retrieved correctly.
- Pricing and appointment expectations are clearly communicated.
- Mobile and keyboard checks are completed.
- All members have documented meaningful contributions.
- Peer feedback has been addressed and retested.
- Research, planning, and learning records are complete.
- The final website and documentation links are ready for submission.

## 14. Project Links

- [Published Website](https://cf344.github.io/is117-group-business/)
- [Services and Prices](https://cf344.github.io/is117-group-business/services.html)
- [Appointment Request Form](https://cf344.github.io/is117-group-business/booking.html)
- [GitHub Repository](https://github.com/cf344/is117-group-business)
- [GitHub Issues](https://github.com/cf344/is117-group-business/issues)
- [Research Documentation](RESEARCH.md)
- [Design Documentation](DESIGN.md)

## 15. AI Usage

AI assisted with brainstorming, organizing the project plan, documentation, coding, and website integration.

All team members are responsible for understanding their contributions, reviewing the code, verifying research claims, and recording actual testing results.

No unperformed tests or peer reviews are represented as completed.
