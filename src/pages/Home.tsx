import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { ArrowRight, BookOpen, Users, Trophy, Clock } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Karpom Karipipom
              </h1>
              <p className="text-xl text-muted-foreground">
                Smart Learning Platform for 12th Standard Students
              </p>
              <p className="text-lg text-muted-foreground">
                Join expert-led classes, track your progress, and excel in your board exams with our integrated tutor management system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg">
                  <Link to="/subjects">
                    Explore Subjects <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg">
                  <Link to="/login">Login</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-20"></div>
              <img
                src={heroImage}
                alt="Students learning"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose Karpom Karipipom?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-glow transition-all duration-300">
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">11 Subjects</h3>
              <p className="text-muted-foreground">
                Complete coverage of all 12th standard subjects with expert tutors
              </p>
            </Card>

            <Card className="p-6 hover:shadow-glow transition-all duration-300">
              <Users className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Live Classes</h3>
              <p className="text-muted-foreground">
                Interactive online sessions via Google Meet with instant doubt clearing
              </p>
            </Card>

            <Card className="p-6 hover:shadow-glow transition-all duration-300">
              <Trophy className="h-12 w-12 text-success mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Gamified Learning</h3>
              <p className="text-muted-foreground">
                Earn badges, track streaks, and compete on leaderboards
              </p>
            </Card>

            <Card className="p-6 hover:shadow-glow transition-all duration-300">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Smart Scheduling</h3>
              <p className="text-muted-foreground">
                AI-powered class scheduling based on your availability
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of students who are already excelling with Karpom Karipipom
            </p>
            <Button asChild size="lg" className="text-lg">
              <Link to="/login">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Karpom Karipipom. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
