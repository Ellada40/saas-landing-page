import { Check } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Perfect for individuals and small projects",
    features: [
      "Up to 5 team members",
      "10 GB storage",
      "Basic analytics",
      "Email support",
      "Mobile apps",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "79",
    description: "Ideal for growing teams and businesses",
    features: [
      "Up to 25 team members",
      "100 GB storage",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "199",
    description: "For large organizations with custom needs",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "AI-powered insights",
      "24/7 dedicated support",
      "Custom development",
      "SLA guarantee",
      "Advanced security",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the perfect plan for your needs. All plans include a 14-day
            free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular
                  ? "border-2 border-blue-600 shadow-xl scale-105"
                  : "border border-gray-200 shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? ""
                    : "bg-gray-900 hover:bg-gray-800"
                }`}
                size="lg"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-gray-600 mt-12">
          All plans include a 14-day free trial. No credit card required.{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Compare all features →
          </a>
        </p>
      </div>
    </section>
  );
}
