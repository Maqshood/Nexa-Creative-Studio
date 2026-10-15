export const studioInfo = {
  name: "Nexa Creative Studio",
  tagline: "We turn bold ideas into digital experiences.",
  trustStatement: "Design-led. Strategy-driven. Built for impact.",
  headline: "Good Ideas Deserve Exceptional Digital Experiences.",
  subheadline: "We help ambitious brands build meaningful connections through thoughtful design, modern technology, and creative digital strategy.",
  aboutHeading: "Small Studio. Big Thinking.",
  aboutText: "Nexa Creative Studio is an independent digital creative agency helping businesses transform ideas into memorable digital experiences. We combine thoughtful design, clear strategy, and modern development to create work that looks exceptional and serves a purpose.",
  location: "Metropolis Design District",
  email: "hello@nexacreativestudio.demo",
  hours: "Monday – Friday, 9:00 AM – 6:00 PM",
  year: new Date().getFullYear(),
};

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

export const principles = [
  {
    number: "01",
    title: "Creativity",
    description: "We believe memorable work starts with originality. Every design system is uniquely crafted to elevate the brand's identity without relying on cookie-cutter templates."
  },
  {
    number: "02",
    title: "Collaboration",
    description: "Great digital products are born from open dialogue. We work closely with founders and creative leaders as an extension of their internal team."
  },
  {
    number: "03",
    title: "Clarity",
    description: "Intuitive user journeys, clean code architectures, and transparent communication. We cut through digital clutter to make complex ideas effortlessly simple."
  }
];

export const services = [
  {
    id: "web-design",
    title: "Web Design",
    description: "User-focused website design, wireframes, visual systems, and intuitive digital experiences.",
    icon: "Layout",
    deliverables: [
      "UI/UX Design & Wireframing",
      "Interactive Prototyping",
      "Design Systems & Component Libraries",
      "Responsive Layout Architecture"
    ],
    highlight: "Human-centered interfaces crafted for visual distinction and high conversion."
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "Responsive, accessible, performant websites built using modern frontend technologies.",
    icon: "Code2",
    deliverables: [
      "Modern React / Next.js Applications",
      "Tailwind CSS & Clean Styling",
      "Accessible & Semantic Markup",
      "Fast Core Web Vitals & SEO"
    ],
    highlight: "Clean, maintainable codebases engineered for speed, security, and scalability."
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    description: "Visual identity systems, typography, color palettes, and consistent brand experiences.",
    icon: "Sparkles",
    deliverables: [
      "Brand Positioning & Guidelines",
      "Typography & Color Palettes",
      "Iconography & Digital Assets",
      "Cross-Platform Consistency"
    ],
    highlight: "Cohesive visual languages that resonate deeply with modern audiences."
  },
  {
    id: "digital-strategy",
    title: "Digital Strategy",
    description: "Digital planning, audience understanding, content structure, and conversion-focused improvements.",
    icon: "Compass",
    deliverables: [
      "Audience & Competitor Research",
      "Content Architecture & Messaging",
      "Conversion Funnel Optimization",
      "Launch & Iteration Roadmaps"
    ],
    highlight: "Data-informed roadmaps aligning creative choices with real business goals."
  }
];

export const portfolioProjects = [
  {
    id: "forma-living",
    title: "Forma Living",
    tagline: "Contemporary Furniture & Living Space Concept",
    category: "E-Commerce & Digital Architecture",
    description: "An editorial e-commerce website concept for a contemporary furniture and interior design brand. Features tactile visual storytelling, spatial 3D product previews, and a frictionless checkout flow.",
    year: "2024 Concept",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
    tags: ["E-Commerce", "UI/UX Concept", "Art Direction", "Tailwind CSS"],
    clientConcept: "Illustrative Concept for Contemporary Home Goods",
    deliverables: ["Product Catalog Concept", "Mobile Checkout UX", "Minimalist Visual System", "Micro-Interactions"],
    challenge: "Traditional furniture e-commerce often feels cluttered with specs. Forma needed an editorial gallery feel where furniture pieces breathe like works of art.",
    solution: "Designed an asymmetric editorial grid with generous whitespace, high-contrast typography, and intuitive lifestyle hot-spots."
  },
  {
    id: "luma-skincare",
    title: "Luma Skincare",
    tagline: "Minimal Product-Focused Botanical Skincare Concept",
    category: "Brand Identity & Web Experience",
    description: "A minimal, clean product-focused digital experience concept for a premium clean skincare brand. Emphasizes organic ingredients, transparent formulations, and a calming aesthetic.",
    year: "2024 Concept",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
    tags: ["Brand Identity", "Minimalist Design", "Product Experience", "Mobile First"],
    clientConcept: "Illustrative Concept for Botanical Skincare",
    deliverables: ["Brand Style Guide", "Ingredient Interactive Explorer", "Mobile Web Concept", "Custom Icons"],
    challenge: "Skincare buyers need quick access to ingredient transparency and skin-type recommendations without getting overwhelmed by dense scientific jargon.",
    solution: "Developed an interactive routine builder with serene earth tones, subtle micro-animations, and clean typographic hierarchy."
  },
  {
    id: "northstar-finance",
    title: "Northstar Finance",
    tagline: "Professional Digital Platform for Modern Wealth Management",
    category: "Fintech Platform & Digital Experience",
    description: "A professional digital experience concept for an institutional wealth management and financial advisory brand. Balances uncompromising trust and security with modern, fluid data visualization.",
    year: "2024 Concept",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    tags: ["Fintech UI", "Data Visualization", "Design System", "Enterprise Web"],
    clientConcept: "Illustrative Concept for Wealth Advisory Platform",
    deliverables: ["Executive Dashboard Preview", "Security & Trust Architecture", "Client Portal UX", "Dark & Light Contrast"],
    challenge: "Finance websites frequently look either dated and bureaucratic or overly flashy like crypto apps. Northstar needed enduring institutional gravitas.",
    solution: "Structured an authoritative, high-clarity interface using deep ink tones, crisp typography, and high-performance interactive portfolio charts."
  }
];

export const processSteps = [
  {
    step: "01",
    name: "Discover",
    tagline: "Understand the goals, audience, and challenges.",
    description: "We begin by immersing ourselves in your brand landscape. Through strategic workshops and audience analysis, we uncover the core problem, user expectations, and key metrics for success.",
    deliverable: "Discovery Insights & Project Scope"
  },
  {
    step: "02",
    name: "Define",
    tagline: "Establish the strategy, structure, and creative direction.",
    description: "Next, we chart the course. We map out information architecture, craft content hierarchies, and define moodboards that set the tone before a single wireframe is drawn.",
    deliverable: "Creative Direction & UX Blueprint"
  },
  {
    step: "03",
    name: "Design & Build",
    tagline: "Turn the concept into a polished, functional digital experience.",
    description: "Design and engineering move in tandem. We build responsive prototypes, assemble scalable design systems, and code clean, performant interfaces using modern web technologies.",
    deliverable: "Interactive Prototypes & Production Code"
  },
  {
    step: "04",
    name: "Launch & Improve",
    tagline: "Publish, test, and refine the finished product.",
    description: "We rigorously test cross-browser compatibility, accessibility standards, and load times. Following deployment, we gather real-world feedback to continually refine and elevate performance.",
    deliverable: "Verified Deployment & Documentation"
  }
];

export const whyChooseUs = [
  {
    icon: "Target",
    title: "Design that serves a purpose",
    description: "We don't create visual flair for the sake of decoration. Every spacing choice, typography scale, and layout structure is designed to guide attention and inspire action."
  },
  {
    icon: "Smartphone",
    title: "Responsive experiences across devices",
    description: "From large 4K studio monitors down to compact mobile displays, your site adapts fluidly with touch-friendly controls and zero layout disruption."
  },
  {
    icon: "MessagesSquare",
    title: "Clear communication and collaboration",
    description: "No agency jargon or communication blackouts. We maintain open, weekly syncs and transparent roadmaps so you are always in the loop."
  },
  {
    icon: "Zap",
    title: "Performance and usability in mind",
    description: "Lightning-fast page load times, strict adherence to WCAG accessibility guidelines, and clean semantic code ensure your audience enjoys a seamless visit."
  }
];

export const sampleTestimonials = [
  {
    id: "sample-1",
    quote: "Nexa took our rough conceptual ideas and translated them into a sophisticated, cohesive digital platform. Their eye for subtle typography and intuitive structure made all the difference.",
    author: "Elena Rostova",
    role: "Creative Director (Fictional Concept)",
    company: "Forma Living Concepts",
    note: "Sample Concept Testimonial — For Demonstration Purposes"
  },
  {
    id: "sample-2",
    quote: "Working with the Nexa team felt effortless. They challenged our assumptions in the best way possible, resulting in a cleaner user flow and a website we are proud to show off.",
    author: "Julian Vance",
    role: "Head of Product (Fictional Concept)",
    company: "Northstar Advisory Group",
    note: "Sample Concept Testimonial — For Demonstration Purposes"
  }
];
