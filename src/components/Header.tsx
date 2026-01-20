'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { flags, localeNames, Locale } from "@/lib/i18n";

export default function Header() {
  const { t, locale, setLocale, flag } = useLocale();
  const locales: Locale[] = ['pt', 'en', 'es'];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="myfitplatform"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-14 sm:h-14"
            />
            <span className="text-lg sm:text-2xl tracking-tight">
              <span className="font-extrabold">myfit</span>
              <span className="hidden xs:inline">platform</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.resources}
            </Link>
            <Link href="/#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.pricing}
            </Link>
            <Link href="/#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.faq}
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.contact}
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1">
                <span className="text-base">{flag}</span>
                <span className="hidden sm:inline">{locale.toUpperCase()}</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 top-full mt-2 bg-card border border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 min-w-[140px]">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setLocale(loc)}
                    className={`flex items-center gap-3 px-4 py-3 text-sm hover:bg-muted transition-colors w-full text-left ${locale === loc ? 'bg-muted/50' : ''}`}
                  >
                    <span className="text-lg">{flags[loc]}</span>
                    {localeNames[loc]}
                  </button>
                ))}
              </div>
            </div>

            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap px-3 py-2"
            >
              {t.signIn}
            </Link>
            <Link
              href="/register"
              className="text-sm font-semibold bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90 transition-all whitespace-nowrap"
            >
              {t.getStarted}
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Language Switcher - Flag only */}
            <div className="relative group">
              <button className="flex items-center text-xl p-2">
                {flag}
              </button>
              <div className="absolute right-0 top-full mt-2 bg-card border border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 min-w-[140px]">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setLocale(loc)}
                    className={`flex items-center gap-3 px-4 py-3 text-sm hover:bg-muted transition-colors w-full text-left ${locale === loc ? 'bg-muted/50' : ''}`}
                  >
                    <span className="text-lg">{flags[loc]}</span>
                    {localeNames[loc]}
                  </button>
                ))}
              </div>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/40 py-4">
            <div className="flex flex-col gap-4">
              {/* Navigation Links */}
              <div className="flex flex-col gap-2">
                <Link
                  href="/#features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {t.resources}
                </Link>
                <Link
                  href="/#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {t.pricing}
                </Link>
                <Link
                  href="/#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {t.faq}
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {t.contact}
                </Link>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-2 border-t border-border/40">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-center py-2.5 border border-border hover:bg-muted transition-colors"
                >
                  {t.signIn}
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-center bg-primary text-primary-foreground py-2.5 hover:bg-primary/90 transition-all"
                >
                  {t.getStarted}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
