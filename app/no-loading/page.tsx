import React from "react";

async function Advanced() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/hello`,
    { cache: "no-cache" }
  );
  const json = await response.text();

  return <div>{json}</div>;
}

export default Advanced;
