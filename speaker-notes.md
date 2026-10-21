# DesignOps as AI Infrastructure

**Approved bilingual presentation (V3), the canonical version replacing V2.**

Based on frozen bilingual V2 `e39ef62f1729553773fa4a4f097f5c8cdf33d138`.
16 numbered main slides (15 keynote + Let's talk) + FAQ + 8 appendices = 25. Let's talk ends the numbering at 16/16 without increasing keynote time. Local Inter under OFL. About me at position 3 with one speaker-supplied photo.

Generated from app.js and spanish.js with `node check.mjs --write-notes`.

## Pacing

| Slides | Window |
| --- | --- |
| 1–4 | 0:00–3:00 |
| 5–8 | 3:00–10:40 |
| 9–10 | 10:40–12:20 |
| 11 (before) | 12:20–13:50 |
| 12 (after) | 13:50–15:35 |
| 13–14 | 15:35–18:30 |
| 15 | 18:30–20:00 |
| 16–17 | 20:00–30:00 (shared) |
| 18–25 | Optional |

The demo retains 270 seconds; closing, 90; Q&A, 600. The pilot is in appendix 25. The split journey retains 90 seconds before + 105 after. The biography restores its 30 seconds: total keynote, 1,200 seconds.

## Stage delivery and rehearsal

S enters Stage; F optionally enters fullscreen; Escape or S restores review. Arrow keys advance or reverse slide 4's chain and alignment, demo and closing builds before changing slides, in both review and Stage. Six tabs expose the whole journey; no Reset or duplicate Next. Native form keys never navigate. Home/End and arrows inside the tabs select states. Main Next advances the demo. L switches language without losing local input or state; L does not intercept typing, notes, or dialogs. Exiting Stage restores review's snapshot. The presentation scales on small screens. Nothing is saved or sent.

The reference on 12 opens pilot 25 and returns to its origin. Definitions from 14 returns to the dashboard; all eight answers opened from FAQ return to FAQ (17). Let's talk and FAQ share the same 600 seconds without doubling the allocation. The full learning cycle requires no clicks. Evaluation icon ◎ is retained.

## 1. AI makes us faster. Who keeps us coherent?

**Timing:** 0:00–0:45 (45 seconds)

**Takeaway:** AI increases production capacity. DesignOps maintains organizational coherence.

**Visual concept:** One shared source fans out into different shapes: more output, less consistency.

**Interaction:** A short entrance trace establishes the flow motif. No automatic slide advancement.

**Speaker notes:** Open with the tension, not a list of tools. Teams can generate briefs, concepts, research summaries, and code faster than before. Faster creation does not automatically produce a coherent customer experience. We will follow one illustrative onboarding problem: a working form stops someone from starting alone. Watch how the team fixes it, saves the lesson in shared guidance, and checks the next result. Then ask what DesignOps must maintain around that work and how a bounded pilot could test its value. The example is pre-authored, not a report of organizational results.

**Transition:** What changes when production becomes distributed across the whole team?

---

## 2. Everyone can generate

**Timing:** 0:45–1:30 (45 seconds)

**Takeaway:** Distributed generation moves the bottleneck toward alignment, quality, and governance.

**Visual concept:** Four parallel lanes: product, research, design, and engineering.

**Interaction:** Review: the four roles activate automatically on slide entry, with staggered output and bullet-color transitions. No generation control or slide auto-advance. Stage and reduced-motion views show the complete static state.

**Speaker notes:** Each discipline gains production capacity. PMs generate briefs and hypotheses; researchers synthesize evidence; designers explore concepts; engineers generate components and tests. Generation is more distributed, but expertise is not interchangeable. The same language model can interpret the product differently in each lane. These are categories of assistance, not guarantees that outputs are accurate. Ask the room to imagine all four lanes producing simultaneously. The new constraint is agreeing on what to produce, what fits the system, and who evaluates it.

**Transition:** Now consider how distributed output can create more variation.

---

## 3. About me

**Timing:** 1:30–2:00 (30 seconds)

**Takeaway:** Introduce yourself and the perspective you bring to DesignOps and AI.

**Visual concept:** One supplied beach handstand photo fills the left half, preserving the complete pose; concise biography bullets fill the right.

**Interaction:** No builds or controls.

**Speaker notes:** Speaker-supplied biography: Sr. Program Manager for design production operations at Xbox / Microsoft. Sr. Creative Operations Manager for Prime Video. 18 years of experience managing projects at companies including P&G, Publicis, Critical Mass and Automattic (WordPress). Daily CrossFit. Jiu-jitsu “forever blue belt.” Retired musician and lots of drawing at home. No employment chronology is specified; do not infer current or former roles. Keep the spoken introduction to 30 seconds. The keynote remains 1,200 seconds; the demo, 270; closing, 90; and the shared discussion, 600.

**Transition:** Now return to the shared challenge: without common conditions, more output can create more variation.

---

## 4. The acceleration paradox

**Timing:** 2:00–3:00 (60 seconds)

**Takeaway:** Shared context and evaluation govern variation without eliminating useful exploration.

**Visual concept:** A causal chain sits above diverging output branches; a shared standards band aligns their treatment.

**Interaction:** Review and Stage start with the patterns inactive. First Next activates all patterns and the full causal chain together. Second Next applies context and evaluation together. Third Next advances to slide 5. Previous removes alignment, then deactivates all patterns before leaving slide 4. Forward/reverse keys use the same two interaction steps, with held-key repeats ignored. No local controls. Revisits and language switches retain progress; Stage starts fresh and restores review on exit.

**Speaker notes:** Read the chain deliberately: more output, more variation, more decisions, more opportunities for inconsistency. This is a conceptual mechanism, not a statistical forecast. Variation is useful during exploration; unmanaged variation becomes expensive at system boundaries. Examples include conflicting terminology, duplicated research, inaccessible patterns, undocumented AI decisions, and design-system drift. The source's '17 versions of a pattern' is rhetorical, not a measured statistic, so we do not chart it. Apply shared context and evaluation: options can remain different while obeying common constraints. A green state is an explanatory metaphor, not a claim that standards automatically eliminate defects.

**Transition:** Three questions help us govern that variation. Then we will apply them to one workspace-setup example.

---

## 5. Govern. Context. Evaluate.

**Timing:** 3:00–4:00 (60 seconds)

**Takeaway:** GOVERN: What should we use and how should we use it? CONTEXT: The intelligence layer for the right choices. EVALUATE: What makes it good enough?

**Visual concept:** Three coral headings with supporting copy, with space to absorb each distinction.

**Interaction:** Static in Stage and review. The solo-setup examples and operating foundations are spoken from these notes, not competing lists on screen.

**Speaker notes:** Use one model throughout. The next demo follows someone starting a workspace alone; use that need to ground the three responsibilities. Govern asks what we should use and how we should use it: in this illustrative case, no real contact data enters the demo, a designer and engineer review, and a product lead owns the scoped rule. Context is the intelligence layer for the right choices: it carries the solo-setup brief, the requirement to make invitations optional, and the supported form pattern together. Evaluate asks what makes it good enough: whether setup completes without email, while checking labels, errors, focus, and feasibility. Meeting that requirement alone cannot establish user value. These concrete checks sit within broader tool, data, privacy, risk, and release boundaries. Stewardship grounds governance; systems carry context; enablement puts all three into practice through workflows, prompts, rubrics, and training. This is the core model, not another framework to memorize.

**Transition:** Now follow those three responsibilities through the actual decision.

---

## 6. Fix the form. Keep the lesson.

**Timing:** 4:00–8:30 (270 seconds)

**Takeaway:** The team fixes the form. DesignOps makes the lesson available to the next team and its AI tools.

**Visual concept:** Six visible tabs reveal the whole journey; one selected content surface preserves room for the form and the saved lesson.

**Interaction:** Stage moment 2: Next and forward keys advance the six tabs before leaving the slide; previous and reverse keys go back one state. Tabs support arrows, Home and End. Native form keys do not navigate. No Reset or duplicate Next. Language switching preserves input and progress.

**Speaker notes:** Introduce the fictional example here: someone wants to start a workspace alone. Allow 270 seconds (4 minutes 30 seconds) for the six existing steps. The 90 seconds recovered from the removed overview slide are explanation and interaction pauses, not extra UI or an exercise: 30 seconds to let the audience absorb the blocked user need, 30 seconds for the form's validation and keyboard feedback, and 30 seconds to review why the saved lesson needs an owner and a review trigger. First: the person wants to start a workspace alone. Second: the AI-produced form requires someone else's email, so the person gets stuck. Third: the designer and engineer move invitations after workspace creation. Fourth: try the revised local form with just a workspace name; show validation and keyboard feedback if useful. Nothing is saved or sent. Fifth: explain why fixing one screen is not enough. DesignOps records the lesson with the original solo-setup assumption, the team's reason, a product lead owner, and a review date after the pilot. Put that guidance where the next team and its AI tools can use it. Sixth: the next proposed form allows setup without inviting anyone. A reviewer verifies that behavior and still checks accessibility and user outcomes. Do not claim the rule guarantees future results or that this is a real user study. Every state is pre-authored and illustrative. The distinction is simple: product experts decide what the experience should do; DesignOps helps that decision survive beyond this one screen.

**Transition:** The person can now finish setup alone. What else must the team check?

---

## 7. When generation is cheap, evaluation is strategic

**Timing:** 8:30–9:30 (60 seconds)

**Takeaway:** Automated checks support accountable human judgment; they cannot prove design quality.

**Visual concept:** Multiple candidates flow through a six-part rubric to an explicit human decision.

**Interaction:** Static flow; no fabricated AI score or automatic approval.

**Speaker notes:** Walk through the rubric: approved components and tokens; identified user needs without unnecessary complexity; accessibility; brand and content principles; product strategy; and engineering feasibility. Domain experts define the standard together. Automated checks can detect specific violations, but a passing score cannot establish usefulness, coherence, or user success. A human reviewer accepts, revises, or rejects and records reasons. Keep evidence linked to decisions. Designers increasingly direct and evaluate alternatives, but craft and domain expertise remain indispensable.

**Transition:** Once we record the judgment, how do we keep it useful rather than bury it in an archive?

---

## 8. The organizational learning loop

**Timing:** 9:30–10:40 (70 seconds)

**Takeaway:** Keep the decision and its reason in shared guidance, then check the next result.

**Visual concept:** The complete learning cycle is visible without interaction, including the final check and return to shared guidance.

**Interaction:** No cycle-progress control. Read the full cycle in review or Stage.

**Speaker notes:** Return to the decision to offer invitations after setup. Do not save only the corrected form: save why the team changed it and who will review that guidance. Follow the same sequence on screen: AI proposes a design using shared guidance; the team checks it against the user's need; they save the lesson, including the decision, reason, and owner; DesignOps updates the guidance available to the next team and its AI tools; a reviewer checks the next result. The example does not prove that one field is always best or that guidance automatically prevents mistakes. It is fictional and user validation is pending. If the solo-setup assumption changes, the product lead revisits the guidance. DesignOps keeps its source, version, access, and review date current. Retire lessons that no longer apply instead of turning every observation into universal policy.

**Transition:** That maintenance is recognizable DesignOps work—with a wider scope.

---

## 9. The role expands; the fundamentals remain

**Timing:** 10:40–11:30 (50 seconds)

**Takeaway:** People, process, and systems remain the foundations; their scope expands.

**Visual concept:** People, Process and Systems group current responsibilities and connect them to their expanded AI scope.

**Interaction:** Static comparison; the expanded scope is immediately visible.

**Speaker notes:** Refresh the fundamentals. DesignOps improves the conditions for effective design through people, process, and systems. Staffing, onboarding, rituals, tooling, and collaboration do not disappear. AI broadens the reach: from enabling designers to enabling the product ecosystem; from documenting procedures to making knowledge usable at the moment of generation; from efficiency alone to quality and outcomes. This is a scope expansion, not a dismissal of traditional operations or a mandate to reorganize.

**Transition:** A useful metaphor for that expanded role is the control plane.

---

## 10. DesignOps as the control plane

**Timing:** 11:30–12:20 (50 seconds)

**Takeaway:** DesignOps connects distributed actors through shared rules, context, and evaluation.

**Visual concept:** AI-assisted work is a single shared layer around distinct actors; DesignOps remains the connective operating layer, not the AI itself.

**Interaction:** The original hub-and-spoke geometry is preserved, with one shared AI circle passing behind opaque role cards. Connections illuminate once on slide entry, without a button or automatic slide advancement. Stage and reduced-motion views show the complete connected state. An accessible text summary describes the shared-AI layer.

**Speaker notes:** The control plane metaphor distinguishes defining the conditions of work from doing everyone's work. PM, research, design, prototyping, and engineering keep their domain responsibilities. DesignOps coordinates reusable context, risk-based guardrails, evaluation criteria, ownership, and enablement. It should not become a central approval queue. Security, Legal, IT, platform teams, and domain experts remain essential partners. Clear boundaries can allow teams to move without repeatedly asking permission for known-safe tasks.

**Transition:** Shared guidance also changes how work moves between these people.

---

## 11. Before AI: sequential handoffs

**Timing:** 12:20–13:50 (90 seconds)

**Takeaway:** Sequential handoffs can delay feedback even when each discipline does good work.

**Visual concept:** One before journey: research → brief → mocks → build → release, between customer need and feedback.

**Interaction:** The sequential handoff animation runs once on slide entry, with no replay control or slide auto-advance. Stage and reduced-motion views remain fully visible and static; animation is not a measured duration.

**Speaker notes:** This before journey is a deliberately simplified explanatory pattern, not a claim that all pre-AI teams worked sequentially. Research informs a brief, design produces mocks, engineering builds, and customers respond. Each discipline can do excellent work while waiting and late feedback limit learning. Use the 90 seconds to distinguish production time from waiting time and to ask where a decision becomes shared. The next slide proposes synchronized work, not a universal history or a measured improvement. Together the two journey slides use 195 seconds: the original 60 seconds plus the 135 seconds moved out of the keynote with the pilot appendix.

**Transition:** What changes when shared purpose connects production and learning?

---

## 12. With AI: shared purpose and synchronized work

**Timing:** 13:50–15:35 (105 seconds)

**Takeaway:** Pilot collaborative production and use any capacity gained for customer learning.

**Visual concept:** One proposed after journey: shared purpose, synchronized collaborative work, AI-assisted production, and experiments with customer feedback.

**Interaction:** The existing green collaboration animation runs on entry without a replay control. Stage and reduced-motion views remain fully readable without animation. The 30-day pilot reference opens appendix 25; its return link brings you here. The pilot is outside keynote timing.

**Speaker notes:** The before journey is a deliberately simplified pattern, not a claim that all pre-AI teams worked sequentially. Research informs a brief, design produces mocks, engineering builds, and customers finally respond. The proposed alternative starts with Mission, Milestones, and Metrics—the source's MMM. PM, research, design, and engineering share intent; specification, concepts, feasibility, and HTML/CSS prototypes evolve together. Releases can become experiments that inform another iteration. AI may reduce production effort, but review, integration, and dependency costs still count. Do not promise a one-week release or universal acceleration. Measure elapsed production time, person-hours, waiting time, customer validation, and experimentation cadence. The animation contrasts sequencing, not numeric speed. A prototype is not a production release; user evidence remains necessary.

**Transition:** Shared guidance can start with documentation the team already has.

---

## 13. From documentation to executable standards

**Timing:** 15:35–16:50 (75 seconds)

**Takeaway:** Turn domain knowledge into versioned, reusable context and verifiable standards.

**Visual concept:** Three documentation-to-guidance tracks converge into advanced context for a production sprint. A shared metrics band evaluates speed, quality and outcomes across the whole flow.

**Interaction:** Static convergence flow in Review, Stage and print. Explain the seven detailed relationships, example provenance and pending user validation from these notes; the destination summarizes context, not executable code.

**Speaker notes:** Use the saved solo-setup lesson as the concrete artifact rather than narrating seven new frameworks. Explain its assumed source, solo-setup requirement and invitation decision, product lead owner, version 1, and review after the pilot or a brief change. User evidence remains pending. The seven transformations preserve the broader source material: guidelines to machine-readable rules, design systems to consumable systems, templates to canonical prompts, documentation to context packages, critique to rubrics, SOPs to human–AI workflows, efficiency measures to speed plus quality and outcomes. A YAML-like package does not enforce itself. Integration, permissions, validation, and human review are still required. DesignOps maintains the package; domain experts author, approve, and revisit its validity.

**Transition:** Maintaining this guidance costs time. How would we know the workflow is worth adopting?

---

## 14. Measure speed and coherence

**Timing:** 16:50–18:30 (100 seconds)

**Takeaway:** Evaluate the whole workflow: speed, review cost, quality, coherence, and customer outcomes.

**Visual concept:** A shared comparison table has Baseline, Pilot and Change headings once; category groups separate workflow outcomes from leading/process signals.

**Interaction:** All 10 measures opens the full dialog. Definitions opens appendix 22 and returns here; entering definitions from FAQ returns to FAQ instead. Closing the dialog restores its opener.

**Speaker notes:** These are approximate comparison values informed by the presenter's early experimentation, not exact measurements, benchmarks, or a forecast. The presenter supplied design production-rate ranges; the other nine comparisons remain unchanged from the earlier synthetic values, reported as close to informal observations. Underlying records, sample sizes, and methods have not been supplied, so do not claim validated results or causal ROI. Baseline to pilot: median brief-to-validated-concept time 9 to 6 days; design production rate ~3–4/wk to ~1–2/wk, accepted artifacts / in a team with 8w E2E Cycle. The change ≈−2/wk is a midpoint estimate: 1.5 minus 3.5, not an independently observed change. Weekly rate and the team's eight-week end-to-end cycle are different concepts; do not divide by eight or infer an eight-week total. Production rate decreases, so do not frame it as an improvement. Production effort is 18 to 11 hours per concept; review effort 4 to 6 hours; rework 35% to 24%; applicable system checks passed 78% to 90%; open accessibility/quality defects 6 to 4 per 10 screens; design-to-code divergence 28% to 18%; experiments 1 to 2 per week; approved-context reuse 25% to 70%. Review effort rises in this comparison: faster generation does not imply less review. Leading/process measures signal behavior and readiness; outcome measures test delivered workflow results. System compliance is a leading quality signal, not proof of user benefit. Both sets of approximate values and their changes appear together, without competing bar scales. Percentage measures use percentage-point changes, not relative percentages. Match work scope, staffing, artifact definition, and evaluation criteria; include sample sizes and dispersion before presenting a validated comparison. Track customer task success separately. No customer outcome data is supplied.

**Transition:** Return to the central question. The proposed workflow's pilot reference remains available in appendix 25.

---

## 15. Who designs the system?

**Timing:** 18:30–20:00 (90 seconds)

**Takeaway:** AI doesn't eliminate the need for DesignOps. It makes DesignOps infrastructure.

**Visual concept:** A quiet question, a deliberate answer reveal, and three concluding statements.

**Interaction:** Stage moment 3: pause, press Right to reveal DesignOps, then Right for FAQ. Left hides the answer before moving back. In review, Next or a forward navigation key reveals the answer first, then advances to Let's talk. There is no separate reveal button.

**Speaker notes:** Use 90 seconds for the closing. Slow down. Read the question and leave space: if AI becomes part of how we design products, who designs the system in which AI operates? Reveal DesignOps. This is not a territorial claim that one function owns all AI. It is an invitation for DesignOps to connect domain expertise, governance, knowledge, workflows, and evaluation. AI creates capacity. Systems create consistency. Stewardship creates trust. DesignOps connects all three. The future is not merely managing work around design; it is designing the infrastructure through which humans and AI create products together. The practical challenge is one workflow, a baseline, a maintained context package, named human checkpoints, and evidence that quality has not been traded for speed. End on the thesis and pause rather than adding more tools.

**Transition:** Let's talk. Where is your team generating faster than it can maintain coherence?

---

## 16. Let's talk

**Timing:** 10 minutes shared by Let's talk and FAQ, outside keynote timing

**Takeaway:** Use the conversation to connect the operating model to the audience's constraints.

**Visual concept:** A conversation invitation with LinkedIn and GitHub contact links; the questions are on the next slide.

**Interaction:** Next opens FAQ. Contact links open externally only when selected. No QR code.

**Speaker notes:** Reserve ten minutes total across Let's talk and FAQ, not ten minutes per slide. Invite specific workflow examples rather than abstract predictions. Keep the contact slide visible while opening the conversation; advance to FAQ when a question benefits from a supporting answer. The 600-second discussion allocation is recorded here once; FAQ adds no extra time.

**Transition:** Continue to FAQ for the eight supporting questions.

---

## 17. FAQ

**Timing:** 10 minutes shared by Let's talk and FAQ, outside keynote timing

**Takeaway:** Use the eight questions to connect discussion to the relevant supporting evidence.

**Visual concept:** Eight accessible question links, each leading to its corresponding appendix answer.

**Interaction:** Select a question to open its answer; the answer returns to FAQ. Definitions opened from the dashboard and the pilot opened from shared production keep their original return destinations.

**Speaker notes:** Continue the same ten-minute discussion started on Let's talk; do not restart the clock. The eight answers cover governance ownership, the evolving role, AI-ready design systems, model changes, measurement, the context stack, the product lifecycle, and starting a pilot. The stack and lifecycle are supporting lenses, not additional models to memorize. If asked whether this is just AI governance, return to the decision trail: governance is one component; context, workflows, evaluation, and enablement make it useful. If asked what to do tomorrow: map, identify, codify, standardize, and measure.

**Transition:** Return to FAQ after each answer, or back to Let's talk for contact details.

---

## 18. Backup: shared governance ownership

**Timing:** Optional appendix, outside keynote timing

**Takeaway:** Risk boundaries, access, operating-model design, and product judgment need explicit owners.

**Visual concept:** Four ownership domains; none claims the entire AI operating model.

**Interaction:** Back to FAQ returns to the topic menu.

**Speaker notes:** Security and Legal establish organizational risk boundaries; IT and platform teams manage technology and access. DesignOps translates policy into useful workflow conditions with domain experts. Product, research, design, and engineering own their decisions and release quality. Good governance removes repetitive ambiguity through approved paths, risk-based human checkpoints, escalation, and documented exceptions. Bad governance creates an unnecessary approval queue. Specific accountabilities must be agreed locally; the slide is a discussion model, not a universal RACI.

**Transition:** Return to FAQ.

---

## 19. Backup: operating-environment architect, not AI factory

**Timing:** Optional appendix, outside keynote timing

**Takeaway:** DesignOps architects the operating environment rather than building everyone's AI tools.

**Visual concept:** Six responsibilities and five kinds of product work.

**Interaction:** Back to FAQ returns to the topic menu.

**Speaker notes:** The emerging role includes governance, design intelligence, workflow architecture with subject-matter experts, quality systems, enablement, and measurement. 'AI Ops Systems Architect' is a possible direction, not a prescribed title. The source's prototyper, builder, sweeper, grower, and maintainer archetypes are retained as kinds of work: prototype, build, simplify/improve, grow, and maintain. Their risk and evaluation needs differ. The source includes an unverified external attribution; this deck makes no authorship claim for the archetypes. Do not turn this model into a requirement for DesignOps to become an AI engineering team.

**Transition:** Return to FAQ.

---

## 20. Backup: an AI-ready design system

**Timing:** Optional appendix, outside keynote timing

**Takeaway:** AI readiness adds meaning, constraints, examples, and evaluation to an existing design system.

**Visual concept:** Foundation plus machine-consumable reasoning, with shared-context ownership underneath.

**Interaction:** Back to FAQ returns to the topic menu.

**Speaker notes:** Keep tokens, components, patterns, and guidelines. Add semantic metadata, usage rules, examples, constraints, accessibility requirements, relationships, code equivalents, and evaluation criteria. Start with one pattern rather than translating the whole library. Include valid and invalid examples, allowed data access, provenance, version, freshness, and a named owner. AI-readable does not mean publicly accessible, indiscriminately retrievable, or automatically correct. Research and existing product experiences remain important context beyond the component library.

**Transition:** Return to FAQ.

---

## 21. Backup: model-agnostic workflows and canonical prompts

**Timing:** Optional appendix, outside keynote timing

**Takeaway:** Build durable knowledge, rules, workflows, and evaluation around replaceable models.

**Visual concept:** Shared knowledge, rules, workflows, and evaluation remain as models change.

**Interaction:** Back to FAQ returns to the topic menu.

**Speaker notes:** Models and tools will change. Preserve the institutional knowledge, permissions, workflows, examples, and acceptance criteria that define how the organization operates. Model-agnostic does not mean zero adaptation: tool capabilities, context limits, privacy controls, and behavior differ. Re-run a representative evaluation set before a model switch. Canonical prompts are co-authored by domain experts and governed as versioned knowledge artifacts, not selected by DesignOps alone. Standardization creates an informed starting point, not a ban on exploration.

**Transition:** Return to FAQ.

---

## 22. Backup: metric definitions and measurement plan

**Timing:** Optional appendix, outside keynote timing

**Takeaway:** Operational definitions, comparable work, and evidence qualifications matter more than dashboard polish.

**Visual concept:** Definitions, units, and collection methods beside a concise pilot protocol.

**Interaction:** Back returns to the originating dashboard or FAQ, including in Stage. Direct entry defaults to the dashboard.

**Speaker notes:** Define 'validated concept' before collecting time: reviewer acceptance plus the agreed user-evidence threshold. Count accepted artifacts, not raw generations. Separate elapsed days from person-hours, production from review, and quality defects from severity. Define denominators for compliance, rework, reuse, and divergence. Complete experiments include a recorded learning decision, not just a release. Compare similar tasks and staffing; document sample size, spread, exclusions, and complexity. Use approved data collection with appropriate privacy controls. Review effort may increase while total effort falls, but a small observational pilot cannot establish causality. Set decision thresholds in advance and track customer task success or other relevant product outcomes. Dashboard values are preliminary approximations informed by the presenter's early experimentation, not validated measurements.

**Transition:** Return to the dashboard or FAQ.

---

## 23. Backup: Organizational memory is the advantage

**Timing:** Optional appendix, outside keynote timing

**Takeaway:** The differentiator is governed organizational knowledge, not loyalty to a model.

**Visual concept:** A five-layer AI design stack, built from models to connecting DesignOps infrastructure.

**Interaction:** Stage: all five layers are resolved. Review: Build the context stack adds one highlighted layer per click; after all layers it resets to the foundation.

**Speaker notes:** Models provide capabilities. Agents and tools connect capabilities to tasks. Organizational context provides what models do not inherently know: tokens, components, research, product knowledge, brand, accessibility, terminology, workflows, repositories, PRs, existing experiences, and past decisions. Stewardship adds guardrails, exclusions, evaluation, and human checkpoints. DesignOps connects the layers. The diagram is a responsibility model, not a mandatory software architecture. Do not feed all organizational data into a model: permissions, privacy, provenance, source quality, freshness, and ownership determine what context may be used. A design system is one part of organizational memory, not the whole memory.

**Transition:** Return to FAQ, or use the lifecycle backup to locate these responsibilities in the work.

---

## 24. Backup: DesignOps across the product lifecycle

**Timing:** Optional appendix, outside keynote timing

**Takeaway:** Governance, context, and evaluation follow the work across every lifecycle stage.

**Visual concept:** Five lifecycle phases above a persistent shared-infrastructure rail; detailed per-phase panels remain in review.

**Interaction:** Stage: a static five-phase overview. Review: select a phase to reveal AI assistance, DesignOps infrastructure, and the human checkpoint.

**Speaker notes:** Discover: AI can cluster and retrieve research; DesignOps supports consent, traceability, source quality, and reusable knowledge. Define: AI can draft briefs and identify gaps; shared brief structure, product vocabulary, and source context keep framing grounded. Design: alternatives and prototypes rely on system rules, prompts, accessibility constraints, and critique. Build: generated code needs component metadata, supported patterns, tokens, validation, and paired review. Measure: AI can summarize observations, but people interpret outcomes, record caveats, and decide what should change. Do not turn this into a tool catalog. Discuss one or two phases with the persistent rail; use review mode only when the detailed panels are needed.

**Transition:** Return to FAQ. The keynote's onboarding decision is one example at the design-to-build boundary.

---

## 25. Backup: your first 30 days

**Timing:** Optional appendix, outside keynote timing

**Takeaway:** A 30-day pilot can begin at team, product-area, or enterprise level with clear ownership.

**Visual concept:** Four verbs on a timeline, one concrete output per week, and an explicit adopt / revise / stop decision.

**Interaction:** The return link goes back to shared production (slide 12), or FAQ when opened from that menu. Direct entry defaults to shared production.

**Speaker notes:** Days 1–7: map actual AI use and identify inconsistency, quality gaps, and risk. Days 8–14: select one useful, bounded workflow and package relevant organizational knowledge. Days 15–21: name decision owners, define human checkpoints and evaluation criteria, and establish a baseline before the pilot. Days 22–30: run comparable work and decide whether to adopt, revise, or stop. Avoid sensitive or high-risk first pilots unless the appropriate governance is already in place. At team level, design and engineering leads can own a single workflow with DesignOps facilitation. At product-area level, PM, research, design, engineering, and a system owner coordinate shared patterns and cross-team outcomes. At enterprise level, federated product ownership works within Security, Legal, IT, and platform guardrails. DesignOps connects the altitudes; it does not unilaterally own policy or product decisions. Calendar windows are a suggested starting plan, not promised delivery dates.

**Transition:** Return to the central question: if AI participates in design, who designs its operating environment?

## Early experimentation · approximate values

These are not validated measurements, benchmarks, or causal evidence. Records, samples, and methods were not supplied. Production rate declines and review effort increases; neither is presented as an improvement. Rate change uses midpoints; weekly rate and the eight-week E2E cycle are different denominators. Percentage changes use percentage points. No user outcomes are invented.

| Metric | Baseline | Pilot | Change | Unit / context |
| --- | --- | --- | --- | --- |
| Production effort | 18h | 11h | −7 h | person-hours / accepted concept |
| Review effort | 4h | 6h | +2 h | person-hours / accepted concept |
| Design-system compliance | 78% | 90% | +12 pp | % applicable checks passed |
| Approved-context reuse | 25% | 70% | +45 pp | % artifacts citing approved context |
| Experimentation cadence | 1/wk | 2/wk | +1 /wk | completed experiments / week |
| Brief → validated concept | 9d | 6d | −3 d | median elapsed days |
| Design production rate | ~3–4/wk | ~1–2/wk | ≈−2/wk (midpoint estimate) | accepted artifacts / in a team with 8w E2E Cycle |
| Rework / revision rate | 35% | 24% | −11 pp | % artifacts needing major revision |
| Accessibility / quality defects | 6/10 | 4/10 | −2 /10 | open defects / 10 reviewed screens |
| Design-to-code divergence | 28% | 18% | −10 pp | % audited UI instances divergent |

Definitions and collection methods are in appendix 22. Match scope, staffing and criteria; record sample size and spread; agree adopt/revise/stop thresholds before seeing results. The form example is fictional, pre-authored, and pending user validation. Context does not enforce itself: integration, permissions, validation and human review are required.
