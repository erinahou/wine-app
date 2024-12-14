import {defineField, defineType} from 'sanity'

export const countryType = defineType({
  type: "document",
  name: "country",
  title: "Country",
  fields: [
    defineField({
      type: "string",
      name: "country",
      title: "Country",
      validation: (e) => e.required(),
    }),
  ],
});
