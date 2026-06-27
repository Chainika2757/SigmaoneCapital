import React from 'react';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';
import { useDocTitle } from '../../components/CustomHook';

const Disclaimer = () => {
    useDocTitle("Disclaimer | SigmaOne Capital");

    return (
        <>
            <NavBar />
            <div className="bg-gray-50 pt-36 pb-16 min-h-screen">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-10" data-aos="fade-up">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 uppercase tracking-wide">
                            Disclaimer
                        </h1>
                        <div className="w-20 border-b-4 border-blue-900 rounded-full mx-auto mt-4"></div>
                        <p className="text-sm font-semibold text-gray-500 mt-3">
                            SEBI Registration Number: INH000027812
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-150 text-gray-700 leading-relaxed space-y-6 text-justify" data-aos="fade-up" data-aos-delay="100">
                        <p className="font-bold text-gray-900">
                            Welcome to SIGMAONE CAPITAL. Our SEBI Registration Number is INH000027812.
                        </p>
                        
                        <p>
                            By accessing the website <a href="https://www.sigmaonecapital.in" className="text-blue-600 hover:underline">www.sigmaonecapital.in</a> I acknowledge that I have read, understood, and agree to be legally bound by the following terms of this disclaimer and user agreement.
                        </p>

                        <div className="bg-blue-50/50 p-6 rounded-2xl border-l-4 border-blue-900 space-y-3">
                            <h3 className="font-bold text-blue-900 text-lg">Key Disclosures:</h3>
                            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800 font-medium">
                                <li>We share our research and insights on various company stocks and indices purely based on analysis. We have no direct interests or affiliations with the companies discussed.</li>
                                <li>We may not have financial interests in the stocks we recommend, and we may or may not hold them in our own portfolio.</li>
                                <li>We are not affiliated as employees or executives with the companies whose stocks we discuss or recommend.</li>
                                <li>We do not receive any financial compensation from the companies whose stocks we analyze or suggest.</li>
                            </ul>
                        </div>

                        <p>
                            Use of the information provided here is at your own risk. This is not an offer to sell or a solicitation to buy any securities. SIGMAONE CAPITAL is not liable for any losses or investment decisions made based on the information provided. The content does not constitute a personal recommendation, nor does it take into account individual investment objectives, financial situations or needs.
                        </p>

                        <p>
                            Before acting on any recommendation, investors should evaluate whether it is suitable for their specific circumstances and, if necessary, seek independent professional advice. SIGMAONE CAPITAL is not responsible for any loss or liability arising from the use of our recommendations.
                        </p>

                        <p>
                            While we believe the information is reliable, we do not warrant its completeness or accuracy and expressly disclaim all warranties of any kind, whether express or implied. Past performance does not guarantee future results.
                        </p>

                        <div className="bg-orange-50/50 p-6 rounded-2xl border-l-4 border-orange-500 space-y-3">
                            <h3 className="font-bold text-orange-800 text-lg">Subscription and Refund Policy:</h3>
                            <p className="text-sm">
                                Please take ample time to carefully consider before joining our paid services. At SIGMAONE CAPITAL, we maintain a no-refund policy for services already availed. Once a payment is made, it is considered final, and no refunds will be issued for the period during which services have been utilized. Complaints or dissatisfaction with the quality of services during the paid period do not qualify for a refund or compensation.
                            </p>
                            <p className="text-sm">
                                As per SEBI guidelines, clients requesting a subscription cancellation may be eligible for a refund only for the unused portion of the subscription period. Refunds will be calculated on a pro-rata basis, deducting applicable charges for services already availed, including taxes and administrative fees.
                            </p>
                            <p className="text-sm">
                                Please note that refunds will not be provided for the period of services already availed, regardless of the client’s satisfaction with recommendations or trading outcomes.
                            </p>
                        </div>

                        <p>
                            No part of this website may be reproduced or copied in any form, whether through tape, disc, photocopy, electronic media, or otherwise, without prior consent from Mr. Chakrapaani Mishra (SEBI Registered Research Analyst). Any breach of this condition may result in legal action. All disputes and legal matters will be resolved in the jurisdiction of Indore.
                        </p>

                        <hr className="border-gray-150 my-6" />

                        <div className="space-y-4">
                            <h3 className="font-bold text-gray-900 text-lg">Client Personal Data Protection Policy:</h3>
                            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                                <li>We retain records related to the services we provide to assist our clients and comply with professional standards or legal requirements.</li>
                                <li>We implement physical, electronic, and procedural safeguards to protect clients' non-public personal information as per relevant federal and state laws.</li>
                                <li>We take precautions to ensure the confidentiality of client’s mobile number, name, address, and email ID and other personal/private information, preventing unlawful disclosure, and limiting access to client data, just as we do with all other private information.</li>
                                <li>Documents containing non-public personal information are safeguarded and will not be disclosed unless authorized by the client or required by law.</li>
                            </ul>
                        </div>

                        <hr className="border-gray-150 my-6" />

                        <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <div>
                                <h4 className="font-bold text-green-700 mb-2">Do's:</h4>
                                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
                                    <li>You can consult your investment advisor for risk profiling and position sizing.</li>
                                    <li>Use only surplus funds for trading.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-red-600 mb-2">Don'ts:</h4>
                                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
                                    <li>Don't Share your trading password with anyone.</li>
                                    <li>Don't Allow anyone to trade on your behalf.</li>
                                </ul>
                            </div>
                        </div>

                        <hr className="border-gray-150 my-6" />

                        <div className="bg-blue-900 text-white p-6 rounded-2xl space-y-3">
                            <h4 className="font-extrabold text-sm uppercase tracking-widest text-blue-200">Standard Warning & Disclaimer:</h4>
                            <p className="text-sm font-semibold italic">
                                "Registration granted by SEBI, enlistment with RAASB and certification from NISM is in no way guarantee performance of the intermediary or provide any assurance of returns to investors."
                            </p>
                            <p className="text-sm font-semibold italic">
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

export default Disclaimer;
