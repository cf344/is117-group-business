# DESIGN.md — Beauty Salon Booking Website

**Contributor:** Tasnim Fariha (Member 3)  
**Project:** IS117 Group Business — The Beauty Salon  
**Status:** Design proposal; implementation, external research, and tests pending

## Design goals
The website should help college students and young adults explore nail, eyelash, eyebrow, and makeup services, see clearly labeled prices, and submit an appointment request. A request is not an automatically confirmed appointment.

## Proposed visual direction
- **Brand personality:** welcoming, clean, approachable, and professional; final branding depends on the team's audience and competitor research.
- **Color palette:** warm cream background, dark charcoal text, and muted rose accents. Check text and control contrast before implementation.
- **Typography:** readable sans-serif body text with clear heading hierarchy; avoid decorative text in forms.
- **Layout:** simple navigation for Home, Services, Prices, and Request Appointment; service cards with clear descriptions and prices.
- **Responsive/accessibility:** mobile-first layout, visible keyboard focus, descriptive labels, helpful validation messages, and no horizontal scrolling.

## Two honest persuasion techniques
1. **Transparent pricing:** show accurate prices, or clearly mark sample prices until verified. Do not hide conditions or imply a price is final when it is not.
2. **Clear booking expectations:** explain that submission creates a request pending approval. Do not claim a time slot is reserved or confirmed before the salon approves it.

## Member 3 responsibilities: Confirmation and data storage
The proposed confirmation flow is:
1. Receive a valid appointment request from Member 2's form.
2. Generate a unique appointment request ID.
3. Save the selected service, preferred date/time, contact details, request ID, and pending status using an agreed storage method.
4. Display a confirmation page with the request ID, selected service, preferred date/time, and **Pending approval** status.
5. If saving fails, show an error instead of falsely confirming receipt.
6. Do not expose private contact information in public repository files, URLs, or logs.

The implementation and data format must be coordinated with Member 2. No storage system or confirmation feature is claimed as implemented yet.

## Proposed verification checklist

| Check | Expected observation | Status |
|---|---|---|
| Confirmation summary | Matches the service, date, and time submitted | Not tested |
| Unique IDs | Separate requests have different IDs | Not tested |
| Storage/retrieval | Saved requests can be retrieved correctly | Not tested |
| Failed submission | Error appears; no false success message | Not tested |
| Booking status | Clearly states pending approval | Not tested |
| Privacy | Contact details are not exposed publicly | Not tested |
| Mobile accessibility | Confirmation content remains readable and keyboard accessible | Not tested |
| Member 1 homepage review | Navigation works; services and prices are visible; mobile layout is usable | Awaiting homepage |

## Research and evidence plan
Member 3 is assigned to review **one existing beauty salon website**. Record its original URL, date reviewed, observable strengths and weaknesses, and findings about service descriptions, prices, visual design, and customer trust. Distinguish observations from assumptions. Connect each verified finding to a proposed design decision and test.

| Original source and date | Observed finding | Design decision | Verification |
|---|---|---|---|
| Pending independent website review | Pending | Pending | Pending |

The other two website comparisons and final business positioning will be completed with the team. The proposed design above is not presented as proven by competitor research.

## Peer review and team dependencies
- Coordinate the form-to-confirmation data fields with Clara (Member 2).
- Review Omari's (Member 1) homepage, services, pricing visibility, navigation, and mobile layout after implementation.
- Record actionable feedback in a GitHub issue; retest after changes.
- Update this document with actual source URLs, review dates, implemented decisions, and observed test results before final submission.

## AI use
AI assisted with drafting and organizing this planning document. Research observations, implementation, and test results have not been fabricated or represented as completed.
