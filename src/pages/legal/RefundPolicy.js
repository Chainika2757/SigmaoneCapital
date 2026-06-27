import React from 'react';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';
import { useDocTitle } from '../../components/CustomHook';

const RefundPolicy = () => {
    useDocTitle("Refund Policy | SigmaOne Capital");

    return (
        <>
            <NavBar />
            <div className="bg-gray-50 pt-36 pb-16 min-h-screen">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-10" data-aos="fade-up">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 uppercase tracking-wide">
                            Refund Policy
                        </h1>
                        <div className="w-20 border-b-4 border-blue-900 rounded-full mx-auto mt-4"></div>
                        <p className="text-sm font-semibold text-gray-500 mt-3">
                            SEBI Compliant Subscription Cancellation & Pro-Rata Refund Guidelines
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-150 text-gray-700 leading-relaxed space-y-6 text-justify text-sm" data-aos="fade-up" data-aos-delay="100">
                        <p className="font-semibold text-gray-900">
                            At SIGMAONE CAPITAL, we maintain a clear billing policy that respects client choices while staying compliant with SEBI regulations. Please review our refund guidelines carefully before subscribing to any package.
                        </p>

                        <div className="space-y-4">
                            <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">
                                1. Flat No-Refund for Availed Services
                            </h3>
                            <p>
                                Once a subscription service has commenced and recommendations/research reports have been delivered, we maintain a no-refund policy for services already availed. Payment is considered final and non-refundable for the elapsed subscription duration. Dissatisfaction with service quality or performance outcomes during the paid period does not qualify for a refund or compensation.
                            </p>
                        </div>

                        <hr className="border-gray-100 my-6" />

                        <div className="space-y-4">
                            <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">
                                2. SEBI Compliant Cancellation Refunds
                            </h3>
                            <p>
                                In accordance with SEBI guidelines, clients requesting a subscription cancellation before the expiry of the subscription period may be eligible for a refund. However, <strong>refunds are applicable only for the unused portion of the subscription period.</strong>
                            </p>
                            <p>
                                Refunds will be calculated strictly on a pro-rata basis. The calculation will:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                <li>Determine the number of remaining unused days in the subscription cycle.</li>
                                <li>Deduct charges corresponding to the portion of services already availed.</li>
                                <li>Deduct applicable government taxes, GST, payment gateway charges, and administrative fees incurred during onboarding and cancellation processing.</li>
                            </ul>
                        </div>

                        <hr className="border-gray-100 my-6" />

                        <div className="space-y-4">
                            <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">
                                3. Refund Exclusions
                            </h3>
                            <p>
                                Please note that refunds will not be provided under any circumstances for the period of services already availed, regardless of the client’s satisfaction, advisory outcomes, trading losses, or market movements. Subscriptions cannot be paused or transferred to another individual.
                            </p>
                        </div>

                        <hr className="border-gray-100 my-6" />

                        <div className="space-y-4">
                            <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">
                                4. How to Request Cancellation
                            </h3>
                            <p>
                                To request a cancellation, clients must send a formal email from their registered email ID to <a href="mailto:support@sigmaonecapital.in" className="text-blue-600 hover:underline">support@sigmaonecapital.in</a> with the subject line <strong>"Subscription Cancellation Request - [Client Name]"</strong>.
                            </p>
                            <p>
                                Once received, our team will process the request, calculate the pro-rata eligibility, and initiate refunds to the original payment source within 7-10 working days, subject to audit approval.
                            </p>
                        </div>

                        <hr className="border-gray-150 my-6" />

                        <div className="bg-blue-900 text-white p-6 rounded-2xl space-y-3">
                            <h4 className="font-extrabold text-sm uppercase tracking-widest text-blue-200">Advisory Disclaimer:</h4>
                            <p className="text-xs leading-relaxed">
                                Financial markets are subject to volatility and risks. Standard performance disclosures are available in our Disclosure and Disclaimer documents. Subscription to our services implies consent to this refund policy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RefundPolicy;
