# Member 1 research, site decisions, and open checks

**Core competitor review:** November 20, 2026 (Eastern) · **Ulta supplemental review:** November 23, 2026 (Eastern)
**Contribution:** Member 1, @ors2222 — competitor review, homepage and services concept, and booking-form QA handoff.
**Question:** How can a neighborhood beauty salon help a first-time or occasional customer understand what a service may cost, choose where to learn more, and feel comfortable taking the next booking step?  
**Decision to test:** Give visitors a calm, welcoming homepage, a scannable service menu with starting prices, and a clear next step. Make price variation explicit. The website is an educational concept with browser-local demo requests, not a live salon or real booking service.

## Evidence, interpretation, and assumptions

- **Observed source evidence** describes what was visible on the original business or platform pages on each section's stated review date. These pages can change; visit the links to inspect them.
- **Interpretation** is my reading of how a visible feature could help or hinder the customer task. It is not a measured usability result.
- **Assumptions** about potential customers remain hypotheses. The team has selected Morrow Beauty Studio and an accessible-everyday-care direction for the class project, but has not conducted customer interviews.
- **Planned checks** are not test results. The Member 2 appointment form was not present in the local repository during the November 20 core review; the later published-demo test is documented separately in [QA.md](QA.md).

## Three salon website comparisons

| Source (original page) | Dated observation | Strengths for a customer | Weaknesses or limits for the task |
|---|---|---|---|
| [Salon I Am — Services](https://saloniamnj.com/services/) (Montville, NJ) | Reviewed Nov. 20, 2026. Page groups hair, color, facials, waxing, men’s and youth services; shows “and up” prices (for example, women’s haircuts $70+, blowouts $35+, classic facials $95+, men’s cuts $35+). It has a schedule link and displays address, phone, and hours. | Broad menu helps a customer see the salon’s range in one place. Category labels and prices support service and budget comparison. Contact and hours information support an offline question. | The page’s price list is long. “And up” communicates variable cost but does not explain which factors change the price. The in-page service descriptions and price list are separated, so a quick scan may require jumping between sections. |
| [Hina’s Salon — Services](https://www.hinassalon.com/services) (Cranford, NJ) | Reviewed Nov. 20, 2026. Page has linked service categories and itemized prices. Examples: straight cuts $30+, layered cuts $40+, blowouts $40+, eyebrow waxing $15, 30-minute facials from $50, 60-minute facials from $85, and 90-minute facials from $125. It lists phone and street address. | Detailed, easy-to-compare item prices. Facial prices are grouped by appointment length, giving a concrete explanation for at least one price difference. | The page is a dense list, and “+” appears on variable services without a general explanation of what drives the extra cost. A booking action is not evident on the services page reviewed; that statement is limited to this page, not the salon’s full booking setup. |
| [Lush Atelier — Home](https://lushateliersalon.com/) (Newark, NJ) | Reviewed Nov. 20, 2026. The homepage leads with a clear Newark identity, “Book a Visit,” “Explore Services,” address, hours, contact details, service categories, team profiles, a portfolio, testimonials, FAQs, and a contact form. It presents a broad specialist offering, including hair, nails, skin, bridal, and post-operative care. The inspected homepage did not show service prices in its main menu. | Strong local identity and visual/editorial brand. The team, gallery, FAQs, contact information, and booking routes answer trust and visit-planning questions. | A customer comparing a service’s cost may need another step because prices are not visible in the inspected homepage content. The range of specialist services can make the choice feel larger for a visitor who only wants a simple first visit. |

### What the salon comparisons suggest

**Evidence:** Two local menus show itemized prices, with “from/and up” labels for services that vary. Hina’s Salon also presents facial price steps by session length. Salon I Am and Hina’s show broad service lists. Lush Atelier gives more homepage space to identity, team, work samples, FAQs, and ways to contact/book.

**Interpretation:** A short menu with starting prices and a plain-language note on what changes the quote can combine price clarity with a reassuring introduction. It would let a visitor compare common services without requiring them to browse a long catalogue first. This is a proposed decision, not a demonstrated customer preference.

## Supplemental popular-site review: Ulta Beauty

**Original source:** [The Salon at Ulta Beauty — Services and Events](https://www.ulta.com/beautyservices/all), reviewed November 23, 2026 (Eastern). This is an additional national reference, not a replacement for the three local salon comparisons above.

- **Observed features:** The page describes hair, skin, makeup, brow, and ear-piercing services; promotes seasonal services; and includes a “Book an appointment” route with a prompt to find the closest salon.
- **Booking path observed:** Services and Events page → “Book an appointment” → the browser redirected to an Ulta login URL with the appointment page as its destination. I could not inspect the later location, service, time, or confirmation steps, so this is not a complete booking-flow observation.
- **Visual/layout strengths:** The page organizes the salon introduction and service categories ahead of promotional modules and a location/booking call to action. This gives visitors more than one visible reason to explore services, while retaining a direct booking route.
- **Limits for our task:** The observed page did not expose a scannable list of service prices in the content reviewed. A login redirect appeared before the appointment choices, adding a step before the flow could be evaluated. These observations apply to the page and visit date above; site content and behavior may change.

**Design implication:** Keep our own service-and-price information available before any appointment request, and state clearly whether submission requests a visit or confirms a time. This complements the local menus' price evidence and booking-platform flow described below.

## Teammate research cross-check

The current shared `main` branch includes [Member 2's European Wax Center review](https://github.com/cf344/is117-group-business/blob/main/MEMBER2_RESEARCH.md) and [Member 3's GlossGenius review](https://github.com/cf344/is117-group-business/blob/main/MEMBER3_RESEARCH.md), both dated November 23, 2026. I checked the linked original pages on that date to connect their notes to the evidence:

- **European Wax Center:** The [homepage](https://waxcenter.com/) foregrounds waxing services, a “Browse Services” route, promotions, and FAQs; the [services page](https://waxcenter.com/pages/wax-services) describes the service lineup and notes that offerings/prices can vary by location. This supports a focused, category-first menu. Member 2's statement that booking felt easy is a personal impression, but the report does not trace the specific booking steps or record the control labels/screens visited. Do not treat it as a tested result until that flow is documented.
- **GlossGenius:** The [booking website builder](https://glossgenius.com/custom-website-builder) and [salon software page](https://glossgenius.com/customers/salon-software) are vendor product pages. They describe customizable booking pages, service menus, client booking without an app or login, and configurable booking policies. These are vendor feature claims, not independent evidence that a specific salon flow is usable or accessible.

**Design implication:** The focused EWC service categories and GlossGenius's login-free booking claim reinforce keeping the menu easy to find and the demo request flow short. The main question remains empirical: have a reviewer complete the form and inspect validation, keyboard flow, and confirmation on the actual site. Our observed form results are recorded in [QA.md](QA.md); the vendor marketing claims alone do not prove the design works.

## Vagaro platform reference (not a salon competitor)

[Vagaro’s customer appointment instructions](https://support.vagaro.com/hc/en-us/articles/115003521813-Book-a-Service-Appointment-for-Customers-of-a-Vagaro-Business) (official support article, updated Oct. 24, 2025; reviewed Nov. 20, 2026) explain that a customer needs to sign in to a Vagaro account. The instructions describe finding a business/service, selecting a service, choosing a provider and timeslot, reviewing the appointment, and booking or requesting it. Depending on business setup, customers may add services, join a waitlist, accept a cancellation policy, or pay a deposit. Vagaro’s business page also describes a booking widget and site features such as service menus, staff bios, hours, policies, gift certificates, galleries, and reviews ([Vagaro business feature page](https://www.vagaro.com/Users/AddBusinessFirstStepCMS.aspx); reviewed Nov. 20, 2026).

- **Strength:** A service-first sequence and availability options make the booking task explicit; an embedded widget can connect a salon’s own website to booking.
- **Tradeoff:** The documented customer flow requires account sign-in. That can add a step before booking. It should be checked in a real customer flow before we decide whether this is a meaningful barrier for our audience.
- **Design decision informed by this reference:** Keep the salon's own site useful before a customer submits a request: explain service choices and sample starting prices first, then use one clear request route. Distinguish a received request from a confirmed appointment.
- **Verification:** The published demo's valid request and confirmation path was exercised with fictional data; see [QA.md](QA.md). A complete human peer retest after any accepted issue feedback is still pending.

## Two business positions and two audience hypotheses

The team selected Morrow Beauty Studio as its class-project business concept and accessible everyday beauty as its position. The alternatives below preserve the comparison that informed that direction; neither option is evidence of customer preference.

| Position option | What it would promise | Evidence or rationale | Tradeoff |
|---|---|---|---|
| **A. Welcoming, accessible everyday care — selected class-project direction** | Familiar services, visible sample starting prices, kind guidance, and a straightforward path to request an appointment. | Hina’s itemized local menu offers an example of lower starting prices for cuts, brows, and shorter facials. Both Hina’s and Salon I Am show customers may need price qualifiers for variable services. | The demo's sample prices do not establish affordability for a real business. A broad service list could dilute the promise. |
| **B. Premium, specialist-led atelier** | A more curated experience, specialist skills, portfolio-led confidence, and more emphasis on team and craft. | Lush Atelier’s homepage supports a specialist/atelier character through its local identity, staff profiles, portfolio, FAQs, and wide specialist menu. This is evidence of a competitor’s presentation, not proof of what local customers prefer. | A portfolio and specialist language may not answer “what will this cost?” quickly. Higher price positioning would need substantiation from the group’s real offering and team. |

**Current design choice:** The team selected Option A for the class project. This is a design decision, not a verified claim that real services would be affordable; public-facing sample prices remain labeled as examples.

### Audience hypotheses (not interview findings)

1. **Occasional/local visitor (assumption):** Wants a familiar service, needs a quick starting-price comparison, and may be unsure which menu label to choose. The proposed service cards, short menu, and simple price-variation note address that possibility.
2. **Regular visitor planning a more involved service (assumption):** Wants to understand why time, hair length, product, or effort changes a quote and may need to ask before choosing. The proposed “from” prices and consultation note address that possibility.

**Evidence gap:** We have no interviews or survey data. The appointment form was tested, but the service-and-price task has not been observed with a reviewer. Ask a reviewer to find a likely service and understand its starting price; record what they actually do and say, with permission. Do not present either hypothesis as an actual customer persona.

## One customer task and design trace

**Task selected:** Compare a likely service’s starting price and understand when the final quote may vary before deciding whether to request an appointment.

| Source finding | Proposed feature in this draft | Planned observable check |
|---|---|---|
| Hina’s itemized rates and length-based facial prices show a menu can compare services and communicate that time can relate to price. Salon I Am shows “and up” pricing on multiple variable services. | Homepage previews a few services and sample starting rates. The separate Services page groups hair, skin, and brows and explains “from” pricing, length/time, and consultation for complex color. Prices are labeled concept drafts. | Ask a reviewer to locate the starting price for a 30-minute facial and a layered haircut, then explain what could change either quote. Record completion, confusion, and feedback. This has not been run. |
| Vagaro’s official instructions require sign-in and document several steps from service to confirmation. | Keep the service menu useful before the request action and clearly distinguish a received request from a confirmed appointment. | The published demo's happy path and validation were tested; see [QA.md](QA.md). The service/price task and remaining accessibility checks need follow-up. |

## Business and brand decisions in the current draft

- **Working name:** Morrow Beauty Studio is the team's selected class-project name. This is not a claim that a real salon with confirmed location, contact details, services, hours, or booking system exists.
- **Brand character:** Caregiver — warm, reassuring language that helps visitors feel informed and comfortable, without invented testimonials, scarcity, or outcome guarantees.
- **Visual direction:** Soft neutral paper/cream backgrounds, sage green, and a muted warm accent; readable serif headlines with simple sans-serif body text. This follows the user’s selected direction and is a draft, not a claim about a final brand standard.
- **Honest persuasion:** (1) show example starting prices and disclose why they may change; (2) use a clear service/menu route with plain-language reassurance. The draft contains no fabricated reviews, awards, discounts, staff credentials, or customer counts.
- **Price examples:** Informed by the local competitor menu observations above: Hina’s lists cuts from $30/$40, brow waxing at $15, and facials at $50/$85/$125 by 30/60/90-minute tiers; Salon I Am lists blowouts from $35 and highlights from $200. This draft uses comparable concept starting points (for example, everyday cut $35+, layered cut $45+, brow shaping $15, and facial rates tied to session length). These are not approved business prices. Final rates must reflect the group’s actual service, labor/time, skill, products, and cost structure.

## Member contribution and AI assistance

Member 1 (@ors222): selected/reviewed the sources above, documented strengths and limits, connected findings to a service-menu and booking decision, and drafted the homepage, service/pricing page, and appointment-form QA handoff. AI assisted with page-copy and comparison drafting; source claims in this record were checked against the linked original pages. The group is responsible for reviewing and approving the business decisions and prices.

## Collaboration and decision log — November 20, 2026

This log distinguishes the student's direction from the assistant's research and implementation. The preferences below are design inputs from Omari Sellers (Member 1, @ors222), collected in this work session; they are not customer research evidence.

| Input from Omari | How it shaped this draft |
|---|---|
| Audience/position: affordable and welcoming for everyday visits | Used the welcoming, accessible everyday-care position as the provisional direction; avoided presenting affordability as a verified fact. |
| Brand archetype: Caregiver, warm and reassuring | Used supportive, no-pressure copy and plain service descriptions. No testimonials or credentials were invented. |
| Persuasion: transparent prices and simple booking | Added visible concept starting prices, “from” explanations, a separate service menu, and a booking status notice. |
| Visual style: soft neutrals with a warm accent | Used cream/paper backgrounds, sage green, and a muted warm accent. |
| Format: simple static HTML/CSS pages | Built linked `index.html` and `services.html` pages with shared `styles.css`; no framework or booking backend was introduced. |
| Price basis: local NJ competitor menus; scale for time and effort | Used Hina’s and Salon I Am’s observed menu ranges as reference points, and labeled project prices as drafts. Added notes for length, time, product use, and service complexity. Final prices remain a team decision. |

**Assistant work in this session:** inspected the public repository (which had only `README.md` at clone time); reviewed and linked three NJ salon sites and Vagaro’s official booking guidance; wrote the comparison, evidence/assumption distinctions, two position alternatives, two persona hypotheses, task-to-feature trace, static homepage/services pages, responsive shared styles, and form QA handoff; then linked the artifacts and identified Member 1 in the README. The original site work is present on the `member-1-home-services` branch. Follow-up research and QA changes are being submitted to the shared `main` branch through a documentation pull request.

**Follow-up, November 23:** The shared repository has since advanced; its `main` branch at `80b113c` includes Member 2's form and Member 2/3 research records. The form was exercised on the published demo with fictional data; see [QA.md](QA.md) for the exact target and partial results. The local `member-1-home-services` checkout still does not contain those newer form files, so do not treat the local and published versions as identical.

## Remaining work and evidence to collect

| Owner | Next action | Evidence needed to mark complete |
|---|---|---|
| Omari / Member 1 + team | Confirm the salon name, business concept, location, real services, booking method, and actual prices. Keep Morrow Beauty Studio and current prices as draft placeholders until then. | Team decision recorded in the shared record; update site and research assumptions. |
| Member 2 + Omari / Member 1 | Continue the form review and ask a peer to retry accepted changes. | AI-assisted run and Omari's reported screen-reader result are in `QA.md`; issue #3 is open for team decision. Record follow-up checks and peer retry. |
| Member 1 + a peer reviewer | Ask a human reviewer to complete the service/starting-price task in “One customer task and design trace.” | Record human feedback, decision, linked issue, resulting code/docs commit, verification, and reviewer retry. The AI-assisted demo run is not a substitute for this peer-review sequence. |
| Member 1 | Review and share these Nov. 23 research/QA documentation updates with the team. | Link the resulting documentation PR/merge and record the team's decision. |
| Member 2 and Member 3 | Complete audience/positioning and design/research-verification contributions; review another member as assigned. | Their source evidence, assumptions, decisions, issue/review links, and checks in the shared record. Their EWC and GlossGenius research notes are now linked above. |
| Team | Publish the evolving documentation and submit the links requested in Canvas. | The published demo is available at [cf344.github.io/is117-group-business](https://cf344.github.io/is117-group-business/); a separate published documentation site and a short change/open-issue note remain to be confirmed. |

The assignment text provided in this chat lists a deadline of November 17, 2026 at 8:30 a.m. Eastern. That date has passed; if this is still the active submission, check with the instructor about acceptance or next steps. A published demo and partial form review are available, but a separate documentation site and the complete issue decision/change/retest cycle remain outstanding.


---

## Research and Website Integration Update — November 23, 2026

**Contributor:** Clara (@cf344), Member 2

This update reflects the current website implementation and supersedes earlier statements about unavailable features, provisional branding, and unpublished website files.

The original November 20 research observations are preserved as historical evidence.

### Final Business Direction

- Business name: Morrow Beauty Studio
- Business type: Beauty salon
- Brand promise: Everyday care, thoughtfully done.
- Selected position: Welcoming, accessible everyday beauty care.
- Brand archetype: Caregiver.
- Target audience: College students, young adults, and everyday customers.
- Visual identity: Cream backgrounds, sage green accents, readable typography, and welcoming language.

The website now includes six service categories:

- Hair
- Facials
- Brows
- Nails
- Lashes
- Makeup

The website remains an educational demonstration rather than a real operating salon.

Sample prices are clearly identified. Services without established sample prices are marked as "To be confirmed."

### Additional Team Research

#### Member 2 — Clara

- Source: [European Wax Center](https://waxcenter.com/)
- Research date: November 23, 2026.
- Research focus: Appointment booking and usability.
- Observation: The booking experience was easy to use.
- Design decision: Create a straightforward appointment request form with clear labels and organized service selection.
- Planned verification: Ask a reviewer to complete a demo appointment request and identify any confusing steps.

Full research: [MEMBER2_RESEARCH.md](MEMBER2_RESEARCH.md)

#### Member 3 — Tas

Research sources:

- [GlossGenius Salon Software](https://glossgenius.com/customers/salon-software)
- [GlossGenius Website Builder](https://glossgenius.com/custom-website-builder)

Research focus: Salon website features, appointment tools, customer trust, and website organization.

GlossGenius was reviewed as a salon software resource, not as an individual salon competitor.

The research informed the proposed design and appointment confirmation experience.

Full research: [MEMBER3_RESEARCH.md](MEMBER3_RESEARCH.md)

### Final Research-to-Design Connections

| Research finding or focus | Implemented decision | Observable verification |
|---|---|---|
| Salon I Am presents categorized services and variable starting prices. | Organized service categories and clearly labeled sample prices. | Find a preferred service and identify its starting price. |
| Hina's Salon presents itemized prices and facial session lengths. | Display facial treatments by duration and sample price. | Locate the 30-minute facial and its sample price. |
| Lush Atelier emphasizes brand identity and booking navigation. | Consistent salon branding and visible appointment buttons. | Navigate from the homepage to the appointment form. |
| Vagaro documents a service-to-booking process. | Provide an organized appointment request process without account registration. | Select a service and submit a valid demo request. |
| European Wax Center provided an easy booking experience for Member 2. | Use clear form labels, grouped services, and straightforward validation. | Complete the appointment form and report any difficulties. |
| GlossGenius presents salon website and appointment tools. | Provide appointment details, a request ID, and a clear confirmation message. | Submit a request and retrieve the saved confirmation. |

These connections explain how research informed our design. They do not establish that the implemented features have passed usability testing.

### Implemented Website Features

- Homepage with six service categories.
- Services and sample pricing page.
- Appointment request form.
- Required-field and email validation.
- Future appointment date and time validation.
- Appointment confirmation page.
- Unique appointment request IDs.
- Browser-based appointment storage.
- Consistent branding and navigation.
- Responsive desktop, tablet, and mobile styling.
- Visible keyboard focus indicators.

### Honest Persuasion

The final website uses two main honest persuasion techniques:

1. Transparent pricing: Sample prices, starting prices, and unconfirmed prices are clearly distinguished.

2. Clear appointment expectations: Visitors are informed that appointment requests are pending approval and do not reserve real appointments.

No fake reviews, false urgency, misleading discounts, or guaranteed appointment availability are used.

### Privacy Decision

The appointment request form asks visitors to use fictional contact information.

Only the request ID, selected service, preferred date, preferred time, and pending status are saved in browser localStorage.

Names and email addresses are not stored or transmitted.

### Evidence Versus Assumptions

The original competitor observations remain documented above with their original sources and research dates.

Our audience preferences and expected usability benefits remain hypotheses until tested.

The website implementation is available for review. Partial AI-assisted checks and Omari's peer feedback are documented in [QA.md](QA.md) and [issue #3](https://github.com/cf344/is117-group-business/issues/3); the remaining checks are listed below.

### Current Project Status

The earlier homepage and services work has been integrated into the shared GitHub repository.

The appointment form, confirmation page, storage functionality, and shared styling are now implemented.

The project has been published through GitHub Pages.

- [Published Website](https://cf344.github.io/is117-group-business/)
- [Services and Prices](https://cf344.github.io/is117-group-business/services.html)
- [Appointment Request Form](https://cf344.github.io/is117-group-business/booking.html)
- [GitHub Repository](https://github.com/cf344/is117-group-business)
- [GitHub Issues](https://github.com/cf344/is117-group-business/issues)

### Remaining Verification

- [x] Open the published site and exercise the appointment form's required-field, invalid-email, past-time, and valid-request paths (see [QA.md](QA.md)).
- [x] Verify the confirmation details, request ID, pending status, local retrieval after reload, and missing-ID error state.
- [x] Check navigation from homepage and services to the form, and check horizontal overflow at 320–390 px.
- [x] Record Omari's peer observations and recommendations in [issue #3](https://github.com/cf344/is117-group-business/issues/3).
- [ ] Ask the team to decide each issue #3 suggestion, implement accepted items, verify them, and have a peer retry before resolution.
- [ ] Run the service-and-price understanding task with a reviewer.
- [ ] Complete additional keyboard/screen-reader checks and record reproducible AT/browser details. Omari reports the screen reader worked as intended; details are not yet recorded.
- [ ] Finish remaining validation (including the date year range), physical-device/landscape/zoom checks, and update the results.

### AI Usage

AI assisted with organizing this integration update and connecting existing research to implemented website features.

The original research observations have been preserved.

No unperformed tests, customer interviews, or peer reviews are represented as completed.
