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
          name: 'kratki opis',
          type: "text"
        },
        {
          name: 'opis',
          type: "textarea"
        },
        {
          name: 'specifikacije i prednosti',
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