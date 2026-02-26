import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Droplets,
  TestTube,
  Sparkles,
} from "lucide-react";
import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
  NAV_LINKS,
  BOOKING_URL,
  SOCIAL_LINKS,
  CONTACT_ADDRESS,
  CONTACT_CITY_STATE_ZIP,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
} from "@/lib/constants";

const SERVICE_LINKS = [
  { label: "IV Therapy", href: "/iv-drips", icon: Droplets },
  { label: "Lab Testing", href: "/lab-testing", icon: TestTube },
  { label: "Rapid Testing", href: "/rapid-testing", icon: Sparkles },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-navy/10 bg-navy">
      {/* Elegant top accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Very subtle background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <Image
                src="/logo.jpg"
                alt={SITE_NAME}
                width={44}
                height={44}
                className="rounded-full ring-2 ring-white/30 transition-all duration-300 group-hover:ring-white/60"
              />
              <div>
                <span className="block font-serif text-lg font-semibold text-white tracking-tight">
                  {SITE_NAME}
                </span>
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                  {SITE_TAGLINE}
                </span>
              </div>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/80 max-w-xs">
              {SITE_DESCRIPTION}
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-none border border-white/20 text-white/70 transition-all duration-300 hover:border-white hover:text-white"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-none border border-white/20 text-white/70 transition-all duration-300 hover:border-white hover:text-white"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-white mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-white mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2.5 text-sm text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    <link.icon size={14} className="text-white" strokeWidth={1.5} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-white mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-white"
                />
                <span className="text-sm text-white/80 leading-relaxed">
                  {CONTACT_ADDRESS}
                  <br />
                  {CONTACT_CITY_STATE_ZIP}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE_E164}`}
                  className="flex items-center gap-3 text-sm text-white/80 transition-colors duration-200 hover:text-white"
                >
                  <Phone size={16} strokeWidth={1.5} className="shrink-0 text-white" />
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/80 transition-colors duration-200 hover:text-white"
                >
                  <Instagram size={16} strokeWidth={1.5} className="shrink-0 text-white" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/60 uppercase tracking-widest">
            &copy; {year} {SITE_NAME} {SITE_TAGLINE}. All rights reserved.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-200 hover:text-white"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </footer>
  );
}
