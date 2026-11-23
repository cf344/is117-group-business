# Member 1 QA handoff — appointment form

**Review date:** November 20, 2026 (Eastern)  
**Scope:** Inspect the shared repository for Member 2’s appointment form and record whether it can be tested.  
**Status:** Blocked pending form availability. No form test has passed or failed.

## Inspection result

At the start of this review, the cloned repository contained only `README.md`; no appointment form, form route, form script, or form endpoint was present. The Member 1 homepage and Services page now contain an explicit notice that appointments cannot be requested or confirmed yet. This is an inspection finding, not a test result for Member 2’s implementation.

## Open issue and next step

**Issue:** Appointment form unavailable in the repository; the requested form checks cannot run yet.  
**Next step:** Once Member 2 adds the form or shares its branch/URL, retry the checks below and record the build/commit, viewport, steps, and observed result. Keep this issue open until the reviewer retries any fix.

## Planned checks (not yet run)

1. **Valid request:** Select a service, enter valid contact details and any required appointment preference, submit, and check that a clear confirmation or next step appears. Verify the page does not imply a confirmed slot if it only sends a request.
2. **Required fields:** Submit with each required field missing. Check for clear field-level feedback and that entered values remain available to correct.
3. **Invalid contact input:** Try a malformed email and any other constrained fields. Check that errors explain how to correct them.
4. **Service choice:** Verify the selected service is understandable and the prices are not presented as final until the team approves them.
5. **Mobile use:** At a narrow phone viewport, check that all controls, labels, feedback, and submit button remain visible and usable without horizontal scrolling.
6. **Privacy and expectations:** Check that the form explains what happens after submission, what information is collected, and how the customer can ask/cancel/reschedule. Do not enter real customer data in test submissions.

## Current site limitation

The static project pages are a non-bookable mockup. Their “Booking” link goes to an explanatory section; no personal information is collected, no request is sent, and no appointment is confirmed.
