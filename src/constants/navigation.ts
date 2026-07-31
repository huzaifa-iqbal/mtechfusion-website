export type NavigationItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Software Engineering", href: "/services#software-engineering" },
      { label: "Web & Digital Experience", href: "/services#web-digital" },
      { label: "Cloud & Infrastructure", href: "/services#cloud-infrastructure" },
      { label: "Cybersecurity", href: "/services#cybersecurity" },
      { label: "AI & Automation", href: "/services#ai-automation" },
      { label: "Data & Intelligence", href: "/services#data-intelligence" },
      { label: "Managed Technology", href: "/services#managed-technology" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Digital Product Launch", href: "/solutions#digital-products" },
      { label: "Digital Transformation", href: "/solutions#transformation" },
      { label: "AI Workflow Automation", href: "/solutions#automation" },
      { label: "Secure Cloud Modernization", href: "/solutions#cloud-modernization" },
      { label: "Data & Analytics", href: "/solutions#data-analytics" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
