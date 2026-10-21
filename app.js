"use strict";

const keynoteCount = 15;
const mainSlideCount = 16;
let notes = [
  {
    "seconds": 45,
    "takeaway": "AI increases production capacity. DesignOps maintains organizational coherence.",
    "visual": "One shared source fans out into different shapes: more output, less consistency.",
    "interaction": "A short entrance trace establishes the flow motif. No automatic slide advancement.",
    "body": "Open with the tension, not a list of tools. Teams can generate briefs, concepts, research summaries, and code faster than before. Faster creation does not automatically produce a coherent customer experience. We will follow one illustrative onboarding problem: a working form stops someone from starting alone. Watch how the team fixes it, saves the lesson in shared guidance, and checks the next result. Then ask what DesignOps must maintain around that work and how a bounded pilot could test its value. The example is pre-authored, not a report of organizational results.",
    "transition": "What changes when production becomes distributed across the whole team?"
  },
  {
    "seconds": 45,
    "takeaway": "Distributed generation moves the bottleneck toward alignment, quality, and governance.",
    "visual": "Four parallel lanes: product, research, design, and engineering.",
    "interaction": "Review: the four roles activate automatically on slide entry, with staggered output and bullet-color transitions. No generation control or slide auto-advance. Stage and reduced-motion views show the complete static state.",
    "body": "Each discipline gains production capacity. PMs generate briefs and hypotheses; researchers synthesize evidence; designers explore concepts; engineers generate components and tests. Generation is more distributed, but expertise is not interchangeable. The same language model can interpret the product differently in each lane. These are categories of assistance, not guarantees that outputs are accurate. Ask the room to imagine all four lanes producing simultaneously. The new constraint is agreeing on what to produce, what fits the system, and who evaluates it.",
    "transition": "Now consider how distributed output can create more variation."
  },
  {
    "seconds": 30,
    "takeaway": "Introduce yourself and the perspective you bring to DesignOps and AI.",
    "visual": "Five supplied photos fall into a stack on the left over 2.9 seconds, in the supplied order with the cafe portrait on top. Earlier edges remain visible; the biography stays unobstructed. Reduced motion and print show the final stack.",
    "interaction": "Photos drop once per slide entry in Review and Stage, then remain still. Language and mode switches do not restart the sequence. Next advances immediately; no builds or extra controls.",
    "body": "Speaker-supplied biography: Design Operations at Xbox / Microsoft. Sr. Creative Operations Manager for Prime Video. 18 years of experience managing projects at companies including P&G, Publicis, Critical Mass and Automattic (WordPress). Daily CrossFit. Jiu-jitsu “forever blue belt.” Retired musician and lots of drawing at home. No employment chronology is specified; do not infer current or former roles. Keep the spoken introduction to 30 seconds. The keynote remains 1,200 seconds; the demo, 270; closing, 90; and the shared discussion, 600.",
    "transition": "Now return to the shared challenge: without common conditions, more output can create more variation."
  },
  {
    "seconds": 60,
    "takeaway": "Shared context and evaluation govern variation without eliminating useful exploration.",
    "visual": "A causal chain sits above diverging output branches; a shared standards band aligns their treatment.",
    "interaction": "Review and Stage start with the patterns inactive. First Next activates all patterns and the full causal chain together. Second Next applies context and evaluation together. Third Next advances to slide 5. Previous removes alignment, then deactivates all patterns before leaving slide 4. Forward/reverse keys use the same two interaction steps, with held-key repeats ignored. No local controls. Revisits and language switches retain progress; Stage starts fresh and restores review on exit.",
    "body": "Read the chain deliberately: more output, more variation, more decisions, more opportunities for inconsistency. This is a conceptual mechanism, not a statistical forecast. Variation is useful during exploration; unmanaged variation becomes expensive at system boundaries. Examples include conflicting terminology, duplicated research, inaccessible patterns, undocumented AI decisions, and design-system drift. The source's '17 versions of a pattern' is rhetorical, not a measured statistic, so we do not chart it. Apply shared context and evaluation: options can remain different while obeying common constraints. A green state is an explanatory metaphor, not a claim that standards automatically eliminate defects.",
    "transition": "Three questions help us govern that variation. Then we will apply them to one workspace-setup example."
  },
  {
    "seconds": 60,
    "takeaway": "GOVERN: What should we use and how should we use it? CONTEXT: The intelligence layer for the right choices. EVALUATE: What makes it good enough?",
    "visual": "Three coral headings with supporting copy, with space to absorb each distinction.",
    "interaction": "Static in Stage and review. The solo-setup examples and operating foundations are spoken from these notes, not competing lists on screen.",
    "body": "Use one model throughout. The next demo follows someone starting a workspace alone; use that need to ground the three responsibilities. Govern asks what we should use and how we should use it: in this illustrative case, no real contact data enters the demo, a designer and engineer review, and a product lead owns the scoped rule. Context is the intelligence layer for the right choices: it carries the solo-setup brief, the requirement to make invitations optional, and the supported form pattern together. Evaluate asks what makes it good enough: whether setup completes without email, while checking labels, errors, focus, and feasibility. Meeting that requirement alone cannot establish user value. These concrete checks sit within broader tool, data, privacy, risk, and release boundaries. Stewardship grounds governance; systems carry context; enablement puts all three into practice through workflows, prompts, rubrics, and training. This is the core model, not another framework to memorize.",
    "transition": "Now follow those three responsibilities through the actual decision."
  },
  {
    "seconds": 270,
    "takeaway": "The team fixes the form. DesignOps makes the lesson available to the next team and its AI tools.",
    "visual": "Six visible tabs reveal the whole journey; one selected content surface preserves room for the form and the saved lesson.",
    "interaction": "Stage moment 2: Next and forward keys advance the six tabs before leaving the slide; previous and reverse keys go back one state. Tabs support arrows, Home and End. Native form keys do not navigate. No Reset or duplicate Next. Language switching preserves input and progress.",
    "body": "Introduce the fictional example here: someone wants to start a workspace alone. Allow 270 seconds (4 minutes 30 seconds) for the six existing steps. The 90 seconds recovered from the removed overview slide are explanation and interaction pauses, not extra UI or an exercise: 30 seconds to let the audience absorb the blocked user need, 30 seconds for the form's validation and keyboard feedback, and 30 seconds to review why the saved lesson needs an owner and a review trigger. First: the person wants to start a workspace alone. Second: the AI-produced form requires someone else's email, so the person gets stuck. Third: the designer and engineer move invitations after workspace creation. Fourth: try the revised local form with just a workspace name; show validation and keyboard feedback if useful. Nothing is saved or sent. Fifth: explain why fixing one screen is not enough. DesignOps records the lesson with the original solo-setup assumption, the team's reason, a product lead owner, and a review date after the pilot. Put that guidance where the next team and its AI tools can use it. Sixth: the next proposed form allows setup without inviting anyone. A reviewer verifies that behavior and still checks accessibility and user outcomes. Do not claim the rule guarantees future results or that this is a real user study. Every state is pre-authored and illustrative. The distinction is simple: product experts decide what the experience should do; DesignOps helps that decision survive beyond this one screen.",
    "transition": "The person can now finish setup alone. What else must the team check?"
  },
  {
    "seconds": 60,
    "takeaway": "Automated checks support accountable human judgment; they cannot prove design quality.",
    "visual": "Multiple candidates flow through a six-part rubric to an explicit human decision.",
    "interaction": "Static flow; no fabricated AI score or automatic approval.",
    "body": "Walk through the rubric: approved components and tokens; identified user needs without unnecessary complexity; accessibility; brand and content principles; product strategy; and engineering feasibility. Domain experts define the standard together. Automated checks can detect specific violations, but a passing score cannot establish usefulness, coherence, or user success. A human reviewer accepts, revises, or rejects and records reasons. Keep evidence linked to decisions. Designers increasingly direct and evaluate alternatives, but craft and domain expertise remain indispensable.",
    "transition": "Once we record the judgment, how do we keep it useful rather than bury it in an archive?"
  },
  {
    "seconds": 70,
    "takeaway": "Keep the decision and its reason in shared guidance, then check the next result.",
    "visual": "The complete learning cycle is visible without interaction, including the final check and return to shared guidance.",
    "interaction": "No cycle-progress control. Read the full cycle in review or Stage.",
    "body": "Return to the decision to offer invitations after setup. Do not save only the corrected form: save why the team changed it and who will review that guidance. Follow the same sequence on screen: AI proposes a design using shared guidance; the team checks it against the user's need; they save the lesson, including the decision, reason, and owner; DesignOps updates the guidance available to the next team and its AI tools; a reviewer checks the next result. The example does not prove that one field is always best or that guidance automatically prevents mistakes. It is fictional and user validation is pending. If the solo-setup assumption changes, the product lead revisits the guidance. DesignOps keeps its source, version, access, and review date current. Retire lessons that no longer apply instead of turning every observation into universal policy.",
    "transition": "That maintenance is recognizable DesignOps work—with a wider scope."
  },
  {
    "seconds": 50,
    "takeaway": "People, process, and systems remain the foundations; their scope expands.",
    "visual": "People, Process and Systems group current responsibilities and connect them to their expanded AI scope.",
    "interaction": "Static comparison; the expanded scope is immediately visible.",
    "body": "Refresh the fundamentals. DesignOps improves the conditions for effective design through people, process, and systems. Staffing, onboarding, rituals, tooling, and collaboration do not disappear. AI broadens the reach: from enabling designers to enabling the product ecosystem; from documenting procedures to making knowledge usable at the moment of generation; from efficiency alone to quality and outcomes. This is a scope expansion, not a dismissal of traditional operations or a mandate to reorganize.",
    "transition": "A useful metaphor for that expanded role is the control plane."
  },
  {
    "seconds": 50,
    "takeaway": "DesignOps connects distributed actors through shared rules, context, and evaluation.",
    "visual": "AI-assisted work is a single shared layer around distinct actors; DesignOps remains the connective operating layer, not the AI itself.",
    "interaction": "The original hub-and-spoke geometry is preserved, with one shared AI circle passing behind opaque role cards. Connections illuminate once on slide entry, without a button or automatic slide advancement. Stage and reduced-motion views show the complete connected state. An accessible text summary describes the shared-AI layer.",
    "body": "The control plane metaphor distinguishes defining the conditions of work from doing everyone's work. PM, research, design, prototyping, and engineering keep their domain responsibilities. DesignOps coordinates reusable context, risk-based guardrails, evaluation criteria, ownership, and enablement. It should not become a central approval queue. Security, Legal, IT, platform teams, and domain experts remain essential partners. Clear boundaries can allow teams to move without repeatedly asking permission for known-safe tasks.",
    "transition": "Shared guidance also changes how work moves between these people."
  },
  {
    "seconds": 90,
    "takeaway": "Sequential handoffs can delay feedback even when each discipline does good work.",
    "visual": "One before journey: research → brief → mocks → build → release, between customer need and feedback.",
    "interaction": "The sequential handoff animation runs once on slide entry, with no replay control or slide auto-advance. Stage and reduced-motion views remain fully visible and static; animation is not a measured duration.",
    "body": "This before journey is a deliberately simplified explanatory pattern, not a claim that all pre-AI teams worked sequentially. Research informs a brief, design produces mocks, engineering builds, and customers respond. Each discipline can do excellent work while waiting and late feedback limit learning. Use the 90 seconds to distinguish production time from waiting time and to ask where a decision becomes shared. The next slide proposes synchronized work, not a universal history or a measured improvement. Together the two journey slides use 195 seconds: the original 60 seconds plus the 135 seconds moved out of the keynote with the pilot appendix.",
    "transition": "What changes when shared purpose connects production and learning?"
  },
  {
    "seconds": 105,
    "takeaway": "Pilot collaborative production and use any capacity gained for customer learning.",
    "visual": "One proposed after journey: shared purpose, synchronized collaborative work, AI-assisted production, and experiments with customer feedback.",
    "interaction": "The existing green collaboration animation runs on entry without a replay control. Stage and reduced-motion views remain fully readable without animation. The 30-day pilot reference opens appendix 25; its return link brings you here. The pilot is outside keynote timing.",
    "body": "The before journey is a deliberately simplified pattern, not a claim that all pre-AI teams worked sequentially. Research informs a brief, design produces mocks, engineering builds, and customers finally respond. The proposed alternative starts with Mission, Milestones, and Metrics—the source's MMM. PM, research, design, and engineering share intent; specification, concepts, feasibility, and HTML/CSS prototypes evolve together. Releases can become experiments that inform another iteration. AI may reduce production effort, but review, integration, and dependency costs still count. Do not promise a one-week release or universal acceleration. Measure elapsed production time, person-hours, waiting time, customer validation, and experimentation cadence. The animation contrasts sequencing, not numeric speed. A prototype is not a production release; user evidence remains necessary.",
    "transition": "Shared guidance can start with documentation the team already has."
  },
  {
    "seconds": 75,
    "takeaway": "Turn domain knowledge into versioned, reusable context and verifiable standards.",
    "visual": "Three documentation-to-guidance tracks converge into advanced context for a production sprint. A shared metrics band evaluates speed, quality and outcomes across the whole flow.",
    "interaction": "Static convergence flow in Review, Stage and print. Explain the seven detailed relationships, example provenance and pending user validation from these notes; the destination summarizes context, not executable code.",
    "body": "Use the saved solo-setup lesson as the concrete artifact rather than narrating seven new frameworks. Explain its assumed source, solo-setup requirement and invitation decision, product lead owner, version 1, and review after the pilot or a brief change. User evidence remains pending. The seven transformations preserve the broader source material: guidelines to machine-readable rules, design systems to consumable systems, templates to canonical prompts, documentation to context packages, critique to rubrics, SOPs to human–AI workflows, efficiency measures to speed plus quality and outcomes. A YAML-like package does not enforce itself. Integration, permissions, validation, and human review are still required. DesignOps maintains the package; domain experts author, approve, and revisit its validity.",
    "transition": "Maintaining this guidance costs time. How would we know the workflow is worth adopting?"
  },
  {
    "seconds": 100,
    "takeaway": "Evaluate the whole workflow: speed, review cost, quality, coherence, and customer outcomes.",
    "visual": "A shared comparison table has Baseline, Pilot and Change headings once; category groups separate workflow outcomes from leading/process signals.",
    "interaction": "All 10 measures opens the full dialog. Definitions opens appendix 22 and returns here; entering definitions from FAQ returns to FAQ instead. Closing the dialog restores its opener.",
    "body": "These are approximate comparison values informed by the presenter's early experimentation, not exact measurements, benchmarks, or a forecast. The presenter supplied design production-rate ranges; the other nine comparisons remain unchanged from the earlier synthetic values, reported as close to informal observations. Underlying records, sample sizes, and methods have not been supplied, so do not claim validated results or causal ROI. Baseline to pilot: median brief-to-validated-concept time 9 to 6 days; design production rate ~3–4/wk to ~1–2/wk, accepted artifacts / in a team with 8w E2E Cycle. The change ≈−2/wk is a midpoint estimate: 1.5 minus 3.5, not an independently observed change. Weekly rate and the team's eight-week end-to-end cycle are different concepts; do not divide by eight or infer an eight-week total. Production rate decreases, so do not frame it as an improvement. Production effort is 18 to 11 hours per concept; review effort 4 to 6 hours; rework 35% to 24%; applicable system checks passed 78% to 90%; open accessibility/quality defects 6 to 4 per 10 screens; design-to-code divergence 28% to 18%; experiments 1 to 2 per week; approved-context reuse 25% to 70%. Review effort rises in this comparison: faster generation does not imply less review. Leading/process measures signal behavior and readiness; outcome measures test delivered workflow results. System compliance is a leading quality signal, not proof of user benefit. Both sets of approximate values and their changes appear together, without competing bar scales. Percentage measures use percentage-point changes, not relative percentages. Match work scope, staffing, artifact definition, and evaluation criteria; include sample sizes and dispersion before presenting a validated comparison. Track customer task success separately. No customer outcome data is supplied.",
    "transition": "Return to the central question. The proposed workflow's pilot reference remains available in appendix 25."
  },
  {
    "seconds": 90,
    "takeaway": "AI doesn't eliminate the need for DesignOps. It makes DesignOps infrastructure.",
    "visual": "A quiet question, a deliberate answer reveal, and three concluding statements.",
    "interaction": "Stage moment 3: pause, press Right to reveal DesignOps, then Right for FAQ. Left hides the answer before moving back. In review, Next or a forward navigation key reveals the answer first, then advances to Let's talk. There is no separate reveal button.",
    "body": "Use 90 seconds for the closing. Slow down. Read the question and leave space: if AI becomes part of how we design products, who designs the system in which AI operates? Reveal DesignOps. This is not a territorial claim that one function owns all AI. It is an invitation for DesignOps to connect domain expertise, governance, knowledge, workflows, and evaluation. AI creates capacity. Systems create consistency. Stewardship creates trust. DesignOps connects all three. The future is not merely managing work around design; it is designing the infrastructure through which humans and AI create products together. The practical challenge is one workflow, a baseline, a maintained context package, named human checkpoints, and evidence that quality has not been traded for speed. End on the thesis and pause rather than adding more tools.",
    "transition": "Let's talk. Where is your team generating faster than it can maintain coherence?"
  },
  {
    "seconds": 600,
    "takeaway": "Use the conversation to connect the operating model to the audience's constraints.",
    "visual": "A conversation invitation with LinkedIn and GitHub contact links; the questions are on the next slide.",
    "interaction": "Next opens FAQ. Contact links open externally only when selected. No QR code.",
    "body": "Reserve ten minutes total across Let's talk and FAQ, not ten minutes per slide. Invite specific workflow examples rather than abstract predictions. Keep the contact slide visible while opening the conversation; advance to FAQ when a question benefits from a supporting answer. The 600-second discussion allocation is recorded here once; FAQ adds no extra time.",
    "transition": "Continue to FAQ for the eight supporting questions."
  },
  {
    "seconds": 0,
    "takeaway": "Use the eight questions to connect discussion to the relevant supporting evidence.",
    "visual": "Eight accessible question links, each leading to its corresponding appendix answer.",
    "interaction": "Select a question to open its answer; the answer returns to FAQ. Definitions opened from the dashboard and the pilot opened from shared production keep their original return destinations.",
    "body": "Continue the same ten-minute discussion started on Let's talk; do not restart the clock. The eight answers cover governance ownership, the evolving role, AI-ready design systems, model changes, measurement, the context stack, the product lifecycle, and starting a pilot. The stack and lifecycle are supporting lenses, not additional models to memorize. If asked whether this is just AI governance, return to the decision trail: governance is one component; context, workflows, evaluation, and enablement make it useful. If asked what to do tomorrow: map, identify, codify, standardize, and measure.",
    "transition": "Return to FAQ after each answer, or back to Let's talk for contact details."
  },
  {
    "seconds": 0,
    "takeaway": "Risk boundaries, access, operating-model design, and product judgment need explicit owners.",
    "visual": "Four ownership domains; none claims the entire AI operating model.",
    "interaction": "Back to FAQ returns to the topic menu.",
    "body": "Security and Legal establish organizational risk boundaries; IT and platform teams manage technology and access. DesignOps translates policy into useful workflow conditions with domain experts. Product, research, design, and engineering own their decisions and release quality. Good governance removes repetitive ambiguity through approved paths, risk-based human checkpoints, escalation, and documented exceptions. Bad governance creates an unnecessary approval queue. Specific accountabilities must be agreed locally; the slide is a discussion model, not a universal RACI.",
    "transition": "Return to FAQ."
  },
  {
    "seconds": 0,
    "takeaway": "DesignOps architects the operating environment rather than building everyone's AI tools.",
    "visual": "Six responsibilities and five kinds of product work.",
    "interaction": "Back to FAQ returns to the topic menu.",
    "body": "The emerging role includes governance, design intelligence, workflow architecture with subject-matter experts, quality systems, enablement, and measurement. 'AI Ops Systems Architect' is a possible direction, not a prescribed title. The source's prototyper, builder, sweeper, grower, and maintainer archetypes are retained as kinds of work: prototype, build, simplify/improve, grow, and maintain. Their risk and evaluation needs differ. The source includes an unverified external attribution; this deck makes no authorship claim for the archetypes. Do not turn this model into a requirement for DesignOps to become an AI engineering team.",
    "transition": "Return to FAQ."
  },
  {
    "seconds": 0,
    "takeaway": "AI readiness adds meaning, constraints, examples, and evaluation to an existing design system.",
    "visual": "Foundation plus machine-consumable reasoning, with shared-context ownership underneath.",
    "interaction": "Back to FAQ returns to the topic menu.",
    "body": "Keep tokens, components, patterns, and guidelines. Add semantic metadata, usage rules, examples, constraints, accessibility requirements, relationships, code equivalents, and evaluation criteria. Start with one pattern rather than translating the whole library. Include valid and invalid examples, allowed data access, provenance, version, freshness, and a named owner. AI-readable does not mean publicly accessible, indiscriminately retrievable, or automatically correct. Research and existing product experiences remain important context beyond the component library.",
    "transition": "Return to FAQ."
  },
  {
    "seconds": 0,
    "takeaway": "Build durable knowledge, rules, workflows, and evaluation around replaceable models.",
    "visual": "Shared knowledge, rules, workflows, and evaluation remain as models change.",
    "interaction": "Back to FAQ returns to the topic menu.",
    "body": "Models and tools will change. Preserve the institutional knowledge, permissions, workflows, examples, and acceptance criteria that define how the organization operates. Model-agnostic does not mean zero adaptation: tool capabilities, context limits, privacy controls, and behavior differ. Re-run a representative evaluation set before a model switch. Canonical prompts are co-authored by domain experts and governed as versioned knowledge artifacts, not selected by DesignOps alone. Standardization creates an informed starting point, not a ban on exploration.",
    "transition": "Return to FAQ."
  },
  {
    "seconds": 0,
    "takeaway": "Operational definitions, comparable work, and evidence qualifications matter more than dashboard polish.",
    "visual": "Definitions, units, and collection methods beside a concise pilot protocol.",
    "interaction": "Back returns to the originating dashboard or FAQ, including in Stage. Direct entry defaults to the dashboard.",
    "body": "Define 'validated concept' before collecting time: reviewer acceptance plus the agreed user-evidence threshold. Count accepted artifacts, not raw generations. Separate elapsed days from person-hours, production from review, and quality defects from severity. Define denominators for compliance, rework, reuse, and divergence. Complete experiments include a recorded learning decision, not just a release. Compare similar tasks and staffing; document sample size, spread, exclusions, and complexity. Use approved data collection with appropriate privacy controls. Review effort may increase while total effort falls, but a small observational pilot cannot establish causality. Set decision thresholds in advance and track customer task success or other relevant product outcomes. Dashboard values are preliminary approximations informed by the presenter's early experimentation, not validated measurements.",
    "transition": "Return to the dashboard or FAQ."
  },
  {
    "seconds": 0,
    "takeaway": "The differentiator is governed organizational knowledge, not loyalty to a model.",
    "visual": "A five-layer AI design stack, built from models to connecting DesignOps infrastructure.",
    "interaction": "Stage: all five layers are resolved. Review: Build the context stack adds one highlighted layer per click; after all layers it resets to the foundation.",
    "body": "Models provide capabilities. Agents and tools connect capabilities to tasks. Organizational context provides what models do not inherently know: tokens, components, research, product knowledge, brand, accessibility, terminology, workflows, repositories, PRs, existing experiences, and past decisions. Stewardship adds guardrails, exclusions, evaluation, and human checkpoints. DesignOps connects the layers. The diagram is a responsibility model, not a mandatory software architecture. Do not feed all organizational data into a model: permissions, privacy, provenance, source quality, freshness, and ownership determine what context may be used. A design system is one part of organizational memory, not the whole memory.",
    "transition": "Return to FAQ, or use the lifecycle backup to locate these responsibilities in the work."
  },
  {
    "seconds": 0,
    "takeaway": "Governance, context, and evaluation follow the work across every lifecycle stage.",
    "visual": "Five lifecycle phases above a persistent shared-infrastructure rail; detailed per-phase panels remain in review.",
    "interaction": "Stage: a static five-phase overview. Review: select a phase to reveal AI assistance, DesignOps infrastructure, and the human checkpoint.",
    "body": "Discover: AI can cluster and retrieve research; DesignOps supports consent, traceability, source quality, and reusable knowledge. Define: AI can draft briefs and identify gaps; shared brief structure, product vocabulary, and source context keep framing grounded. Design: alternatives and prototypes rely on system rules, prompts, accessibility constraints, and critique. Build: generated code needs component metadata, supported patterns, tokens, validation, and paired review. Measure: AI can summarize observations, but people interpret outcomes, record caveats, and decide what should change. Do not turn this into a tool catalog. Discuss one or two phases with the persistent rail; use review mode only when the detailed panels are needed.",
    "transition": "Return to FAQ. The keynote's onboarding decision is one example at the design-to-build boundary."
  },
  {
    "seconds": 0,
    "takeaway": "A 30-day pilot can begin at team, product-area, or enterprise level with clear ownership.",
    "visual": "Four verbs on a timeline, one concrete output per week, and an explicit adopt / revise / stop decision.",
    "interaction": "The return link goes back to shared production (slide 12), or FAQ when opened from that menu. Direct entry defaults to shared production.",
    "body": "Days 1–7: map actual AI use and identify inconsistency, quality gaps, and risk. Days 8–14: select one useful, bounded workflow and package relevant organizational knowledge. Days 15–21: name decision owners, define human checkpoints and evaluation criteria, and establish a baseline before the pilot. Days 22–30: run comparable work and decide whether to adopt, revise, or stop. Avoid sensitive or high-risk first pilots unless the appropriate governance is already in place. At team level, design and engineering leads can own a single workflow with DesignOps facilitation. At product-area level, PM, research, design, engineering, and a system owner coordinate shared patterns and cross-team outcomes. At enterprise level, federated product ownership works within Security, Legal, IT, and platform guardrails. DesignOps connects the altitudes; it does not unilaterally own policy or product decisions. Calendar windows are a suggested starting plan, not promised delivery dates.",
    "transition": "Return to the central question: if AI participates in design, who designs its operating environment?"
  }
];

let lifecycle = [
  ["AI CONTRIBUTION", "Cluster findings, synthesize evidence, retrieve prior research.", "DESIGNOPS INFRASTRUCTURE", "Consent, source quality, traceability, reusable research.", "HUMAN CHECKPOINT", "Researcher verifies sources, uncertainty, and interpretation."],
  ["AI CONTRIBUTION", "Draft briefs, summarize requirements, identify gaps.", "DESIGNOPS INFRASTRUCTURE", "Canonical brief, product vocabulary, shared mission and metrics.", "HUMAN CHECKPOINT", "PM + domain experts agree on the problem and success criteria."],
  ["AI CONTRIBUTION", "Explore alternatives, generate concepts, prototype interactions.", "DESIGNOPS INFRASTRUCTURE", "System context, canonical prompts, accessibility, critique rubric.", "HUMAN CHECKPOINT", "Designers evaluate user need, craft, coherence, and evidence."],
  ["AI CONTRIBUTION", "Generate components, modify code, propose test cases.", "DESIGNOPS INFRASTRUCTURE", "Tokens, metadata, coding guidelines, design/code validation.", "HUMAN CHECKPOINT", "Designer + engineer inspect feasibility, behavior, and access."],
  ["AI CONTRIBUTION", "Summarize results, surface patterns, compare observations.", "DESIGNOPS INFRASTRUCTURE", "Metric definitions, decision logs, versioned learning packages.", "HUMAN CHECKPOINT", "Team interprets outcomes and decides what context should change."]
];

let metrics = [
  { name: "Production effort", group: 0, baseline: 18, pilot: 11, max: 24, unit: "person-hours / accepted concept", short: "h", better: "lower", scale: "0–24 h" },
  { name: "Review effort", group: 0, baseline: 4, pilot: 6, max: 8, unit: "person-hours / accepted concept", short: "h", better: "context", scale: "0–8 h" },
  { name: "Design-system compliance", group: 0, baseline: 78, pilot: 90, max: 100, unit: "% applicable checks passed", short: "%", better: "higher", scale: "0–100%" },
  { name: "Approved-context reuse", group: 0, baseline: 25, pilot: 70, max: 100, unit: "% artifacts citing approved context", short: "%", better: "higher", scale: "0–100%" },
  { name: "Experimentation cadence", group: 0, baseline: 1, pilot: 2, max: 4, unit: "completed experiments / week", short: "/wk", better: "context", scale: "0–4 /wk" },
  { name: "Brief → validated concept", group: 1, baseline: 9, pilot: 6, max: 12, unit: "median elapsed days", short: "d", better: "lower", scale: "0–12 d" },
  { name: "Design production rate", group: 1, baseline: [3, 4], pilot: [1, 2], max: 4, unit: "accepted artifacts / in a team with 8w E2E Cycle", short: "/wk", better: "higher", scale: "0–4 /wk" },
  { name: "Rework / revision rate", group: 1, baseline: 35, pilot: 24, max: 100, unit: "% artifacts needing major revision", short: "%", better: "lower", scale: "0–100%" },
  { name: "Accessibility / quality defects", group: 1, baseline: 6, pilot: 4, max: 10, unit: "open defects / 10 reviewed screens", short: "/10", better: "lower", scale: "0–10 /10" },
  { name: "Design-to-code divergence", group: 1, baseline: 28, pilot: 18, max: 100, unit: "% audited UI instances divergent", short: "%", better: "lower", scale: "0–100%" }
];

let pairLabels = ["What the user needs", "What AI got wrong", "What the team changes", "Try the fix", "Save the lesson", "Check the next result"];
let pairEvidence = [
  { title: "Let me start on my own.", entries: [
    ["The situation", "I do not have a teammate to invite yet."],
    ["What I need", "Name my workspace and start working."]
  ], verdict: "Inviting people should come later." },
  { title: "The form asks for someone else.", entries: [
    ["Workspace name", "Required"],
    ["Teammate email", "Also required before I can continue."]
  ], verdict: "I have no one to invite. I am stuck." },
  { title: "Create first. Invite later.", entries: [
    ["Designer + engineer decide", "Remove the required invitation from setup."],
    ["Why", "Someone starting alone must be able to finish."]
  ], verdict: "The team changes the flow—not the user's goal." },
  null,
  { title: "Do not fix this twice.", entries: [
    ["Shared guidance · version 1", "For solo setup, offer invitations after creation."],
    ["Reason · from the brief", "The person may have no one to invite yet."],
    ["Owner · product lead", "Review after the pilot or if the brief changes."]
  ], verdict: "Saved by DesignOps · user validation pending." },
  { title: "Can the next person start alone?", entries: [
    ["The next proposed form", "Workspace name first. Invitations optional."],
    ["The review", "Setup works without a teammate email."],
    ["Still to check", "Accessibility and whether it works for real users."]
  ], verdict: "This requirement is met. The review is not over." }
];

function metricValue(metric, scenario) {
  const value = metric[scenario];
  return `${Array.isArray(value) ? `~${value.join("–")}` : value}${metric.short}`;
}

function metricDelta(metric) {
  const midpoint = value => Array.isArray(value) ? (value[0] + value[1]) / 2 : value;
  return midpoint(metric.pilot) - midpoint(metric.baseline);
}

function metricChange(metric) {
  const delta = metricDelta(metric);
  const approximate = Array.isArray(metric.baseline) || Array.isArray(metric.pilot);
  const units = metric.short === "%" ? " pp" : `${approximate ? "" : " "}${metric.short}`;
  return `${approximate ? "≈" : ""}${delta > 0 ? "+" : "−"}${Math.abs(delta)}${units}`;
}

const slides = [...document.querySelectorAll(".slide")];
const $ = (selector) => document.querySelector(selector);
const englishData = { notes, lifecycle, metrics, pairLabels, pairEvidence };
const state = { index: 0, cause: 0, stack: 0, pair: 0, life: 0, formResult: "idle", formName: "", fullscreen: "" };
const appendixOrigins = { 18: 17, 19: 17, 20: 17, 21: 17, 22: 14, 23: 17, 24: 17, 25: 12 };
const pairTabLabels = ["User need", "AI mistake", "Team decision", "Working form", "Saved lesson", "Next review"];
let stageReview;

function setLanguage(nextLanguage) {
  if (!["en", "es"].includes(nextLanguage)) throw new RangeError(`Unsupported language: ${nextLanguage}`);
  if (language === nextLanguage) return;
  const scroll = [$("#presentation").scrollTop, $("#notes").scrollTop];
  language = nextLanguage;
  translateMarkup();
  ({ notes, lifecycle, metrics, pairLabels, pairEvidence } = translateData(englishData));
  setAligned($("#fragmentation").classList.contains("aligned"));
  renderPair();
  renderFormResult();
  if ($("#workspace-name").validity.customError) $("#workspace-name").setCustomValidity(t("Enter a workspace name."));
  renderStackCopy();
  renderLoopLabels();
  selectLife(state.life);
  buildMetrics();
  renderDefinitions();
  document.querySelectorAll("#slide-index a").forEach((link, index) => {
    link.lastChild.textContent = slides[index].dataset.title;
  });
  renderFullscreen();
  renderSlide(state.index);
  $("#presentation").scrollTop = scroll[0];
  $("#notes").scrollTop = scroll[1];
  fitStage();
}

function clock(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

function fitStage() {
  const viewport = $("#viewport");
  const scale = Math.min(viewport.clientWidth / 1600, viewport.clientHeight / 900);
  $("#stage").style.transform = `scale(${scale})`;
  $("#stage").style.left = `${(viewport.clientWidth - 1600 * scale) / 2}px`;
  $("#stage").style.top = `${(viewport.clientHeight - 900 * scale) / 2}px`;
}

function markCurrent(selector, index) {
  document.querySelectorAll(selector).forEach((item, i) => {
    if (i === index) item.setAttribute("aria-current", "step");
    else item.removeAttribute("aria-current");
  });
}

function renderStack() {
  document.querySelectorAll("[data-layer]").forEach((layer) => {
    const index = Number(layer.dataset.layer);
    const current = !stageReview && index === state.stack;
    const built = Boolean(stageReview) || index <= state.stack;
    layer.classList.toggle("revealed", built);
    if (current) layer.setAttribute("aria-current", "step");
    else layer.removeAttribute("aria-current");
    layer.setAttribute("role", "group");
    layer.setAttribute("aria-label", t`Layer ${index + 1} of 5: ${layer.querySelector("h3").textContent}. ${current ? t("Current layer") : built ? t("Built") : t("Not yet built")}.`);
  });
}

function updateNotes() {
  const note = notes[state.index];
  const elapsed = notes.slice(0, Math.min(state.index, keynoteCount)).reduce((sum, item) => sum + item.seconds, 0);
  const timing = state.index < keynoteCount ? t`${clock(elapsed)}–${clock(elapsed + note.seconds)} · ${note.seconds} seconds` : state.index <= keynoteCount + 1 ? t("Shared 10-minute discussion · Let's talk + FAQ · outside keynote timing") : t("Optional backup · outside keynote timing");
  const content = $("#notes-content");
  content.replaceChildren();
  const add = (tag, text, className) => {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) element.className = className;
    content.append(element);
  };
  add("p", timing, "note-time");
  add("h3", `${state.index + 1}. ${slides[state.index].dataset.title}`);
  for (const [label, text] of [
    [t("TAKEAWAY"), note.takeaway], ["VISUAL", note.visual], [t("INTERACTION"), note.interaction],
    [t("SPEAKER NOTES"), note.body], [t("TRANSITION"), note.transition]
  ]) {
    add("h4", label);
    add("p", text);
  }
  $("#notes").scrollTop = 0;
}

function renderSlide(index) {
  const oldSlide = slides[state.index];
  const focusWasInSlide = oldSlide.contains(document.activeElement);
  const destination = index + 1;
  const origin = state.index + 1;
  if ((destination === 22 && [14, 17].includes(origin)) || (destination === 25 && [12, 17].includes(origin))) {
    appendixOrigins[destination] = origin;
  }
  state.index = Math.max(0, Math.min(slides.length - 1, index));
  slides.forEach((slide, i) => {
    slide.hidden = i !== state.index;
    slide.classList.toggle("active", i === state.index);
    slide.setAttribute("aria-label", t`${i + 1} of ${slides.length}: ${slide.dataset.title}`);
  });
  const slide = slides[state.index];
  $("#counter").textContent = state.index < keynoteCount ? `${String(state.index + 1).padStart(2, "0")} / ${mainSlideCount}` : state.index === keynoteCount ? `${mainSlideCount}/${mainSlideCount}` : state.index === mainSlideCount ? slide.dataset.title : `B${state.index - mainSlideCount} / ${slides.length - mainSlideCount - 1}`;
  $("#slide-title").textContent = slide.dataset.title;
  $("#act-label").textContent = slide.dataset.act;
  $("#progress").value = Math.min(state.index + 1, mainSlideCount);
  $("#progress").hidden = state.index >= mainSlideCount;
  $("#progress").setAttribute("aria-valuetext", t`Presentation slide ${Math.min(state.index + 1, mainSlideCount)} of ${mainSlideCount}`);
  $("#previous").disabled = state.index === 0;
  $("#next").disabled = state.index === slides.length - 1;
  updateNext();
  renderReturnLinks();
  document.querySelectorAll("#slide-index a").forEach((link, i) => link.setAttribute("aria-current", String(i === state.index)));
  document.title = `${state.index + 1}. ${slide.dataset.title} — DesignOps`;
  $("#announcement").textContent = `${$("#counter").textContent}: ${slide.dataset.title}`;
  $("#presentation").scrollTop = 0;
  updateNotes();
  if (focusWasInSlide && oldSlide !== slide) {
    const heading = slide.querySelector("h1, h2");
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  }
}

function renderReturnLinks() {
  for (const [slide, selector] of [[22, "#definitions-return"], [25, "#pilot-return"]]) {
    const origin = appendixOrigins[slide];
    const link = $(selector);
    link.href = `#${origin}`;
    link.textContent = `↖ ${origin === 17 ? t("Back to FAQ") : origin === 14 ? t("Back to dashboard") : t("Back to shared production")}`;
  }
}

function navigate(index) {
  const target = Math.max(0, Math.min(slides.length - 1, index));
  if (location.hash === `#${target + 1}`) renderSlide(target);
  else location.hash = String(target + 1);
}

function readHash() {
  const hash = location.hash.slice(1);
  return /^\d+$/.test(hash) ? Math.max(0, Math.min(slides.length - 1, Number(hash) - 1)) : 0;
}

function toggleNotes(force) {
  if (stageReview) return;
  const open = force === undefined ? $("#notes").hidden : force;
  $("#notes").hidden = !open;
  $("#notes-toggle").setAttribute("aria-expanded", String(open));
  if (open) $("#notes").focus();
  else $("#notes-toggle").focus();
}

function setStageMode(active) {
  if (active === Boolean(stageReview)) return;
  if (active) {
    // Stage builds are temporary; review's diagram and form states survive a rehearsal.
    stageReview = {
      pair: state.pair,
      cause: state.cause,
      aligned: $("#fragmentation").classList.contains("aligned"),
      closing: !$("#closing-reveal").hidden,
      name: $("#workspace-name").value,
      validity: $("#workspace-name").validity.customError,
      invalid: $("#workspace-name").getAttribute("aria-invalid"),
      formResult: state.formResult,
      formName: state.formName
    };
    document.querySelectorAll("dialog[open]").forEach(dialog => dialog.close());
    $("#notes").hidden = true;
    $("#notes-toggle").setAttribute("aria-expanded", "false");
    state.cause = 0;
    setAligned(false);
    setPair(0, true);
    setClosing(false);
  } else {
    const saved = stageReview;
    stageReview = undefined;
    state.cause = saved.cause;
    setAligned(saved.aligned);
    setPair(saved.pair);
    setClosing(saved.closing);
    $("#workspace-name").value = saved.name;
    $("#workspace-name").setCustomValidity(saved.validity ? t("Enter a workspace name.") : "");
    if (saved.invalid === null) $("#workspace-name").removeAttribute("aria-invalid");
    else $("#workspace-name").setAttribute("aria-invalid", saved.invalid);
    state.formResult = saved.formResult;
    state.formName = saved.formName;
    renderFormResult();
  }
  document.body.classList.toggle("stage-mode", active);
  $("#stage-toggle").setAttribute("aria-pressed", String(active));
  $("#stage-exit").hidden = !active;
  $("#stage-exit").textContent = t("Exit stage · Esc");
  document.querySelectorAll("[data-life]").forEach(button => { button.disabled = active; });
  renderStack();
  fitStage();
  (active ? $("#presentation") : $("#stage-toggle")).focus({ preventScroll: true });
  $("#announcement").textContent = active ? $("#stage-help").textContent : t("Review restored. Notes remain closed.");
}

async function exitStage() {
  setStageMode(false);
  if (document.fullscreenElement) await fullscreen();
}

function setAligned(aligned) {
  $("#fragmentation").classList.toggle("aligned", aligned);
  $("#fragment-caption").textContent = aligned ? t("Distinct ideas. Shared constraints. Accountable decisions.") : t("Different patterns. Conflicting terminology. Unowned decisions.");
  renderCause();
}

function updateNext() {
  const next = $("#next");
  const closing = state.index === 14;
  const revealed = !$("#closing-reveal").hidden;
  const demoBuild = state.index === 5 && state.pair < 5;
  const paradox = state.index === 3;
  const aligned = $("#fragmentation").classList.contains("aligned");
  const paradoxBuild = paradox && !aligned;
  const label = paradoxBuild ? (state.cause ? t("Apply shared standards") : t("Activate all patterns")) : demoBuild ? t("Next example state") : closing ? (revealed ? t("Next slide: Let's talk") : t("Reveal the answer")) : t("Next slide");
  next.setAttribute("aria-label", label);
  next.title = label;
  next.classList.toggle("build-action", paradoxBuild || demoBuild || (closing && !revealed));
  $("#previous").setAttribute("aria-label", paradox && aligned ? t("Remove shared standards") : paradox && state.cause ? t("Deactivate all patterns") : state.index === 5 && state.pair > 0 ? t("Previous example state") : closing && revealed ? t("Hide the answer") : t("Previous slide"));
  if (closing) {
    next.setAttribute("aria-controls", "closing-reveal");
    next.setAttribute("aria-expanded", String(revealed));
  } else if (paradox) {
    next.setAttribute("aria-controls", "causal-chain fragmentation");
    next.removeAttribute("aria-expanded");
  } else if (state.index === 5) {
    next.setAttribute("aria-controls", "pair-panel");
    next.removeAttribute("aria-expanded");
  } else {
    next.removeAttribute("aria-controls");
    next.removeAttribute("aria-expanded");
  }
}

function setClosing(revealed) {
  $("#closing-reveal").hidden = !revealed;
  updateNext();
  if (state.index === 14) $("#announcement").textContent = revealed ? t("DesignOps. AI doesn't eliminate the need for DesignOps. It makes DesignOps infrastructure.") : t("Who designs the system in which AI operates?");
}

function advanceReview(direction = 1) {
  if (state.index === 3) {
    const aligned = $("#fragmentation").classList.contains("aligned");
    if (direction < 0 && aligned) {
      setAligned(false);
      return;
    }
    if (direction > 0 && !aligned) {
      if (!state.cause) {
        state.cause = 1;
        renderCause();
      } else setAligned(true);
      return;
    }
    if (direction < 0 && state.cause > 0) {
      state.cause = 0;
      renderCause();
      return;
    }
  }
  if (state.index === 5 && (direction > 0 ? state.pair < 5 : state.pair > 0)) {
    setPair(state.pair + direction);
    return;
  }
  if (state.index === 14 && $("#closing-reveal").hidden === (direction > 0)) {
    setClosing(direction > 0);
    return;
  }
  if (direction < 0 && appendixOrigins[state.index + 1]) {
    navigate(appendixOrigins[state.index + 1] - 1);
    return;
  }
  navigate(state.index + direction);
}

async function fullscreen() {
  if (!document.fullscreenEnabled) {
    state.fullscreen = "unavailable";
    $("#announcement").textContent = t("Fullscreen is unavailable in this browser. Open index.html in a desktop browser to present fullscreen.");
    renderFullscreen();
    return;
  }
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch (error) {
    state.fullscreen = "blocked";
    $("#announcement").textContent = t("Could not enter fullscreen. You can continue in windowed Stage.");
    renderFullscreen();
    console.error(t("Fullscreen request failed"), error);
  }
}

function renderFullscreen() {
  const active = Boolean(document.fullscreenElement);
  const label = state.fullscreen === "unavailable" ? t("Fullscreen unavailable")
    : state.fullscreen === "blocked" ? t("Fullscreen blocked")
    : active ? t("Exit fullscreen") : t("Fullscreen");
  $("#fullscreen").textContent = label;
  $("#fullscreen").setAttribute("aria-label", state.fullscreen ? label : active ? t("Exit fullscreen") : t("Enter fullscreen"));
  $("#stage-exit").textContent = state.fullscreen === "unavailable" ? t("Fullscreen unavailable · Exit stage (Esc)")
    : state.fullscreen === "blocked" ? t("Fullscreen blocked · Exit stage (Esc)") : t("Exit stage · Esc");
}

function selectLife(index) {
  state.life = index;
  document.querySelectorAll("[data-life]").forEach((button, i) => button.setAttribute("aria-pressed", String(i === index)));
  const detail = $("#life-detail");
  detail.replaceChildren();
  for (let i = 0; i < 6; i += 2) {
    const cell = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = lifecycle[index][i];
    const body = document.createElement("p");
    body.textContent = lifecycle[index][i + 1];
    cell.append(title, body);
    detail.append(cell);
  }
}

function buildMetrics() {
  $("#metric-dashboard").replaceChildren();
  $("#metric-tables").replaceChildren();
  const make = (tag, text, className) => {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) element.className = className;
    return element;
  };
  const dashboard = document.createElement("table");
  dashboard.className = "dashboard-table";
  const header = dashboard.createTHead().insertRow();
  for (const label of [t("Metric / unit"), t("Baseline"), t("Pilot"), t("Change")]) {
    const cell = make("th", label);
    cell.scope = "col";
    header.append(cell);
  }
  for (const [group, indices] of [[1, [5, 6]], [0, [1, 2]]]) {
    const body = dashboard.createTBody();
    const category = make("th", group === 0 ? t("LEADING / PROCESS") : t("WORKFLOW OUTCOME"), "metric-category");
    category.colSpan = 4;
    category.scope = "rowgroup";
    body.insertRow().append(category);
    for (const index of indices) {
      const metric = metrics[index];
      const row = body.insertRow();
      row.className = `metric-card${index === 1 || (metric.better === "higher" && metricDelta(metric) < 0) ? " warning" : ""}`;
      row.dataset.metric = String(index);
      const name = make("th", metric.name, "metric-name");
      name.scope = "row";
      name.append(make("small", metric.unit, "metric-unit"));
      row.append(name);
      for (const [i, value] of [metricValue(metric, "baseline"), metricValue(metric, "pilot"), metricChange(metric)].entries()) {
        const cell = row.insertCell();
        cell.textContent = value;
        cell.dataset.label = [t("Baseline"), t("Pilot"), t("Change")][i];
        if (i === 2 && Array.isArray(metric.baseline)) cell.append(make("small", t("Midpoint estimate"), "metric-estimate"));
      }
    }
  }
  $("#metric-dashboard").append(dashboard);
  [t("LEADING / PROCESS SIGNALS"), t("WORKFLOW OUTCOME MEASURES")].forEach((label, group) => {
    const table = document.createElement("table");
    table.className = "metric-table";
    table.append(make("caption", label));
    const head = table.createTHead().insertRow();
    const headers = [t("Metric / unit"), t("Baseline"), t("Pilot"), t("Change")];
    for (const label of headers) {
      const th = make("th", label);
      th.scope = "col";
      head.append(th);
    }
    const body = table.createTBody();
    metrics.forEach((metric) => {
      if (metric.group !== group) return;
      const row = body.insertRow();
      const name = make("th", metric.name);
      name.scope = "row";
      name.append(make("small", metric.unit));
      row.append(name);
      for (const [i, value] of [metricValue(metric, "baseline"), metricValue(metric, "pilot"), metricChange(metric)].entries()) {
        const cell = row.insertCell();
        cell.textContent = value;
        cell.dataset.label = headers[i + 1];
        if (i === 2 && (Array.isArray(metric.baseline) || Array.isArray(metric.pilot))) {
          cell.append(make("small", t("Midpoint estimate")));
        }
      }
    });
    $("#metric-tables").append(table);
  });
}

function setPair(step, reset = false) {
  state.pair = step;
  if (reset) {
    $("#prototype-form").reset();
    $("#workspace-name").setCustomValidity("");
    $("#workspace-name").removeAttribute("aria-invalid");
    state.formResult = "idle";
    state.formName = "";
    renderFormResult();
  }
  renderPair();
}

function renderPair() {
  const step = state.pair;
  $("#prototype-scene").dataset.step = String(step);
  $("#decision-evidence").hidden = step === 3;
  $("#prototype-form").hidden = step !== 3;
  const evidence = pairEvidence[step];
  if (evidence) {
    $("#evidence-title").textContent = evidence.title;
    if (language === "es" && step === 0) {
      const emphasis = document.createElement("em");
      emphasis.textContent = "Registro";
      $("#evidence-title").replaceChildren(emphasis, evidence.title.slice("Registro".length));
    }
    $("#evidence-details").replaceChildren();
    for (const [label, text] of evidence.entries) {
      const term = document.createElement("dt");
      term.textContent = label;
      const detail = document.createElement("dd");
      detail.textContent = text;
      $("#evidence-details").append(term, detail);
    }
    $("#evidence-verdict").textContent = evidence.verdict;
  }
  $("#pair-count").textContent = t`STEP ${step + 1} OF 6`;
  $("#pair-label").textContent = pairLabels[step];
  document.querySelectorAll("[data-pair]").forEach((tab, index) => {
    const selected = step === index;
    tab.textContent = `${index + 1}. ${t(pairTabLabels[index])}`;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  $("#pair-panel").setAttribute("aria-labelledby", `pair-tab-${step}`);
  updateNext();
}

function renderCause() {
  const steps = [...document.querySelectorAll("#causal-chain li")];
  const active = Boolean(state.cause);
  steps.forEach(item => item.classList.toggle("current", active));
  for (const selector of [".branch-lines path", ".branch-outputs span"]) {
    document.querySelectorAll(selector).forEach(item => item.classList.toggle("lit", active));
  }
  markCurrent("#causal-chain li", active ? steps.length - 1 : -1);
  $("#cause-status").textContent = $("#fragmentation").classList.contains("aligned") ? t("Shared standards applied. The chain is complete.") : active ? t("All patterns activated. Context and evaluation pending.") : t("Patterns ready to activate.");
  updateNext();
}

function renderStackCopy() {
  renderStack();
  $("#stack-status").textContent = t`Layer ${state.stack + 1} of 5: ${$(`[data-layer="${state.stack}"] h3`).textContent}. ${state.stack === 4 ? t("Stack complete.") : t("Build from the foundation up.")}`;
  $('[data-action="stack"]').textContent = state.stack === 4 ? t("Rebuild from the foundation") : t("Build the context stack");
}

const actions = {
  stack() {
    state.stack = (state.stack + 1) % 5;
    renderStackCopy();
  },
  "metric-definitions"() { navigate(slides.indexOf($(".measurement-backup"))); }
};

pairTabLabels.forEach((label, index) => {
  const tab = document.createElement("button");
  tab.id = `pair-tab-${index}`;
  tab.dataset.pair = String(index);
  tab.type = "button";
  tab.setAttribute("role", "tab");
  tab.setAttribute("aria-controls", "pair-panel");
  $("#pair-tabs").append(tab);
});
$("#pair-tabs").addEventListener("keydown", event => {
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  const index = Number(event.target.dataset.pair);
  if (!Number.isInteger(index)) return;
  const target = event.key === "Home" ? 0 : event.key === "End" ? 5
    : event.key === "ArrowRight" ? (index + 1) % 6 : event.key === "ArrowLeft" ? (index + 5) % 6 : null;
  if (target === null) return;
  event.preventDefault();
  setPair(target);
  $(`#pair-tab-${target}`).focus();
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.dataset.action) actions[button.dataset.action](button);
  if (button.dataset.life !== undefined) selectLife(Number(button.dataset.life));
  if (button.dataset.pair !== undefined) setPair(Number(button.dataset.pair));
});

function renderFormResult() {
  const result = $("#prototype-result");
  const value = state.formName;
  result.className = `prototype-result${state.formResult === "idle" ? "" : ` ${state.formResult}`}`;
  result.textContent = state.formResult === "error" ? t("Enter a workspace name with 2–48 non-padding characters.")
    : state.formResult === "success" ? t`“${value}” is ready in this local demo. Nothing was saved or sent.`
    : "";
}

$("#prototype-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = $("#workspace-name");
  const value = input.value.trim();
  if (value.length < 2 || value.length > 48) {
    input.setAttribute("aria-invalid", "true");
    state.formResult = "error";
    renderFormResult();
    input.focus();
    return;
  }
  input.removeAttribute("aria-invalid");
  state.formResult = "success";
  state.formName = value;
  renderFormResult();
});
$("#workspace-name").setAttribute("aria-describedby", "workspace-hint prototype-result");
$("#workspace-name").addEventListener("invalid", event => {
  if (event.target.validity.valueMissing) event.target.setCustomValidity(t("Enter a workspace name."));
});
$("#workspace-name").addEventListener("input", event => event.target.setCustomValidity(""));

$("#previous").addEventListener("click", () => advanceReview(-1));
$("#next").addEventListener("click", () => advanceReview(1));
$("#notes-toggle").addEventListener("click", () => toggleNotes());
$("#notes-close").addEventListener("click", () => toggleNotes(false));
$("#fullscreen").addEventListener("click", fullscreen);
$("#stage-toggle").addEventListener("click", () => setStageMode(true));
$("#stage-exit").addEventListener("click", exitStage);
$("#metrics-open").addEventListener("click", () => $("#metrics-detail").showModal());
$("#metrics-close").addEventListener("click", () => $("#metrics-detail").close());
$("#overview-toggle").addEventListener("click", () => $("#overview").showModal());
$("#overview-close").addEventListener("click", () => $("#overview").close());
$("#slide-index").addEventListener("click", (event) => {
  if (event.target.closest("a")) $("#overview").close();
});

document.addEventListener("keydown", (event) => {
  if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
  if (stageReview && event.key === "Escape") {
    event.preventDefault();
    exitStage();
    return;
  }
  if (document.querySelector("dialog[open]")) return;
  if (event.target.closest("#notes")) {
    if (["Escape", "n", "N"].includes(event.key)) {
      event.preventDefault();
      toggleNotes(false);
    }
    return;
  }
  if (event.target.closest("input, textarea, select, [contenteditable='true']")) return;
  if (event.key.toLowerCase() === "l") {
    event.preventDefault();
    if (!event.repeat) setLanguage(language === "en" ? "es" : "en");
    return;
  }
  if (event.key.toLowerCase() === "s") {
    event.preventDefault();
    if (event.repeat) return;
    if (stageReview) exitStage();
    else setStageMode(true);
    return;
  }
  if (event.target.closest("form")) return;
  if (stageReview) {
    // Native form/button activation wins over the presentation's build keys.
    if (event.target.closest("form") || (event.code === "Space" && event.target.closest("button, a"))) return;
    if (["ArrowRight", "ArrowDown", "PageDown", " ", "ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
      event.preventDefault();
      if (!event.repeat) advanceReview(["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key) ? -1 : 1);
    } else if (event.key.toLowerCase() === "f") {
      event.preventDefault();
      fullscreen();
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      navigate(event.key === "Home" ? 0 : slides.length - 1);
    }
    return;
  }
  if (event.code === "Space" && event.target.closest("button, a")) return;
  switch (event.key) {
    case "ArrowRight": case "ArrowDown": case "PageDown": case " ":
      event.preventDefault();
      if (!event.repeat) advanceReview();
      break;
    case "ArrowLeft": case "ArrowUp": case "PageUp":
      event.preventDefault(); if (!event.repeat) advanceReview(-1); break;
    case "Home": event.preventDefault(); navigate(0); break;
    case "End": event.preventDefault(); navigate(slides.length - 1); break;
    case "n": case "N": event.preventDefault(); toggleNotes(); break;
    case "g": case "G": event.preventDefault(); $("#overview").showModal(); break;
    case "f": case "F": event.preventDefault(); fullscreen(); break;
    case "Escape": if (!$("#notes").hidden) toggleNotes(false); break;
  }
});

document.addEventListener("fullscreenchange", () => {
  const active = Boolean(document.fullscreenElement);
  state.fullscreen = "";
  if (!active && stageReview) setStageMode(false);
  renderFullscreen();
});
window.addEventListener("hashchange", () => renderSlide(readHash()));
new ResizeObserver(fitStage).observe($("#viewport"));
new ResizeObserver(() => {
  document.body.style.setProperty("--toolbar-height", `${$(".toolbar").getBoundingClientRect().height}px`);
}).observe($(".toolbar"));
document.querySelectorAll(".sequential .workflow-track span").forEach((item, i) => item.style.setProperty("--i", i));
slides.forEach((slide, index) => {
  const link = document.createElement("a");
  link.href = `#${index + 1}`;
  const number = document.createElement("span");
  number.textContent = String(index + 1).padStart(2, "0");
  link.append(number, document.createTextNode(slide.dataset.title));
  $("#slide-index").append(link);
});
selectLife(0);
buildMetrics();
function renderLoopLabels() {
  document.querySelectorAll(".loop-node").forEach((node, index) => {
    const item = $("#loop-summary").children[index] || document.createElement("li");
    item.textContent = [...node.querySelectorAll("text")].map((text) => text.textContent).join(" — ");
    if (!item.parentElement) $("#loop-summary").append(item);
  });
}

function renderDefinitions() {
  document.querySelectorAll(".definitions tbody tr").forEach((row) => {
    [...row.cells].forEach((cell, index) => {
      cell.dataset.label = [t("Metric"), t("Definition / unit"), t("Collection method")][index];
    });
  });
}
renderLoopLabels();
renderDefinitions();
renderCause();
renderStack();
setPair(0, true);
renderSlide(readHash());
setLanguage("es");
