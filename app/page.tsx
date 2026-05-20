"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Platform", id: "platform" },
  { label: "Research", id: "research" },
  { label: "Industries", id: "industries" },
  { label: "About", id: "about" },
];

const SLIDES = [
  {
    title: ["Ethical Intelligence", "Infrastructure for the", "Autonomous Future."],
    desc: "We build protection layers, governance systems, and intelligence infrastructure that help enterprises deploy AI safely, responsibly, and at scale.",
  },
  {
    title: ["The Protection Layer", "for Artificial", "Intelligence."],
    desc: "From AI agents to enterprise workflows, Define AI creates the trust layer between humans and machine intelligence.",
  },
  {
    title: ["Safe Intelligence", "at Civilizational", "Scale."],
    desc: "AI governance and protection will become as essential for the intelligence economy as cybersecurity became for the internet.",
  },
];

const PLATFORM_CARDS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: "AI Protection Layer",
    desc: "Stop rogue behavior, prompt injections, data leakage, and misaligned autonomous actions before they happen.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
    title: "Governance Infrastructure",
    desc: "Role-based permissions, human-in-the-loop controls, audit logs, ethical guardrails — baked in, not bolted on.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4c0 1.95-1.4 3.58-3.25 3.93" />
        <path d="M8.24 6.07A4 4 0 0112 2" />
        <rect x="5" y="12" width="14" height="8" rx="2" />
        <path d="M9 12v-1a3 3 0 016 0v1" />
        <circle cx="12" cy="16" r="1" />
      </svg>
    ),
    title: "Agent Security",
    desc: "Identity systems, behavioral monitoring, and execution boundaries for AI agents operating in production.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
    title: "Alignment Systems",
    desc: "Frameworks that keep machine decision-making aligned with human intent — at scale, in real time.",
  },
];

const PRINCIPLES = [
  { label: "Human First", text: "AI should extend human judgment, not replace it. Every system we build keeps humans meaningfully in control." },
  { label: "Transparency", text: "If you can't explain how your AI made a decision, you can't defend it. Explainability isn't optional." },
  { label: "Accountability", text: "Every autonomous action must be traceable. Full stop." },
  { label: "Security by Design", text: "Protection can't be a layer you add after the fact. It has to live in the architecture from day one." },
  { label: "Alignment", text: "Capable AI without aligned objectives is a systemic risk. We're building the systems that solve for this at scale." },
];

const ROADMAP = [
  { phase: "Phase 1", text: "Enterprise AI protection and governance platform" },
  { phase: "Phase 2", text: "Autonomous AI operating control systems" },
  { phase: "Phase 3", text: "Global intelligence trust infrastructure" },
  { phase: "Phase 4", text: "Universal alignment framework for autonomous systems" },
];

const INDUSTRIES = [
  "Enterprises", "Governments", "Healthcare", "Financial Institutions",
  "Defense & Cybersecurity", "SaaS Platforms", "AI-native Startups", "Education",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [time, setTime] = useState("");
  const [fadeKey, setFadeKey] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
      setFadeKey((prev) => prev + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenu]);

  const goTo = (dir: "prev" | "next") => {
    setCurrentSlide((prev) =>
      dir === "next" ? (prev + 1) % SLIDES.length : (prev - 1 + SLIDES.length) % SLIDES.length
    );
    setFadeKey((prev) => prev + 1);
  };

  const scrollTo = (id: string) => {
    setMobileMenu(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const slide = SLIDES[currentSlide];

  return (
    <div className="noise" style={{ background: '#09090b', minHeight: '100vh' }}>

      {/* ===== MOBILE MENU OVERLAY ===== */}
      <div
        className="md:hidden fixed inset-0 z-[90] flex flex-col items-center justify-center gap-8 transition-all duration-300"
        style={{
          background: "rgba(9,9,11,0.97)", backdropFilter: "blur(20px)",
          opacity: mobileMenu ? 1 : 0, pointerEvents: mobileMenu ? "auto" : "none",
        }}
      >
        {NAV_LINKS.map((link) => (
          <button key={link.id} onClick={() => scrollTo(link.id)}
            style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 400, color: "#f4f4f5", background: "none", border: "none", cursor: "pointer", letterSpacing: "-0.02em" }}
          >{link.label}</button>
        ))}
      </div>

      {/* ===== HERO ===== */}
      <section className="relative grid-bg" style={{ height: '100vh', overflow: 'hidden' }}>
        {/* Glow orbs */}
        <div className="glow-orb" style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 70%)', top: '-10%', right: '-5%' }} />
        <div className="glow-orb" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,255,255,0.03), transparent 70%)', bottom: '10%', left: '-5%' }} />

        {/* Nav */}
        <nav className="relative z-20 flex items-center justify-between px-5 py-5 md:px-12 md:py-7">
          <div style={{ fontSize: '13px', color: 'rgba(244,244,245,0.5)', letterSpacing: '0.05em' }}>
            IST, Time {time}
          </div>

          <div className="flex items-center gap-6 md:gap-10">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: '#2563EB' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', letterSpacing: '-0.02em', color: '#f4f4f5' }}>
                DEFINE<span style={{ color: '#2563EB' }}>AI</span>
              </span>
            </div>

            <div className="hidden md:flex gap-8">
              {NAV_LINKS.map((link) => (
                <button key={link.id} onClick={() => scrollTo(link.id)}
                  style={{ fontSize: '13px', color: 'rgba(244,244,245,0.5)', letterSpacing: '0.03em', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)' }}
                  className="hover:!text-white transition-colors duration-300"
                >{link.label}</button>
              ))}
            </div>

            <button className="md:hidden flex flex-col gap-[5px] p-2" style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle menu"
            >
              <span className="block w-5 transition-all duration-300" style={{ height: '1.5px', background: 'white', transform: mobileMenu ? 'rotate(45deg) translateY(3.25px)' : 'none' }} />
              <span className="block w-5 transition-all duration-300" style={{ height: '1.5px', background: 'white', transform: mobileMenu ? 'rotate(-45deg) translateY(-3.25px)' : 'none' }} />
            </button>
          </div>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 flex px-5 pb-8 md:px-12 md:pb-12" style={{ height: 'calc(100vh - 90px)' }}>
          {/* Left */}
          <div className="flex-1 flex flex-col justify-between min-w-0">
            {/* Slide counter */}
            <div className="animate-fade-up delay-200 mt-6 md:mt-10">
              <span style={{ fontSize: '14px', color: '#f4f4f5' }}>/ 0{currentSlide + 1}</span>
              <span className="slide-line" />
              <span style={{ fontSize: '14px', color: 'rgba(244,244,245,0.3)' }}>0{SLIDES.length}</span>
            </div>

            {/* Headline */}
            <div className="max-w-[800px]" key={fadeKey}>
              <h1 className="animate-fade-up" style={{
                fontFamily: 'var(--font-display)', fontWeight: 400,
                fontSize: 'clamp(2rem, 5.5vw, 5.5rem)', lineHeight: 1.05,
                letterSpacing: '-0.03em', color: '#f4f4f5', marginBottom: '24px',
              }}>
                {slide.title.map((line, i) => (
                  <span key={i} className={`animate-fade-up delay-${(i + 1) * 100}`} style={{ display: 'block' }}>
                    {i === slide.title.length - 1 ? (
                      <>
                        {line.split(' ').slice(0, -1).join(' ')}{' '}
                        <em style={{ fontStyle: 'italic', color: '#2563EB' }}>
                          {line.split(' ').slice(-1)[0]}
                        </em>
                      </>
                    ) : line}
                  </span>
                ))}
              </h1>

              <p className="animate-fade-up delay-400 text-[14px] md:text-[15px] max-w-[520px]" style={{ lineHeight: 1.7, color: 'rgba(244,244,245,0.5)' }}>
                {slide.desc}
              </p>
            </div>

            {/* Prev / Next */}
            <div className="animate-fade-up delay-600 flex items-center gap-6">
              <button onClick={() => goTo("prev")} style={{ fontSize: '13px', color: 'rgba(244,244,245,0.5)', letterSpacing: '0.05em', background: 'none', border: 'none', cursor: 'pointer' }}>Prev</button>
              <span style={{ color: 'rgba(244,244,245,0.2)', fontSize: '13px' }}>/</span>
              <button onClick={() => goTo("next")} className="flex items-center gap-2" style={{ fontSize: '13px', color: 'rgba(244,244,245,0.5)', letterSpacing: '0.05em', background: 'none', border: 'none', cursor: 'pointer' }}>
                Next <span style={{ fontSize: '16px' }}>→</span>
              </button>
            </div>
          </div>

          {/* Right — Sphere */}
          <div className="hidden lg:flex" style={{ width: '480px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <div style={{ position: 'relative', width: '380px', height: '380px' }}>
              <div className="sphere-rotate" style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
                <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }}>
                  <ellipse cx="200" cy="200" rx="190" ry="190" fill="none" stroke="rgba(37,99,235,0.25)" strokeWidth="0.5" />
                  <ellipse cx="200" cy="200" rx="155" ry="155" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                  <ellipse cx="200" cy="200" rx="120" ry="120" fill="none" stroke="rgba(37,99,235,0.2)" strokeWidth="0.5" />
                </svg>
              </div>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="sphere-pulse" style={{ width: '220px', height: '220px', borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, rgba(60,60,65,1), rgba(20,20,22,1) 70%)', boxShadow: '0 0 80px rgba(37,99,235,0.12), inset 0 0 60px rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }} />
              </div>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg viewBox="0 0 240 240" style={{ width: '240px', height: '240px' }}>
                  <defs>
                    <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(37,99,235,0.5)" />
                      <stop offset="100%" stopColor="rgba(37,99,235,0)" />
                    </linearGradient>
                  </defs>
                  <circle cx="120" cy="120" r="110" fill="none" stroke="url(#arcGrad)" strokeWidth="1" strokeDasharray="120 580" />
                </svg>
              </div>
            </div>
            <div className="animate-fade-up delay-700 flex items-center gap-3 mt-8 cursor-pointer">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.03)' }}>
                <svg width="10" height="12" viewBox="0 0 10 12" fill="white"><path d="M0 0L10 6L0 12V0Z" /></svg>
              </div>
              <span style={{ fontSize: '13px', color: 'rgba(244,244,245,0.5)', letterSpacing: '0.05em' }}>Watch Video</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PLATFORM ===== */}
      <section id="platform" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-12 py-20 md:py-28">
          <p className="text-[11px] uppercase tracking-[0.12em] font-semibold mb-5" style={{ color: '#2563EB' }}>What we&apos;re building</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(1.5rem, 3vw, 2.6rem)', lineHeight: 1.2, letterSpacing: '-0.025em', color: '#f4f4f5', marginBottom: '20px' }}>
            The safety layer for <em style={{ fontStyle: 'italic', color: '#2563EB' }}>autonomous</em> AI.
          </h2>
          <p className="text-[14px] md:text-[15px] leading-[1.75] max-w-[620px]" style={{ color: 'rgba(244,244,245,0.5)' }}>
            This is a foundational infrastructure problem. We&apos;re not building a chatbot or a wrapper. We&apos;re building the governance layer that sits beneath every AI system in the enterprise — the same way SSL and firewalls became foundational to the internet.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-10 md:mt-14">
            {PLATFORM_CARDS.map((card, i) => (
              <div key={i} className="rounded-xl p-6 md:p-7 transition-all duration-300 hover:!border-[rgba(37,99,235,0.3)] hover:!bg-[rgba(37,99,235,0.03)]"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div style={{ color: '#2563EB', marginBottom: '14px' }}>{card.icon}</div>
                <h3 className="text-[15px] font-medium mb-2" style={{ color: '#f4f4f5', fontFamily: 'var(--font-display)' }}>{card.title}</h3>
                <p className="text-[13px] leading-[1.65]" style={{ color: 'rgba(244,244,245,0.45)' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESEARCH ===== */}
      <section id="research" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-12 py-20 md:py-28">
          <p className="text-[11px] uppercase tracking-[0.12em] font-semibold mb-5" style={{ color: '#2563EB' }}>Why this matters</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(1.3rem, 2.5vw, 2.2rem)', lineHeight: 1.2, letterSpacing: '-0.025em', color: '#f4f4f5', marginBottom: '20px' }}>
            We are at an inflection point.
          </h2>
          <p className="text-[14px] md:text-[15px] leading-[1.75] max-w-[620px]" style={{ color: 'rgba(244,244,245,0.5)' }}>
            AI systems are about to operate software, manage finances, run infrastructure, and make consequential decisions — with very little human oversight. That&apos;s not a hypothetical. It&apos;s happening now.
          </p>
          <p className="text-[14px] md:text-[15px] leading-[1.75] max-w-[620px] mt-4" style={{ color: 'rgba(244,244,245,0.5)' }}>
            The organizations that get governance right early will have an enormous structural advantage. The ones that don&apos;t will face regulatory, reputational, and operational risk that compounds fast.
          </p>
          <p className="text-[14px] md:text-[15px] mt-6 font-medium" style={{ color: '#2563EB' }}>
            Define AI exists to make sure the first path is the easy path.
          </p>

          {/* Principles */}
          <div className="mt-16 md:mt-20">
            <p className="text-[11px] uppercase tracking-[0.12em] font-semibold mb-5 md:mb-6" style={{ color: '#2563EB' }}>Principles</p>
            <div>
              {PRINCIPLES.map((p, i) => (
                <div key={i} className="flex flex-col md:grid md:grid-cols-[160px_1fr] gap-1.5 md:gap-6 py-5"
                  style={{ borderBottom: i < PRINCIPLES.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
                >
                  <span className="text-[13px] md:text-[14px] font-medium" style={{ color: '#f4f4f5', fontFamily: 'var(--font-display)' }}>{p.label}</span>
                  <span className="text-[13px] md:text-[14px] leading-[1.7]" style={{ color: 'rgba(244,244,245,0.45)' }}>{p.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Roadmap */}
          <div className="mt-16 md:mt-20">
            <p className="text-[11px] uppercase tracking-[0.12em] font-semibold mb-5 md:mb-6" style={{ color: '#2563EB' }}>Roadmap</p>
            <div>
              {ROADMAP.map((r, i) => (
                <div key={i} className="flex items-start md:items-center gap-4 md:gap-6 py-5"
                  style={{ borderBottom: i < ROADMAP.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
                >
                  <span className="text-[12px] font-semibold shrink-0" style={{ color: '#2563EB', minWidth: '56px', letterSpacing: '0.04em' }}>{r.phase}</span>
                  <span className="text-[14px] md:text-[15px]" style={{ color: 'rgba(244,244,245,0.65)' }}>{r.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section id="industries" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-12 py-20 md:py-28">
          <p className="text-[11px] uppercase tracking-[0.12em] font-semibold mb-5" style={{ color: '#2563EB' }}>Who we work with</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(1.5rem, 3vw, 2.6rem)', lineHeight: 1.2, letterSpacing: '-0.025em', color: '#f4f4f5', marginBottom: '20px' }}>
            Built for the organizations that <em style={{ fontStyle: 'italic', color: '#2563EB' }}>matter.</em>
          </h2>
          <div className="flex flex-wrap gap-2.5 mt-8">
            {INDUSTRIES.map((ind) => (
              <span key={ind} className="text-[13px] py-2 px-4 rounded-full transition-all duration-300 hover:!border-[rgba(37,99,235,0.4)] hover:!text-white"
                style={{ border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(244,244,245,0.55)' }}
              >{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT / CTA ===== */}
      <section id="about">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12 py-20 md:py-28">
          <p className="text-[11px] uppercase tracking-[0.12em] font-semibold mb-5" style={{ color: '#2563EB' }}>About</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(1.5rem, 3vw, 2.6rem)', lineHeight: 1.2, letterSpacing: '-0.025em', color: '#f4f4f5', marginBottom: '20px' }}>
            The AI era needs a trust layer.
          </h2>
          <p className="text-[14px] md:text-[15px] leading-[1.75] max-w-[620px]" style={{ color: 'rgba(244,244,245,0.5)' }}>
            We&apos;re building it. If you&apos;re deploying AI at scale and governance isn&apos;t solved yet — let&apos;s talk.
          </p>

          <div className="mt-10 md:mt-14 p-6 md:p-10 lg:p-12 rounded-2xl" style={{ background: 'rgba(37,99,235,0.04)', border: '1px solid rgba(37,99,235,0.12)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(1.1rem, 2vw, 1.8rem)', color: '#f4f4f5', lineHeight: 1.3, marginBottom: '14px' }}>
              Ready to make AI safe at scale?
            </h3>
            <p className="text-[13px] md:text-[14px] leading-[1.7] max-w-[480px]" style={{ color: 'rgba(244,244,245,0.45)' }}>
              Get in touch to learn how Define AI can help your organization deploy autonomous AI with confidence.
            </p>
            <button className="mt-6 md:mt-7 py-3 px-6 text-[14px] font-medium rounded-lg border-none cursor-pointer transition-colors duration-300 hover:!bg-[#1d4ed8]"
              style={{ background: '#2563EB', color: '#ffffff', fontFamily: 'var(--font-body)' }}
            >Get in touch ↗</button>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-12 pt-14 md:pt-20 pb-10">

          {/* Footer grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">

            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2.5 mb-5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: '#2563EB' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', letterSpacing: '-0.02em', color: '#f4f4f5' }}>
                  DEFINE<span style={{ color: '#2563EB' }}>AI</span>
                </span>
              </div>
              <p className="text-[13px] leading-[1.7] max-w-[280px]" style={{ color: 'rgba(244,244,245,0.35)' }}>
                Building the safety and governance infrastructure for the autonomous AI era.
              </p>
            </div>

            {/* Platform */}
            <div>
              <h4 className="text-[12px] uppercase tracking-[0.1em] font-semibold mb-4 md:mb-5" style={{ color: 'rgba(244,244,245,0.5)' }}>Platform</h4>
              {['AI Protection', 'Governance', 'Agent Security', 'Alignment', 'Documentation'].map((item) => (
                <a key={item} href="#platform" className="block text-[13px] mb-3 transition-colors duration-200 hover:!text-white" style={{ color: 'rgba(244,244,245,0.35)', textDecoration: 'none' }}>{item}</a>
              ))}
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[12px] uppercase tracking-[0.1em] font-semibold mb-4 md:mb-5" style={{ color: 'rgba(244,244,245,0.5)' }}>Company</h4>
              {['About', 'Research', 'Careers', 'Blog', 'Press'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-[13px] mb-3 transition-colors duration-200 hover:!text-white" style={{ color: 'rgba(244,244,245,0.35)', textDecoration: 'none' }}>{item}</a>
              ))}
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-[12px] uppercase tracking-[0.1em] font-semibold mb-4 md:mb-5" style={{ color: 'rgba(244,244,245,0.5)' }}>Legal</h4>
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'].map((item) => (
                <a key={item} href="#" className="block text-[13px] mb-3 transition-colors duration-200 hover:!text-white" style={{ color: 'rgba(244,244,245,0.35)', textDecoration: 'none' }}>{item}</a>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <span className="text-[12px]" style={{ color: 'rgba(244,244,245,0.25)' }}>© 2025 Define AI. All rights reserved.</span>

            <div className="flex gap-5">
              <a href="#" className="transition-colors duration-200 hover:!text-white" style={{ color: 'rgba(244,244,245,0.3)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="transition-colors duration-200 hover:!text-white" style={{ color: 'rgba(244,244,245,0.3)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="transition-colors duration-200 hover:!text-white" style={{ color: 'rgba(244,244,245,0.3)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
            </div>

            <span className="text-[12px] italic" style={{ color: 'rgba(244,244,245,0.25)' }}>Intelligence. Governed.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
