import {defineField, defineType} from 'sanity'

export const wineType = defineType({
  type: "document",
  name: "wine",
  title: "Wine",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Wine name",
      description: "",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "date",
      name: "vintage",
      title: "Vintage",
      options: {
        dateFormat: 'YYYY', // Display only the year in the input
      },
      validation: (e) => e.required(),
    }),
    // defineField({
    //   type: "reference",
    //   name: "variety",
    //   title: "Grape variety",
    //   to: [{ type: "grapeVariety" }],
    //   validation: (e) => e.required(),
    // }),
    defineField({
      type: "array",
      name: "varieties", // Changed name to reflect multiple values
      title: "Grape varieties",
      of: [{
        type: "reference",
        to: [{ type: "grapeVariety" }]
      }],
      validation: (e) => e.required(),
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      type: "reference",
      name: "producer",
      title: "Producer",
      to: [{ type: "producer" }],
      validation: (e) => e.required(),
    }),
    defineField({
      type: "reference",
      name: "region",
      title: "Region",
      to: [{ type: "region" }],
      validation: (e) => e.required(),
    }),
    defineField({
      type: "number",
      name: "stock",
      title: "Stock"
    }),
    defineField({
      type: "image",
      name: "bottleImage",
      title: "Wine bottle image",
      description: "",
    }),
    defineField({
      type: "text",
      name: "tastingNotes",
      title: "Tasting notes"
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
    })
  ],
});
