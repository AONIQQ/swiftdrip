"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  TestTube,
  Sparkles,
  Stethoscope,
  MapPin,
  Calendar,
  Instagram,
  Facebook,
  Phone,
  ChevronRight,
  Shield,
  Clock,
  Star,
} from "lucide-react";
import {
  BOOKING_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
  SOCIAL_LINKS,
  HIGHLIGHTS,
  SERVICES_OVERVIEW,
} from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Scroll-reveal hook                                                  */
/* ------------------------------------------------------------------ */

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

function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}) {
  const { ref, visible } = useReveal(0.1);
  const transforms: Record<string, string> = {
    up: "translateY(32px)",
    left: "translateX(-32px)",
    right: "translateX(32px)",
    none: "none",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[direction],
        transition: `opacity 0.7s cubic-bezier(.25,.46,.45,.94) ${delay}s, transform 0.7s cubic-bezier(.25,.46,.45,.94) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Icon maps                                                           */
/* ------------------------------------------------------------------ */

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  droplets: <Droplets className="h-7 w-7" />,
  testTube: <TestTube className="h-7 w-7" />,
  sparkles: <Sparkles className="h-7 w-7" />,
};

const HIGHLIGHT_ICONS: Record<string, React.ReactNode> = {
  stethoscope: <Stethoscope className="h-6 w-6" />,
  mapPin: <MapPin className="h-6 w-6" />,
  calendar: <Calendar className="h-6 w-6" />,
};

/* ================================================================== */
/*  PAGE                                                               */
/* ================================================================== */

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <HighlightsBar />
      <ServicesOverview />
      <AboutPreview />
      <AppointmentCta />
      <SocialCta />
      <ContactPreview />
    </main>
  );
}

/* ================================================================== */
/*  SECTION 1 - HERO                                                   */
/* ================================================================== */

function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const show = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(36px)",
    transition: `opacity 0.9s cubic-bezier(.25,.46,.45,.94) ${delay}s, transform 0.9s cubic-bezier(.25,.46,.45,.94) ${delay}s`,
  });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FAFAF8]">
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center text-center px-5 py-32 sm:px-6 lg:px-12">

        <div
          style={show(0.05)}
          className="relative flex items-center justify-center mb-10 h-32 w-32"
        >
          {/* Animated decorative rings */}
          <div
            className="absolute h-[160px] w-[160px] rounded-full border border-blue-primary/20"
            style={{ animation: "spin 20s linear infinite" }}
          />
          <div
            className="absolute h-[120px] w-[120px] rounded-full border border-dashed border-blue-primary/40"
            style={{ animation: "spin 15s linear infinite reverse" }}
          />
          <div className="absolute h-[100px] w-[100px] rounded-full bg-gradient-to-tr from-blue-primary/5 to-transparent blur-md" />

          <div className="relative z-10 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-white shadow-xl shadow-blue-primary/20 overflow-hidden ring-4 ring-white/50">
            <Image
              src="/logo.jpg"
              alt="SwiftDrip logo"
              width={80}
              height={80}
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div style={show(0.1)} className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-blue-primary/40" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-primary">
            SwiftDrip Comprehensive Wellness
          </p>
          <div className="h-px w-12 bg-blue-primary/40" />
        </div>

        <h1
          style={show(0.2)}
          className="font-serif text-5xl font-medium leading-[1.05] text-navy sm:text-6xl lg:text-[7rem] tracking-tight"
        >
          Elevated Health. <br className="hidden sm:block" />
          <span className="italic text-blue-primary font-light">Refined Vitality.</span>
        </h1>

        <p
          style={show(0.35)}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-navy/70 sm:text-xl font-light"
        >
          Philadelphia&rsquo;s premier physician-owned destination for advanced IV therapy and concierge wellness. Evidence-based care in a discretely luxurious setting.
        </p>

        <div style={show(0.5)} className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden border border-navy bg-navy px-10 py-4 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-blue-primary hover:border-blue-primary sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-3">
              Reserve Your Treatment
            </span>
          </a>
          <Link
            href="/services"
            className="group inline-flex items-center justify-center gap-2 border-b border-navy/20 pb-1 px-2 text-sm font-medium tracking-wide text-navy transition-all duration-300 hover:border-blue-primary hover:text-blue-primary sm:w-auto"
          >
            Explore Services
          </Link>
        </div>

        {/* Minimalist Trust Badges */}
        <div
          style={show(0.65)}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold tracking-widest uppercase text-navy/50 sm:gap-14"
        >
          <span>Physician-Led</span>
          <span className="h-1 w-1 rounded-full bg-blue-primary/50" />
          <span>Bespoke Protocols</span>
          <span className="h-1 w-1 rounded-full bg-blue-primary/50" />
          <span>Concierge Care</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 1s ease 1.2s",
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/30">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-navy/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  SECTION 2 - HIGHLIGHTS BAR                                         */
/* ================================================================== */

function HighlightsBar() {
  return (
    <section className="relative bg-white border-y border-navy/5">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-navy/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {HIGHLIGHTS.map((h, i) => (
          <Reveal
            key={h.title}
            delay={i * 0.12}
            className="group px-8 py-11 text-center transition-colors duration-500 hover:bg-[#FAFAF8] sm:py-14"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy/5 text-navy transition-all duration-300 group-hover:bg-navy/10 group-hover:scale-105">
              {HIGHLIGHT_ICONS[h.icon]}
            </div>
            <h3 className="text-lg font-serif font-medium tracking-tight text-navy">
              {h.title}
            </h3>
            <p className="mt-1.5 text-sm font-light text-navy/70">{h.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ================================================================== */
/*  SECTION 3 - SERVICES OVERVIEW                                      */
/* ================================================================== */

function ServicesOverview() {
  return (
    <section className="relative bg-white py-32 sm:py-40">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-primary mb-6">
              Our Curated Offerings
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl font-medium leading-tight text-navy sm:text-[3.5rem]">
              The <em className="italic font-light text-blue-primary">Standard</em> of Care
            </h2>
          </Reveal>
        </div>

        {/* Service cards - Minimalist Editorial */}
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_OVERVIEW.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12} className="group">
              <Link href={s.href} className="block">
                <div className="relative mb-8 pb-8 border-b border-navy/10 transition-colors duration-500 group-hover:border-blue-primary/40">
                  <div className="text-blue-primary/80 mb-6 transition-transform duration-500 group-hover:-translate-y-1">
                    {SERVICE_ICONS[s.icon]}
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-navy transition-colors duration-300 group-hover:text-blue-primary">
                    {s.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-navy/60 font-light">
                  {s.description}
                </p>
                <div className="mt-6 flex items-center">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-navy transition-all duration-300 group-hover:text-blue-primary group-hover:gap-3">
                    Discover More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  SECTION 4 - ABOUT PREVIEW                                          */
/* ================================================================== */

function AboutPreview() {
  return (
    <section className="relative bg-[#FAFAF8] py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
        <Reveal>
          <div className="inline-flex items-center justify-center p-4 rounded-full border border-blue-primary/20 mb-8">
            <Stethoscope className="h-6 w-6 text-blue-primary" strokeWidth={1.5} />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-3xl font-medium leading-snug text-navy sm:text-5xl max-w-4xl mx-auto">
            &ldquo;We believe that true wellness lies at the precise intersection of <em className="italic text-blue-primary font-light">clinical excellence</em> and compassionate care.&rdquo;
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-navy/60">
            Founded by an Anesthesiologist
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12">
            <Link
              href="/about"
              className="inline-flex items-center gap-3 border-b border-navy pb-1 text-sm font-medium tracking-wide text-navy transition-all duration-300 hover:border-blue-primary hover:text-blue-primary"
            >
              Learn Our Philosophy
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  SECTION 5 - APPOINTMENT CTA                                        */
/* ================================================================== */

function AppointmentCta() {
  return (
    <section className="relative overflow-hidden bg-navy py-32 sm:py-40 border-y border-blue-primary/20">
      {/* Subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(197, 160, 89, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(197, 160, 89, 0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-12">
        <Reveal>
          <div className="mx-auto flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-white/20" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              Your Journey
            </p>
            <div className="h-px w-12 bg-white/20" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-8 max-w-3xl font-serif text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
            Schedule Your <em className="italic font-light text-white">Consultation</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/70 font-light">
            Every visit begins with a one-on-one session so we can tailor
            your treatment exactly to your body, your lifestyle, and your goals.
            Experience the difference of physician-led care.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex items-center justify-center gap-6">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white bg-white text-navy px-10 py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              Book Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-b border-white/30 pb-1 px-2 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:border-blue-primary hover:text-blue-primary"
            >
              Contact Clinic
            </Link>
          </div>
        </Reveal>

        {/* Minimal Trust indicators */}
        <Reveal delay={0.45}>
          <div className="mt-20 flex flex-wrap items-center justify-center gap-10 text-xs uppercase tracking-widest text-white/80">
            <span className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-white" />
              Accepting New Patients
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-white" />
              In-Office
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5 text-white" />
              Flexible Scheduling
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  SECTION 6 - SOCIAL CTA                                             */
/* ================================================================== */

function SocialCta() {
  return (
    <section className="bg-[#FAFAF8] py-24 border-b border-navy/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-xl text-center">
          <Reveal>
            <h2 className="font-serif text-3xl font-medium text-navy sm:text-4xl">
              Connect With <em className="italic font-light text-blue-primary">Our Clinic</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-sm font-light text-navy/70 uppercase tracking-widest">
              Wellness insights & Updates
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex items-center justify-center gap-6">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex items-center gap-3 border-b border-navy/20 pb-1 text-sm font-medium tracking-wide text-navy transition-all duration-300 hover:border-blue-primary hover:text-blue-primary"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
                Instagram
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group flex items-center gap-3 border-b border-navy/20 pb-1 text-sm font-medium tracking-wide text-navy transition-all duration-300 hover:border-blue-primary hover:text-blue-primary"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.5} />
                Facebook
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  SECTION 7 - CONTACT PREVIEW                                        */
/* ================================================================== */

function ContactPreview() {
  return (
    <section className="relative bg-[#FAFAF8] py-32 sm:py-40">
      {/* Decorative top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-primary/15 to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-6 lg:flex-row lg:items-start lg:px-12">
        {/* Left column - text */}
        <div className="flex-1 space-y-6">
          <Reveal>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-blue-primary/40" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-primary">
                Inquiries
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl font-medium leading-tight text-navy sm:text-[3rem]">
              Reach <em className="italic font-light text-blue-primary">Out</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-md text-lg leading-relaxed text-navy/70 font-light">
              Interested in learning which treatment is right for you? Drop us a line
              and our concierge team will respond promptly.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col gap-4 pt-6 mt-6 border-t border-navy/10">
              <a
                href={`tel:${CONTACT_PHONE_E164}`}
                className="inline-flex items-center gap-3 text-sm font-medium tracking-wide text-navy transition-colors duration-300 hover:text-blue-primary"
              >
                <Phone className="h-4 w-4 text-blue-primary" strokeWidth={1.5} />
                {CONTACT_PHONE_DISPLAY}
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm font-medium tracking-wide text-navy transition-colors duration-300 hover:text-blue-primary"
              >
                <Instagram className="h-4 w-4 text-blue-primary" strokeWidth={1.5} />
                @swiftdripwellness
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right column - form */}
        <Reveal delay={0.15} className="w-full flex-1 lg:pl-12">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-navy/60"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full border-b border-navy/20 bg-transparent py-3 text-sm text-navy outline-none transition-all focus:border-blue-primary"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-navy/60"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full border-b border-navy/20 bg-transparent py-3 text-sm text-navy outline-none transition-all focus:border-blue-primary"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-navy/60"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border-b border-navy/20 bg-transparent py-3 text-sm text-navy outline-none transition-all focus:border-blue-primary"
                placeholder={CONTACT_EMAIL}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-navy/60"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full resize-none border-b border-navy/20 bg-transparent py-3 text-sm text-navy outline-none transition-all focus:border-blue-primary"
                placeholder="Tell us how we can assist you..."
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="group w-full border border-navy bg-navy py-4 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-blue-primary hover:border-blue-primary"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
