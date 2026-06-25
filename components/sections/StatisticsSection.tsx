'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const regions = [
  { label: 'New York', description: 'Every borough covered with free delivery and pharmacy support.' },
  { label: 'New Jersey', description: 'Fast routes, same-day support, and local coverage.' },
  { label: 'Connecticut', description: 'Reliable medication delivery across the state.' },
];

export function StatisticsSection() {
  const [activeRegion, setActiveRegion] = useState('New York');

  return (
    <section id="delivery" className="section bg-slate-50">
      <div className="container grid gap-12 lg:grid-cols-[0.95fr_0.85fr] items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            <h2 className="section-title">We Bring Your Medications To You</h2>
            <p className="section-copy">
              Enjoy free delivery throughout New York, New Jersey, and Connecticut.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {['Fast delivery', 'Real-time communication', 'Reliable service', 'Secure handling'].map((item) => (
              <div key={item} className="service-card p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{item}</p>
                <p className="mt-4 text-lg font-semibold text-slate-950">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="service-card p-8"
        >
          <h3 className="text-xl font-semibold text-slate-950">Interactive Service Area</h3>
          <p className="mt-3 text-slate-600 leading-7">
            Select a region to see how Healthy Pharmacy serves your area with prompt delivery and support.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {regions.map((region) => (
              <button
                key={region.label}
                type="button"
                onClick={() => setActiveRegion(region.label)}
                className={`service-pill ${activeRegion === region.label ? 'active' : ''}`}
              >
                {region.label}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200/80 bg-[#f8fafc] p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{activeRegion}</p>
            <p className="mt-4 text-lg font-semibold text-slate-950">
              {regions.find((region) => region.label === activeRegion)?.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
