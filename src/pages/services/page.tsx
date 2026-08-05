import { Link } from "react-router-dom";

const services = [
  {
    id: "civil_structural",
    iconKey: "civil" as const,
    image: "/structural.png",
    title: "Civil & Structural Engineering",
    tagline: "Safe, durable, code-compliant design",
    content:
      "Our licensed professional engineers deliver safe, efficient, and durable solutions for buildings and infrastructure projects throughout the United States. Our comprehensive civil and structural engineering services encompass design, analysis, detailing, and rehabilitation to ensure optimal performance, regulatory compliance, and long-term reliability at every project stage.",
    highlights: [
      "Structural analysis & design",
      "Foundations & site development",
      "Concrete, steel & composite systems",
      "Seismic & wind engineering",
      "Construction documentation",
    ],
    portfolioLink: "/projects?tab=civil_structural",
  },
  {
    id: "architecture",
    iconKey: "architecture" as const,
    image: "/arch.jpg",
    title: "Architecture & Interior Design",
    tagline: "Form, function, and sustainability",
    content:
      "Our licensed architectural professionals create functional and aesthetically refined designs that harmonize form with purpose. From conceptual planning through detailed interior design, our architectural services integrate creative vision, practical usability, and sustainable design principles for projects across the United States.",
    highlights: [
      "Concept & space planning",
      "Architectural design & detailing",
      "Interior design & finishes",
      "Mixed-use & commercial",
      "Permit & code coordination",
    ],
    portfolioLink: "/projects?tab=architecture",
  },
  {
    id: "mep",
    iconKey: "mep" as const,
    image: "/analysis_service.jpg",
    title: "MEP Engineering",
    tagline: "Integrated building systems",
    content:
      "Our licensed MEP engineers provide comprehensive expertise in mechanical, electrical, plumbing, and HVAC systems. We design integrated, energy-efficient solutions that optimize building performance, enhance system reliability, and ensure superior occupant comfort for projects throughout the United States.",
    highlights: [
      "HVAC & mechanical design",
      "Electrical & lighting",
      "Plumbing & fire protection",
      "Energy modeling & sustainability",
      "BIM coordination",
    ],
    portfolioLink: "/projects?tab=mep",
  },
];

const iconCls = "h-7 w-7 shrink-0 text-blue-600";

function CivilIcon() {
  return (
    <svg
      className={iconCls}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 21h18" />
      <path d="M5 21V8l7-4 7 4v13" />
      <path d="M9 21v-5h6v5" />
      <path d="M9 10h6" />
    </svg>
  );
}

function ArchitectureIcon() {
  return (
    <svg
      className={iconCls}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M2 20h20" />
      <path d="M5 20V9l7-5 7 5v11" />
      <path d="M9 20v-4h6v4" />
      <path d="M12 9v2" />
      <path d="M10 11h4" />
    </svg>
  );
}

function MEPIcon() {
  return (
    <svg
      className={iconCls}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
    </svg>
  );
}

function ServiceIcon({ iconKey }: { iconKey: "civil" | "architecture" | "mep" }) {
  if (iconKey === "civil") return <CivilIcon />;
  if (iconKey === "architecture") return <ArchitectureIcon />;
  return <MEPIcon />;
}

const Services = () => {
  return (
    <div className="min-h-[60vh] bg-stone-50">
      <section className="border-b border-stone-200 bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Professional Engineering Services
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Telcast Engineering employs licensed professional engineers across multiple states, providing comprehensive Architectural, Civil, Structural, MEP, and HVAC engineering services throughout the United States. We deliver safe, scalable, and code-compliant solutions that integrate engineering excellence, sustainability, and innovation for buildings and infrastructure projects.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl">
        {services.map((service, index) => (
          <section
            key={service.id}
            className="border-b border-stone-200 bg-white last:border-b-0"
          >
            <div className="grid min-h-0 w-full grid-cols-1 lg:grid-cols-2 lg:min-h-[520px]">
              <div
                className={`relative h-64 w-full overflow-hidden bg-stone-200 sm:h-80 lg:h-[420px] ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-900/20" />
              </div>

              <div
                className={`flex flex-col justify-center px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <ServiceIcon iconKey={service.iconKey} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-0.5 text-sm font-medium text-blue-600">
                      {service.tagline}
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  {service.content}
                </p>
                <ul className="mt-6 space-y-2">
                  {service.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-stone-700"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    to={service.portfolioLink}
                    className="inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
                  >
                    View related projects
                    <span className="ml-1" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="border-t border-stone-200 bg-stone-50 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-semibold text-stone-900 sm:text-2xl">
            Need a custom scope or multidisciplinary team?
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Our multidisciplinary team of licensed professional engineers combines Architectural, Civil, Structural, MEP, and HVAC expertise to deliver integrated project solutions across the United States.
          </p>
          <div className="mt-6">
            <a
              href="mailto:info@TelcastEngineering.com"
              className="inline-flex rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
