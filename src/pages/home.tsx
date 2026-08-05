import { useState } from "react";
import ArrowLeftCircle from "../components/icons/ArrowLeftCircle";
import ArrowRightCircle from "../components/icons/ArrowRightCircle";
import StarIcon from "../components/icons/StarIcon";
import clsx from "clsx";
import { Link } from "react-router-dom";

const portfolios = [
  {
    image: "/structural.png",
    title: "Civil & Structural Engineering",
    link: "/projects?tab=civil_structural",
    content:
      "Our licensed professional engineers delivered comprehensive structural design and analysis for a precast underground water tank, ensuring durability, safety, and full compliance with ACI standards. Through coordinated collaboration with hydrological and construction teams, we delivered a robust, low-maintenance solution that integrated seamlessly into the municipal infrastructure.",
  },
  {
    image: "/arch.jpg",
    title: "Architecture & Interior Design",
    link: "/projects?tab=architecture",
    content:
      "Our licensed architectural professionals provided comprehensive architectural and interior design services for a five-story mixed-use development featuring underground parking and rooftop solar integration. The project successfully balanced structural efficiency with contemporary aesthetics, creating sustainable spaces through integrated collaboration between architectural, structural, and MEP engineering disciplines.",
  },
  {
    image: "/analysis_service.jpg",
    title: "MEP Engineering",
    link: "/projects?tab=mep",
    content:
      "Our licensed MEP engineers designed and engineered the mechanical, electrical, plumbing, and HVAC systems for a large commercial complex, prioritizing energy efficiency and long-term operational reliability. Our integrated engineering design optimized system performance, reduced operational costs, and ensured seamless coordination across all building services.",
  },
];

const users = [
  {
    className: "flex flex-col items-center",
    avatar: "/avatars/2.png",
    name: "Carlos Nguyen",
    role: "Municipal Engineer",
    testimonial:
      "Telcast Engineering helped us design a reinforced concrete water tank for our municipal project. Their attention to detail and understanding of ACI standards gave us complete confidence in the safety and longevity of the structure. Highly recommend them for any civil infrastructure work.",
  },
  {
    className: "flex flex-col items-center",
    avatar: "/avatars/3.png",
    name: "Linda Thompson",
    role: "Asset Manager, Property Group",
    testimonial:
      "We hired Telcast Engineering for a structural retrofit assessment on a mid-rise building. They delivered a thorough report with clear recommendations and ensured minimal disruption to operations. The communication was clear and timely from start to finish.",
  },
  {
    className: "flex flex-col items-center",
    avatar: "/avatars/4.png",
    name: "Robert Evans",
    role: "Transportation Authority",
    testimonial:
      "I couldn't be more impressed with Telcast Engineering's bridge load analysis work. Their use of advanced modeling tools helped us identify critical weaknesses and improve safety across our transportation network. A top-tier engineering partner.",
  },
  {
    className: "hidden sm:flex flex-col items-center",
    avatar: "/avatars/5.png",
    name: "Ava Brooks",
    role: "Development Director, Residential",
    testimonial:
      "Telcast Engineering delivered structural drawings and calculation packages for our residential development. Everything was precise, professional, and permit-ready. Their team was responsive to changes and easy to collaborate with throughout the design phase.",
  },
];

const designApproaches = [
  {
    iconKey: "form" as const,
    title: "Function Meets Form",
    content:
      "Our engineering designs integrate technical functionality with architectural refinement. We engineer solutions not only for immediate requirements but for long-term performance, durability, and legacy value.",
  },
  {
    iconKey: "precision" as const,
    title: "Precision-Driven Design",
    content:
      "We utilize advanced BIM, CAD, and structural analysis software to create precise, optimized, and clash-free models that are construction-ready and permit-compliant.",
  },
  {
    iconKey: "collab" as const,
    title: "Collaborative Process",
    content:
      "Our licensed professional engineers collaborate closely with clients, contractors, and multidisciplinary design teams to ensure transparency, project alignment, and successful outcomes at every project phase.",
  },
  {
    iconKey: "regulatory" as const,
    title: "Regulatory Excellence",
    content:
      "From IBC and ACI standards to state and local jurisdiction codes, we maintain current knowledge of all applicable regulations to ensure designs are fully compliant and permit-ready across all jurisdictions.",
  },
  {
    iconKey: "construct" as const,
    title: "Constructability Focused",
    content:
      "We engineer solutions with constructability as a priority—minimizing field modifications, simplifying installation processes, and enhancing overall construction site efficiency.",
  },
  {
    iconKey: "quality" as const,
    title: "Quality First",
    content:
      "We implement rigorous quality assurance and quality control procedures, including comprehensive design reviews, clash detection, and constructability assessments for every project deliverable.",
  },
];

const approachIconCls = "h-7 w-7 shrink-0 text-stone-600";

function FormIcon() {
  return (
    <svg
      className={approachIconCls}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3l8 4v5l-8 4-8-4V7l8-4z" />
      <path d="M12 12v9" />
    </svg>
  );
}

function PrecisionIcon() {
  return (
    <svg
      className={approachIconCls}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function CollabIcon() {
  return (
    <svg
      className={approachIconCls}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function RegulatoryIcon() {
  return (
    <svg
      className={approachIconCls}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ConstructIcon() {
  return (
    <svg
      className={approachIconCls}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05" />
      <path d="M12 22.08V12" />
    </svg>
  );
}

function QualityIcon() {
  return (
    <svg
      className={approachIconCls}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ApproachIcon({
  iconKey,
}: {
  iconKey:
    | "form"
    | "precision"
    | "collab"
    | "regulatory"
    | "construct"
    | "quality";
}) {
  switch (iconKey) {
    case "form":
      return <FormIcon />;
    case "precision":
      return <PrecisionIcon />;
    case "collab":
      return <CollabIcon />;
    case "regulatory":
      return <RegulatoryIcon />;
    case "construct":
      return <ConstructIcon />;
    case "quality":
      return <QualityIcon />;
  }
}

const FiveStarIcon = () =>
  Array(5)
    .fill(0)
    .map((_, i) => <StarIcon key={i} />);

const Home = () => {
  const [activeUser, setActiveUser] = useState(0);

  const handleNext = () => {
    if (activeUser < users.length - 1) setActiveUser(activeUser + 1);
  };
  const handlePrev = () => {
    if (activeUser > 0) setActiveUser(activeUser - 1);
  };

  return (
    <>
      {/* Hero */}
      <section className="border-b border-stone-200 bg-white">
        <div
          className="mx-auto max-w-6xl flex flex-col justify-end px-4 py-12 sm:px-6 md:py-16 lg:px-8 min-h-120"
          style={{
            backgroundImage: "url(/main.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundOrigin: "border-box",
            backgroundPosition: "top center",
            backgroundSize: "cover",
          }}
        >
          <div className="mt-8 flex justify-center sm:justify-start">
            <Link
              to="/projects"
              className="inline-flex rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              Explore our work
            </Link>
          </div>
          {/* <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12 lg:gap-16">
            <div className="flex flex-col justify-end text-center sm:text-left">
              <p className="max-w-xl text-lg leading-relaxed text-stone-600">
                Telcast Engineering employs licensed professional engineers
                across multiple states, delivering comprehensive Architectural,
                Civil, Structural, MEP, and HVAC engineering services throughout
                the United States. We bring your projects from concept to
                construction with precision, safety, and regulatory compliance.
              </p>
              <div className="mt-8 flex justify-center sm:justify-start">
                <Link
                  to="/projects"
                  className="inline-flex rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
                >
                  Explore our work
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Case studies */}
      <section className="border-t border-stone-200 bg-stone-50 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl lg:text-4xl">
              Recent case studies
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-base text-stone-600">
              Explore Telcast Engineering's successful engineering projects
              across Architectural, Civil, Structural, MEP, and HVAC disciplines
              throughout the United States.
            </p>
          </div>
          <div className="grid gap-8 lg:gap-10">
            {portfolios.map((p, i) => (
              <div
                key={i}
                className="grid overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm sm:grid-cols-2"
              >
                <img
                  alt={p.title}
                  src={p.image}
                  className="h-56 w-full object-cover sm:h-full"
                />
                <div className="flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    <h3 className="text-xl font-semibold text-stone-900 sm:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 line-clamp-4 text-base leading-relaxed text-stone-600">
                      {p.content}
                    </p>
                  </div>
                  <Link
                    to={p.link}
                    className="mt-4 inline-flex text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/projects?tab=all"
              className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
            >
              View all case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* Client reviews */}
      <section className="border-t border-stone-200 bg-stone-50 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl lg:text-4xl">
              Client reviews
            </h2>
            <p className="mt-3 text-base text-stone-600">
              Trusted by developers, municipalities, and contractors.
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
            <blockquote className="mx-auto max-w-2xl text-center">
              <p className="text-lg leading-relaxed text-stone-700 sm:text-xl">
                &ldquo;{users[activeUser].testimonial}&rdquo;
              </p>
              <footer className="mt-6 flex flex-col items-center gap-1">
                <div className="flex items-center gap-0.5 text-amber-500">
                  <FiveStarIcon />
                </div>
                <cite className="not-italic">
                  <span className="block font-semibold text-stone-900">
                    {users[activeUser].name}
                  </span>
                  <span className="block text-sm font-medium text-stone-500">
                    {users[activeUser].role}
                  </span>
                </cite>
              </footer>
            </blockquote>
          </div>
          <div className="mt-8 flex flex-wrap items-end justify-center gap-4 sm:gap-6">
            {users.map((u, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveUser(i)}
                className={clsx(
                  "flex flex-col items-center transition-opacity",
                  u.className,
                  activeUser === i
                    ? "opacity-100"
                    : "opacity-50 hover:opacity-75",
                )}
              >
                <img
                  alt={u.name}
                  src={u.avatar}
                  width={activeUser === i ? 80 : 64}
                  height={activeUser === i ? 80 : 64}
                  className="rounded-full object-cover ring-2 ring-stone-200 ring-offset-2 transition-all"
                />
                <span className="mt-2 text-xs font-medium text-stone-600">
                  {u.name}
                </span>
              </button>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeUser === 0}
              aria-label="Previous review"
              className={clsx(
                "rounded-full border border-stone-300 bg-white p-2.5 shadow-sm transition-colors",
                activeUser === 0
                  ? "cursor-not-allowed border-stone-200 bg-stone-50 opacity-50"
                  : "hover:border-stone-400 hover:bg-stone-50",
              )}
            >
              <ArrowLeftCircle />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={activeUser >= users.length - 1}
              aria-label="Next review"
              className={clsx(
                "rounded-full border border-stone-300 bg-white p-2.5 shadow-sm transition-colors",
                activeUser >= users.length - 1
                  ? "cursor-not-allowed border-stone-200 bg-stone-50 opacity-50"
                  : "hover:border-stone-400 hover:bg-stone-50",
              )}
            >
              <ArrowRightCircle />
            </button>
          </div>
        </div>
      </section>

      {/* Engineering approach */}
      <section className="border-t border-stone-200 bg-stone-50 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl lg:text-4xl">
              Our engineering approach
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-base text-stone-600">
              Principles that guide every project.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {designApproaches.map((a, i) => (
              <div
                key={i}
                className="flex gap-5 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-stone-100">
                  <ApproachIcon iconKey={a.iconKey} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-stone-900 sm:text-xl">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-stone-600">
                    {a.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
