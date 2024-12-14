import { defineField, defineType } from 'sanity'

export const producerType = defineType({
  type: "document",
  name: "producer",
  title: "Producer",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Producer (or Domaine) name",
      description: "",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "reference",
      name: "region",
      title: "Region",
      to: [{ type: "region" }],
      validation: (e) => e.required(),
    }),
    defineField({ type: "text", name: "about", title: "About" }),
    defineField({
      type: "image",
      name: "profileImage",
      title: "Profile image",
    }),
  ],
});
