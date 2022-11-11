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
      access: {
        read: () => true,
      }
    },
  ],
  upload: true,
};

export default Onama;
