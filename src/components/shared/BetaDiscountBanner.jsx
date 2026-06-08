import React from "react";

export default function BetaDiscountBanner() {
  return (
    <section className="bg-emerald-500 text-white">
      <div className="container mx-auto px-6 py-3 text-center">
        <p className="text-sm md:text-base font-semibold">
          Founders promo: Use code{" "}
          <span className="text-white font-bold">FOUNDER50</span> for lifetime 50% off. Limited to the first 100 users.
        </p>
      </div>
    </section>
  );
}
