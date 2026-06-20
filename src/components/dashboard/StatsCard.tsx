import { Card } from "@/components/ui/Card";

interface StatsCardProps {
  label: string;
  value: string;
  note: string;
}

export function StatsCard({ label, value, note }: StatsCardProps) {
  return (
    <Card className="p-5">
      <p className="text-sm text-slate-300/70">{label}</p>
      <p className="mt-3 font-[family-name:var(--font-display)] text-4xl text-white">{value}</p>
      <p className="mt-2 text-sm text-slate-200/80">{note}</p>
    </Card>
  );
}
