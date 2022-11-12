import type { ONama } from "../../payload-types";

type JSONResponse = {
  errors?: Array<{ message: string }>;
  data?: {
    Onama: Pick<ONama, "naslov" | "description">;
  };
};

export async function getOnama() {
  const response = await fetch("http://localhost:3100/api/graphql", {
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

  const { data, errors }: JSONResponse = await response.json();

  if (response.ok) {
    const onama = data?.Onama;

    if (onama) {
      return onama;
    }

    return Promise.reject(new Error(`No data has been fetched!"`));
  }
  const error = new Error(
    errors?.map((e) => e.message).join("\n") ?? "unknown"
  );
  return Promise.reject(error);
}
