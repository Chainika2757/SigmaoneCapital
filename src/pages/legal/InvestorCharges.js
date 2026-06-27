import React from 'react';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';
import { useDocTitle } from '../../components/CustomHook';

const charges = [
    {
        name: "Sigma Start (Starterwealth Advisory Plan)",
        monthly: "₹7,000",
        quarterly: "₹16,800",
        annual: "₹63,000",
        description: "Advisory fee for basic equity market research, recommendations, and portfolio-tracking access."
    },
    {
        name: "Sigma Edge (Advanced Wealth Advisory Plan)",
        monthly: "₹10,000",
        quarterly: "₹25,000",
        annual: "₹96,000",
        description: "Advisory fee for premium stock recommendations, priority support, and detailed sector research reports."
    }
];

const InvestorCharges = () => {
    useDocTitle("Investor Charges | SigmaOne Capital");


    return (
        <>
            <NavBar />
            <div className="bg-gray-50 pt-36 pb-16 min-h-screen">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-10" data-aos="fade-up">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 uppercase tracking-wide">
                            Investor Charges
                        </h1>
                        <div className="w-20 border-b-4 border-blue-900 rounded-full mx-auto mt-4"></div>
                        <p className="text-sm font-semibold text-gray-500 mt-3">
                            SEBI Compliant Fee Structure & Billing Policy
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-150 text-gray-700 leading-relaxed space-y-6 text-justify" data-aos="fade-up" data-aos-delay="100">
                        <p>
                            In compliance with SEBI (Research Analysts) Regulations, 2014, and SEBI circulars, SIGMAONE CAPITAL hereby discloses the fee structure and charges for all equity research advisory services. We charge flat advisory fees for our services.
                        </p>

                        <div className="overflow-x-auto my-6 border border-gray-150 rounded-2xl shadow-inner">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-blue-900 text-white text-xs uppercase tracking-wider">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-bold">Service Package</th>
                                        <th className="px-6 py-4 text-left font-bold">Monthly Fee</th>
                                        <th className="px-6 py-4 text-left font-bold">Quarterly Fee</th>
                                        <th className="px-6 py-4 text-left font-bold">Annual Fee</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-100 text-sm">
                                    {charges.map((plan, index) => (
                                        <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-gray-900">
                                                <div>
                                                    <p>{plan.name}</p>
                                                    <span className="text-[10px] font-normal text-gray-500 block mt-1 leading-snug">{plan.description}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-700">{plan.monthly}</td>
                                            <td className="px-6 py-4 font-semibold text-blue-900">{plan.quarterly}</td>
                                            <td className="px-6 py-4 font-semibold text-gray-700">{plan.annual}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">
                                Billing and Payment Terms
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                                <li>
                                    <strong>Advance Payment:</strong> All subscription fees are collected in advance for the selected subscription period (Monthly, Quarterly, or Annual).
                                </li>
                                <li>
                                    <strong>Modes of Payment:</strong> Fees can be paid only through banking channels (UPI, Bank Transfer / NEFT / IMPS / RTGS). No cash payments are accepted.
                                </li>
                                <li>
                                    <strong>CeFCoM Support:</strong> If applicable, clients may make payment of fees through the Centralized Fee Collection Mechanism (CeFCoM) of RAASB.
                                </li>
                                <li>
                                    <strong>Inclusive of Taxes:</strong> The fee amounts shown above are inclusive of standard applicable GST and other administrative charges unless specified otherwise.
                                </li>
                            </ul>
                        </div>

                        <hr className="border-gray-100 my-6" />

                        <div className="space-y-4">
                            <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">
                                Cancellation & Refund Policy Summary
                            </h3>
                            <p className="text-sm">
                                Clients wishing to cancel their subscription may request a refund for the <strong>unused portion</strong> of their subscription period. Refund calculations will be made on a pro-rata basis from the date of the formal cancellation request, after deducting applicable charges for the services already utilized, administrative costs, and taxes. No refunds are provided for periods of services already rendered or utilized.
                            </p>
                        </div>

                        <hr className="border-gray-150 my-6" />

                        <div className="bg-blue-900 text-white p-6 rounded-2xl space-y-3">
                            <h4 className="font-extrabold text-sm uppercase tracking-widest text-blue-200">SEBI Compliance Warning:</h4>
                            <p className="text-xs leading-relaxed">
                                Research Analysts do not handle or manage client funds. Never transfer funds meant for stock market trading or investments directly to the Research Analyst. The fee paid is purely towards advisory subscription services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default InvestorCharges;
export { charges };
