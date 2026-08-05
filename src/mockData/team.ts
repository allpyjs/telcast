export interface TeamMember {
  name: string;
  role: string;
  specialization?: string;
  image: string;
}

export const team: TeamMember[] = [

  {
    name: "Alex",
    role: "Civil Engineer",
    image: "/team/civil1.jpg",
  },
  {
    name: "Taylor",
    role: "Civil Engineer",
    image: "/team/civil2.jpg",
  },
  {
    name: "Morgan",
    role: "Civil Engineer",
    image: "/team/civil3.jpg",
  },
  {
    name: "Casey",
    role: "Mechanical Engineer",
    image: "/team/mechanical1.jpg",
  },
  {
    name: "Riley",
    role: "Mechanical Engineer",
    image: "/team/mechanical2.jpg",
  },
];
