# Member 1 research, site decisions, and open checks

**Research and source review date:** November 20, 2026 (Eastern)  
**Contribution:** Member 1, @ors222 — competitor review, homepage and services concept, and booking-form QA handoff.  
**Question:** How can a neighborhood beauty salon help a first-time or occasional customer understand what a service may cost, choose where to learn more, and feel comfortable taking the next booking step?  
**Decision to test:** Give visitors a calm, welcoming homepage, a scannable service menu with starting prices, and a clear next step. Make price variation explicit. The current site is a static concept, not a live salon or working booking service.

## Evidence, interpretation, and assumptions

- **Observed source evidence** below describes what was visible on the original business or platform pages reviewed on November 20, 2026. These pages can change; visit the links to inspect them.
- **Interpretation** is my reading of how a visible feature could help or hinder the customer task. It is not a measured usability result.
- **Assumptions** about potential customers and our business are hypotheses. We have not conducted customer interviews or usability sessions, and the group README still says the business, audience, and brand are to be decided.
- **Planned checks** are not test results. The Member 2 appointment form was not present in the repository during this review.

## Three salon website comparisons

| Source (original page) | Dated observation | Strengths for a customer | Weaknesses or limits for the task |
|---|---|---|---|
| [Salon I Am — Services](https://saloniamnj.com/services/) (Montville, NJ) | Reviewed Nov. 20, 2026. Page groups hair, color, facials, waxing, men’s and youth services; shows “and up” prices (for example, women’s haircuts $70+, blowouts $35+, classic facials $95+, men’s cuts $35+). It has a schedule link and displays address, phone, and hours. | Broad menu helps a customer see the salon’s range in one place. Category labels and prices support service and budget comparison. Contact and hours information support an offline question. | The page’s price list is long. “And up” communicates variable cost but does not explain which factors change the price. The in-page service descriptions and price list are separated, so a quick scan may require jumping between sections. |
| [Hina’s Salon — Services](https://www.hinassalon.com/services) (Cranford, NJ) | Reviewed Nov. 20, 2026. Page has linked service categories and itemized prices. Examples: straight cuts $30+, layered cuts $40+, blowouts $40+, eyebrow waxing $15, 30-minute facials from $50, 60-minute facials from $85, and 90-minute facials from $125. It lists phone and street address. | Detailed, easy-to-compare item prices. Facial prices are grouped by appointment length, giving a concrete explanation for at least one price difference. | The page is a dense list, and “+” appears on variable services without a general explanation of what drives the extra cost. A booking action is not evident on the services page reviewed; that statement is limited to this page, not the salon’s full booking setup. |
| [Lush Atelier — Home](https://lushateliersalon.com/) (Newark, NJ) | Reviewed Nov. 20, 2026. The homepage leads with a clear Newark identity, “Book a Visit,” “Explore Services,” address, hours, contact details, service categories, team profiles, a portfolio, testimonials, FAQs, and a contact form. It presents a broad specialist offering, including hair, nails, skin, bridal, and post-operative care. The inspected homepage did not show service prices in its main menu. | Strong local identity and visual/editorial brand. The team, gallery, FAQs, contact information, and booking routes answer trust and visit-planning questions. | A customer comparing a service’s cost may need another step because prices are not visible in the inspected homepage content. The range of specialist services can make the choice feel larger for a visitor who only wants a simple first visit. |

### What the salon comparisons suggest

**Evidence:** Two local menus show itemized prices, with “from/and up” labels for services that vary. Hina’s Salon also presents facial price steps by session length. Salon I Am and Hina’s show broad service lists. Lush Atelier gives more homepage space to identity, team, work samples, FAQs, and ways to contact/book.

**Interpretation:** A short menu with starting prices and a plain-language note on what changes the quote can combine price clarity with a reassuring introduction. It would let a visitor compare common services without requiring them to browse a long catalogue first. This is a proposed decision, not a demonstrated customer preference.

## Vagaro platform reference (not a salon competitor)

[Vagaro’s customer appointment instructions](https://support.vagaro.com/hc/en-us/articles/115003521813-Book-a-Service-Appointment-for-Customers-of-a-Vagaro-Business) (official support article, updated Oct. 24, 2025; reviewed Nov. 20, 2026) explain that a customer needs to sign in to a Vagaro account. The instructions describe finding a business/service, selecting a service, choosing a provider and timeslot, reviewing the appointment, and booking or requesting it. Depending on business setup, customers may add services, join a waitlist, accept a cancellation policy, or pay a deposit. Vagaro’s business page also describes a booking widget and site features such as service menus, staff bios, hours, policies, gift certificates, galleries, and reviews ([Vagaro business feature page](https://www.vagaro.com/Users/AddBusinessFirstStepCMS.aspx); reviewed Nov. 20, 2026).

- **Strength:** A service-first sequence and availability options make the booking task explicit; an embedded widget can connect a salon’s own website to booking.
- **Tradeoff:** The documented customer flow requires account sign-in. That can add a step before booking. It should be checked in a real customer flow before we decide whether this is a meaningful barrier for our audience.
- **Design decision informed by this reference:** Keep the salon’s own site useful before a customer reaches the booking tool: explain service choices and draft starting prices first, then use one clear booking route. Avoid representing the current draft as bookable.
- **Planned check:** When Member 2’s form is available, trace service choice → form → required details → submit/confirmation, and record whether the user can tell what happens next. This is a planned test, not an observed result.

## Two business positions and two audience hypotheses

The group has not confirmed its actual business or location. These are options for discussion, not facts about customers.

| Position option | What it would promise | Evidence or rationale | Tradeoff |
|---|---|---|---|
| **A. Welcoming, accessible everyday care — draft recommendation** | Familiar services, visible starting prices, kind guidance, and a straightforward path to ask/book. | Hina’s itemized local menu offers an example of lower starting prices for cuts, brows, and shorter facials. Both Hina’s and Salon I Am show customers may need price qualifiers for variable services. | The group must confirm affordability claims against actual prices, costs, skills, and service capacity. A broad service list could dilute the promise. |
| **B. Premium, specialist-led atelier** | A more curated experience, specialist skills, portfolio-led confidence, and more emphasis on team and craft. | Lush Atelier’s homepage supports a specialist/atelier character through its local identity, staff profiles, portfolio, FAQs, and wide specialist menu. This is evidence of a competitor’s presentation, not proof of what local customers prefer. | A portfolio and specialist language may not answer “what will this cost?” quickly. Higher price positioning would need substantiation from the group’s real offering and team. |

**Current design choice:** Option A, pending team review. It matches the user-provided preference for affordable, welcoming everyday visits. “Affordable” is not yet a verified business fact, so public-facing draft copy avoids claiming that final pricing is low or guaranteed.

### Audience hypotheses (not interview findings)

1. **Occasional/local visitor (assumption):** Wants a familiar service, needs a quick starting-price comparison, and may be unsure which menu label to choose. The proposed service cards, short menu, and simple price-variation note address that possibility.
2. **Regular visitor planning a more involved service (assumption):** Wants to understand why time, hair length, product, or effort changes a quote and may need to ask before choosing. The proposed “from” prices and consultation note address that possibility.

**Evidence gap:** We have no interviews, survey, analytics, or observed task sessions for this project. Next, ask at least one reviewer to try the “find a likely service and understand its starting price” task; record what they actually do and say, with permission. Do not present either hypothesis as a real customer persona.

## One customer task and design trace

**Task selected:** Compare a likely service’s starting price and understand when the final quote may vary before deciding whether to request an appointment.

| Source finding | Proposed feature in this draft | Planned observable check |
|---|---|---|
| Hina’s itemized rates and length-based facial prices show a menu can compare services and communicate that time can relate to price. Salon I Am shows “and up” pricing on multiple variable services. | Homepage previews a few services and sample starting rates. The separate Services page groups hair, skin, and brows and explains “from” pricing, length/time, and consultation for complex color. Prices are labeled concept drafts. | Ask a reviewer to locate the starting price for a 30-minute facial and a layered haircut, then explain what could change either quote. Record completion, confusion, and feedback. This has not been run. |
| Vagaro’s official instructions require sign-in and document several steps from service to confirmation. | Keep an explicit booking state on both pages; show that the form is not yet available instead of implying a completed reservation. | When Member 2’s form is added, test the happy path and missing required fields, verify its confirmation/recovery message, and check at mobile width. Pending form availability. |

## Business and brand decisions in the current draft

- **Working name:** Morrow Beauty Studio. This is a placeholder; the team has not selected a name, location, contact details, actual services, hours, or booking system.
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

**Assistant work in this session:** inspected the public repository (which had only `README.md` at clone time); reviewed and linked three NJ salon sites and Vagaro’s official booking guidance; wrote the comparison, evidence/assumption distinctions, two position alternatives, two persona hypotheses, task-to-feature trace, static homepage/services pages, responsive shared styles, and the form QA handoff; then linked the artifacts and identified Member 1 in the README. These files are committed on the local `member-1-home-services` branch. A push was attempted but GitHub writes were unavailable, so the branch is not on the remote yet.

## Remaining work and evidence to collect

| Owner | Next action | Evidence needed to mark complete |
|---|---|---|
| Omari / Member 1 + team | Confirm the salon name, business concept, location, real services, booking method, and actual prices. Keep Morrow Beauty Studio and current prices as draft placeholders until then. | Team decision recorded in the shared record; update site and research assumptions. |
| Member 2 + Omari / Member 1 | Add or share the appointment form, then run the checks in `QA.md`. | Record exact branch/commit or URL, browser and viewport, steps and observed results; report issues to Member 2 and retest accepted fixes. Current result: **not testable; no form in inspected repo**. |
| Member 1 + a peer reviewer | Ask a reviewer to complete the service/starting-price task in “One customer task and design trace.” | Record reviewer feedback, decision, linked issue, resulting code/docs commit, verification, and reviewer retry. None of that peer-review sequence is recorded yet. |
| Member 1 | Push `member-1-home-services` to GitHub or apply the committed work through an authorized repo workflow. | Remote branch/commit or PR URL. Current work exists only in the local clone because GitHub rejected writes and local Git had no authentication. |
| Member 2 and Member 3 | Complete and link their audience/positioning and design/research-verification contributions; review another member as assigned. | Their own evidence, assumptions, decisions, issue/review links, and checks in the shared record. |
| Team | Publish the evolving documentation and deploy the site when available; submit the shared record and links requested in Canvas. | Published documentation URL, deployed URL if available, relevant issue/response/retest links, and a short change/open-issue note. |

The assignment text provided in this chat lists a deadline of November 17, 2026 at 8:30 a.m. Eastern. That date has passed; if this is still the active submission, check with the instructor about acceptance or next steps. The materials here do not claim a published documentation site, deployed site, completed peer review, or successful appointment-form test.
