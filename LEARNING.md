# LEARNING.md — Member 3 Reflection

**Project:** Morrow Beauty Studio — IS117 Group Business  
**Contributor:** Tas (GitHub: @itssfariha-lab)  
**Date:** November 23, 2026

## My contributions

I contributed the initial design and research documentation, the appointment confirmation page (`confirmation.html`), and the browser-based request storage script (`appointment-storage.js`). My pull request was merged into the group's main repository. The shared booking form was later connected to my storage and confirmation flow during team integration.

My JavaScript generates a unique request ID for a demo appointment, saves the service and preferred date/time in the browser's `localStorage`, and returns a link to the confirmation page. The confirmation page reads the saved request, shows its details and pending-approval status, and handles a missing or invalid request ID without pretending that an appointment was confirmed.

I also researched GlossGenius's salon booking and website tools. This was a review of software features, **not** a hands-on review of a particular salon's live booking site. I used the research to think about a short appointment flow, service discovery, and honest confirmation language.

## Design decisions and collaboration

My initial design proposal emphasized a calm, approachable salon experience. During integration, the team adopted the cream and sage-green identity used on the homepage, and the confirmation page was restyled to match. I learned that collaborating on one website requires consistent navigation, wording, colors, and links even when different members build different pages.

I supported two honest persuasion choices: labeling prices as samples or 'To be confirmed,' and clearly telling visitors that an appointment request is **pending approval**, not a guaranteed reservation. These choices make the educational demo more transparent.

## Peer review

I reviewed Omari's `index.html`, `services.html`, and `styles.css` source code. I checked that all six service categories have matching destination sections, that pricing labels distinguish sample from unconfirmed prices, and that responsive CSS breakpoints and keyboard-focus styles are defined.

My suggested improvement was to pass the selected service from a homepage or services link into the booking form so a visitor would not need to select it again.

**Review scope:** This was a source-code review, not a completed hands-on test of the published site. I posted the review in a GitHub issue; the live browser, mobile, and keyboard checks remain to be confirmed separately.

## What I learned

- How separate HTML and JavaScript files can work together in a multi-page website.
- How browser `localStorage` can preserve demo request information within the same browser, and why it is not a substitute for a real server-side booking system.
- How to communicate the difference between a request and a confirmed appointment.
- How GitHub branches, pull requests, merging, and peer-review issues support group collaboration.
- Why documentation should separate code inspection and planned checks from actual observed test results.

## AI assistance and verification

AI assisted with drafting and organizing documentation, creating initial implementation code, inspecting the current repository files, and preparing my source-code peer review. The work was committed under my GitHub account and merged into the group project. AI assistance is not evidence of personal hands-on testing; the group must review the implementation and verify behavior before making test claims.

## Manual verification still needed

- [ ] Open the deployed homepage and confirm the navigation and six service links work.
- [ ] Check the site on a narrow mobile viewport and record the device/browser used.
- [ ] Navigate with Tab, Shift+Tab, and Enter and record the observed focus behavior.
- [ ] Submit a demo request with fictional details, confirm the displayed values, and refresh the confirmation page.
- [ ] Generate two demo requests and confirm the IDs differ.
- [ ] Record any changes made in response to peer review and retest.

**Actual observations, environment, and dates:** To be added after these checks are performed. Do not mark them complete without evidence.

## Project links

- [Group repository](https://github.com/cf344/is117-group-business)
- [Published website](https://cf344.github.io/is117-group-business/)
- [Pull request #1](https://github.com/cf344/is117-group-business/pull/1)
- [Peer-review issues](https://github.com/cf344/is117-group-business/issues)
