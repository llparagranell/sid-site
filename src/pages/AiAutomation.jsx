import { useState } from "react";
import { motion } from "framer-motion";
import {
    Bot, MessageSquare, Workflow, Plug, Zap, Search,
    Map, FlaskConical, ShieldCheck, CheckCircle2,
    Code2, Cloud, Database, Layers, RefreshCcw,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import PageHeaderBackground from "../components/PageHeaderBackground";
import Container from "../components/ui/Container";
import Eyebrow from "../components/ui/Eyebrow";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import Reveal, { Stagger } from "../components/motion/Reveal";
import { staggerChild } from "../components/motion/constants";

const MotionLi = motion.li;

const serviceTypes = [
    {
        title: "Chatbots & AI Assistants",
        desc: "Support and lead-capture bots that answer from your own docs and know when to hand off to a person.",
        points: ["Website & WhatsApp bots", "Answers from your knowledge base", "Lead qualification", "Human handoff built in"],
        icon: MessageSquare,
    },
    {
        title: "AI Agents & Copilots",
        desc: "Agents that read, draft and act inside the tools your team already uses, with approval steps where they matter.",
        points: ["Inbox & ticket triage", "Document drafting", "CRM updates", "Approvals stay human"],
        icon: Bot,
    },
    {
        title: "Workflow Automation",
        desc: "Pipelines that move data between your systems without copy-paste, on a schedule or on a trigger.",
        points: ["Lead routing", "Invoice & order processing", "Report generation", "Scheduled jobs & alerts"],
        icon: Workflow,
    },
    {
        title: "LLM & API Integration",
        desc: "Language models wired into your existing product — grounded in your data and monitored in production.",
        points: ["OpenAI & Claude APIs", "RAG over your data", "Prompt & eval pipelines", "Usage and cost monitoring"],
        icon: Plug,
    },
];

const techStack = [
    { name: "OpenAI APIs", category: "Models", icon: Bot },
    { name: "Claude API", category: "Models", icon: Bot },
    { name: "LangChain", category: "Orchestration", icon: Workflow },
    { name: "n8n", category: "Orchestration", icon: Workflow },
    { name: "Zapier / Make", category: "Orchestration", icon: Zap },
    { name: "Python", category: "Backend", icon: Code2 },
    { name: "Node.js", category: "Backend", icon: Code2 },
    { name: "FastAPI", category: "Backend", icon: Code2 },
    { name: "Postgres + pgvector", category: "Data", icon: Database },
    { name: "WhatsApp API", category: "Channels", icon: MessageSquare },
    { name: "Docker", category: "Deployment", icon: Layers },
    { name: "AWS", category: "Cloud", icon: Cloud },
];

const processSteps = [
    { id: "01", title: "Audit the Workflow", desc: "We map how the work happens today and where the hours actually go.", icon: Search },
    { id: "02", title: "Pick the Highest-Return Step", desc: "One process, chosen for saved hours per week — not for demo value.", icon: Map },
    { id: "03", title: "Prototype in a Week", desc: "A working automation on real examples from your business, not mock data.", icon: FlaskConical },
    { id: "04", title: "Wire the Integrations", desc: "Connecting your CRM, inbox, sheets and internal tools through their APIs.", icon: Plug },
    { id: "05", title: "Test Against Real Cases", desc: "Accuracy checked on past work before anything touches a customer.", icon: ShieldCheck },
    { id: "06", title: "Launch with Guardrails", desc: "Fallbacks, human review steps and alerts for anything the automation is unsure about.", icon: Zap },
    { id: "07", title: "Measure & Extend", desc: "Hours saved and error rates tracked, then the next workflow queued.", icon: RefreshCcw },
];

/* ------------------------------------------------------------------------
   Static blueprint of one automation run: trigger, agent, three actions.
   Nothing moves; the card reveals once. Labels are 15 SVG units so they stay
   ~10px even when the 480-unit viewBox renders at phone width.
   ------------------------------------------------------------------------ */
const PIPELINE = {
    trigger: { x: 70, y: 160, w: 92, label: "Trigger" },
    agent: { x: 240, y: 160, w: 100, label: "AI agent" },
    actions: [
        { x: 406, y: 80, w: 124, label: "Reply sent" },
        { x: 406, y: 160, w: 124, label: "CRM updated" },
        { x: 406, y: 240, w: 124, label: "Human review" },
    ],
};

function PipelineDiagram() {
    const { trigger, agent, actions } = PIPELINE;
    return (
        <div className="flex flex-col overflow-hidden rounded-2xl border border-line-dark bg-ink-2">
            <svg
                role="img"
                aria-label="One automation run: a trigger reaches the AI agent, which sends the reply, updates the CRM, or hands the case to human review."
                viewBox="0 0 480 320"
                className="w-full text-accent-bright"
                fill="none"
            >
                <g stroke="currentColor" strokeWidth="1" className="opacity-30">
                    <path d={`M${trigger.x + trigger.w / 2} ${trigger.y} L${agent.x - agent.w / 2} ${agent.y}`} />
                    {actions.map((action) => (
                        <path
                            key={action.label}
                            d={`M${agent.x + agent.w / 2} ${agent.y} L${action.x - action.w / 2} ${action.y}`}
                        />
                    ))}
                </g>
                {[trigger, agent, ...actions].map((node) => (
                    <g key={node.label}>
                        <rect
                            x={node.x - node.w / 2}
                            y={node.y - 22}
                            width={node.w}
                            height="44"
                            rx="6"
                            strokeWidth="1.5"
                            className="fill-ink-2 stroke-accent-bright"
                        />
                        <text
                            x={node.x}
                            y={node.y + 5}
                            textAnchor="middle"
                            className="fill-paper type-mono text-[15px]"
                        >
                            {node.label}
                        </text>
                    </g>
                ))}
            </svg>
            <div className="flex items-center justify-between gap-4 border-t border-line-dark px-5 py-4">
                <span className="type-eyebrow text-muted-dark">One run, end to end</span>
                <span className="type-eyebrow flex items-center gap-2 text-accent-bright">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
                    Unattended
                </span>
            </div>
        </div>
    );
}

function IconBox({ icon: Icon, tone = "light" }) {
    return (
        <span
            className={
                tone === "dark"
                    ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-3 text-accent-bright"
                    : "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent"
            }
        >
            <Icon size={20} aria-hidden="true" />
        </span>
    );
}

export default function AiAutomation() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const openBooking = () => setIsBookingOpen(true);
    const closeBooking = () => setIsBookingOpen(false);

    return (
        <div className="relative min-h-screen overflow-x-clip bg-paper text-ink font-sans">
            <Navbar onBookClick={openBooking} />

            <main>
                {/* Page header */}
                <header className="band-dark relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
                    <PageHeaderBackground tone="dark" />
                    <Container className="relative z-10">
                        <Reveal className="flex flex-col items-start gap-8">
                            <Eyebrow tone="dark">AI Automation</Eyebrow>
                            <h1 className="type-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] text-paper max-w-[14ch]">
                                Put the repeat work on <em className="italic text-accent-bright">autopilot</em>.
                            </h1>
                            <p className="text-muted-dark text-lg md:text-xl max-w-[56ch] leading-relaxed">
                                Chatbots, AI agents and automated workflows that handle the routine, so your team
                                handles the exceptions.
                            </p>
                            <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                Automate a workflow
                            </Button>
                        </Reveal>
                    </Container>
                </header>

                {/* Overview */}
                <section aria-labelledby="overview-heading" className="band-light section-pad border-b border-line">
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
                            <div className="flex flex-col gap-8">
                                <SectionHeading
                                    id="overview-heading"
                                    eyebrow="Overview"
                                    title={
                                        <>
                                            Hours of manual work, handled by <em>software</em>.
                                        </>
                                    }
                                />
                                <Reveal
                                    delay={0.1}
                                    className="flex max-w-[56ch] flex-col gap-5 text-base leading-relaxed text-muted md:text-lg"
                                >
                                    <p>
                                        Most teams lose their week to the same loop: answer the query, copy the
                                        details, update the sheet, chase the follow-up. Each step is small; together
                                        they are a full-time job.
                                    </p>
                                    <p>
                                        We build automations that run that loop for you — a bot that answers from
                                        your docs, an agent that drafts and files, a pipeline that moves data
                                        between your tools. Always scoped to one workflow first, measured in hours
                                        saved per week.
                                    </p>
                                    <p>
                                        Anything the automation is unsure about goes to a person. You get the speed
                                        without losing the judgment.
                                    </p>
                                </Reveal>
                            </div>

                            <Reveal delay={0.15} className="flex flex-col gap-4">
                                <PipelineDiagram />
                                <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-4">
                                    <IconBox icon={Workflow} />
                                    <span className="type-eyebrow text-ink">Runs while you sleep</span>
                                </div>
                            </Reveal>
                        </div>
                    </Container>
                </section>

                {/* Services */}
                <section aria-labelledby="services-heading" className="band-light section-pad border-b border-line">
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="services-heading"
                            eyebrow="What we automate"
                            title={
                                <>
                                    AI automation <em>services</em>.
                                </>
                            }
                        />

                        <Stagger as="ul" className="grid gap-4 md:grid-cols-2 md:gap-6">
                            {serviceTypes.map(({ title, desc, points, icon }) => (
                                <MotionLi
                                    key={title}
                                    variants={staggerChild}
                                    className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-muted md:p-8"
                                >
                                    <IconBox icon={icon} />
                                    <h3 className="font-sans text-xl font-semibold tracking-tight md:text-2xl">{title}</h3>
                                    <p className="text-base leading-relaxed text-muted md:text-lg">{desc}</p>
                                    <ul className="grid gap-3 border-t border-line pt-5 sm:grid-cols-2">
                                        {points.map((point) => (
                                            <li key={point} className="flex items-start gap-2.5 text-sm text-ink">
                                                <CheckCircle2
                                                    size={16}
                                                    aria-hidden="true"
                                                    className="mt-0.5 shrink-0 text-accent"
                                                />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </MotionLi>
                            ))}
                        </Stagger>
                    </Container>
                </section>

                {/* Tech stack */}
                <section aria-labelledby="stack-heading" className="band-dark section-pad border-b border-line-dark">
                    <Container className="flex flex-col gap-12 md:gap-16">
                        <SectionHeading
                            id="stack-heading"
                            tone="dark"
                            eyebrow="Our automation stack"
                            title={
                                <>
                                    Proven tools, wired to <em>your</em> systems.
                                </>
                            }
                        />

                        <Stagger
                            as="ul"
                            stagger={0.05}
                            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6"
                        >
                            {techStack.map(({ name, category, icon }) => (
                                <MotionLi
                                    key={name}
                                    variants={staggerChild}
                                    className="flex flex-col gap-4 rounded-2xl border border-line-dark bg-ink-2 p-5 transition-colors duration-300 hover:border-muted-dark"
                                >
                                    <IconBox icon={icon} tone="dark" />
                                    <div className="flex flex-col gap-1.5">
                                        <span className="type-eyebrow leading-normal text-muted-dark">{category}</span>
                                        <span className="font-sans text-base font-semibold tracking-tight text-paper">
                                            {name}
                                        </span>
                                    </div>
                                </MotionLi>
                            ))}
                        </Stagger>
                    </Container>
                </section>

                {/* Process */}
                <section aria-labelledby="process-heading" className="band-light section-pad border-b border-line">
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                            <div className="self-start lg:sticky lg:top-28">
                                <SectionHeading
                                    id="process-heading"
                                    eyebrow="How we work"
                                    title={
                                        <>
                                            From audit to <em>unattended</em>.
                                        </>
                                    }
                                />
                            </div>

                            <ol className="divide-y divide-line border-y border-line">
                                {processSteps.map(({ id, title, desc, icon }) => (
                                    <Reveal
                                        as="li"
                                        key={id}
                                        className="grid grid-cols-[2.5rem_1fr] gap-4 py-6 sm:gap-6 sm:py-8"
                                    >
                                        <IconBox icon={icon} />
                                        <div className="flex flex-col gap-2">
                                            <span className="type-mono text-sm text-muted">{id}</span>
                                            <h3 className="font-sans text-xl font-semibold tracking-tight md:text-2xl">
                                                {title}
                                            </h3>
                                            <p className="max-w-[56ch] text-base leading-relaxed text-muted md:text-lg">
                                                {desc}
                                            </p>
                                        </div>
                                    </Reveal>
                                ))}
                            </ol>
                        </div>
                    </Container>
                </section>

                {/* Closing CTA */}
                <section aria-labelledby="cta-heading" className="band-dark section-pad">
                    <Container className="flex flex-col items-center gap-10 text-center">
                        <SectionHeading
                            id="cta-heading"
                            tone="dark"
                            align="center"
                            title={
                                <>
                                    Start with one workflow. Measure the hours it <em>returns</em>.
                                </>
                            }
                        />
                        <Reveal delay={0.1}>
                            <Button tone="dark" variant="accent" arrow onClick={openBooking}>
                                Automate a workflow
                            </Button>
                        </Reveal>
                    </Container>
                </section>
            </main>

            <Footer />

            <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
        </div>
    );
}
