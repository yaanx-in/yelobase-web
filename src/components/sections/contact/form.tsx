"use client";

import { useState, useCallback, type ChangeEvent, type FormEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Send, Check, AlertCircle } from "@/components/ui/icon";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const SERVICE_OPTIONS = [
  "Zoho Implementation and Customization",
  "GoZen Marketing Automation",
  "DeepAgent Custom AI Agent Development",
  "Data Migration to and from Zoho",
  "N8N Workflow Development",
  "Consultation and Strategy",
  "Custom Integrations",
] as const;

type ServiceOption = (typeof SERVICE_OPTIONS)[number];

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  service: ServiceOption | "";
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.firstName.trim()) errors.firstName = "First name is required.";
  if (!values.lastName.trim()) errors.lastName = "Last name is required.";
  if (!values.email.trim()) {
    errors.email = "Work email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.company.trim()) errors.company = "Company name is required.";
  if (!values.service) errors.service = "Please select a service.";
  if (!values.message.trim()) errors.message = "Tell us about your project.";
  return errors;
}

function buildMailto(values: FormValues): string {
  const subject = encodeURIComponent(
    `[Yelobase Inquiry] ${values.service || "General"} — ${values.firstName} ${values.lastName}`
  );
  const lines = [
    `Name: ${values.firstName} ${values.lastName}`,
    `Email: ${values.email}`,
    `Company: ${values.company}`,
    values.phone ? `Phone: ${values.phone}` : null,
    `Service: ${values.service}`,
    ``,
    `Message:`,
    values.message,
  ]
    .filter((l) => l !== null)
    .join("\n");
  const body = encodeURIComponent(lines);
  return `mailto:hello@yelobase.com?subject=${subject}&body=${body}`;
}

// Shared input ring class
const ringClass =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2";

// Field wrapper with animated error
function FieldError({ message }: { message?: string }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.p
          role="alert"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          className="mt-1.5 flex items-center gap-1.5 text-xs text-brand-coral-strong"
        >
          <AlertCircle className="size-3.5 shrink-0" />
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

type InputProps = {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  autoComplete?: string;
};

function FormInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  required,
  autoComplete,
}: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-[var(--color-text-primary)]"
      >
        {label}
        {!required && (
          <span className="ml-1.5 text-[var(--color-text-muted)] font-normal">(optional)</span>
        )}
      </label>
      <motion.div
        animate={
          focused
            ? { scale: 1.005 }
            : { scale: 1 }
        }
        transition={{ duration: 0.15, ease: EASE_OUT }}
        className="mt-1.5"
      >
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          autoComplete={autoComplete}
          aria-required={required}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          className={`w-full rounded-xl border px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] transition-[border-color,box-shadow] duration-[var(--duration-micro)] ${ringClass} ${
            error
              ? "border-brand-coral/60 bg-tint-pink/30"
              : "border-[var(--color-border)] bg-[var(--color-background)] hover:border-[var(--color-border-subtle)]"
          }`}
          placeholder=""
        />
      </motion.div>
      <div id={`${id}-error`}>
        <FieldError message={error} />
      </div>
    </div>
  );
}

function FormSelect({
  id,
  label,
  value,
  onChange,
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="sm:col-span-2">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-[var(--color-text-primary)]"
      >
        {label}
      </label>
      <motion.div
        animate={focused ? { scale: 1.005 } : { scale: 1 }}
        transition={{ duration: 0.15, ease: EASE_OUT }}
        className="relative mt-1.5"
      >
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-required
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          className={`w-full appearance-none rounded-xl border px-4 py-3 pr-10 text-sm transition-[border-color,box-shadow] duration-[var(--duration-micro)] ${ringClass} ${
            value
              ? "text-[var(--color-text-primary)]"
              : "text-[var(--color-text-muted)]"
          } ${
            error
              ? "border-brand-coral/60 bg-tint-pink/30"
              : "border-[var(--color-border)] bg-[var(--color-background)]"
          }`}
        >
          <option value="" disabled>
            Select a service…
          </option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {/* Chevron icon */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </motion.div>
      <div id={`${id}-error`}>
        <FieldError message={error} />
      </div>
    </div>
  );
}

function FormTextarea({
  id,
  label,
  value,
  onChange,
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="sm:col-span-2">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-[var(--color-text-primary)]"
      >
        {label}
      </label>
      <motion.div
        animate={focused ? { scale: 1.005 } : { scale: 1 }}
        transition={{ duration: 0.15, ease: EASE_OUT }}
        className="mt-1.5"
      >
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={5}
          aria-required
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          className={`w-full resize-y rounded-xl border px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] transition-[border-color,box-shadow] duration-[var(--duration-micro)] ${ringClass} ${
            error
              ? "border-brand-coral/60 bg-tint-pink/30"
              : "border-[var(--color-border)] bg-[var(--color-background)]"
          }`}
          placeholder="What are you building, struggling with, or hoping to automate?"
        />
      </motion.div>
      <div id={`${id}-error`}>
        <FieldError message={error} />
      </div>
    </div>
  );
}

function SuccessState() {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.45, ease: EASE_OUT }}
      className="flex flex-col items-center py-16 text-center"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
        className="inline-flex size-16 items-center justify-center rounded-full bg-tint-mint"
      >
        <Check className="size-8 text-brand-teal" />
      </motion.span>
      <h3 className="mt-6 text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
        Thanks — your message is on its way.
      </h3>
      <p className="mt-3 max-w-sm text-[var(--color-text-secondary)] leading-relaxed">
        We&rsquo;ll reply within 24 hours. Keep an eye on your inbox at{" "}
        <span className="font-medium text-[var(--color-text-primary)]">hello@yelobase.com</span>.
      </p>
    </motion.div>
  );
}

// The message form itself (state + validation + fields + success), with no
// outer card or heading — so it can be dropped into any layout (the centered
// ContactForm below, or the two-column AboutContact).
export function MessageForm() {
  const [values, setValues] = useState<FormValues>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback(
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormValues]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstKey = Object.keys(errs)[0];
      document.getElementById(firstKey)?.focus();
      return;
    }
    window.location.href = buildMailto(values);
    setSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <SuccessState key="success" />
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: EASE_OUT }}
          className="grid gap-5 sm:grid-cols-2"
        >
          <FormInput
            id="firstName"
            label="First Name"
            value={values.firstName}
            onChange={handleChange}
            error={errors.firstName}
            required
            autoComplete="given-name"
          />
          <FormInput
            id="lastName"
            label="Last Name"
            value={values.lastName}
            onChange={handleChange}
            error={errors.lastName}
            required
            autoComplete="family-name"
          />
          <FormInput
            id="email"
            label="Work Email"
            type="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            required
            autoComplete="work email"
          />
          <FormInput
            id="company"
            label="Company"
            value={values.company}
            onChange={handleChange}
            error={errors.company}
            required
            autoComplete="organization"
          />
          <FormInput
            id="phone"
            label="Phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            error={errors.phone}
            autoComplete="tel"
          />
          <div className="hidden sm:block" aria-hidden />
          <FormSelect
            id="service"
            label="What can we help with?"
            value={values.service}
            onChange={handleChange}
            error={errors.service}
          />
          <FormTextarea
            id="message"
            label="Tell us about your project"
            value={values.message}
            onChange={handleChange}
            error={errors.message}
          />

          <div className="sm:col-span-2">
            <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
              <Send className="size-4" />
              Send Message
            </Button>
            <p className="mt-4 text-xs text-[var(--color-text-muted)] leading-relaxed">
              No spam. No cold pitches. Just a real reply from our team.
            </p>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

export function ContactForm() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact-form"
      className="bg-[var(--color-background-warm)] py-[var(--section-padding-y)]"
    >
      <Container>
        <div className="mx-auto max-w-2xl">
          {/* Heading */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
            className="text-center"
          >
            <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Send us a message
            </h2>
            <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
              We&rsquo;ll get back to you within 24 hours.
            </p>
          </motion.div>

          {/* Card shell */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 0.45, delay: 0.1, ease: EASE_OUT }}
            className="mt-10 rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background)] px-7 py-8 shadow-sm sm:px-10 sm:py-10"
          >
            <MessageForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
