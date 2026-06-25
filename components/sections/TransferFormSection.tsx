'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Input, Select } from '@/components/ui';
import { Check, CheckCircle } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  currentPharmacy: string;
  currentPharmacyPhone: string;
  medications: string;
  contactMethod: string;
}

const STEPS = ['Personal Information', 'Current Pharmacy', 'Medication Information', 'Confirmation'];

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  currentPharmacy: '',
  currentPharmacyPhone: '',
  medications: '',
  contactMethod: '',
};

const contactMethods = [
  { value: 'phone', label: 'Phone Call' },
  { value: 'email', label: 'Email' },
  { value: 'text', label: 'Text Message' },
];

export function TransferFormSection() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateStep = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (step === 0) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
    }

    if (step === 1) {
      if (!formData.currentPharmacy.trim())
        newErrors.currentPharmacy = 'Current pharmacy is required';
      if (!formData.contactMethod) newErrors.contactMethod = 'Contact method is required';
    }

    if (step === 2) {
      if (!formData.medications.trim()) newErrors.medications = 'Medications are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const goNext = () => {
    if (!validateStep()) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/transfer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || 'Something went wrong. Please try again.');
      }

      setIsSuccess(true);
      setFormData(initialFormData);
      setStep(0);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="transfer" className="section bg-slate-50">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Transfer Your Prescription In Under 2 Minutes</h2>
          <p className="section-copy">
            Complete the form below and our pharmacy team will move your prescriptions with
            speed and care.
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          <div className="rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-soft-lg sm:p-10">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center py-10 text-center"
              >
                <CheckCircle size={56} className="text-[#325b31]" />
                <h3 className="mt-6 text-2xl font-semibold text-slate-950">
                  Transfer request received!
                </h3>
                <p className="mt-3 max-w-sm text-slate-600">
                  Our pharmacy team will reach out shortly to complete your prescription
                  transfer.
                </p>
                <Button className="mt-8" onClick={() => setIsSuccess(false)}>
                  Submit another transfer
                </Button>
              </motion.div>
            ) : (
              <>
                {/* Progress indicator */}
                <div className="mb-10 flex items-center">
                  {STEPS.map((label, index) => (
                    <div key={label} className="flex flex-1 items-center last:flex-none">
                      <div className="flex flex-col items-center gap-2">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition ${
                            index < step
                              ? 'bg-[#325b31] text-white'
                              : index === step
                              ? 'bg-[#325b31] text-white ring-4 ring-[#325b31]/15'
                              : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          {index < step ? <Check size={16} /> : index + 1}
                        </div>
                        <span
                          className={`hidden text-center text-xs font-medium sm:block ${
                            index <= step ? 'text-slate-900' : 'text-slate-400'
                          }`}
                        >
                          {label}
                        </span>
                      </div>
                      {index < STEPS.length - 1 && (
                        <div
                          className={`mx-2 h-0.5 flex-1 rounded-full transition ${
                            index < step ? 'bg-[#325b31]' : 'bg-slate-100'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="grid gap-5"
                    >
                      {step === 0 && (
                        <>
                          <div className="grid gap-5 sm:grid-cols-2">
                            <Input
                              label="First Name"
                              name="firstName"
                              placeholder="John"
                              value={formData.firstName}
                              onChange={handleChange}
                              error={errors.firstName}
                            />
                            <Input
                              label="Last Name"
                              name="lastName"
                              placeholder="Doe"
                              value={formData.lastName}
                              onChange={handleChange}
                              error={errors.lastName}
                            />
                          </div>
                          <div className="grid gap-5 sm:grid-cols-2">
                            <Input
                              label="Phone Number"
                              name="phone"
                              type="tel"
                              placeholder="(555) 123-4567"
                              value={formData.phone}
                              onChange={handleChange}
                              error={errors.phone}
                            />
                            <Input
                              label="Email"
                              name="email"
                              type="email"
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={handleChange}
                              error={errors.email}
                            />
                          </div>
                        </>
                      )}

                      {step === 1 && (
                        <>
                          <Input
                            label="Current Pharmacy"
                            name="currentPharmacy"
                            placeholder="CVS, Walgreens, etc."
                            value={formData.currentPharmacy}
                            onChange={handleChange}
                            error={errors.currentPharmacy}
                          />
                          <Input
                            label="Current Pharmacy Phone (optional)"
                            name="currentPharmacyPhone"
                            type="tel"
                            placeholder="(555) 987-6543"
                            value={formData.currentPharmacyPhone}
                            onChange={handleChange}
                          />
                          <Select
                            label="Preferred Contact Method"
                            name="contactMethod"
                            value={formData.contactMethod}
                            onChange={handleSelectChange}
                            error={errors.contactMethod}
                            options={contactMethods}
                          />
                        </>
                      )}

                      {step === 2 && (
                        <div className="flex flex-col gap-2">
                          <label className="text-sm font-semibold text-slate-800">
                            Medication Names
                          </label>
                          <textarea
                            name="medications"
                            placeholder="List the medications you want to transfer (e.g., Lisinopril 10mg, Metformin 500mg)"
                            value={formData.medications}
                            onChange={handleChange}
                            rows={6}
                            className={`rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-[#325b31] focus:ring-2 focus:ring-[#325b31]/20 ${
                              errors.medications ? 'border-rose-500' : ''
                            }`}
                          />
                          {errors.medications && (
                            <p className="text-xs text-rose-600">{errors.medications}</p>
                          )}
                        </div>
                      )}

                      {step === 3 && (
                        <div className="grid gap-4">
                          <p className="text-sm font-semibold text-slate-800">
                            Review your information
                          </p>
                          <dl className="grid gap-3 rounded-2xl bg-slate-50 p-5 text-sm">
                            <Row label="Name" value={`${formData.firstName} ${formData.lastName}`} />
                            <Row label="Phone" value={formData.phone} />
                            <Row label="Email" value={formData.email} />
                            <Row label="Current Pharmacy" value={formData.currentPharmacy} />
                            <Row
                              label="Preferred Contact"
                              value={
                                contactMethods.find((m) => m.value === formData.contactMethod)
                                  ?.label || '—'
                              }
                            />
                            <Row label="Medications" value={formData.medications} />
                          </dl>
                          <p className="text-xs text-slate-500">
                            We&apos;ll never share your information. See our privacy policy for
                            details.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {submitError && (
                    <p className="mt-4 rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-600">
                      {submitError}
                    </p>
                  )}

                  <div className="mt-8 flex items-center justify-between gap-4">
                    {step > 0 ? (
                      <Button type="button" variant="ghost" onClick={goBack}>
                        Back
                      </Button>
                    ) : (
                      <span />
                    )}

                    {step < STEPS.length - 1 ? (
                      <Button type="button" onClick={goNext}>
                        Continue
                      </Button>
                    ) : (
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting…' : 'Transfer My Prescription'}
                      </Button>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="text-xs uppercase tracking-wide text-slate-400">{label}</dt>
      <dd className="font-medium text-slate-900">{value || '—'}</dd>
    </div>
  );
}
