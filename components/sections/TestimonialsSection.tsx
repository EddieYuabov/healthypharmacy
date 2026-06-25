'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Card } from '@/components/ui';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  initials: string;
  avatarClass: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Patient',
    content:
      'The transfer process was seamless. I was shocked how quickly I could switch pharmacies without any hassle. Great service!',
    rating: 5,
    initials: 'SJ',
    avatarClass: 'bg-sky-100 text-sky-700',
  },
  {
    name: 'Michael Chen',
    role: 'Patient',
    content:
      'Delivery is always on time, and the pharmacists are incredibly knowledgeable. They actually take time to answer my questions.',
    rating: 5,
    initials: 'MC',
    avatarClass: 'bg-emerald-100 text-emerald-700',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Patient',
    content:
      'Finally, a pharmacy that treats me like a person, not just a prescription number. Highly recommend Healthy Pharmacy!',
    rating: 5,
    initials: 'ER',
    avatarClass: 'bg-violet-100 text-violet-700',
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">What Our Patients Are Saying</h2>
          <p className="section-copy">
            See what our community has to say about their Healthy Pharmacy experience.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-2xl"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
            >
              <Card hover={false} className="relative p-10">
                <span className="absolute left-8 top-4 select-none font-serif text-7xl leading-none text-[#325b31]/10">
                  &ldquo;
                </span>
                <div className="relative flex gap-1 text-amber-400">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="relative mt-5 text-lg leading-8 text-slate-700">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>
                <div className="relative mt-8 flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold ${testimonials[currentIndex].avatarClass}`}
                  >
                    {testimonials[currentIndex].initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-950">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-slate-500">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <motion.button
              onClick={goToPrevious}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-[#325b31]/30 hover:text-[#325b31]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </motion.button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-6 bg-[#325b31]' : 'w-2 bg-slate-200'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={goToNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-[#325b31]/30 hover:text-[#325b31]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
