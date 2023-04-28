import StatsCard from "@/components/StatsCard";
import { fetchStats } from "@/lib/fetch";
import { DollarSign } from "lucide-react";

async function RevenueStats() {
  const revenueStats = await fetchStats("revenue");
  return (
    <StatsCard
      title={revenueStats.title}
      stat={revenueStats.stat}
      subline={revenueStats.subline}
      icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
    />
  );
}

export default RevenueStats;
