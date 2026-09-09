import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const [loadingBtn, setLoadingBtn] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs = useRef({});
  const navigate = useNavigate();

  const plan = PLANS[activePlanKey];

  const updateTabIndicator = (key) => {
    const targetTab = tabRefs.current[key];
    if (targetTab) {
      setIndicatorStyle({
        width: `${targetTab.offsetWidth}px`,
        transform: `translateX(${targetTab.offsetLeft - 6}px)`
      });
    }
  };

  useEffect(() => {
    updateTabIndicator(activePlanKey);
  }, [activePlanKey]);

  useEffect(() => {
    const handleResize = () => updateTabIndicator(activePlanKey);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activePlanKey]);

  const handlePayClick = (cycleKey, e) => {
    if (loadingBtn) return;

    // Create ripple effect
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'absolute w-2 h-2 rounded-full bg-white/50 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-ping';
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    btn.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);

    setLoadingBtn(cycleKey);

    setTimeout(() => {
      setLoadingBtn(null);
      navigate('/payment');
    }, 1200);
  };

  return (
    <div id="services" className="bg-slate-50 py-16 md:py-24 text-slate-900 font-sans relative z-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-teal-600 bg-teal-50 border border-teal-200 px-3.5 py-1.5 rounded-full mb-5">
            <svg className="w-3.5 h-3.5 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2 3 6v6c0 5 3.8 9.4 9 10 5.2-.6 9-5 9-10V6l-9-4Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            SEBI Registered Research Analyst · INH000027812
          </span>
          <h2 className="font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight leading-tight mb-3">
            Research plans built for <span className="text-teal-600">how you trade</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Equity, index and stock F&amp;O research with full entry, target and stop-loss parameters — choose the cadence and depth that matches your trading style.
          </p>
        </div>

        {/* Plan Switcher */}
        <div className="flex justify-center mb-4" data-aos="fade-up" data-aos-delay="100">
          <div className="relative inline-flex bg-slate-900 p-1.5 rounded-full gap-1" role="tablist" aria-label="Choose a plan">
            <div 
              className="absolute top-1.5 left-1.5 h-[calc(100%-12px)] rounded-full bg-gradient-to-r from-teal-400 to-teal-500 transition-all duration-350 ease-out z-0 shadow-sm"
              style={indicatorStyle}
            />
            {Object.keys(PLANS).map((key) => {
              const isActive = activePlanKey === key;
              return (
                <button
                  key={key}
                  ref={(el) => (tabRefs.current[key] = el)}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActivePlanKey(key)}
                  className={`relative z-10 font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive ? 'text-slate-950 font-bold' : 'text-slate-300 hover:text-white opacity-70 hover:opacity-100'
                  }`}
                >
                  {PLANS[key].label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Plan Meta */}
        <div className="text-center mb-10">
          <h3 className="font-extrabold text-2xl text-slate-950 mb-2">
            {plan.title}
          </h3>
          <p className="text-sm text-slate-500 max-w-lg mx-auto">
            {plan.desc}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch mb-14">
          {['monthly', 'quarterly', 'annual'].map((cycleKey) => {
            const c = plan.cycles[cycleKey];
            const isFeatured = c.popular;
            const isLoading = loadingBtn === cycleKey;

            // Calculate discount percentage
            let savePct = 0;
            if (c.monthsEquivalent) {
              const fullPrice = plan.cycles.monthly.price * c.monthsEquivalent;
              savePct = Math.round((1 - c.price / fullPrice) * 100);
            }

            return (
              <div
                key={cycleKey}
                className={`bg-white rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative border ${
                  isFeatured
                    ? 'border-teal-400 shadow-xl shadow-teal-500/10 scale-105 z-10 md:-translate-y-1'
                    : 'border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1'
                }`}
              >
                {/* Popular Badge */}
                {c.popular && (
                  <span className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-slate-950 text-teal-400 text-[11px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                    Most Subscribed
                  </span>
                )}

                <div>
                  {/* Cycle Header */}
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    {c.cycleLabel}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
                      {fmtINR(c.price)}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {c.period}
                    </span>
                  </div>

                  {/* Save pill */}
                  <div className="h-7 mb-4">
                    {savePct > 0 ? (
                      <span className="inline-block text-[11.5px] font-bold text-teal-600 bg-teal-50 px-2.5 py-0.5 rounded-md">
                        Save {savePct}% vs monthly
                      </span>
                    ) : null}
                  </div>

                  {/* Inherit info */}
                  {c.inherits ? (
                    <div className="flex items-center gap-2 text-xs font-semibold text-blue-900 bg-slate-50 border border-dashed border-slate-200 p-2.5 rounded-lg mb-4">
                      <svg className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="19" x2="12" y2="5" />
                        <polyline points="5 12 12 5 19 12" />
                      </svg>
                      <span>Everything in {c.inherits}, plus:</span>
                    </div>
                  ) : (
                    <div className="border-b border-slate-200 mb-4" />
                  )}

                  {/* Features List */}
                  <ul className="space-y-3 mb-6 text-xs text-slate-600">
                    {c.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 leading-snug">
                        <svg className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span dangerouslySetInnerHTML={{ __html: feature }} />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pay Now Button */}
                <button
                  type="button"
                  onClick={(e) => handlePayClick(cycleKey, e)}
                  disabled={isLoading}
                  className={`relative overflow-hidden w-full font-semibold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-md ${
                    isFeatured
                      ? 'bg-gradient-to-r from-teal-400 to-teal-500 hover:brightness-105 text-slate-950 font-bold'
                      : 'bg-slate-950 hover:bg-slate-800 text-white'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      <span>Redirecting to payment…</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="5" width="20" height="14" rx="2.5" />
                        <line x1="2" y1="10" x2="22" y2="10" />
                        <line x1="6" y1="15" x2="10" y2="15" />
                      </svg>
                      <span>Pay Now</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Compliance Section */}
        <div className="pt-7 border-t border-slate-200 text-[11.5px] text-slate-500 leading-relaxed space-y-2 max-w-4xl mx-auto">
          <p>
            <strong className="text-slate-700">Disclaimer:</strong> Registration granted by SEBI and certification from NISM do not guarantee the performance of the intermediary or provide any assurance of returns to investors. Investment in securities markets is subject to market risk; please read all related documents carefully before investing. Past performance of recommendations is not indicative of future returns. SigmaOne Capital does not guarantee any returns and is not liable for any losses arising from the use of this research.
          </p>
          <p>
            <strong className="text-slate-700">SEBI Reg. No.:</strong> INH000027812 · Clients are requested to review the SEBI-mandated Do's and Don'ts for dealing with Research Analysts before subscribing. For grievances, use SEBI SCORES at scores.gov.in.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Services;
