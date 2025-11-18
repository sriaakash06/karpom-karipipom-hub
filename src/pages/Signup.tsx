import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/Navbar";
import { GraduationCap } from "lucide-react";

export default function Signup() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-gradient-primary">
                <GraduationCap className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2 text-foreground">Create Account</h1>
            <p className="text-muted-foreground">Join Karpom Karipipom today</p>
          </div>

          <Card className="p-6">
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Create a password" />
              </div>
              <div>
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" placeholder="Confirm your password" />
              </div>
              <Button className="w-full" asChild>
                <Link to="/dashboard">Sign Up</Link>
              </Button>
            </form>
          </Card>

          <p className="text-center mt-6 text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline font-semibold">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
