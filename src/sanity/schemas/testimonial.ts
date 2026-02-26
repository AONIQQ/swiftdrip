import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "text",
      title: "Testimonial Text",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (rule) => rule.min(1).max(5).integer(),
      initialValue: 5,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "text" },
  },
});
