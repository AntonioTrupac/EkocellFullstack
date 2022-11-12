import type { CollectionConfig } from "payload/types";

const Onama: CollectionConfig = {
  slug: "o-nama",
  labels: {
    singular: "O nama",
    plural: "O nama",
  },
  fields: [
    {
      name: "naslov",
      label: "Naslov",
      type: "text",
      required: true,
    },
    {
      name: "o-nama",
      label: "O nama",
      type: "richText",
      required: true,
    },
  ],
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  upload: true,
};

export default Onama;
