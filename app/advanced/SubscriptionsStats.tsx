import StatsCard from "@/components/StatsCard";
import { fetchStats } from "@/lib/fetch";
import { DollarSign } from "lucide-react";

async function SubscriptionStats() {
  const subscriptionsStats = await fetchStats("subscriptions");
  return (
    <StatsCard
      title={subscriptionsStats.title}
      stat={subscriptionsStats.stat}
      subline={subscriptionsStats.subline}
      icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
    />
  );
}

export default SubscriptionStats;
