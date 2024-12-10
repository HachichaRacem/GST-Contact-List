const url = "https://gis-api.aiesec.org/graphql";
const accessToken = "qaAppPYQze3Oe5MqNvjgDaark2xYTJn8JFK5PuDlwiE";
const headers = {
  "Content-Type": "application/json",
  Authorization: `${accessToken}`,
};

export async function fetchRegions() {
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  console.log("Waiting for 3000 ms");
  await sleep(3000);
  console.log("3000 ms are over");

  const query =
    'query {committees(filters:{tag:"Region"}){data{id full_name sub_office_count suboffices{id full_name}}}}';
  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  console.log(JSON.stringify(data));
  return data;
}
