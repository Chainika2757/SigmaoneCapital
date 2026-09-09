import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentButton from './PaymentButton';

const PLANS = {
  start: {
    label: "Sigma Start",
    title: "Starter Research Plan",
    desc: "For investors building research literacy and a first set of well-reasoned ideas.",
    cycles: {
      monthly: {
        cycleLabel: "Monthly",
        price: 7000,
        period: "/month",
        features: [
          "10–15 equity research ideas every month, with entry, target & stop-loss levels",
          "3–4 Nifty & Bank Nifty index option trades every week",
          "Weekly Nifty & Bank Nifty F&O outlook note",
          "Weekly market insights & macro updates",
          "Email support for query resolution",
          "Downloadable PDF reports with full rationale & SEBI disclosures",
          "Trade-idea tracking access on your dashboard"
        ]
      },
      quarterly: {
        cycleLabel: "Quarterly",
        price: 16800,
        period: "/quarter",
        monthsEquivalent: 3,
        popular: true,
        inherits: "Monthly",
        features: [
          "4–5 index option trades every week (Nifty & Bank Nifty)",
          "WhatsApp + Email support",
          "Dedicated query response within 24–48 hrs",
          "Live monthly group webinar on market & F&O outlook",
          "Quarterly market structure review note",
          "Beginner's toolkit: reading research reports & managing F&O risk"
        ]
      },
      annual: {
        cycleLabel: "Annual",
        price: 63000,
        period: "/year",
        monthsEquivalent: 12,
        inherits: "Quarterly",
        features: [
          "5–6 index option trades every week, across Nifty & Bank Nifty",
          "Premium stock & sector insights",
          "Priority support with faster response times",
          "One 45-min 1-on-1 report walkthrough call",
          "Annual performance & call-accuracy report",
          "Discounted upgrade path to Sigma Edge at renewal"
        ]
      }
    }
  },
  edge: {
    label: "Sigma Edge",
    title: "Advanced Research Plan",
    desc: "For active swing and positional traders who want sector depth and technical detail.",
    cycles: {
      monthly: {
        cycleLabel: "Monthly",
        price: 10000,
        period: "/month",
        features: [
          "15–20 high-conviction equity ideas every month, with full trade parameters",
          "5–6 Nifty & Bank Nifty index option trades every week",
          "Weekly Option Chain snapshot: PCR, Max Pain, OI concentration zones",
          "Technical chart pack (RSI, MACD, Fibonacci) with every idea",
          "Weekly macro & sector updates",
          "Priority WhatsApp + Email support"
        ]
      },
      quarterly: {
        cycleLabel: "Quarterly",
        price: 25000,
        period: "/quarter",
        monthsEquivalent: 3,
        popular: true,
        inherits: "Monthly",
        features: [
          "Weekly Nifty & Sensex expiry-day trade ideas",
          "3–4 SMC/ICT-based swing setups every week",
          "Detailed sector research reports",
          "Live quarterly strategy & F&O webinar",
          "Full recorded webinar archive access",
          "Monthly research accuracy snapshot"
        ]
      },
      annual: {
        cycleLabel: "Annual",
        price: 96000,
        period: "/year",
        monthsEquivalent: 12,
        inherits: "Quarterly",
        features: [
          "6–8 index option trades every week across Nifty, Bank Nifty & Sensex",
          "Direct analyst access on WhatsApp for report clarifications",
          "Comprehensive annual market & derivatives outlook report",
          "4 scheduled 1-on-1 report walkthrough calls a year",
          "24-hour early access to new ideas ahead of other tiers",
          "One complimentary seat at a Sigma trading-education workshop"
        ]
      }
    }
  },
  elite: {
    label: "Sigma Elite",
    title: "Elite Research Plan",
    desc: "For serious F&O and high-frequency traders who want daily-level depth.",
    cycles: {
      monthly: {
        cycleLabel: "Monthly",
        price: 12500,
        period: "/month",
        features: [
          "20–25 premium equity ideas every month, with full trade parameters",
          "Daily pre-market note: key levels, gap analysis, top 3 setups",
          "2–3 index F&O trades every day — intraday & positional",
          "Stock F&O recommendations on high-volume contracts",
          "Weekly Options Greeks + IV vs HV valuation note",
          "Priority 1-on-1 WhatsApp + Email support"
        ]
      },
      quarterly: {
        cycleLabel: "Quarterly",
        price: 35000,
        period: "/quarter",
        monthsEquivalent: 3,
        popular: true,
        inherits: "Monthly",
        features: [
          "Weekly Nifty, Bank Nifty & Sensex expiry-day trade ideas",
          "Quarterly Gamma Explosion Score / volatility risk note",
          "Exclusive in-depth sector research reports",
          "Monthly live strategy webinar, Elite-only cohort",
          "Searchable archive of all past Elite reports",
          "Priority alerts on index & sector developments"
        ]
      },
      annual: {
        cycleLabel: "Annual",
        price: 150000,
        period: "/year",
        monthsEquivalent: 12,
        inherits: "Quarterly",
        features: [
          "Daily index F&O trades across Nifty, Bank Nifty, Fin Nifty & Sensex",
          "Dedicated analyst point-of-contact",
          "Annual research playbook across market phases",
          "12 scheduled 1-on-1 report walkthrough calls — one a month",
          "Priority seat in live sessions during high-impact events (Budget, RBI policy, results season)",
          "One annual in-person/video stock & sector research review",
          "Audited annual performance & accuracy report"
        ]
      }
    }
  }
};

function fmtINR(n) {
  return '₹' + n.toLocaleString('en-IN');
}

const Services = () => {
  const [activePlanKey, setActivePlanKey] = useState('start');
  const navigate = useNavigate();

  const plan = PLANS[activePlanKey];

  return (
    <div id="services" className="bg-gray-50 py-16 md:py-24 relative z-0 font-sans">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading Section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-xs font-bold font-mono tracking-widest text-blue-900 uppercase bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full inline-block mb-3">
            SEBI Registered Research Analyst · INH000027812
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 uppercase tracking-wider mb-4">
            Our Research Packages
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 border-b-4 border-blue-900 rounded-full"></div>
          </div>
          <p className="text-lg md:text-xl font-medium text-gray-600 max-w-3xl mx-auto">
            Equity, index and stock F&amp;O research with full entry, target and stop-loss parameters — choose the cadence and depth that matches your trading style.
          </p>
        </div>

        {/* ---------- Tab Buttons ---------- */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="100">
          {Object.keys(PLANS).map((key) => {
            const isActive = activePlanKey === key;
            return (
              <button
                key={key}
                onClick={() => setActivePlanKey(key)}
                className={`px-8 py-3 text-lg font-bold rounded-full transition-all duration-300 shadow-md ${
                  isActive
                    ? "bg-blue-900 text-white shadow-blue-900/40 transform scale-105"
                    : "bg-white text-blue-900 hover:bg-gray-100 hover:shadow-lg border border-gray-200"
                }`}
              >
                {PLANS[key].label}
              </button>
            );
          })}
        </div>

        {/* ---------- Dynamic Plan Content ---------- */}
        <div className="animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold text-gray-800 tracking-tight">
              {plan.title}
            </h3>
            <p className="text-base text-gray-600 max-w-2xl mx-auto font-medium mt-2">
              {plan.desc}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {['monthly', 'quarterly', 'annual'].map((cycleKey) => {
              const c = plan.cycles[cycleKey];

              // Calculate discount percentage vs monthly
              let savePct = 0;
              if (c.monthsEquivalent) {
                const fullPrice = plan.cycles.monthly.price * c.monthsEquivalent;
                savePct = Math.round((1 - c.price / fullPrice) * 100);
              }

              return (
                <div
                  key={cycleKey}
                  className={`bg-white border rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                    c.popular
                      ? "border-blue-950 shadow-xl ring-2 ring-blue-900 ring-offset-2 scale-105 z-10 md:-translate-y-2"
                      : "border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1"
                  }`}
                >
                  {/* Popular Badge */}
                  {c.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-md">
                        Most Subscribed
                      </span>
                    </div>
                  )}

                  {/* Card Top Section: Title & Price */}
                  <div>
                    <div className="text-center mb-6">
                      <p className="font-extrabold text-lg text-gray-500 uppercase tracking-widest mb-2">
                        {c.cycleLabel}
                      </p>
                      <div className="text-4xl font-black text-blue-900 flex items-baseline justify-center">
                        {fmtINR(c.price)}
                        <span className="text-sm font-semibold text-gray-500 ml-1">
                          {c.period}
                        </span>
                      </div>

                      {/* Save Pill */}
                      <div className="h-7 mt-3">
                        {savePct > 0 ? (
                          <span className="inline-block text-xs font-extrabold text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full">
                            Save {savePct}% vs monthly
                          </span>
                        ) : null}
                      </div>

                      <div className="w-12 border-b-2 border-gray-100 mx-auto mt-3"></div>
                    </div>

                    {/* Inherits Info Box */}
                    {c.inherits ? (
                      <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-blue-900 bg-blue-50 border border-dashed border-blue-200 px-3 py-2 rounded-xl mb-6">
                        <svg className="w-4 h-4 text-blue-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        <span>Everything in {c.inherits}, plus:</span>
                      </div>
                    ) : (
                      <div className="mb-2"></div>
                    )}

                    {/* Features List */}
                    <ul className="space-y-4 mb-8 text-sm text-left">
                      {c.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-medium text-gray-700 leading-snug" dangerouslySetInnerHTML={{ __html: feature }} />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Signature Payment Button */}
                  <div className="mt-auto pt-4">
                    <PaymentButton onClick={() => navigate('/payment')} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compliance Box */}
        <div className="mt-16 p-6 bg-white border border-gray-200 rounded-2xl text-xs text-gray-600 space-y-2 text-justify shadow-sm max-w-6xl mx-auto">
          <p>
            <strong className="text-gray-900">Disclaimer:</strong> Registration granted by SEBI and certification from NISM do not guarantee the performance of the intermediary or provide any assurance of returns to investors. Investment in securities markets is subject to market risk; please read all related documents carefully before investing. Past performance of recommendations is not indicative of future returns. SigmaOne Capital does not guarantee any returns and is not liable for any losses arising from the use of this research.
          </p>
          <p>
            <strong className="text-gray-900">SEBI Reg. No.:</strong> INH000027812 · Clients are requested to review the SEBI-mandated Do's and Don'ts for dealing with Research Analysts before subscribing. For grievances, use SEBI SCORES at scores.gov.in.
          </p>
        </div>

      </section>
    </div>
  );
};

export default Services;
