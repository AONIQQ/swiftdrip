"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BOOKING_URL, SITE_NAME } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileVisible, setMobileVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Handle open/close with a slight delay so CSS transitions can play
  useEffect(() => {
    if (mobileOpen) {
      // Mount first, then animate in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setMobileVisible(true);
        });
      });
    } else {
      setMobileVisible(false);
    }
  }, [mobileOpen]);

  const handleClose = () => {
    setMobileVisible(false);
    // Wait for fade-out transition before unmounting
    setTimeout(() => setMobileOpen(false), 300);
  };

  return (
    <>
      {/* Decorative top accent line */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-gradient-to-r from-transparent via-blue-primary to-transparent" />

      <header
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-white shadow-md border-b border-navy/10"
          : "bg-transparent"
          }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="relative flex items-center gap-3 group">
            <Image
              src="/logo.jpg"
              alt={SITE_NAME}
              width={48}
              height={48}
              className="rounded-full ring-2 ring-blue-primary/20 transition-all duration-300 group-hover:ring-blue-primary/50"
              priority
            />
            <span className="hidden sm:block font-serif text-lg font-semibold tracking-tight text-navy transition-colors duration-300">
              {SITE_NAME}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 group ${scrolled
                  ? "text-navy/80 hover:text-blue-primary"
                  : "text-navy hover:text-blue-primary"
                  }`}
              >
                {link.label}
                {/* Sliding underline */}
                <span className="absolute bottom-0.5 left-4 right-4 h-[1px] origin-left scale-x-0 bg-blue-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center rounded-none border border-navy bg-navy px-7 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-primary hover:border-blue-primary hover:text-white"
            >
              Book Now
            </a>

            <button
              onClick={() => {
                if (mobileOpen) {
                  handleClose();
                } else {
                  setMobileOpen(true);
                }
              }}
              className={`lg:hidden relative z-[70] p-2 rounded-lg transition-colors duration-300 ${mobileOpen
                ? "text-white"
                : "text-navy"
                }`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Full-Screen Overlay */}
      {mobileOpen && (
        <div
          style={{
            opacity: mobileVisible ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
          className="fixed inset-0 z-[55] bg-navy/98 backdrop-blur-2xl flex flex-col items-center justify-center"
        >
          <nav className="flex flex-col items-center gap-2">
            {NAV_LINKS.map((link, i) => (
              <div
                key={link.href}
                style={{
                  opacity: mobileVisible ? 1 : 0,
                  transform: mobileVisible
                    ? "translateY(0)"
                    : "translateY(24px)",
                  transition: `opacity 0.35s ease ${0.08 * i}s, transform 0.35s ease ${0.08 * i}s`,
                }}
              >
                <Link
                  href={link.href}
                  onClick={handleClose}
                  className="block px-4 py-3 text-2xl font-serif font-medium text-white/90 tracking-wide transition-colors duration-200 hover:text-blue-primary"
                >
                  {link.label}
                </Link>
              </div>
            ))}

            <div
              style={{
                opacity: mobileVisible ? 1 : 0,
                transform: mobileVisible
                  ? "translateY(0)"
                  : "translateY(24px)",
                transition: `opacity 0.35s ease ${0.08 * NAV_LINKS.length}s, transform 0.35s ease ${0.08 * NAV_LINKS.length}s`,
              }}
              className="mt-6"
            >
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="inline-flex items-center border border-white bg-white px-10 py-3.5 text-lg font-medium text-navy transition-all duration-300 hover:bg-blue-primary hover:border-blue-primary hover:text-navy"
              >
                Book Now
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
