# Individual Learning and Project Reflection

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
