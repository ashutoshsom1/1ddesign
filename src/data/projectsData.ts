export interface Project {
  id: string;
  title: string;
  category: "architecture" | "residential" | "interior" | "commercial";
  categoryLabel: string;
  location: string;
  year: string;
  image: string;
  secondaryImage?: string;
  description: string;
  area: string;
  duration: string;
  materials: string[];
  tags: string[];
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "zenith-villa-residence",
    title: "Zenith Multi-Tier Architectural Villa",
    category: "architecture",
    categoryLabel: "Architectural Villa",
    location: "Gurugram / NCR",
    year: "2026",
    image: "/images/featured/villa-exterior-hero.jpg",
    secondaryImage: "/images/projects/project-09.jpg",
    description:
      "A grand tri-level contemporary residence balancing massive cantilevered concrete slabs, warm vertical timber louvers, integrated ambient perimeter lighting, and interior landscaped courtyards.",
    area: "8,500 Sq. Ft.",
    duration: "14 Months",
    materials: ["Thermal Ash Louvers", "Basalt Stone Cladding", "Low-E Structural Glass", "Brushed Bronze"],
    tags: ["Cantilever Architecture", "Biophilic Facade", "Luxury Exterior"],
    featured: true,
  },
  {
    id: "emerald-sanctuary-master-suite",
    title: "Emerald Onyx & Fluted Master Suite",
    category: "residential",
    categoryLabel: "Master Suite",
    location: "New Delhi",
    year: "2026",
    image: "/images/featured/master-suite-emerald-01.jpg",
    secondaryImage: "/images/featured/master-suite-emerald-02.jpg",
    description:
      "An opulent master bedroom designed around a bookmatched emerald marble feature wall, concealed vertical LED accent channels, bespoke lacquer wainscoting, and floating minimalist joinery.",
    area: "620 Sq. Ft.",
    duration: "8 Weeks",
    materials: ["Emerald Green Marble", "Matte White Fluted Joinery", "Suede Leather Headboard", "Warm Brass Inlay"],
    tags: ["Luxury Master Suite", "Emerald Marble", "Cove Lighting"],
    featured: true,
  },
  {
    id: "celestial-horizons-kids-bedroom",
    title: "Celestial Wonder Creative Children's Suite",
    category: "interior",
    categoryLabel: "Creative Living",
    location: "South Delhi",
    year: "2026",
    image: "/images/featured/kids-bedroom-creative.jpg",
    secondaryImage: "/images/projects/project-06.jpg",
    description:
      "An imaginative sanctuary for children featuring circular ambient backlit planet portals, custom cosmic murals, integrated acoustic panels, and ergonomic study alcoves.",
    area: "480 Sq. Ft.",
    duration: "6 Weeks",
    materials: ["Sage Polyurethane Finish", "Acoustic Fabric", "Indirect Neon Halo", "Solid Oak Accents"],
    tags: ["Kids Space", "Custom Lighting", "Bespoke Millwork"],
    featured: true,
  },
  {
    id: "minimalist-emerald-media-lounge",
    title: "Minimalist Media Suite & Fluted Wall",
    category: "interior",
    categoryLabel: "Media & Living",
    location: "Noida",
    year: "2026",
    image: "/images/featured/master-suite-emerald-02.jpg",
    secondaryImage: "/images/projects/project-12.jpg",
    description:
      "A monolithic floating media console framed by illuminated marble pilasters, architectural fluted acoustics, and recessed shadow-gap ceiling troughs.",
    area: "540 Sq. Ft.",
    duration: "5 Weeks",
    materials: ["Verde Marble Accents", "Matte Polyurethane Lacquer", "Concealed LED Profiles"],
    tags: ["Media Wall", "Minimalist Luxury", "Ambient Illumination"],
    featured: true,
  },
  {
    id: "scandinavian-modular-kitchen",
    title: "The Sculpted Minimalist Chef Kitchen",
    category: "residential",
    categoryLabel: "Culinary Space",
    location: "Vasant Vihar",
    year: "2025",
    image: "/images/projects/project-12.jpg",
    secondaryImage: "/images/projects/project-13.jpg",
    description:
      "Seamless handleless cabinetry, oversized waterfall quartz island, integrated high-efficiency induction systems, and warm recessed task illumination.",
    area: "420 Sq. Ft.",
    duration: "7 Weeks",
    materials: ["Quartzite Waterfall Island", "Smoked Oak Veneer", "Gola Profiles", "Bespoke Steel Shelving"],
    tags: ["Modular Kitchen", "Minimalist", "High Function"],
    featured: true,
  },
  {
    id: "contemporary-penthouse-living",
    title: "Contemporary Double-Height Grand Living",
    category: "architecture",
    categoryLabel: "Grand Living",
    location: "Golf Course Road, Gurugram",
    year: "2026",
    image: "/images/projects/project-14.jpg",
    secondaryImage: "/images/projects/project-15.jpg",
    description:
      "Double-height glass walls opening towards landscaped balconies, bespoke architectural lighting chandeliers, and custom velvet seating groups.",
    area: "1,200 Sq. Ft.",
    duration: "10 Weeks",
    materials: ["Italian Botticino Marble", "Brushed Bronze Chandeliers", "Hand-Tufted Silk Wool", "Smoked Glass"],
    tags: ["Grand Living", "Double Height", "Luxury Furniture"],
    featured: true,
  },
  {
    id: "executive-corporate-atrium",
    title: "Aura Executive Corporate Studio",
    category: "commercial",
    categoryLabel: "Commercial Studio",
    location: "Cyber City, Gurugram",
    year: "2025",
    image: "/images/projects/project-16.jpg",
    secondaryImage: "/images/projects/project-17.jpg",
    description:
      "An upscale modern studio space balancing sound-dampening fluted timber wall finishes, micro-cement flooring, and glare-free architectural linear profiles.",
    area: "3,400 Sq. Ft.",
    duration: "12 Weeks",
    materials: ["Micro-Cement Plaster", "Acoustic Slatted Oak", "Black Anodized Aluminum", "Fluted Glass Dividers"],
    tags: ["Commercial Architecture", "Corporate Studio", "Acoustic Design"],
    featured: true,
  },
  {
    id: "serene-powder-room-spa",
    title: "Bespoke Monochrome Spa & Vanity",
    category: "interior",
    categoryLabel: "Bespoke Bath",
    location: "Greater Kailash",
    year: "2026",
    image: "/images/projects/project-18.jpg",
    secondaryImage: "/images/projects/project-19.jpg",
    description:
      "A serene spa-inspired ensuite highlighting floating natural stone vanity basins, backlit arched vanity mirrors, and wall-hung matte black fixtures.",
    area: "210 Sq. Ft.",
    duration: "4 Weeks",
    materials: ["Terrazzo Tile", "Brushed Gunmetal Brassware", "Fluted Glass Shower Screen"],
    tags: ["Spa Bathroom", "Minimalist Vanity", "Luxury Bath"],
    featured: false,
  },
  {
    id: "private-terrace-penthouse-pavilion",
    title: "Verdant Sky Garden & Terrace Pavilion",
    category: "architecture",
    categoryLabel: "Terrace Architecture",
    location: "Aerocity",
    year: "2025",
    image: "/images/projects/project-20.jpg",
    secondaryImage: "/images/projects/project-21.jpg",
    description:
      "Weather-resistant pergola structure with operable louvers, custom outdoor wet bar, integrated planters, and cozy sunken seating firepit.",
    area: "950 Sq. Ft.",
    duration: "6 Weeks",
    materials: ["WPC Decking", "Powder-Coated Aluminum Pergola", "Granite Bar Counter", "Exterior Warm Uplighting"],
    tags: ["Landscape Architecture", "Sky Pavilion", "Outdoor Living"],
    featured: false,
  },
];

export const statistics = [
  { value: "25+", label: "Bespoke Projects Delivered", detail: "Across Residential & Commercial" },
  { value: "100%", label: "Photorealistic Precision", detail: "Exact 1:1 Physical Execution" },
  { value: "4+", label: "Years of Firm Mastery", detail: "Turnkey Architecture & Interiors" },
];

export const testimonials = [
  {
    quote:
      "1 Dream Design transformed our vision for our multi-tier villa into a breathtaking reality. The exact precision between their 3D photorealistic renders and the final handover was 100% identical. True masters of space.",
    author: "Vikram & Radhika Singhania",
    project: "Zenith Multi-Tier Architectural Villa",
    location: "DLF Phase 5, Gurugram",
  },
  {
    quote:
      "The emerald marble master suite they designed is nothing short of a six-star boutique hotel experience in our own home. Their attention to lighting, joinery, and shadow gaps is extraordinary.",
    author: "Arjun Oberoi",
    project: "Emerald Sanctuary Master Suite",
    location: "Vasant Vihar, New Delhi",
  },
  {
    quote:
      "Our kids are in love with their new cosmic bedroom. The integrated circular moon niches and hidden study desk make it playful yet clutter-free and sophisticated.",
    author: "Pooja & Devendra Mehra",
    project: "Celestial Creative Children's Suite",
    location: "Noida Sector 44",
  },
];
