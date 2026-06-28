import React from 'react';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';
import { useDocTitle } from '../../components/CustomHook';

const Grievance = () => {
    useDocTitle("Grievance Redressal | SigmaOne Capital");

    const grievanceDetails = [
        {
            role: "Customer Care",
            name: "Chakrapaani Mishra",
            address: "903, A-1 Sector, Scheme-136, Niranjanpur, Indore, Madhya Pradesh - 452010",
            contact: "+91 98755-90601, +91 831 908 1061",
            email: "support@sigmaonecapital.in",
            hours: "Mon-Sat 09:00 AM to 05:00 PM"
        },
        {
            role: "Head of Customer Care",
            name: "--",
            address: "--",
            contact: "--",
            email: "--",
            hours: "--"
        },
        {
            role: "Compliance Officer",
            name: "Chakrapaani Mishra",
            address: "903, A-1 Sector, Scheme-136, Niranjanpur, Indore, Madhya Pradesh - 452010",
            contact: "+91 98755-90601, +91 831 908 1061",
            email: "support@sigmaonecapital.in",
            hours: "Mon-Sat 09:00 AM to 05:00 PM"
        },
        {
            role: "CEO",
            name: "Chakrapaani Mishra",
            address: "903, A-1 Sector, Scheme-136, Niranjanpur, Indore, Madhya Pradesh - 452010",
            contact: "+91 98755-90601, +91 831 908 1061",
            email: "support@sigmaonecapital.in",
            hours: "Mon-Sat 09:00 AM to 05:00 PM"
        },
        {
            role: "Principal Officer",
            name: "Chakrapaani Mishra",
            address: "903, A-1 Sector, Scheme-136, Niranjanpur, Indore, Madhya Pradesh - 452010",
            contact: "+91 98755-90601, +91 831 908 1061",
            email: "support@sigmaonecapital.in",
            hours: "Mon-Sat 09:00 AM to 05:00 PM"
        }
    ];

    return (
        <>
            <NavBar />
            <div className="bg-gray-50 pt-36 pb-16 min-h-screen">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-10" data-aos="fade-up">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 uppercase tracking-wide">
                            Grievance Redressal
                        </h1>
                        <div className="w-20 border-b-4 border-blue-900 rounded-full mx-auto mt-4"></div>
                        <p className="text-sm font-semibold text-gray-500 mt-3">
                            Escalation Matrix for Investor Grievances
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-150 text-gray-700 leading-relaxed space-y-6" data-aos="fade-up" data-aos-delay="100">
                        <p className="text-justify font-medium text-gray-800">
                            If you have any grievance or complaint regarding our research services, you can reach out to our Support Team and Compliance Officer for assistance. Below are the designated contact details to facilitate direct communication.
                        </p>

                        {/* Responsive Table */}
                        <div className="overflow-x-auto my-8 border border-gray-150 rounded-2xl shadow-inner">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-blue-900 text-white text-xs uppercase tracking-wider">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-bold">Designation</th>
                                        <th className="px-6 py-4 text-left font-bold">Contact Person</th>
                                        <th className="px-6 py-4 text-left font-bold">Address</th>
                                        <th className="px-6 py-4 text-left font-bold">Contact Info</th>
                                        <th className="px-6 py-4 text-left font-bold">Hours</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-100 text-xs">
                                    {grievanceDetails.map((officer, index) => (
                                        <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap">{officer.role}</td>
                                            <td className="px-6 py-4 font-semibold text-gray-700">{officer.name}</td>
                                            <td className="px-6 py-4 text-gray-600 min-w-[200px]">{officer.address}</td>
                                            <td className="px-6 py-4 text-gray-600">
                                                {officer.contact !== "--" ? (
                                                    <div className="space-y-1">
                                                        <p className="font-semibold text-blue-900">{officer.contact}</p>
                                                        <a href={`mailto:${officer.email}`} className="text-blue-600 hover:underline block">{officer.email}</a>
                                                    </div>
                                                ) : "--"}
                                            </td>
                                            <td className="px-6 py-4 text-gray-500 whitespace-nowrap">{officer.hours}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="text-sm text-gray-500 italic text-justify border-l-4 border-blue-900 pl-4">
                            The above mentioned details would facilitate the complaints to approach the concerned Research Analyst before filing a complaint to SEBI. We aim to resolve all grievances within 21 working days from the date of receipt.
                        </p>

                        <hr className="border-gray-150 my-8" />

                        {/* Escalation Matrix */}
                        <div className="space-y-4">
                            <h3 className="font-extrabold text-blue-900 text-lg">SEBI Escalation Options</h3>
                            <p className="text-justify text-sm">
                                If your grievance is not resolved within 21 working days, or if you are unsatisfied with the resolution provided, you can escalate the matter to SEBI using the following channels:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 pt-2">
                                <div className="p-6 bg-sky-50 rounded-2xl border border-sky-100 flex flex-col justify-between">
                                    <div>
                                        <h4 className="font-bold text-blue-900 mb-2 text-md">SEBI SCORES Platform</h4>
                                        <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                            SCORES is a web-based centralized grievance redressal system of SEBI designed for facilitating effective, time-bound redressal of investor complaints.
                                        </p>
                                    </div>
                                    <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="inline-block text-center bg-blue-900 text-white font-bold text-xs py-2.5 px-4 rounded-xl hover:bg-blue-800 transition-colors shadow">
                                        Visit SCORES Portal
                                    </a>
                                </div>

                                <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100 flex flex-col justify-between">
                                    <div>
                                        <h4 className="font-bold text-purple-900 mb-2 text-md">Online Dispute Resolution (ODR)</h4>
                                        <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                            If you are unsatisfied with the resolution provided through our internal support or SCORES, you can register for online conciliation or arbitration on the ODR Portal.
                                        </p>
                                    </div>
                                    <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="inline-block text-center bg-purple-900 text-white font-bold text-xs py-2.5 px-4 rounded-xl hover:bg-purple-800 transition-colors shadow">
                                        Visit ODR Portal
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Grievance;
