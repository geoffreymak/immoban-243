export default {
  name: "agent",
  title: "Agents",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nom",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Rôle",
      name: "role",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      subtitle: "role",
    },
  },
};
