export default {
  name: "house",
  title: "Maison",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "commune",
      title: "Commune",
      type: "string",
      options: {
        list: [
          "Bandalungwa",
          "Barumbu",
          "Bumbu",
          "Gombe",
          "Kalamu",
          "Kasa-Vubu",
          "Kimbanseke",
          "Kinshasa",
          "Kintambo",
          "Kisenso",
          "Lemba",
          "Limete",
          "Lingwala",
          "Makala",
          "Maluku",
          "Masina",
          "Matete",
          "Mont-Ngafula",
          "Ndjili",
          "Ngaba",
          "Ngaliema",
          "Ngiri-Ngiri",
          "Nsele",
          "Selembao",
        ],
      },
    },
    {
      name: "quartier",
      title: "Quartier",
      type: "string",
    },
    {
      name: "avenue",
      title: "Avenue",
      type: "string",
    },
    {
      name: "province",
      title: "Province",
      type: "string",
    },
    {
      name: "prix",
      title: "Prix",
      type: "number",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: ["Vente", "Location"],
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    // {
    //   name: "categories",
    //   title: "Categories",
    //   type: "array",
    //   of: [{ type: "reference", to: { type: "category" } }],
    // },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    // {
    //   name: "body",
    //   title: "Body",
    //   type: "blockContent",
    // },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
