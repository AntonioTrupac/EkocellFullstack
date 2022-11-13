import { CollectionConfig } from 'payload/types';

const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: "Kategorija",
    plural: "Kategorije",
  },
  admin: {
    defaultColumns: ['title', 'category', 'updatedAt'],
    useAsTitle: 'listName',
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
          name: 'specifikacijeiprednost',
          label: 'Specifikacije i prednosti',
          type: 'array',
          fields: [
            {
              name: 'specifikacija',
              type: 'richText'
            },
            {
              name: 'prednosti',
              type: 'richText'
            }
          ]
        }
      ]
    },
  ],
}

export default Categories;