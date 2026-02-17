"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Usage: accessible at /demo
// Submits to Formspree — replace the action URL with your own endpoint

type FormState = "idle" | "loading" | "success" | "error";

interface FormFields {
  fullName: string;
  email: string;
  company: string;
  storeCount: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  company?: string;
}

const FORMSPREE_URL = "https://formspree.io/f/xdkovpgr";

const STORE_COUNT_OPTIONS = [
  { value: "", label: "Select number of stores..." },
  { value: "1-10", label: "1 – 10 stores" },
  { value: "11-50", label: "11 – 50 stores" },
  { value: "51-200", label: "51 – 200 stores" },
  { value: "200+", label: "200+ stores" },
];

const TRUST_SIGNALS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    text: "Your data is safe with us",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "Response within 24 hours",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "No commitment required",
  },
];

function validateEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};

  if (!fields.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!fields.email.trim()) {
    errors.email = "Work email is required.";
  } else if (!validateEmail(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!fields.company.trim()) {
    errors.company = "Company name is required.";
  }

  return errors;
}

const inputBase =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20";

const inputError =
  "border-red-400 focus:border-red-400 focus:ring-red-400/20";

export default function DemoPage() {
  const [fields, setFields] = useState<FormFields>({
    fullName: "",
    email: "",
    company: "",
    storeCount: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));

    // Clear the field-level error as the user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Move focus to the first invalid field
      const firstErrorKey = Object.keys(validationErrors)[0] as keyof FormErrors;
      const el = document.getElementById(firstErrorKey);
      el?.focus();
      return;
    }

    setFormState("loading");
    setErrorMessage("");

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName: fields.fullName,
          email: fields.email,
          company: fields.company,
          storeCount: fields.storeCount || "Not specified",
          message: fields.message || "No additional message",
        }),
      });

      if (response.ok) {
        setFormState("success");
      } else {
        const data = await response.json().catch(() => ({}));
        const msg =
          (data as { error?: string }).error ||
          "Something went wrong. Please try again or email us at sales@plexoapp.com.";
        setErrorMessage(msg);
        setFormState("error");
      }
    } catch {
      setErrorMessage(
        "Unable to send your request. Please check your connection and try again."
      );
      setFormState("error");
    }
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-50">
        {/* Hero section */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100 mb-6">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8" aria-hidden="true">
                <circle cx="4" cy="4" r="3" />
              </svg>
              Personalized demo — no sales pressure
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Book a Demo
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
              See how Plexo helps retail chains run more efficiently. Get a
              personalized walkthrough tailored to your stores and team.
            </p>

            {/* Trust signals */}
            <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3" role="list">
              {TRUST_SIGNALS.map((signal) => (
                <li
                  key={signal.text}
                  className="flex items-center gap-2 text-sm text-slate-500"
                >
                  <span className="text-indigo-500">{signal.icon}</span>
                  {signal.text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Form section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            {formState === "success" ? (
              /* Success state */
              <div
                role="alert"
                aria-live="polite"
                className="rounded-2xl bg-white border border-slate-200 shadow-sm p-10 text-center"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50">
                  <svg
                    className="h-8 w-8 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Request received!
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Thanks for reaching out, {fields.fullName.split(" ")[0]}. Our
                  team will be in touch within one business day to schedule your
                  personalized demo.
                </p>
                <p className="mt-4 text-sm text-slate-400">
                  Expect an email at{" "}
                  <span className="font-medium text-slate-600">{fields.email}</span>
                </p>
                <a
                  href="/"
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to home
                </a>
              </div>
            ) : (
              /* Form card */
              <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/60">
                  <h2 className="text-base font-semibold text-slate-900">
                    Tell us about your business
                  </h2>
                  <p className="text-sm text-slate-500 mt-0.5">
                    All fields marked with{" "}
                    <span className="text-red-500" aria-label="required">*</span>{" "}
                    are required.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="px-6 py-8 space-y-5"
                  aria-label="Book a demo form"
                >
                  {/* Global error banner */}
                  {formState === "error" && (
                    <div
                      role="alert"
                      aria-live="assertive"
                      className="flex items-start gap-3 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700"
                    >
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Full Name <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={fields.fullName}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      className={`${inputBase} ${errors.fullName ? inputError : ""}`}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" role="alert" className="mt-1.5 text-xs text-red-600">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Work Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Work Email <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@yourcompany.com"
                      value={fields.email}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`${inputBase} ${errors.email ? inputError : ""}`}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Company Name <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Acme Retail Group"
                      value={fields.company}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.company}
                      aria-describedby={errors.company ? "company-error" : undefined}
                      className={`${inputBase} ${errors.company ? inputError : ""}`}
                    />
                    {errors.company && (
                      <p id="company-error" role="alert" className="mt-1.5 text-xs text-red-600">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  {/* Number of Stores */}
                  <div>
                    <label
                      htmlFor="storeCount"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Number of Stores
                    </label>
                    <select
                      id="storeCount"
                      name="storeCount"
                      value={fields.storeCount}
                      onChange={handleChange}
                      className={`${inputBase} cursor-pointer appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")] bg-no-repeat bg-right-3 bg-[length:16px]`}
                    >
                      {STORE_COUNT_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Message{" "}
                      <span className="text-slate-400 font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your current challenges or what you'd like to see in the demo..."
                      value={fields.message}
                      onChange={handleChange}
                      className={`${inputBase} resize-y min-h-[100px]`}
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={formState === "loading"}
                      aria-disabled={formState === "loading"}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {formState === "loading" ? (
                        <>
                          <svg
                            className="h-4 w-4 animate-spin"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        "Book Your Demo"
                      )}
                    </button>

                    <p className="mt-3 text-center text-xs text-slate-400">
                      By submitting, you agree to our{" "}
                      <a
                        href="/privacy"
                        className="underline underline-offset-2 hover:text-slate-600 transition-colors"
                      >
                        Privacy Policy
                      </a>
                      . We never share your data with third parties.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
