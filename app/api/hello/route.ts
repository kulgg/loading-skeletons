import { sleep } from "@/lib/utils";

export async function GET(request: Request) {
  await sleep(1000);
  return new Response("jojojo");
}
