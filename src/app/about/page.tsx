"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CalendarCheck,
  Droplets,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Sparkles,
  TestTube,
} from "lucide-react";
import {
  BOOKING_URL,
  CONTACT_ADDRESS,
  CONTACT_CITY_STATE_ZIP,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
  SOCIAL_LINKS,
} from "@/lib/constants";

const servicePillars = [
  {
    title: "IV Therapy",
    description:
      "Hydration and recovery support delivered by licensed providers.",
    icon: Droplets,
    href: "/iv-drips",
  },
  {
    title: "Lab Testing",
    description:
      "Comprehensive wellness and screening panels processed by LabCorp.",
    icon: TestTube,
    href: "/lab-testing",
  },
  {
    title: "Rapid Testing",
    description:
      "Flu, Covid-19, strep, and RSV testing with fast turnaround.",
    icon: Sparkles,
    href: "/rapid-testing",
  },
];

const bioLines = [
  "Your premier studio for comprehensive wellness.",
  "IV Therapy, Lab and Rapid Testing, and Aesthetics.",
  "In-office and at-home service, doctor-owned and operated.",
];

const galleryImages = [
  { src: "/images/social/ig-1.jpg", alt: "SwiftDrip Instagram post" },
  { src: "/images/social/ig-2.jpg", alt: "SwiftDrip clinic photo" },
  { src: "/images/social/ig-3.jpg", alt: "SwiftDrip care photo" },
  { src: "/images/social/ig-9.jpg", alt: "SwiftDrip wellness photo" },
  { src: "/images/social/ig-5.jpg", alt: "SwiftDrip team photo" },
  { src: "/images/social/ig-6.jpg", alt: "SwiftDrip treatment photo" },
  { src: "/images/social/ig-7.jpg", alt: "SwiftDrip lifestyle photo" },
  { src: "/images/social/ig-8.jpg", alt: "SwiftDrip services photo" },
];

const instagramEmbeds = [
  {
    title: "SwiftDrip Reel",
    src: "https://www.instagram.com/reel/DA6ETuipdqt/embed",
  },
  {
    title: "SwiftDrip Post",
    src: "https://www.instagram.com/p/C-8ESRXp5Ls/embed",
  },
  {
    title: "SwiftDrip Post",
    src: "https://www.instagram.com/p/DGgGoGIpVxU/embed",
  },
];

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
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
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(.25,.46,.45,.94) ${delay}s, transform 0.7s cubic-bezier(.25,.46,.45,.94) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <section className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40 border-b border-navy/5">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">

          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-blue-primary/40" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-primary">
                About SwiftDrip
              </p>
              <div className="h-px w-12 bg-blue-primary/40" />
            </div>

            <h1 className="font-serif text-4xl font-medium leading-tight text-navy sm:text-5xl lg:text-6xl tracking-tight">
              Comprehensive wellness, built around <em className="italic font-light text-blue-primary">real life.</em>
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-navy/70 font-light">
              We are a Philadelphia-based studio focused on IV therapy, lab testing,
              rapid testing, and aesthetics. Care is available in-office and at-home,
              with physician oversight and appointment-based service.
            </p>

            <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm tracking-widest uppercase text-navy/50 font-semibold">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-blue-primary" />
                Premier Studio
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-blue-primary" />
                Physician Owned
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-blue-primary" />
                In-Office & Mobile
              </li>
            </ul>

            <div className="mt-12 flex items-center justify-center gap-6">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-navy bg-navy text-white px-10 py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-blue-primary hover:border-blue-primary hover:text-white"
              >
                Book on Vagaro
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-b border-navy/20 pb-1 px-2 text-sm font-medium tracking-wide text-navy transition-all duration-300 hover:border-blue-primary hover:text-blue-primary"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeInSection className="mb-16 text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-primary mb-4">
              Our Atmosphere
            </p>
            <h2 className="font-serif text-3xl font-medium text-navy sm:text-5xl leading-tight">
              A Glimpse Into <em className="italic font-light text-blue-primary">Our Studio</em>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-navy/70 font-light">
              Follow us on Instagram for the latest wellness insights and clinic updates.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {galleryImages.map((image, index) => (
              <FadeInSection key={image.src} delay={index * 0.05}>
                <div className="aspect-[4/5] overflow-hidden rounded-none border border-navy/5 bg-white shadow-sm ring-1 ring-black/5">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={700}
                    height={700}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32 border-y border-navy/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeInSection className="mb-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-primary mb-4">
              Live Feed
            </p>
            <h2 className="font-serif text-3xl font-medium text-navy sm:text-4xl">
              Featured Highlights
            </h2>
          </FadeInSection>

          <div className="grid gap-6 lg:grid-cols-3">
            {instagramEmbeds.map((embed, index) => (
              <FadeInSection key={embed.src} delay={index * 0.08}>
                <div className="overflow-hidden border border-navy/10 bg-white shadow-sm">
                  <iframe
                    title={embed.title}
                    src={embed.src}
                    className="h-[620px] w-full"
                    loading="lazy"
                  />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-[#FAFAF8]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeInSection className="mb-16 flex justify-between items-end border-b border-navy/10 pb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-primary mb-4">
                Services
              </p>
              <h2 className="font-serif text-3xl font-medium text-navy sm:text-4xl">
                What We Provide
              </h2>
            </div>
          </FadeInSection>

          <div className="grid gap-6 md:grid-cols-3">
            {servicePillars.map((pillar, index) => (
              <FadeInSection key={pillar.title} delay={index * 0.08}>
                <Link
                  href={pillar.href}
                  className="group block h-full border-b border-navy/10 pb-10 transition-all hover:border-blue-primary/40"
                >
                  <div className="mb-6 text-blue-primary/80 transition-transform duration-500 group-hover:-translate-y-1">
                    <pillar.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-navy transition-colors group-hover:text-blue-primary">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-navy/60 font-light">
                    {pillar.description}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-navy transition-all duration-300 group-hover:gap-3 group-hover:text-blue-primary">
                    Learn more
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 sm:py-40 border-y border-white/20 bg-navy relative">
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
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <FadeInSection>
            <h2 className="font-serif text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
              Ready to <em className="italic font-light text-white">Begin?</em>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/70 font-light">
              Use online booking to reserve your appointment, or connect with our concierge team through social media.
            </p>

            <div className="mt-12 flex items-center justify-center gap-6">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white bg-white text-blue-primary px-10 py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-transparent hover:text-white"
              >
                Book Appointment
              </a>
              <a
                href="https://www.facebook.com/swiftdripwellness/photos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-b border-white/30 pb-1 px-2 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:border-white hover:text-white"
              >
                View Photos
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
