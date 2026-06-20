export interface Lead {
  id: string;
  company: string;
  contactName: string;
  email: string;
  productInterest: string;
  source: string;
  stage: "New" | "Qualified" | "Demo Scheduled" | "Proposal";
}
