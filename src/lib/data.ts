export const profile = {
  name: "Rabbani Mohammad Kuthubhe Shaik",
  shortName: "Rabbani Shaik",
  initials: "RS",
  title: "Senior Product Manager",
  focus: "CRM & Customer Data Platforms · Identity Resolution · Data Governance",
  location: "Dubai, UAE",
  phone: "+971 56 526 8682",
  email: "rabbaniau@gmail.com",
  linkedin: "https://linkedin.com/in/rabbani-shaik-3a6025a7",
  summary:
    "Senior Product Manager with 10+ years in technology and 7+ years across CRM, customer data platforms, loyalty, and MarTech — specializing in turning fragmented customer data into a unified, governed single source of truth. Currently leading the customer data platform for Apparel Group across 85+ brands, 14 countries, and millions of customers, owning identity resolution, data quality, large-scale migrations, multi-region segmentation, and access governance.",
};

export const heroStats = [
  { value: "10+", label: "Years in technology" },
  { value: "85+", label: "Brands supported" },
  { value: "14", label: "Countries in scope" },
  { value: "16M+", label: "Customer profiles migrated" },
];

export const stats = [
  { value: "10+", label: "Years in technology" },
  { value: "7+", label: "Years in CRM & CDP" },
  { value: "85+", label: "Brands across the group" },
  { value: "14", label: "Countries" },
  { value: "16M", label: "Profile records migrated" },
  { value: "48M", label: "Transaction summaries" },
  { value: "98M", label: "Transaction line items" },
  { value: "60%", label: "Growth in registrations" },
];

export type Experience = {
  company: string;
  companyMeta: string;
  role: string;
  period: string;
  location: string;
  summary?: string;
  groups: { heading?: string; bullets: string[] }[];
};

export const experiences: Experience[] = [
  {
    company: "Apparel Group",
    companyMeta: "Global retail group · 2,200+ stores · 85+ brands · 14 countries",
    role: "Product Lead — CRM, Customer Data & MarTech Platforms",
    period: "Oct 2021 — Present",
    location: "Dubai, UAE",
    groups: [
      {
        heading: "Flagship — Customer Data Platform & MoEngage",
        bullets: [
          "Delivered a large-scale migration of unified customer data from the enterprise data warehouse to the MoEngage CDP — 16M profile records, 48M transaction summaries, 98M transaction line items, and 500K loyalty point balances — owning identity resolution, data cleaning, field mapping, and end-to-end testing.",
          "Defined the unique-identification logic to resolve customer identity across systems, establishing a clean single customer view as the basis for segmentation and engagement.",
          "Leading a multi-region consolidation of the GCC customer base onto a single unified dashboard — migrating ~13M profiles and ~36M transactions and implementing Teams-based access governance to isolate campaigns and data between business units while preserving data integrity.",
          "Designed the GCC vs. India data segmentation for the group super-app, partitioning transaction data using store code as the unique cross-region key to guarantee accurate regional separation.",
          "Own the MoEngage – Epsilon (loyalty) integration, coordinating profile and transaction data feeds from the in-house data team into the CDP to keep customer and loyalty data synchronized.",
        ],
      },
      {
        heading: "Loyalty, MarTech & Analytics",
        bullets: [
          "Led the loyalty platform roadmap and migrations that grew customer registrations by 60% over three years, onboarded 15 brands, and contributed a 30% increase in loyalty-driven sales — recognized as Apparel Group Retail Employee of the Year 2023.",
          "Translate marketing, CRM, and growth requirements into product specs, workflows, data capabilities, and automation; partner closely with engineering, data, CRM, and vendors.",
          "Lead discovery across data integrations, performance reporting, attribution-style insights, alerts, and campaign-readiness workflows; validate with rapid prototypes before build.",
          "Establish governance, SOPs, and documentation ensuring consistent, high-quality execution across brands and regions.",
        ],
      },
    ],
  },
  {
    company: "Chalhoub Group",
    companyMeta: "Luxury retail group · $3B+ revenue · 600+ stores",
    role: "Product & Technical Lead — Retail Systems & Cloud Platforms",
    period: "Nov 2019 — Sep 2021",
    location: "Dubai, UAE",
    groups: [
      {
        bullets: [
          "Led enterprise product initiatives across POS, loyalty, and cloud platforms, owning requirements and workflows through large-scale modernization and cloud migration.",
          "Acted as the primary interface between business stakeholders and engineering; improved visibility into transaction data, customer behaviour, and operational performance.",
          "Owned testing strategy, rollout readiness, and post-launch stabilization for mission-critical systems.",
        ],
      },
    ],
  },
  {
    company: "Edeka Digital",
    companyMeta: "Digital retail & analytics platforms",
    role: "Technical Consultant — Digital & Analytics Systems",
    period: "Oct 2018 — Nov 2019",
    location: "Hamburg, Germany",
    groups: [
      {
        bullets: [
          "Supported large-scale digital retail platforms including POS and payments; improved platform reliability and reporting accuracy through structured QA and automation.",
        ],
      },
    ],
  },
  {
    company: "Infosys Ltd",
    companyMeta: "Enterprise retail & analytics platforms",
    role: "Project & QA Lead — Enterprise Platforms",
    period: "Oct 2013 — Sep 2018",
    location: "Hyderabad, India",
    groups: [
      {
        bullets: [
          "Delivered transformation and quality initiatives for enterprise retail and analytics platforms; supported multi-region rollouts of customer-facing and internal SaaS platforms.",
        ],
      },
    ],
  },
];

export const skillGroups = [
  {
    title: "CRM & Customer Data",
    blurb: "Unified customer views built on clean, governed foundations.",
    items: ["CRM Platforms", "Customer Data Platforms (CDP)", "MoEngage", "Loyalty Platforms", "Single Source of Truth", "Identity Resolution"],
  },
  {
    title: "Data & Integration",
    blurb: "Fragmented systems, resolved into one coherent model.",
    items: ["Customer Data Modelling", "Data Migration at Scale", "System Integrations & APIs", "Data Warehouse Pipelines", "Data Mapping, Cleaning & Validation"],
  },
  {
    title: "Governance & Quality",
    blurb: "Trustworthy data across every brand and region.",
    items: ["Data Governance Frameworks", "Access Control / Data Segregation", "Data Integrity & Consistency", "Multi-Business / Multi-Region Management"],
  },
  {
    title: "Product & Delivery",
    blurb: "From discovery to go-live, measured by adoption.",
    items: ["Product Strategy & Roadmap", "Discovery", "PRDs & User Stories", "Acceptance Criteria", "UAT & Go-Live", "Agile / SAFe"],
  },
  {
    title: "Stakeholder & Tools",
    blurb: "Aligning commercial, engineering, and data teams.",
    items: ["Cross-Functional Leadership", "Vendor Management", "Jira", "Confluence"],
  },
];

export const certifications = [
  {
    title: "SAFe 6.0 Product Owner / Product Manager (POPM)",
    subtitle: "Certification",
  },
  {
    title: "Product School",
    subtitle: "Mini Certifications",
  },
  {
    title: "Retail Employee of the Year 2023",
    subtitle: "Apparel Group",
  },
];

export const education = {
  degree: "Bachelor of Technology (B.Tech)",
  school: "Andhra University, India",
};

export const portfolioPlaceholders = [
  {
    title: "Unified Customer Data Migration",
    tag: "CDP · Identity Resolution",
    description:
      "A deep dive into resolving 16M+ profiles across systems into a single governed customer view — case study coming soon.",
  },
  {
    title: "Multi-Region Access Governance",
    tag: "Data Governance",
    description:
      "How Teams-based access controls isolate campaigns and data across GCC business units without breaking data integrity.",
  },
  {
    title: "Loyalty Platform Growth Playbook",
    tag: "Loyalty · MarTech",
    description:
      "The roadmap behind 60% registration growth and a 30% lift in loyalty-driven sales across 15 brands.",
  },
];
