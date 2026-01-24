import React from "react";

export default function BetaDiscountBanner() {
  return (
    <section className="bg-emerald-500 text-white">
      <div className="container mx-auto px-6 py-3 text-center">
        <p className="text-sm md:text-base font-semibold">
          Save 50% on your first year of any plan, use beta promo code{" "}
          <span className="text-white font-bold">GI-BETA50</span> at checkout.
        </p>
      </div>
    </section>
  );
}
