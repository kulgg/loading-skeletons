import StatsCard from "@/components/StatsCard";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import React from "react";

async function Advanced() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/hello`,
    { cache: "no-cache" }
  );
  const json = await response.text();

  return (
    <div className="grid grid-cols-2 gap-6">
      <StatsCard
        title={"Total Revenue"}
        stat={"$45,231.89"}
        subline={"+20.1% from last month"}
        icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
      />
      <StatsCard
        title={"Subscriptions"}
        stat={"+2350"}
        subline={"+180.1% from last month"}
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
      />
      <StatsCard
        title={"Sales"}
        stat={"+12,234"}
        subline={"+19% from last month"}
        icon={<CreditCard className="h-4 w-4 text-muted-foreground" />}
      />
      <StatsCard
        title={"Active Now"}
        stat={"+573"}
        subline={"+201 since last hour"}
        icon={<Activity className="h-4 w-4 text-muted-foreground" />}
      />
    </div>
  );
}

export default Advanced;
