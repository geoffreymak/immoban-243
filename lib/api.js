import client, { previewClient } from "./sanity";

const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

const postFields = `
  'id':_id,
  avenue,
  commune,
  description,
  prix,
  province,
  category,
  quartier,
  type,
  title,
  'date': _createdAt,
  'slug': slug.current,
  image,
`;
const agentFields = `
  'id':_id,
  name,
  role,
  image,
`;

const testimonialFields = `
  'id':_id,
  name,
  role,
  image,
  testimonial,
`;

const getClient = (preview) => (preview ? previewClient : client);

export async function getPreviewPostBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields}
      body
    }`,
    { slug }
  );
  return data[0];
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`);
  return data;
}

export async function getAllPostsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "house"] | order(publishedAt desc){
      ${postFields}
    }`);
  return getUniquePosts(results);
}

export async function getFiltredPosts(
  { prix, type, categorie, commune, province, quartier },
  postRange
) {
  const results = await getClient(false).fetch(`*[_type == "house" && 
    prix >= ${prix[0]} && prix <= ${prix[1]} && 
    commune match "${commune}" && 
    province match "${province}" &&
    type match "${type}" &&
    category match "${categorie}" &&
    quartier match "${quartier}*"
  ] | order(_createdAt desc){
      ${postFields}
    }[${postRange[0]}...${postRange[1]}]`);
  return getUniquePosts(results);
}

export async function getLatestPosts(maxPost) {
  const results = await getClient(false)
    .fetch(`*[_type == "house"] | order(_createdAt desc){
      ${postFields}
    }[0...${maxPost}]`);
  return getUniquePosts(results);
}

export async function getFiltredPostsCount({
  prix,
  type,
  categorie,
  commune,
  province,
  quartier,
}) {
  const results = await getClient(false).fetch(`count(*[_type == "house" && 
    prix >= ${prix[0]} && prix <= ${prix[1]} && 
    commune match "${commune}" && 
    province match "${province}" &&
    type match "${type}" &&
    category match "${categorie}" &&
    quartier match "${quartier}*"
  ] | order(publishedAt desc){
      ${postFields}
    })`);
  return results;
}

export async function getAgentsForHome(preview) {
  const results = await getClient(preview).fetch(`*[_type == "agent"]{
      ${agentFields}
    }`);
  return results;
}

export async function getTestimoniesForHome(preview) {
  const results = await getClient(preview).fetch(`*[_type == "testimonial"]{
      ${testimonialFields}
    }`);
  return results;
}

export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
        'comments': *[
                      _type == "comment" && 
                      post._ref == ^._id && 
                      approved == true] {
          _id, 
          name, 
          email, 
          comment, 
          _createdAt
        }
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`,
      { slug }
    ),
  ]);
  return { post, morePosts: getUniquePosts(morePosts) };
}
