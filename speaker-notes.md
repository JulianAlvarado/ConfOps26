# DesignOps as AI Infrastructure

Governance, systems, and the new role of DesignOps in product teams

Keynote v2. Primary source: the supplied **DesignOps as AI Infrastructure Presentation Outline ConfOps 2026**, including the original brief, frameworks, review notes, and FAQ. The conference revision keeps the interactive onboarding demo instead of a redundant conflict overview, keeps Govern / Context / Evaluate central, and moves the detailed stack and lifecycle to backups. V2 simplifies slides 5, 6, and 14 in both Stage and review: three questions, one demo surface per step, and a four-part pilot timeline. Supporting operational detail remains in these notes. There are 15 keynote slides, Q&A, and 7 backups (23 slides total).

Generated from the presenter-note data in app.js. To update this document after editing those notes: `node check.mjs --write-notes`.

## Pacing

| Act | Slides | Window | Duration |
| --- | --- | --- | --- |
| I: Introduction and the acceleration paradox | 1–4 | 0:00–3:00 | 3 minutes |
| II: The fix and the saved lesson | 5–8 | 3:00–10:40 | 7 minutes 40 seconds |
| III: Make the operating model repeatable | 9–14 | 10:40–18:30 | 7 minutes 50 seconds |
| IV: Closing | 15 | 18:30–20:00 | 1 minute 30 seconds |
| Q&A | 16, with optional 17–23 | 20:00–30:00 | 10 minutes |

The timing is a rehearsal guide, not an auto-advance schedule. Keep on-screen examples short enough to preserve discussion time. Read the full notes before presenting; the slides intentionally omit nuance that belongs in the spoken narrative.

Slide 3's text-only **About me** introduction occupies **1:30–2:00 (30 seconds)**. It presents Julian Alvarado's supplied biography in English and personal interests, with Xbox Design Ops as the role line. Summarize the role and connection to the talk instead of reading the full biography aloud. The closing on slide 15 is shortened from 120 to **90 seconds**, preserving the 20-minute slot.

Slide 6's retained six-step demo runs from **4:00–8:30**, for **270 seconds**. The removed overview's 90 seconds are reassigned to explanation and interaction pauses: 30 seconds for the audience to absorb the blocked need, 30 seconds for form validation/keyboard feedback, and 30 seconds to review the saved lesson's owner and review trigger. No steps or exercises were added. The keynote remains exactly 1,200 seconds; Q&A remains 600 seconds.

## Stage delivery and rehearsal

Choose **Stage** or press **S** before sharing. Stage closes notes and dialogs and hides review chrome; **F** optionally enters fullscreen. Only three moments need builds: slide 4 fragmentation → alignment, slide 6's six existing demo steps, and slide 15 question → answer. All other diagrams are resolved static summaries. This changes delivery, not slide order or timing.

**Right / Down / Page Down / Space** advances a build before the next slide; **Left / Up / Page Up** reverses a build before the previous slide. Builds are retained when revisiting slides. Home / End jumps to the first / last slide. Tab into the demo to type and submit; input and form-button keys retain native behavior. Tab beyond the form to resume slide keys. **Escape**, **S**, **Exit stage · Esc**, or leaving native fullscreen returns to review on the current slide. Escape works from the form too. N/G cannot open notes or the index on stage.

Review's build states, form value/feedback, diagram selections, and manual Reading preference are restored on exit; notes and dialogs remain closed. Entering Stage again starts a new rehearsal of the three build moments. Use the form only for fictional input: it sends and saves nothing.

Stage prioritizes projected labels: the tested decision-bearing body and diagram text is at least 18.4px effective at 1280×720, and 24.15px at 1680×1080. The framework shows only its three questions; the documentation model shows four mappings and a concise scoped rule. Framework examples and team/product-area/enterprise operating guidance remain in these notes. Seven transformations, detailed rule provenance, lifecycle panels, and all ten measures remain in review and these notes. Act/topic labels, counters, decorative ordinals, and reference-appendix metadata remain smaller. Reading view remains the appropriate reference-reading surface on small screens.

## Illustrative decision trail

The assumed user needs to start a workspace alone. The first generated form requires a teammate email and blocks that task. Designer and engineer move invitations after setup. DesignOps saves the lesson and its reason in shared guidance, scoped to solo workspace setup, with a product lead owner and review after the pilot or a source change. The next proposed form meets that requirement, but still needs accessibility and user-outcome review.

The example, AI-produced forms, team decisions, and ownership are all pre-authored and illustrative. They are not research findings, actual organizational policy, live model output, or measured improvements. User validation is pending. DesignOps keeps the user's need, the team's decision, its reason, and its owner together in shared guidance. Product experts still decide whether the guidance and each new result are appropriate.

## 1. AI makes us faster. Who keeps us coherent?

**Timing:** 0:00–0:45 (45 seconds)

**Takeaway:** AI increases production capacity. DesignOps maintains organizational coherence.

**Visual concept:** One shared source fans out into different shapes: more output, less consistency.

**Interaction / reveal:** A short entrance trace establishes the flow motif. No automatic slide advancement.

**Speaker notes:** Open with the tension, not a list of tools. Teams can generate briefs, concepts, research summaries, and code faster than before. Faster creation does not automatically produce a coherent customer experience. We will follow one illustrative onboarding problem: a working form stops someone from starting alone. Watch how the team fixes it, saves the lesson in shared guidance, and checks the next result. Then ask what DesignOps must maintain around that work and how a bounded pilot could test its value. The example is pre-authored, not a report of organizational results.

**Transition:** What changes when production becomes distributed across the whole team?

---

## 2. Everyone can generate

**Timing:** 0:45–1:30 (45 seconds)

**Takeaway:** Distributed generation moves the bottleneck toward alignment, quality, and governance.

**Visual concept:** Four parallel lanes: product, research, design, and engineering.

**Interaction / reveal:** Stage: all four roles are resolved and visible. Review: Distribute generation activates one role per click; a fifth click resets the example.

**Speaker notes:** Each discipline gains production capacity. PMs generate briefs and hypotheses; researchers synthesize evidence; designers explore concepts; engineers generate components and tests. Generation is more distributed, but expertise is not interchangeable. The same language model can interpret the product differently in each lane. These are categories of assistance, not guarantees that outputs are accurate. Ask the room to imagine all four lanes producing simultaneously. The new constraint is agreeing on what to produce, what fits the system, and who evaluates it.

**Transition:** Before we look at that variation, a brief introduction to the person sharing this perspective.

---

## 3. About me

**Timing:** 1:30–2:00 (30 seconds)

**Takeaway:** Introduce yourself and the perspective you bring to DesignOps and AI.

**Visual concept:** A text-only introduction to Julian Alvarado, Xbox Design Ops, with his supplied biography and personal interests.

**Interaction / reveal:** No builds or controls.

**Speaker notes:** Julian Alvarado is a Senior Program Manager and Design Operations leader at Microsoft, helping Xbox Design scale through better systems, clearer processes, and responsible AI. He works across teams and studios to improve how designers plan, learn, and deliver—building resilient, people-centered creative organizations. Outside work, Julian is a daily CrossFit devotee and a “forever blue belt” in jiu-jitsu. A retired musician, he still loves live shows and enjoys drawing at home. Currently in rotation: Radiohead, Lenny Kravitz, Oasis, and Crosses. This is a concise English version of the speaker's supplied biography, with his supplied personal interests. Keep the spoken introduction to 30 seconds by summarizing your role and its connection to this talk rather than reading the full biography aloud. The keynote remains 1,200 seconds, the demo remains 270 seconds, closing remains 90 seconds, and Q&A remains 600 seconds.

**Transition:** Now return to the shared challenge: without common conditions, more output can create more variation.

---

## 4. The acceleration paradox

**Timing:** 2:00–3:00 (60 seconds)

**Takeaway:** Shared context and evaluation govern variation without eliminating useful exploration.

**Visual concept:** A causal chain sits above diverging output branches; a shared standards band aligns their treatment.

**Interaction / reveal:** Stage moment 1: the complete chain starts fragmented. Right advances to shared standards, then to the next slide; Left reverses it. Review retains the four-stage trace and alignment toggle.

**Speaker notes:** Read the chain deliberately: more output, more variation, more decisions, more opportunities for inconsistency. This is a conceptual mechanism, not a statistical forecast. Variation is useful during exploration; unmanaged variation becomes expensive at system boundaries. Examples include conflicting terminology, duplicated research, inaccessible patterns, undocumented AI decisions, and design-system drift. The source's '17 versions of a pattern' is rhetorical, not a measured statistic, so we do not chart it. Apply shared context and evaluation: options can remain different while obeying common constraints. A green state is an explanatory metaphor, not a claim that standards automatically eliminate defects.

**Transition:** Three questions help us govern that variation. Then we will apply them to one workspace-setup example.

---

## 5. Govern. Context. Evaluate.

**Timing:** 3:00–4:00 (60 seconds)

**Takeaway:** GOVERN: what can AI do? CONTEXT: what does it know? EVALUATE: what does good look like?

**Visual concept:** Three strong words and three questions, with space to absorb each distinction.

**Interaction / reveal:** Static in Stage and review. The solo-setup examples and operating foundations are spoken from these notes, not competing lists on screen.

**Speaker notes:** Use one model throughout. The next demo follows someone starting a workspace alone; use that need to ground the three questions. Govern asks what AI may do and who can accept it: in this illustrative case, no real contact data enters the demo, a designer and engineer review, and a product lead owns the scoped rule. Context carries the solo-setup brief, the requirement to make invitations optional, and the supported form pattern together. Evaluate asks whether setup completes without email, while checking labels, errors, focus, and feasibility. Meeting that requirement alone cannot establish user value. These concrete checks sit within broader tool, data, privacy, risk, and release boundaries. Stewardship grounds governance; systems carry context; enablement puts all three into practice through workflows, prompts, rubrics, and training. This is the core model, not another framework to memorize.

**Transition:** Now follow those three responsibilities through the actual decision.

---

## 6. Fix the form. Keep the lesson.

**Timing:** 4:00–8:30 (270 seconds)

**Takeaway:** The team fixes the form. DesignOps makes the lesson available to the next team and its AI tools.

**Visual concept:** One current-step label and one large example surface. Six states follow the user's need, AI mistake, team decision, working form, saved lesson, and next review.

**Interaction / reveal:** Stage moment 2: Right advances the six steps, then the slide; Left reverses them. At step 4, Tab into the name-only form; native field and submit keys never advance the deck. Tab out to resume. Review keeps its buttons; Reset clears the form in either mode.

**Speaker notes:** Introduce the fictional example here: someone wants to start a workspace alone. Allow 270 seconds (4 minutes 30 seconds) for the six existing steps. The 90 seconds recovered from the removed overview slide are explanation and interaction pauses, not extra UI or an exercise: 30 seconds to let the audience absorb the blocked user need, 30 seconds for the form's validation and keyboard feedback, and 30 seconds to review why the saved lesson needs an owner and a review trigger. First: the person wants to start a workspace alone. Second: the AI-produced form requires someone else's email, so the person gets stuck. Third: the designer and engineer move invitations after workspace creation. Fourth: try the revised local form with just a workspace name; show validation and keyboard feedback if useful. Nothing is saved or sent. Fifth: explain why fixing one screen is not enough. DesignOps records the lesson with the original solo-setup assumption, the team's reason, a product lead owner, and a review date after the pilot. Put that guidance where the next team and its AI tools can use it. Sixth: the next proposed form allows setup without inviting anyone. A reviewer verifies that behavior and still checks accessibility and user outcomes. Do not claim the rule guarantees future results or that this is a real user study. Every state is pre-authored and illustrative. The distinction is simple: product experts decide what the experience should do; DesignOps helps that decision survive beyond this one screen.

**Transition:** The person can now finish setup alone. What else must the team check?

---

## 7. When generation is cheap, evaluation is strategic

**Timing:** 8:30–9:30 (60 seconds)

**Takeaway:** Automated checks support accountable human judgment; they cannot prove design quality.

**Visual concept:** Multiple candidates flow through a six-part rubric to an explicit human decision.

**Interaction / reveal:** Static flow; no fabricated AI score or automatic approval.

**Speaker notes:** Walk through the rubric: approved components and tokens; identified user needs without unnecessary complexity; accessibility; brand and content principles; product strategy; and engineering feasibility. Domain experts define the standard together. Automated checks can detect specific violations, but a passing score cannot establish usefulness, coherence, or user success. A human reviewer accepts, revises, or rejects and records reasons. Keep evidence linked to decisions. Designers increasingly direct and evaluate alternatives, but craft and domain expertise remain indispensable.

**Transition:** Once we record the judgment, how do we keep it useful rather than bury it in an archive?

---

## 8. The organizational learning loop

**Timing:** 9:30–10:40 (70 seconds)

**Takeaway:** Keep the decision and its reason in shared guidance, then check the next result.

**Visual concept:** A complete five-stage learning sequence on stage; a closed loop around organizational memory in review.

**Interaction / reveal:** Stage: the whole sequence is static, ending with re-evaluation. Review: Follow one learning cycle highlights a stage per click, wrapping back to generation.

**Speaker notes:** Return to the decision to offer invitations after setup. Do not save only the corrected form: save why the team changed it and who will review that guidance. Follow the same sequence on screen: AI proposes a design using shared guidance; the team checks it against the user's need; they save the lesson, including the decision, reason, and owner; DesignOps updates the guidance available to the next team and its AI tools; a reviewer checks the next result. The example does not prove that one field is always best or that guidance automatically prevents mistakes. It is fictional and user validation is pending. If the solo-setup assumption changes, the product lead revisits the guidance. DesignOps keeps its source, version, access, and review date current. Retire lessons that no longer apply instead of turning every observation into universal policy.

**Transition:** That maintenance is recognizable DesignOps work—with a wider scope.

---

## 9. The role expands; the fundamentals remain

**Timing:** 10:40–11:30 (50 seconds)

**Takeaway:** People, process, and systems remain the foundations; their scope expands.

**Visual concept:** The familiar foundations sit beside six traditional-to-expanded responsibilities.

**Interaction / reveal:** Static comparison; the expanded scope is immediately visible.

**Speaker notes:** Refresh the fundamentals. DesignOps improves the conditions for effective design through people, process, and systems. Staffing, onboarding, rituals, tooling, and collaboration do not disappear. AI broadens the reach: from enabling designers to enabling the product ecosystem; from documenting procedures to making knowledge usable at the moment of generation; from efficiency alone to quality and outcomes. This is a scope expansion, not a dismissal of traditional operations or a mandate to reorganize.

**Transition:** A useful metaphor for that expanded role is the control plane.

---

## 10. DesignOps as the control plane

**Timing:** 11:30–12:20 (50 seconds)

**Takeaway:** DesignOps connects distributed actors through shared rules, context, and evaluation.

**Visual concept:** Five AI-enabled actors connect through a common operating layer.

**Interaction / reveal:** Stage: the original hub-and-spoke diagram stays fully connected, with larger labels and no extra control. Review: Connect the control plane toggles the network links. Reading view retains the accessible text summary.

**Speaker notes:** The control plane metaphor distinguishes defining the conditions of work from doing everyone's work. PM, research, design, prototyping, and engineering keep their domain responsibilities. DesignOps coordinates reusable context, risk-based guardrails, evaluation criteria, ownership, and enablement. It should not become a central approval queue. Security, Legal, IT, platform teams, and domain experts remain essential partners. Clear boundaries can allow teams to move without repeatedly asking permission for known-safe tasks.

**Transition:** Shared guidance also changes how work moves between these people.

---

## 11. Before AI / a proposed AI-enabled journey

**Timing:** 12:20–13:20 (60 seconds)

**Takeaway:** Pilot collaborative production and use any capacity gained for customer learning.

**Visual concept:** Two journeys connect customer need to customer feedback: sequential handoffs and a collaborative experiment loop.

**Interaction / reveal:** Stage: both journeys are fully resolved and static. Review can animate sequencing versus collaboration; motion is illustrative, not measured duration.

**Speaker notes:** The before journey is a deliberately simplified pattern, not a claim that all pre-AI teams worked sequentially. Research informs a brief, design produces mocks, engineering builds, and customers finally respond. The proposed alternative starts with Mission, Milestones, and Metrics—the source's MMM. PM, research, design, and engineering share intent; specification, concepts, feasibility, and HTML/CSS prototypes evolve together. Releases can become experiments that inform another iteration. AI may reduce production effort, but review, integration, and dependency costs still count. Do not promise a one-week release or universal acceleration. Measure elapsed production time, person-hours, waiting time, customer validation, and experimentation cadence. The animation contrasts sequencing, not numeric speed. A prototype is not a production release; user evidence remains necessary.

**Transition:** Shared guidance can start with documentation the team already has.

---

## 12. From documentation to executable standards

**Timing:** 13:20–14:35 (75 seconds)

**Takeaway:** Turn domain knowledge into versioned, reusable context and verifiable standards.

**Visual concept:** Four documentation transformations and the saved solo-setup lesson on stage; all seven transformations and the full shared guidance in review.

**Interaction / reveal:** Static transformation. Stage emphasizes lesson, reason, owner/version, review date, and pending user evidence; review and notes retain the full detail.

**Speaker notes:** Use the saved solo-setup lesson as the concrete artifact rather than narrating seven new frameworks. Its source is explicitly assumed, the requirement and decision are readable, its scope is solo setup, and its owner and review trigger are visible. User evidence remains pending. The seven transformations preserve the broader source material: guidelines to machine-readable rules, design systems to consumable systems, templates to canonical prompts, documentation to context packages, critique to rubrics, SOPs to human–AI workflows, efficiency measures to speed plus quality and outcomes. A YAML-like package does not enforce itself. Integration, permissions, validation, and human review are still required. DesignOps maintains the package; domain experts author, approve, and revisit its validity.

**Transition:** Maintaining this guidance costs time. How would we know the workflow is worth adopting?

---

## 13. Measure speed and coherence

**Timing:** 14:35–16:15 (100 seconds)

**Takeaway:** Evaluate the whole workflow: speed, review cost, quality, coherence, and customer outcomes.

**Visual concept:** Four large comparisons show baseline, pilot, and change together: concept time, production rate, review effort, and system compliance.

**Interaction / reveal:** Stage: four static, paired comparisons. Review: All 10 measures opens the complete comparison dialog; Definitions links to the measurement backup, also accessible from Q&A.

**Speaker notes:** These are approximate comparison values informed by the presenter's early experimentation, not exact measurements, benchmarks, or a forecast. The presenter supplied design production-rate ranges; the other nine comparisons remain unchanged from the earlier synthetic values, reported as close to informal observations. Underlying records, sample sizes, and methods have not been supplied, so do not claim validated results or causal ROI. Baseline to pilot: median brief-to-validated-concept time 9 to 6 days; design production rate ~3–4/wk to ~1–2/wk, accepted artifacts / in a team with 8w E2E Cycle. The change ≈−2/wk is a midpoint estimate: 1.5 minus 3.5, not an independently observed change. Weekly rate and the team's eight-week end-to-end cycle are different concepts; do not divide by eight or infer an eight-week total. Production rate decreases, so do not frame it as an improvement. Production effort is 18 to 11 hours per concept; review effort 4 to 6 hours; rework 35% to 24%; applicable system checks passed 78% to 90%; open accessibility/quality defects 6 to 4 per 10 screens; design-to-code divergence 28% to 18%; experiments 1 to 2 per week; approved-context reuse 25% to 70%. Review effort rises in this comparison: faster generation does not imply less review. Leading/process measures signal behavior and readiness; outcome measures test delivered workflow results. System compliance is a leading quality signal, not proof of user benefit. Both sets of approximate values and their changes appear together, without competing bar scales. Percentage measures use percentage-point changes, not relative percentages. Match work scope, staffing, artifact definition, and evaluation criteria; include sample sizes and dispersion before presenting a validated comparison. Track customer task success separately. No customer outcome data is supplied.

**Transition:** Use those measures in one bounded pilot before scaling the operating model.

---

## 14. Your first 30 days

**Timing:** 16:15–18:30 (135 seconds)

**Takeaway:** A 30-day pilot can begin at team, product-area, or enterprise level with clear ownership.

**Visual concept:** Four verbs on a timeline, one concrete output per week, and an explicit adopt / revise / stop decision.

**Interaction / reveal:** Static in Stage and review, with no extra presenter clicks. Team, product-area, and enterprise ownership guidance remains in these notes.

**Speaker notes:** Days 1–7: map actual AI use and identify inconsistency, quality gaps, and risk. Days 8–14: select one useful, bounded workflow and package relevant organizational knowledge. Days 15–21: name decision owners, define human checkpoints and evaluation criteria, and establish a baseline before the pilot. Days 22–30: run comparable work and decide whether to adopt, revise, or stop. Avoid sensitive or high-risk first pilots unless the appropriate governance is already in place. At team level, design and engineering leads can own a single workflow with DesignOps facilitation. At product-area level, PM, research, design, engineering, and a system owner coordinate shared patterns and cross-team outcomes. At enterprise level, federated product ownership works within Security, Legal, IT, and platform guardrails. DesignOps connects the altitudes; it does not unilaterally own policy or product decisions. Calendar windows are a suggested starting plan, not promised delivery dates.

**Transition:** Return to the central question: if AI participates in design, who designs its operating environment?

---

## 15. Who designs the system?

**Timing:** 18:30–20:00 (90 seconds)

**Takeaway:** AI doesn't eliminate the need for DesignOps. It makes DesignOps infrastructure.

**Visual concept:** A quiet question, a deliberate answer reveal, and three concluding statements.

**Interaction / reveal:** Stage moment 3: pause, press Right to reveal DesignOps, then Right for Q&A. Left hides the answer before moving back. In review, Next or a forward navigation key reveals the answer first, then advances to Q&A. Reading view keeps its native scroll keys. There is no separate reveal button.

**Speaker notes:** Use 90 seconds for the closing; its former 30 seconds now introduce the speaker on slide 3. Slow down. Read the question and leave space: if AI becomes part of how we design products, who designs the system in which AI operates? Reveal DesignOps. This is not a territorial claim that one function owns all AI. It is an invitation for DesignOps to connect domain expertise, governance, knowledge, workflows, and evaluation. AI creates capacity. Systems create consistency. Stewardship creates trust. DesignOps connects all three. The future is not merely managing work around design; it is designing the infrastructure through which humans and AI create products together. The practical challenge is one workflow, a baseline, a maintained context package, named human checkpoints, and evidence that quality has not been traded for speed. End on the thesis and pause rather than adding more tools.

**Transition:** Let's talk. Where is your team generating faster than it can maintain coherence?

---

## 16. Let's talk — Q&A

**Timing:** 10-minute Q&A, outside keynote timing

**Takeaway:** Use the conversation to connect the operating model to the audience's constraints.

**Visual concept:** Seven backup topics and LinkedIn/GitHub contact links beside the Q&A invitation.

**Interaction / reveal:** Select a topic to open a backup; each backup links back to Q&A.

**Speaker notes:** Reserve ten minutes for discussion. Invite specific workflow examples rather than abstract predictions. Seven backups cover governance ownership, the evolving role, AI-ready design systems, model-agnostic workflows, measurement, the full context stack, and the product lifecycle. The stack and lifecycle are supporting lenses, not new models the audience needs to memorize during the keynote. If asked whether this is just AI governance, return to the decision trail: governance is one component; context, workflows, evaluation, and enablement make it useful in the product ecosystem. If asked what to do tomorrow: map, identify, codify, standardize, and measure.

**Transition:** Choose a backup only when it helps answer a question.

---

## 17. Backup: shared governance ownership

**Timing:** Optional backup, outside keynote timing

**Takeaway:** Risk boundaries, access, operating-model design, and product judgment need explicit owners.

**Visual concept:** Four ownership domains; none claims the entire AI operating model.

**Interaction / reveal:** Back to Q&A returns to the topic menu.

**Speaker notes:** Security and Legal establish organizational risk boundaries; IT and platform teams manage technology and access. DesignOps translates policy into useful workflow conditions with domain experts. Product, research, design, and engineering own their decisions and release quality. Good governance removes repetitive ambiguity through approved paths, risk-based human checkpoints, escalation, and documented exceptions. Bad governance creates an unnecessary approval queue. Specific accountabilities must be agreed locally; the slide is a discussion model, not a universal RACI.

**Transition:** Return to Q&A.

---

## 18. Backup: operating-environment architect, not AI factory

**Timing:** Optional backup, outside keynote timing

**Takeaway:** DesignOps architects the operating environment rather than building everyone's AI tools.

**Visual concept:** Six responsibilities and five kinds of product work.

**Interaction / reveal:** Back to Q&A returns to the topic menu.

**Speaker notes:** The emerging role includes governance, design intelligence, workflow architecture with subject-matter experts, quality systems, enablement, and measurement. 'AI Ops Systems Architect' is a possible direction, not a prescribed title. The source's prototyper, builder, sweeper, grower, and maintainer archetypes are retained as kinds of work: prototype, build, simplify/improve, grow, and maintain. Their risk and evaluation needs differ. The source includes an unverified external attribution; this deck makes no authorship claim for the archetypes. Do not turn this model into a requirement for DesignOps to become an AI engineering team.

**Transition:** Return to Q&A.

---

## 19. Backup: an AI-ready design system

**Timing:** Optional backup, outside keynote timing

**Takeaway:** AI readiness adds meaning, constraints, examples, and evaluation to an existing design system.

**Visual concept:** Foundation plus machine-consumable reasoning, with shared-context ownership underneath.

**Interaction / reveal:** Back to Q&A returns to the topic menu.

**Speaker notes:** Keep tokens, components, patterns, and guidelines. Add semantic metadata, usage rules, examples, constraints, accessibility requirements, relationships, code equivalents, and evaluation criteria. Start with one pattern rather than translating the whole library. Include valid and invalid examples, allowed data access, provenance, version, freshness, and a named owner. AI-readable does not mean publicly accessible, indiscriminately retrievable, or automatically correct. Research and existing product experiences remain important context beyond the component library.

**Transition:** Return to Q&A.

---

## 20. Backup: model-agnostic workflows and canonical prompts

**Timing:** Optional backup, outside keynote timing

**Takeaway:** Build durable knowledge, rules, workflows, and evaluation around replaceable models.

**Visual concept:** Shared knowledge, rules, workflows, and evaluation remain as models change.

**Interaction / reveal:** Back to Q&A returns to the topic menu.

**Speaker notes:** Models and tools will change. Preserve the institutional knowledge, permissions, workflows, examples, and acceptance criteria that define how the organization operates. Model-agnostic does not mean zero adaptation: tool capabilities, context limits, privacy controls, and behavior differ. Re-run a representative evaluation set before a model switch. Canonical prompts are co-authored by domain experts and governed as versioned knowledge artifacts, not selected by DesignOps alone. Standardization creates an informed starting point, not a ban on exploration.

**Transition:** Return to Q&A.

---

## 21. Backup: metric definitions and measurement plan

**Timing:** Optional backup, outside keynote timing

**Takeaway:** Operational definitions, comparable work, and evidence qualifications matter more than dashboard polish.

**Visual concept:** Definitions, units, and collection methods beside a concise pilot protocol.

**Interaction / reveal:** Dashboard returns to slide 13 with baseline and pilot visible together. Q&A returns to the topic menu.

**Speaker notes:** Define 'validated concept' before collecting time: reviewer acceptance plus the agreed user-evidence threshold. Count accepted artifacts, not raw generations. Separate elapsed days from person-hours, production from review, and quality defects from severity. Define denominators for compliance, rework, reuse, and divergence. Complete experiments include a recorded learning decision, not just a release. Compare similar tasks and staffing; document sample size, spread, exclusions, and complexity. Use approved data collection with appropriate privacy controls. Review effort may increase while total effort falls, but a small observational pilot cannot establish causality. Set decision thresholds in advance and track customer task success or other relevant product outcomes. Dashboard values are preliminary approximations informed by the presenter's early experimentation, not validated measurements.

**Transition:** Return to the dashboard or Q&A.

---

## 22. Backup: Organizational memory is the advantage

**Timing:** Optional backup, outside keynote timing

**Takeaway:** The differentiator is governed organizational knowledge, not loyalty to a model.

**Visual concept:** A five-layer AI design stack, built from models to connecting DesignOps infrastructure.

**Interaction / reveal:** Stage: all five layers are resolved. Review: Build the context stack adds one highlighted layer per click; after all layers it resets to the foundation.

**Speaker notes:** Models provide capabilities. Agents and tools connect capabilities to tasks. Organizational context provides what models do not inherently know: tokens, components, research, product knowledge, brand, accessibility, terminology, workflows, repositories, PRs, existing experiences, and past decisions. Stewardship adds guardrails, exclusions, evaluation, and human checkpoints. DesignOps connects the layers. The diagram is a responsibility model, not a mandatory software architecture. Do not feed all organizational data into a model: permissions, privacy, provenance, source quality, freshness, and ownership determine what context may be used. A design system is one part of organizational memory, not the whole memory.

**Transition:** Return to Q&A, or use the lifecycle backup to locate these responsibilities in the work.

---

## 23. Backup: DesignOps across the product lifecycle

**Timing:** Optional backup, outside keynote timing

**Takeaway:** Governance, context, and evaluation follow the work across every lifecycle stage.

**Visual concept:** Five lifecycle phases above a persistent shared-infrastructure rail; detailed per-phase panels remain in review.

**Interaction / reveal:** Stage: a static five-phase overview. Review: select a phase to reveal AI assistance, DesignOps infrastructure, and the human checkpoint.

**Speaker notes:** Discover: AI can cluster and retrieve research; DesignOps supports consent, traceability, source quality, and reusable knowledge. Define: AI can draft briefs and identify gaps; shared brief structure, product vocabulary, and source context keep framing grounded. Design: alternatives and prototypes rely on system rules, prompts, accessibility constraints, and critique. Build: generated code needs component metadata, supported patterns, tokens, validation, and paired review. Measure: AI can summarize observations, but people interpret outcomes, record caveats, and decide what should change. Do not turn this into a tool catalog. Discuss one or two phases with the persistent rail; use review mode only when the detailed panels are needed.

**Transition:** Return to Q&A. The keynote's onboarding decision is one example at the design-to-build boundary.

## Early experimentation: approximate values

**Early experimentation · approximate values.** The presenter reports that the comparison values are close to informal experimentation data and has supplied approximate ranges for design production rate. They are approximations, not exact measurements, benchmarks, validated results, causal evidence, or a forecast. Baseline, pilot, and change are shown together. Changes use each metric's units; percentage measures use percentage points.

| Metric | Baseline | Pilot | Change | Unit / context | Category |
| --- | --- | --- | --- | --- | --- |
| Production effort | 18h | 11h | −7 h | person-hours / accepted concept | Leading / process |
| Review effort | 4h | 6h | +2 h | person-hours / accepted concept | Leading / process |
| Design-system compliance | 78% | 90% | +12 pp | % applicable checks passed | Leading / process |
| Approved-context reuse | 25% | 70% | +45 pp | % artifacts citing approved context | Leading / process |
| Experimentation cadence | 1/wk | 2/wk | +1 /wk | completed experiments / week | Leading / process |
| Brief → validated concept | 9d | 6d | −3 d | median elapsed days | Workflow outcome |
| Design production rate | ~3–4/wk | ~1–2/wk | ≈−2/wk (midpoint estimate) | accepted artifacts / in a team with 8w E2E Cycle | Workflow outcome |
| Rework / revision rate | 35% | 24% | −11 pp | % artifacts needing major revision | Workflow outcome |
| Accessibility / quality defects | 6/10 | 4/10 | −2 /10 | open defects / 10 reviewed screens | Workflow outcome |
| Design-to-code divergence | 28% | 18% | −10 pp | % audited UI instances divergent | Workflow outcome |

Design production rate is **~3–4/wk baseline → ~1–2/wk pilot**, with **≈−2/wk** computed from the range midpoints (1.5 − 3.5), not a separately observed change. The rate decreases; it is not colored as an improvement. The context is **accepted artifacts / in a team with 8w E2E Cycle**. The rate is per week; the team's eight-week end-to-end cycle is context, not a replacement denominator.

The other nine synthetic comparisons remain unchanged as approximations informed by the presenter's early experimentation. Underlying records, sample sizes, and methods have not been supplied. Review effort increases in the comparison. Leading/process classifications are useful for this workflow, not universal definitions. No actual customer-outcome evidence has been supplied.

## Operational definitions and collection

- **Brief → validated concept:** median elapsed days from a time-stamped brief to agreed reviewer acceptance and user-evidence criteria. Define the validation threshold first; do not count only a visually completed prototype.
- **Production rate:** accepted artifacts per team-week, holding artifact class, scope, staffing, and acceptance criteria comparable.
- **Production and review effort:** person-hours per accepted concept, reported separately. Include critique, re-evaluation, and validation. These are not elapsed days.
- **Rework:** percentage of reviewed artifacts requiring major revision. Agree on the definition of major and log revision reasons.
- **Design-system compliance:** passed applicable token, component, and interaction-pattern checks divided by all applicable checks. Track exclusions and sampling.
- **Accessibility and quality defects:** deduplicated open defects per 10 reviewed screens, accompanied by severity. Combine manual and automated assessment; a count does not establish accessibility conformance.
- **Design-to-code divergence:** audited UI instances that violate approved design intent divided by all audited instances in the defined sample.
- **Experimentation cadence:** completed experiments per week, each with a recorded interpretation and decision, not simply releases.
- **Context reuse:** artifacts citing a current, approved context package divided by all reviewed artifacts. A citation alone does not prove appropriate use.
- **Customer outcomes:** collect separately, for example task success and observed friction on comparable tasks. None is fabricated in this deck.

Record sample size, spread, staffing, complexity, exclusions, and data-collection limitations. A small observational pilot cannot establish causality. Set adoption, revision, and stop criteria before inspecting results. Apply organizational privacy and access policies to measurement.

## Source coverage and editorial decisions

| Source idea / review request | Where preserved |
| --- | --- |
| Core thesis, central question, capacity versus coherence | 1–2, 4, 15 |
| Speaker introduction: supplied name, role, translated biography, personal interests | 3 |
| Illustrative onboarding problem and user requirement, within the interactive demo | 6 |
| Product/customer journey before and after AI; Mission, Milestones, Metrics | 11 |
| DesignOps fundamentals and expanding responsibilities | 9, 14, 18 |
| AI control plane; domain ownership | 10, 17 |
| Stewardship × Systems × Enablement reconciled with Govern / Context / Evaluate | 5 and its notes |
| Organizational memory and five-layer AI design stack | 8, 19, 22 (backup) |
| Evaluation scarcity and six-part quality rubric | 7 |
| Discover → Define → Design → Build → Measure | 23 (backup) and its notes |
| Designer–engineer pairing; user need → fix → saved lesson, with local HTML/CSS | 6 |
| Learning captured into context and standards | 8, 12 |
| Production time, rate, review, rework, consistency, and measurement | 13, 21 |
| Canonical prompts and seven artifact transformations | 12 (four on stage; all seven in review and notes), 20 |
| Team, product-area, and enterprise altitudes | 14 speaker notes (all three); the timeline stays static in Stage and review |
| Evolving role and work archetypes | 18 |
| Risks if infrastructure is absent | 4, 6 and their notes |
| Shared governance, AI-team concern, AI-ready systems, model change, prompt ownership | 16–23 |
| Tomorrow's actions: map, identify, codify, standardize, measure | 14, 16 |

The Spanish review notes are implemented in English. Traditional DesignOps work is expanded, not erased. The proposed workflow is explicitly a hypothesis to validate. The source's tool mentions do not imply integrations; the demonstration uses local HTML/CSS. The source's unverified external archetype attribution is not reproduced as a factual attribution. Rhetorical counts are not converted into statistical claims. The stack and lifecycle walkthroughs are preserved in backups to avoid competing with the central operating model. The keynote now has 15 slides. The standalone conflict overview was removed at the user's request; its 90 seconds now support explanation and interaction pauses within the retained demo, without changing the six-step behavior or plain-language copy.

## Conversion and delivery notes

Keep slide text editable and vector diagrams separate from surrounding copy when recreating in PowerPoint. Use static before/after states or native appearance builds for branches, networks, stacks, and learning loops. Replace the live pair-programming form with concept-to-prototype frames and a link to this HTML presentation. Keep metric scenario labels and human-review qualifications visible in every exported state. The README documents full conversion assumptions and local navigation.
