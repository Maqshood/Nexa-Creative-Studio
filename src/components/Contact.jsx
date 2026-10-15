import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Clock, Sparkles } from 'lucide-react';
import { studioInfo } from '../data/content';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Design',
    details: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const projectTypes = [
    'Web Design',
    'Web Development',
    'Brand Identity',
    'Digital Strategy',
    'Full Experience'
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address (e.g., name@domain.com).';
      }
    }

    if (!formData.details.trim()) {
      newErrors.details = 'Please briefly share what you are building or planning.';
    } else if (formData.details.trim().length < 10) {
      newErrors.details = 'Please provide at least 10 characters so we can understand your project.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate clean client-side validation and dispatch without false claims
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      projectType: 'Web Design',
      details: '',
    });
    setErrors({});
    setSubmittedSuccess(false);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#F8F7F4] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#4F46E5]" />
          <span className="text-xs uppercase tracking-widest text-[#4F46E5] font-bold">
            Start A Conversation
          </span>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight">
            Have a Good Idea? Let's Make It Happen.
          </h2>
          <p className="text-base sm:text-lg text-[#666666] mt-4">
            Tell us what you're building, where you want to go, and how we can help.
          </p>
        </div>

        {/* Grid: Left Column Info, Right Column Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Placeholder Studio Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-black/[0.08] shadow-xs">
              <h3 className="text-xl font-bold text-[#171717] mb-6">
                Studio Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EEECFF] text-[#4F46E5] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#666666] uppercase tracking-wider block">
                      Direct Email (Demo)
                    </span>
                    <a
                      href={`mailto:${studioInfo.email}`}
                      className="text-sm sm:text-base font-bold text-[#171717] hover:text-[#4F46E5] transition-colors"
                    >
                      {studioInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EEECFF] text-[#4F46E5] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#666666] uppercase tracking-wider block">
                      Location
                    </span>
                    <p className="text-sm sm:text-base font-bold text-[#171717]">
                      {studioInfo.location}
                    </p>
                    <span className="text-xs text-[#666666] italic">
                      (Concept Location / Remote-First)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EEECFF] text-[#4F46E5] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#666666] uppercase tracking-wider block">
                      Working Hours
                    </span>
                    <p className="text-sm sm:text-base font-bold text-[#171717]">
                      {studioInfo.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time & Integration Ready Banner */}
            <div className="p-6 rounded-3xl bg-[#EEECFF] border border-[#4F46E5]/15">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#4F46E5] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#171717]">
                    Integration-Ready Form
                  </h4>
                  <p className="text-xs text-[#666666] mt-1 leading-relaxed">
                    This form features robust client-side validation, clean state handling, and accessible ARIA attributes. It is ready to connect with any API endpoint or webhook.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form with Validation */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-black/[0.08] shadow-md">
              
              {submittedSuccess ? (
                /* Success Feedback State */
                <div className="py-8 text-center space-y-6 animate-fadeIn" role="status" aria-live="polite">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="max-w-md mx-auto">
                    <h3 className="text-2xl font-bold text-[#171717] mb-2">
                      Inquiry Validated Successfully!
                    </h3>
                    <p className="text-sm text-[#666666] leading-relaxed mb-4">
                      Thank you, <span className="font-semibold text-[#171717]">{formData.name}</span>. Your project brief for <span className="font-semibold text-[#4F46E5]">{formData.projectType}</span> passed all validation criteria.
                    </p>
                    <div className="p-4 rounded-xl bg-stone-50 border border-black/[0.06] text-xs text-[#666666] text-left">
                      <p className="font-bold text-[#171717] mb-1">Concept Form Demonstration Note:</p>
                      <p>Client-side validation verified all fields. In a live production environment, this payload dispatches directly to your chosen backend or CRM.</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#171717] bg-[#EEECFF] hover:bg-[#EEECFF]/80 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* Form Inputs */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-wider font-bold text-[#171717] mb-2">
                      Full Name <span className="text-[#4F46E5]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      placeholder="e.g. Sarah Jenkins"
                      aria-required="true"
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#171717] bg-[#F8F7F4]/60 placeholder:text-stone-400 transition-all ${
                        errors.name
                          ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20'
                          : 'border-black/[0.1] focus:border-[#4F46E5] focus:bg-white'
                      }`}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider font-bold text-[#171717] mb-2">
                      Email Address <span className="text-[#4F46E5]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      placeholder="e.g. sarah@company.com"
                      aria-required="true"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#171717] bg-[#F8F7F4]/60 placeholder:text-stone-400 transition-all ${
                        errors.email
                          ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20'
                          : 'border-black/[0.1] focus:border-[#4F46E5] focus:bg-white'
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Project Type Selection */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-[#171717] mb-2">
                      Project Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => {
                        const isSelected = formData.projectType === type;
                        return (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#4F46E5] text-white shadow-2xs'
                                : 'bg-[#F8F7F4] text-[#171717] border border-black/[0.08] hover:bg-stone-100'
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="details" className="block text-xs uppercase tracking-wider font-bold text-[#171717] mb-2">
                      Project Details <span className="text-[#4F46E5]">*</span>
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      value={formData.details}
                      onChange={(e) => {
                        setFormData({ ...formData, details: e.target.value });
                        if (errors.details) setErrors({ ...errors, details: null });
                      }}
                      placeholder="Tell us about your brand, goals, timeline, and what you'd like to achieve..."
                      aria-required="true"
                      aria-invalid={errors.details ? 'true' : 'false'}
                      aria-describedby={errors.details ? 'details-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#171717] bg-[#F8F7F4]/60 placeholder:text-stone-400 transition-all ${
                        errors.details
                          ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20'
                          : 'border-black/[0.1] focus:border-[#4F46E5] focus:bg-white'
                      }`}
                    />
                    {errors.details && (
                      <p id="details-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.details}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#4F46E5] hover:bg-[#4338CA] transition-all shadow-md hover:shadow-lg disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#666666]">
                    Submitting activates client-side validation demonstration. No spam, ever.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
