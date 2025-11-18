import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { subjects } from "@/lib/subjects";
import { ArrowLeft, Video, Calendar, User, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function SubjectDetail() {
  const { subjectId } = useParams();
  const { toast } = useToast();
  const subject = subjects.find((s) => s.id === subjectId);

  if (!subject) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Subject Not Found</h1>
          <Button asChild>
            <Link to="/subjects">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Subjects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleJoinClass = () => {
    // In a real app, this would capture student details and save attendance
    toast({
      title: "Joining Class",
      description: "Opening Google Meet link...",
    });
    window.open(subject.meetLink, "_blank");
  };

  const Icon = subject.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <Button asChild variant="outline" className="mb-6">
          <Link to="/subjects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Subjects
          </Link>
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${subject.color}`}>
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-2 text-card-foreground">
                    {subject.name}
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    {subject.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                  <User className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Tutor</p>
                    <p className="font-semibold text-foreground">{subject.tutor}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Schedule</p>
                    <p className="font-semibold text-foreground">{subject.schedule}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                  <Video className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Class Link</p>
                    <p className="font-semibold text-foreground truncate">{subject.meetLink}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Button size="lg" onClick={handleJoinClass} className="flex-1">
                  <Video className="mr-2 h-5 w-5" /> Join Live Class
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={subject.meetLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" /> Open in New Tab
                  </a>
                </Button>
              </div>
            </Card>

            {/* Class Materials */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-card-foreground">Class Materials</h2>
              <p className="text-muted-foreground">
                Study materials, assignments, and recordings will appear here after classes.
              </p>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-card-foreground">Quick Stats</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Classes Attended</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Attendance Rate</p>
                  <p className="text-2xl font-bold text-success">92%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Assignments Completed</p>
                  <p className="text-2xl font-bold text-foreground">8/10</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-card-foreground">Upcoming Classes</h3>
              <div className="space-y-3">
                <div className="p-3 bg-secondary rounded-lg">
                  <p className="font-semibold text-foreground">Next Class</p>
                  <p className="text-sm text-muted-foreground">Today, 3:00 PM</p>
                </div>
                <div className="p-3 bg-secondary rounded-lg">
                  <p className="font-semibold text-foreground">Following Class</p>
                  <p className="text-sm text-muted-foreground">Wednesday, 3:00 PM</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
