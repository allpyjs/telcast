const leadership = [
  {
    avatar: "/avatars/Isaac.png",
    name: "Isaac Ortega",
    title: "Principal & CEO",
    credentials: "PE, SE",
    bio: "Isaac brings extensive experience in structural engineering and project management. He leads Telcast Engineering's strategic direction and oversees major infrastructure projects, ensuring technical excellence, regulatory compliance, and successful project delivery across multiple states throughout the United States.",
  },
  {
    avatar: "/avatars/Stiven.JPG",
    name: "Stiven Mejia",
    title: "Co-Founder",
    credentials: "Contracts, Payments & Finance",
    bio: "Stiven co-founded Telcast Engineering and leads contracting, payments, and financial operations. He manages relationships with contractors, consultants, and builders—overseeing agreements, disbursements, and project economics. His focus is on transparent, efficient processes that support delivery and strong partner relationships.",
  },
];

const engineers = [
  {
    avatar: "/avatars/Brian.jpeg",
    name: "Brian McNamara",
    title: "Lead Engineer",
    credentials: "PE, PE, Electrical",
    bio: "Licensed Professional Engineer across multiple states with extensive expertise in civil, structural, and electrical engineering. Brian leads engineering teams and delivers integrated design solutions, ensuring all projects meet rigorous code requirements and exceed client expectations throughout the United States.",
  },

  {
    avatar: "/avatars/saayd.jpg",
    name: "Saady Amin",
    title: "Professional Engineer",
    credentials: "PE",
    bio: "Licensed Structural Engineer (PE) in over 20 U.S. states, including OH, NY, TX, WA, PA, MI, NC, and more, with a Master’s Degree in Structural Engineering from The Ohio State University and a decade of experience in the design and analysis of concrete and steel structures.",
  },
  {
    avatar: "/avatars/katherine.PNG",
    name: "Katherine",
    title: "Senior Licensed Architect",
    credentials: "RA",
    bio: "Licensed Architect with expertise in designing innovative, functional, and code-compliant buildings. Katherine provides comprehensive architectural design solutions that balance aesthetics, sustainability, and practicality while optimizing space, efficiency, and user experience for residential, commercial, and mixed-use projects throughout the United States.",
  },
  {
    avatar: "/avatars/daniel.jpg",
    name: "Daniel",
    title: "Professional Engineer",
    credentials: "PE",
    bio: "Licensed Professional Engineer with expertise in site development, grading, and utility design. Daniel creates comprehensive civil engineering plans that ensure proper drainage, utility coordination, and site functionality for projects throughout the United States.",
  },
  {
    avatar: "/avatars/bob.jpg",
    name: "Bob Lawson",
    title: "Structural Engineer",
    credentials: "SE",
    bio: "Licensed Structural Engineer with expertise in structural analysis, building design, and code-compliant engineering solutions. Bob provides safe, efficient, and innovative structural designs for residential, commercial, and industrial projects. He is licensed in SC, GA, KY, NC, and VA, delivering structural engineering services throughout the southeastern United States.",
  },
  {
    avatar: "/avatars/scott.PNG",
    name: "Scott",
    title: "Licensed Architect",
    credentials: "RA, LEED AP",
    bio: "Licensed Architect with expertise in sustainable design and building systems. Scott creates innovative architectural solutions that integrate functionality, aesthetics, and environmental responsibility for projects across the United States.",
  },
];

const ProfileCard = ({
  avatar,
  name,
  title,
  credentials,
  bio,
}: {
  avatar: string;
  name: string;
  title: string;
  credentials: string;
  bio: string;
}) => (
  <div className="flex flex-col items-center rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
    <div className="relative mb-5 overflow-hidden rounded-full ring-2 ring-stone-100 ring-offset-2">
      <img
        src={avatar}
        alt={name}
        width={140}
        height={140}
        className="h-32 w-32 object-cover"
        loading="lazy"
      />
    </div>
    <h3 className="text-xl font-semibold text-stone-900">{name}</h3>
    <p className="text-sm font-medium text-blue-600">{title}</p>
    {credentials && (
      <p className="mb-3 text-xs font-medium uppercase tracking-wide text-stone-500">
        {credentials}
      </p>
    )}
    <p className="text-center text-sm leading-relaxed text-stone-600">{bio}</p>
  </div>
);

const AboutUs = () => {
  return (
    <>
      <section className="border-b border-stone-200 bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Who We Are
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Telcast Engineering employs licensed professional engineers across
            multiple states, providing comprehensive Architectural, Civil,
            Structural, MEP, and HVAC engineering services throughout the United
            States. Our team is dedicated to designing safe, sustainable, and
            resilient infrastructure solutions. From foundations to complex
            building systems, we transform engineering challenges into reliable,
            code-compliant, and long-lasting solutions.
          </p>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
              Leadership
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-base text-stone-600">
              Our leadership team brings decades of professional engineering
              experience across multiple disciplines and states, guiding
              projects and teams toward technical excellence and client success.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
            {leadership.map((person) => (
              <ProfileCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-50 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
              Our Engineers
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-base text-stone-600">
              Meet the licensed professional engineers behind Telcast
              Engineering. Our team, licensed across multiple states, combines
              technical expertise with an unwavering commitment to safety,
              regulatory compliance, sustainability, and client-focused project
              delivery throughout the United States.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {engineers.map((person) => (
              <ProfileCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
