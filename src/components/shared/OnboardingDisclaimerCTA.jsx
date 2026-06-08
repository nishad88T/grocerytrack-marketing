import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { CheckCircle2, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { lockBodyScroll, unlockBodyScroll } from "@/utils/bodyScrollLock";

const WAITLIST_EMAIL = "support@groceryintel.com";
const WAITLIST_SUBJECT = "Join the GroceryIntel waitlist";
const WAITLIST_MAILTO = `mailto:${WAITLIST_EMAIL}?subject=${encodeURIComponent(
  WAITLIST_SUBJECT
)}`;

const waitlistPoints = [
  "The GroceryIntel app is coming soon while we prepare the next release.",
  "Join the waitlist and we’ll let you know when early access opens.",
  "We’ll keep updates focused on product availability, onboarding, and launch news.",
];

function OnboardingDisclaimerCTA({
  label = "Join the waitlist",
  waitlistUrl = WAITLIST_MAILTO,
  className = "",
  size = "lg",
  variant,
  block = false,
  onTrigger,
}) {
  const [open, setOpen] = useState(false);

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

  const handleJoinWaitlist = () => {
    if (waitlistUrl) {
      window.location.href = waitlistUrl;
    }
    setOpen(false);
  };

  const handleClose = () => setOpen(false);

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
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 sm:h-11 sm:w-11">
            <Sparkles className="h-5 w-5 text-emerald-600 sm:h-6 sm:w-6" />
          </div>
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
              GroceryIntel is coming soon
            </h2>
            <p className="text-sm text-slate-600">
              We’re getting the app ready and would love to keep you updated.
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 text-left">
          {waitlistPoints.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <span className="shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center text-emerald-600">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <span className="flex-1 text-left leading-relaxed">{point}</span>
            </div>
          ))}
          <p className="rounded-lg bg-emerald-50 px-3 py-3 text-sm font-medium text-emerald-900">
            Click “Join the waitlist” to send us a quick email. We’ll add you to
            the launch list and reply when the next access window is available.
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:justify-end">
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            onClick={handleClose}
            type="button"
          >
            Not now
          </Button>
          <Button
            className="w-full sm:w-auto bg-emerald-600 text-white hover:bg-emerald-700"
            onClick={handleJoinWaitlist}
            type="button"
          >
            <Mail className="mr-2 h-4 w-4" />
            Join the waitlist
          </Button>
        </div>
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
