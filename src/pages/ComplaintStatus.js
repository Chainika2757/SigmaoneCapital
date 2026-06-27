import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const ComplaintStatus = () => {
    useDocTitle("Complaint Status | SigmaOne Capital");

    const currentMonthData = [
        { sr: "01", source: "Directly From Investors", pendingStart: 0, received: 0, resolved: 0, pendingEnd: 0, pendingOver3M: 0, avgTime: 0 },
        { sr: "02", source: "SEBI (SCORES)", pendingStart: 0, received: 0, resolved: 0, pendingEnd: 0, pendingOver3M: 0, avgTime: 0 },
        { sr: "03", source: "Other Sources (if any)", pendingStart: 0, received: 0, resolved: 0, pendingEnd: 0, pendingOver3M: 0, avgTime: 0 },
    ];

    const monthlyTrendData = [
        { sr: "01", month: "April 2025", carryForward: 0, received: 0, resolved: 0, pending: 0 },
        { sr: "02", month: "May 2025", carryForward: 0, received: 0, resolved: 0, pending: 0 },
        { sr: "03", month: "June 2025", carryForward: 0, received: 0, resolved: 0, pending: 0 },
        { sr: "04", month: "July 2025", carryForward: 0, received: 0, resolved: 0, pending: 0 },
        { sr: "05", month: "August 2025", carryForward: 0, received: 0, resolved: 0, pending: 0 },
        { sr: "06", month: "September 2025", carryForward: 0, received: 0, resolved: 0, pending: 0 },
        { sr: "07", month: "October 2025", carryForward: 0, received: 0, resolved: 0, pending: 0 },
        { sr: "08", month: "November 2025", carryForward: 0, received: 0, resolved: 0, pending: 0 },
        { sr: "09", month: "December 2025", carryForward: 0, received: 0, resolved: 0, pending: 0 },
        { sr: "10", month: "January 2026", carryForward: 0, received: 0, resolved: 0, pending: 0 },
        { sr: "11", month: "February 2026", carryForward: 0, received: 0, resolved: 0, pending: 0 },
        { sr: "12", month: "March 2026", carryForward: 0, received: 0, resolved: 0, pending: 0 },
        { sr: "13", month: "April 2026", carryForward: 0, received: 0, resolved: 0, pending: 0 },
        { sr: "14", month: "May 2026", carryForward: 0, received: 0, resolved: 0, pending: 0 },
        { sr: "15", month: "June 2026", carryForward: 0, received: 0, resolved: 0, pending: 0 }
    ];

    const annualTrendData = [
        { sr: "01", year: "2024-25", carryForward: 0, received: 0, resolved: 0, pending: 0 },
        { sr: "02", year: "2025-26", carryForward: 0, received: 0, resolved: 0, pending: 0 }
    ];

    return (
        <>
            <NavBar />
            
            {/* Header section */}
            <div className="bg-blue-950 text-white pt-40 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-aos="fade-up">
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest mb-4">
                        Complaint Status
                    </h1>
                    <div className="w-24 border-b-4 border-blue-400 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto font-medium leading-relaxed">
                        Data disclosing complaints received, resolved, and pending as part of SEBI disclosure requirements.
                    </p>
                </div>
            </div>

            {/* Content section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    
                    {/* Table 1: Month Ending */}
                    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-md border border-gray-150" data-aos="fade-up">
                        <h3 className="text-xl font-extrabold text-blue-900 border-b border-gray-100 pb-3 mb-6 uppercase tracking-wider">
                            Data for the month ending - June 2026
                        </h3>
                        <div className="overflow-x-auto border border-gray-200 rounded-2xl">
                            <table className="min-w-full divide-y divide-gray-200 text-xs">
                                <thead className="bg-blue-900 text-white uppercase tracking-wider text-[10px] font-bold">
                                    <tr>
                                        <th className="px-4 py-3 text-left">Sr. No.</th>
                                        <th className="px-4 py-3 text-left">Received from</th>
                                        <th className="px-4 py-3 text-center">Pending at the end of last month</th>
                                        <th className="px-4 py-3 text-center">Received</th>
                                        <th className="px-4 py-3 text-center">Resolved*</th>
                                        <th className="px-4 py-3 text-center">Total Pending</th>
                                        <th className="px-4 py-3 text-center">Pending complaints &gt; 3 months</th>
                                        <th className="px-4 py-3 text-center">Average Resolution time^ (in days)</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-100 text-gray-700">
                                    {currentMonthData.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-4 py-3.5 font-bold text-gray-900">{row.sr}</td>
                                            <td className="px-4 py-3.5 font-semibold text-gray-800">{row.source}</td>
                                            <td className="px-4 py-3.5 text-center font-medium">{row.pendingStart}</td>
                                            <td className="px-4 py-3.5 text-center font-medium">{row.received}</td>
                                            <td className="px-4 py-3.5 text-center font-medium">{row.resolved}</td>
                                            <td className="px-4 py-3.5 text-center font-bold text-blue-900">{row.pendingEnd}</td>
                                            <td className="px-4 py-3.5 text-center font-medium">{row.pendingOver3M}</td>
                                            <td className="px-4 py-3.5 text-center font-medium">{row.avgTime}</td>
                                        </tr>
                                    ))}
                                    <tr className="bg-gray-50/50 font-bold border-t-2 border-gray-200 text-gray-900">
                                        <td className="px-4 py-3.5">-</td>
                                        <td className="px-4 py-3.5">Grand Total</td>
                                        <td className="px-4 py-3.5 text-center">0</td>
                                        <td className="px-4 py-3.5 text-center">0</td>
                                        <td className="px-4 py-3.5 text-center">0</td>
                                        <td className="px-4 py-3.5 text-center text-blue-900">0</td>
                                        <td className="px-4 py-3.5 text-center">0</td>
                                        <td className="px-4 py-3.5 text-center">0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Table 2: Monthly trend */}
                    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-md border border-gray-150" data-aos="fade-up">
                        <h3 className="text-xl font-extrabold text-blue-900 border-b border-gray-100 pb-3 mb-6 uppercase tracking-wider">
                            Trend of monthly disposal of complaints
                        </h3>
                        <div className="overflow-x-auto border border-gray-200 rounded-2xl max-h-[450px] overflow-y-auto">
                            <table className="min-w-full divide-y divide-gray-200 text-xs">
                                <thead className="bg-blue-900 text-white uppercase tracking-wider text-[10px] font-bold sticky top-0 z-10 shadow">
                                    <tr>
                                        <th className="px-4 py-3 text-left">Sr. No.</th>
                                        <th className="px-4 py-3 text-left">Month</th>
                                        <th className="px-4 py-3 text-center">Carried forward from previous month</th>
                                        <th className="px-4 py-3 text-center">Received</th>
                                        <th className="px-4 py-3 text-center">Resolved*</th>
                                        <th className="px-4 py-3 text-center">Pending#</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-100 text-gray-700">
                                    {monthlyTrendData.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-4 py-3 font-bold text-gray-900">{row.sr}</td>
                                            <td className="px-4 py-3 font-semibold text-gray-800">{row.month}</td>
                                            <td className="px-4 py-3 text-center font-medium">{row.carryForward}</td>
                                            <td className="px-4 py-3 text-center font-medium">{row.received}</td>
                                            <td className="px-4 py-3 text-center font-medium">{row.resolved}</td>
                                            <td className="px-4 py-3 text-center font-bold text-blue-900">{row.pending}</td>
                                        </tr>
                                    ))}
                                    <tr className="bg-gray-50/50 font-bold border-t-2 border-gray-200 text-gray-900 sticky bottom-0 z-10">
                                        <td className="px-4 py-3">-</td>
                                        <td className="px-4 py-3">Grand Total</td>
                                        <td className="px-4 py-3 text-center">0</td>
                                        <td className="px-4 py-3 text-center">0</td>
                                        <td className="px-4 py-3 text-center">0</td>
                                        <td className="px-4 py-3 text-center text-blue-900">0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-4 leading-relaxed italic">
                            *Inclusive of complaints of previous months resolved in the current month. <br />
                            #Inclusive of complaints pending as on the last day of the month.
                        </p>
                    </div>

                    {/* Table 3: Annual trend */}
                    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-md border border-gray-150" data-aos="fade-up">
                        <h3 className="text-xl font-extrabold text-blue-900 border-b border-gray-100 pb-3 mb-6 uppercase tracking-wider">
                            Trend of Annual Disposal of Complaints
                        </h3>
                        <div className="overflow-x-auto border border-gray-200 rounded-2xl">
                            <table className="min-w-full divide-y divide-gray-200 text-xs">
                                <thead className="bg-blue-900 text-white uppercase tracking-wider text-[10px] font-bold">
                                    <tr>
                                        <th className="px-4 py-3 text-left">Sr. No.</th>
                                        <th className="px-4 py-3 text-left">Year</th>
                                        <th className="px-4 py-3 text-center">Carried forward</th>
                                        <th className="px-4 py-3 text-center">Received</th>
                                        <th className="px-4 py-3 text-center">Resolved*</th>
                                        <th className="px-4 py-3 text-center">Pending</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-100 text-gray-700">
                                    {annualTrendData.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-4 py-3.5 font-bold text-gray-900">{row.sr}</td>
                                            <td className="px-4 py-3.5 font-semibold text-gray-800">{row.year}</td>
                                            <td className="px-4 py-3.5 text-center font-medium">{row.carryForward}</td>
                                            <td className="px-4 py-3.5 text-center font-medium">{row.received}</td>
                                            <td className="px-4 py-3.5 text-center font-medium">{row.resolved}</td>
                                            <td className="px-4 py-3.5 text-center font-bold text-blue-900">{row.pending}</td>
                                        </tr>
                                    ))}
                                    <tr className="bg-gray-50/50 font-bold border-t-2 border-gray-200 text-gray-900">
                                        <td className="px-4 py-3.5">-</td>
                                        <td className="px-4 py-3.5">Grand Total</td>
                                        <td className="px-4 py-3.5 text-center">0</td>
                                        <td className="px-4 py-3.5 text-center">0</td>
                                        <td className="px-4 py-3.5 text-center">0</td>
                                        <td className="px-4 py-3.5 text-center text-blue-900">0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default ComplaintStatus;
export { ComplaintStatus };
