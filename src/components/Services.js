import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentButton from "./PaymentButton";

const planData = {
  "Sigma Start": {
    title: "Starter wealth Advisory Plan",
    options: [
      {
        type: "Monthly",
        price: "₹7,000",
        features: [
          "3-4 equity research ideas/month",
          "Weekly market insights & updates",
          "Email support for query resolution",
          "Standard portfolio-tracking access"
        ],
      },
      {
        type: "Quarterly",
        price: "₹16,800",
        popular: true,
        features: [
          "All Monthly benefits included",
          "WhatsApp + Email support",
          "Quarterly portfolio overview",
          "Dedicated query response (24-48 hrs)"
        ],
      },
      {
        type: "Annual",
        price: "₹63,000",
        features: [
          "All Quarterly benefits included",
          "1-on-1 wealth consultation call",
          "Premium stock & sector insights",
          "Priority support & direct access"
        ],
      },
    ],
  },
  "Sigma Edge": {
    title: "Advanced Wealth advisory Plan",
    options: [
      {
        type: "Monthly",
        price: "₹10,000",
        features: [
          "4-5 high-conviction ideas/month",
          "Weekly updates & macro insights",
          "Priority WhatsApp + Email support",
          "Basic asset allocation suggestions"
        ],
      },
      {
        type: "Quarterly",
        price: "₹25,000",
        popular: true,
        features: [
          "All Monthly benefits included",
          "Portfolio-rebalancing support",
          "Quarterly strategy discussion call",
          "Detailed sector research reports"
        ],
      },
      {
        type: "Annual",
        price: "₹96,000",
        features: [
          "All Quarterly benefits included",
          "Dedicated investment analyst support",
          "End-to-end custom financial strategy",
          "Priority 1-on-1 strategy calls"
        ],
      },
    ],
  },
};

const Services = () => {
  const [activePlan, setActivePlan] = useState("Sigma Start");
  const navigate = useNavigate();

  return (
    <div id="services" className="bg-gray-50 py-16 md:py-24 relative z-0">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 uppercase tracking-wider mb-4">
            Our Packages
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 border-b-4 border-blue-900 rounded-full"></div>
          </div>
          <p className="text-xl md:text-2xl font-medium text-gray-600 max-w-3xl mx-auto">
            We are deeply committed to the growth and success of our clients. Select a tier that fits your wealth creation goals.
          </p>
        </div>

        {/* ---------- Tab Buttons ---------- */}
        <div className="flex flex-wrap justify-center gap-4 mb-16" data-aos="fade-up" data-aos-delay="100">
          {Object.keys(planData).map((plan) => (
            <button
              key={plan}
              onClick={() => setActivePlan(plan)}
              className={`px-8 py-3 text-lg font-bold rounded-full transition-all duration-300 shadow-md ${
                activePlan === plan
                  ? "bg-blue-900 text-white shadow-blue-900/40 transform scale-105"
                  : "bg-white text-blue-900 hover:bg-gray-100 hover:shadow-lg"
              }`}
            >
              {plan}
            </button>
          ))}
        </div>

        {/* ---------- Dynamic Plan Content ---------- */}
        <div className="animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold text-gray-800 tracking-tight">
              {planData[activePlan].title}
            </h3>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {planData[activePlan].options.map((opt, idx) => (
              <div
                key={idx}
                className={`bg-white border rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  opt.popular 
                    ? "border-blue-950 shadow-xl ring-2 ring-blue-900 ring-offset-2 scale-105 z-10 md:-translate-y-2" 
                    : "border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                {/* Popular Badge */}
                {opt.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Card Top Section: Title & Price */}
                <div>
                  <div className="text-center mb-6">
                    <p className="font-extrabold text-lg text-gray-500 uppercase tracking-widest mb-2">
                      {opt.type}
                    </p>
                    <div className="text-4xl font-black text-blue-900">
                      {opt.price}
                    </div>
                    <div className="w-12 border-b-2 border-gray-100 mx-auto mt-4"></div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8 text-sm text-left">
                    {opt.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium text-gray-700 leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pay Now Button */}
                <div className="mt-auto pt-4">
                  <PaymentButton onClick={() => navigate('/payment')} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default Services;

