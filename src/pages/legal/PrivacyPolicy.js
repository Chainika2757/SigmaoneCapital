import React from 'react';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';
import { useDocTitle } from '../../components/CustomHook';

const PrivacyPolicy = () => {
    useDocTitle("Privacy Policy | SigmaOne Capital");

    return (
        <>
            <NavBar />
            <div className="bg-gray-50 pt-36 pb-16 min-h-screen">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-10" data-aos="fade-up">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 uppercase tracking-wide">
                            Privacy Policy
                        </h1>
                        <div className="w-20 border-b-4 border-blue-900 rounded-full mx-auto mt-4"></div>
                        <p className="text-sm font-semibold text-gray-500 mt-3">
                            Data Collection, Usage, and Protection Standards
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-150 text-gray-700 leading-relaxed space-y-6 text-justify text-sm" data-aos="fade-up" data-aos-delay="100">
                        <p>
                            <a href="https://www.sigmaonecapital.in" className="text-blue-600 hover:underline">www.sigmaonecapital.in</a> (hereinafter referred to as "website/www.sigmaonecapital.in") is owned by Mr. Chakrapaani Mishra, the Proprietor of Sigmaone Capital. We offer trading recommendations on equity, derivatives and commodity and co-index derivatives, equity, commodity, and related derivatives, primarily to clients/subscribers on a subscription basis. It is essential to read the full disclaimers and disclosures available on the website.
                        </p>

                        <div className="space-y-4">
                            <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">
                                1. Data Collection
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                <li>We collect personal information such as PAN card details, name, email, phone number, and state for KYC purposes before you sign up for our services.</li>
                                <li>This information is collected by our in-house team member, Sigmaone Capital.</li>
                            </ul>
                        </div>

                        <hr className="border-gray-100 my-6" />

                        <div className="space-y-4">
                            <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">
                                2. Data Retention
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                <li>We retain records of the services provided to assist our clients and comply with legal requirements.</li>
                                <li>By registering your mobile number or showing interest in our advertising campaigns, you consent to be contacted by our team members or receive WhatsApp/SMS messages related to our services.</li>
                            </ul>
                        </div>

                        <hr className="border-gray-100 my-6" />

                        <div className="space-y-4">
                            <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">
                                3. Confidentiality and Security
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                <li>Personal information is safeguarded and will not be disclosed unless authorized by the client or required by law.</li>
                                <li>Access to client data is restricted to employees and associates directly involved in delivering and administering our services.</li>
                                <li>Our employees are trained on the importance of confidentiality and customer privacy.</li>
                                <li>We ensure that all documents containing client data or personal information are destroyed or made unreadable before disposal.</li>
                            </ul>
                        </div>

                        <hr className="border-gray-100 my-6" />

                        <div className="space-y-4">
                            <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">
                                4. Continuous Monitoring
                            </h3>
                            <p>
                                We continuously monitor and update this Privacy Policy to ensure the protection of personal information. Please review this page periodically to keep abreast of any updates.
                            </p>
                        </div>

                        <hr className="border-gray-100 my-6" />

                        <div className="space-y-4">
                            <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">
                                5. Use of Personal Information
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                <li>Your personal information will only be used to provide the services you have subscribed to and will not be shared for any other purposes.</li>
                                <li>We do not engage in spamming or unsolicited communication.</li>
                            </ul>
                        </div>

                        <hr className="border-gray-150 my-6" />

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-xs text-gray-500">
                            If you have questions or concerns regarding our privacy practices, please contact us at <a href="mailto:support@sigmaonecapital.in" className="text-blue-600 hover:underline">support@sigmaonecapital.in</a> or call our support desk at +91 98755-90601 or +91 831 908 1061.
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
