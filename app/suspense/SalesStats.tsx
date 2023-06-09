import StatsCard from "@/components/StatsCard";
import { fetchStats } from "@/lib/fetch";
import { CreditCard, DollarSign } from "lucide-react";

async function SalesStats() {
  const salesStats = await fetchStats("sales");

  return (
    <StatsCard
      title={salesStats.title}
      stat={salesStats.stat}
      subline={salesStats.subline}
      icon={<CreditCard className="h-4 w-4 text-muted-foreground" />}
    />
  );
}

export default SalesStats;
