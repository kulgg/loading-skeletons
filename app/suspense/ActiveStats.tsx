import StatsCard from "@/components/StatsCard";
import { fetchStats } from "@/lib/fetch";
import { Activity, DollarSign } from "lucide-react";

async function ActiveStats() {
  const activeStats = await fetchStats("active");
  return (
    <StatsCard
      title={activeStats.title}
      stat={activeStats.stat}
      subline={activeStats.subline}
      icon={<Activity className="h-4 w-4 text-muted-foreground" />}
    />
  );
}

export default ActiveStats;
