import { defineType } from "sanity";

const sample = defineType({
  name: "sample",
  title: "Sample",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "buttonText",
      title: "Learn More",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "categoryheading",
      title: "CategoryHeading",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "carogary",
              title: "Category",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
            // {
            //   name: "link",
            //   title: "Link",
            //   type: "url",
            // },
          ],

          //   to: [{ type: "category" }],
        },
      ],
    },
    {
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
            },
            {
              name: "answer",
              title: "Answer",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
});

export default sample
