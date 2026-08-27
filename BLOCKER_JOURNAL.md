## Log Entry 01: Day 1 - Shifting from Coding to System Design & Defense

**Task:** Transition from the coding sprint to the Readiness Sprint. 
Design the architecture for the "Reflex" case study, identify trade-offs, and storyboard the executive presentation deck.

**Challenge / Blocker:** 
The biggest challenge was shifting my mindset. Last week, I was focused on fixing code bugs. Today, I had to think about business value, user experience in Kenya (like using WhatsApp and SMS), and defending my choices. I also had to force myself to find "weak points" (trade-offs) instead of just trying to make the system look perfect.

**Resources Consulted:** 
- Assignment prompt for the "Reflex" case study and scoring rubric.
- Notes on Kenyan tech landscape (WhatsApp and USSD usage for small businesses).

**Decision & Resolution:** 
I designed a system that uses WhatsApp for retailers (high adoption), a web dashboard for dispatchers (easy management), and SMS links for riders (low data usage). 
I explicitly documented three trade-offs: WhatsApp API costs, lack of offline mode for riders, and manual dispatching bottlenecks. 
I storyboarded a 5-slide deck ensuring every slide has only one key takeaway, as required by the rubric.

**Time Breakdown:**
- Designing the architecture and tech stack: 30 mins
- Writing the Trade-off Log: 20 mins
- Storyboarding the Deck: 30 mins
- Journaling and committing: 10 mins
- Buffer: 10 mins

------------------------------------------------------------------------

## Log Entry 02: Day 2 - Mastering the Defense Framework

**Task:** Learn the State → Context → Evidence framework, anticipate cross-examination questions, and perform the first timed dry run of the presentation.

**Challenge / Blocker:** 
The challenge today was shifting from a "builder" mindset to a "defender" mindset. It is easy to build a system, but it is much harder to articulate the exact business and technical reasons for every single choice without rambling. I also had to practice saying "I don't know" confidently for the scaling question, which felt unnatural at first.

**Resources Consulted:** 
- Assignment rubric focusing on the "Defense & Cross-Exam" competency.
- PLP guidelines on the State → Context → Evidence framework.

**Decision & Resolution:** 
I created a `DEFENSE_CHEAT_SHEET.md` to script my answers using the SCE framework. I forced myself to keep the "State" to exactly one sentence. During my first dry run, I spoke out loud and timed myself. I realized I was spending too much time on the Architecture slide, so I noted that I need to cut the technical jargon and focus on the user flow to stay under 10 minutes.

**Time Breakdown:**
- Learning and practicing SCE framework: 20 mins
- Writing the Defense Cheat Sheet: 30 mins
- First timed dry run (speaking out loud): 15 mins
- Journaling and committing: 10 mins
- Buffer: 5 mins

------------------------------------------------------------------------

## Log Entry 03: Day 3 & 4 - Mock Panel and Final Rehearsal

**Task:** Complete the mock panel cross-examination, refine answers based on feedback, and execute the final timed dry run.

**Challenge / Blocker:** 
During the mock panel, I realized that when asked a complex scaling question, I focused only on the database bottleneck and forgot to address the algorithmic logic for automated rider assignment. 

**Resources Consulted:** 
- PLP guidelines on the "Candor" category of cross-examination.
- Mapbox and Google Maps API documentation for routing logic.

**Decision & Resolution:** 
I successfully used the "I don't know, but here's how I'd find out" framework for the scaling question, which felt much more confident than trying to bluff. 
I updated my Defense Cheat Sheet to include both database sharding and third-party routing APIs. During my final dry run, I hit exactly 8 minutes and 15 seconds, well within the 10-minute limit.

**Time Breakdown:**
- Mock Panel Q&A practice: 20 mins
- Refining the cheat sheet: 10 mins
- Final timed dry run: 10 mins
- Creating Timing Log and Demo Script: 15 mins
- Journaling and committing: 10 mins

-------------------------------------------------------------------------
