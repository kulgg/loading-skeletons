import StatsCard from "@/components/StatsCard";
import { fetchStats } from "@/lib/fetch";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

async function NoLoading() {
  const revenueStats = await fetchStats("revenue");
  const subscriptionsStats = await fetchStats("subscriptions");
  const salesStats = await fetchStats("sales");
  const activeStats = await fetchStats("active");

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

export default NoLoading;
