import StatsCard from "@/components/StatsCard";

export default async function Basic() {
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
      />
      <StatsCard
        title={"Subscriptions"}
        stat={"+2350"}
        subline={"+180.1% from last month"}
      />
      <StatsCard
        title={"Sales"}
        stat={"+12,234"}
        subline={"+19% from last month"}
      />
      <StatsCard
        title={"Active Now"}
        stat={"+573"}
        subline={"+201 since last hour"}
      />
    </div>
  );
}
