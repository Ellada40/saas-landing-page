import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of teams already using CloudFlow to streamline their
          operations and boost productivity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-gray-100"
          >
            Start Free Trial <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 text-white border-white hover:bg-white/10"
          >
            Schedule Demo
          </Button>
        </div>
        <p className="text-blue-200 mt-6 text-sm">
          No credit card required · 14-day free trial · Cancel anytime
        </p>
      </div>
    </section>
  );
}
