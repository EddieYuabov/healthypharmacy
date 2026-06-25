'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui';

const trustBadges = [
  'Free Delivery',
  'Fast Prescription Transfers',
  'Serving NY, NJ & CT',
  'Personalized Pharmacist Support',
];

export function HeroSection() {
  return (
    <section id="home" className="bg-white py-20">
      <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#325b31]/15 bg-[#eef6ed] px-4 py-2 text-sm font-semibold text-[#325b31]">
            <MapPin size={16} />
            Now Serving New York, New Jersey &amp; Connecticut
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl"
          >
            Switching Pharmacies Has Never Been Easier.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="max-w-2xl text-lg leading-8 text-slate-600"
          >
            Transfer prescriptions in minutes, get free delivery, and experience pharmacy care built around you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#transfer"
              className="inline-flex items-center justify-center rounded-full bg-[#325b31] px-6 py-4 text-base font-semibold text-white shadow-soft transition hover:bg-[#284a29]"
            >
              Transfer My Prescription
            </a>
            <a
              href="#transfer"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 text-base font-semibold text-[#325b31] shadow-sm transition hover:bg-slate-50"
            >
              Become a New Patient
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {trustBadges.map((badge) => (
              <div key={badge} className="trust-badge">
                <span className="text-lg">✓</span>
                <span>{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-[2rem] border border-slate-200/80 bg-[#f8fafc] p-6 shadow-soft-lg"
        >
          <div className="overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#eaf6ed] via-white to-[#f8fafc] p-6 shadow-inner">
            <div className="grid gap-4">
              <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Medication Delivery</p>
                    <p className="mt-3 text-xl font-semibold text-slate-950">Free & fast to your door.</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#325b31] text-white">🚚</div>
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-slate-950/95 p-6 text-white shadow-soft-lg">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Pharmacy Support</p>
                <p className="mt-4 text-xl font-semibold">Dedicated pharmacist support, every step of the way.</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">Fast transfers</p>
                  <p className="mt-3 text-lg font-semibold text-slate-950">Done in minutes</p>
                </div>
                <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">Coverage</p>
                  <p className="mt-3 text-lg font-semibold text-slate-950">NY, NJ & CT</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
