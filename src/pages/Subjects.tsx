import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { subjects } from "@/lib/subjects";
import { ArrowRight } from "lucide-react";

export default function Subjects() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Choose Your Subject
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select from our comprehensive range of 12th standard subjects taught by expert tutors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {subjects.map((subject) => {
            const Icon = subject.icon;
            return (
              <Card
                key={subject.id}
                className="group hover:shadow-glow transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${subject.color}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${subject.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-card-foreground">
                    {subject.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {subject.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Tutor:</span> {subject.tutor}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Schedule:</span> {subject.schedule}
                    </p>
                  </div>
                  
                  <Button asChild className="w-full group-hover:shadow-md transition-all">
                    <Link to={`/subject/${subject.id}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
