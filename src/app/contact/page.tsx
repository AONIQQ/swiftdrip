"use client";

import { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Clock,
  ArrowRight,
  Send,
  CalendarCheck,
  Stethoscope,
} from "lucide-react";
import {
  BOOKING_URL,
  CONTACT_ADDRESS,
  CONTACT_CITY_STATE_ZIP,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
  SOCIAL_LINKS,
} from "@/lib/constants";

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

export default function ContactPage() {
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
                Reach Out
              </p>
              <div className="h-px w-12 bg-blue-primary/40" />
            </div>

            <h1 className="font-serif text-4xl font-medium leading-tight text-navy sm:text-5xl lg:text-6xl tracking-tight">
              Get in <em className="italic font-light text-blue-primary">Touch</em>
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-navy/70 font-light">
              Questions about booking, services, or mobile visits? Reach us by
              phone or social and we will get back to you.
            </p>
          </div>
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="relative -mt-8 mb-16 sm:-mt-10 mx-auto max-w-4xl px-6 lg:px-12 z-10">
        <FadeInSection>
          <div className="bg-white p-8 sm:p-10 border border-navy/5 shadow-xl shadow-navy/5">
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
              <div className="flex items-center gap-6">
                <div className="flex text-blue-primary">
                  <CalendarCheck size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-medium text-navy tracking-tight">
                    Book Online Instantly
                  </h3>
                  <p className="text-sm text-navy/70 mt-1 font-light leading-relaxed">
                    Skip the phone call. Schedule your appointment on Vagaro in minutes.
                  </p>
                </div>
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center border border-navy bg-navy px-10 py-4 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-blue-primary hover:border-blue-primary sm:w-auto"
              >
                Book on Vagaro
              </a>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Contact Split */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Left - Contact Info */}
            <FadeInSection className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-medium text-navy tracking-tight mb-4">
                Contact details
              </h2>
              <p className="text-navy/70 font-light mb-12 leading-relaxed">
                Reach out directly or fill out the form and our team will get back to you promptly.
              </p>

              <div className="space-y-10">
                <div className="flex items-start gap-4">
                  <div className="text-blue-primary mt-1 shrink-0">
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-navy mb-2">Location</h3>
                    <p className="text-sm text-navy/70 font-light leading-relaxed">
                      {CONTACT_ADDRESS}
                      <br />
                      <span className="text-navy/50 uppercase tracking-widest text-[10px] font-semibold">
                        {CONTACT_CITY_STATE_ZIP}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-blue-primary mt-1 shrink-0">
                    <Phone size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-navy mb-2">Phone</h3>
                    <a
                      href={`tel:${CONTACT_PHONE_E164}`}
                      className="text-sm text-navy/70 font-light block transition-colors hover:text-blue-primary"
                    >
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-blue-primary mt-1 shrink-0">
                    <Clock size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-navy mb-2">Availability</h3>
                    <div className="text-sm text-navy/70 font-light space-y-1">
                      <div className="flex flex-col gap-1">
                        <span>By appointment only</span>
                        <span className="text-navy font-medium italic">In-office and at-home</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-16 pt-10 border-t border-navy/5">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-navy/50 mb-6">
                  Follow along
                </h3>
                <div className="flex gap-4">
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-navy hover:text-blue-primary transition-colors duration-300"
                  >
                    <Instagram size={24} strokeWidth={1.5} />
                  </a>
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-navy hover:text-blue-primary transition-colors duration-300"
                  >
                    <Facebook size={24} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </FadeInSection>

            {/* Right - Contact Form */}
            <FadeInSection className="lg:col-span-3" delay={0.15}>
              <div className="bg-white p-10 sm:p-14 border border-navy/5">
                <h2 className="font-serif text-3xl font-medium text-navy tracking-tight mb-2">
                  Send an inquiry
                </h2>
                <p className="text-navy/70 font-light mb-10 leading-relaxed">
                  Fill out the form below and our concierge team will follow up as soon as possible.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-8"
                >
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-navy/60">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full border-b border-navy/20 bg-transparent px-0 py-3 text-sm text-navy placeholder:text-navy/30 outline-none transition-all duration-300 focus:border-blue-primary"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-navy/60">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full border-b border-navy/20 bg-transparent px-0 py-3 text-sm text-navy placeholder:text-navy/30 outline-none transition-all duration-300 focus:border-blue-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-navy/60">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder={CONTACT_EMAIL}
                      className="w-full border-b border-navy/20 bg-transparent px-0 py-3 text-sm text-navy placeholder:text-navy/30 outline-none transition-all duration-300 focus:border-blue-primary"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-navy/60">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder={CONTACT_PHONE_DISPLAY}
                      className="w-full border-b border-navy/20 bg-transparent px-0 py-3 text-sm text-navy placeholder:text-navy/30 outline-none transition-all duration-300 focus:border-blue-primary"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-navy/60">
                      Interested In
                    </label>
                    <select className="w-full border-b border-navy/20 bg-transparent px-0 py-3 text-sm text-navy outline-none transition-all duration-300 focus:border-blue-primary appearance-none cursor-pointer">
                      <option value="">Select a service...</option>
                      <option value="iv-therapy">IV Vitamin and Hydration Therapy</option>
                      <option value="lab-testing">Lab Testing by LabCorp</option>
                      <option value="rapid-testing">Rapid Testing</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-navy/60">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us how we can help..."
                      className="w-full resize-none border-b border-navy/20 bg-transparent px-0 py-3 text-sm text-navy placeholder:text-navy/30 outline-none transition-all duration-300 focus:border-blue-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full sm:w-auto items-center justify-center gap-4 bg-navy px-10 py-5 text-sm font-medium tracking-widest uppercase text-white transition-all duration-300 hover:bg-blue-primary"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA section matching other pages */}
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
              Skip the <em className="italic font-light text-white">Wait</em>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/70 font-light">
              Experience what healthcare should feel like. Book your
              appointment online and let us take care of the rest.
            </p>
            <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white bg-white text-navy px-10 py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-transparent hover:text-white"
              >
                Book on Vagaro
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
