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
                        
                        <div className="mb-6 p-6 bg-blue-50/50 rounded-xl w-full text-center border border-blue-100 shadow-sm relative overflow-hidden group">
                           
                           {/* Decorative blob inside QR container */}
                           <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200/50 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>

                            <div className="bg-white p-3 rounded-xl shadow-md inline-block relative z-10 transition-transform hover:scale-105 duration-300">
                                {/* Dummy QR image using a placeholder service matching the blue branding */}
                                <img 
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=dummy@upi&pn=SigmaOneCapital" 
                                    alt="UPI QR Code" 
                                    className="mx-auto rounded" 
                                />
                            </div>
                            <p className="text-sm text-blue-800 font-bold tracking-wide mt-4 relative z-10">
                                SCAN QR TO PAY
                            </p>
                        </div>
                        
                        <div className="w-full space-y-4 text-left p-6 rounded-xl border border-gray-100 bg-gray-50/50 shadow-inner">
                            <h3 className="font-extrabold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4 uppercase text-sm tracking-wider">
                                Bank Transfer Details
                            </h3>
                            
                            <div className="flex justify-between items-center border-b border-gray-200 pb-3 hover:bg-white p-2 rounded transition-colors">
                                <span className="text-gray-500 font-semibold text-xs uppercase tracking-wider">Bank</span>
                                <span className="font-bold text-sm text-gray-800">SigmaOne Bank</span>
                            </div>
                            
                            <div className="flex justify-between items-center border-b border-gray-200 pb-3 hover:bg-white p-2 rounded transition-colors">
                                <span className="text-gray-500 font-semibold text-xs uppercase tracking-wider">Account Name</span>
                                <span className="font-bold text-sm text-gray-800">SigmaOne Capital Ltd.</span>
                            </div>
                            
                            <div className="flex justify-between items-center border-b border-gray-200 pb-3 hover:bg-white p-2 rounded transition-colors">
                                <span className="text-gray-500 font-semibold text-xs uppercase tracking-wider">Account No</span>
                                <span className="font-bold text-sm tracking-wider text-gray-800">0000 1234 5678</span>
                            </div>
                            
                            <div className="flex justify-between items-center border-b border-gray-200 pb-3 hover:bg-white p-2 rounded transition-colors">
                                <span className="text-gray-500 font-semibold text-xs uppercase tracking-wider">IFSC Code</span>
                                <span className="font-bold text-sm tracking-widest text-blue-600 bg-blue-50 px-2 py-0.5 rounded">SIGMA000123</span>
                            </div>
                            
                            <div className="flex justify-between items-center border-b border-gray-200 pb-3 hover:bg-white p-2 rounded transition-colors">
                                <span className="text-gray-500 font-semibold text-xs uppercase tracking-wider">Branch</span>
                                <span className="font-bold text-sm text-gray-800">Mumbai Main</span>
                            </div>
                            
                            <div className="flex justify-between items-center pt-2 hover:bg-white p-2 rounded transition-colors">
                                <span className="text-gray-500 font-semibold text-xs uppercase tracking-wider">UPI ID</span>
                                <span className="font-bold text-sm text-blue-600 bg-blue-50 px-2 py-0.5 rounded">payment@sigmaone</span>
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
