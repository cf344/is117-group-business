# Appointment request form — peer-review checklist

**Updated:** November 23, 2026 (Eastern)
**Status:** AI-assisted test run and teammate review completed on the published demo; the local `member-1-home-services` checkout does not contain Clara's newer form, so the review target was the published site, cross-checked against `main` at commit `80b113c305ceb554626a32f4f147a24f4644fa73`. This is a front-end demonstration, not a real booking service.

## Before testing

- [ ] Record the branch/commit or deployed URL, browser, operating system, and test date.
- [ ] Use invented test details only; do not enter real customer information.
- [ ] Confirm the environment is safe for test submissions and note whether it stores or sends data.

## Test record — November 23, 2026

**Target:** [Published appointment form](https://cf344.github.io/is117-group-business/booking.html) and [confirmation page](https://cf344.github.io/is117-group-business/confirmation.html), with the matching files on [main at the reviewed commit](https://github.com/cf344/is117-group-business/commit/80b113c305ceb554626a32f4f147a24f4644fa73).
**Environment:** Integrated Chromium browser; responsive viewport sizes 320, 375, and 390 CSS px; fictional test name/email only.

- **Required fields — observed:** Submitting the blank form stayed on the form and moved focus to the required service select (native browser validation).
- **Invalid inputs — observed:** A malformed email was blocked by native validation. A whitespace-only name produced “Please enter a valid name” and focused the name field. A past time on today's date produced “Please choose a future appointment date and time” and focused the time field.
- **Valid request and confirmation — observed:** A fictional request reached confirmation with the selected service, date, time, request ID, and “Pending Approval” status. Reloading the confirmation URL restored the same request. An unknown ID showed an error state without displaying request details.
- **Privacy — observed:** The form and confirmation disclose that this is a demo and no real salon receives the request. Code review confirmed local storage includes service/date/time/status only; name and email are not included.
- **Mobile — observed:** The homepage, form, services page, and confirmation had no horizontal overflow in the tested 320–390 px widths. This does not replace testing on physical phones, landscape, or 200% zoom.
- **Homepage/services connection — observed:** Homepage and services-page appointment links reached `booking.html`. The service choice was not preselected, but the form offers a labeled service dropdown.
- **Keyboard — partial:** Tab traversed the navigation, every form field, submit button, and return link in order, then continued through the page without a trap. The native date/time controls expose multiple tab stops. Labels are associated and focus styling is defined. My browser run did not test screen-reader announcements, operation of each control by keyboard, or 200% zoom; Omari's separate screen-reader report is recorded below.
- **Screen reader — reviewer-reported:** Omari reports that the screen reader worked as intended during their review. The screen reader/browser combination and specific controls checked were not recorded, and I did not independently verify this result. Add the assistive technology, browser/device, and controls checked if available.

**Review outcome:** The tested paths worked as described; no blocking defect was observed. The reviewer also reported that the service dropdown, entering name/email, and screen reader worked as intended. A separate low-priority suggestion from the AI-assisted check is to carry a service selection into the form when a visitor starts from a service-specific menu link; this is not part of issue #3. Screen-reader specifics were not recorded. Keep the peer review open until any accepted issue #3 change is verified and a peer retries it.

## Human peer-review notes — Omari, November 23, 2026

These are the reviewer's observations and recommendations from their own pass; the details below have not been independently reproduced in the browser run above.

### Observed by reviewer

- The date control constrained month and day segments to plausible ranges: months below 1 or above 12 were corrected to 01 or 12, and days below 1 or above 31 were similarly adjusted.
- The year segment appeared to accept years far in the past or future (examples reported: 1900, 19000, and 200000).
- The time field allowed typed input without showing which appointment times are actually available.

### Recommendations

1. **Date range — investigate (highest priority):** Keep the earliest date at today and define a reasonable booking horizon based on the team's policy. Use the date input's supported min/max constraints and validation so a year far outside that window cannot be submitted. Do not limit the year to only the current calendar year if valid appointments may occur next year.
2. **Time availability — investigate:** Either show available time choices based on the demo's stated schedule, or label the entered time as a preference and explain that it is subject to confirmation. Do not present unavailable slots as bookable.
3. **Additional notes — optional enhancement:** Consider an optional notes field for non-sensitive requests (for example, preferred style or hair-service context). Explain that it is optional and how it is stored; do not solicit medical or other sensitive details. The current demo intentionally does not store contact information, so any notes-storage decision needs to preserve an accurate privacy notice.

### GitHub issue

Created November 23, 2026: [#3 — Peer review: constrain appointment dates and clarify time availability](https://github.com/cf344/is117-group-business/issues/3). It records the review observations, recommendations, acceptance checks, and asks the team to document its decision. A follow-up comment records that the dropdown, name/email entry, and overall form flow worked as intended in the review. The reviewer also reported that the screen reader worked as intended; tool/browser details are not yet documented. The issue remains open for Clara/team review and subsequent verification/retry.

## Quick checklist

### Form inputs and feedback

- [ ] Submit with each required field empty. Are required fields identified, errors specific, and entered values retained for correction?
- [ ] Try a valid request using invented contact details. Can the customer choose or confirm a service and provide an appointment preference?
- [ ] Try malformed email/phone values, any unsupported date/time, and unusually long text. Are errors understandable and associated with the relevant field?
- [ ] Check that optional fields are clearly optional, input formats are explained, and the submit control prevents accidental duplicate submissions.
- [ ] Check that the selected service and any displayed price are understandable; do not imply an unapproved draft price is final.

### Mobile responsiveness

- [ ] Check a narrow phone viewport (320–375 CSS px) and a common phone viewport (390 CSS px), in portrait and landscape if available.
- [ ] Can users read labels, errors, service details, and the submit control without horizontal scrolling or clipped content?
- [ ] Are controls comfortably tappable, spacing usable, and the keyboard opened with the appropriate input type?
- [ ] Does the page remain usable at 200% zoom and when the on-screen keyboard is open?

### Keyboard accessibility

- [ ] Complete the flow using only Tab, Shift+Tab, Enter, and Space. Is the focus order logical and visible?
- [ ] Can every field, choice, link, and button be reached and operated without a pointer? Is there any keyboard trap?
- [ ] Does every control have a persistent, programmatic label? Are required state and instructions available to assistive technology?
- [ ] On validation failure, is the error announced or otherwise discoverable, and can the user move to the invalid field and correct it?
- [ ] After a successful request, is the confirmation announced or easy to find without losing keyboard context?

### Homepage, services, and confirmation connection

- [ ] From the homepage, does the primary appointment action reach the form? Can the customer return to the homepage or service menu?
- [ ] From a service detail, does the request action carry the selected service into the form or make it easy to select it?
- [ ] Does the form explain what happens after submission and whether the customer is requesting a visit or booking a confirmed time?
- [ ] After a valid submission, does the confirmation page clearly say the request was received, summarize the relevant next step, and link back to services/home?
- [ ] On errors, refresh, or back navigation, are users protected from accidental duplicate submission or loss of entered data where practical?
- [ ] Does the confirmation appear only after a real successful submission? No success-shaped message for a failed or unavailable request.

## Log useful feedback in a GitHub issue

For each issue, include:

- **Environment:** branch/commit or URL, browser/device, viewport, date.
- **Steps to reproduce:** numbered, concise actions using fictional test data.
- **Expected / observed:** what should happen versus what actually happened.
- **Impact:** what task is blocked or confusing; include a screenshot only if it contains no personal data.
- **Decision and follow-up:** implement, investigate, defer, or decline with a reason; link any change and verification; ask the reviewer to retry before closing a resolved issue.

## Current site limitation

The published pages store demo appointment details in the visitor's local browser only. They do not send a request to a salon, reserve an appointment, or process payment. The review above applies only to the published demo and commit listed in the test record; stale branches such as `member-1-home-services` may not include the current form.

---

## Member 2 — Appointment Form and Website Retesting

**Tester:** Clara (@cf344)

**Date:** November 23, 2026

**Website:** https://cf344.github.io/is117-group-business/

**Related issue:** [Issue #3](https://github.com/cf344/is117-group-business/issues/3)

### Changes Made After Peer Review

After reviewing Omari's feedback, I updated the appointment form to limit appointment requests to the next 90 days. I also added an explanation that the selected appointment time is a preference and is subject to approval.

I decided not to add an optional notes field because I wanted to keep the form simple and avoid collecting unnecessary customer information.

### Manual Testing Results

| Test | Observed Result | Status |
|---|---|---|
| Past appointment dates | Past dates were rejected. | Passed |
| Dates beyond 90 days | Dates outside the booking window were rejected. | Passed |
| Valid appointment request | The form accepted valid information. | Passed |
| Confirmation page | Correct appointment information was displayed. | Passed |
| Refresh confirmation page | Saved appointment details remained visible. | Passed |
| Unique request IDs | Two separate requests generated different IDs. | Passed |
| Mobile responsiveness | The website worked on mobile. | Passed |
| Keyboard navigation | Keyboard navigation worked. | Passed |

### Testing Summary

All eight manual tests passed. The updated appointment form rejected invalid dates while continuing to accept valid appointment requests. The confirmation page and local storage also worked as expected during my tests.

### What I Learned

This testing helped me understand why peer feedback is important. Even when a website works, there can still be improvements that make it clearer and easier to use. Retesting after making changes also helped me confirm that the improvements did not interfere with the existing features.

### Next Steps

Ask Omari to review and retest the updated appointment form before closing Issue #3. Detailed browser, device, viewport, and commit information was not recorded during this test.
