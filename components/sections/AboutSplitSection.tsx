'use client';

import { motion } from 'framer-motion';

export function AboutSplitSection() {
  return (
    <section id="about" className="section bg-white">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-gradient-to-br from-[#eef6ed] via-white to-slate-50 shadow-soft-lg"
        >
          <div className="flex aspect-square items-center justify-center text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
            Image placeholder
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="section-title text-left">More Than Just A Pharmacy</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Healthy Pharmacy combines personalized care with modern convenience. Whether
            you&apos;re transferring prescriptions, managing medications for a loved one, or
            receiving specialized workers&apos; compensation care, we&apos;re committed to making
            the process simple.
          </p>
          <div className="mt-8">
            <a
              href="#transfer"
              className="inline-flex items-center justify-center rounded-full bg-[#325b31] px-6 py-4 text-base font-semibold text-white shadow-soft transition hover:bg-[#284a29]"
            >
              Start Your Transfer
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
