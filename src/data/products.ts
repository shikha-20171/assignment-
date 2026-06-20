import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "schoolycore-erp",
    name: "SchoolyCore ERP",
    category: "Business Operations",
    badge: "ERP",
    summary: "A central ERP product for structured operations, reporting, and department-wide visibility.",
    description:
      "SchoolyCore ERP helps teams centralize workflows, automate operations, and keep business data accessible through a single connected control layer.",
    features: ["Workflow automation", "Role-based dashboards", "Business reporting", "Centralized operations"],
    audience: "Organizations that need one operational command center"
  },
  {
    id: "hospital-management-suite",
    name: "Hospital Management Suite",
    category: "Industry Solution",
    badge: "Healthcare",
    summary: "Smooth patient journeys across OPD, IPD, billing, pharmacy, and coordination.",
    description:
      "The HMS product is designed for healthcare teams that need structured patient operations, staff coordination, and reliable billing visibility.",
    features: ["Patient records", "OPD and IPD", "Pharmacy billing", "Doctor coordination"],
    audience: "Hospitals, clinics, and healthcare operators"
  },
  {
    id: "hrm-payroll",
    name: "HRM + Payroll",
    category: "People Operations",
    badge: "HRM",
    summary: "Staff operations with payroll, attendance, leave workflows, and onboarding support.",
    description:
      "HRM + Payroll simplifies workforce management with a cleaner employee experience and reliable administrative workflows.",
    features: ["Payroll automation", "Leave management", "Onboarding", "Policy workflows"],
    audience: "Growing teams and enterprise operations"
  },
  {
    id: "dezoryn-crm",
    name: "Dezoryn CRM",
    category: "Growth Engine",
    badge: "CRM",
    summary: "Lead capture, qualification, pipeline tracking, and demo scheduling in one CRM system.",
    description:
      "Dezoryn CRM is designed to connect website traffic, outreach, and sales execution so teams can respond faster and close with better visibility.",
    features: ["Lead scoring", "Auto assignment", "Demo workflows", "Source analytics"],
    audience: "Sales teams and service-led businesses"
  },
  {
    id: "inventory-management",
    name: "Inventory Management",
    category: "Supply Chain",
    badge: "Inventory",
    summary: "Real-time stock visibility, vendor orchestration, and procurement intelligence.",
    description:
      "Built for organizations that need operational clarity across stock movement, reorder thresholds, vendor relationships, and warehouse visibility.",
    features: ["Stock tracking", "Vendor records", "Purchase workflows", "Warehouse visibility"],
    audience: "Retail, distribution, and enterprise ops"
  },
  {
    id: "support-launch-center",
    name: "Support + Launch Center",
    category: "Retention & Launch",
    badge: "Support",
    summary: "Support desk, launch pages, waitlists, and announcement flows connected to your sales process.",
    description:
      "This product layer combines ticket management, launch campaigns, notifications, and lead collection for companies shipping products fast.",
    features: ["Ticket management", "Waitlists", "Announcements", "CRM lead capture"],
    audience: "Modern SaaS teams and product-led businesses"
  }
];

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}
