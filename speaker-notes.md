# DesignOps as AI Infrastructure

Governance, systems, and the new role of DesignOps in product teams

Presentation review prototype 0.1. Primary source: the supplied **DesignOps as AI Infrastructure Presentation Outline ConfOps 2026**, including the original brief, frameworks, review notes, and FAQ. The accompanying build brief supplies the 16-slide narrative and implementation requirements.

Generated from the presenter-note data in app.js. To update this document after editing those notes: `node check.mjs --write-notes`.

## Pacing

| Act | Slides | Window | Duration |
| --- | --- | --- | --- |
| I: The acceleration paradox | 1–4 | 0:00–5:00 | 5 minutes |
| II: The new role of DesignOps | 5–11 | 5:00–12:00 | 7 minutes |
| III: Making the operating model real | 12–15 | 12:00–18:00 | 6 minutes |
| IV: Closing | 16 | 18:00–20:00 | 2 minutes |
| Q&A | 17, with optional 18–22 | 20:00–30:00 | 10 minutes |

The timing is a rehearsal guide, not an auto-advance schedule. Keep on-screen examples short enough to preserve discussion time. Read the full notes before presenting; the slides intentionally omit nuance that belongs in the spoken narrative.

## 1. AI makes us faster. Who keeps us coherent?

**Timing:** 0:00–1:00 (60 seconds)

**Takeaway:** AI increases production capacity. DesignOps maintains organizational coherence.

**Visual concept:** One shared source fans out into different shapes: more output, less consistency.

**Interaction / reveal:** A short entrance trace establishes the flow motif. No automatic slide advancement.

**Speaker notes:** Open with the tension, not a list of tools. Teams can generate briefs, concepts, research summaries, and code faster than before. But faster creation does not automatically produce a coherent customer experience. This talk argues that DesignOps expands from optimizing workflows into designing the operating infrastructure for human–AI product teams. We will connect governance, organizational knowledge, and evaluation, then make that practical through a paired prototype and a measurable pilot. The audience leaves with a framework and a first-30-days starting point.

**Transition:** What changes when production becomes distributed across the whole team?

---

## 2. Everyone can generate

**Timing:** 1:00–2:05 (65 seconds)

**Takeaway:** Distributed generation moves the bottleneck toward alignment, quality, and governance.

**Visual concept:** Four parallel lanes: product, research, design, and engineering.

**Interaction / reveal:** Distribute generation activates one role per click; a fifth click resets the example.

**Speaker notes:** Each discipline gains production capacity. PMs generate briefs and hypotheses; researchers synthesize evidence; designers explore concepts; engineers generate components and tests. Generation is more distributed, but expertise is not interchangeable. The same language model can interpret the product differently in each lane. These are categories of assistance, not guarantees that outputs are accurate. Ask the room to imagine all four lanes producing simultaneously. The new constraint is agreeing on what to produce, what fits the system, and who evaluates it.

**Transition:** Without shared conditions, more output can create more variation.

---

## 3. The acceleration paradox

**Timing:** 2:05–3:15 (70 seconds)

**Takeaway:** Shared context and evaluation govern variation without eliminating useful exploration.

**Visual concept:** A causal chain sits above diverging output branches; a shared standards band aligns their treatment.

**Interaction / reveal:** Trace the chain progresses through five stages, activating more branches and divergent patterns. Apply shared standards toggles fragmentation versus coherence.

**Speaker notes:** Read the chain deliberately: more AI, more output, more variation, more decisions, more opportunities for inconsistency. This is a conceptual mechanism, not a statistical forecast. Variation is useful during exploration; unmanaged variation becomes expensive at system boundaries. Examples include conflicting terminology, duplicated research, inaccessible patterns, undocumented AI decisions, and design-system drift. The source's '17 versions of a pattern' is rhetorical, not a measured statistic, so we do not chart it. Apply shared context and evaluation: options can remain different while obeying common constraints. A green state is an explanatory metaphor, not a claim that standards automatically eliminate defects.

**Transition:** The opportunity is to redesign how work moves, not just accelerate each handoff.

---

## 4. Before AI / a proposed AI-enabled journey

**Timing:** 3:15–5:00 (105 seconds)

**Takeaway:** Pilot collaborative production and use any capacity gained for customer learning.

**Visual concept:** Two journeys connect customer need to customer feedback: sequential handoffs and a collaborative experiment loop.

**Interaction / reveal:** Animate both journeys highlights sequential dependencies versus parallel collaboration; timings are illustrative motion, not measured duration.

**Speaker notes:** The before journey is a deliberately simplified pattern, not a claim that all pre-AI teams worked sequentially. Research informs a brief, design produces mocks, engineering builds, and customers finally respond. The proposed alternative starts with Mission, Milestones, and Metrics—the source's MMM. PM, research, design, and engineering share intent; specification, concepts, feasibility, and HTML/CSS prototypes evolve together. Releases can become experiments that inform another iteration. AI may reduce production effort, but review, integration, and dependency costs still count. Do not promise a one-week release or universal acceleration. Measure elapsed production time, person-hours, waiting time, customer validation, and experimentation cadence. The animation contrasts sequencing, not numeric speed. A prototype is not a production release; user evidence remains necessary.

**Transition:** DesignOps helps make that collaborative operating model repeatable.

---

## 5. The role expands; the fundamentals remain

**Timing:** 5:00–5:45 (45 seconds)

**Takeaway:** People, process, and systems remain the foundations; their scope expands.

**Visual concept:** The familiar foundations sit beside six traditional-to-expanded responsibilities.

**Interaction / reveal:** Static comparison; the expanded scope is immediately visible.

**Speaker notes:** Refresh the fundamentals. DesignOps improves the conditions for effective design through people, process, and systems. Staffing, onboarding, rituals, tooling, and collaboration do not disappear. AI broadens the reach: from enabling designers to enabling the product ecosystem; from documenting procedures to making knowledge usable at the moment of generation; from efficiency alone to quality and outcomes. This is a scope expansion, not a dismissal of traditional operations or a mandate to reorganize.

**Transition:** A useful metaphor for that expanded role is the control plane.

---

## 6. DesignOps as the control plane

**Timing:** 5:45–6:40 (55 seconds)

**Takeaway:** DesignOps connects distributed actors through shared rules, context, and evaluation.

**Visual concept:** Five AI-enabled actors connect through a common operating layer.

**Interaction / reveal:** Connect the control plane switches dashed, weak links to shared connections; click again to disconnect.

**Speaker notes:** The control plane metaphor distinguishes defining the conditions of work from doing everyone's work. PM, research, design, prototyping, and engineering keep their domain responsibilities. DesignOps coordinates reusable context, risk-based guardrails, evaluation criteria, ownership, and enablement. It should not become a central approval queue. Security, Legal, IT, platform teams, and domain experts remain essential partners. Clear boundaries can allow teams to move without repeatedly asking permission for known-safe tasks.

**Transition:** We can make this operating layer memorable with three questions.

---

## 7. Govern. Context. Evaluate.

**Timing:** 6:40–7:45 (65 seconds)

**Takeaway:** GOVERN: what can AI do? CONTEXT: what does it know? EVALUATE: what does good look like?

**Visual concept:** Three equal pillars with a supporting enablement foundation.

**Interaction / reveal:** Static anchor slide. Return to these three questions throughout the talk.

**Speaker notes:** Govern covers permitted tools, data and privacy boundaries, exclusions, risk levels, review checkpoints, decision owners, and documentation. Context covers tokens, components, research, product principles, brand, terminology, and constraints. Evaluate combines system checks, user needs, accessibility, product strategy, engineering feasibility, and human judgment. Reconcile the source's Stewardship × Systems × Enablement rather than offering a competing model: stewardship grounds governance and accountability; systems make context consumable; enablement activates all three through workflows, canonical prompts, rubrics, examples, playbooks, and training. Evaluation is a shared capability supported by stewardship and enablement, not a replacement for enablement.

**Transition:** The most durable part of that infrastructure is organizational memory.

---

## 8. Organizational memory is the advantage

**Timing:** 7:45–8:45 (60 seconds)

**Takeaway:** The differentiator is governed organizational knowledge, not loyalty to a model.

**Visual concept:** A five-layer AI design stack, built from models to connecting DesignOps infrastructure.

**Interaction / reveal:** Build the context stack adds one highlighted layer per click; after all layers it resets to the foundation.

**Speaker notes:** Models provide capabilities. Agents and tools connect capabilities to tasks. Organizational context provides what models do not inherently know: tokens, components, research, product knowledge, brand, accessibility, terminology, workflows, repositories, PRs, existing experiences, and past decisions. Stewardship adds guardrails, exclusions, evaluation, and human checkpoints. DesignOps connects the layers. The diagram is a responsibility model, not a mandatory software architecture. Do not feed all organizational data into a model: permissions, privacy, provenance, source quality, freshness, and ownership determine what context may be used. A design system is one part of organizational memory, not the whole memory.

**Transition:** Useful context makes better candidates possible. Evaluation still determines what is acceptable.

---

## 9. When generation is cheap, evaluation is strategic

**Timing:** 8:45–9:45 (60 seconds)

**Takeaway:** Automated checks support accountable human judgment; they cannot prove design quality.

**Visual concept:** Multiple candidates flow through a six-part rubric to an explicit human decision.

**Interaction / reveal:** Static flow; no fabricated AI score or automatic approval.

**Speaker notes:** Walk through the rubric: approved components and tokens; identified user needs without unnecessary complexity; accessibility; brand and content principles; product strategy; and engineering feasibility. Domain experts define the standard together. Automated checks can detect specific violations, but a passing score cannot establish usefulness, coherence, or user success. A human reviewer accepts, revises, or rejects and records reasons. Keep evidence linked to decisions. Designers increasingly direct and evaluate alternatives, but craft and domain expertise remain indispensable.

**Transition:** These same responsibilities apply throughout the product lifecycle.

---

## 10. DesignOps across the product lifecycle

**Timing:** 9:45–10:40 (55 seconds)

**Takeaway:** Governance, context, and evaluation follow the work across every lifecycle stage.

**Visual concept:** Five selectable stages sit above a persistent shared-infrastructure rail.

**Interaction / reveal:** Select a stage to reveal AI assistance, DesignOps infrastructure, and the human checkpoint.

**Speaker notes:** Discover: AI can cluster and retrieve research; DesignOps supports consent, traceability, source quality, and reusable knowledge. Define: AI can draft briefs and identify gaps; shared brief structure, product vocabulary, and source context keep framing grounded. Design: alternatives and prototypes rely on system rules, prompts, accessibility constraints, and critique. Build: generated code needs component metadata, supported patterns, tokens, validation, and paired review. Measure: AI can summarize observations, but people interpret outcomes, record caveats, and decide what should change. Do not turn this into a tool catalog. Show one or two stages live and use the persistent rail to connect them.

**Transition:** Let's make the design-to-build boundary concrete with a paired example.

---

## 11. Designer + engineer + AI: concept to HTML/CSS

**Timing:** 10:40–12:00 (80 seconds)

**Takeaway:** Designer–engineer pairing makes intent, system constraints, implementation, and critique one conversation.

**Visual concept:** Six collaboration steps transform a rough onboarding concept into a working local HTML/CSS form.

**Interaction / reveal:** Advance the six steps, then try the form. It only updates local page state; no account, storage, model, or network integration.

**Speaker notes:** Start with a user need: a new teammate must create a workspace. Agree on the success signal. Explore a simple first task versus an overloaded form. Inspect existing tokens, supported component patterns, semantics, and constraints before code generation. The designer brings interaction intent and craft; the engineer brings feasibility, implementation quality, and supported architecture; AI assists with alternatives and implementation. The coded form uses a label, required input, keyboard focus, a status message, and shared CSS tokens. This demo is pre-authored, not live AI generation or an integration with Paper or Figma. Review together: user need, terminology, tokens, accessibility, feasibility, and error handling. Refine and capture the rationale. Automated checks and this visual demo do not replace a full accessibility audit or user validation; the component is not production-ready authentication.

**Transition:** The output matters. The decision that improved the output is reusable organizational knowledge.

---

## 12. The organizational learning loop

**Timing:** 12:00–13:05 (65 seconds)

**Takeaway:** Learning compounds only when decisions feed back into maintained context and standards.

**Visual concept:** A closed five-stage loop surrounds organizational memory.

**Interaction / reveal:** Follow one learning cycle highlights a stage per click, wrapping back to generation.

**Speaker notes:** AI generates using the current context. Humans evaluate. Capture the decision, rationale, evidence, and owner—not just the final image or code. Update the context package, rubric, example, token, or workflow that caused the problem. Review and version the change before reuse, then evaluate whether later AI-assisted work actually improves. For example, the paired demo may reveal that first-time setup should ask for one field, not three. That learning belongs with the pattern and its evidence. Avoid treating every observation as universal policy. Assign an owner, access rules, review cadence, and a way to retire stale knowledge.

**Transition:** A learning loop needs measures of both capacity and coherence.

---

## 13. Measure speed and coherence

**Timing:** 13:05–14:55 (110 seconds)

**Takeaway:** Evaluate the whole workflow: speed, review cost, quality, coherence, and customer outcomes.

**Visual concept:** Two dashboard columns separate leading/process signals from workflow outcome measures.

**Interaction / reveal:** Toggle baseline and pilot. Review effort deliberately rises in the pilot. Definitions links to the measurement backup.

**Speaker notes:** Every number is synthetic: illustrative scenario—not measured results, benchmarks, or a forecast. The comparison teaches the measurement design, not an ROI claim. Baseline to pilot: median brief-to-validated-concept time 9 to 6 days; accepted production rate 2 to 3 artifacts per team-week; production effort 18 to 11 hours per concept; review effort 4 to 6 hours; rework 35% to 24%; applicable system checks passed 78% to 90%; open accessibility/quality defects 6 to 4 per 10 screens; design-to-code divergence 28% to 18%; experiments 1 to 2 per week; approved-context reuse 25% to 70%. Review effort rises intentionally: faster generation does not imply less review. Leading/process measures signal behavior and readiness; outcome measures test delivered workflow results. System compliance is a leading quality signal, not proof of user benefit. Bars use independent scales stated in labels and cannot be compared across rows. Match work scope, staffing, artifact definition, and evaluation criteria; include sample sizes and dispersion. Track customer task success separately. No customer outcome data is supplied.

**Transition:** Most of the raw material for this operating model already exists.

---

## 14. From documentation to executable standards

**Timing:** 14:55–16:10 (75 seconds)

**Takeaway:** Turn domain knowledge into versioned, reusable context and verifiable standards.

**Visual concept:** Seven familiar artifacts become operational infrastructure beside an example context package.

**Interaction / reveal:** Static transformation; readable text remains editable for future PowerPoint recreation.

**Speaker notes:** Guidelines become machine-readable rules; design systems gain metadata and code equivalents; templates become canonical prompts; documentation becomes context packages; critique becomes rubrics; SOPs become human–AI workflows; efficiency measures expand to speed, quality, and outcomes. A canonical prompt is more than 'create onboarding.' It carries product context, target user, accessibility, design-system rules, tone, interaction principles, constraints, and evaluation criteria. Domain experts co-author and maintain it; DesignOps facilitates reuse and governance. 'Executable' is a direction, not magic: writing a YAML-like package does not enforce it. Enforcement requires integration, appropriate permissions, validation, and human review. Keep rationale and sources alongside rules.

**Transition:** Start with one bounded workflow rather than a comprehensive transformation.

---

## 15. Your first 30 days

**Timing:** 16:10–18:00 (110 seconds)

**Takeaway:** A 30-day pilot can begin at team, product-area, or enterprise level with clear ownership.

**Visual concept:** Four weekly phases and an organizational-altitude selector.

**Interaction / reveal:** Choose Team, Product area, or Enterprise to inspect different ownership and governance needs.

**Speaker notes:** Days 1–7: map actual AI use and identify inconsistency, quality gaps, and risk. Days 8–14: select one useful, bounded workflow and package relevant organizational knowledge. Days 15–21: name decision owners, define human checkpoints and evaluation criteria, and establish a baseline before the pilot. Days 22–30: run comparable work and decide whether to adopt, revise, or stop. Avoid sensitive or high-risk first pilots unless the appropriate governance is already in place. At team level, design and engineering leads can own a single workflow with DesignOps facilitation. At product-area level, PM, research, design, engineering, and a system owner coordinate shared patterns and cross-team outcomes. At enterprise level, federated product ownership works within Security, Legal, IT, and platform guardrails. DesignOps connects the altitudes; it does not unilaterally own policy or product decisions. Calendar windows are a suggested starting plan, not promised delivery dates.

**Transition:** Return to the central question: if AI participates in design, who designs its operating environment?

---

## 16. Who designs the system?

**Timing:** 18:00–20:00 (120 seconds)

**Takeaway:** AI doesn't eliminate the need for DesignOps. It makes DesignOps infrastructure.

**Visual concept:** A quiet question, a deliberate answer reveal, and three concluding statements.

**Interaction / reveal:** Pause before revealing DesignOps. Continue to the Q&A slide when ready.

**Speaker notes:** Slow down. Read the question and leave space: if AI becomes part of how we design products, who designs the system in which AI operates? Reveal DesignOps. This is not a territorial claim that one function owns all AI. It is an invitation for DesignOps to connect domain expertise, governance, knowledge, workflows, and evaluation. AI creates capacity. Systems create consistency. Stewardship creates trust. DesignOps connects all three. The future is not merely managing work around design; it is designing the infrastructure through which humans and AI create products together. The practical challenge is one workflow, a baseline, a maintained context package, named human checkpoints, and evidence that quality has not been traded for speed. End on the thesis and pause rather than adding more tools.

**Transition:** Let's talk. Where is your team generating faster than it can maintain coherence?

---

## 17. Let's talk — Q&A

**Timing:** 10-minute Q&A, outside keynote timing

**Takeaway:** Use the conversation to connect the operating model to the audience's constraints.

**Visual concept:** Five navigable question prompts beside a minimal Q&A invitation.

**Interaction / reveal:** Select a topic to open a backup; each backup links back to Q&A.

**Speaker notes:** Reserve ten minutes for discussion. Invite specific workflow examples rather than abstract predictions. The five backups cover governance ownership, the evolving role, AI-ready design systems, model-agnostic workflows and canonical prompts, and measurement. If asked whether this is just AI governance, explain that governance is one component; context, workflows, evaluation, and enablement make AI useful in the actual product ecosystem. If asked what to do tomorrow: map, identify, codify, standardize, and measure.

**Transition:** Choose a backup only when it helps answer a question.

---

## 18. Backup: shared governance ownership

**Timing:** Optional backup, outside keynote timing

**Takeaway:** Risk boundaries, access, operating-model design, and product judgment need explicit owners.

**Visual concept:** Four ownership domains; none claims the entire AI operating model.

**Interaction / reveal:** Back to Q&A returns to the topic menu.

**Speaker notes:** Security and Legal establish organizational risk boundaries; IT and platform teams manage technology and access. DesignOps translates policy into useful workflow conditions with domain experts. Product, research, design, and engineering own their decisions and release quality. Good governance removes repetitive ambiguity through approved paths, risk-based human checkpoints, escalation, and documented exceptions. Bad governance creates an unnecessary approval queue. Specific accountabilities must be agreed locally; the slide is a discussion model, not a universal RACI.

**Transition:** Return to Q&A.

---

## 19. Backup: operating-environment architect, not AI factory

**Timing:** Optional backup, outside keynote timing

**Takeaway:** DesignOps architects the operating environment rather than building everyone's AI tools.

**Visual concept:** Six responsibilities and five kinds of product work.

**Interaction / reveal:** Back to Q&A returns to the topic menu.

**Speaker notes:** The emerging role includes governance, design intelligence, workflow architecture with subject-matter experts, quality systems, enablement, and measurement. 'AI Ops Systems Architect' is a possible direction, not a prescribed title. The source's prototyper, builder, sweeper, grower, and maintainer archetypes are retained as kinds of work: prototype, build, simplify/improve, grow, and maintain. Their risk and evaluation needs differ. The source includes an unverified external attribution; this deck makes no authorship claim for the archetypes. Do not turn this model into a requirement for DesignOps to become an AI engineering team.

**Transition:** Return to Q&A.

---

## 20. Backup: an AI-ready design system

**Timing:** Optional backup, outside keynote timing

**Takeaway:** AI readiness adds meaning, constraints, examples, and evaluation to an existing design system.

**Visual concept:** Foundation plus machine-consumable reasoning, with a context contract underneath.

**Interaction / reveal:** Back to Q&A returns to the topic menu.

**Speaker notes:** Keep tokens, components, patterns, and guidelines. Add semantic metadata, usage rules, examples, constraints, accessibility requirements, relationships, code equivalents, and evaluation criteria. Start with one pattern rather than translating the whole library. Include valid and invalid examples, allowed data access, provenance, version, freshness, and a named owner. AI-readable does not mean publicly accessible, indiscriminately retrievable, or automatically correct. Research and existing product experiences remain important context beyond the component library.

**Transition:** Return to Q&A.

---

## 21. Backup: model-agnostic workflows and canonical prompts

**Timing:** Optional backup, outside keynote timing

**Takeaway:** Build durable knowledge, rules, workflows, and evaluation around replaceable models.

**Visual concept:** A stable context contract spans interchangeable model capabilities.

**Interaction / reveal:** Back to Q&A returns to the topic menu.

**Speaker notes:** Models and tools will change. Preserve the institutional knowledge, permissions, workflows, examples, and acceptance criteria that define how the organization operates. Model-agnostic does not mean zero adaptation: tool capabilities, context limits, privacy controls, and behavior differ. Re-run a representative evaluation set before a model switch. Canonical prompts are co-authored by domain experts and governed as versioned knowledge artifacts, not selected by DesignOps alone. Standardization creates an informed starting point, not a ban on exploration.

**Transition:** Return to Q&A.

---

## 22. Backup: metric definitions and measurement plan

**Timing:** Optional backup, outside keynote timing

**Takeaway:** Operational definitions, comparable work, and evidence qualifications matter more than dashboard polish.

**Visual concept:** Definitions, units, and collection methods beside a concise pilot protocol.

**Interaction / reveal:** Dashboard returns to slide 13 with its selected scenario preserved. Q&A returns to the topic menu.

**Speaker notes:** Define 'validated concept' before collecting time: reviewer acceptance plus the agreed user-evidence threshold. Count accepted artifacts, not raw generations. Separate elapsed days from person-hours, production from review, and quality defects from severity. Define denominators for compliance, rework, reuse, and divergence. Complete experiments include a recorded learning decision, not just a release. Compare similar tasks and staffing; document sample size, spread, exclusions, and complexity. Use approved data collection with appropriate privacy controls. Review effort may increase while total effort falls, but a small observational pilot cannot establish causality. Set decision thresholds in advance and track customer task success or other relevant product outcomes. All dashboard numbers are explicitly synthetic.

**Transition:** Return to the dashboard or Q&A.

## Illustrative metric dataset

**Illustrative scenario — not measured results.** These numbers are not benchmarks, actual performance, causal evidence, or a forecast. Compare scenarios within each metric; bar scales differ across metrics.

| Metric | Baseline | Pilot | Unit / denominator | Category |
| --- | --- | --- | --- | --- |
| Production effort | 18h | 11h | person-hours / accepted concept | Leading / process |
| Review effort | 4h | 6h | person-hours / accepted concept | Leading / process |
| Design-system compliance | 78% | 90% | % applicable checks passed | Leading / process |
| Approved-context reuse | 25% | 70% | % artifacts citing approved context | Leading / process |
| Experimentation cadence | 1/wk | 2/wk | completed experiments / week | Leading / process |
| Brief → validated concept | 9d | 6d | median elapsed days | Workflow outcome |
| Design production rate | 2/wk | 3/wk | accepted artifacts / team-week | Workflow outcome |
| Rework / revision rate | 35% | 24% | % artifacts needing major revision | Workflow outcome |
| Accessibility / quality defects | 6/10 | 4/10 | open defects / 10 reviewed screens | Workflow outcome |
| Design-to-code divergence | 28% | 18% | % audited UI instances divergent | Workflow outcome |

Baseline and pilot are synthetic teaching scenarios. They deliberately include an increase in review effort. Leading/process classifications are useful for this workflow, not universal definitions. No actual customer-outcome evidence has been supplied.

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
| Core thesis, central question, capacity versus coherence | 1–3, 16 |
| Product/customer journey before and after AI; Mission, Milestones, Metrics | 4 |
| DesignOps fundamentals and expanding responsibilities | 5, 15, 19 |
| AI control plane; domain ownership | 6, 18 |
| Stewardship × Systems × Enablement reconciled with Govern / Context / Evaluate | 7 and its notes |
| Organizational memory and five-layer AI design stack | 8, 20 |
| Evaluation scarcity and six-part quality rubric | 9 |
| Discover → Define → Design → Build → Measure | 10 and its notes |
| Designer–engineer pairing; early concept to HTML/CSS prototype | 11 |
| Learning captured into context and standards | 12 |
| Production time, rate, review, rework, consistency, and measurement | 13, 22 |
| Canonical prompts and seven artifact transformations | 14, 21 |
| Team, product-area, and enterprise altitudes | 15 |
| Evolving role and work archetypes | 19 |
| Risks if infrastructure is absent | 3 and its notes |
| Shared governance, AI-team concern, AI-ready systems, model change, prompt ownership | 17–22 |
| Tomorrow's actions: map, identify, codify, standardize, measure | 15, 17 |

The Spanish review notes are implemented in English. Traditional DesignOps work is expanded, not erased. The proposed workflow is explicitly a hypothesis to validate. The source's tool mentions do not imply integrations; the pair-programming demonstration uses local HTML/CSS. The source's unverified external archetype attribution is not reproduced as a factual attribution. Rhetorical counts are not converted into statistical claims. The original longer outline is condensed to 16 main slides, with meaningful detail moved into notes and backups rather than discarded.

## Conversion and delivery notes

Keep slide text editable and vector diagrams separate from surrounding copy when recreating in PowerPoint. Use static before/after states or native appearance builds for branches, networks, stacks, and learning loops. Replace the live pair-programming form with concept-to-prototype frames and a link to this HTML presentation. Keep metric scenario labels and human-review qualifications visible in every exported state. The README documents full conversion assumptions and local navigation.
