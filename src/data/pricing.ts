export const pricingPlans = [
  {
    name: "Starter",
    price: "Custom",
    description: "For small teams that need a clean starting point for digital operations.",
    features: ["Small Teams", "CRM Access", "Basic Support", "Business Website Setup"]
  },
  {
    name: "Growth",
    price: "Custom",
    description: "For growing businesses that need CRM, automation, and customer-facing workflows.",
    features: ["CRM + Automation", "Customer Portal", "Demo Booking Flow", "Support Workflow Setup"]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For full ecosystem rollouts across products, AI workflows, and business operations.",
    features: ["Full Ecosystem", "AI Features", "Dedicated Support", "Platform Architecture"]
  }
] as const;
