"use strict";

const keynoteCount = 15;
const notes = [
  {
    seconds: 45,
    takeaway: "AI increases production capacity. DesignOps maintains organizational coherence.",
    visual: "One shared source fans out into different shapes: more output, less consistency.",
    interaction: "A short entrance trace establishes the flow motif. No automatic slide advancement.",
    body: "Open with the tension, not a list of tools. Teams can generate briefs, concepts, research summaries, and code faster than before. Faster creation does not automatically produce a coherent customer experience. We will follow one illustrative onboarding problem: a working form stops someone from starting alone. Watch how the team fixes it, saves the lesson in shared guidance, and checks the next result. Then ask what DesignOps must maintain around that work and how a bounded pilot could test its value. The example is pre-authored, not a report of organizational results.",
    transition: "What changes when production becomes distributed across the whole team?"
  },
  {
    seconds: 45,
    takeaway: "Distributed generation moves the bottleneck toward alignment, quality, and governance.",
    visual: "Four parallel lanes: product, research, design, and engineering.",
    interaction: "Stage: all four roles are resolved and visible. Review: Distribute generation activates one role per click; a fifth click resets the example.",
    body: "Each discipline gains production capacity. PMs generate briefs and hypotheses; researchers synthesize evidence; designers explore concepts; engineers generate components and tests. Generation is more distributed, but expertise is not interchangeable. The same language model can interpret the product differently in each lane. These are categories of assistance, not guarantees that outputs are accurate. Ask the room to imagine all four lanes producing simultaneously. The new constraint is agreeing on what to produce, what fits the system, and who evaluates it.",
    transition: "Before we look at that variation, a brief introduction to the person sharing this perspective."
  },
  {
    seconds: 30,
    takeaway: "Introduce yourself and the perspective you bring to DesignOps and AI.",
    visual: "A text-only introduction to Julian Alvarado, Xbox Design Ops, with his supplied biography and personal interests.",
    interaction: "No builds or controls.",
    body: "Julian Alvarado is a Senior Program Manager and Design Operations leader at Microsoft, helping Xbox Design scale through better systems, clearer processes, and responsible AI. He works across teams and studios to improve how designers plan, learn, and deliver—building resilient, people-centered creative organizations. Outside work, Julian is a daily CrossFit devotee and a “forever blue belt” in jiu-jitsu. A retired musician, he still loves live shows and enjoys drawing at home. Currently in rotation: Radiohead, Lenny Kravitz, Oasis, and Crosses. This is a concise English version of the speaker's supplied biography, with his supplied personal interests. Keep the spoken introduction to 30 seconds by summarizing your role and its connection to this talk rather than reading the full biography aloud. The keynote remains 1,200 seconds, the demo remains 270 seconds, closing remains 90 seconds, and Q&A remains 600 seconds.",
    transition: "Now return to the shared challenge: without common conditions, more output can create more variation."
  },
  {
    seconds: 60,
    takeaway: "Shared context and evaluation govern variation without eliminating useful exploration.",
    visual: "A causal chain sits above diverging output branches; a shared standards band aligns their treatment.",
    interaction: "Stage moment 1: the complete chain starts fragmented. Right advances to shared standards, then to the next slide; Left reverses it. Review retains the five-stage trace and alignment toggle.",
    body: "Read the chain deliberately: more AI, more output, more variation, more decisions, more opportunities for inconsistency. This is a conceptual mechanism, not a statistical forecast. Variation is useful during exploration; unmanaged variation becomes expensive at system boundaries. Examples include conflicting terminology, duplicated research, inaccessible patterns, undocumented AI decisions, and design-system drift. The source's '17 versions of a pattern' is rhetorical, not a measured statistic, so we do not chart it. Apply shared context and evaluation: options can remain different while obeying common constraints. A green state is an explanatory metaphor, not a claim that standards automatically eliminate defects.",
    transition: "Three questions help us govern that variation. Then we will apply them to one workspace-setup example."
  },
  {
    seconds: 60,
    takeaway: "GOVERN: what can AI do? CONTEXT: what does it know? EVALUATE: what does good look like?",
    visual: "Three strong words and three questions, with space to absorb each distinction.",
    interaction: "Static in Stage and review. The solo-setup examples and operating foundations are spoken from these notes, not competing lists on screen.",
    body: "Use one model throughout. The next demo follows someone starting a workspace alone; use that need to ground the three questions. Govern asks what AI may do and who can accept it: in this illustrative case, no real contact data enters the demo, a designer and engineer review, and a product lead owns the scoped rule. Context carries the solo-setup brief, the requirement to make invitations optional, and the supported form pattern together. Evaluate asks whether setup completes without email, while checking labels, errors, focus, and feasibility. Meeting that requirement alone cannot establish user value. These concrete checks sit within broader tool, data, privacy, risk, and release boundaries. Stewardship grounds governance; systems carry context; enablement puts all three into practice through workflows, prompts, rubrics, and training. This is the core model, not another framework to memorize.",
    transition: "Now follow those three responsibilities through the actual decision."
  },
  {
    seconds: 270,
    takeaway: "The team fixes the form. DesignOps makes the lesson available to the next team and its AI tools.",
    visual: "One current-step label and one large example surface. Six states follow the user's need, AI mistake, team decision, working form, saved lesson, and next review.",
    interaction: "Stage moment 2: Right advances the six steps, then the slide; Left reverses them. At step 4, Tab into the name-only form; native field and submit keys never advance the deck. Tab out to resume. Review keeps its buttons; Reset clears the form in either mode.",
    body: "Introduce the fictional example here: someone wants to start a workspace alone. Allow 270 seconds (4 minutes 30 seconds) for the six existing steps. The 90 seconds recovered from the removed overview slide are explanation and interaction pauses, not extra UI or an exercise: 30 seconds to let the audience absorb the blocked user need, 30 seconds for the form's validation and keyboard feedback, and 30 seconds to review why the saved lesson needs an owner and a review trigger. First: the person wants to start a workspace alone. Second: the AI-produced form requires someone else's email, so the person gets stuck. Third: the designer and engineer move invitations after workspace creation. Fourth: try the revised local form with just a workspace name; show validation and keyboard feedback if useful. Nothing is saved or sent. Fifth: explain why fixing one screen is not enough. DesignOps records the lesson with the original solo-setup assumption, the team's reason, a product lead owner, and a review date after the pilot. Put that guidance where the next team and its AI tools can use it. Sixth: the next proposed form allows setup without inviting anyone. A reviewer verifies that behavior and still checks accessibility and user outcomes. Do not claim the rule guarantees future results or that this is a real user study. Every state is pre-authored and illustrative. The distinction is simple: product experts decide what the experience should do; DesignOps helps that decision survive beyond this one screen.",
    transition: "The person can now finish setup alone. What else must the team check?"
  },
  {
    seconds: 60,
    takeaway: "Automated checks support accountable human judgment; they cannot prove design quality.",
    visual: "Multiple candidates flow through a six-part rubric to an explicit human decision.",
    interaction: "Static flow; no fabricated AI score or automatic approval.",
    body: "Walk through the rubric: approved components and tokens; identified user needs without unnecessary complexity; accessibility; brand and content principles; product strategy; and engineering feasibility. Domain experts define the standard together. Automated checks can detect specific violations, but a passing score cannot establish usefulness, coherence, or user success. A human reviewer accepts, revises, or rejects and records reasons. Keep evidence linked to decisions. Designers increasingly direct and evaluate alternatives, but craft and domain expertise remain indispensable.",
    transition: "Once we record the judgment, how do we keep it useful rather than bury it in an archive?"
  },
  {
    seconds: 70,
    takeaway: "Keep the decision and its reason in shared guidance, then check the next result.",
    visual: "A complete five-stage learning sequence on stage; a closed loop around organizational memory in review.",
    interaction: "Stage: the whole sequence is static, ending with re-evaluation. Review: Follow one learning cycle highlights a stage per click, wrapping back to generation.",
    body: "Return to the decision to offer invitations after setup. Do not save only the corrected form: save why the team changed it and who will review that guidance. Follow the same sequence on screen: AI proposes a design using shared guidance; the team checks it against the user's need; they save the lesson, including the decision, reason, and owner; DesignOps updates the guidance available to the next team and its AI tools; a reviewer checks the next result. The example does not prove that one field is always best or that guidance automatically prevents mistakes. It is fictional and user validation is pending. If the solo-setup assumption changes, the product lead revisits the guidance. DesignOps keeps its source, version, access, and review date current. Retire lessons that no longer apply instead of turning every observation into universal policy.",
    transition: "That maintenance is recognizable DesignOps work—with a wider scope."
  },
  {
    seconds: 50,
    takeaway: "People, process, and systems remain the foundations; their scope expands.",
    visual: "The familiar foundations sit beside six traditional-to-expanded responsibilities.",
    interaction: "Static comparison; the expanded scope is immediately visible.",
    body: "Refresh the fundamentals. DesignOps improves the conditions for effective design through people, process, and systems. Staffing, onboarding, rituals, tooling, and collaboration do not disappear. AI broadens the reach: from enabling designers to enabling the product ecosystem; from documenting procedures to making knowledge usable at the moment of generation; from efficiency alone to quality and outcomes. This is a scope expansion, not a dismissal of traditional operations or a mandate to reorganize.",
    transition: "A useful metaphor for that expanded role is the control plane."
  },
  {
    seconds: 50,
    takeaway: "DesignOps connects distributed actors through shared rules, context, and evaluation.",
    visual: "Five AI-enabled actors connect through a common operating layer.",
    interaction: "Stage: the original hub-and-spoke diagram stays fully connected, with larger labels and no extra control. Review: Connect the control plane toggles the network links. Reading view retains the accessible text summary.",
    body: "The control plane metaphor distinguishes defining the conditions of work from doing everyone's work. PM, research, design, prototyping, and engineering keep their domain responsibilities. DesignOps coordinates reusable context, risk-based guardrails, evaluation criteria, ownership, and enablement. It should not become a central approval queue. Security, Legal, IT, platform teams, and domain experts remain essential partners. Clear boundaries can allow teams to move without repeatedly asking permission for known-safe tasks.",
    transition: "Shared guidance also changes how work moves between these people."
  },
  {
    seconds: 60,
    takeaway: "Pilot collaborative production and use any capacity gained for customer learning.",
    visual: "Two journeys connect customer need to customer feedback: sequential handoffs and a collaborative experiment loop.",
    interaction: "Stage: both journeys are fully resolved and static. Review can animate sequencing versus collaboration; motion is illustrative, not measured duration.",
    body: "The before journey is a deliberately simplified pattern, not a claim that all pre-AI teams worked sequentially. Research informs a brief, design produces mocks, engineering builds, and customers finally respond. The proposed alternative starts with Mission, Milestones, and Metrics—the source's MMM. PM, research, design, and engineering share intent; specification, concepts, feasibility, and HTML/CSS prototypes evolve together. Releases can become experiments that inform another iteration. AI may reduce production effort, but review, integration, and dependency costs still count. Do not promise a one-week release or universal acceleration. Measure elapsed production time, person-hours, waiting time, customer validation, and experimentation cadence. The animation contrasts sequencing, not numeric speed. A prototype is not a production release; user evidence remains necessary.",
    transition: "Shared guidance can start with documentation the team already has."
  },
  {
    seconds: 75,
    takeaway: "Turn domain knowledge into versioned, reusable context and verifiable standards.",
    visual: "Four documentation transformations and the saved solo-setup lesson on stage; all seven transformations and the full shared guidance in review.",
    interaction: "Static transformation. Stage emphasizes lesson, reason, owner/version, review date, and pending user evidence; review and notes retain the full detail.",
    body: "Use the saved solo-setup lesson as the concrete artifact rather than narrating seven new frameworks. Its source is explicitly assumed, the requirement and decision are readable, its scope is solo setup, and its owner and review trigger are visible. User evidence remains pending. The seven transformations preserve the broader source material: guidelines to machine-readable rules, design systems to consumable systems, templates to canonical prompts, documentation to context packages, critique to rubrics, SOPs to human–AI workflows, efficiency measures to speed plus quality and outcomes. A YAML-like package does not enforce itself. Integration, permissions, validation, and human review are still required. DesignOps maintains the package; domain experts author, approve, and revisit its validity.",
    transition: "Maintaining this guidance costs time. How would we know the workflow is worth adopting?"
  },
  {
    seconds: 100,
    takeaway: "Evaluate the whole workflow: speed, review cost, quality, coherence, and customer outcomes.",
    visual: "Four large comparisons show baseline, pilot, and change together: concept time, production rate, review effort, and system compliance.",
    interaction: "Stage: four static, paired comparisons. Review: All 10 measures opens the complete comparison dialog; Definitions links to the measurement backup, also accessible from Q&A.",
    body: "These are approximate comparison values informed by the presenter's early experimentation, not exact measurements, benchmarks, or a forecast. The presenter supplied design production-rate ranges; the other nine comparisons remain unchanged from the earlier synthetic values, reported as close to informal observations. Underlying records, sample sizes, and methods have not been supplied, so do not claim validated results or causal ROI. Baseline to pilot: median brief-to-validated-concept time 9 to 6 days; design production rate ~3–4/wk to ~1–2/wk, accepted artifacts / in a team with 8w E2E Cycle. The change ≈−2/wk is a midpoint estimate: 1.5 minus 3.5, not an independently observed change. Weekly rate and the team's eight-week end-to-end cycle are different concepts; do not divide by eight or infer an eight-week total. Production rate decreases, so do not frame it as an improvement. Production effort is 18 to 11 hours per concept; review effort 4 to 6 hours; rework 35% to 24%; applicable system checks passed 78% to 90%; open accessibility/quality defects 6 to 4 per 10 screens; design-to-code divergence 28% to 18%; experiments 1 to 2 per week; approved-context reuse 25% to 70%. Review effort rises in this comparison: faster generation does not imply less review. Leading/process measures signal behavior and readiness; outcome measures test delivered workflow results. System compliance is a leading quality signal, not proof of user benefit. Both sets of approximate values and their changes appear together, without competing bar scales. Percentage measures use percentage-point changes, not relative percentages. Match work scope, staffing, artifact definition, and evaluation criteria; include sample sizes and dispersion before presenting a validated comparison. Track customer task success separately. No customer outcome data is supplied.",
    transition: "Use those measures in one bounded pilot before scaling the operating model."
  },
  {
    seconds: 135,
    takeaway: "A 30-day pilot can begin at team, product-area, or enterprise level with clear ownership.",
    visual: "Four verbs on a timeline, one concrete output per week, and an explicit adopt / revise / stop decision.",
    interaction: "Static in Stage and review, with no extra presenter clicks. Team, product-area, and enterprise ownership guidance remains in these notes.",
    body: "Days 1–7: map actual AI use and identify inconsistency, quality gaps, and risk. Days 8–14: select one useful, bounded workflow and package relevant organizational knowledge. Days 15–21: name decision owners, define human checkpoints and evaluation criteria, and establish a baseline before the pilot. Days 22–30: run comparable work and decide whether to adopt, revise, or stop. Avoid sensitive or high-risk first pilots unless the appropriate governance is already in place. At team level, design and engineering leads can own a single workflow with DesignOps facilitation. At product-area level, PM, research, design, engineering, and a system owner coordinate shared patterns and cross-team outcomes. At enterprise level, federated product ownership works within Security, Legal, IT, and platform guardrails. DesignOps connects the altitudes; it does not unilaterally own policy or product decisions. Calendar windows are a suggested starting plan, not promised delivery dates.",
    transition: "Return to the central question: if AI participates in design, who designs its operating environment?"
  },
  {
    seconds: 90,
    takeaway: "AI doesn't eliminate the need for DesignOps. It makes DesignOps infrastructure.",
    visual: "A quiet question, a deliberate answer reveal, and three concluding statements.",
    interaction: "Stage moment 3: pause, press Right to reveal DesignOps, then Right for Q&A. Left hides the answer before moving back. Review retains its reveal button.",
    body: "Use 90 seconds for the closing; its former 30 seconds now introduce the speaker on slide 3. Slow down. Read the question and leave space: if AI becomes part of how we design products, who designs the system in which AI operates? Reveal DesignOps. This is not a territorial claim that one function owns all AI. It is an invitation for DesignOps to connect domain expertise, governance, knowledge, workflows, and evaluation. AI creates capacity. Systems create consistency. Stewardship creates trust. DesignOps connects all three. The future is not merely managing work around design; it is designing the infrastructure through which humans and AI create products together. The practical challenge is one workflow, a baseline, a maintained context package, named human checkpoints, and evidence that quality has not been traded for speed. End on the thesis and pause rather than adding more tools.",
    transition: "Let's talk. Where is your team generating faster than it can maintain coherence?"
  },
  {
    seconds: 600,
    takeaway: "Use the conversation to connect the operating model to the audience's constraints.",
    visual: "Seven backup topics and LinkedIn/GitHub contact links beside the Q&A invitation.",
    interaction: "Select a topic to open a backup; each backup links back to Q&A.",
    body: "Reserve ten minutes for discussion. Invite specific workflow examples rather than abstract predictions. Seven backups cover governance ownership, the evolving role, AI-ready design systems, model-agnostic workflows, measurement, the full context stack, and the product lifecycle. The stack and lifecycle are supporting lenses, not new models the audience needs to memorize during the keynote. If asked whether this is just AI governance, return to the decision trail: governance is one component; context, workflows, evaluation, and enablement make it useful in the product ecosystem. If asked what to do tomorrow: map, identify, codify, standardize, and measure.",
    transition: "Choose a backup only when it helps answer a question."
  },
  {
    seconds: 0,
    takeaway: "Risk boundaries, access, operating-model design, and product judgment need explicit owners.",
    visual: "Four ownership domains; none claims the entire AI operating model.",
    interaction: "Back to Q&A returns to the topic menu.",
    body: "Security and Legal establish organizational risk boundaries; IT and platform teams manage technology and access. DesignOps translates policy into useful workflow conditions with domain experts. Product, research, design, and engineering own their decisions and release quality. Good governance removes repetitive ambiguity through approved paths, risk-based human checkpoints, escalation, and documented exceptions. Bad governance creates an unnecessary approval queue. Specific accountabilities must be agreed locally; the slide is a discussion model, not a universal RACI.",
    transition: "Return to Q&A."
  },
  {
    seconds: 0,
    takeaway: "DesignOps architects the operating environment rather than building everyone's AI tools.",
    visual: "Six responsibilities and five kinds of product work.",
    interaction: "Back to Q&A returns to the topic menu.",
    body: "The emerging role includes governance, design intelligence, workflow architecture with subject-matter experts, quality systems, enablement, and measurement. 'AI Ops Systems Architect' is a possible direction, not a prescribed title. The source's prototyper, builder, sweeper, grower, and maintainer archetypes are retained as kinds of work: prototype, build, simplify/improve, grow, and maintain. Their risk and evaluation needs differ. The source includes an unverified external attribution; this deck makes no authorship claim for the archetypes. Do not turn this model into a requirement for DesignOps to become an AI engineering team.",
    transition: "Return to Q&A."
  },
  {
    seconds: 0,
    takeaway: "AI readiness adds meaning, constraints, examples, and evaluation to an existing design system.",
    visual: "Foundation plus machine-consumable reasoning, with shared-context ownership underneath.",
    interaction: "Back to Q&A returns to the topic menu.",
    body: "Keep tokens, components, patterns, and guidelines. Add semantic metadata, usage rules, examples, constraints, accessibility requirements, relationships, code equivalents, and evaluation criteria. Start with one pattern rather than translating the whole library. Include valid and invalid examples, allowed data access, provenance, version, freshness, and a named owner. AI-readable does not mean publicly accessible, indiscriminately retrievable, or automatically correct. Research and existing product experiences remain important context beyond the component library.",
    transition: "Return to Q&A."
  },
  {
    seconds: 0,
    takeaway: "Build durable knowledge, rules, workflows, and evaluation around replaceable models.",
    visual: "Shared knowledge, rules, workflows, and evaluation remain as models change.",
    interaction: "Back to Q&A returns to the topic menu.",
    body: "Models and tools will change. Preserve the institutional knowledge, permissions, workflows, examples, and acceptance criteria that define how the organization operates. Model-agnostic does not mean zero adaptation: tool capabilities, context limits, privacy controls, and behavior differ. Re-run a representative evaluation set before a model switch. Canonical prompts are co-authored by domain experts and governed as versioned knowledge artifacts, not selected by DesignOps alone. Standardization creates an informed starting point, not a ban on exploration.",
    transition: "Return to Q&A."
  },
  {
    seconds: 0,
    takeaway: "Operational definitions, comparable work, and evidence qualifications matter more than dashboard polish.",
    visual: "Definitions, units, and collection methods beside a concise pilot protocol.",
    interaction: "Dashboard returns to slide 13 with baseline and pilot visible together. Q&A returns to the topic menu.",
    body: "Define 'validated concept' before collecting time: reviewer acceptance plus the agreed user-evidence threshold. Count accepted artifacts, not raw generations. Separate elapsed days from person-hours, production from review, and quality defects from severity. Define denominators for compliance, rework, reuse, and divergence. Complete experiments include a recorded learning decision, not just a release. Compare similar tasks and staffing; document sample size, spread, exclusions, and complexity. Use approved data collection with appropriate privacy controls. Review effort may increase while total effort falls, but a small observational pilot cannot establish causality. Set decision thresholds in advance and track customer task success or other relevant product outcomes. Dashboard values are preliminary approximations informed by the presenter's early experimentation, not validated measurements.",
    transition: "Return to the dashboard or Q&A."
  },
  {
    seconds: 0,
    takeaway: "The differentiator is governed organizational knowledge, not loyalty to a model.",
    visual: "A five-layer AI design stack, built from models to connecting DesignOps infrastructure.",
    interaction: "Stage: all five layers are resolved. Review: Build the context stack adds one highlighted layer per click; after all layers it resets to the foundation.",
    body: "Models provide capabilities. Agents and tools connect capabilities to tasks. Organizational context provides what models do not inherently know: tokens, components, research, product knowledge, brand, accessibility, terminology, workflows, repositories, PRs, existing experiences, and past decisions. Stewardship adds guardrails, exclusions, evaluation, and human checkpoints. DesignOps connects the layers. The diagram is a responsibility model, not a mandatory software architecture. Do not feed all organizational data into a model: permissions, privacy, provenance, source quality, freshness, and ownership determine what context may be used. A design system is one part of organizational memory, not the whole memory.",
    transition: "Return to Q&A, or use the lifecycle backup to locate these responsibilities in the work."
  },
  {
    seconds: 0,
    takeaway: "Governance, context, and evaluation follow the work across every lifecycle stage.",
    visual: "Five lifecycle phases above a persistent shared-infrastructure rail; detailed per-phase panels remain in review.",
    interaction: "Stage: a static five-phase overview. Review: select a phase to reveal AI assistance, DesignOps infrastructure, and the human checkpoint.",
    body: "Discover: AI can cluster and retrieve research; DesignOps supports consent, traceability, source quality, and reusable knowledge. Define: AI can draft briefs and identify gaps; shared brief structure, product vocabulary, and source context keep framing grounded. Design: alternatives and prototypes rely on system rules, prompts, accessibility constraints, and critique. Build: generated code needs component metadata, supported patterns, tokens, validation, and paired review. Measure: AI can summarize observations, but people interpret outcomes, record caveats, and decide what should change. Do not turn this into a tool catalog. Discuss one or two phases with the persistent rail; use review mode only when the detailed panels are needed.",
    transition: "Return to Q&A. The keynote's onboarding decision is one example at the design-to-build boundary."
  }
];

const lifecycle = [
  ["AI CONTRIBUTION", "Cluster findings, synthesize evidence, retrieve prior research.", "DESIGNOPS INFRASTRUCTURE", "Consent, source quality, traceability, reusable research.", "HUMAN CHECKPOINT", "Researcher verifies sources, uncertainty, and interpretation."],
  ["AI CONTRIBUTION", "Draft briefs, summarize requirements, identify gaps.", "DESIGNOPS INFRASTRUCTURE", "Canonical brief, product vocabulary, shared mission and metrics.", "HUMAN CHECKPOINT", "PM + domain experts agree on the problem and success criteria."],
  ["AI CONTRIBUTION", "Explore alternatives, generate concepts, prototype interactions.", "DESIGNOPS INFRASTRUCTURE", "System context, canonical prompts, accessibility, critique rubric.", "HUMAN CHECKPOINT", "Designers evaluate user need, craft, coherence, and evidence."],
  ["AI CONTRIBUTION", "Generate components, modify code, propose test cases.", "DESIGNOPS INFRASTRUCTURE", "Tokens, metadata, coding guidelines, design/code validation.", "HUMAN CHECKPOINT", "Designer + engineer inspect feasibility, behavior, and access."],
  ["AI CONTRIBUTION", "Summarize results, surface patterns, compare observations.", "DESIGNOPS INFRASTRUCTURE", "Metric definitions, decision logs, versioned learning packages.", "HUMAN CHECKPOINT", "Team interprets outcomes and decides what context should change."]
];

const metrics = [
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

const pairLabels = ["What the user needs", "What AI got wrong", "What the team changes", "Try the fix", "Save the lesson", "Check the next result"];
const pairEvidence = [
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
const state = { index: 0, generation: 0, cause: 0, stack: 0, pair: 0, loop: -1 };
const smallScreen = matchMedia("(max-width: 900px), (max-height: 560px)");
let readingPreference;
let stageReview;

function clock(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

function fitStage() {
  if (document.body.classList.contains("reading")) {
    $("#stage").style.transform = "none";
    $("#stage").style.left = "0";
    $("#stage").style.top = "0";
    return;
  }
  const viewport = $("#viewport");
  const scale = Math.min(viewport.clientWidth / 1600, viewport.clientHeight / 900);
  $("#stage").style.transform = `scale(${scale})`;
  $("#stage").style.left = `${(viewport.clientWidth - 1600 * scale) / 2}px`;
  $("#stage").style.top = `${(viewport.clientHeight - 900 * scale) / 2}px`;
}

function setReadingView(reading) {
  const active = reading && !stageReview;
  document.body.classList.toggle("reading", active);
  $("#reading-toggle").setAttribute("aria-pressed", String(active));
  $("#presentation").scrollTop = 0;
  fitStage();
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
    layer.setAttribute("aria-label", `Layer ${index + 1} of 5: ${layer.querySelector("h3").textContent}. ${current ? "Current layer" : built ? "Built" : "Not yet built"}.`);
  });
}

function updateNotes() {
  const note = notes[state.index];
  const elapsed = notes.slice(0, Math.min(state.index, keynoteCount)).reduce((sum, item) => sum + item.seconds, 0);
  const timing = state.index < keynoteCount ? `${clock(elapsed)}–${clock(elapsed + note.seconds)} · ${note.seconds} seconds` : state.index === keynoteCount ? "10-minute Q&A · outside the 20-minute keynote" : "Optional backup · outside keynote timing";
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
    ["TAKEAWAY", note.takeaway], ["VISUAL", note.visual], ["INTERACTION", note.interaction],
    ["SPEAKER NOTES", note.body], ["TRANSITION", note.transition]
  ]) {
    add("h4", label);
    add("p", text);
  }
  $("#notes").scrollTop = 0;
}

function renderSlide(index) {
  const oldSlide = slides[state.index];
  const focusWasInSlide = oldSlide.contains(document.activeElement);
  state.index = Math.max(0, Math.min(slides.length - 1, index));
  slides.forEach((slide, i) => {
    slide.hidden = i !== state.index;
    slide.classList.toggle("active", i === state.index);
    slide.setAttribute("aria-label", `${i + 1} of ${slides.length}: ${slide.dataset.title}`);
  });
  const slide = slides[state.index];
  $("#counter").textContent = state.index < keynoteCount ? `${String(state.index + 1).padStart(2, "0")} / ${keynoteCount}` : state.index === keynoteCount ? "Q&A" : `B${state.index - keynoteCount} / ${slides.length - keynoteCount - 1}`;
  $("#slide-title").textContent = slide.dataset.title;
  $("#act-label").textContent = slide.dataset.act;
  $("#progress").value = Math.min(state.index + 1, keynoteCount);
  $("#progress").hidden = state.index >= keynoteCount;
  $("#progress").setAttribute("aria-valuetext", `Keynote slide ${Math.min(state.index + 1, keynoteCount)} of ${keynoteCount}`);
  $("#previous").disabled = state.index === 0;
  $("#next").disabled = state.index === slides.length - 1;
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
      aligned: $("#fragmentation").classList.contains("aligned"),
      closing: !$("#closing-reveal").hidden,
      name: $("#workspace-name").value,
      invalid: $("#workspace-name").getAttribute("aria-invalid"),
      result: $("#prototype-result").textContent,
      resultClass: $("#prototype-result").className
    };
    document.querySelectorAll("dialog[open]").forEach(dialog => dialog.close());
    $("#notes").hidden = true;
    $("#notes-toggle").setAttribute("aria-expanded", "false");
    setAligned(false);
    setPair(0);
    setClosing(false);
  } else {
    const saved = stageReview;
    stageReview = undefined;
    setAligned(saved.aligned);
    setPair(saved.pair);
    setClosing(saved.closing);
    $("#workspace-name").value = saved.name;
    if (saved.invalid === null) $("#workspace-name").removeAttribute("aria-invalid");
    else $("#workspace-name").setAttribute("aria-invalid", saved.invalid);
    $("#prototype-result").textContent = saved.result;
    $("#prototype-result").className = saved.resultClass;
  }
  document.body.classList.toggle("stage-mode", active);
  $("#stage-toggle").setAttribute("aria-pressed", String(active));
  $("#stage-exit").hidden = !active;
  $("#stage-exit").textContent = "Exit stage · Esc";
  document.querySelectorAll("[data-life]").forEach(button => { button.disabled = active; });
  renderStack();
  markCurrent(".role", active ? -1 : state.generation - 1);
  markCurrent("#causal-chain li", active ? -1 : state.cause);
  markCurrent("#loop-reading li", active ? -1 : state.loop);
  setReadingView(readingPreference ?? smallScreen.matches);
  (active ? $("#presentation") : $("#stage-toggle")).focus({ preventScroll: true });
  $("#announcement").textContent = active ? $("#stage-help").textContent : "Review restored. Notes remain closed.";
}

async function exitStage() {
  setStageMode(false);
  if (document.fullscreenElement) await fullscreen();
}

function setAligned(aligned) {
  $("#fragmentation").classList.toggle("aligned", aligned);
  const button = $('[data-action="align"]');
  button.setAttribute("aria-pressed", String(aligned));
  button.textContent = aligned ? "Remove shared standards" : "Apply shared standards";
  $("#fragment-caption").textContent = aligned ? "Distinct ideas. Shared constraints. Accountable decisions." : "Different patterns. Conflicting terminology. Unowned decisions.";
}

function setClosing(revealed) {
  $("#closing-reveal").hidden = !revealed;
  $('[data-action="closing"]').hidden = revealed;
  $('[data-action="closing"]').setAttribute("aria-expanded", String(revealed));
  if (stageReview) $("#announcement").textContent = revealed ? "DesignOps. It makes DesignOps infrastructure." : "Who designs the system in which AI operates?";
}

function stageAdvance(direction) {
  if (state.index === 3) {
    const aligned = $("#fragmentation").classList.contains("aligned");
    if (aligned !== (direction > 0)) {
      setAligned(direction > 0);
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
  navigate(state.index + direction);
}

async function fullscreen() {
  if (!document.fullscreenEnabled) {
    $("#announcement").textContent = "Fullscreen is unavailable in this browser. Open index.html in a desktop browser to present fullscreen.";
    $("#fullscreen").textContent = "Fullscreen unavailable";
    if (stageReview) $("#stage-exit").textContent = "Fullscreen unavailable · Exit stage (Esc)";
    return;
  }
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch (error) {
    $("#announcement").textContent = `Could not enter fullscreen: ${error.message}`;
    $("#fullscreen").textContent = "Fullscreen blocked";
    if (stageReview) $("#stage-exit").textContent = "Fullscreen blocked · Exit stage (Esc)";
    console.error("Fullscreen request failed", error);
  }
}

function selectLife(index) {
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
  const make = (tag, text, className) => {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) element.className = className;
    return element;
  };
  // Four talk-level comparisons; the complete dataset remains in the detail dialog.
  for (const index of [5, 6, 1, 2]) {
    const metric = metrics[index];
    const card = document.createElement("article");
    card.className = `metric-card${index === 1 || (metric.better === "higher" && metricDelta(metric) < 0) ? " warning" : ""}`;
    card.dataset.metric = String(index);
    card.append(make("p", metric.group === 0 ? "LEADING / PROCESS" : "WORKFLOW OUTCOME", "metric-category"));
    card.append(make("h3", metric.name, "metric-name"));
    const comparison = document.createElement("dl");
    comparison.className = "metric-comparison";
    for (const [label, value] of [["Baseline", metricValue(metric, "baseline")], ["Pilot", metricValue(metric, "pilot")], ["Change", metricChange(metric)]]) {
      const entry = document.createElement("div");
      entry.append(make("dt", label), make("dd", value));
      comparison.append(entry);
    }
    card.append(comparison, make("p", metric.unit, "metric-unit"));
    if (Array.isArray(metric.baseline) || Array.isArray(metric.pilot)) {
      card.append(make("p", "Change: midpoint estimate", "metric-estimate"));
    }
    $("#metric-dashboard").append(card);
  }
  ["LEADING / PROCESS SIGNALS", "WORKFLOW OUTCOME MEASURES"].forEach((label, group) => {
    const table = document.createElement("table");
    table.className = "metric-table";
    table.append(make("caption", label));
    const head = table.createTHead().insertRow();
    const headers = ["Metric / unit", "Baseline", "Pilot", "Change"];
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
          cell.append(make("small", "Midpoint estimate"));
        }
      }
    });
    $("#metric-tables").append(table);
  });
}

function setPair(step) {
  state.pair = step;
  $("#prototype-scene").dataset.step = String(step);
  $("#decision-evidence").hidden = step === 3;
  $("#prototype-form").hidden = step !== 3;
  const evidence = pairEvidence[step];
  if (evidence) {
    $("#evidence-title").textContent = evidence.title;
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
  $("#pair-count").textContent = `STEP ${step + 1} OF 6`;
  $("#pair-label").textContent = pairLabels[step];
  const next = $('[data-action="pair"]');
  next.textContent = ["See the problem →", "See the team's decision →", "Try the fix →", "Save the lesson →", "Check the next result →", "Example complete ✓"][step];
  next.disabled = step === 5;
  if (step === 0) {
    $("#prototype-form").reset();
    $("#workspace-name").removeAttribute("aria-invalid");
    $("#prototype-result").textContent = "Prototype only. No account or network request.";
    $("#prototype-result").className = "prototype-result";
  }
}

const actions = {
  generate(button) {
    state.generation = (state.generation + 1) % 5;
    document.querySelectorAll(".role").forEach((role, i) => role.classList.toggle("generated", i < state.generation));
    button.textContent = state.generation === 4 ? "Reset generation ↺" : `Distribute generation · ${state.generation}/4 ↗`;
    markCurrent(".role", state.generation - 1);
    $("#generation-status").textContent = state.generation === 0 ? "Generation reset. No roles active." : `${state.generation} of 4 roles generating. Latest: ${document.querySelectorAll(".role h3")[state.generation - 1].textContent}.`;
  },
  cause(button) {
    state.cause = (state.cause + 1) % 5;
    document.querySelectorAll("#causal-chain li").forEach((item, i) => item.classList.toggle("current", i <= state.cause));
    for (const selector of [".branch-lines path", ".branch-outputs span"]) {
      document.querySelectorAll(selector).forEach((item, i) => item.classList.toggle("lit", i <= state.cause));
    }
    button.textContent = state.cause === 4 ? "Restart the chain" : "Trace the chain";
    markCurrent("#causal-chain li", state.cause);
    $("#cause-status").textContent = `Stage ${state.cause + 1} of 5: ${document.querySelectorAll("#causal-chain li")[state.cause].textContent}.`;
  },
  align() {
    setAligned(!$("#fragmentation").classList.contains("aligned"));
  },
  journey(button) {
    const journeys = $("#journeys");
    journeys.classList.remove("running");
    // Restart a finite explanatory animation; there is no slide-advance timer.
    void journeys.offsetWidth;
    journeys.classList.add("running");
    button.textContent = "Replay both journeys ↺";
    const status = $("#journey-status");
    status.dataset.replays = String(Number(status.dataset.replays || 0) + 1);
    status.textContent = `Run ${status.dataset.replays}: sequential handoffs move research to release; the proposed collaborative model pairs shared intent and production with experiments and learning.`;
  },
  connect(button) {
    const connected = $("#network").classList.toggle("connected");
    button.setAttribute("aria-pressed", String(connected));
    button.textContent = connected ? "Disconnect the control plane" : "Connect the control plane";
    $("#network-status").textContent = connected ? "Shared rules. Reusable context. Human evaluation." : "Isolated tools. Local rules. Fragmented context.";
  },
  stack(button) {
    state.stack = (state.stack + 1) % 5;
    renderStack();
    $("#stack-status").textContent = `Layer ${state.stack + 1} of 5: ${$(`[data-layer="${state.stack}"] h3`).textContent}. ${state.stack === 4 ? "Stack complete." : "Build from the foundation up."}`;
    button.textContent = state.stack === 4 ? "Rebuild from the foundation" : "Build the context stack";
  },
  pair() { setPair(Math.min(5, state.pair + 1)); },
  "pair-reset"() { setPair(0); },
  loop(button) {
    state.loop = (state.loop + 1) % 5;
    document.querySelectorAll(".loop-node").forEach((node, i) => node.classList.toggle("current", i === state.loop));
    markCurrent("#loop-reading li", state.loop);
    const stages = ["AI proposes a design using shared guidance.", "The team reviews it against the user's need.", "Save the lesson: the decision, reason, and owner.", "Update the guidance for the next team and its AI tools.", "Check the next result. Do not assume success."];
    $("#loop-status").textContent = stages[state.loop];
    button.textContent = state.loop === 4 ? "Start the next cycle ↺" : "Follow one learning cycle →";
  },
  "metric-definitions"() { navigate(slides.indexOf($(".measurement-backup"))); },
  closing() {
    setClosing(true);
    $("#announcement").textContent = "DesignOps. AI doesn't eliminate the need for DesignOps. It makes DesignOps infrastructure.";
    $(".closing h2").tabIndex = -1;
    $(".closing h2").focus({ preventScroll: true });
  }
};

document.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.dataset.action) actions[button.dataset.action](button);
  if (button.dataset.life !== undefined) selectLife(Number(button.dataset.life));
});

$("#prototype-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = $("#workspace-name");
  const value = input.value.trim();
  const result = $("#prototype-result");
  if (value.length < 2 || value.length > 48) {
    input.setAttribute("aria-invalid", "true");
    result.textContent = "Enter a workspace name with 2–48 non-padding characters.";
    result.className = "prototype-result error";
    input.focus();
    return;
  }
  input.removeAttribute("aria-invalid");
  result.textContent = `“${value}” is ready in this local demo. Nothing was saved or sent.`;
  result.className = "prototype-result success";
});
$("#workspace-name").setAttribute("aria-describedby", "workspace-hint prototype-result");

$("#previous").addEventListener("click", () => navigate(state.index - 1));
$("#next").addEventListener("click", () => navigate(state.index + 1));
$("#notes-toggle").addEventListener("click", () => toggleNotes());
$("#notes-close").addEventListener("click", () => toggleNotes(false));
$("#fullscreen").addEventListener("click", fullscreen);
$("#stage-toggle").addEventListener("click", () => setStageMode(true));
$("#stage-exit").addEventListener("click", exitStage);
$("#reading-toggle").addEventListener("click", () => {
  readingPreference = !document.body.classList.contains("reading");
  setReadingView(readingPreference);
});
smallScreen.addEventListener("change", () => {
  if (readingPreference === undefined) setReadingView(smallScreen.matches);
});
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
  if (event.key.toLowerCase() === "s") {
    event.preventDefault();
    if (event.repeat) return;
    if (stageReview) exitStage();
    else setStageMode(true);
    return;
  }
  if (stageReview) {
    // Native form/button activation wins over the presentation's build keys.
    if (event.target.closest("form") || (event.code === "Space" && event.target.closest("button, a"))) return;
    if (["ArrowRight", "ArrowDown", "PageDown", " ", "ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
      event.preventDefault();
      if (!event.repeat) stageAdvance(["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key) ? -1 : 1);
    } else if (event.key.toLowerCase() === "f") {
      event.preventDefault();
      fullscreen();
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      navigate(event.key === "Home" ? 0 : slides.length - 1);
    }
    return;
  }
  if (document.body.classList.contains("reading") && ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) return;
  if (event.code === "Space" && event.target.closest("button, a")) return;
  switch (event.key) {
    case "ArrowRight": case "ArrowDown": case "PageDown": case " ":
      event.preventDefault(); navigate(state.index + 1); break;
    case "ArrowLeft": case "ArrowUp": case "PageUp":
      event.preventDefault(); navigate(state.index - 1); break;
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
  if (!active && stageReview) setStageMode(false);
  $("#fullscreen").textContent = active ? "Exit fullscreen" : "Fullscreen";
  $("#fullscreen").setAttribute("aria-label", active ? "Exit fullscreen" : "Enter fullscreen");
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
document.querySelectorAll(".loop-node").forEach((node) => {
  const item = document.createElement("li");
  item.textContent = [...node.querySelectorAll("text")].map((text) => text.textContent).join(" — ");
  $("#loop-reading").append(item);
});
document.querySelectorAll(".definitions tbody tr").forEach((row) => {
  [...row.cells].forEach((cell, index) => {
    cell.dataset.label = ["Metric", "Definition / unit", "Collection method"][index];
  });
});
markCurrent("#causal-chain li", 0);
renderStack();
setPair(0);
setReadingView(smallScreen.matches);
renderSlide(readHash());
fitStage();
