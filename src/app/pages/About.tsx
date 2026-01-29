import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Shield, Award, Users, Target } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: "Integrity",
      description: "We uphold the highest standards of honesty and ethical conduct in all our services.",
    },
    {
      icon: <Award className="w-10 h-10 text-blue-600" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our pest control services.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: "Customer Focus",
      description: "Your satisfaction is our top priority, and we go above and beyond to ensure it.",
    },
    {
      icon: <Target className="w-10 h-10 text-blue-600" />,
      title: "Results",
      description: "We deliver proven, effective solutions that eliminate pest problems permanently.",
    },
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "50K+", label: "Happy Customers" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Urban Pest Experts</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your trusted partner in professional pest control services since 2010
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Urban Pest Experts was founded in 2010 with a simple mission: to provide effective, safe,
                  and environmentally responsible pest control solutions to homes and businesses across the
                  United States.
                </p>
                <p>
                  What started as a small family-owned business has grown into one of the most trusted names
                  in pest control, serving over 50,000 satisfied customers. Our success is built on our
                  commitment to excellence, integrity, and customer satisfaction.
                </p>
                <p>
                  Today, we employ a team of highly trained, EPA-certified technicians who use the latest
                  techniques and eco-friendly products to protect your property from pests while keeping your
                  family and pets safe.
                </p>
                <p>
                  We're proud to be the go-to pest control solution for residential and commercial properties,
                  and we continue to innovate and improve our services every day.
                </p>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758522965291-36664fbdac9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXN0JTIwY29udHJvbCUyMGV4cGVydCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njk2Nzk0MzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Pest control professional at work"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To protect homes and businesses from pests through innovative, safe, and effective solutions
                while maintaining the highest standards of customer service and environmental responsibility.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 mb-6">
                To be the most trusted and preferred pest control company in the United States, known for our
                commitment to excellence, innovation, and customer satisfaction.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
              <p className="text-lg text-gray-600">
                We are committed to providing safe, effective, and environmentally responsible pest control
                solutions. We invest in ongoing training for our technicians, use the latest technology and
                methods, and continuously improve our services based on customer feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Experience the Urban Pest Experts difference</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certified Professionals</h3>
              <p className="text-gray-600">
                All our technicians are EPA-certified and undergo regular training to stay updated on the
                latest pest control methods and safety protocols.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eco-Friendly Solutions</h3>
              <p className="text-gray-600">
                We prioritize environmentally friendly products and methods that are safe for your family,
                pets, and the environment.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Guaranteed Results</h3>
              <p className="text-gray-600">
                We stand behind our work with a 100% satisfaction guarantee. If pests return, so do we—at no
                additional cost.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
