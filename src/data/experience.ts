export type ExperienceEntry = {
  role: string;
  company: string;
  logo: string;
  type: "Full-time" | "Internship";
  start: string;
  end: string;
  location: string;
  remote: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: "UI/UX Designer",
    company: "RydePro",
    logo: "/experience/rydepro.jpeg",
    type: "Full-time",
    start: "Oct 2025",
    end: "Present",
    location: "California, United States",
    remote: "Remote",
  },
  {
    role: "UI/UX Designer",
    company: "Appfur",
    logo: "/experience/appfur.jpeg",
    type: "Full-time",
    start: "Dec 2024",
    end: "Jul 2025",
    location: "Lagos State, Nigeria",
    remote: "Remote",
  },
  {
    role: "UI/UX Designer",
    company: "Vehance Technologies",
    logo: "/experience/vehance.jpeg",
    type: "Full-time",
    start: "Sep 2024",
    end: "May 2025",
    location: "Kano State, Nigeria",
    remote: "Remote",
  },
  {
    role: "Student Intern",
    company: "Stem Innovators Lab",
    logo: "/experience/stemlab.jpeg",
    type: "Internship",
    start: "Jan 2023",
    end: "Sep 2023",
    location: "Kano State, Nigeria",
    remote: "On-site",
  },
];
