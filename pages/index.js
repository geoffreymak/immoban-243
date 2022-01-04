import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import ProductsPage from "../components/ProductsPage";
import Copyright from "../components/Copyright";
import Counter from "../components/Counter";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Preloader from "../components/Preloader";
import Purcharse from "../components/Purcharse";
import Services from "../components/Services";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
// import Property from "../components/Property";
import LatestProperty from "../components/LatestProperty";
import PropertyDetail from "../components/PropertyDetail";

import {
  getLatestPosts,
  getAgentsForHome,
  getTestimoniesForHome,
} from "../lib/api";

const query = `//groq
  *[_type == "product" && defined(slug.current)]
`;

function IndexPage({ latestPosts, allAgents, allTestimonies, preview }) {
  return (
    <>
      {/* <Header />
      <Purcharse /> */}
      <Intro />
      {/* <PropertyDetail /> */}
      <Team teams={allAgents} />
      <Services />
      <LatestProperty posts={latestPosts} />
      <Counter />
      <Feature />
      <Purcharse />
      <Testimonial testimonies={allTestimonies} />
      {/* <Footer />
      <Copyright />
      <Preloader /> */}
      {/* <ProductsPage products={products} /> */}
    </>
  );
}

// export async function getStaticProps({ params = {}, preview = false }) {
//   const productsData = await getClient(preview).fetch(query);

//   return {
//     props: {
//       preview,
//       productsData,
//     },
//   };
// }

export async function getStaticProps({ preview = false }) {
  const latestPosts = await getLatestPosts(6);
  const allAgents = await getAgentsForHome(preview);
  const allTestimonies = await getTestimoniesForHome(preview);

  return {
    props: { latestPosts, allAgents, allTestimonies, preview },
    revalidate: 1,
  };
}

export default IndexPage;
