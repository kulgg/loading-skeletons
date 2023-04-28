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
        {/* @ts-expect-error Server Component */}
        <RevenueStats />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-32 w-full" />}>
        {/* @ts-expect-error Server Component */}
        <SubscriptionStats />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-32 w-full" />}>
        {/* @ts-expect-error Server Component */}
        <SalesStats />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-32 w-full" />}>
        {/* @ts-expect-error Server Component */}
        <ActiveStats />
      </Suspense>
    </div>
  );
}

export default Advanced;
