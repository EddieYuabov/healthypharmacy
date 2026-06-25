'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Transfer Rx', href: '#transfer' },
    { label: 'Delivery', href: '#delivery' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-xl transition duration-500 ${
        isScrolled ? 'shadow-md' : 'shadow-none'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container flex h-20 items-center justify-between gap-6 overflow-visible">
        <Link href="#home" className="flex items-center overflow-visible">
          <img
            src="/Healthy-Pharmacy_logo.webp"
            alt="Healthy Pharmacy"
            className="h-20 w-auto object-contain sm:h-40 sm:translate-y-[40px]"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-[#325b31]">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#transfer"
            className="inline-flex items-center rounded-full bg-[#325b31] px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-[#284a29]"
          >
            Transfer Prescription
          </a>
        </div>

        <button
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border-t border-slate-200/10 bg-white/95 md:hidden">
          <div className="container flex flex-col gap-3 py-4">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#transfer" className="rounded-2xl bg-[#325b31] px-4 py-3 text-center text-sm font-semibold text-white shadow-soft hover:bg-[#284a29]">
              Transfer Prescription
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
