import {
  Zap,
  Shield,
  Users,
  BarChart3,
  Cloud,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Experience blazing-fast performance with our optimized infrastructure and caching technology.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level encryption and security protocols to keep your data safe and compliant.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work together seamlessly with real-time collaboration tools and shared workspaces.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Get actionable insights with powerful analytics and customizable reporting dashboards.",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description:
      "Access your data anywhere, anytime with automatic cloud synchronization.",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description:
      "Fully responsive design that works perfectly on all devices and screen sizes.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-gray-600">
            Powerful features designed to help you work smarter, not harder.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon className="text-blue-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
