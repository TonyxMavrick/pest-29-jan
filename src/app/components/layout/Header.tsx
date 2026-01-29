import { Link, useLocation } from "react-router";
import { Button } from "@/app/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white px-3 py-2 rounded-lg">
              <span className="text-2xl font-bold">UPE</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">Urban Pest</span>
              <span className="text-sm text-blue-600">Experts</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+18005551234" className="flex items-center text-blue-600 font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              (800) 555-1234
            </a>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a href="tel:+18005551234" className="flex items-center text-blue-600 font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                (800) 555-1234
              </a>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 w-full">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Free Quote
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
