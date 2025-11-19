import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { supabase } from "@/integrations/supabase/client";
import { CalendarIcon, History, ArrowLeft, Filter } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";

type AttendanceRecord = {
  id: string;
  subject_name: string;
  subject_id: string;
  joined_at: string;
  meeting_code: string | null;
  verified: boolean;
};

export default function AttendanceHistory() {
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([]);
  const [filteredRecords, setFilteredRecords] = useState<AttendanceRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState<string>("all");
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();
  const [subjects, setSubjects] = useState<string[]>([]);

  useEffect(() => {
    fetchAttendance();
  }, []);

  useEffect(() => {
    filterRecords();
  }, [attendanceRecords, selectedSubject, dateFrom, dateTo]);

  const fetchAttendance = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Not Authenticated",
          description: "Please log in to view your attendance history",
          variant: "destructive",
        });
        return;
      }

      const { data, error } = await supabase
        .from("attendance")
        .select("*")
        .eq("student_id", user.id)
        .order("joined_at", { ascending: false });

      if (error) throw error;

      setAttendanceRecords(data || []);
      
      // Extract unique subjects
      const uniqueSubjects = [...new Set(data?.map(record => record.subject_name) || [])];
      setSubjects(uniqueSubjects);
    } catch (error) {
      console.error("Error fetching attendance:", error);
      toast({
        title: "Error",
        description: "Failed to load attendance history",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filterRecords = () => {
    let filtered = [...attendanceRecords];

    // Filter by subject
    if (selectedSubject !== "all") {
      filtered = filtered.filter(record => record.subject_name === selectedSubject);
    }

    // Filter by date range
    if (dateFrom) {
      filtered = filtered.filter(record => 
        new Date(record.joined_at) >= dateFrom
      );
    }

    if (dateTo) {
      const endOfDay = new Date(dateTo);
      endOfDay.setHours(23, 59, 59, 999);
      filtered = filtered.filter(record => 
        new Date(record.joined_at) <= endOfDay
      );
    }

    setFilteredRecords(filtered);
  };

  const clearFilters = () => {
    setSelectedSubject("all");
    setDateFrom(undefined);
    setDateTo(undefined);
  };

  const hasActiveFilters = selectedSubject !== "all" || dateFrom || dateTo;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <Button asChild variant="outline" className="mb-6">
          <Link to="/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Link>
        </Button>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <History className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Attendance History</h1>
          </div>
          <p className="text-muted-foreground">View and filter your class attendance records</p>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Filters</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {/* Subject Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">Subject</label>
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger>
                  <SelectValue placeholder="All Subjects" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subjects</SelectItem>
                  {subjects.map(subject => (
                    <SelectItem key={subject} value={subject}>
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Date From */}
            <div>
              <label className="text-sm font-medium mb-2 block">From Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !dateFrom && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateFrom ? format(dateFrom, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={dateFrom}
                    onSelect={setDateFrom}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Date To */}
            <div>
              <label className="text-sm font-medium mb-2 block">To Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !dateTo && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateTo ? format(dateTo, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={dateTo}
                    onSelect={setDateTo}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Clear Filters */}
            <div className="flex items-end">
              <Button 
                variant="outline" 
                onClick={clearFilters}
                disabled={!hasActiveFilters}
                className="w-full"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </Card>

        {/* Attendance Table */}
        <Card className="p-6">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading attendance records...</p>
            </div>
          ) : filteredRecords.length === 0 ? (
            <div className="text-center py-12">
              <History className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Attendance Records</h3>
              <p className="text-muted-foreground mb-4">
                {hasActiveFilters 
                  ? "No records match your filters. Try adjusting them." 
                  : "You haven't joined any classes yet."}
              </p>
              {!hasActiveFilters && (
                <Button asChild>
                  <Link to="/subjects">Browse Subjects</Link>
                </Button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Meeting Code</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRecords.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell className="font-medium">{record.subject_name}</TableCell>
                      <TableCell>
                        {format(new Date(record.joined_at), "PPP 'at' p")}
                      </TableCell>
                      <TableCell>
                        {record.meeting_code || <span className="text-muted-foreground">N/A</span>}
                      </TableCell>
                      <TableCell>
                        <span className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          record.verified 
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                        )}>
                          {record.verified ? "Verified" : "Pending"}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="mt-4 text-sm text-muted-foreground">
                Showing {filteredRecords.length} of {attendanceRecords.length} total records
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
