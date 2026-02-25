import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content:
      "CloudFlow has transformed how our team collaborates. The intuitive interface and powerful features have increased our productivity by 40%.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateCo",
    content:
      "The analytics dashboard is incredible. We can now make data-driven decisions faster than ever before. Highly recommend!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Design Studio",
    content:
      "Best investment we've made for our agency. The customer support is outstanding and the platform is rock solid.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Loved by Teams Worldwide
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. See what our customers have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <ImageWithFallback
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime SLA</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
