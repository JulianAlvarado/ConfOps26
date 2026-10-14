"use strict";

const notes = [
  {
    seconds: 60,
    takeaway: "AI increases production capacity. DesignOps maintains organizational coherence.",
    visual: "One shared source fans out into different shapes: more output, less consistency.",
    interaction: "A short entrance trace establishes the flow motif. No automatic slide advancement.",
    body: "Open with the tension, not a list of tools. Teams can generate briefs, concepts, research summaries, and code faster than before. But faster creation does not automatically produce a coherent customer experience. This talk argues that DesignOps expands from optimizing workflows into designing the operating infrastructure for human–AI product teams. We will connect governance, organizational knowledge, and evaluation, then make that practical through a paired prototype and a measurable pilot. The audience leaves with a framework and a first-30-days starting point.",
    transition: "What changes when production becomes distributed across the whole team?"
  },
  {
    seconds: 65,
    takeaway: "Distributed generation moves the bottleneck toward alignment, quality, and governance.",
    visual: "Four parallel lanes: product, research, design, and engineering.",
    interaction: "Distribute generation activates one role per click; a fifth click resets the example.",
    body: "Each discipline gains production capacity. PMs generate briefs and hypotheses; researchers synthesize evidence; designers explore concepts; engineers generate components and tests. Generation is more distributed, but expertise is not interchangeable. The same language model can interpret the product differently in each lane. These are categories of assistance, not guarantees that outputs are accurate. Ask the room to imagine all four lanes producing simultaneously. The new constraint is agreeing on what to produce, what fits the system, and who evaluates it.",
    transition: "Without shared conditions, more output can create more variation."
  },
  {
    seconds: 70,
    takeaway: "Shared context and evaluation govern variation without eliminating useful exploration.",
    visual: "A causal chain sits above diverging output branches; a shared standards band aligns their treatment.",
    interaction: "Trace the chain progresses through five stages, activating more branches and divergent patterns. Apply shared standards toggles fragmentation versus coherence.",
    body: "Read the chain deliberately: more AI, more output, more variation, more decisions, more opportunities for inconsistency. This is a conceptual mechanism, not a statistical forecast. Variation is useful during exploration; unmanaged variation becomes expensive at system boundaries. Examples include conflicting terminology, duplicated research, inaccessible patterns, undocumented AI decisions, and design-system drift. The source's '17 versions of a pattern' is rhetorical, not a measured statistic, so we do not chart it. Apply shared context and evaluation: options can remain different while obeying common constraints. A green state is an explanatory metaphor, not a claim that standards automatically eliminate defects.",
    transition: "The opportunity is to redesign how work moves, not just accelerate each handoff."
  },
  {
    seconds: 105,
    takeaway: "Pilot collaborative production and use any capacity gained for customer learning.",
    visual: "Two journeys connect customer need to customer feedback: sequential handoffs and a collaborative experiment loop.",
    interaction: "Animate both journeys highlights sequential dependencies versus parallel collaboration; timings are illustrative motion, not measured duration.",
    body: "The before journey is a deliberately simplified pattern, not a claim that all pre-AI teams worked sequentially. Research informs a brief, design produces mocks, engineering builds, and customers finally respond. The proposed alternative starts with Mission, Milestones, and Metrics—the source's MMM. PM, research, design, and engineering share intent; specification, concepts, feasibility, and HTML/CSS prototypes evolve together. Releases can become experiments that inform another iteration. AI may reduce production effort, but review, integration, and dependency costs still count. Do not promise a one-week release or universal acceleration. Measure elapsed production time, person-hours, waiting time, customer validation, and experimentation cadence. The animation contrasts sequencing, not numeric speed. A prototype is not a production release; user evidence remains necessary.",
    transition: "DesignOps helps make that collaborative operating model repeatable."
  },
  {
    seconds: 45,
    takeaway: "People, process, and systems remain the foundations; their scope expands.",
    visual: "The familiar foundations sit beside six traditional-to-expanded responsibilities.",
    interaction: "Static comparison; the expanded scope is immediately visible.",
    body: "Refresh the fundamentals. DesignOps improves the conditions for effective design through people, process, and systems. Staffing, onboarding, rituals, tooling, and collaboration do not disappear. AI broadens the reach: from enabling designers to enabling the product ecosystem; from documenting procedures to making knowledge usable at the moment of generation; from efficiency alone to quality and outcomes. This is a scope expansion, not a dismissal of traditional operations or a mandate to reorganize.",
    transition: "A useful metaphor for that expanded role is the control plane."
  },
  {
    seconds: 55,
    takeaway: "DesignOps connects distributed actors through shared rules, context, and evaluation.",
    visual: "Five AI-enabled actors connect through a common operating layer.",
    interaction: "Connect the control plane switches dashed, weak links to shared connections; click again to disconnect.",
    body: "The control plane metaphor distinguishes defining the conditions of work from doing everyone's work. PM, research, design, prototyping, and engineering keep their domain responsibilities. DesignOps coordinates reusable context, risk-based guardrails, evaluation criteria, ownership, and enablement. It should not become a central approval queue. Security, Legal, IT, platform teams, and domain experts remain essential partners. Clear boundaries can allow teams to move without repeatedly asking permission for known-safe tasks.",
    transition: "We can make this operating layer memorable with three questions."
  },
  {
    seconds: 65,
    takeaway: "GOVERN: what can AI do? CONTEXT: what does it know? EVALUATE: what does good look like?",
    visual: "Three equal pillars with a supporting enablement foundation.",
    interaction: "Static anchor slide. Return to these three questions throughout the talk.",
    body: "Govern covers permitted tools, data and privacy boundaries, exclusions, risk levels, review checkpoints, decision owners, and documentation. Context covers tokens, components, research, product principles, brand, terminology, and constraints. Evaluate combines system checks, user needs, accessibility, product strategy, engineering feasibility, and human judgment. Reconcile the source's Stewardship × Systems × Enablement rather than offering a competing model: stewardship grounds governance and accountability; systems make context consumable; enablement activates all three through workflows, canonical prompts, rubrics, examples, playbooks, and training. Evaluation is a shared capability supported by stewardship and enablement, not a replacement for enablement.",
    transition: "The most durable part of that infrastructure is organizational memory."
  },
  {
    seconds: 60,
    takeaway: "The differentiator is governed organizational knowledge, not loyalty to a model.",
    visual: "A five-layer AI design stack, built from models to connecting DesignOps infrastructure.",
    interaction: "Build the context stack adds one highlighted layer per click; after all layers it resets to the foundation.",
    body: "Models provide capabilities. Agents and tools connect capabilities to tasks. Organizational context provides what models do not inherently know: tokens, components, research, product knowledge, brand, accessibility, terminology, workflows, repositories, PRs, existing experiences, and past decisions. Stewardship adds guardrails, exclusions, evaluation, and human checkpoints. DesignOps connects the layers. The diagram is a responsibility model, not a mandatory software architecture. Do not feed all organizational data into a model: permissions, privacy, provenance, source quality, freshness, and ownership determine what context may be used. A design system is one part of organizational memory, not the whole memory.",
    transition: "Useful context makes better candidates possible. Evaluation still determines what is acceptable."
  },
  {
    seconds: 60,
    takeaway: "Automated checks support accountable human judgment; they cannot prove design quality.",
    visual: "Multiple candidates flow through a six-part rubric to an explicit human decision.",
    interaction: "Static flow; no fabricated AI score or automatic approval.",
    body: "Walk through the rubric: approved components and tokens; identified user needs without unnecessary complexity; accessibility; brand and content principles; product strategy; and engineering feasibility. Domain experts define the standard together. Automated checks can detect specific violations, but a passing score cannot establish usefulness, coherence, or user success. A human reviewer accepts, revises, or rejects and records reasons. Keep evidence linked to decisions. Designers increasingly direct and evaluate alternatives, but craft and domain expertise remain indispensable.",
    transition: "These same responsibilities apply throughout the product lifecycle."
  },
  {
    seconds: 55,
    takeaway: "Governance, context, and evaluation follow the work across every lifecycle stage.",
    visual: "Five selectable stages sit above a persistent shared-infrastructure rail.",
    interaction: "Select a stage to reveal AI assistance, DesignOps infrastructure, and the human checkpoint.",
    body: "Discover: AI can cluster and retrieve research; DesignOps supports consent, traceability, source quality, and reusable knowledge. Define: AI can draft briefs and identify gaps; shared brief structure, product vocabulary, and source context keep framing grounded. Design: alternatives and prototypes rely on system rules, prompts, accessibility constraints, and critique. Build: generated code needs component metadata, supported patterns, tokens, validation, and paired review. Measure: AI can summarize observations, but people interpret outcomes, record caveats, and decide what should change. Do not turn this into a tool catalog. Show one or two stages live and use the persistent rail to connect them.",
    transition: "Let's make the design-to-build boundary concrete with a paired example."
  },
  {
    seconds: 80,
    takeaway: "Designer–engineer pairing makes intent, system constraints, implementation, and critique one conversation.",
    visual: "Six collaboration steps transform a rough onboarding concept into a working local HTML/CSS form.",
    interaction: "Advance the six steps, then try the form. It only updates local page state; no account, storage, model, or network integration.",
    body: "Start with a user need: a new teammate must create a workspace. Agree on the success signal. Explore a simple first task versus an overloaded form. Inspect existing tokens, supported component patterns, semantics, and constraints before code generation. The designer brings interaction intent and craft; the engineer brings feasibility, implementation quality, and supported architecture; AI assists with alternatives and implementation. The coded form uses a label, required input, keyboard focus, a status message, and shared CSS tokens. This demo is pre-authored, not live AI generation or an integration with Paper or Figma. Review together: user need, terminology, tokens, accessibility, feasibility, and error handling. Refine and capture the rationale. Automated checks and this visual demo do not replace a full accessibility audit or user validation; the component is not production-ready authentication.",
    transition: "The output matters. The decision that improved the output is reusable organizational knowledge."
  },
  {
    seconds: 65,
    takeaway: "Learning compounds only when decisions feed back into maintained context and standards.",
    visual: "A closed five-stage loop surrounds organizational memory.",
    interaction: "Follow one learning cycle highlights a stage per click, wrapping back to generation.",
    body: "AI generates using the current context. Humans evaluate. Capture the decision, rationale, evidence, and owner—not just the final image or code. Update the context package, rubric, example, token, or workflow that caused the problem. Review and version the change before reuse, then evaluate whether later AI-assisted work actually improves. For example, the paired demo may reveal that first-time setup should ask for one field, not three. That learning belongs with the pattern and its evidence. Avoid treating every observation as universal policy. Assign an owner, access rules, review cadence, and a way to retire stale knowledge.",
    transition: "A learning loop needs measures of both capacity and coherence."
  },
  {
    seconds: 110,
    takeaway: "Evaluate the whole workflow: speed, review cost, quality, coherence, and customer outcomes.",
    visual: "Two dashboard columns separate leading/process signals from workflow outcome measures.",
    interaction: "Toggle baseline and pilot. Review effort deliberately rises in the pilot. Definitions links to the measurement backup.",
    body: "Every number is synthetic: illustrative scenario—not measured results, benchmarks, or a forecast. The comparison teaches the measurement design, not an ROI claim. Baseline to pilot: median brief-to-validated-concept time 9 to 6 days; accepted production rate 2 to 3 artifacts per team-week; production effort 18 to 11 hours per concept; review effort 4 to 6 hours; rework 35% to 24%; applicable system checks passed 78% to 90%; open accessibility/quality defects 6 to 4 per 10 screens; design-to-code divergence 28% to 18%; experiments 1 to 2 per week; approved-context reuse 25% to 70%. Review effort rises intentionally: faster generation does not imply less review. Leading/process measures signal behavior and readiness; outcome measures test delivered workflow results. System compliance is a leading quality signal, not proof of user benefit. Bars use independent scales stated in labels and cannot be compared across rows. Match work scope, staffing, artifact definition, and evaluation criteria; include sample sizes and dispersion. Track customer task success separately. No customer outcome data is supplied.",
    transition: "Most of the raw material for this operating model already exists."
  },
  {
    seconds: 75,
    takeaway: "Turn domain knowledge into versioned, reusable context and verifiable standards.",
    visual: "Seven familiar artifacts become operational infrastructure beside an example context package.",
    interaction: "Static transformation; readable text remains editable for future PowerPoint recreation.",
    body: "Guidelines become machine-readable rules; design systems gain metadata and code equivalents; templates become canonical prompts; documentation becomes context packages; critique becomes rubrics; SOPs become human–AI workflows; efficiency measures expand to speed, quality, and outcomes. A canonical prompt is more than 'create onboarding.' It carries product context, target user, accessibility, design-system rules, tone, interaction principles, constraints, and evaluation criteria. Domain experts co-author and maintain it; DesignOps facilitates reuse and governance. 'Executable' is a direction, not magic: writing a YAML-like package does not enforce it. Enforcement requires integration, appropriate permissions, validation, and human review. Keep rationale and sources alongside rules.",
    transition: "Start with one bounded workflow rather than a comprehensive transformation."
  },
  {
    seconds: 110,
    takeaway: "A 30-day pilot can begin at team, product-area, or enterprise level with clear ownership.",
    visual: "Four weekly phases and an organizational-altitude selector.",
    interaction: "Choose Team, Product area, or Enterprise to inspect different ownership and governance needs.",
    body: "Days 1–7: map actual AI use and identify inconsistency, quality gaps, and risk. Days 8–14: select one useful, bounded workflow and package relevant organizational knowledge. Days 15–21: name decision owners, define human checkpoints and evaluation criteria, and establish a baseline before the pilot. Days 22–30: run comparable work and decide whether to adopt, revise, or stop. Avoid sensitive or high-risk first pilots unless the appropriate governance is already in place. At team level, design and engineering leads can own a single workflow with DesignOps facilitation. At product-area level, PM, research, design, engineering, and a system owner coordinate shared patterns and cross-team outcomes. At enterprise level, federated product ownership works within Security, Legal, IT, and platform guardrails. DesignOps connects the altitudes; it does not unilaterally own policy or product decisions. Calendar windows are a suggested starting plan, not promised delivery dates.",
    transition: "Return to the central question: if AI participates in design, who designs its operating environment?"
  },
  {
    seconds: 120,
    takeaway: "AI doesn't eliminate the need for DesignOps. It makes DesignOps infrastructure.",
    visual: "A quiet question, a deliberate answer reveal, and three concluding statements.",
    interaction: "Pause before revealing DesignOps. Continue to the Q&A slide when ready.",
    body: "Slow down. Read the question and leave space: if AI becomes part of how we design products, who designs the system in which AI operates? Reveal DesignOps. This is not a territorial claim that one function owns all AI. It is an invitation for DesignOps to connect domain expertise, governance, knowledge, workflows, and evaluation. AI creates capacity. Systems create consistency. Stewardship creates trust. DesignOps connects all three. The future is not merely managing work around design; it is designing the infrastructure through which humans and AI create products together. The practical challenge is one workflow, a baseline, a maintained context package, named human checkpoints, and evidence that quality has not been traded for speed. End on the thesis and pause rather than adding more tools.",
    transition: "Let's talk. Where is your team generating faster than it can maintain coherence?"
  },
  {
    seconds: 600,
    takeaway: "Use the conversation to connect the operating model to the audience's constraints.",
    visual: "Five navigable question prompts beside a minimal Q&A invitation.",
    interaction: "Select a topic to open a backup; each backup links back to Q&A.",
    body: "Reserve ten minutes for discussion. Invite specific workflow examples rather than abstract predictions. The five backups cover governance ownership, the evolving role, AI-ready design systems, model-agnostic workflows and canonical prompts, and measurement. If asked whether this is just AI governance, explain that governance is one component; context, workflows, evaluation, and enablement make AI useful in the actual product ecosystem. If asked what to do tomorrow: map, identify, codify, standardize, and measure.",
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
    visual: "Foundation plus machine-consumable reasoning, with a context contract underneath.",
    interaction: "Back to Q&A returns to the topic menu.",
    body: "Keep tokens, components, patterns, and guidelines. Add semantic metadata, usage rules, examples, constraints, accessibility requirements, relationships, code equivalents, and evaluation criteria. Start with one pattern rather than translating the whole library. Include valid and invalid examples, allowed data access, provenance, version, freshness, and a named owner. AI-readable does not mean publicly accessible, indiscriminately retrievable, or automatically correct. Research and existing product experiences remain important context beyond the component library.",
    transition: "Return to Q&A."
  },
  {
    seconds: 0,
    takeaway: "Build durable knowledge, rules, workflows, and evaluation around replaceable models.",
    visual: "A stable context contract spans interchangeable model capabilities.",
    interaction: "Back to Q&A returns to the topic menu.",
    body: "Models and tools will change. Preserve the institutional knowledge, permissions, workflows, examples, and acceptance criteria that define how the organization operates. Model-agnostic does not mean zero adaptation: tool capabilities, context limits, privacy controls, and behavior differ. Re-run a representative evaluation set before a model switch. Canonical prompts are co-authored by domain experts and governed as versioned knowledge artifacts, not selected by DesignOps alone. Standardization creates an informed starting point, not a ban on exploration.",
    transition: "Return to Q&A."
  },
  {
    seconds: 0,
    takeaway: "Operational definitions, comparable work, and evidence qualifications matter more than dashboard polish.",
    visual: "Definitions, units, and collection methods beside a concise pilot protocol.",
    interaction: "Dashboard returns to slide 13 with its selected scenario preserved. Q&A returns to the topic menu.",
    body: "Define 'validated concept' before collecting time: reviewer acceptance plus the agreed user-evidence threshold. Count accepted artifacts, not raw generations. Separate elapsed days from person-hours, production from review, and quality defects from severity. Define denominators for compliance, rework, reuse, and divergence. Complete experiments include a recorded learning decision, not just a release. Compare similar tasks and staffing; document sample size, spread, exclusions, and complexity. Use approved data collection with appropriate privacy controls. Review effort may increase while total effort falls, but a small observational pilot cannot establish causality. Set decision thresholds in advance and track customer task success or other relevant product outcomes. All dashboard numbers are explicitly synthetic.",
    transition: "Return to the dashboard or Q&A."
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
  { name: "Design production rate", group: 1, baseline: 2, pilot: 3, max: 4, unit: "accepted artifacts / team-week", short: "/wk", better: "higher", scale: "0–4 /wk" },
  { name: "Rework / revision rate", group: 1, baseline: 35, pilot: 24, max: 100, unit: "% artifacts needing major revision", short: "%", better: "lower", scale: "0–100%" },
  { name: "Accessibility / quality defects", group: 1, baseline: 6, pilot: 4, max: 10, unit: "open defects / 10 reviewed screens", short: "/10", better: "lower", scale: "0–10 /10" },
  { name: "Design-to-code divergence", group: 1, baseline: 28, pilot: 18, max: 100, unit: "% audited UI instances divergent", short: "%", better: "lower", scale: "0–100%" }
];

const pairDescriptions = [
  "Help a new teammate create a workspace. Agree on user need and the success signal before generating a screen.",
  "Explore a simple first task versus an overloaded form. Designer + engineer choose what serves the user—not what AI can add.",
  "Inspect semantic color tokens, field patterns, supported components, and accessibility constraints before writing code.",
  "Turn the chosen intent into semantic HTML and token-based CSS. This pre-authored local form is now interactive.",
  "Review the user need, tokens, label, keyboard focus, validation, and feasibility together. A passing check is not proof of user value.",
  "Keep the simpler first task. Capture the rationale and source evidence; validate with users before treating this pattern as a standard."
];
const pairCode = [
  "intent → alternatives → system → code → critique → refinement",
  "Option A: one clear task · Option B: setup + invitations + settings",
  "--cyan · --text · --bg / label + input + button / reusable field pattern",
  '<label for="workspace-name">Workspace name</label> + required input',
  "Review: user need / system fit / accessibility / feasibility / evidence",
  "Decision: defer invitations · Owner: product team · Next: user validation"
];
const pairLabels = ["EARLY CONCEPT / 01", "EXPLORE / 02", "SYSTEM CONTEXT / 03", "HTML + CSS / 04", "HUMAN REVIEW / 05", "REFINED PROTOTYPE / 06"];
const altitudes = {
  team: "Design + engineering leads own one workflow; DesignOps facilitates.",
  product: "Cross-functional leads + a system owner coordinate shared patterns and measures.",
  enterprise: "Federated product owners operate within Security, Legal, IT, and platform guardrails."
};

const slides = [...document.querySelectorAll(".slide")];
const $ = (selector) => document.querySelector(selector);
const state = { index: 0, generation: 0, cause: 0, stack: 0, pair: 0, loop: -1 };

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

function updateNotes() {
  const note = notes[state.index];
  const elapsed = notes.slice(0, Math.min(state.index, 16)).reduce((sum, item) => sum + item.seconds, 0);
  const timing = state.index < 16 ? `${clock(elapsed)}–${clock(elapsed + note.seconds)} · ${note.seconds} seconds` : state.index === 16 ? "10-minute Q&A · outside the 20-minute keynote" : "Optional backup · outside keynote timing";
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
  $("#counter").textContent = state.index < 16 ? `${String(state.index + 1).padStart(2, "0")} / 16` : state.index === 16 ? "Q&A" : `B${state.index - 16} / 5`;
  $("#slide-title").textContent = slide.dataset.title;
  $("#act-label").textContent = state.index < 4 ? "ACT I" : state.index < 11 ? "ACT II" : state.index < 15 ? "ACT III" : state.index === 15 ? "ACT IV" : state.index === 16 ? "Q&A" : "BACKUP";
  $("#progress").value = state.index + 1;
  $("#progress").setAttribute("aria-valuetext", `Slide ${state.index + 1} of ${slides.length}, including Q&A and backups`);
  $("#previous").disabled = state.index === 0;
  $("#next").disabled = state.index === slides.length - 1;
  document.querySelectorAll("#slide-index a").forEach((link, i) => link.setAttribute("aria-current", String(i === state.index)));
  document.title = `${state.index + 1}. ${slide.dataset.title} — DesignOps`;
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
  const open = force === undefined ? $("#notes").hidden : force;
  $("#notes").hidden = !open;
  $("#notes-toggle").setAttribute("aria-expanded", String(open));
  if (open) $("#notes-close").focus();
  else $("#notes-toggle").focus();
}

async function fullscreen() {
  if (!document.fullscreenEnabled) {
    $("#announcement").textContent = "Fullscreen is unavailable in this browser. Open index.html in a desktop browser to present fullscreen.";
    $("#fullscreen").textContent = "Fullscreen unavailable";
    return;
  }
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch (error) {
    $("#announcement").textContent = `Could not enter fullscreen: ${error.message}`;
    $("#fullscreen").textContent = "Fullscreen blocked";
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
  const dashboard = $("#metric-dashboard");
  ["LEADING / PROCESS SIGNALS", "WORKFLOW OUTCOME MEASURES"].forEach((label, group) => {
    const column = document.createElement("article");
    column.className = "metric-column";
    const title = document.createElement("h3");
    title.textContent = label;
    column.append(title);
    metrics.forEach((metric, index) => {
      if (metric.group !== group) return;
      const row = document.createElement("div");
      row.className = "metric-row";
      row.dataset.metric = String(index);
      const name = document.createElement("span");
      name.className = "metric-name";
      name.textContent = metric.name;
      const value = document.createElement("span");
      value.className = "metric-value";
      const unit = document.createElement("span");
      unit.className = "metric-unit";
      unit.textContent = metric.unit;
      const scale = document.createElement("span");
      scale.className = "metric-unit";
      scale.textContent = metric.scale;
      const bar = document.createElement("div");
      bar.className = "metric-bar";
      bar.setAttribute("aria-hidden", "true");
      bar.style.gridColumn = "1 / -1";
      bar.append(document.createElement("span"));
      row.append(name, value, unit, scale, bar);
      column.append(row);
    });
    dashboard.append(column);
  });
  selectMetrics("baseline");
}

function selectMetrics(scenario) {
  document.querySelectorAll("[data-metrics]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.metrics === scenario)));
  document.querySelectorAll("[data-metric]").forEach((row) => {
    const metric = metrics[Number(row.dataset.metric)];
    const value = metric[scenario];
    row.querySelector(".metric-value").textContent = `${value}${metric.short}`;
    row.style.setProperty("--value", `${value / metric.max * 100}%`);
    const improved = metric.better === "lower" ? value < metric.baseline : metric.better === "higher" && value > metric.baseline;
    row.classList.toggle("good", scenario === "pilot" && improved);
    row.classList.toggle("warning", scenario === "pilot" && metric.name === "Review effort");
  });
  $("#metric-verdict").textContent = scenario === "baseline"
    ? "Baseline: establish the same scope, units, and review rubric."
    : "Illustrative pilot: production improves; review effort rises. Verify the trade-off.";
}

function setPair(step) {
  state.pair = step;
  $("#prototype-scene").dataset.step = String(step);
  $("#sketch").hidden = step >= 3;
  $("#prototype-form").hidden = step < 3;
  $("#alternative").hidden = step !== 1;
  $("#pair-explanation").textContent = pairDescriptions[step];
  $("#prototype-code").firstElementChild.textContent = pairCode[step];
  $("#prototype-label").textContent = pairLabels[step];
  document.querySelectorAll("#pair-steps li").forEach((item, i) => {
    item.classList.toggle("current", i === step);
    item.classList.toggle("done", i < step);
  });
  const next = $('[data-action="pair"]');
  next.textContent = step === 5 ? "Collaboration cycle complete ✓" : "Next collaboration step →";
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
  },
  cause(button) {
    state.cause = (state.cause + 1) % 5;
    document.querySelectorAll("#causal-chain li").forEach((item, i) => item.classList.toggle("current", i <= state.cause));
    for (const selector of [".branch-lines path", ".branch-outputs span"]) {
      document.querySelectorAll(selector).forEach((item, i) => item.classList.toggle("lit", i <= state.cause));
    }
    button.textContent = state.cause === 4 ? "Restart the chain" : "Trace the chain";
  },
  align(button) {
    const aligned = $("#fragmentation").classList.toggle("aligned");
    button.setAttribute("aria-pressed", String(aligned));
    button.textContent = aligned ? "Remove shared standards" : "Apply shared standards";
    $("#fragment-caption").textContent = aligned ? "Distinct ideas. Shared constraints. Accountable decisions." : "Different patterns. Conflicting terminology. Unowned decisions.";
  },
  journey(button) {
    const journeys = $("#journeys");
    journeys.classList.remove("running");
    // Restart a finite explanatory animation; there is no slide-advance timer.
    void journeys.offsetWidth;
    journeys.classList.add("running");
    button.textContent = "Replay both journeys ↺";
  },
  connect(button) {
    const connected = $("#network").classList.toggle("connected");
    button.setAttribute("aria-pressed", String(connected));
    button.textContent = connected ? "Disconnect the control plane" : "Connect the control plane";
    $("#network-status").textContent = connected ? "Shared rules. Reusable context. Human evaluation." : "Isolated tools. Local rules. Fragmented context.";
  },
  stack(button) {
    state.stack = (state.stack + 1) % 5;
    document.querySelectorAll("[data-layer]").forEach((layer) => layer.classList.toggle("revealed", Number(layer.dataset.layer) <= state.stack));
    button.textContent = state.stack === 4 ? "Rebuild from the foundation" : "Build the context stack";
  },
  pair() { setPair(Math.min(5, state.pair + 1)); },
  "pair-reset"() { setPair(0); },
  loop(button) {
    state.loop = (state.loop + 1) % 5;
    document.querySelectorAll(".loop-node").forEach((node, i) => node.classList.toggle("current", i === state.loop));
    const stages = ["AI generates with current context.", "Humans evaluate with evidence and expertise.", "Capture the decision, rationale, and owner.", "Review and version the improved context.", "Re-evaluate the next output. Close the loop."];
    $("#loop-status").textContent = stages[state.loop];
    button.textContent = state.loop === 4 ? "Start the next cycle ↺" : "Follow one learning cycle →";
  },
  "metric-definitions"() { navigate(21); },
  closing(button) {
    $("#closing-reveal").hidden = false;
    button.setAttribute("aria-expanded", "true");
    $("#announcement").textContent = "DesignOps. AI doesn't eliminate the need for DesignOps. It makes DesignOps infrastructure.";
    button.hidden = true;
    $("#title-16").tabIndex = -1;
    $("#title-16").focus({ preventScroll: true });
  }
};

document.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.dataset.action) actions[button.dataset.action](button);
  if (button.dataset.life !== undefined) selectLife(Number(button.dataset.life));
  if (button.dataset.metrics) selectMetrics(button.dataset.metrics);
  if (button.dataset.altitude) {
    document.querySelectorAll("[data-altitude]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    $("#altitude-detail").textContent = altitudes[button.dataset.altitude];
  }
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
$("#overview-toggle").addEventListener("click", () => $("#overview").showModal());
$("#overview-close").addEventListener("click", () => $("#overview").close());
$("#slide-index").addEventListener("click", (event) => {
  if (event.target.closest("a")) $("#overview").close();
});

document.addEventListener("keydown", (event) => {
  if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || $("#overview").open) return;
  if (event.target.closest("input, textarea, select, [contenteditable='true']")) return;
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
  $("#fullscreen").textContent = active ? "Exit fullscreen" : "Fullscreen";
  $("#fullscreen").setAttribute("aria-label", active ? "Exit fullscreen" : "Enter fullscreen");
});
window.addEventListener("hashchange", () => renderSlide(readHash()));
new ResizeObserver(fitStage).observe($("#viewport"));
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
renderSlide(readHash());
fitStage();
