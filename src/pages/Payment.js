import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const Payment = () => {
    useDocTitle("Payment | SigmaOne Capital");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading time before showing payment details
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 seconds delay
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <NavBar />
            <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-36 pb-12 px-4">
                {loading ? (
                    <div className="flex flex-col items-center justify-center animate-pulse">
                        <div className="newtons-cradle mb-8">
                            <div className="newtons-cradle__dot"></div>
                            <div className="newtons-cradle__dot"></div>
                            <div className="newtons-cradle__dot"></div>
                            <div className="newtons-cradle__dot"></div>
                        </div>
                        <p className="text-blue-900 font-bold text-lg tracking-widest uppercase">Loading Gateway...</p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-2xl max-w-md w-full animate-fade-in-up border border-gray-100">
                        <h2 className="text-3xl font-extrabold text-blue-900 mb-2 text-center uppercase tracking-tight">
                            Secure Payment
                        </h2>
                        <div className="w-16 border-b-4 border-blue-900 rounded-full mb-8"></div>
                        
                        {/* Paytm UPI Card Design */}
                        <div className="mb-6 bg-gray-50 rounded-2xl w-full text-center border border-gray-200 shadow-lg relative overflow-hidden group pb-4">
                            
                            {/* Profile details at top */}
                            <div className="flex flex-col items-center pt-6 pb-4 bg-white border-b border-gray-100">
                                <div className="w-14 h-14 bg-blue-100 text-blue-900 font-bold rounded-full flex items-center justify-center text-xl shadow-inner mb-2 border border-blue-200">
                                    CM
                                </div>
                                <h4 className="text-lg font-black text-gray-800 flex items-center gap-1.5">
                                    Chakrapaani Mishra
                                    <svg className="w-5 h-5 text-blue-500 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </h4>
                            </div>

                            {/* Paytm/UPI Branding Blue Box */}
                            <div className="bg-sky-400 p-4 mx-4 mt-4 rounded-t-xl flex justify-between items-center text-white">
                                <span className="font-extrabold text-xl tracking-tight flex items-center gap-1">
                                    <span className="text-blue-900">pay</span><span>tm</span>
                                    <span className="text-red-500 text-xs font-black">♥</span>
                                    <span className="text-blue-900">UPI</span>
                                </span>
                            </div>

                            {/* QR Code Container */}
                            <div className="bg-white px-8 py-6 mx-4 border-x border-gray-200 flex justify-center">
                                <div className="bg-white p-3 rounded-xl border-2 border-gray-100 shadow-sm transition-transform hover:scale-105 duration-300">
                                    <img 
                                        src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=sigmaone01@ptyes%26pn=Chakrapaani%20Mishra" 
                                        alt="Paytm UPI QR Code" 
                                        className="mx-auto rounded w-[180px] h-[180px]" 
                                    />
                                </div>
                            </div>

                            {/* UPI ID label */}
                            <div className="bg-white pb-6 pt-2 mx-4 rounded-b-xl border-b border-x border-gray-200 flex flex-col items-center justify-center">
                                <div className="flex items-center gap-1.5 text-gray-700 font-bold bg-gray-50 border border-gray-200 px-4 py-1.5 rounded-full text-sm">
                                    <svg className="w-4 h-4 text-orange-500 fill-current rotate-45" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L2 22l10-6 10 6L12 2z" />
                                    </svg>
                                    <span>sigmaone01@ptyes</span>
                                </div>
                            </div>

                            {/* Scan with any app footer */}
                            <p className="text-xs text-gray-500 font-semibold tracking-wide mt-4 uppercase flex justify-center items-center gap-2">
                                Scan with any UPI app 
                                <span className="font-black text-blue-900 text-[10px]">paytm</span>
                                <span className="font-black text-purple-700 text-[10px]">PhonePe</span>
                                <span className="font-black text-green-700 text-[10px]">BHIM</span>
                            </p>
                        </div>
                        
                        <div className="w-full space-y-4 text-left p-6 rounded-xl border border-gray-100 bg-gray-50/50 shadow-inner">
                            <h3 className="font-extrabold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4 uppercase text-sm tracking-wider">
                                Bank Transfer Details
                            </h3>
                            
                            <div className="flex justify-between items-center border-b border-gray-200 pb-3 hover:bg-white p-2 rounded transition-colors">
                                <span className="flex items-center text-gray-500 font-semibold text-xs uppercase tracking-wider">
                                    <svg className="w-4 h-4 text-blue-900 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    Bank
                                </span>
                                <span className="font-bold text-sm text-gray-800">State Bank of India</span>
                            </div>
                            
                            <div className="flex justify-between items-center border-b border-gray-200 pb-3 hover:bg-white p-2 rounded transition-colors">
                                <span className="flex items-center text-gray-500 font-semibold text-xs uppercase tracking-wider">
                                    <svg className="w-4 h-4 text-blue-900 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Account Name
                                </span>
                                <span className="font-bold text-sm text-gray-800">Mr. CHAKRAPAANI MISHRA</span>
                            </div>
                            
                            <div className="flex justify-between items-center border-b border-gray-200 pb-3 hover:bg-white p-2 rounded transition-colors">
                                <span className="flex items-center text-gray-500 font-semibold text-xs uppercase tracking-wider">
                                    <svg className="w-4 h-4 text-blue-900 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                    Account No
                                </span>
                                <span className="font-bold text-sm tracking-wider text-gray-800">44433993781</span>
                            </div>
                            
                            <div className="flex justify-between items-center border-b border-gray-200 pb-3 hover:bg-white p-2 rounded transition-colors">
                                <span className="flex items-center text-gray-500 font-semibold text-xs uppercase tracking-wider">
                                    <svg className="w-4 h-4 text-blue-900 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    IFSC Code
                                </span>
                                <span className="font-bold text-sm tracking-widest text-blue-600 bg-blue-50 px-2 py-0.5 rounded">SBIN0061538</span>
                            </div>
                            
                            <div className="flex justify-between items-center border-b border-gray-200 pb-3 hover:bg-white p-2 rounded transition-colors">
                                <span className="flex items-center text-gray-500 font-semibold text-xs uppercase tracking-wider">
                                    <svg className="w-4 h-4 text-blue-900 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Branch
                                </span>
                                <span className="font-bold text-sm text-gray-800">NIRANJANPUR (SCHEME NO 136), INDORE</span>
                            </div>
                            
                            <div className="flex justify-between items-center pt-2 hover:bg-white p-2 rounded transition-colors">
                                <span className="flex items-center text-gray-500 font-semibold text-xs uppercase tracking-wider">
                                    <svg className="w-4 h-4 text-blue-900 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    UPI ID
                                </span>
                                <span className="font-bold text-sm text-blue-600 bg-blue-50 px-2 py-0.5 rounded">sigmaone01@ptyes</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );    
};

export default Payment;
