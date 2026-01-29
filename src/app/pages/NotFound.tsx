import { Button } from "@/app/components/ui/button";
import { Link } from "react-router";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center px-4">
      <div className="text-center text-white">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It may have been moved or deleted.
        </p>
        <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
          <Link to="/">
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
