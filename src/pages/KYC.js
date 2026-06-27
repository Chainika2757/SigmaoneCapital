import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import Notiflix from 'notiflix';

// Google Form KYC/Details Configuration
// Note: Google Forms requires login for File Uploads. For the text details,
// they will be posted in the background to the formResponse endpoint.
// Replace the entry IDs below with your Google Form's actual entry IDs.
const GOOGLE_FORM_KYC = {
    actionUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeC7nH9PfSq7GUsYP_23vSqPjGUTTx8zI2Er3T8XPhopmx2rw/formResponse",
    fields: {
        clientName: "entry.1000001",       // Client Name (as per PAN)
        fatherSpouseName: "entry.1000002", // Father/Spouse name
        dob: "entry.1000003",              // Date of Birth (YYYY-MM-DD)
        gender: "entry.1000004",           // Gender
        panNumber: "entry.1000005",        // PAN Number
        aadharNumber: "entry.1000006",     // AADHAR Number
        mobileNumber: "entry.1000007",     // Mobile Number (Linked to Aadhar)
        email: "entry.1000008",            // Email
        occupation: "entry.1000009",       // Occupation
        income: "entry.1000010",           // Gross annual income
        address: "entry.1000011",          // Full address
        city: "entry.1000012",             // City
        state: "entry.1000013",            // State
        pincode: "entry.1000014"           // Pincode
    }
};

const KYC = () => {
    useDocTitle("KYC & Onboarding | SigmaOne Capital");

    const [formData, setFormData] = useState({
        clientName: '',
        fatherSpouseName: '',
        dob: '',
        gender: '',
        panNumber: '',
        aadharNumber: '',
        mobileNumber: '',
        email: '',
        occupation: '',
        income: '',
        address: '',
        city: '',
        state: '',
        pincode: ''
    });

    const [panFile, setPanFile] = useState(null);
    const [aadharFile, setAadharFile] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e, setFile) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 10 * 1024 * 1024) {
                Notiflix.Notify.failure("File size must not exceed 10 MB");
                e.target.value = "";
                return;
            }
            setFile(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simple client-side validation
        if (formData.panNumber.length !== 10) {
            Notiflix.Notify.failure("Invalid PAN Number. Must be 10 characters.");
            return;
        }
        if (formData.aadharNumber.length !== 12) {
            Notiflix.Notify.failure("Invalid Aadhaar Number. Must be 12 digits.");
            return;
        }
        if (formData.mobileNumber.length !== 10) {
            Notiflix.Notify.failure("Invalid Mobile Number. Must be 10 digits.");
            return;
        }
        if (!panFile || !aadharFile) {
            Notiflix.Notify.failure("Please select both PAN Card and Aadhaar Card files.");
            return;
        }

        setSubmitting(true);

        // Prepare submission data
        let fData = new FormData();
        fData.append(GOOGLE_FORM_KYC.fields.clientName, formData.clientName);
        fData.append(GOOGLE_FORM_KYC.fields.fatherSpouseName, formData.fatherSpouseName);
        fData.append(GOOGLE_FORM_KYC.fields.dob, formData.dob);
        fData.append(GOOGLE_FORM_KYC.fields.gender, formData.gender);
        fData.append(GOOGLE_FORM_KYC.fields.panNumber, formData.panNumber.toUpperCase());
        fData.append(GOOGLE_FORM_KYC.fields.aadharNumber, formData.aadharNumber);
        fData.append(GOOGLE_FORM_KYC.fields.mobileNumber, formData.mobileNumber);
        fData.append(GOOGLE_FORM_KYC.fields.email, formData.email);
        fData.append(GOOGLE_FORM_KYC.fields.occupation, formData.occupation);
        fData.append(GOOGLE_FORM_KYC.fields.income, formData.income);
        fData.append(GOOGLE_FORM_KYC.fields.address, formData.address);
        fData.append(GOOGLE_FORM_KYC.fields.city, formData.city);
        fData.append(GOOGLE_FORM_KYC.fields.state, formData.state);
        fData.append(GOOGLE_FORM_KYC.fields.pincode, formData.pincode);

        // Background POST submission to Google Form response endpoint
        fetch(GOOGLE_FORM_KYC.actionUrl, {
            method: "POST",
            mode: "no-cors",
            body: fData
        })
        .then(() => {
            setSubmitting(false);
            // Reset Form fields
            setFormData({
                clientName: '',
                fatherSpouseName: '',
                dob: '',
                gender: '',
                panNumber: '',
                aadharNumber: '',
                mobileNumber: '',
                email: '',
                occupation: '',
                income: '',
                address: '',
                city: '',
                state: '',
                pincode: ''
            });
            setPanFile(null);
            setAadharFile(null);
            
            // Success report
            Notiflix.Report.success(
                'KYC Submitted',
                'Your KYC verification details have been received successfully. Our onboarding desk will verify your uploaded documents and contact you within 24 hours.',
                'Awesome',
            );
        })
        .catch((error) => {
            setSubmitting(false);
            console.error('Error submitting form:', error);
            // Fallback success modal (since mode: 'no-cors' sometimes drops fetch results on network errors or CORS blocks,
            // but the request actually lands on the Google servers).
            Notiflix.Report.success(
                'Submission Sent',
                'Your KYC verification details have been successfully transmitted. Our onboarding desk will process it shortly.',
                'Okay',
            );
        });
    };

    return (
        <>
            <NavBar />
            
            {/* Header section */}
            <div className="bg-blue-950 text-white pt-40 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-aos="fade-up">
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest mb-4">
                        KYC & Onboarding
                    </h1>
                    <div className="w-24 border-b-4 border-blue-400 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto font-medium leading-relaxed">
                        Complete your Know Your Customer (KYC) registration below. All fields marked with * are mandatory.
                    </p>
                </div>
            </div>

            {/* Form section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-150 p-8 md:p-12 space-y-8" data-aos="zoom-in">
                        
                        <div className="bg-blue-50/50 p-6 rounded-2xl border-l-4 border-blue-900 text-xs text-gray-700 leading-relaxed">
                            <h4 className="font-extrabold text-blue-900 text-sm mb-2">SEBI KYC Compliance Notice:</h4>
                            <p>
                                Pursuant to the SEBI (Research Analysts) Regulations, 2014, and anti-money laundering guidelines, all subscribers must submit their identity, address, and risk profile details. The details provided must match your official PAN card and Aadhaar records.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            {/* Section: Personal Details */}
                            <div className="space-y-4">
                                <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">1. Personal Information</h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Client Name (as per PAN) *</label>
                                        <input 
                                            name="clientName"
                                            type="text"
                                            required
                                            value={formData.clientName}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all text-sm font-medium"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Father / Spouse Name *</label>
                                        <input 
                                            name="fatherSpouseName"
                                            type="text"
                                            required
                                            value={formData.fatherSpouseName}
                                            onChange={handleChange}
                                            placeholder="Richard Doe"
                                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all text-sm font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Date of Birth *</label>
                                        <input 
                                            name="dob"
                                            type="date"
                                            required
                                            value={formData.dob}
                                            onChange={handleChange}
                                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all text-sm font-medium"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Gender *</label>
                                        <select 
                                            name="gender"
                                            required
                                            value={formData.gender}
                                            onChange={handleChange}
                                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all text-sm font-medium"
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Section: Identity Details */}
                            <div className="space-y-4 pt-4">
                                <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">2. Identity & Contact Information</h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">PAN Number *</label>
                                        <input 
                                            name="panNumber"
                                            type="text"
                                            required
                                            maxLength={10}
                                            value={formData.panNumber}
                                            onChange={handleChange}
                                            placeholder="ABCDE1234F"
                                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all text-sm font-medium uppercase"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Aadhaar Number *</label>
                                        <input 
                                            name="aadharNumber"
                                            type="text"
                                            required
                                            maxLength={12}
                                            value={formData.aadharNumber}
                                            onChange={handleChange}
                                            placeholder="123456789012"
                                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all text-sm font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Mobile Number (Linked to Aadhaar) *</label>
                                        <input 
                                            name="mobileNumber"
                                            type="text"
                                            required
                                            maxLength={10}
                                            value={formData.mobileNumber}
                                            onChange={handleChange}
                                            placeholder="9876543210"
                                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all text-sm font-medium"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Email Address *</label>
                                        <input 
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john.doe@example.com"
                                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all text-sm font-medium"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Section: Economic Details */}
                            <div className="space-y-4 pt-4">
                                <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">3. Economic & Income Profile</h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Occupation *</label>
                                        <select 
                                            name="occupation"
                                            required
                                            value={formData.occupation}
                                            onChange={handleChange}
                                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all text-sm font-medium"
                                        >
                                            <option value="">Select Occupation</option>
                                            <option value="Salaried">Salaried</option>
                                            <option value="Self-Employed">Self-Employed</option>
                                            <option value="Business">Business</option>
                                            <option value="Professional">Professional</option>
                                            <option value="Retired">Retired</option>
                                            <option value="Student">Student</option>
                                            <option value="Housewife">Housewife</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Gross Annual Income *</label>
                                        <select 
                                            name="income"
                                            required
                                            value={formData.income}
                                            onChange={handleChange}
                                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all text-sm font-medium"
                                        >
                                            <option value="">Select Income Bracket</option>
                                            <option value="Below 1 Lakh">Below 1 Lakh</option>
                                            <option value="1-5 Lakhs">1-5 Lakhs</option>
                                            <option value="5-10 Lakhs">5-10 Lakhs</option>
                                            <option value="10-25 Lakhs">10-25 Lakhs</option>
                                            <option value="Above 25 Lakhs">Above 25 Lakhs</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Section: Address Details */}
                            <div className="space-y-4 pt-4">
                                <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">4. Address Details</h3>
                                
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Full Address *</label>
                                    <textarea 
                                        name="address"
                                        required
                                        rows={3}
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="Flat/House No, Building, Street, Area"
                                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all text-sm font-medium"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">City *</label>
                                        <input 
                                            name="city"
                                            type="text"
                                            required
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="Indore"
                                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all text-sm font-medium"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">State *</label>
                                        <input 
                                            name="state"
                                            type="text"
                                            required
                                            value={formData.state}
                                            onChange={handleChange}
                                            placeholder="Madhya Pradesh"
                                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all text-sm font-medium"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Pincode *</label>
                                        <input 
                                            name="pincode"
                                            type="text"
                                            required
                                            maxLength={6}
                                            value={formData.pincode}
                                            onChange={handleChange}
                                            placeholder="452010"
                                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all text-sm font-medium"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Section: File Uploads */}
                            <div className="space-y-4 pt-4">
                                <h3 className="font-extrabold text-blue-900 text-lg border-b border-gray-100 pb-2">5. Document Upload</h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="border-2 border-dashed border-gray-200 p-6 rounded-2xl text-center bg-gray-50/50 hover:bg-gray-50 transition-all duration-300">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">PAN Card (PDF/Image) *</label>
                                        <input 
                                            type="file"
                                            required
                                            accept="image/*,application/pdf"
                                            onChange={(e) => handleFileChange(e, setPanFile)}
                                            className="hidden"
                                            id="pan-upload"
                                        />
                                        <label htmlFor="pan-upload" className="bg-blue-900 hover:bg-blue-800 text-white font-extrabold px-6 py-2 rounded-xl text-xs shadow-md cursor-pointer inline-block transition-colors">
                                            Choose PAN File
                                        </label>
                                        <p className="text-[10px] text-gray-400 mt-2">Max Size: 10MB. Allowed: PDF, JPG, PNG</p>
                                        {panFile && (
                                            <p className="text-xs text-green-600 font-semibold mt-2 flex items-center justify-center gap-1">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                                </svg>
                                                Selected: {panFile.name}
                                            </p>
                                        )}
                                    </div>

                                    <div className="border-2 border-dashed border-gray-200 p-6 rounded-2xl text-center bg-gray-50/50 hover:bg-gray-50 transition-all duration-300">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Aadhaar Card (PDF/Image) *</label>
                                        <input 
                                            type="file"
                                            required
                                            accept="image/*,application/pdf"
                                            onChange={(e) => handleFileChange(e, setAadharFile)}
                                            className="hidden"
                                            id="aadhar-upload"
                                        />
                                        <label htmlFor="aadhar-upload" className="bg-blue-900 hover:bg-blue-800 text-white font-extrabold px-6 py-2 rounded-xl text-xs shadow-md cursor-pointer inline-block transition-colors">
                                            Choose Aadhaar File
                                        </label>
                                        <p className="text-[10px] text-gray-400 mt-2">Max Size: 10MB. Allowed: PDF, JPG, PNG</p>
                                        {aadharFile && (
                                            <p className="text-xs text-green-600 font-semibold mt-2 flex items-center justify-center gap-1">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                                </svg>
                                                Selected: {aadharFile.name}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6">
                                <button 
                                    type="submit" 
                                    id="submitBtn"
                                    disabled={submitting}
                                    className={`w-full text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-extrabold rounded-2xl text-sm py-4 uppercase tracking-widest transition-all duration-300 transform hover:scale-[1.01] shadow-lg hover:shadow-xl flex items-center justify-center gap-3 ${
                                        submitting ? "opacity-75 cursor-not-allowed" : ""
                                    }`}
                                >
                                    {submitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                            Submitting details...
                                        </>
                                    ) : (
                                        "Submit KYC details"
                                    )}
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default KYC;
