import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const KYC = () => {
    useDocTitle("KYC Verification | SigmaOne Capital");
    const [iframeLoading, setIframeLoading] = useState(true);

    return (
        <>
            <NavBar />
            
            {/* Header section */}
            <div className="bg-blue-950 text-white pt-40 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-aos="fade-up">
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest mb-4">
                        KYC Verification
                    </h1>
                    <div className="w-24 border-b-4 border-blue-400 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto font-medium leading-relaxed">
                        To comply with SEBI regulations, all clients must complete their Know Your Customer (KYC) documentation before onboarding.
                    </p>
                </div>
            </div>

            {/* Form section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-150 p-6 md:p-8 space-y-6" data-aos="zoom-in">
                        <div className="bg-blue-50/50 p-6 rounded-2xl border-l-4 border-blue-900 text-sm text-gray-700 leading-relaxed">
                            <h4 className="font-extrabold text-blue-900 text-base mb-2">Instructions for KYC submission:</h4>
                            <ul className="list-disc pl-5 space-y-1.5">
                                <li>Ensure that all entered details match your official documents (PAN, Aadhaar/Passport).</li>
                                <li>Prepare a clear digital copy of your PAN Card to upload, as required.</li>
                                <li>Risk Profiling questions must be answered truthfully to help us understand your investment profile.</li>
                                <li>Submitting this form completes your registration. Our onboarding desk will review and contact you within 24 hours.</li>
                            </ul>
                        </div>

                        {/* Embed form inside iframe */}
                        <div className="relative border border-gray-200 rounded-2xl overflow-hidden bg-gray-50 min-h-[900px] shadow-inner">
                            {iframeLoading && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-900 mb-4"></div>
                                    <p className="text-blue-900 font-bold text-sm tracking-widest uppercase">Loading KYC Form...</p>
                                </div>
                            )}
                            <iframe 
                                src="/kyc-form.html" 
                                title="KYC Verification Form"
                                className="w-full min-h-[900px] border-none"
                                onLoad={() => setIframeLoading(false)}
                            />
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default KYC;
