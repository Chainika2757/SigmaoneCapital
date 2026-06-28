import React from 'react';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';
import { useDocTitle } from '../../components/CustomHook';

const Disclosure = () => {
    useDocTitle("Disclosure | SigmaOne Capital");

    return (
        <>
            <NavBar />
            <div className="bg-gray-50 pt-36 pb-16 min-h-screen">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-10" data-aos="fade-up">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 uppercase tracking-wide">
                            Disclosure
                        </h1>
                        <div className="w-20 border-b-4 border-blue-900 rounded-full mx-auto mt-4"></div>
                        <p className="text-sm font-semibold text-gray-500 mt-3">
                            Compliance Document - Last Updated: June 20, 2026
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-150 text-gray-700 leading-relaxed space-y-6 text-justify" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">
                            SEBI Registered Research Analyst SEBI Registration Number: INH000027812
                        </h3>

                        <div className="space-y-4">
                            <h4 className="font-bold text-gray-900">1. Research Analyst Information:</h4>
                            <p>
                                Chakrapaani Mishra Proprietor Sigmaone Capital, is a SEBI-registered Research Analyst (SEBI Registration Number: INH000027812) under the SEBI (Research Analysts) Regulations, 2014.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-bold text-gray-900">2. Disciplinary Action:</h4>
                            <p>
                                No penalties / directions have been issued by SEBI under the SEBI Act or Regulations made there under against Chakrapaani Mishra Proprietor of Sigmaone Capital.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-bold text-gray-900">3. Material Disclosures:</h4>
                            <ul className="list-disc pl-5 space-y-3">
                                <li>
                                    <strong>No Financial Interest:</strong> Neither Research Analyst nor its associates, employees or relatives have any financial interest in any subject company discussed in our research reports.
                                </li>
                                <li>
                                    <strong>No Ownership of Securities:</strong> Neither Research Analyst nor its associates, or relatives hold 1% or more of the securities of any subject company as of the end of the month immediately preceding the publication of the research report or the date of any public appearance.
                                </li>
                                <li>
                                    <strong>No Material Conflicts of Interest:</strong> At the time of publication of this research report, Research Analyst and its associates, or relatives have no material conflict of interest with the subject company.
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-bold text-gray-900">4. Compensation Disclosures:</h4>
                            <p className="font-medium text-gray-800">Neither Research Analyst nor any of our employees and its associates have:</p>
                            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                                <li>Received any compensation from the company which is subject matter of recommendation/research.</li>
                                <li>Managed or co-managed the public offering of any company.</li>
                                <li>Received any compensation for investment banking or merchant banking or brokerage services from the subject company.</li>
                                <li>Received any compensation for products or services from the subject company.</li>
                                <li>Received any compensation or other benefits from the Subject Company or 3rd party in connection with the research report.</li>
                                <li>Served as an officer, director or employee of the subject company.</li>
                                <li>Been engaged in market making activity of the subject company.</li>
                                <li>The subject company was not our client during twelve months preceding the date of report.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-bold text-gray-900">5. Conflict of Interest & Public Appearances:</h4>
                            <p>
                                There are no actual or potential conflicts of interest arising from any connection to or association with any issuer of products/ securities, including any material information or facts that might compromise its objectivity or independence in the carrying on of Research Analyst services. Such conflict of interest will be disclosed to the client as and when they arise.
                            </p>
                            <p>
                                Research Analyst has not received any compensation from the subject company for any public appearances within the past 12 months. Additionally, the subject company has not been a client of Research Analyst during the 12 months preceding the distribution of the research report.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-bold text-gray-900">6. Proprietary Declarations:</h4>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Chakrapaani Mishra Proprietor of Sigmaone Capital owns the website <a href="https://sigmaonecapital.in" className="text-blue-600 hover:underline">https://sigmaonecapital.in</a>.</li>
                                <li>Chakrapaani Mishra Proprietor of Sigmaone Capital makes research-based recommendations on various opportunities in the Indian equity market for the short and long term.</li>
                                <li>I have never been suspended or barred from doing business by SEBI or any other authority, nor has SEBI ever cancelled our certificate of registration.</li>
                                <li>The firm does not provide merchant banking, investment banking, investment adviser, or brokerage services.</li>
                                <li>The recommendations should not be interpreted as a solicitation of an offer to purchase or sell any security in a jurisdiction where doing so would be against the law.</li>
                                <li>Our subscribers, a third party or anyone else have no rights to forward or share our calls or SMS or Reports or any information provided by us to/with anyone (through any medium) which is received directly or indirectly by them. If found so then legal action can be taken. Please note, any evidence of distribution, unauthorised access, copying, forwarding of reports/calls will lead to automatic cancellation of subscription without any refunds.</li>
                            </ul>
                        </div>

                        <hr className="border-gray-150 my-6" />

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-sm space-y-2">
                            <p className="font-bold text-gray-800">Office Location & Support Details:</p>
                            <p><strong>Registered Office:</strong> 903, A-1 Sector, Scheme-136, Niranjanpur, Indore, Madhya Pradesh - 452010</p>
                            <p><strong>Support Email:</strong> <a href="mailto:support@sigmaonecapital.in" className="text-blue-600 hover:underline">support@sigmaonecapital.in</a></p>
                            <p><strong>Contact Helplines:</strong> +91 98755-90601, +91 831 908 1061</p>
                        </div>

                        <div className="bg-blue-900 text-white p-6 rounded-2xl space-y-3">
                            <h4 className="font-extrabold text-sm uppercase tracking-widest text-blue-200">General Disclaimer:</h4>
                            <p className="text-xs leading-relaxed">
                                Investment in securities markets are subject to market risks. Read all related documents carefully before investing. The securities mentioned are for illustration purposes only and should not be considered as a recommendation. Chakrapaani Mishra Proprietor of Sigmaone Capital does not guarantee any returns or performance and disclaims any responsibility for the accuracy or completeness of the information provided. Registration granted by SEBI, Enlistment as RA with Exchange and certification from NISM do not guarantee the performance of the intermediary or provide any assurance of returns to investors. These information / opinions / views are not meant to serve as a professional investment guide for the readers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Disclosure;
