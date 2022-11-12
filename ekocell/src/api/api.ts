export async function getOnama() {
  const response = await fetch("http://localhost:3100/api/globals/onama", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query Onama {
      Onama {
        naslov
        description
      }
    }`,
    }),
  });
  const data = await response.json();

  return data;
}
