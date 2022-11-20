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
          name: "categoryImages",
          label: "Slike kategorija",
          type: "array",
          fields: [
            {
              name: 'mainImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'gridImageOne',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'gridImageTwo',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ]
        },
        {
          name: 'specifikacije_i_prednost',
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