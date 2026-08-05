export interface PortfolioType {
  title: string;
  category: string;
  skills: string[];
  media: string[];
  description?: string;
}

export const portfolios: PortfolioType[] = [
  {
    title: "Modern Two-Story Residential House",
    description:
      "Designed and detailed the structural framework for a modern two-story reinforced concrete house, including slab-on-grade foundation, shear walls, and steel roof framing. The design incorporated passive solar elements and complied fully with local seismic and wind loading codes.",
    category: "civil_structural",
    media: [
      "/projects/structural/Modern/01.jpg",
      "/projects/structural/Modern/02.jpg",
      "/projects/structural/Modern/03.jpg",
      "/projects/structural/Modern/04.jpg",
      "/projects/structural/Modern/05.jpg",
      "/projects/structural/Modern/06.jpg",
      "/projects/structural/Modern/07.jpg",
      "/projects/structural/Modern/08.jpg",
      "/projects/structural/Modern/09.jpg",
      "/projects/structural/Modern/10.jpg",
      "/projects/structural/Modern/11.jpg",
    ],
    skills: [
      "AutoCAD",
      "Revit",
      "Residential Design",
      "Seismic Design",
      "ACI 318",
    ],
  },
  {
    title: "Siriwardana House Remodel – California",
    description:
      "Led the architectural remodel of the Siriwardana House in California, transforming an existing residence into a modern, functional, and aesthetically refined living space. Scope included spatial reconfiguration, façade redesign, and integration of sustainable materials and lighting strategies. The remodel enhanced natural flow, maximized daylight, and introduced contemporary finishes while preserving structural integrity. Delivered complete architectural drawings and coordination details for seamless construction.",
    category: "architecture",
    media: [
      "/projects/architectural/remodeling/ArchitecturalHouseRemodel (California)-1.jpg",
      "/projects/architectural/remodeling/ArchitecturalHouseRemodel (California)-2.jpg",
      "/projects/architectural/remodeling/ArchitecturalHouseRemodel (California)-3.jpg",
      "/projects/architectural/remodeling/ArchitecturalHouseRemodel (California)-4.jpg",
      "/projects/architectural/remodeling/ArchitecturalHouseRemodel (California)-5.jpg",
      "/projects/architectural/remodeling/ArchitecturalHouseRemodel (California)-6.jpg",
      "/projects/architectural/remodeling/ArchitecturalHouseRemodel (California)-7.jpg",
      "/projects/architectural/remodeling/ArchitecturalHouseRemodel (California)-8.jpg",
      "/projects/architectural/remodeling/ArchitecturalHouseRemodel (California)-9.jpg",
      "/projects/architectural/remodeling/ArchitecturalHouseRemodel (California)-10.jpg",
    ],
    skills: [
      "Architectural Engineering",
      "Remodeling",
      "AutoCad",
      "Topographic Survey",
      "California Permit",
    ],
  },
  {
    title: "Monmouth Beach New Jersey Residence",
    description:
      "Colonial style beach home located on Ocean Avenue in Monmouth Beach, NJ. This design captures the essence of the architectural language of the New Jersey shore. The home contains 3,300 sqft of livable floor area on 0.43 acre lot with attached two car garage. Four bedroom, three full bathroom, two half bathrooms with and accessible elevator. I designed the home to take full advantage of the stunning 360 degree views of this magnificent site.",
    category: "architecture",
    media: [
      "/projects/architectural/Monmouth-NJ/1.jpg",
      "/projects/architectural/Monmouth-NJ/2.jpg",
      "/projects/architectural/Monmouth-NJ/3.jpg",
      "/projects/architectural/Monmouth-NJ/4.jpg",
      "/projects/architectural/Monmouth-NJ/5.jpg",
      "/projects/architectural/Monmouth-NJ/6.jpg",
      "/projects/architectural/Monmouth-NJ/7.jpg",
    ],
    skills: [
      "Architectural Design",
      "Residential Design",
      "Colonial Architecture",
      "AutoCAD",
      "Revit",
      "New Jersey Permit",
    ],
  },
  {
    title: "Custom Hillside Residence Site Development",
    description:
      "Led site planning and grading for a custom home on a sloped terrain, integrating retaining walls, drainage systems, and erosion control measures. Coordinated utility access and road design while maintaining minimal environmental impact.",
    category: "civil_structural",
    media: [
      "/projects/structural/custom/1.jpg",
      "/projects/structural/custom/2.jpg",
      "/projects/structural/custom/3.jpg",
      "/projects/structural/custom/4.jpg",
      "/projects/structural/custom/5.jpg",
    ],
    skills: [
      "Civil 3D",
      "Grading Plan",
      "Drainage Design",
      "Topographic Survey",
      "Retaining Wall Design",
    ],
  },
  // MEP
  {
    title:
      "Existing & Proposed Architectural + Electrical Plans with Title 24 Compliance (California)",
    description:
      "Prepared complete sets of existing and proposed architectural and electrical drawings in compliance with California Title 24 energy standards. Scope included accurate as-built documentation, proposed layout development, lighting and electrical system planning, and integration of energy efficiency measures. Delivered permit-ready drawings that ensured code compliance, improved building performance, and supported a smooth approval process with local authorities.",
    category: "architecture",
    media: [
      "/projects/architectural/fullset/Exisitng-Proposed-archi-elec-title24 (California)-1.jpg",
      "/projects/architectural/fullset/Exisitng-Proposed-archi-elec-title24 (California)-2.jpg",
      "/projects/architectural/fullset/Exisitng-Proposed-archi-elec-title24 (California)-3.jpg",
      "/projects/architectural/fullset/Exisitng-Proposed-archi-elec-title24 (California)-4.jpg",
      "/projects/architectural/fullset/Exisitng-Proposed-archi-elec-title24 (California)-5.jpg",
      "/projects/architectural/fullset/Exisitng-Proposed-archi-elec-title24 (California)-6.jpg",
      "/projects/architectural/fullset/Exisitng-Proposed-archi-elec-title24 (California)-7.jpg",
      "/projects/architectural/fullset/Exisitng-Proposed-archi-elec-title24 (California)-8.jpg",
      "/projects/architectural/fullset/Exisitng-Proposed-archi-elec-title24 (California)-9.jpg",
      "/projects/architectural/fullset/Exisitng-Proposed-archi-elec-title24 (California)-10.jpg",
      "/projects/architectural/fullset/Exisitng-Proposed-archi-elec-title24 (California)-11.jpg",
      "/projects/architectural/fullset/Exisitng-Proposed-archi-elec-title24 (California)-12.jpg",
      "/projects/architectural/fullset/Exisitng-Proposed-archi-elec-title24 (California)-13.jpg",
      "/projects/architectural/fullset/Exisitng-Proposed-archi-elec-title24 (California)-14.jpg",
      "/projects/architectural/fullset/Exisitng-Proposed-archi-elec-title24 (California)-15.jpg",
      "/projects/architectural/fullset/Exisitng-Proposed-archi-elec-title24 (California)-16.jpg",
      "/projects/architectural/fullset/Exisitng-Proposed-archi-elec-title24 (California)-17.jpg",
      "/projects/architectural/fullset/Exisitng-Proposed-archi-elec-title24 (California)-18.jpg",
      "/projects/architectural/fullset/Exisitng-Proposed-archi-elec-title24 (California)-19.jpg",
    ],
    skills: [
      "Achitecutral Engineering",
      "AutoCad",
      "Title24",
      "HVAC Design",
      "California Permit",
    ],
  },
  {
    title: "Complete MEP Drawings for Residential Apartment Buildings",
    description:
      "Delivered full Mechanical, Electrical, and Plumbing (MEP) design drawings for apartment buildings located in Bridgwater, Somerset. The scope included HVAC layouts, electrical distribution, lighting, fire safety, and plumbing systems, ensuring compliance with local codes and seamless coordination across disciplines. The drawings provided contractors with precise construction details, optimized system efficiency, and supported timely project execution.",
    category: "mep",
    media: [
      "/projects/mep/MEPDrawing/MEP DRAWINGS NEW-1.jpg",
      "/projects/mep/MEPDrawing/MEP DRAWINGS NEW-2.jpg",
      "/projects/mep/MEPDrawing/MEP DRAWINGS NEW-3.jpg",
      "/projects/mep/MEPDrawing/MEP DRAWINGS NEW-4.jpg",
      "/projects/mep/MEPDrawing/MEP DRAWINGS NEW-5.jpg",
      "/projects/mep/MEPDrawing/MEP DRAWINGS NEW-6.jpg",
      "/projects/mep/MEPDrawing/MEP DRAWINGS NEW-7.jpg",
      "/projects/mep/MEPDrawing/MEP DRAWINGS NEW-8.jpg",
      "/projects/mep/MEPDrawing/MEP DRAWINGS NEW-9.jpg",
      "/projects/mep/MEPDrawing/MEP DRAWINGS NEW-10.jpg",
      "/projects/mep/MEPDrawing/MEP DRAWINGS NEW-11.jpg",
      "/projects/mep/MEPDrawing/MEP DRAWINGS NEW-12.jpg",
      "/projects/mep/MEPDrawing/MEP DRAWINGS NEW-13.jpg",
      "/projects/mep/MEPDrawing/MEP DRAWINGS NEW-14.jpg",
      "/projects/mep/MEPDrawing/MEP DRAWINGS NEW-15.jpg",
      "/projects/mep/MEPDrawing/MEP DRAWINGS NEW-16.jpg",
      "/projects/mep/MEPDrawing/MEP DRAWINGS NEW-17.jpg",
      "/projects/mep/MEPDrawing/MEP DRAWINGS NEW-18.jpg",
      "/projects/mep/MEPDrawing/MEP DRAWINGS NEW-19.jpg",
      "/projects/mep/MEPDrawing/MEP DRAWINGS NEW-20.jpg",
      "/projects/mep/MEPDrawing/MEP DRAWINGS NEW-21.jpg",
    ],
    skills: [
      "AutoCAD",
      "3D Marks",
      "Interior Design",
      "Architectural Engineering",
      "County Permit",
    ],
  },
  {
    title:
      "Concession Stand Container Project - SAN JOSE MUNICIPAL GOLF COURSE",
    description:
      "I engineered and designed a 20’ concession stand container for San Jose Municipal Golf Course, transforming an ESR-certified shipping container into a fully conditioned food service unit. Scope included structural reinforcement, ADA-compliant counters, HVAC, plumbing, and electrical integration. Delivered a complete code-compliant drawing set with floor plans, elevations, and 3D views, ensuring full compliance with California Building Code and ADA standards.",
    category: "architecture",
    media: [
      "/projects/architectural/container/California_COURSE CO_20' CANTEEN PRO_24_09_03()container_-1.jpg",
      "/projects/architectural/container/California_COURSE CO_20' CANTEEN PRO_24_09_03()container_-2.jpg",
      "/projects/architectural/container/California_COURSE CO_20' CANTEEN PRO_24_09_03()container_-3.jpg",
      "/projects/architectural/container/California_COURSE CO_20' CANTEEN PRO_24_09_03()container_-4.jpg",
      "/projects/architectural/container/California_COURSE CO_20' CANTEEN PRO_24_09_03()container_-5.jpg",
      "/projects/architectural/container/California_COURSE CO_20' CANTEEN PRO_24_09_03()container_-6.jpg",
      "/projects/architectural/container/California_COURSE CO_20' CANTEEN PRO_24_09_03()container_-7.jpg",
      "/projects/architectural/container/California_COURSE CO_20' CANTEEN PRO_24_09_03()container_-8.jpg",
      "/projects/architectural/container/California_COURSE CO_20' CANTEEN PRO_24_09_03()container_-9.jpg",
    ],
    skills: [
      "AutoCAD",
      "HVAC System Design",
      "Container Design",
      "Architectural Engineering",
      "California Permit",
    ],
  },
  {
    title: "Site Development and Stormwater Management for R1-Sara Hotels LLC",
    description:
      "Managed comprehensive site development for a commercial property, focusing on grading, drainage, and utility infrastructure. Designed and optimized earthwork, created detailed stormwater management plans with runoff calculations, and integrated essential utilities. Ensured full compliance with local regulations and environmental considerations. This project involved transforming raw site data into buildable plans, contributing to a functional and compliant development for Sara Hotels LLC.",
    category: "civil_structural",
    media: [
      "/projects/structural/Civil-Hotel/R1-Sara Hotels LLC, INDIANA-1.jpg",
      "/projects/structural/Civil-Hotel/R1-Sara Hotels LLC, INDIANA-2.jpg",
      "/projects/structural/Civil-Hotel/R1-Sara Hotels LLC, INDIANA-3.jpg",
      "/projects/structural/Civil-Hotel/R1-Sara Hotels LLC, INDIANA-4.jpg",
    ],
    skills: [
      "Civil Engineering",
      "AutoCad",
      "Transportation Planning",
      "Indiana Permit",
    ],
  },
  {
    title: "Structural Design of Modern Two-Story Wood-Framed Residence",
    description:
      "Developed and detailed the structural system for a modern two-story residential home utilizing wood framing with a slab-on-grade foundation, lateral shear wall system, and conventionally framed roof. The design incorporated passive solar elements and met all applicable seismic and wind load requirements per local building codes.",
    category: "civil_structural",
    media: [
      "/projects/structural/agustine/1.jpg",
      "/projects/structural/agustine/2.jpg",
      "/projects/structural/agustine/3.jpg",
      "/projects/structural/agustine/4.jpg",
      "/projects/structural/agustine/5.jpg",
      "/projects/structural/agustine/6.jpg",
      "/projects/structural/agustine/7.jpg",
      "/projects/structural/agustine/8.jpg",
      "/projects/structural/agustine/9.jpg",
      "/projects/structural/agustine/10.jpg",
      "/projects/structural/agustine/11.jpg",
      "/projects/structural/agustine/12.jpg",
    ],
    skills: [
      "AutoCAD",
      "Revit",
      "Residential Design",
      "Seismic Design",
      "ACI 318",
    ],
  },

  {
    title: "Commercial Plaza Site Design",
    description:
      "Engineered the site design for a multi-tenant commercial plaza, including grading, drainage, and parking layout to optimize functionality and site accessibility. Developed a stormwater management plan to ensure compliance with local regulations and minimize offsite runoff. Designed the layout to meet ADA accessibility standards and coordinated with architectural and utility plans to reduce earthwork and streamline construction.",
    category: "architecture",
    media: [
      "/projects/architectural/plaza/1.jpg",
      "/projects/architectural/plaza/2.jpg",
      "/projects/architectural/plaza/3.jpg",
      "/projects/architectural/plaza/4.jpg",
      "/projects/architectural/plaza/5.jpg",
    ],
    skills: ["Civil 3D", "Grading", "Site Layout", "Hydrology"],
  },
  {
    title: "Construction Plan - MO",
    description:
      "Provided full site development engineering including lot layout, utility design, and roadway profiles for a 200-unit residential community.",
    category: "civil_structural",
    media: [
      "/projects/structural/MO-civil/R0-CIVIL-Missouri Avenue Crystal City , Missouri 63019-1.jpg",
      "/projects/structural/MO-civil/R0-CIVIL-Missouri Avenue Crystal City , Missouri 63019-2.jpg",
      "/projects/structural/MO-civil/R0-CIVIL-Missouri Avenue Crystal City , Missouri 63019-3.jpg",
      "/projects/structural/MO-civil/R0-CIVIL-Missouri Avenue Crystal City , Missouri 63019-4.jpg",
      "/projects/structural/MO-civil/R0-CIVIL-Missouri Avenue Crystal City , Missouri 63019-5.jpg",
      "/projects/structural/MO-civil/R0-CIVIL-Missouri Avenue Crystal City , Missouri 63019-6.jpg",
    ],
    skills: ["AutoCAD", "HydroCAD", "Subdivision Planning", "Missouri Permit"],
  },
];
