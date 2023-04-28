import { sleep } from "@/lib/utils";
import { randomInt } from "crypto";

export async function GET(request: Request) {
  await sleep(2000);
  return new Response(`${randomInt(100)}`);
}
