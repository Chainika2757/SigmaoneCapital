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
                <section className="relative bg-gray-50 py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
                    <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-widest mb-6">
                            SEBI Registered Research Analyst · INH000027812
                        </span>
                        
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 uppercase tracking-tight leading-tight mb-6">
                            Research built like<br />
                            a <em className="italic text-blue-800">system</em>, not a hunch.
                        </h1>
                        <div className="w-24 border-b-4 border-blue-900 rounded-full mx-auto mb-8"></div>

                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                            Anyone can send a buy call. What sets a research desk apart is what happens before it — the structure, the risk model, and the reasoning you're allowed to see.
                        </p>
                    </div>
                </section>

                {/* Diff Bento Grid Section */}
                <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-200">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <span className="text-xs font-bold text-blue-900 uppercase tracking-widest block mb-2">Key Differentiators</span>
                        <h3 className="text-3xl font-extrabold text-blue-900 uppercase tracking-wider mb-3">What sets the desk apart</h3>
                        <div className="w-20 border-b-2 border-blue-900 rounded-full mx-auto mb-4"></div>
                        <p className="text-gray-600 text-sm max-w-md mx-auto">
                            Six things members point to when they're asked why they stayed with SigmaOne.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-6 gap-6">
                        {bentoCards.map((card, idx) => (
                            <div key={idx} 
                                 className={`${card.wide ? 'md:col-span-4' : 'md:col-span-2'} 
                                            ${card.accent ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200'} 
                                            p-8 rounded-3xl border shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between`}
                                 data-aos="fade-up" 
                                 data-aos-delay={idx * 60}>
                                <div>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-4">{card.tag}</span>
                                    <h4 className="text-xl font-extrabold text-blue-900 mb-3">{card.title}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4-Step Process Section */}
                <section className="py-20 bg-gray-50 border-b border-gray-200">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-14 text-center" data-aos="fade-up">
                            <span className="text-xs font-bold text-blue-900 uppercase tracking-widest block mb-2">Execution Flow</span>
                            <h3 className="text-3xl font-extrabold text-blue-900 uppercase tracking-wider mb-3">How a call actually gets made</h3>
                            <div className="w-20 border-b-2 border-blue-900 rounded-full mx-auto mb-4"></div>
                            <p className="text-gray-600 text-base max-w-xl mx-auto">
                                The same four-step process runs behind every recommendation, across every timeframe.
                            </p>
                        </div>

                        <div className="divide-y divide-gray-200 border-t border-b border-gray-200 bg-white rounded-3xl shadow-md overflow-hidden">
                            {processSteps.map((step, idx) => (
                                <div key={idx} className="py-8 px-8 grid md:grid-cols-12 gap-6 items-start hover:bg-blue-50/50 transition duration-200" data-aos="fade-up" data-aos-delay={idx * 80}>
                                    <div className="md:col-span-2 font-mono text-blue-900 font-extrabold text-lg">
                                        {step.num}
                                    </div>
                                    <div className="md:col-span-4 text-xl font-extrabold text-gray-900">
                                        {step.title}
                                    </div>
                                    <div className="md:col-span-6 text-gray-600 text-sm leading-relaxed">
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
                        <span className="text-xs font-bold text-blue-900 uppercase tracking-widest block mb-2">Comparison</span>
                        <h3 className="text-3xl font-extrabold text-blue-900 uppercase tracking-wider mb-3">Signals vs. a system</h3>
                        <div className="w-20 border-b-2 border-blue-900 rounded-full mx-auto"></div>
                    </div>

                    <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-md bg-white" data-aos="fade-up">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-gray-100 text-xs text-gray-500 uppercase tracking-wider border-b border-gray-200 font-bold">
                                <tr>
                                    <th className="py-5 px-6">What you get</th>
                                    <th className="py-5 px-6 bg-blue-900 text-white font-extrabold">SigmaOne Capital</th>
                                    <th className="py-5 px-6">Typical tip service</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {comparisonRows.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50">
                                        <td className="py-4 px-6 text-gray-600 font-medium">{row.feature}</td>
                                        <td className="py-4 px-6 bg-blue-50 font-bold text-blue-900 border-x border-blue-100">{row.sigma}</td>
                                        <td className="py-4 px-6 text-gray-400">{row.others}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-blue-900 text-white text-center">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6" data-aos="zoom-in">
                        <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
                            See the process behind the next call, not just the call.
                        </h3>
                        <div>
                            <Link to="/services" className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-gray-100 font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg transition duration-300 transform hover:scale-105">
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
