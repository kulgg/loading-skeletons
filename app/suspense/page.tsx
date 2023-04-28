import StatsCard from "@/components/StatsCard";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchStats } from "@/lib/fetch";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import { Suspense } from "react";
import RevenueStats from "./RevenueStats";
import SubscriptionStats from "./SubscriptionsStats";
import SalesStats from "./SalesStats";
import ActiveStats from "./ActiveStats";

async function Advanced() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Suspense fallback={<Skeleton className="h-32 w-full" />}>
        <RevenueStats />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-32 w-full" />}>
        <SubscriptionStats />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-32 w-full" />}>
        <SalesStats />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-32 w-full" />}>
        <ActiveStats />
      </Suspense>
    </div>
  );
}

export default Advanced;
