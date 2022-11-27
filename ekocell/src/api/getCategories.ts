import type { Media } from "payload-types";

type GenericSubCategory = {
  id: string;
  title?: string;
  description?: {
    [k: string]: unknown;
  }[];
  images: {
    mainImage: Media;
    gridImageOne: Media;
    gridImageTwo: Media;
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
};

type Category = {
  id: string;
  title?: string;
  description?: string;
  category: {
    slug: string;
    ime?: string;
    kratkiopis?: string;
    opis?: string;
    characteristics?: GenericSubCategory;
    specifications?: GenericSubCategory;
    usages?: GenericSubCategory;
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
};

type JSONResponse = {
  errors?: Array<{ message: string }>;
  data?: {
    kategorije: {
      docs: Category[];
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
            description
            category {
              slug
              ime
              kratkiopis
              opis
              characteristics {
                description
                images {
                  mainImage {
                    url
                  }
                  gridImageOne {
                    url
                  }
                  gridImageTwo {
                    url
                  }
                }
              }
              specifications {
                description
                images {
                  mainImage {
                    url
                  }
                  gridImageOne {
                    url
                  }
                  gridImageTwo {
                    url
                  }
                }
              }
              usages {
                description
                images {
                  mainImage {
                    url
                  }
                  gridImageOne {
                    url
                  }
                  gridImageTwo {
                    url
                  }
                }
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
