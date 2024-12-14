import {defineField, defineType} from 'sanity'

export const grapeVariety = defineType({
  type: "document",
  name: "grapeVariety",
  title: "Grape variety",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Name",
      description: "e.g. Pinot Noir, Chardonnay, etc",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "string",
      name: "type",
      title: "Type",
      description: "Red or White",
      validation: (e) => e.required(),
    }),
  ],
});
