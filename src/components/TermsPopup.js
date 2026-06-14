import React, { useState, useEffect } from 'react';

const TermsPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [hasDeclined, setHasDeclined] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem('termsAccepted');
        if (!accepted) {
            setIsOpen(true);
            document.body.style.overflow = 'hidden'; // Disable scroll on site
        }
    }, []);

    const handleAccept = () => {
        if (isChecked) {
            localStorage.setItem('termsAccepted', 'true');
            setIsOpen(false);
            document.body.style.overflow = 'auto'; // Enable scroll on site
        }
    };

    const handleDecline = () => {
        setHasDeclined(true);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 backdrop-blur-md px-4 py-6">
            <div className="bg-white/95 backdrop-blur-lg border border-gray-200 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="bg-blue-900 px-6 py-5 text-white flex items-center justify-center gap-2 border-b border-blue-800">
                    <svg className="w-6 h-6 text-orange-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <h2 className="text-xl md:text-2xl font-black tracking-widest uppercase text-center">
                        IMPORTANT NOTICE!!
                    </h2>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 overflow-y-auto space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                    {hasDeclined ? (
                        <div className="text-center py-12 space-y-4">
                            <svg className="w-16 h-16 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <h3 className="text-2xl font-extrabold text-red-600">Access Restricted</h3>
                            <p className="max-w-md mx-auto text-gray-500">
                                You have declined the Terms & Conditions. In order to access and use the services of SigmaOne Capital, you must accept this notice.
                            </p>
                            <button 
                                onClick={() => setHasDeclined(false)} 
                                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2.5 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                            >
                                Review Notice Again
                            </button>
                        </div>
                    ) : (
                        <>
                            <ul className="list-disc pl-5 space-y-4">
                                <li className="font-semibold text-gray-800">
                                    Investments in the securities market are subject to market risks. Please read all related documents carefully before making any investment.
                                </li>
                                <li>
                                    We do not guarantee any kind of assured returns. When you invest in the securities market, your capital is at risk, and the value of your portfolio can fluctuate. You may end up with less than your investment / traded amount.
                                </li>
                                <li>
                                    The fees (service charge) you pay to the company are solely for our services and not for investment purposes. All investments should be made through your own Demat account and managed independently.
                                </li>
                                <li>
                                    We will never ask for your Demat ID or password, and we strongly advise you not to share this information with anyone, including our employees. If you choose to share this information, we cannot be held responsible for any consequences.
                                </li>
                                <li>
                                    Please do not deposit any funds (payment) into person's personal accounts or accounts that are not listed on our official website.
                                </li>
                                <li>
                                    Never make payments for Demat account opening, handling, or any investment-related purposes unless specified on our website.
                                </li>
                                <li>
                                    We do not offer services that are not mentioned on our website. If you have any concerns or doubts regarding fraudulent activities, please refer to our terms and conditions or contact us directly at <span className="font-bold text-blue-900">+91 98755-90601</span> or via email: <span className="font-bold text-blue-900">support@sigmaonecapital.in</span>.
                                </li>
                            </ul>

                            {/* Checkbox and Agreement */}
                            <div className="pt-6 border-t border-gray-100 flex items-start gap-3 mt-6">
                                <input 
                                    id="agree-checkbox" 
                                    type="checkbox" 
                                    checked={isChecked}
                                    onChange={(e) => setIsChecked(e.target.checked)}
                                    className="w-5 h-5 rounded text-blue-900 border-gray-300 focus:ring-blue-800 mt-1 cursor-pointer"
                                />
                                <label htmlFor="agree-checkbox" className="text-sm text-gray-600 select-none cursor-pointer">
                                    I acknowledge that I have read, understood, and accept all the terms, conditions, and risks outlined in this Important Notice.
                                </label>
                            </div>
                        </>
                    )}
                </div>

                {/* Footer Buttons */}
                {!hasDeclined && (
                    <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row justify-end gap-3 border-t border-gray-100">
                        <button 
                            onClick={handleDecline} 
                            className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-gray-500 hover:text-red-600 rounded-full hover:bg-gray-100 transition duration-300"
                        >
                            Decline
                        </button>
                        <button 
                            onClick={handleAccept} 
                            disabled={!isChecked}
                            className={`w-full sm:w-auto px-8 py-3 text-sm font-bold text-white rounded-full transition duration-300 ${
                                isChecked 
                                    ? 'bg-blue-900 hover:bg-blue-800 shadow-md hover:shadow-lg transform hover:scale-105' 
                                    : 'bg-gray-300 cursor-not-allowed text-gray-500'
                            }`}
                        >
                            Accept & Proceed
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TermsPopup;
