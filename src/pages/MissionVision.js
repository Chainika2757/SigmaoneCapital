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
                <section className="relative bg-gray-50 py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
                    <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-widest mb-6">
                            SEBI Registered Research Analyst · INH000027812
                        </span>
                        
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 uppercase tracking-tight leading-tight mb-6">
                            We built the discipline<br />
                            the market never <em className="italic text-blue-800">hands you</em>.
                        </h1>
                        <div className="w-24 border-b-4 border-blue-900 rounded-full mx-auto mb-8"></div>

                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 font-medium">
                            SigmaOne Capital exists to replace guesswork with process — turning Indian equity, F&amp;O and commodity research into a repeatable system, not a string of tips.
                        </p>

                        <div className="flex flex-wrap justify-center gap-8 pt-6 border-t border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                            <div>
                                Regulatory Status
                                <strong className="block text-sm text-blue-900 font-bold mt-1">SEBI Registered Research Analyst</strong>
                            </div>
                            <div>
                                Coverage
                                <strong className="block text-sm text-blue-900 font-bold mt-1">Equity · F&amp;O · Commodity</strong>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision Statements */}
                <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    {/* Mission */}
                    <div className="grid md:grid-cols-12 gap-8 items-start pt-8 border-t border-gray-200" data-aos="fade-up">
                        <div className="md:col-span-4 space-y-1">
                            <span className="text-xs font-bold text-blue-900 uppercase tracking-widest block">01 — MISSION</span>
                            <span className="text-xs text-gray-500 block">What we do, every session</span>
                        </div>
                        <div className="md:col-span-8 space-y-4">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 leading-snug">
                                To give Indian retail traders a research process disciplined enough to survive contact with the market — not just a signal to follow blindly.
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-base">
                                Most retail traders lose money not from a lack of ideas, but from a lack of structure: no defined entry logic, no risk framework, no review loop. Our mission is to close that gap. Every recommendation that leaves the SigmaOne desk is built on a defined methodology — market structure, options Greeks, and volatility context — with the reasoning shown, not hidden, and risk parameters attached before the trade, not after.
                            </p>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="grid md:grid-cols-12 gap-8 items-start pt-12 border-t border-gray-200" data-aos="fade-up">
                        <div className="md:col-span-4 space-y-1">
                            <span className="text-xs font-bold text-blue-900 uppercase tracking-widest block">02 — VISION</span>
                            <span className="text-xs text-gray-500 block">Where we're taking the desk</span>
                        </div>
                        <div className="md:col-span-8 space-y-4">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 leading-snug">
                                To become the research desk Indian traders point to as proof that systematic, transparent analysis can be built for the retail market — not just the institutional one.
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-base">
                                Structured, model-driven research has long lived behind institutional desks. We're building SigmaOne Capital to bring that same rigor — data-backed, risk-first, and explainable — to individual traders across intraday, swing, and positional timeframes, without diluting the discipline it takes to do this properly.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Leadership Section */}
                <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 text-center" data-aos="fade-up">
                            <span className="text-xs font-bold text-blue-900 uppercase tracking-widest block mb-2">Leadership</span>
                            <h3 className="text-3xl font-extrabold text-blue-900 uppercase tracking-wider mb-3">The Minds Behind SigmaOne Capital</h3>
                            <div className="w-20 border-b-2 border-blue-900 rounded-full mx-auto mb-4"></div>
                            <p className="text-gray-600 text-base max-w-2xl mx-auto">Two people, one desk — the vision and the execution built to run in the same direction.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Leader 1 */}
                            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-md hover:shadow-lg transition duration-300 group" data-aos="fade-up">
                                <div className="w-14 h-14 rounded-full bg-blue-900 text-white font-bold text-lg flex items-center justify-center mb-6 shadow-inner">
                                    CM
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-2">Chakrapaani Mishra</h4>
                                <div className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-2 mb-6 flex-wrap">
                                    <span>Vision</span>
                                    <span className="text-gray-300">●</span>
                                    <span>Research</span>
                                    <span className="text-gray-300">●</span>
                                    <span>Market Strategy</span>
                                </div>
                                <div className="w-8 h-1 bg-blue-900 rounded-full group-hover:w-16 transition-all duration-300"></div>
                            </div>

                            {/* Leader 2 */}
                            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-md hover:shadow-lg transition duration-300 group" data-aos="fade-up" data-aos-delay="100">
                                <div className="w-14 h-14 rounded-full bg-blue-900 text-white font-bold text-lg flex items-center justify-center mb-6 shadow-inner">
                                    PY
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-2">Prachi Yadav</h4>
                                <div className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-2 mb-6 flex-wrap">
                                    <span>Strategy</span>
                                    <span className="text-gray-300">●</span>
                                    <span>Operations</span>
                                    <span className="text-gray-300">●</span>
                                    <span>Business Growth</span>
                                </div>
                                <div className="w-8 h-1 bg-blue-900 rounded-full group-hover:w-16 transition-all duration-300"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Principles Section */}
                <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <span className="text-xs font-bold text-blue-900 uppercase tracking-widest block mb-2">Core Commitments</span>
                        <h3 className="text-3xl font-extrabold text-blue-900 uppercase tracking-wider mb-3">What the mission is built on</h3>
                        <div className="w-20 border-b-2 border-blue-900 rounded-full mx-auto mb-4"></div>
                        <p className="text-gray-600 text-sm max-w-md mx-auto">
                            Four commitments that shape every report, scanner and recommendation we publish.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {principles.map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition duration-300 flex flex-col justify-between group" data-aos="fade-up" data-aos-delay={idx * 80}>
                                <div>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-3">{item.tag}</span>
                                    <h4 className="text-lg font-extrabold text-blue-900 mb-3">{item.title}</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                                <div className="w-6 h-1 bg-blue-900 rounded-full mt-6 group-hover:w-12 transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-blue-900 text-white text-center">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6" data-aos="zoom-in">
                        <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
                            Research built on structure. Delivered with discipline.
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

export default MissionVision;
