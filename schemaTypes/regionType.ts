import { defineField, defineType } from 'sanity'

export const regionType = defineType({
  type: "document",
  name: "region",
  title: "Region",
  fields: [
    defineField({
      type: "string",
      name: "region",
      title: "Region",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "reference",
      name: "country",
      title: "Country",
      to: [{ type: "country" }],
      validation: (e) => e.required(),
    }),
    defineField({ type: "text", name: "about", title: "About" }),
  ],
});
