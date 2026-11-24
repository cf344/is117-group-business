# Member 1 — Omari's Individual Learning Reflection

**Contributor:** Omari Sellers (@ors2222)
**Project:** Morrow Beauty Studio
**Reflection date:** November 23, 2026 (Eastern)

## My Contributions

I contributed to the project from research through review and documentation. My work included:

- Researching and comparing beauty salon websites, including how they organize services, show prices, communicate their brand, and guide visitors toward booking.
- Helping shape the Morrow Beauty Studio concept and its welcoming, accessible-everyday-care direction.
- Creating the initial homepage and services/pricing experience and contributing the original shared visual identity and styling.
- Connecting competitor observations to design choices, such as making service information and starting prices easy to find and explaining when a price is not final.
- Reviewing Clara's appointment request form, recording both successful interactions and suggestions for improvement, and opening [issue #3](https://github.com/cf344/is117-group-business/issues/3) for the team to discuss.
- Updating the research, design, and QA records so that evidence, assumptions, test results, reviewer reports, and remaining work are distinguishable.

The shared repository and commit history show how these individual contributions fit into the team project. The project is an educational demo: it does not reserve appointments, process payments, or send requests to a real salon.

## What I Learned

I learned more about incorporating HTML into a complete, multi-page website and how page structure, shared styles, and navigation work together. Building a homepage and services page helped me see how to turn a business idea into a practical customer path: understand the salon, compare services and prices, then take the next step toward an appointment.

I also learned that an e-commerce-style experience is not only about writing code or placing a “Book” button on a page. Businesses use clear calls to action, useful service categories, pricing cues, consistent branding, trust-building information, and a simple sequence of steps to help a visitor make a decision. Those techniques can guide a customer without pressuring or misleading them. For this project, that meant favoring clear sample prices, a warm and reassuring visual direction, honest explanations of what happens after a request, and no fabricated reviews, false scarcity, or unsupported promises.

Research helped me understand how to move from observation to a design decision. A competitor's feature is evidence that the site presents information in a certain way; it is not, by itself, proof that customers prefer it. I learned to label our two audience profiles as hypotheses rather than real interview findings, and to identify a user task that still needs to be tested.

I also gained experience guiding AI through a multi-step project. I learned to provide the project context and constraints, ask for help with specific research, design, documentation, and testing tasks, and then review the output rather than accepting it automatically. Checking claims against original sources and separating AI-assisted observations from teammate reports made the final record more trustworthy.

## Challenges and How I Responded

- **Finding the current form to review:** My original local branch did not contain Clara's newer appointment form. I used the published demo and the current shared `main` as the review target instead of assuming the older checkout represented the team's current work.
- **Turning feedback into actionable review notes:** It was more helpful to separate what worked from what could improve. I recorded that the service dropdown, name and email entry, and request flow worked as intended, while also describing the reported year-range and unclear time-availability concerns with follow-up checks.
- **Distinguishing actual results from reports and assumptions:** My screen-reader result is recorded as reviewer-reported because the assistive technology, device/browser, and exact controls checked were not captured. The persona descriptions are hypotheses, and the form checks apply to a demo rather than a real booking system.
- **Balancing persuasion and honesty:** A salon website should help visitors feel confident, but it should not imply that a request is a confirmed appointment, present an unverified price as final, or use invented trust claims.
- **Integrating documentation with the team's current work:** The local checkout and the shared repository had diverged. I based the documentation update on the current team `main` and submitted it through a pull request so existing team work remained intact.

## Peer Review and What I Would Improve

In my peer review of Clara's form, I observed that the month and day controls corrected values to plausible ranges. I reported that the year field appeared to allow implausibly old or distant years, and that typed times did not tell a customer which appointment times were available. I suggested that the team set a sensible date window, clarify whether a time is an available slot or a preference, and consider an optional notes field only with clear privacy and accessibility behavior.

I documented positive findings as well: the service dropdown operated as expected, name and email could be entered, and the form otherwise worked through the request flow. I also reported that the screen reader worked as intended. These notes are in [issue #3](https://github.com/cf344/is117-group-business/issues/3), which remains open for the team to decide what to implement and to record verification and a reviewer retry.

In a future review, I would record the browser, device, viewport, date, and assistive technology from the start; capture precise reproduction steps; and distinguish my direct observations from recommendations. I would also test a realistic range of dates, both valid and invalid submissions, keyboard-only operation, mobile layouts, zoom, and the confirmation path. For the design, I would ask a reviewer to find a service and understand its price, rather than assuming that a clear-looking menu is automatically easy to use.

## AI Assistance

I used AI as a support tool for research organization, design-to-feature connections, documentation, and test planning. I guided it with the assignment requirements, our salon concept, the existing team work, and the boundary that this is a demo rather than a live booking business. AI also helped structure the QA notes and identify checks to perform.

I remained responsible for the research and review decisions. I checked research claims against linked sources, treated generated personas as assumptions rather than interviews, used fictional information in form testing, and documented which test results were directly observed versus reported by a teammate. AI did not independently verify my screen-reader experience; that remains my report, and more reproducible details would improve it.

## Overall Reflection

This project helped me connect web development with business research and customer decision-making. I now see how HTML structure, visual design, service and price information, calls to action, and form feedback combine to support a customer's journey. I also learned that building a feature is only part of the work: the team needs evidence, clear ownership, peer feedback, and a repeatable check before deciding that a design works.

I am proud that I contributed to the site's foundation and followed through by reviewing a teammate's feature and documenting both strengths and concerns. My next step is to participate in the team's decision on issue #3, retest any accepted changes, and help obtain a peer retry. I would also like to run a simple service-and-price task with a reviewer and record more complete keyboard, screen-reader, and mobile test details. Those checks will help us improve the design based on observed behavior rather than assumptions.
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

# Member 2 — Tas' Individual Learning Reflection

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
