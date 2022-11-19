import type { Kategorija } from "payload-types";

type JSONResponse = {
  errors?: Array<{ message: string }>;
  data?: {
    kategorije: {
      docs: Kategorija[];
    };
  };
};

export async function getCategories() {
  const response = await fetch("http://localhost:3100/api/graphql", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query Categories {
        kategorije {
          docs {
            id
            title
            category {
              slug
              ime
              kratkiopis
              opis
              specifikacijeiprednost {
                specifikacija
                prednosti
              }
            }
          }
        }
      }`,
    }),
  });

  const { data, errors }: JSONResponse = await response.json();

  if (response.ok) {
    const categories = data?.kategorije.docs[0];

    if (categories) {
      return categories;
    }

    return Promise.reject(new Error(`No data has been fetched!"`));
  }

  const error = new Error(
    errors?.map((e) => e.message).join("\n") ?? "unknown"
  );

  return Promise.reject(error);
}
