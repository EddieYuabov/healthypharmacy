'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Transfer Prescription', href: '#transfer' },
    { label: 'Become a New Patient', href: '#transfer' },
    { label: 'Delivery', href: '#delivery' },
    { label: 'Contact', href: '#contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'HIPAA Notice', href: '#' },
  ];

  return (
    <footer id="contact" className="border-t border-slate-200 bg-white py-16">
      <div className="container grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/favicon.png"
              alt="Healthy Pharmacy"
              className="h-7 w-7 object-contain"
            />
            <span className="font-semibold text-slate-950">Healthy Pharmacy</span>
          </div>
          <p className="text-sm leading-6 text-slate-500">
            Modern pharmacy care designed around you.
          </p>
          <div className="flex gap-3">
            {['f', '𝕏', '📷', 'in'].map((icon) => (
              <a
                key={icon}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-[#325b31]/30 hover:text-[#325b31]"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-slate-950">Quick Links</h4>
          <div className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-slate-500 transition hover:text-[#325b31]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-slate-950">Legal</h4>
          <div className="flex flex-col gap-3">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-slate-500 transition hover:text-[#325b31]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-slate-950">Contact</h4>
          <div className="flex items-start gap-3 text-sm text-slate-500">
            <MapPin size={18} className="mt-0.5 shrink-0 text-[#325b31]" />
            <span>
              59-17 Junction Blvd.
              <br />
              Elmhurst, NY 11373
            </span>
          </div>
          <a
            href="tel:+17187772020"
            className="flex items-center gap-3 text-sm text-slate-500 transition hover:text-[#325b31]"
          >
            <Phone size={18} className="shrink-0 text-[#325b31]" />
            (718) 777-2020
          </a>
          <a
            href="mailto:info@healthypharmacyny.com"
            className="flex items-center gap-3 text-sm text-slate-500 transition hover:text-[#325b31]"
          >
            <Mail size={18} className="shrink-0 text-[#325b31]" />
            info@healthypharmacyny.com
          </a>
        </div>
      </div>

      <div className="container mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-400">
        &copy; {currentYear} Healthy Pharmacy. All rights reserved.
      </div>
    </footer>
  );
}
