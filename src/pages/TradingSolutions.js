import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import { Link } from 'react-router-dom';

const TradingSolutions = () => {
    useDocTitle("Trading Solutions | SigmaOne Capital");

    const steps = [
        {
            num: "01",
            title: "KYC & Verification",
            desc: "Complete your standard KYC process using our online form and submit the necessary documents (PAN, Aadhaar) for onboarding compliance.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            num: "02",
            title: "Select Your Package",
            desc: "Choose from our advisory tiers: Sigma Start or Sigma Edge. Complete the secure payment via Paytm UPI or Direct Bank Transfer.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            num: "03",
            title: "Receive Advisory Ideas",
            desc: "Our research desk analyzes the markets and sends high-conviction buying ideas via WhatsApp and Email, complete with research rationale, entry, target, and stop loss.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
            )
        },
        {
            num: "04",
            title: "Execute Trades",
            desc: "Execute the buying trades through your demat account with any broker of your choice. Never share your password or let others trade on your behalf.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            )
        },
        {
            num: "05",
            title: "Portfolio Monitoring",
            desc: "Our research desk monitors the open positions continually. We send rebalancing updates and exit alerts to secure profit or manage risk.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        }
    ];

    return (
        <>
            <NavBar />
            
            {/* Hero Section */}
            <div className="bg-blue-950 text-white pt-40 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-aos="fade-up">
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest mb-4">
                        Trading Solutions
                    </h1>
                    <div className="w-24 border-b-4 border-blue-400 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto font-medium leading-relaxed">
                        Learn how our research advisory works, understanding the complete end-to-end trading flow from verification to execution.
                    </p>
                </div>
            </div>

            {/* Complete Trading Flow Step-by-Step */}
            <div className="bg-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl font-extrabold text-blue-900 uppercase tracking-wider mb-3">
                            The Complete Trading Flow
                        </h2>
                        <p className="text-gray-500 font-medium">A step-by-step walkthrough of your investment journey with us</p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-8" data-aos="fade-up" data-aos-delay="100">
                        {steps.map((step, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col justify-between hover:shadow-lg transition duration-300 relative group">
                                <div className="absolute -top-5 -right-2 text-6xl font-black text-blue-900/5 group-hover:text-blue-900/10 transition-colors">
                                    {step.num}
                                </div>
                                <div className="space-y-4">
                                    <div className="p-3 bg-blue-100 text-blue-900 rounded-xl w-fit">
                                        {step.icon}
                                    </div>
                                    <h4 className="font-extrabold text-gray-900 text-lg">{step.title}</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed text-justify">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Buying & Selling Process side by side */}
            <div className="bg-gray-50 py-16 md:py-24 border-t border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        
                        {/* Buying Process */}
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-md border border-gray-100" data-aos="fade-right">
                            <h3 className="text-2xl font-black text-blue-900 uppercase tracking-wider mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
                                <span className="p-2 bg-green-100 text-green-600 rounded-xl">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </span>
                                Buying Process
                            </h3>
                            <ul className="space-y-6 text-sm text-gray-600">
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-0.5 text-xs">1</div>
                                    <div className="space-y-1 text-justify">
                                        <h5 className="font-bold text-gray-900">Wait for Signal:</h5>
                                        <p>Our research reports specify precise entry zones. Never jump into a trade if the market price has moved significantly above our entry range.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-0.5 text-xs">2</div>
                                    <div className="space-y-1 text-justify">
                                        <h5 className="font-bold text-gray-900">Check Position Sizing:</h5>
                                        <p>Ensure that you allocate an appropriate percentage of your trading capital to each individual position (typically 5-10% max) to manage risk.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-0.5 text-xs">3</div>
                                    <div className="space-y-1 text-justify">
                                        <h5 className="font-bold text-gray-900">Set Stop Loss:</h5>
                                        <p>Always place a stop-loss order in your terminal at the time of buying. Protecting capital is our first and most critical rule.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Selling Process */}
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-md border border-gray-100" data-aos="fade-left">
                            <h3 className="text-2xl font-black text-blue-900 uppercase tracking-wider mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
                                <span className="p-2 bg-red-100 text-red-600 rounded-xl">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                                    </svg>
                                </span>
                                Selling Process
                            </h3>
                            <ul className="space-y-6 text-sm text-gray-600">
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-0.5 text-xs">1</div>
                                    <div className="space-y-1 text-justify">
                                        <h5 className="font-bold text-gray-900">Follow Target Updates:</h5>
                                        <p>We provide multiple targets for our research ideas. When target levels are reached, we will send an alert to either book profits or trail stop-loss.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-0.5 text-xs">2</div>
                                    <div className="space-y-1 text-justify">
                                        <h5 className="font-bold text-gray-900">Trailing Stop Loss:</h5>
                                        <p>As the trade moves into profit, trail the stop-loss order upwards to lock in gains and ensure that a winning trade doesn't turn into a loss.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-0.5 text-xs">3</div>
                                    <div className="space-y-1 text-justify">
                                        <h5 className="font-bold text-gray-900">Complete Exit:</h5>
                                        <p>Once an exit alert is sent (either due to stop-loss triggering or final target achievements), execute the sell order immediately and record the trade outcome.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white py-16 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6" data-aos="zoom-in">
                    <h3 className="text-3xl font-black text-blue-900 uppercase">
                        Ready to Start Your Investment Journey?
                    </h3>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
                        Complete your KYC verification and pick a package that matches your financial goals today.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <Link to="/kyc" className="bg-blue-900 hover:bg-blue-800 text-white font-extrabold px-8 py-3 rounded-2xl shadow transition duration-300 transform hover:scale-105">
                            Verify KYC
                        </Link>
                        <Link to="/services" className="bg-gray-100 hover:bg-gray-200 text-blue-900 font-extrabold px-8 py-3 rounded-2xl shadow border border-gray-200 transition duration-300 transform hover:scale-105">
                            View Pricing
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default TradingSolutions;
