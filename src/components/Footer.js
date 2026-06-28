import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white pt-16 pb-8 border-t border-blue-950 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main footer grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    
                    {/* Column 1: Company Profile */}
                    <div className="space-y-4">
                        <Link to="/" className="inline-block border-b-2 border-white pb-1 hover:opacity-90 transition-opacity">
                            <h3 className="font-extrabold text-2xl tracking-wider">Sigmaone Capital</h3>
                        </Link>
                        <p className="text-xs text-blue-200 leading-snug">
                            SMARTER MOVES • STRONGER OUTCOMES
                        </p>
                        <div className="text-xs text-blue-100 space-y-2 pt-2">
                            <p className="text-sm font-bold text-white mb-1">SEBI Registration Number:</p>
                            <p className="text-sm bg-blue-950 px-3 py-1.5 rounded-lg w-fit font-extrabold font-mono tracking-wider text-blue-300">INH000027812</p>
                            <p className="font-semibold text-white mt-4">Office Address:</p>
                            <p className="leading-relaxed">
                                903, A-1 Sector, Scheme-136, Niranjanpur, Indore, Madhya Pradesh - 452010
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-bold text-white text-lg mb-4 border-b border-blue-800 pb-2">Quick Links</h4>
                        <ul className="text-xs space-y-3 text-blue-200">
                            <li>
                                <HashLink smooth to="/#hero" className="hover:text-white hover:pl-1 transition-all duration-200">Home</HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/#about" className="hover:text-white hover:pl-1 transition-all duration-200">About Us</HashLink>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-white hover:pl-1 transition-all duration-200">Our Services</Link>
                            </li>
                            <li>
                                <Link to="/trading-solutions" className="hover:text-white hover:pl-1 transition-all duration-200">Trading Solutions</Link>
                            </li>
                            <li>
                                <Link to="/complaint-status" className="hover:text-white hover:pl-1 transition-all duration-200">Complaint Status</Link>
                            </li>
                            <li>
                                <Link to="/kyc" className="hover:text-white hover:pl-1 transition-all duration-200">KYC Verification</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Legal Disclosures */}
                    <div>
                        <h4 className="font-bold text-white text-lg mb-4 border-b border-blue-800 pb-2">Useful Links</h4>
                        <ul className="text-xs space-y-3 text-blue-200">
                            <li>
                                <Link to="/legal/disclaimer" className="hover:text-white hover:pl-1 transition-all duration-200">Disclaimer</Link>
                            </li>
                            <li>
                                <Link to="/legal/disclosure" className="hover:text-white hover:pl-1 transition-all duration-200">Disclosure</Link>
                            </li>
                            <li>
                                <Link to="/legal/grievance" className="hover:text-white hover:pl-1 transition-all duration-200">Grievance Redressal</Link>
                            </li>
                            <li>
                                <Link to="/legal/investor-charter" className="hover:text-white hover:pl-1 transition-all duration-200">Investor Charter</Link>
                            </li>
                            <li>
                                <Link to="/legal/investor-charges" className="hover:text-white hover:pl-1 transition-all duration-200">Investor Charges</Link>
                            </li>
                            <li>
                                <Link to="/legal/privacy-policy" className="hover:text-white hover:pl-1 transition-all duration-200">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/legal/refund-policy" className="hover:text-white hover:pl-1 transition-all duration-200">Refund Policy</Link>
                            </li>
                            <li>
                                <Link to="/legal/terms-conditions" className="hover:text-white hover:pl-1 transition-all duration-200">Terms & Conditions</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact & Socials */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-white text-lg border-b border-blue-800 pb-2">Get In Touch</h4>
                        <div className="text-xs space-y-3 text-blue-100">
                            <p><strong>Contact helplines:</strong> +91 98755-90601, +91 831 908 1061</p>
                            <p><strong>Support email:</strong> <a href="mailto:support@sigmaonecapital.in" className="hover:text-white underline">support@sigmaonecapital.in</a></p>
                            <p><strong>Working hours:</strong> Mon-Sat (09:00 AM - 05:00 PM)</p>
                        </div>
                        
                        <div className="pt-2">
                            <h5 className="font-bold text-white text-sm mb-3">Connect With Us</h5>
                            <div className="flex gap-4">
                                {/* X (Twitter) */}
                                <a 
                                    href="https://x.com/SigmaoneCapital" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="p-2 bg-blue-950 hover:bg-blue-800 text-white rounded-full transition duration-300 shadow hover:-translate-y-1 block"
                                    aria-label="X (Twitter)"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </a>

                                {/* Instagram */}
                                <a 
                                    href="https://www.instagram.com/sigmaonecapital" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="p-2 bg-blue-950 hover:bg-gradient-to-tr hover:from-yellow-600 hover:to-purple-600 text-white rounded-full transition duration-300 shadow hover:-translate-y-1 block"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <hr className="border-blue-800 mb-8" />

                {/* Bottom legal section: SEBI Warnings */}
                <div className="space-y-6 text-[10px] text-blue-200 text-justify">
                    <div className="p-4 bg-blue-950/50 rounded-2xl border border-blue-800/40 space-y-2">
                        <p className="font-bold text-white uppercase tracking-wider">Regulatory Compliance Disclosures:</p>
                        <p>
                            <strong>Standard Warning:</strong> "Registration granted by SEBI, enlistment with RAASB and certification from NISM is in no way guarantee performance of the intermediary or provide any assurance of returns to investors."
                        </p>
                        <p>
                            <strong>Market Warning:</strong> "Investments in securities market are subject to market risks. Read all the related documents carefully before investing."
                        </p>
                        <p>
                            Advisory service is restricted to research recommendations on selected equities, indices, and derivatives. We do not provide asset management or portfolio-guaranteed return services. All fees are paid strictly towards advisory packages.
                        </p>
                    </div>

                    <div className="text-center font-semibold py-2">
                        Copyright &copy; {new Date().getFullYear()} <Link to="/" className="text-white hover:underline">Sigmaone Capital</Link>. All rights reserved.
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
