---

# Member 2 — Clara's Individual Learning Reflection

**Project:** Morrow Beauty Studio — IS117 Group Business  
**GitHub:** @cf344  
**Date:** November 23, 2026

## My Contributions

My main responsibility was designing and developing the appointment request form for Morrow Beauty Studio. I created the form so visitors could select a beauty service, choose their preferred appointment date and time, and enter fictional contact information. I also added validation to prevent incomplete or invalid submissions.

For my research, I reviewed the European Wax Center website and found its booking process easy to use. This helped guide my decision to keep our appointment form simple, organized, and easy to understand.

I also contributed to integrating the entire website. I updated the pages to have consistent branding, colors, navigation, and service categories while preserving my teammates' original contributions. Additionally, I helped update our research, design, and planning documentation.

## What I Learned

Through this project, I learned how HTML, CSS, and JavaScript work together to create an interactive website. I gained a better understanding of form validation, responsive design, and how information can be passed between different website pages.

I also learned how important consistency is when working on a group project. Since each member was responsible for a different part of the website, we needed to make sure that our pages worked together and looked like they belonged to the same business.

Another important thing I learned was how GitHub helps teams organize their work, track changes, and document individual contributions through commits, pull requests, and issues.

## Challenges and Improvements

One challenge was connecting the appointment form to the other pages while maintaining a consistent design. The original pages had differences in colors, business names, and service categories. I helped resolve these differences by updating the pages to follow the Morrow Beauty Studio identity.

I also increased the font size of the appointment form to make the information easier to read and improved the navigation so visitors could move between pages more easily.

## Peer Feedback

Omari reviewed my appointment form and provided feedback about limiting the appointment date range, clarifying time availability, and considering an optional notes field.

This feedback helped me understand that a form can work technically but still have areas that need improvement from a customer's perspective.

My next step is to address the feedback, retest the form, and document the actual results. I will also review Tas's confirmation page and appointment storage functionality.

## Honest Persuasion and Privacy

I learned that a website should encourage customers to take action without misleading them. Our website clearly identifies sample prices and explains that appointment requests are pending approval rather than confirmed reservations.

We also decided not to store customer names or email addresses. Only the information necessary to demonstrate the appointment request is saved locally in the browser.

## AI Usage

I used AI to help organize my research, understand and develop code, improve website design, integrate the different pages, and update project documentation.

I am responsible for reviewing the AI-assisted work, understanding the code, and verifying that the website functions correctly.

## Overall Reflection

Overall, this project helped me improve my web development, problem-solving, communication, and teamwork skills. It showed me that building a website involves more than writing code. Research, planning, accessibility, consistency, testing, and feedback are also important parts of creating a successful website.

I also learned that implementing a feature does not automatically mean it works correctly. Testing the website and documenting actual results are necessary before considering the project complete.

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
