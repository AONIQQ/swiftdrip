import { defineField, defineType } from "sanity";

export default defineType({
  name: "labPanel",
  title: "Lab Panel",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "tests",
      title: "Tests Included",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
    }),
    defineField({
      name: "turnaroundTime",
      title: "Turnaround Time",
      type: "string",
      description: "Expected time for results (e.g. '2-3 business days')",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "price" },
  },
});
