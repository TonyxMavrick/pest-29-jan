import { Link } from "react-router";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { CheckCircle2, Shield, Clock, Users, Bug, Home as HomeIcon, Building2, Calendar, Search, ClipboardCheck, Wrench, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Home() {
  const services = [
    {
      icon: <HomeIcon className="w-12 h-12 text-blue-600" />,
      title: "Residential Pest Control",
      description: "Protect your home and family from unwanted pests with our comprehensive residential services.",
    },
    {
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      title: "Commercial Pest Control",
      description: "Keep your business pest-free with customized commercial pest management solutions.",
    },
    {
      icon: <Bug className="w-12 h-12 text-blue-600" />,
      title: "Bed Bug Treatment",
      description: "Complete elimination of bed bugs using proven methods and eco-friendly treatments.",
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Termite Inspection",
      description: "Thorough termite inspections and treatments to protect your property investment.",
    },
  ];

  const features = [
    { text: "EPA Certified Professionals" },
    { text: "Safe & Eco-Friendly Solutions" },
    { text: "24/7 Emergency Services" },
    { text: "100% Satisfaction Guaranteed" },
  ];

  const howWeWorkSteps = [
    {
      icon: <Search className="w-12 h-12 text-white" />,
      step: "Step 1",
      title: "Free Inspection",
      description: "We conduct a thorough inspection of your property to identify pest issues, entry points, and potential problem areas. Our certified technicians assess the severity and type of infestation.",
    },
    {
      icon: <ClipboardCheck className="w-12 h-12 text-white" />,
      step: "Step 2",
      title: "Custom Treatment Plan",
      description: "Based on our findings, we develop a tailored treatment plan specifically designed for your situation. We explain all options and recommend the most effective and safe solution.",
    },
    {
      icon: <Wrench className="w-12 h-12 text-white" />,
      step: "Step 3",
      title: "Professional Treatment",
      description: "Our experienced technicians apply EPA-approved treatments using state-of-the-art equipment. We use eco-friendly products that are safe for your family and pets while being tough on pests.",
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-white" />,
      step: "Step 4",
      title: "Follow-Up & Prevention",
      description: "We schedule follow-up visits to ensure complete elimination of pests. We also provide recommendations and preventive measures to keep your property pest-free long-term.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, NY",
      rating: 5,
      text: "Urban Pest Experts saved us from a severe termite problem. Their team was professional, thorough, and effective. Highly recommended!",
    },
    {
      name: "Michael Chen",
      location: "Los Angeles, CA",
      rating: 5,
      text: "We've been using their services for our restaurant for over 3 years. Always reliable, professional, and effective. Great value!",
    },
    {
      name: "Emily Rodriguez",
      location: "Chicago, IL",
      rating: 5,
      text: "Fast response time and excellent service. They handled our bed bug issue quickly and efficiently. Very satisfied!",
    },
  ];

  const blogPosts = [
    {
      title: "5 Signs You Have a Termite Infestation",
      excerpt: "Learn to identify the early warning signs of termite damage before it's too late. Protect your home with this essential guide.",
      image: "https://images.unsplash.com/photo-1688940738708-5a59256ab294?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXJtaXRlJTIwaW5zcGVjdGlvbiUyMHdvb2R8ZW58MXx8fHwxNzY5Njc5NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "January 25, 2026",
      category: "Prevention",
    },
    {
      title: "Eco-Friendly Pest Control Solutions",
      excerpt: "Discover safe and effective pest control methods that protect your family and the environment without compromising effectiveness.",
      image: "https://images.unsplash.com/photo-1674485135526-b5a686b33dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXN0JTIwY29udHJvbCUyMHByb2Zlc3Npb25hbCUyMHNwcmF5aW5nfGVufDF8fHx8MTc2OTY3OTQyOHww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "January 22, 2026",
      category: "Tips & Tricks",
    },
    {
      title: "How to Prevent Rodents This Winter",
      excerpt: "Winter is prime time for rodent infestations. Learn practical steps to keep mice and rats out of your home this season.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2OTU5MTQ1OHww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "January 18, 2026",
      category: "Seasonal",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Expert Pest Control Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Protecting homes and businesses across the USA with safe, effective pest management
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-300" />
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758687126864-96b61e1b3af0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBoYXBweSUyMGhvbWUlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2OTY3OTQyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Happy family in pest-free home"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive pest control solutions tailored to your specific needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our step-by-step process to ensure your property is pest-free
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howWeWorkSteps.map((step, index) => (
              <div key={index} className="bg-blue-600 text-white rounded-lg p-6 hover:shadow-xl transition-shadow">
                <div className="mb-4">{step.icon}</div>
                <div className="text-sm font-semibold text-blue-200 mb-2">{step.step}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-blue-100">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1674485135526-b5a686b33dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXN0JTIwY29udHJvbCUyMHByb2Zlc3Npb25hbCUyMHNwcmF5aW5nfGVufDF8fHx8MTc2OTY3OTQyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional pest control expert"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Urban Pest Experts?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 10 years of experience, we've become the trusted choice for pest control in the USA.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully licensed, bonded, and insured for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Response Time</h3>
                    <p className="text-gray-600">Same-day service available for urgent pest control needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                    <p className="text-gray-600">Highly trained technicians with years of industry experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <div className="flex space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
            <p className="text-xl text-gray-600">Pest control tips, news, and advice</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="link" className="p-0 text-blue-600">Read More →</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free inspection and quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
              <a href="tel:+18005551234">Call (800) 555-1234</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}