import { CollectionConfig } from 'payload/types';

const Charactheristics: CollectionConfig = {
  slug: 'characteristic',
  labels: {
    singular: "Karateristika",
    plural: "Karakteristike",
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
      label: "Ime Karakteristike",
      type: 'text',
    },
    {
      name: 'description',
      label: 'Karakteristike',
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
  ],
}

export default Charactheristics;