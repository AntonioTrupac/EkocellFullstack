import { CollectionConfig } from 'payload/types';

const Usages: CollectionConfig = {
  slug: 'usage',
  labels: {
    singular: "Uporaba",
    plural: "Uporabe",
  },
  admin: {
    defaultColumns: ['title','description','updatedAt'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: "Ime Uporabe",
      type: 'text',
    },
    {
      name: 'description',
      label: 'Uporaba',
      type: 'richText',
    },
    {
      name: "images",
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
        },
        {
          name: 'gridImageTwo',
          type: 'upload',
          relationTo: 'media',
        },
      ]
    },
  ],
}

export default Usages;