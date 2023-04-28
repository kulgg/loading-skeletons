import { sleep } from "@/lib/utils";
import { randomInt } from "crypto";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const type = pathname.split("/").at(-1);

  await sleep(randomInt(1500));

  if (type === "revenue") {
    return NextResponse.json({
      title: "Total Revenue",
      stat: "$45,231.89",
      subline: "+20.1% from last month",
    });
  }
  if (type === "subscriptions") {
    return NextResponse.json({
      title: "Subscriptions",
      stat: "+2350",
      subline: "+180.1% from last month",
    });
  }
  if (type === "sales") {
    return NextResponse.json({
      title: "Sales",
      stat: "+12,234",
      subline: "+19% from last month",
    });
  }
  if (type === "active") {
    return NextResponse.json({
      title: "Active Now",
      stat: "+573",
      subline: "+201 since last hour",
    });
  }

  return NextResponse.json({ message: "invalid type" });
}
