import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Karpom Karipipom</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/subjects" className="text-foreground hover:text-primary transition-colors">
              Subjects
            </Link>
            <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link to="/login" className="text-foreground hover:text-primary transition-colors">
              Login
            </Link>
            <Button asChild>
              <Link to="/login">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            <Link
              to="/subjects"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Subjects
            </Link>
            <Link
              to="/dashboard"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/login"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Button asChild className="w-full">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
