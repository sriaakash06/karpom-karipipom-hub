import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Trophy, TrendingUp, Calendar, Bell, History } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">Welcome back, Student!</h1>
          <p className="text-muted-foreground">Here's your learning progress overview</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">7</span>
            </div>
            <p className="text-muted-foreground">Active Subjects</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Clock className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold text-foreground">45h</span>
            </div>
            <p className="text-muted-foreground">Hours This Month</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Trophy className="h-8 w-8 text-success" />
              <span className="text-2xl font-bold text-foreground">12</span>
            </div>
            <p className="text-muted-foreground">Badges Earned</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">89%</span>
            </div>
            <p className="text-muted-foreground">Attendance Rate</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Classes */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  Today's Classes
                </h2>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/subjects">View All</Link>
                </Button>
              </div>
              <div className="space-y-4">
                <ClassCard
                  subject="Physics"
                  time="9:00 AM - 10:00 AM"
                  tutor="Dr. Ramesh Kumar"
                  color="from-blue-500 to-cyan-500"
                />
                <ClassCard
                  subject="Mathematics"
                  time="11:00 AM - 12:00 PM"
                  tutor="Mr. Suresh Babu"
                  color="from-orange-500 to-red-500"
                />
                <ClassCard
                  subject="English"
                  time="3:00 PM - 4:00 PM"
                  tutor="Ms. Sarah Johnson"
                  color="from-yellow-500 to-orange-500"
                />
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-card-foreground">Recent Activity</h2>
              <div className="space-y-4">
                <ActivityItem
                  title="Completed Physics Assignment"
                  time="2 hours ago"
                  icon="✅"
                />
                <ActivityItem
                  title="Attended Chemistry Class"
                  time="Yesterday"
                  icon="📚"
                />
                <ActivityItem
                  title="Earned 'Perfect Attendance' Badge"
                  time="2 days ago"
                  icon="🏆"
                />
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Notifications */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-card-foreground flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Notifications
              </h3>
              <div className="space-y-3">
                <NotificationItem
                  title="New assignment posted"
                  subject="Mathematics"
                  time="1 hour ago"
                />
                <NotificationItem
                  title="Class rescheduled"
                  subject="Biology"
                  time="3 hours ago"
                />
                <NotificationItem
                  title="Study material uploaded"
                  subject="Chemistry"
                  time="Yesterday"
                />
              </div>
            </Card>

            {/* Quick Access to Attendance History */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-card-foreground flex items-center gap-2">
                <History className="h-5 w-5 text-primary" />
                Attendance
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                View your complete attendance history and track your progress
              </p>
              <Button asChild className="w-full">
                <Link to="/attendance-history">View History</Link>
              </Button>
            </Card>

            {/* Learning Streak */}
            <Card className="p-6 bg-gradient-accent text-white">
              <div className="text-center">
                <Trophy className="h-12 w-12 mx-auto mb-3" />
                <p className="text-3xl font-bold mb-2">15 Days</p>
                <p className="text-white/90">Learning Streak 🔥</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClassCard({ subject, time, tutor, color }: any) {
  return (
    <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:shadow-md transition-all">
      <div className={`w-1 h-16 bg-gradient-to-b ${color} rounded-full`} />
      <div className="flex-1">
        <h4 className="font-semibold text-foreground">{subject}</h4>
        <p className="text-sm text-muted-foreground">{time}</p>
        <p className="text-sm text-muted-foreground">{tutor}</p>
      </div>
      <Button size="sm">Join</Button>
    </div>
  );
}

function ActivityItem({ title, time, icon }: any) {
  return (
    <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
      <span className="text-2xl">{icon}</span>
      <div className="flex-1">
        <p className="font-semibold text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">{time}</p>
      </div>
    </div>
  );
}

function NotificationItem({ title, subject, time }: any) {
  return (
    <div className="p-3 bg-secondary rounded-lg">
      <p className="font-semibold text-foreground text-sm">{title}</p>
      <p className="text-xs text-muted-foreground">{subject} • {time}</p>
    </div>
  );
}
