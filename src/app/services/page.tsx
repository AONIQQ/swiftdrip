"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Droplets,
  TestTube,
  Sparkles,
  ArrowRight,
  Stethoscope,
  UserCheck,
  BookOpen,
  Truck,
  CheckCircle2,
  Shield,
} from "lucide-react";
import { BOOKING_URL, SERVICES_OVERVIEW } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  droplets: Droplets,
  testTube: TestTube,
  sparkles: Sparkles,
};

const categoryDetails: Record<
  string,
  { tagline: string; highlights: string[] }
> = {
  "/iv-drips": {
    tagline: "Hydration, immunity, recovery, and rejuvenation",
    highlights: [
      "8 specialized IV formulas",
      "Licensed provider administered",
      "Mobile service available",
    ],
  },
  "/lab-testing": {
    tagline: "Comprehensive panels with physician-reviewed results",
    highlights: [
      "Powered by LabCorp",
      "Wellness and STI panels",
      "Fast turnaround",
    ],
  },
  "/rapid-testing": {
    tagline: "On-the-spot diagnostics with results in minutes",
    highlights: [
      "Flu, Covid-19, Strep, RSV",
      "Walk-in friendly",
      "Mobile service available",
    ],
  },
};

const whyChooseUs = [
  {
    title: "Anesthesiologist Founded",
    description:
      "Our practice was founded by an experienced Anesthesiologist who brings clinical rigor and patient safety to every treatment.",
    icon: Stethoscope,
  },
  {
    title: "Personalized Protocols",
    description:
      "No two patients are the same. Every treatment is tailored to your unique health profile and wellness goals.",
    icon: UserCheck,
  },
  {
    title: "Evidence-Based Care",
    description:
      "Every service we offer is grounded in clinical research and medical best practices - never trends or fads.",
    icon: BookOpen,
  },
  {
    title: "In-Office and Mobile",
    description:
      "Visit our Philadelphia clinic or let us bring premium care directly to your home, office, or event.",
    icon: Truck,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Book Online",
    description: "Schedule your appointment through our Vagaro booking page in minutes.",
  },
  {
    step: "02",
    title: "Consultation",
    description: "Meet with our team to discuss your goals and determine the right treatment.",
  },
  {
    step: "03",
    title: "Treatment",
    description: "Relax while our licensed providers administer your personalized care.",
  },
  {
    step: "04",
    title: "Feel the Difference",
    description: "Leave feeling restored, informed, and ready for your next day.",
  },
];

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

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-navy/5">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
            className="flex flex-col items-center max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-blue-primary/40" />
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-blue-primary">
                What We Offer
              </span>
              <div className="h-px w-12 bg-blue-primary/40" />
            </div>

            <h1 className="font-serif text-4xl font-medium leading-tight text-navy sm:text-5xl lg:text-6xl tracking-tight">
              Our <em className="italic font-light text-blue-primary">Services</em>
            </h1>

            <p className="mx-auto mt-8 text-lg leading-relaxed text-navy/70 font-light">
              Three pillars of comprehensive wellness - from IV therapy to lab
              diagnostics - every treatment physician-supervised and tailored to you.
            </p>

            <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center border border-navy bg-navy px-10 py-4 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-blue-primary hover:border-blue-primary sm:w-auto"
              >
                Book Now
              </a>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center border-b border-navy/20 pb-1 px-2 text-sm font-medium tracking-wide text-navy transition-all duration-300 hover:border-blue-primary hover:text-blue-primary sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {SERVICES_OVERVIEW.map((service, i) => {
              const Icon = iconMap[service.icon] || Sparkles;
              const details = categoryDetails[service.href];
              return (
                <FadeInSection key={service.title} delay={i * 0.12}>
                  <Link href={service.href} className="group block h-full">
                    <div className="relative h-full bg-white p-10 transition-all duration-500 hover:shadow-xl hover:shadow-navy/5 border border-navy/5 hover:border-blue-primary/30">
                      <div className="mb-8 text-blue-primary transition-transform duration-500 group-hover:-translate-y-1">
                        <Icon size={32} strokeWidth={1.5} />
                      </div>

                      <h3 className="font-serif text-2xl font-medium text-navy mb-3 transition-colors group-hover:text-blue-primary">
                        {service.title}
                      </h3>

                      {details && (
                        <p className="text-sm font-semibold uppercase tracking-widest text-blue-primary/80 mb-6">
                          {details.tagline}
                        </p>
                      )}

                      <p className="text-sm text-navy/70 font-light leading-relaxed mb-8">
                        {service.description}
                      </p>

                      {details && (
                        <ul className="space-y-3 mb-8">
                          {details.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-center gap-3 text-sm text-navy/60 font-light"
                            >
                              <CheckCircle2
                                size={14}
                                className="shrink-0 text-blue-primary"
                              />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="flex items-center pt-6 border-t border-navy/5">
                        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-navy transition-all duration-300 group-hover:gap-3 group-hover:text-blue-primary">
                          Explore Services
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32 border-y border-navy/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeInSection className="text-center mb-20">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-blue-primary mb-4">
              Simple Process
            </span>
            <h2 className="font-serif text-3xl font-medium text-navy sm:text-4xl">
              How It Works
            </h2>
          </FadeInSection>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, i) => (
              <FadeInSection key={item.step} delay={i * 0.1}>
                <div className="group relative text-center">
                  {/* Connector line on larger screens */}
                  {i < processSteps.length - 1 && (
                    <div className="absolute top-8 left-[calc(50%+40px)] right-0 hidden h-[1px] bg-navy/10 lg:block" />
                  )}
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center font-serif text-2xl font-light text-blue-primary border border-blue-primary/20 transition-all duration-500 group-hover:border-blue-primary group-hover:scale-110">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-xl font-medium text-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-navy/60 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative overflow-hidden bg-navy py-24 sm:py-32">
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <FadeInSection className="text-center mb-20">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-white mb-4">
              The SwiftDrip Difference
            </span>
            <h2 className="font-serif text-3xl font-medium text-white sm:text-4xl">
              Why Choose <em className="italic font-light text-white">Us</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/70 font-light leading-relaxed">
              We are redefining what wellness care looks like - with physician-level
              expertise and concierge-level service.
            </p>
          </FadeInSection>

          <div className="grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <FadeInSection key={item.title} delay={i * 0.1}>
                <div className="group text-center">
                  <div className="mx-auto mb-6 flex items-center justify-center text-white transition-transform duration-500 group-hover:-translate-y-1">
                    <item.icon size={36} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeInSection>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-center">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Shield size={18} className="text-blue-primary" />
                <span>Physician-Supervised</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Stethoscope size={18} className="text-blue-primary" />
                <span>Anesthesiologist Founded</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Truck size={18} className="text-blue-primary" />
                <span>Mobile Service Available</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle2 size={18} className="text-blue-primary" />
                <span>By Appointment Only</span>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#FAFAF8] sm:py-40 border-y border-navy/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <FadeInSection>
            <h2 className="font-serif text-4xl font-medium text-navy sm:text-5xl lg:text-6xl tracking-tight">
              Ready to elevate <em className="italic font-light text-blue-primary">your wellness?</em>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-lg text-navy/70 font-light leading-relaxed">
              Book your appointment today and experience physician-led care
              tailored to your needs.
            </p>
            <div className="mt-12">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-navy bg-navy px-10 py-4 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-blue-primary hover:border-blue-primary"
              >
                Book Your Visit
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
