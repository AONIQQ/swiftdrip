"use client";

import { useEffect, useRef, useState } from "react";
import {
  MousePointerClick,
  Clock,
  FileCheck,
  ArrowRight,
  FlaskConical,
  ShieldCheck,
  Microscope,
} from "lucide-react";
import { LAB_PANELS, BOOKING_URL } from "@/lib/constants";

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeInSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const STEPS = [
  {
    icon: MousePointerClick,
    number: "01",
    title: "Book Online",
    description: "Schedule through our booking portal in just a few clicks.",
  },
  {
    icon: Clock,
    number: "02",
    title: "Quick Visit",
    description: "Simple blood draw that takes only 15-20 minutes.",
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Get Results",
    description: "Results reviewed by our physician and delivered directly to you.",
  },
];

const PANEL_ICONS = [FlaskConical, ShieldCheck, Microscope, FlaskConical];

export default function LabTestingPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-navy/5">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-blue-primary/40" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-primary">
                Diagnostics
              </p>
              <div className="h-px w-12 bg-blue-primary/40" />
            </div>

            <h1 className="font-serif text-4xl font-medium leading-tight text-navy sm:text-5xl lg:text-6xl tracking-tight">
              Lab Testing by <em className="italic font-light text-blue-primary">LabCorp</em>
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-navy/70 font-light">
              Comprehensive blood work with physician-reviewed results.
              Be proactive about your health with our customized lab panels
              processed by LabCorp.
            </p>

            <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm tracking-widest uppercase text-navy/50 font-semibold">
              <li className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-blue-primary" />
                Physician-Reviewed
              </li>
              <li className="flex items-center gap-2">
                <FlaskConical size={16} className="text-blue-primary" />
                LabCorp Processed
              </li>
              <li className="flex items-center gap-2">
                <FileCheck size={16} className="text-blue-primary" />
                Confidential Results
              </li>
            </ul>

            <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center w-full sm:w-auto">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center border border-navy bg-navy text-white px-10 py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-blue-primary hover:border-blue-primary sm:w-auto"
              >
                Book Lab Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Panels Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeInSection className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-blue-primary mb-4">
              Our Panels
            </span>
            <h2 className="font-serif text-3xl font-medium text-navy sm:text-4xl">
              Choose Your <em className="italic font-light text-blue-primary">Testing</em>
            </h2>
          </FadeInSection>

          <div className="grid gap-6 sm:grid-cols-2">
            {LAB_PANELS.map((panel, i) => {
              const Icon = PANEL_ICONS[i % PANEL_ICONS.length];
              return (
                <FadeInSection key={panel.name} delay={i * 0.1}>
                  <div className="group relative flex flex-col h-full bg-white p-10 transition-all duration-500 hover:shadow-xl hover:shadow-navy/5 border border-navy/5 hover:border-blue-primary/30">
                    <div className="flex items-center gap-6 mb-6 pb-6 border-b border-navy/5">
                      <div className="text-blue-primary transition-transform duration-500 group-hover:-translate-y-1">
                        <Icon size={32} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-medium text-navy transition-colors group-hover:text-blue-primary">
                          {panel.name}
                        </h3>
                        <p className="text-sm font-semibold uppercase tracking-widest text-blue-primary/80 mt-2">
                          {panel.price}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-navy/70 font-light mb-8 flex-1">
                      {panel.description}
                    </p>

                    <div className="pt-6 border-t border-navy/5 mt-auto flex items-center justify-between">
                      <span className="inline-flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-navy/50">
                        <ShieldCheck size={14} /> Processed by LabCorp
                      </span>
                      <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-navy transition-all duration-300 group-hover:gap-3 group-hover:text-blue-primary"
                      >
                        Book
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-24 sm:py-32 border-y border-navy/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeInSection className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-blue-primary mb-4">
              Simple Process
            </span>
            <h2 className="font-serif text-3xl font-medium text-navy sm:text-4xl">
              How It <em className="italic font-light text-blue-primary">Works</em>
            </h2>
          </FadeInSection>

          <div className="relative grid gap-12 lg:grid-cols-3">
            {STEPS.map((step, i) => (
              <FadeInSection key={step.title} delay={i * 0.15}>
                <div className="group relative flex flex-col items-center text-center">
                  {i < STEPS.length - 1 && (
                    <div className="absolute top-8 left-[calc(50%+40px)] right-0 hidden h-[1px] bg-navy/10 lg:block" />
                  )}
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center font-serif text-2xl font-light text-blue-primary border border-blue-primary/20 transition-all duration-500 group-hover:border-blue-primary group-hover:scale-110">
                    {step.number}
                  </div>
                  <h3 className="font-serif text-xl font-medium text-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-navy/60 font-light max-w-[260px]">
                    {step.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-navy py-24 sm:py-32 w-full text-center relative border-y border-white/20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <FadeInSection>
            <h2 className="font-serif text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
              Take Control of Your <em className="italic font-light text-white">Health</em>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/70 font-light">
              Don't wait for symptoms to tell you something is wrong.
              Proactive lab testing gives you the insight to optimize your
              wellness before issues arise.
            </p>
            <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white bg-white text-navy px-10 py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-transparent hover:text-white"
              >
                Book Lab Work
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
