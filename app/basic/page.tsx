export default async function Basic() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/hello`,
    { cache: "no-cache" }
  );
  const json = await response.text();

  return (
    <main className="">
      <div>{json}</div>
    </main>
  );
}
