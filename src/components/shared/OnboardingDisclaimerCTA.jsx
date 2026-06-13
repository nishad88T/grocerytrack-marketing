import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { CheckCircle2, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { lockBodyScroll, unlockBodyScroll } from "@/utils/bodyScrollLock";

const WAITLIST_EMAIL = "support@groceryintel.com";
const WAITLIST_SUBJECT = "Join the GroceryIntel waitlist";
const WAITLIST_ENDPOINT = import.meta.env.VITE_WAITLIST_ENDPOINT;

const waitlistPoints = [
  "The GroceryIntel app is coming soon while we prepare the next release.",
  "Join the waitlist and we’ll let you know when early access opens.",
  "Early access will include a 14-day full Standard tier trial when it becomes available.",
];

const getWaitlistMailto = (email) => {
  const body = [
    "Hi GroceryIntel,",
    "",
    "Please add me to the GroceryIntel waitlist.",
    `Email: ${email}`,
    "",
    "Thanks",
  ].join("\n");

  return `mailto:${WAITLIST_EMAIL}?subject=${encodeURIComponent(
    WAITLIST_SUBJECT
  )}&body=${encodeURIComponent(body)}`;
};

function OnboardingDisclaimerCTA({
  label = "Join the waitlist",
  className = "",
  size = "lg",
  variant,
  block = false,
  onTrigger,
}) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    lockBodyScroll();
    return () => {
      unlockBodyScroll();
    };
  }, [open]);

  const buttonClasses = useMemo(
    () => cn(block && "w-full", className),
    [block, className]
  );

  const handleTrigger = (event) => {
    event.preventDefault();
    if (onTrigger) {
      onTrigger();
    }
    setOpen(true);
  };

  const handleJoinWaitlist = async (event) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    if (WAITLIST_ENDPOINT) {
      setSubmitting(true);
      try {
        const response = await fetch(WAITLIST_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: trimmedEmail, source: "marketing-site" }),
        });

        if (!response.ok) {
          throw new Error("Waitlist submission failed");
        }

        setSubmitted(true);
        setSubmitting(false);
        return;
      } catch (submissionError) {
        setSubmitting(false);
        setError(
          "We couldn't submit automatically. Please use the email button below so we can add you manually."
        );
      }
    }

    window.location.href = getWaitlistMailto(trimmedEmail);
    setSubmitted(true);
  };

  const handleClose = () => {
    setOpen(false);
    setError("");
  };

  const modal = open ? (
    <div className="fixed inset-0 z-[2000] flex items-start justify-center px-4 py-6 sm:items-center">
      <div
        className="absolute inset-0 bg-slate-900/60"
        aria-hidden="true"
        onClick={handleClose}
      />

      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl sm:p-6"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tangerine-50 sm:h-11 sm:w-11">
            <Sparkles className="h-5 w-5 text-tangerine-600 sm:h-6 sm:w-6" />
          </div>
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
              GroceryIntel is coming soon
            </h2>
            <p className="text-sm text-slate-600">
              Enter your email and we’ll keep you updated as early access opens.
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 text-left">
          {waitlistPoints.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <span className="shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center text-tangerine-600">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <span className="flex-1 text-left leading-relaxed">{point}</span>
            </div>
          ))}
        </div>

        {submitted ? (
          <div className="mt-5 rounded-lg bg-tangerine-50 px-3 py-3 text-sm font-medium text-tangerine-900">
            Thanks — your waitlist request is ready. If your email app opened,
            please send the message so we can add you to the list.
          </div>
        ) : null}

        <form onSubmit={handleJoinWaitlist} className="mt-5 space-y-3">
          <label className="block text-sm font-semibold text-slate-800" htmlFor="waitlist-email">
            Email address
          </label>
          <input
            id="waitlist-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-slate-300 px-3 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-tangerine-500 focus:ring-2 focus:ring-tangerine-100"
            required
          />
          <p className="text-xs text-slate-500">
            We’ll only use this to contact you about GroceryIntel launch and early access updates.
          </p>
          {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button
              variant="outline"
              className="w-full sm:w-auto"
              onClick={handleClose}
              type="button"
            >
              Not now
            </Button>
            <Button
              className="w-full sm:w-auto bg-tangerine-600 text-white hover:bg-tangerine-700"
              type="submit"
              disabled={submitting}
            >
              <Mail className="mr-2 h-4 w-4" />
              {submitting ? "Joining..." : "Join the waitlist"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  ) : null;

  return (
    <>
      <Button
        type="button"
        onClick={handleTrigger}
        className={buttonClasses}
        size={size}
        variant={variant}
      >
        {label}
      </Button>
      {open && typeof document !== "undefined"
        ? createPortal(modal, document.body)
        : null}
    </>
  );
}

export default OnboardingDisclaimerCTA;
