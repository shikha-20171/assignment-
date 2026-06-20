import type { Lead } from "@/types/lead";
import { Card } from "@/components/ui/Card";

interface LeadTableProps {
  items: Lead[];
}

export function LeadTable({ items }: LeadTableProps) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm text-slate-200/80">
          <thead className="bg-white/5 text-slate-300/70">
            <tr>
              <th className="px-5 py-4 font-medium">Lead ID</th>
              <th className="px-5 py-4 font-medium">Company</th>
              <th className="px-5 py-4 font-medium">Contact</th>
              <th className="px-5 py-4 font-medium">Product</th>
              <th className="px-5 py-4 font-medium">Source</th>
              <th className="px-5 py-4 font-medium">Stage</th>
            </tr>
          </thead>
          <tbody>
            {items.map((lead) => (
              <tr key={lead.id} className="border-t border-white/10">
                <td className="px-5 py-4">{lead.id}</td>
                <td className="px-5 py-4">{lead.company}</td>
                <td className="px-5 py-4">
                  <div>{lead.contactName}</div>
                  <div className="text-slate-400">{lead.email}</div>
                </td>
                <td className="px-5 py-4">{lead.productInterest}</td>
                <td className="px-5 py-4">{lead.source}</td>
                <td className="px-5 py-4">{lead.stage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
