import type { GlobalConfig } from "payload/types";

const Onama: GlobalConfig = {
  slug: "onama",
  access: {read: () => true},
  admin: {
    group: 'Admin', 
  },
  fields: [
    {
      name: "naslov",
      label: "Naslov",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Opis",
      type: "richText",
      required: true,
    },
  ],
};

export default Onama;
