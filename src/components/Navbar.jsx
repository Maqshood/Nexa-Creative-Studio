import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks, studioInfo } from '../data/content';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll state for sticky blur & active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'services', 'work', 'process', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F7F4]/90 backdrop-blur-md border-b border-black/[0.06] shadow-xs py-3.5'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Wordmark Logo */}
            <a
              href="#hero"
              onClick={(e) => scrollTo(e, '#hero')}
              className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] rounded-md"
              aria-label="Nexa Creative Studio — Back to top"
            >
              <div className="w-8 h-8 rounded-lg bg-[#4F46E5] text-white flex items-center justify-center font-bold text-sm tracking-tight transition-transform duration-300 group-hover:scale-105 shadow-sm">
                N
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-[#171717] leading-none">
                  Nexa
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#666666] font-semibold mt-0.5">
                  Creative Studio
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-[#4F46E5] bg-[#EEECFF]'
                        : 'text-[#666666] hover:text-[#171717] hover:bg-black/[0.04]'
                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Action Button */}
            <div className="hidden md:flex items-center">
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#4F46E5] hover:bg-[#4338CA] transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4F46E5]"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
                className="p-2.5 rounded-xl text-[#171717] bg-white border border-black/[0.08] hover:bg-stone-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs md:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full sm:w-80 bg-[#F8F7F4] shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div>
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-black/[0.06]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#4F46E5] text-white flex items-center justify-center font-bold text-xs">
                N
              </div>
              <span className="font-bold text-sm tracking-tight text-[#171717]">
                Nexa Creative Studio
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-[#666666] hover:text-[#171717] hover:bg-black/[0.04] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="mt-8 flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#EEECFF] text-[#4F46E5]'
                      : 'text-[#171717] hover:bg-black/[0.04]'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#666666] uppercase font-mono">
                    {link.href.replace('#', '')}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Mobile Drawer Footer CTA */}
        <div className="pt-6 border-t border-black/[0.06] space-y-4">
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-white bg-[#4F46E5] hover:bg-[#4338CA] transition-colors shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <p className="text-xs text-center text-[#666666]">
            {studioInfo.trustStatement}
          </p>
        </div>
      </div>
    </>
  );
}
