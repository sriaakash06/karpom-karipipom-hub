import { BookOpen, Calculator, Atom, Leaf, Laptop, Globe, Languages, DollarSign, TrendingUp, Briefcase, Building2 } from "lucide-react";

export interface Subject {
  id: string;
  name: string;
  icon: any;
  color: string;
  tutor: string;
  meetLink: string;
  description: string;
  schedule: string;
}

export const subjects: Subject[] = [
  {
    id: "physics",
    name: "Physics",
    icon: Atom,
    color: "from-blue-500 to-cyan-500",
    tutor: "Dr. Ramesh Kumar",
    meetLink: "https://meet.google.com/physics-class",
    description: "Master mechanics, optics, and modern physics concepts",
    schedule: "Mon, Wed, Fri - 9:00 AM"
  },
  {
    id: "chemistry",
    name: "Chemistry",
    icon: BookOpen,
    color: "from-purple-500 to-pink-500",
    tutor: "Prof. Lakshmi Devi",
    meetLink: "https://meet.google.com/chemistry-class",
    description: "Explore organic, inorganic, and physical chemistry",
    schedule: "Tue, Thu, Sat - 10:00 AM"
  },
  {
    id: "maths",
    name: "Mathematics",
    icon: Calculator,
    color: "from-orange-500 to-red-500",
    tutor: "Mr. Suresh Babu",
    meetLink: "https://meet.google.com/maths-class",
    description: "Calculus, algebra, vectors, and probability",
    schedule: "Mon, Wed, Fri - 11:00 AM"
  },
  {
    id: "biology",
    name: "Biology",
    icon: Leaf,
    color: "from-green-500 to-emerald-500",
    tutor: "Dr. Priya Sharma",
    meetLink: "https://meet.google.com/biology-class",
    description: "Cell biology, genetics, evolution, and ecology",
    schedule: "Tue, Thu - 9:00 AM"
  },
  {
    id: "computer-science",
    name: "Computer Science",
    icon: Laptop,
    color: "from-indigo-500 to-blue-500",
    tutor: "Mr. Arun Prasad",
    meetLink: "https://meet.google.com/cs-class",
    description: "Programming, data structures, and algorithms",
    schedule: "Mon, Wed - 2:00 PM"
  },
  {
    id: "english",
    name: "English",
    icon: Globe,
    color: "from-yellow-500 to-orange-500",
    tutor: "Ms. Sarah Johnson",
    meetLink: "https://meet.google.com/english-class",
    description: "Literature, grammar, and communication skills",
    schedule: "Tue, Thu, Fri - 3:00 PM"
  },
  {
    id: "tamil",
    name: "Tamil",
    icon: Languages,
    color: "from-red-500 to-pink-500",
    tutor: "Mrs. Meena Kumari",
    meetLink: "https://meet.google.com/tamil-class",
    description: "Tamil literature, grammar, and composition",
    schedule: "Mon, Wed - 4:00 PM"
  },
  {
    id: "accountancy",
    name: "Accountancy",
    icon: DollarSign,
    color: "from-teal-500 to-cyan-500",
    tutor: "CA. Venkat Raman",
    meetLink: "https://meet.google.com/accountancy-class",
    description: "Financial accounting and company accounts",
    schedule: "Tue, Thu - 11:00 AM"
  },
  {
    id: "economics",
    name: "Economics",
    icon: TrendingUp,
    color: "from-blue-500 to-purple-500",
    tutor: "Dr. Anjali Menon",
    meetLink: "https://meet.google.com/economics-class",
    description: "Micro and macroeconomics fundamentals",
    schedule: "Mon, Fri - 1:00 PM"
  },
  {
    id: "business-studies",
    name: "Business Studies",
    icon: Briefcase,
    color: "from-green-500 to-blue-500",
    tutor: "Mr. Rajesh Patel",
    meetLink: "https://meet.google.com/business-class",
    description: "Business management and entrepreneurship",
    schedule: "Wed, Sat - 10:00 AM"
  },
  {
    id: "commerce",
    name: "Commerce",
    icon: Building2,
    color: "from-amber-500 to-orange-500",
    tutor: "Mrs. Divya Reddy",
    meetLink: "https://meet.google.com/commerce-class",
    description: "Trade, finance, and business environment",
    schedule: "Tue, Thu - 2:00 PM"
  }
];
