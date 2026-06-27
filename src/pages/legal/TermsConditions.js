import React from 'react';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';
import { useDocTitle } from '../../components/CustomHook';

const TermsConditions = () => {
    useDocTitle("Terms & Conditions | SigmaOne Capital");

    return (
        <>
            <NavBar />
            <div className="bg-gray-50 pt-36 pb-16 min-h-screen">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-10" data-aos="fade-up">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 uppercase tracking-wide">
                            Terms & Conditions
                        </h1>
                        <div className="w-20 border-b-4 border-blue-900 rounded-full mx-auto mt-4"></div>
                        <p className="text-sm font-semibold text-gray-500 mt-3">
                            User Agreement & Legal Guidelines
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-150 text-gray-700 leading-relaxed space-y-6 text-justify text-sm" data-aos="fade-up" data-aos-delay="100">
                        <p>
                            Welcome to <strong>SIGMAONE CAPITAL</strong>. By accessing and browsing the website <a href="https://www.sigmaonecapital.in" className="text-blue-600 hover:underline">www.sigmaonecapital.in</a>, you acknowledge that you have read, understood, and agree to be bound by the terms and conditions of this User Agreement.
                        </p>

                        <div className="space-y-4">
                            <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">
                                1. Eligibility & Access
                            </h3>
                            <p>
                                Access to our research advisory services is restricted to registered, KYC-compliant subscribers. You agree to provide accurate and complete personal details (such as PAN, Name, Email, and Phone Number) required for regulatory compliance prior to onboarding.
                            </p>
                        </div>

                        <hr className="border-gray-100 my-6" />

                        <div className="space-y-4">
                            <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">
                                2. Intellectual Property Rights
                            </h3>
                            <p>
                                No part of this website, including research recommendations, articles, images, logos, and structure, may be reproduced, copied, redistributed, or transmitted in any form or by any means (electronic, mechanical, photocopying, recording, or otherwise) without the prior written consent of <strong>Mr. Chakrapaani Mishra</strong> (SEBI Registered Research Analyst).
                            </p>
                            <p>
                                Any unauthorized distribution of our research reports or recommendations to third parties will lead to immediate cancellation of your subscription without refund, and may attract legal penalties.
                            </p>
                        </div>

                        <hr className="border-gray-100 my-6" />

                        <div className="space-y-4">
                            <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">
                                3. Usage & Risk Acknowledgment
                            </h3>
                            <p>
                                Recommendations provided by SIGMAONE CAPITAL are based on analysis and insights. However, all stock market investments are subject to market risks. You acknowledge that you use our advisory recommendations at your own risk. The Research Analyst does not guarantee any returns or profits and is not responsible for any losses incurred.
                            </p>
                            <p>
                                You are advised to consult your personal financial advisor and evaluate risk factors before executing any trades based on our research recommendations.
                            </p>
                        </div>

                        <hr className="border-gray-100 my-6" />

                        <div className="space-y-4">
                            <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">
                                4. Governing Law & Jurisdiction
                            </h3>
                            <p>
                                This User Agreement is governed by SEBI regulations and Indian laws. All disputes, legal contentions, and complaints arising out of the use of this website or subscription services will be resolved exclusively within the legal jurisdiction of courts in <strong>Indore, Madhya Pradesh</strong>.
                            </p>
                        </div>

                        <hr className="border-gray-100 my-6" />

                        <div className="space-y-4">
                            <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">
                                5. Policy Amendments
                            </h3>
                            <p>
                                We reserve the right to amend, update, or modify these Terms & Conditions at any time without prior notice. Continued use of our website or services following any updates signifies your agreement to comply with the revised terms.
                            </p>
                        </div>

                        <hr className="border-gray-150 my-6" />

                        <div className="bg-blue-900 text-white p-6 rounded-2xl space-y-3 text-xs leading-relaxed">
                            <p className="font-bold uppercase tracking-widest text-blue-200">Standard SEBI Warning:</p>
                            <p className="italic">
                                "Registration granted by SEBI, enlistment with RAASB and certification from NISM is in no way guarantee performance of the intermediary or provide any assurance of returns to investors."
                            </p>
                            <p className="italic">
                                "Investments in securities market are subject to market risks. Read all the related documents carefully before investing."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TermsConditions;
