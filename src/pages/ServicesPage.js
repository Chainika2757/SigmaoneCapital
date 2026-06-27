import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import Services from '../components/Services';
import { useDocTitle } from '../components/CustomHook';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
    useDocTitle("Our Wealth advisory Services | SigmaOne Capital");

    const benefits = [
        {
            title: "Expert Market Analysis",
            desc: "Recommendations backed by thorough fundamental and technical analysis by our SEBI-registered desk.",
            icon: (
                <svg className="w-6 h-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        {
            title: "Clear Risk Management",
            desc: "Every idea comes with pre-defined entry zones, targets, and strict stop-loss levels to protect capital.",
            icon: (
                <svg className="w-6 h-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            )
        },
        {
            title: "Timely Updates",
            desc: "Continuous follow-up tracking and instant exit/rebalancing alerts delivered directly via WhatsApp & Email.",
            icon: (
                <svg className="w-6 h-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
            )
        }
    ];

    return (
        <>
            <NavBar />
            
            {/* SEO Headings: Hero Section */}
            <div className="bg-blue-950 text-white pt-40 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-aos="fade-up">
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest mb-4">
                        Advisory Services & Packages
                    </h1>
                    <div className="w-24 border-b-4 border-blue-400 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto font-medium leading-relaxed">
                        Explore our SEBI-registered equity research and investment plans tailored to amplify your wealth creation.
                    </p>
                </div>
            </div>

            {/* Reusable Services Component (Pricing Cards) */}
            <Services />

            {/* Benefits section */}
            <div className="bg-white py-16 md:py-24 border-t border-gray-150">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl font-extrabold text-blue-900 uppercase tracking-wider mb-3">
                            Advisory Features & Benefits
                        </h2>
                        <p className="text-gray-500 font-medium">Why investors trust Sigmaone Capital with their wealth advisory</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="p-8 bg-gray-50 border border-gray-100 rounded-3xl text-center space-y-4 hover:shadow-lg transition duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="p-4 bg-blue-100 text-blue-900 rounded-2xl w-fit mx-auto shadow-inner">
                                    {benefit.icon}
                                </div>
                                <h4 className="font-extrabold text-gray-900 text-xl">{benefit.title}</h4>
                                <p className="text-sm text-gray-600 leading-relaxed text-justify md:text-center">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-50 py-16 text-center border-t border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6" data-aos="zoom-in">
                    <h3 className="text-3xl font-black text-blue-900 uppercase">
                        Take Control of Your Wealth Today
                    </h3>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
                        Verify your KYC details to access our premium packages and secure payment desk.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <Link to="/kyc" className="bg-blue-900 hover:bg-blue-800 text-white font-extrabold px-8 py-3 rounded-2xl shadow transition duration-300 transform hover:scale-105">
                            Start KYC Verification
                        </Link>
                        <Link to="/contact" className="bg-white hover:bg-gray-100 text-blue-900 font-extrabold px-8 py-3 rounded-2xl shadow border border-gray-200 transition duration-300 transform hover:scale-105">
                            Speak to an Advisor
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ServicesPage;
