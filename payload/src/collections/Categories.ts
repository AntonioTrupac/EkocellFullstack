import { CollectionConfig } from 'payload/types';

const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: "kategorija",
    plural: "kategorije",
  },
  admin: {
    defaultColumns: ['title', 'category', 'updatedAt'],
    // useAsTitle: 'kategorije',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'category',
      label: "Kategorije",
      type: 'array',
      fields: [
        {
          name: 'slug',
          type: 'text',
          required: true,
        },
        {
          name: 'ime',
          type: 'text',
        },
        {
          name: 'kratkiopis',
          label: "Kratki opis",
          type: "text"
        },
        {
          name: 'opis',
          type: "textarea"
        },
        {
          type: "relationship",
          name: "characteristics",
          relationTo: "characteristic",
          label: "Karakteristike",
        },
        {
          type: "relationship",
          name: "specifications",
          relationTo: "specification",
          label: "Specifikacije",
        }, 
        {
          type: "relationship",
          name: "usages",
          relationTo: "usage",
          label: "Uporaba",
        }
      ]
    },
  ],
}

export default Categories;