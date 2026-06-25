'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export function FinalCtaSection() {
  return (
    <section className="section bg-[#325b31]">
      <div className="container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-white sm:text-4xl"
        >
          Ready To Make The Switch?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/80"
        >
          Transfer your prescriptions today and discover a better pharmacy experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#transfer"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-semibold text-[#325b31] shadow-soft-lg transition hover:bg-slate-100"
          >
            Transfer My Prescription
          </a>
          <a
            href="tel:+17187772020"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-transparent px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
          >
            <Phone size={18} />
            Call (718) 777-2020
          </a>
        </motion.div>
      </div>
    </section>
  );
}
