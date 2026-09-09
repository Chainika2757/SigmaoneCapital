import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const MissionVision = () => {
    useDocTitle("Our Mission & Vision | SigmaOne Capital");

    const principles = [
        {
            tag: "Process",
            title: "Process over prediction",
            desc: "We don't forecast certainty. We define structure, triggers and invalidation levels — and let the market do the talking."
        },
        {
            tag: "Risk",
            title: "Risk framed first",
            desc: "Position sizing and stop-loss logic are set before entry logic — never bolted on as an afterthought."
        },
        {
            tag: "Transparency",
            title: "Shown, not hidden",
            desc: "Every call carries its rationale — structural levels, volatility read, and the 'why' — so you learn the process, not just the outcome."
        },
        {
            tag: "Standards",
            title: "Regulated by design",
            desc: "Operating as a SEBI Registered Research Analyst means our research is bound by disclosure and conduct standards, not just conviction."
        }
    ];

    return (
        <>
            <NavBar />
            
            <div className="bg-white min-h-screen pt-20 text-gray-900 font-sans">
                
                {/* Hero Section */}
                <section className="relative bg-slate-50 py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-gray-200">
                    {/* Background Graphic Lines */}
                    <div className="absolute inset-0 opacity-30 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 1200 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M -20 340 L 130 380 L 250 300 L 370 340 L 480 200 L 610 250 L 730 130 L 850 190 L 970 80 L 1100 140 L 1240 60" 
                                  stroke="#1b3b8c" strokeWidth="1.5" fill="none" strokeDasharray="6 6" />
                            <circle cx="480" cy="200" r="5" fill="#2f57d4" />
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
                            We built the discipline<br />
                            the market never <em className="italic font-serif text-blue-700">hands you</em>.
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed mb-10">
                            SigmaOne Capital exists to replace guesswork with process — turning Indian equity, F&amp;O and commodity research into a repeatable system, not a string of tips.
                        </p>

                        <div className="flex flex-wrap gap-8 pt-6 border-t border-slate-200 text-xs font-mono uppercase tracking-wider text-slate-500">
                            <div>
                                Regulatory Status
                                <strong className="block font-sans text-sm text-blue-950 font-bold normal-case tracking-normal mt-1">SEBI Registered Research Analyst</strong>
                            </div>
                            <div>
                                Coverage
                                <strong className="block font-sans text-sm text-blue-950 font-bold normal-case tracking-normal mt-1">Equity · F&amp;O · Commodity</strong>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision Statements */}
                <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    {/* Mission */}
                    <div className="grid md:grid-cols-12 gap-8 items-start pt-8 border-t border-gray-200" data-aos="fade-up">
                        <div className="md:col-span-4 space-y-1">
                            <span className="font-mono text-xs font-bold text-blue-700 uppercase tracking-widest block">01 — MISSION</span>
                            <span className="text-xs text-gray-500 block">What we do, every session</span>
                        </div>
                        <div className="md:col-span-8 space-y-4">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-950 leading-snug">
                                To give Indian retail traders a research process disciplined enough to survive contact with the market — not just a signal to follow blindly.
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-base">
                                Most retail traders lose money not from a lack of ideas, but from a lack of structure: no defined entry logic, no risk framework, no review loop. Our mission is to close that gap. Every recommendation that leaves the SigmaOne desk is built on a defined methodology — market structure, options Greeks, and volatility context — with the reasoning shown, not hidden, and risk parameters attached before the trade, not after.
                            </p>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="grid md:grid-cols-12 gap-8 items-start pt-12 border-t border-gray-200" data-aos="fade-up">
                        <div className="md:col-span-4 space-y-1">
                            <span className="font-mono text-xs font-bold text-blue-700 uppercase tracking-widest block">02 — VISION</span>
                            <span className="text-xs text-gray-500 block">Where we're taking the desk</span>
                        </div>
                        <div className="md:col-span-8 space-y-4">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-950 leading-snug">
                                To become the research desk Indian traders point to as proof that systematic, transparent analysis can be built for the retail market — not just the institutional one.
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-base">
                                Structured, model-driven research has long lived behind institutional desks. We're building SigmaOne Capital to bring that same rigor — data-backed, risk-first, and explainable — to individual traders across intraday, swing, and positional timeframes, without diluting the discipline it takes to do this properly.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Leadership Section */}
                <section className="py-20 bg-slate-50 border-t border-b border-gray-200">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12" data-aos="fade-up">
                            <span className="font-mono text-xs font-bold text-blue-700 uppercase tracking-widest block mb-2">Leadership</span>
                            <h3 className="text-3xl font-extrabold text-blue-950 mb-3">The Minds Behind SigmaOne Capital</h3>
                            <p className="text-slate-600 text-base max-w-2xl">Two people, one desk — the vision and the execution built to run in the same direction.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Leader 1 */}
                            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300 group" data-aos="fade-up">
                                <div className="w-14 h-14 rounded-full bg-blue-900 text-white font-bold font-serif text-lg flex items-center justify-center mb-6 shadow-inner">
                                    CM
                                </div>
                                <h4 className="text-2xl font-bold text-blue-950 mb-2">Chakrapaani Mishra</h4>
                                <div className="font-mono text-xs text-blue-700 uppercase tracking-wider flex items-center gap-2 mb-6 flex-wrap">
                                    <span>Vision</span>
                                    <span className="text-gray-300">●</span>
                                    <span>Research</span>
                                    <span className="text-gray-300">●</span>
                                    <span>Market Strategy</span>
                                </div>
                                <div className="w-8 h-0.5 bg-blue-600 group-hover:w-16 transition-all duration-300"></div>
                            </div>

                            {/* Leader 2 */}
                            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300 group" data-aos="fade-up" data-aos-delay="100">
                                <div className="w-14 h-14 rounded-full bg-blue-900 text-white font-bold font-serif text-lg flex items-center justify-center mb-6 shadow-inner">
                                    PY
                                </div>
                                <h4 className="text-2xl font-bold text-blue-950 mb-2">Prachi Yadav</h4>
                                <div className="font-mono text-xs text-blue-700 uppercase tracking-wider flex items-center gap-2 mb-6 flex-wrap">
                                    <span>Strategy</span>
                                    <span className="text-gray-300">●</span>
                                    <span>Operations</span>
                                    <span className="text-gray-300">●</span>
                                    <span>Business Growth</span>
                                </div>
                                <div className="w-8 h-0.5 bg-blue-600 group-hover:w-16 transition-all duration-300"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Principles Section */}
                <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12" data-aos="fade-up">
                        <div>
                            <span className="font-mono text-xs font-bold text-blue-700 uppercase tracking-widest block mb-2">Core Commitments</span>
                            <h3 className="text-3xl font-extrabold text-blue-950">What the mission is built on</h3>
                        </div>
                        <p className="text-slate-600 text-sm max-w-md">
                            Four commitments that shape every report, scanner and recommendation we publish.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {principles.map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:bg-slate-50 transition duration-300 flex flex-col justify-between group" data-aos="fade-up" data-aos-delay={idx * 80}>
                                <div>
                                    <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block mb-3">{item.tag}</span>
                                    <h4 className="text-lg font-bold text-blue-950 mb-3">{item.title}</h4>
                                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                                <div className="w-6 h-0.5 bg-blue-600 mt-6 group-hover:w-12 transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-blue-950 text-white text-center">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6" data-aos="zoom-in">
                        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                            Research built on structure. Delivered with discipline.
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

export default MissionVision;
