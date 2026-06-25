'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui';
import { Zap, Package, Users, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Prescription Transfers Made Easy',
    description: "We handle the transfer process from start to finish so you don't have to.",
  },
  {
    icon: Package,
    title: 'Free Medication Delivery',
    description: 'Fast and reliable delivery throughout New York, New Jersey, and Connecticut.',
  },
  {
    icon: Users,
    title: 'Personalized Care',
    description: 'Speak directly with pharmacy professionals who know your medications and health needs.',
  },
  {
    icon: ShieldCheck,
    title: "Workers' Compensation Experts",
    description:
      'Specialized support for injury-related prescriptions with seamless coordination and no out-of-pocket costs.',
  },
];

export function FeaturesSection() {
  return (
    <section id="services" className="section bg-slate-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <h2 className="section-title">Why Patients Choose Healthy Pharmacy</h2>
          <p className="section-copy">
            Experience pharmacy care built for speed, convenience, and modern healthcare needs.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#eef6ed] text-[#325b31] shadow-sm">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950">{feature.title}</h3>
                  <p className="mt-4 text-slate-600 leading-7">{feature.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
