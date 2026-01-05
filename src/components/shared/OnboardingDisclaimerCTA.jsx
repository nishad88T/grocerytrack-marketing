import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { ShieldAlert, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { lockBodyScroll, unlockBodyScroll } from "@/utils/bodyScrollLock";

const STORAGE_KEY = "gi_beta_disclaimer_accepted";
const LEGACY_KEYS = ["giOnboardingAcknowledged"];
const APP_URL = "https://app.groceryintel.com";

const disclaimerPoints = [
  "GroceryIntel is currently in Beta.",
  "Features may change and data may be refined as the product evolves.",
  "Insights are provided for informational purposes only and are designed to help you understand your grocery spending — not to provide financial advice or guarantees.",
];

function OnboardingDisclaimerCTA({
  label = "Get Started →",
  redirectUrl = APP_URL,
  className = "",
  size = "lg",
  variant,
  block = false,
  onTrigger,
}) {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [acknowledged, setAcknowledged] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      let stored = window.localStorage.getItem(STORAGE_KEY) === "true";

      if (!stored) {
        stored = LEGACY_KEYS.some(
          (legacyKey) => window.localStorage.getItem(legacyKey) === "true"
        );
        if (stored) {
          window.localStorage.setItem(STORAGE_KEY, "true");
        }
      }

      setAcknowledged(stored);
      if (stored) setChecked(true);
    } catch (error) {
      // noop – storage is best-effort
    }
  }, []);

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
    if (acknowledged && redirectUrl) {
      window.location.href = redirectUrl;
      return;
    }
    setOpen(true);
  };

  const handleContinue = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch (error) {
      // noop – storage is best-effort
    }
    setAcknowledged(true);
    setOpen(false);
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
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
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 sm:h-11 sm:w-11">
            <ShieldAlert className="h-5 w-5 text-amber-600 sm:h-6 sm:w-6" />
          </div>
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
              Mandatory beta disclaimer
            </h2>
            <p className="text-sm text-slate-600">
              Please review and acknowledge before creating your account.
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 text-left">
          {disclaimerPoints.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <span className="shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center text-emerald-600">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <span className="flex-1 text-left leading-relaxed">{point}</span>
            </div>
          ))}
          <p className="text-sm font-semibold text-slate-800">
            By continuing, you acknowledge that GroceryIntel is an early-stage product and agree to use it as part of this Beta phase.
          </p>
        </div>

        <label className="mt-5 flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-800 sm:mt-6">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 accent-emerald-600"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
          />
          <span>
            I have read and understand the Beta disclaimer and want to continue to create my account.
          </span>
        </label>

        <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:justify-end">
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            onClick={handleClose}
            type="button"
          >
            Go back
          </Button>
          <Button
            className="w-full sm:w-auto bg-emerald-600 text-white hover:bg-emerald-700"
            onClick={handleContinue}
            type="button"
            disabled={!checked}
          >
            Continue to signup
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
