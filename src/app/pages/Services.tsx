import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Link } from "react-router";
import { Home, Building2, Bug, Shield, Rat, Leaf, CheckCircle } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: "Residential Pest Control",
      description: "Comprehensive pest management solutions for your home and family.",
      features: [
        "Inspection and assessment",
        "Interior and exterior treatment",
        "Preventive measures",
        "Follow-up services",
        "Customized treatment plans",
      ],
    },
    {
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      title: "Commercial Pest Control",
      description: "Professional pest management for businesses and commercial properties.",
      features: [
        "Restaurants and food service",
        "Office buildings",
        "Warehouses and storage",
        "Retail establishments",
        "Property management",
      ],
    },
    {
      icon: <Bug className="w-12 h-12 text-blue-600" />,
      title: "Bed Bug Treatment",
      description: "Complete elimination of bed bugs using advanced heat and chemical treatments.",
      features: [
        "Thermal heat treatment",
        "Chemical treatment options",
        "Inspection with K9 detection",
        "Mattress encasements",
        "Follow-up inspections",
      ],
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Termite Inspection & Treatment",
      description: "Protect your property investment with thorough termite services.",
      features: [
        "Comprehensive inspections",
        "Termite treatment options",
        "Preventive treatments",
        "Wood repair services",
        "Annual inspection plans",
      ],
    },
    {
      icon: <Rat className="w-12 h-12 text-blue-600" />,
      title: "Rodent Control",
      description: "Effective solutions for mice and rat infestations.",
      features: [
        "Trapping and removal",
        "Entry point sealing",
        "Sanitation recommendations",
        "Bait stations",
        "Ongoing monitoring",
      ],
    },
    {
      icon: <Leaf className="w-12 h-12 text-blue-600" />,
      title: "Integrated Pest Management",
      description: "Eco-friendly, comprehensive approach to pest control.",
      features: [
        "Environmental assessment",
        "Non-chemical solutions",
        "Habitat modification",
        "Biological controls",
        "Sustainable practices",
      ],
    },
  ];

  const commonPests = [
    "Ants",
    "Cockroaches",
    "Spiders",
    "Termites",
    "Bed Bugs",
    "Rodents",
    "Mosquitoes",
    "Fleas & Ticks",
    "Wasps & Bees",
    "Silverfish",
    "Moths",
    "Beetles",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Pest Control Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive pest management solutions tailored to your specific needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Pests Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pests We Control
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We have expertise in treating and eliminating all common household and commercial pests
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {commonPests.map((pest, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <Bug className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">{pest}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we eliminate your pest problem</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Inspection</h3>
              <p className="text-gray-600">
                Thorough examination of your property to identify pest issues and entry points
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Plan</h3>
              <p className="text-gray-600">
                Development of a tailored treatment plan based on your specific needs
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Treatment</h3>
              <p className="text-gray-600">
                Application of safe, effective treatments using eco-friendly products
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Follow-Up</h3>
              <p className="text-gray-600">
                Scheduled follow-up visits to ensure complete elimination and prevention
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">Satisfaction Guaranteed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Emergency Services</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">EPA</div>
              <p className="text-gray-600">Certified Technicians</p>
            </div>
          </div>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Pest Control Services?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free inspection and customized solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">Schedule Inspection</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
              <a href="tel:+18005551234">Call Now: (800) 555-1234</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
