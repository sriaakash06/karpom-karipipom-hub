import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/Navbar";
import { GraduationCap } from "lucide-react";

export default function Login() {
  const [role, setRole] = useState("student");

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
            <h1 className="text-3xl font-bold mb-2 text-foreground">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to access your dashboard</p>
          </div>

          <Card className="p-6">
            <Tabs defaultValue="student" onValueChange={setRole}>
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="student">Student</TabsTrigger>
                <TabsTrigger value="tutor">Tutor</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
              </TabsList>

              <TabsContent value="student">
                <LoginForm role="student" />
              </TabsContent>

              <TabsContent value="tutor">
                <LoginForm role="tutor" />
              </TabsContent>

              <TabsContent value="admin">
                <LoginForm role="admin" />
              </TabsContent>
            </Tabs>
          </Card>

          <p className="text-center mt-6 text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary hover:underline font-semibold">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function LoginForm({ role }: { role: string }) {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor={`${role}-email`}>Email</Label>
        <Input
          id={`${role}-email`}
          type="email"
          placeholder={`Enter your ${role} email`}
        />
      </div>
      <div>
        <Label htmlFor={`${role}-password`}>Password</Label>
        <Input
          id={`${role}-password`}
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <Button className="w-full" asChild>
        <Link to="/dashboard">Sign In as {role.charAt(0).toUpperCase() + role.slice(1)}</Link>
      </Button>
      <Button variant="link" className="w-full">
        Forgot password?
      </Button>
    </form>
  );
}
