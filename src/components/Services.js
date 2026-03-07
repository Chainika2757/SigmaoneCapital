import { useState } from "react";
import { Link } from "react-router-dom";

const planData = {
  SigmaStart: {
    title: "Beginner Plan",
    options: [
      {
        type: "Monthly",
        price: "₹999",
        features: [
          "2 stock ideas/month",
          "Basic market insights",
          "Email support",
        ],
      },
      {
        type: "Quarterly",
        price: "₹2,499",
        popular: true,
        features: [
          "6 stock ideas",
          "Beginner’s guide",
          "WhatsApp Q&A (weekends only)",
        ],
      },
      {
        type: "Annual",
        price: "₹8,999",
        features: [
          "30+ stock ideas",
          "Learning modules",
          "Community access",
        ],
      },
    ],
  },
  SigmaEdge: {
    title: "Intermediate Plan",
    options: [
      {
        type: "Monthly",
        price: "₹1,999",
        features: [
          "4 high-conviction ideas/month",
          "Weekly updates",
          "Sector picks",
        ],
      },
      {
        type: "Quarterly",
        price: "₹5,499",
        popular: true,
        features: [
          "Portfolio-rebalancing support",
          "Email + WhatsApp support",
        ],
      },
      {
        type: "Annual",
        price: "₹19,999",
        features: [
          "70+ curated ideas",
          "Early access to new themes",
          "1-on-1 strategy call",
        ],
      },
    ],
  },
  SigmaElite: {
    title: "HNIs / Ultra-premium",
    options: [
      {
        type: "Monthly",
        price: "₹7,999",
        features: [
          "Customized advisory",
          "Priority support",
          "Early access",
        ],
      },
      {
        type: "Quarterly",
        price: "₹21,999",
        popular: true,
        features: [
          "Dedicated analyst support",
          "Deep portfolio reviews",
        ],
      },
      {
        type: "Annual",
        price: "₹34,999",
        features: [
          "End-to-end financial strategy",
          "Goal-based investing",
          "Webinars",
        ],
      },
    ],
  },
};

const Services = () => {
  const [activePlan, setActivePlan] = useState("SigmaStart");

  return (
    <div id="services" className="bg-gray-50 py-16 md:py-24">
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

        {/* ---------- 3 TAB BUTTONS  ---------- */}
        <div className="flex flex-wrap justify-center gap-4 mb-16" data-aos="fade-up" data-aos-delay="100">
          {["SigmaStart", "SigmaEdge", "SigmaElite"].map((plan) => (
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
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-800">
              {planData[activePlan].title}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {planData[activePlan].options.map((opt, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col bg-white rounded-2xl shadow-xl border border-gray-100 p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  opt.popular ? 'ring-2 ring-blue-900 transform scale-105' : ''
                }`}
              >
                {/* Popular Badge */}
                {opt.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-orange-500 text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6 border-b border-gray-100 pb-6 text-center">
                  <span className="inline-block bg-blue-50 text-blue-900 font-semibold px-4 py-1 rounded-full text-sm mb-4">
                    {opt.type}
                  </span>
                  <div className="flex justify-center items-baseline text-5xl font-extrabold text-blue-900">
                    {opt.price}
                  </div>
                </div>

                {/* Features List */}
                <ul className="flex-1 space-y-4 mb-8">
                  {opt.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className={`mt-auto w-full py-3 px-6 rounded-xl font-bold text-center transition-colors duration-300 ${
                    opt.popular
                      ? 'bg-blue-900 text-white hover:bg-blue-800 shadow-lg shadow-blue-900/30'
                      : 'bg-blue-50 text-blue-900 hover:bg-blue-100'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default Services;
