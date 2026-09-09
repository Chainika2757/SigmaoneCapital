import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const WhyChooseUs = () => {
    useDocTitle("Why Choose Us | SigmaOne Capital");

    const bentoCards = [
        {
            tag: "Methodology",
            title: "Structure-led, not sentiment-led",
            desc: "Every call is built on defined market structure, options Greeks and volatility context — the same logic shown to you, not just the conclusion.",
            wide: true,
            accent: true
        },
        {
            tag: "Compliance",
            title: "SEBI Registered",
            desc: "Reg. No. INH000027812 — bound by disclosure and conduct norms, not just conviction.",
            wide: false
        },
        {
            tag: "Credentials",
            title: "SEBI Registered Analyst",
            desc: "Led by a SEBI Registered Research Analyst with 6+ years in Indian markets.",
            wide: false
        },
        {
            tag: "Coverage",
            title: "Three timeframes, one desk",
            desc: "Intraday, swing and positional research — so you're not stitching together multiple services.",
            wide: false
        },
        {
            tag: "Risk management",
            title: "Every call ships with its own risk model",
            desc: "Entry, stop-loss and position-sizing logic are defined upfront — risk is a design input, not an afterthought bolted on after the trade.",
            wide: true
        }
    ];

    const processSteps = [
        {
            num: "01",
            title: "Screen",
            desc: "Systematic scanners filter the F&O and cash universe for momentum, volatility and structural setups — no manual cherry-picking."
        },
        {
            num: "02",
            title: "Structure",
            desc: "Shortlisted setups are mapped against market structure and unmitigated zones to locate genuine, not reactive, entry levels."
        },
        {
            num: "03",
            title: "Signal",
            desc: "Options Greeks and IV context are layered in before a call is finalised, with defined stop-loss and target levels attached."
        },
        {
            num: "04",
            title: "Review",
            desc: "Every closed call is logged and reviewed — wins and losses both — to keep the process honest and improving."
        }
    ];

    const comparisonRows = [
        {
            feature: "Reasoning behind each call",
            sigma: "Shown — structure, Greeks, IV context",
            others: "Rarely disclosed"
        },
        {
            feature: "Risk framework",
            sigma: "Stop-loss & sizing defined upfront",
            others: "Often missing or informal"
        },
        {
            feature: "Regulatory status",
            sigma: "SEBI Registered Research Analyst",
            others: "Frequently unregistered"
        },
        {
            feature: "Track record",
            sigma: "Logged and reviewed, wins and losses",
            others: "Selectively shared"
        },
        {
            feature: "Timeframe coverage",
            sigma: "Intraday, swing & positional in one desk",
            others: "Usually single-timeframe"
        }
    ];

    return (
        <>
            <NavBar />
            
            <div className="bg-white min-h-screen pt-20 text-gray-900 font-sans">
                
                {/* Hero Section */}
                <section className="relative bg-slate-50 py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-gray-200">
                    {/* Hero Background Animation SVG */}
                    <div className="absolute inset-0 opacity-40 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 1200 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M -20 340 L 130 380 L 250 300 L 370 340 L 480 200 L 610 250 L 730 130 L 850 190 L 970 80 L 1100 140 L 1240 60" 
                                  stroke="#2f57d4" strokeWidth="1.8" fill="none" />
                            <circle cx="480" cy="200" r="5" fill="#2f57d4" className="animate-ping" />
                            <circle cx="850" cy="190" r="5" fill="#2f57d4" />
                            <circle cx="1100" cy="140" r="5" fill="#2f57d4" />
                        </svg>
                    </div>

                    <div className="max-w-5xl mx-auto relative z-10" data-aos="fade-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-bold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                            SEBI Registered Research Analyst · INH000027812
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-950 leading-tight mb-6">
                            Research built like<br />
                            a <em className="italic font-serif text-blue-700">system</em>, not a hunch.
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
                            Anyone can send a buy call. What sets a research desk apart is what happens before it — the structure, the risk model, and the reasoning you're allowed to see.
                        </p>
                    </div>
                </section>

                {/* Diff Bento Grid Section */}
                <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12" data-aos="fade-up">
                        <div>
                            <span className="font-mono text-xs font-bold text-blue-700 uppercase tracking-widest block mb-2">Key Differentiators</span>
                            <h3 className="text-3xl font-extrabold text-blue-950">What sets the desk apart</h3>
                        </div>
                        <p className="text-slate-600 text-sm max-w-md">
                            Six things members point to when they're asked why they stayed with SigmaOne.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-6 gap-4">
                        {bentoCards.map((card, idx) => (
                            <div key={idx} 
                                 className={`${card.wide ? 'md:col-span-4' : 'md:col-span-2'} 
                                            ${card.accent ? 'bg-blue-50/70 border-blue-200' : 'bg-white border-gray-200'} 
                                            p-8 rounded-3xl border hover:shadow-lg hover:-translate-y-0.5 transition duration-300 flex flex-col justify-between`}
                                 data-aos="fade-up" 
                                 data-aos-delay={idx * 60}>
                                <div>
                                    <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4">{card.tag}</span>
                                    <h4 className="text-xl font-bold text-blue-950 mb-3">{card.title}</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4-Step Process Section */}
                <section className="py-20 bg-slate-50 border-b border-gray-200">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-14" data-aos="fade-up">
                            <span className="font-mono text-xs font-bold text-blue-700 uppercase tracking-widest block mb-2">Execution Flow</span>
                            <h3 className="text-3xl font-extrabold text-blue-950 mb-3">How a call actually gets made</h3>
                            <p className="text-slate-600 text-base max-w-xl">
                                The same four-step process runs behind every recommendation, across every timeframe.
                            </p>
                        </div>

                        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
                            {processSteps.map((step, idx) => (
                                <div key={idx} className="py-8 grid md:grid-cols-12 gap-6 items-start hover:bg-white/60 transition duration-200 px-4 rounded-xl" data-aos="fade-up" data-aos-delay={idx * 80}>
                                    <div className="md:col-span-2 font-mono text-blue-600 font-bold text-lg">
                                        {step.num}
                                    </div>
                                    <div className="md:col-span-4 font-serif text-xl font-bold text-blue-950">
                                        {step.title}
                                    </div>
                                    <div className="md:col-span-6 text-slate-600 text-sm leading-relaxed">
                                        {step.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Table Section */}
                <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-200">
                    <div className="text-center mb-14" data-aos="fade-up">
                        <span className="font-mono text-xs font-bold text-blue-700 uppercase tracking-widest block mb-2">Comparison</span>
                        <h3 className="text-3xl font-extrabold text-blue-950">Signals vs. a system</h3>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm" data-aos="fade-up">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-100 font-mono text-xs text-slate-500 uppercase tracking-wider border-b border-gray-200">
                                <tr>
                                    <th className="py-4 px-6">What you get</th>
                                    <th className="py-4 px-6 bg-blue-50 text-blue-800 font-bold border-x border-blue-200">SigmaOne Capital</th>
                                    <th className="py-4 px-6">Typical tip service</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {comparisonRows.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50/50">
                                        <td className="py-4 px-6 text-slate-600 font-medium">{row.feature}</td>
                                        <td className="py-4 px-6 bg-blue-50/60 font-semibold text-blue-900 border-x border-blue-100">{row.sigma}</td>
                                        <td className="py-4 px-6 text-slate-400">{row.others}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-blue-950 text-white text-center">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6" data-aos="zoom-in">
                        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                            See the process behind the next call, not just the call.
                        </h3>
                        <div>
                            <Link to="/services" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold text-sm px-8 py-4 rounded-xl shadow-lg transition duration-300 transform hover:-translate-y-0.5">
                                EXPLORE RESEARCH PLANS →
                            </Link>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default WhyChooseUs;
