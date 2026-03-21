import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentButton from "./PaymentButton";

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
                className={`card-3d ${opt.popular ? 'transform scale-105 z-10' : ''}`}
              >
                <div className="content">
                  
                  {/* Back Face (Features & Payment) */}
                  <div className="back">
                    <div className="back-content text-center">
                      <h3 className="text-xl font-bold mb-4">{opt.type} Features</h3>
                      
                      {/* Features List */}
                      <ul className="flex-1 space-y-3 mb-6 text-sm text-left px-2 w-full">
                        {opt.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="font-medium text-gray-800">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Pay Now Button */}
                      <PaymentButton onClick={() => navigate('/payment')} />
                    </div>
                  </div>

                  {/* Front Face (Pricing details) */}
                  <div className="front">
                    <div className="img-bg">
                      <div className="circle-blob"></div>
                      <div className="circle-blob" id="blob-right"></div>
                      <div class="circle-blob" id="blob-bottom"></div>
                    </div>

                    <div className="front-content relative z-10">
                      {/* Popular Badge */}
                      {opt.popular ? (
                        <small className="badge bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-md inline-block w-fit">
                          Most Popular
                        </small>
                      ) : (
                        <div></div>
                      )}

                      <div className="description mt-auto flex flex-col justify-between h-32">
                        <div className="title w-full flex justify-between tracking-tight items-center">
                          <p className="font-black text-xl text-blue-900 uppercase">
                            {opt.type}
                          </p>
                          <div className="text-2xl font-extrabold text-blue-900 border-b-2 border-blue-900">
                            {opt.price}
                          </div>
                        </div>
                        <p className="card-footer text-gray-500 mt-2 text-xs font-bold uppercase tracking-wider text-left">
                          {planData[activePlan].title}
                        </p>
                      </div>
                    </div>
                  </div>

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
