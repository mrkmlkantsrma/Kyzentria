export type ToolRoute = {
  title: string;
  href: string;
  description: string;
  status: "live" | "planned";
  accent: string;
};

export const toolRoutes: ToolRoute[] = [
  {
    title: "Calculator",
    href: "/calculator",
    description: "Everyday calculators for money, units, percentages, and planning.",
    status: "live",
    accent: "mint",
  },
  {
    title: "PDF",
    href: "/pdf",
    description: "Fast browser-based PDF helpers for common document tasks.",
    status: "live",
    accent: "coral",
  },
  {
    title: "Image",
    href: "/image",
    description: "Image conversion, compression, resizing, and metadata tools.",
    status: "live",
    accent: "blue",
  },
  {
    title: "Compare",
    href: "/compare",
    description: "Clear comparisons for software, services, and work tools.",
    status: "live",
    accent: "gold",
  },
  {
    title: "Resume",
    href: "/resume",
    description: "Resume checks, templates, and job application helpers.",
    status: "live",
    accent: "mint",
  },
  {
    title: "SEO",
    href: "/seo",
    description: "Simple checks for titles, descriptions, keywords, and pages.",
    status: "live",
    accent: "blue",
  },
  {
    title: "Developer",
    href: "/developer",
    description: "JSON, text, color, QR, password, and code utility tools.",
    status: "live",
    accent: "coral",
  },
  {
    title: "Hosting",
    href: "/hosting",
    description: "Hosting comparisons, domain choices, and launch checklists.",
    status: "live",
    accent: "gold",
  },
  {
    title: "Prompt",
    href: "/prompt",
    description: "Reusable prompt templates and AI workflow helpers.",
    status: "live",
    accent: "mint",
  },
];
