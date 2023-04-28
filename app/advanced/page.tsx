import StatsCard from "@/components/StatsCard";
import { fetchStats } from "@/lib/fetch";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";

async function Advanced() {
  const revenueStatsPromise = fetchStats("revenue");
  const subscriptionsStatsPromise = fetchStats("subscriptions");
  const salesStatsPromise = fetchStats("sales");
  const activeStatsPromise = fetchStats("active");

  const [revenueStats, subscriptionsStats, salesStats, activeStats] =
    await Promise.all([
      revenueStatsPromise,
      subscriptionsStatsPromise,
      salesStatsPromise,
      activeStatsPromise,
    ]);

  return (
    <div className="grid grid-cols-2 gap-6">
      <StatsCard
        title={revenueStats.title}
        stat={revenueStats.stat}
        subline={revenueStats.subline}
        icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
      />
      <StatsCard
        title={subscriptionsStats.title}
        stat={subscriptionsStats.stat}
        subline={subscriptionsStats.subline}
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
      />
      <StatsCard
        title={salesStats.title}
        stat={salesStats.stat}
        subline={salesStats.subline}
        icon={<CreditCard className="h-4 w-4 text-muted-foreground" />}
      />
      <StatsCard
        title={activeStats.title}
        stat={activeStats.stat}
        subline={activeStats.subline}
        icon={<Activity className="h-4 w-4 text-muted-foreground" />}
      />
    </div>
  );
}

export default Advanced;
