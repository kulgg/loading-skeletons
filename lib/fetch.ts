import { randomInt } from "crypto";
import { sleep } from "./utils";

export interface StatsType {
  title: string;
  stat: string;
  subline: string;
}

export async function fetchStats(type: string): Promise<StatsType> {
  await sleep(randomInt(1500));

  // const a = await fetch("/api/yo", {
  //   cache: "no-cache",
  // });

  if (type === "revenue") {
    return {
      title: "Total Revenue",
      stat: "$45,231.89",
      subline: "+20.1% from last month",
    };
  }
  if (type === "subscriptions") {
    return {
      title: "Subscriptions",
      stat: "+2350",
      subline: "+180.1% from last month",
    };
  }
  if (type === "sales") {
    return {
      title: "Sales",
      stat: "+12,234",
      subline: "+19% from last month",
    };
  }
  if (type === "active") {
    return {
      title: "Active Now",
      stat: "+573",
      subline: "+201 since last hour",
    };
  }

  return {
    title: "",
    stat: "",
    subline: "",
  };
}
