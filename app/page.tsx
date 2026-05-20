"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = ["Platform", "Research", "Industries", "About"];

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

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [time, setTime] = useState("");
  const [fadeKey, setFadeKey] = useState(0);

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

  const goTo = (dir: "prev" | "next") => {
    setCurrentSlide((prev) =>
      dir === "next" ? (prev + 1) % SLIDES.length : (prev - 1 + SLIDES.length) % SLIDES.length
    );
    setFadeKey((prev) => prev + 1);
  };

  const slide = SLIDES[currentSlide];

  return (
    <div className="noise" style={{ background: '#09090b', minHeight: '100vh' }}>
      {/* ===== HERO ===== */}
      <section className="relative grid-bg" style={{ height: '100vh', overflow: 'hidden' }}>
        {/* Glow orbs */}
        <div className="glow-orb" style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 70%)', top: '-10%', right: '-5%' }} />
        <div className="glow-orb" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,255,255,0.03), transparent 70%)', bottom: '10%', left: '-5%' }} />

        {/* Nav */}
        <nav style={{ position: 'relative', zIndex: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '28px 48px' }}>
          <div style={{ fontSize: '13px', color: 'rgba(244,244,245,0.5)', letterSpacing: '0.05em' }}>
            IST, Time {time}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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

            <div className="hidden md:flex" style={{ gap: '32px' }}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  style={{ fontSize: '13px', color: 'rgba(244,244,245,0.5)', letterSpacing: '0.03em', textDecoration: 'none' }}
                  className="hover:!text-white transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>

            <button className="md:hidden" style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '8px' }}>
              <span style={{ width: '20px', height: '1px', background: 'white' }} />
              <span style={{ width: '20px', height: '1px', background: 'white' }} />
            </button>
          </div>
        </nav>

        {/* Hero content */}
        <div style={{ position: 'relative', zIndex: 10, height: 'calc(100vh - 90px)', display: 'flex', padding: '0 48px 48px' }}>
          {/* Left */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* Slide counter */}
            <div className="animate-fade-up delay-200" style={{ marginTop: '40px' }}>
              <span style={{ fontSize: '14px', color: '#f4f4f5' }}>/ 0{currentSlide + 1}</span>
              <span className="slide-line" />
              <span style={{ fontSize: '14px', color: 'rgba(244,244,245,0.3)' }}>0{SLIDES.length}</span>
            </div>

            {/* Headline */}
            <div style={{ maxWidth: '800px' }} key={fadeKey}>
              <h1 className="animate-fade-up" style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: 'clamp(2.2rem, 5.5vw, 5.5rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: '#f4f4f5',
                marginBottom: '28px',
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

              <p className="animate-fade-up delay-400" style={{
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'rgba(244,244,245,0.5)',
                maxWidth: '520px',
              }}>
                {slide.desc}
              </p>
            </div>

            {/* Prev / Next */}
            <div className="animate-fade-up delay-600" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <button
                onClick={() => goTo("prev")}
                style={{ fontSize: '13px', color: 'rgba(244,244,245,0.5)', letterSpacing: '0.05em', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Prev
              </button>
              <span style={{ color: 'rgba(244,244,245,0.2)', fontSize: '13px' }}>/</span>
              <button
                onClick={() => goTo("next")}
                style={{ fontSize: '13px', color: 'rgba(244,244,245,0.5)', letterSpacing: '0.05em', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                Next <span style={{ fontSize: '16px' }}>→</span>
              </button>
            </div>
          </div>

          {/* Right — Sphere */}
          <div className="hidden lg:flex" style={{ width: '480px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <div style={{ position: 'relative', width: '380px', height: '380px' }}>
              {/* Rotating rings */}
              <div className="sphere-rotate" style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
                <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }}>
                  <ellipse cx="200" cy="200" rx="190" ry="190" fill="none" stroke="rgba(37,99,235,0.25)" strokeWidth="0.5" />
                  <ellipse cx="200" cy="200" rx="155" ry="155" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                  <ellipse cx="200" cy="200" rx="120" ry="120" fill="none" stroke="rgba(37,99,235,0.2)" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Sphere */}
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div
                  className="sphere-pulse"
                  style={{
                    width: '220px',
                    height: '220px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 35% 35%, rgba(60,60,65,1), rgba(20,20,22,1) 70%)',
                    boxShadow: '0 0 80px rgba(37,99,235,0.12), inset 0 0 60px rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                />
              </div>

              {/* Arc highlight */}
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

            {/* Watch Video */}
            <div className="animate-fade-up delay-700" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '32px', cursor: 'pointer' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.03)'
              }}>
                <svg width="10" height="12" viewBox="0 0 10 12" fill="white"><path d="M0 0L10 6L0 12V0Z" /></svg>
              </div>
              <span style={{ fontSize: '13px', color: 'rgba(244,244,245,0.5)', letterSpacing: '0.05em' }}>Watch Video</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
