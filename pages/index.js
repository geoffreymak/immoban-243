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
import Property from "../components/Property";
import LatestProperty from "../components/LatestProperty";

const query = `//groq
  *[_type == "product" && defined(slug.current)]
`;

function IndexPage(props) {
  // const { productsData, preview } = props;
  // const router = useRouter();

  // if (!router.isFallback && !productsData) {
  //   return <Error statusCode={404} />;
  // }
  // const { data: products } = usePreviewSubscription(query, {
  //   initialData: productsData,
  //   enabled: preview || router.query.preview !== null,
  // });

  return (
    <>
      <Header />
      <Purcharse />
      <Intro />
      <Property />
      <Team />
      <Services />
      <LatestProperty />
      <Feature />
      <Counter />
      <Purcharse />
      <Testimonial />
      <Footer />
      <Copyright />
      <Preloader />
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

export default IndexPage;
