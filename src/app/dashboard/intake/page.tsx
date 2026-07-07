"use client";

import { useState } from "react";

interface IntakeFormData {
  companyName: string;
  contactName: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  techStack: string;
  competitors: string;
  additionalInfo: string;
}

const initialFormData: IntakeFormData = {
  companyName: "",
  contactName: "",
  email: "",
  projectType: "",
  budget: "",
  timeline: "",
  description: "",
  techStack: "",
  competitors: "",
  additionalInfo: "",
};

export default function IntakePage() {
  const [formData, setFormData] = useState<IntakeFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof IntakeFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-6 md:p-8 flex items-center justify-center min-h-[80vh]">
        <div className="text-center max-w-md">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="font-heading text-3xl text-text_primary">Intake Submitted!</h2>
          <p className="text-text_secondary mt-2">
            Thanks, {formData.contactName}! We&apos;ll review your project details and get back to you within 24 hours.
          </p>
          <button
            onClick={() => {
              setFormData(initialFormData);
              setSubmitted(false);
            }}
            className="mt-6 bg-primary text-background px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl text-text_primary">New Project Intake</h1>
        <p className="text-text_secondary mt-1">
          Fill out this form to kick off a new client project. We&apos;ll review and send a proposal.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl space-y-8">
        {/* Section: Contact */}
        <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
          <h3 className="font-heading text-lg text-text_primary border-b border-border pb-3">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text_primary mb-1.5" htmlFor="companyName">
                Company Name
              </label>
              <input
                id="companyName"
                required
                value={formData.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                className="w-full bg-background border border-border rounded-lg px-3 py-2 text-text_primary text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="Acme Inc."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text_primary mb-1.5" htmlFor="contactName">
                Contact Name
              </label>
              <input
                id="contactName"
                required
                value={formData.contactName}
                onChange={(e) => handleChange("contactName", e.target.value)}
                className="w-full bg-background border border-border rounded-lg px-3 py-2 text-text_primary text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="John Doe"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-text_primary mb-1.5" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-3 py-2 text-text_primary text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="john@acme.com"
            />
          </div>
        </div>

        {/* Section: Project */}
        <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
          <h3 className="font-heading text-lg text-text_primary border-b border-border pb-3">
            Project Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-text_primary mb-1.5" htmlFor="projectType">
                Project Type
              </label>
              <select
                id="projectType"
                required
                value={formData.projectType}
                onChange={(e) => handleChange("projectType", e.target.value)}
                className="w-full bg-background border border-border rounded-lg px-3 py-2 text-text_primary text-sm focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select...</option>
                <option value="mvp">MVP Development</option>
                <option value="feature">Feature Development</option>
                <option value="redesign">Redesign / Rebuild</option>
                <option value="architecture">Architecture Consulting</option>
                <option value="scale">Scale &amp; Optimize</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text_primary mb-1.5" htmlFor="budget">
                Budget Range
              </label>
              <select
                id="budget"
                required
                value={formData.budget}
                onChange={(e) => handleChange("budget", e.target.value)}
                className="w-full bg-background border border-border rounded-lg px-3 py-2 text-text_primary text-sm focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select...</option>
                <option value="10-25k">$10K - $25K</option>
                <option value="25-50k">$25K - $50K</option>
                <option value="50-100k">$50K - $100K</option>
                <option value="100k+">$100K+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text_primary mb-1.5" htmlFor="timeline">
                Timeline
              </label>
              <select
                id="timeline"
                required
                value={formData.timeline}
                onChange={(e) => handleChange("timeline", e.target.value)}
                className="w-full bg-background border border-border rounded-lg px-3 py-2 text-text_primary text-sm focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select...</option>
                <option value="urgent">&lt; 4 weeks</option>
                <option value="standard">4-8 weeks</option>
                <option value="relaxed">8-16 weeks</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-text_primary mb-1.5" htmlFor="description">
              Project Description
            </label>
            <textarea
              id="description"
              required
              rows={4}
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-3 py-2 text-text_primary text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Describe what you need built, key features, user personas, etc."
            />
          </div>
        </div>

        {/* Section: Technical */}
        <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
          <h3 className="font-heading text-lg text-text_primary border-b border-border pb-3">
            Technical Context
          </h3>
          <div>
            <label className="block text-sm font-medium text-text_primary mb-1.5" htmlFor="techStack">
              Preferred Tech Stack (if any)
            </label>
            <input
              id="techStack"
              value={formData.techStack}
              onChange={(e) => handleChange("techStack", e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-3 py-2 text-text_primary text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="React, Node.js, PostgreSQL, AWS..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text_primary mb-1.5" htmlFor="competitors">
              Competitors or Similar Products
            </label>
            <textarea
              id="competitors"
              rows={3}
              value={formData.competitors}
              onChange={(e) => handleChange("competitors", e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-3 py-2 text-text_primary text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="List any competitors or products you want to emulate..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text_primary mb-1.5" htmlFor="additionalInfo">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              rows={3}
              value={formData.additionalInfo}
              onChange={(e) => handleChange("additionalInfo", e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-3 py-2 text-text_primary text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Anything else we should know..."
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto bg-accent text-background px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
        >
          Submit Intake Form
        </button>
      </form>
    </div>
  );
}