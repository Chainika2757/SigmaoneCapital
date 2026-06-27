import React from 'react';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';
import { useDocTitle } from '../../components/CustomHook';

const InvestorCharter = () => {
    useDocTitle("Investor Charter | SigmaOne Capital");

    return (
        <>
            <NavBar />
            <div className="bg-gray-50 pt-36 pb-16 min-h-screen">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-10" data-aos="fade-up">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 uppercase tracking-wide">
                            Investor Charter
                        </h1>
                        <div className="w-20 border-b-4 border-blue-900 rounded-full mx-auto mt-4"></div>
                        <p className="text-sm font-semibold text-gray-500 mt-3">
                            SEBI Mandated Charter for Research Analysts
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-150 text-gray-700 leading-relaxed space-y-6 text-justify text-sm" data-aos="fade-up" data-aos-delay="100">
                        
                        <div className="space-y-4">
                            <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">
                                A. Vision and Mission Statements for Investors
                            </h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Vision:</strong> Invest with knowledge & safety.</li>
                                <li><strong>Mission:</strong> Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.</li>
                            </ul>
                        </div>

                        <hr className="border-gray-100 my-6" />

                        <div className="space-y-4">
                            <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">
                                B. Details of Business Transacted by the Research Analyst
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                <li>To publish research report based on the research activities of the RA.</li>
                                <li>To provide an independent unbiased view on securities.</li>
                                <li>To offer unbiased recommendation, disclosing the financial interests in recommended securities.</li>
                                <li>To provide research recommendation, based on analysis of publicly available information and known observations.</li>
                                <li>To conduct audit annually.</li>
                                <li>To ensure that all advertisements are in adherence to the provisions of the Advertisement Code for Research Analysts.</li>
                                <li>To maintain records of interactions, with all clients including prospective clients (prior to onboarding), where any conversation related to the research services has taken place.</li>
                            </ul>
                        </div>

                        <hr className="border-gray-100 my-6" />

                        <div className="space-y-4">
                            <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">
                                C. Details of Services Provided to Investors
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                <li>Onboarding of Clients.</li>
                                <li>Sharing of terms and conditions of research services.</li>
                                <li>Completing KYC of fee paying clients.</li>
                                <li>
                                    <strong>Disclosure to Clients:</strong>
                                    <ul className="list-circle pl-5 mt-2 space-y-1">
                                        <li>To disclose, information that is material for the client to make an informed decision, including details of its business activity, disciplinary history, the terms and conditions of research services, details of associates, risks and conflicts of interest, if any.</li>
                                        <li>To disclose the extent of use of Artificial Intelligence tools in providing research services.</li>
                                        <li>To disclose, while distributing a third party research report, any material conflict of interest of such third party research provider or provide web address that directs a recipient to the relevant disclosures.</li>
                                        <li>To disclose any conflict of interest of the activities of providing research services with other activities of the research analyst.</li>
                                    </ul>
                                </li>
                                <li>To distribute research reports and recommendations to the clients without discrimination.</li>
                                <li>To maintain confidentiality w.r.t publication of the research report until made available in the public domain.</li>
                                <li>To respect data privacy rights of clients and take measures to protect unauthorized use of their confidential information.</li>
                                <li>To disclose the timelines for the services provided by the research analyst to clients and ensure adherence to the said timelines.</li>
                                <li>To provide clear guidance and adequate caution notice to clients when providing recommendations for dealing in complex and high-risk financial products/services.</li>
                                <li>To treat all clients with honesty and integrity.</li>
                                <li>To ensure confidentiality of information shared by clients unless such information is required to be provided in furtherance of discharging legal obligations or a client has provided specific consent to share such information.</li>
                            </ul>
                        </div>

                        <hr className="border-gray-100 my-6" />

                        <div className="space-y-4">
                            <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">
                                D. Details of Grievance Redressal Mechanism and How to Access It
                            </h3>
                            <p>
                                Investors can lodge complaints/grievances against the Research Analyst in the following ways:
                            </p>
                            <ul className="list-disc pl-5 space-y-3 text-gray-600">
                                <li>
                                    <strong>Mode of filing complaints with RA:</strong> An investor may approach the concerned Research Analyst who shall strive to redress the grievance immediately, but not later than 21 days of the receipt of the grievance.
                                </li>
                                <li>
                                    <strong>Mode of filing complaints on SCORES:</strong> Clients can register complaints on SCORES 2.0 (web-based centralized grievance redressal system of SEBI) at <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://scores.sebi.gov.in</a>. Complaints are reviewed first by the designated body (RAASB) and then by SEBI.
                                </li>
                                <li>
                                    <strong>Online Dispute Resolution (ODR) Platform:</strong> If the investor is not satisfied with the resolution, they can opt to file a dispute on the ODR platform (<a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">smartodr.in</a>) for resolution through online conciliation or arbitration.
                                </li>
                                <li>
                                    <strong>Physical complaints can be sent to:</strong>
                                    <p className="mt-1 font-semibold text-gray-800">
                                        Office of Investor Assistance and Education,<br />
                                        Securities and Exchange Board of India,<br />
                                        SEBI Bhavan, Plot No. C4-A, ‘G’ Block,<br />
                                        Bandra-Kurla Complex, Bandra (E), Mumbai – 400 051
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <hr className="border-gray-100 my-6" />

                        <div className="space-y-4">
                            <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">
                                E. Rights of Investors
                            </h3>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                <li>Right to Privacy and Confidentiality.</li>
                                <li>Right to Transparent Practices.</li>
                                <li>Right to fair and Equitable Treatment.</li>
                                <li>Right to Adequate Information.</li>
                                <li>Right to Initial and Continuing Disclosure.</li>
                                <li>Right to receive information about all the statutory and regulatory disclosures.</li>
                                <li>Right to Fair & True Advertisement.</li>
                                <li>Right to Awareness about Service Parameters and Turnaround Times.</li>
                                <li>Right to be informed of the timelines for each service.</li>
                                <li>Right to be Heard and Satisfactory Grievance Redressal.</li>
                                <li>Right to have timely redressal.</li>
                                <li>Right to Exit from Financial product or service in accordance with the terms and conditions agreed with the research analyst.</li>
                                <li>Right to receive clear guidance and caution notice when dealing in Complex and High-Risk Financial Products and Services.</li>
                                <li>
                                    <strong>Additional Rights to vulnerable consumers:</strong>
                                    <ul className="list-circle pl-5 mt-1 space-y-1">
                                        <li>Right to get access to services in a suitable manner even if differently abled.</li>
                                        <li>Right to provide feedback on the financial products and services used.</li>
                                        <li>Right against coercive, unfair, and one-sided clauses in financial agreements.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <hr className="border-gray-150 my-6" />

                        <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <div>
                                <h4 className="font-bold text-blue-900 mb-2">Do's for Investors:</h4>
                                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
                                    <li>Always deal with SEBI registered Research Analyst.</li>
                                    <li>Ensure that the Research Analyst has a valid registration certificate.</li>
                                    <li>Check for SEBI registration number.</li>
                                    <li>Refer to the list of SEBI registered RAs available on SEBI website.</li>
                                    <li>Pay attention to disclosures in research reports before investing.</li>
                                    <li>Pay through banking channels only and maintain receipts.</li>
                                    <li>Check for research recommendations before buying/selling.</li>
                                    <li>Ask relevant questions to clear doubts with the RA.</li>
                                    <li>Seek clarifications, especially for complex or high-risk products.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-red-600 mb-2">Dont's for Investors:</h4>
                                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
                                    <li>Do not provide funds for investment to the Research Analyst.</li>
                                    <li>Don't fall prey to luring advertisements or market rumours.</li>
                                    <li>Do not get attracted to limited period discounts or incentives.</li>
                                    <li>Do not share login credentials or passwords of your accounts with the RA.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default InvestorCharter;
