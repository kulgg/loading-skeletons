export interface StatsType {
  title: string;
  stat: string;
  subline: string;
}

export async function fetchStats(type: string): Promise<StatsType> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/data/${type}`,
    { cache: "no-cache" }
  );
  return await response.json();
}
