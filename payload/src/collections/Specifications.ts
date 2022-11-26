import { CollectionConfig } from 'payload/types';

const Sepcifications: CollectionConfig = {
  slug: 'specification',
  labels: {
    singular: "Specifikacija",
    plural: "Specifikacije",
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
      label: "Ime Specifikacije",
      type: 'text',
    },
    {
      name: 'description',
      label: 'Specifikacije',
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

export default Sepcifications;