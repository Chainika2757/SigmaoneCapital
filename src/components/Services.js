import { useState } from "react";

const planData = {
  SigmaStart: {
    title: "SigmaStart — Beginner Plan",
    options: [
      {
        type: "Monthly",
        price: "₹999",
        desc: "2 stock ideas/month, basic market insights, email support",
      },
      {
        type: "Quarterly",
        price: "₹2,499",
        desc: "6 stock ideas, beginner’s guide, WhatsApp QSA (weekends only)",
      },
      {
        type: "Annual",
        price: "₹8,999",
        desc: "30+ stock ideas, learning modules, community access",
      },
    ],
  },
  SigmaEdge: {
    title: "SigmaEdge — Intermediate Plan",
    options: [
      {
        type: "Monthly",
        price: "₹1,999",
        desc: "4 high-conviction ideas/month, weekly updates, sector picks",
      },
      {
        type: "Quarterly",
        price: "₹5,499",
        desc: "Portfolio-rebalancing support, email + WhatsApp support",
      },
      {
        type: "Annual",
        price: "₹19,999",
        desc: "70+ curated ideas, early access to new themes, 1-on-1 strategy call",
      },
    ],
  },
  SigmaElite: {
    title: "SigmaElite — HNIs / Ultra-premium",
    options: [
      {
        type: "Monthly",
        price: "₹7,999",
        desc: "Customized advisory, priority support, early access",
      },
      {
        type: "Quarterly",
        price: "₹21,999",
        desc: "Dedicated analyst support, deep portfolio reviews",
      },
      {
        type: "Annual",
        price: "₹34,999",
        desc: "End-to-end financial strategy, goal-based investing, webinars",
      },
    ],
  },
};

const Services = () => {
  const [activePlan, setActivePlan] = useState("SigmaStart");

  return (
    <div id="services" className="bg-gray-100 py-12">

      {/* Heading Section */}
      <section>
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Services
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>

          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            We are deeply committed to the growth and success of our clients.
          </h2>
        </div>

        {/* ---------- 3 TAB BUTTONS  ---------- */}

        <div className="flex justify-center gap-5 mt-12">
          {["SigmaStart", "SigmaEdge", "SigmaElite"].map((plan) => (
            <button
              key={plan}
              onClick={() => setActivePlan(plan)}
              className={`px-6 py-3 font-semibold rounded-lg border ${
                activePlan === plan
                  ? "bg-blue-900 text-white border-blue-900"
                  : "bg-white text-blue-900 border-blue-900"
              } transition`}
            >
              {plan}
            </button>
          ))}
        </div>

        {/* ---------- Dynamic Plan Content ---------- */}
<div className="mt-10 px-12">
  <h3 className="text-2xl font-bold text-blue-900 mb-4">
    {planData[activePlan].title}
  </h3>

  <div className="grid lg:grid-cols-2 gap-8">
    {planData[activePlan].options.map((opt, idx) => (
      <div
        key={idx}
        className="bg-white shadow-2xl rounded-xl border border-gray-200 p-8 h-auto hover:shadow-blue-200 transition-all"
      >
        <div className="bg-blue-900 text-white font-bold px-4 py-2 rounded-lg inline-block text-sm mb-4">
          {opt.type}
        </div>

        <p className="text-4xl font-extrabold text-blue-900 mb-4">
          {opt.price}
        </p>

        <p className="text-gray-700 text-lg font-medium leading-relaxed">
          {opt.desc}
        </p>
      </div>
    ))}
  </div>
</div>

      </section>
    </div>
  );
};

export default Services;
