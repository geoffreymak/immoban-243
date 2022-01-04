import React from "react";
import Error from "next/error";
// import { groq } from "next-sanity";
import { useRouter } from "next/router";
import Property from "../../components/Property";
// import { getClient, usePreviewSubscription } from "../utils/sanity";

import { getFiltredPostsByQuery } from "../../lib/api";

function Search() {
  const router = useRouter();
  const { query } = router.query;
  const [result, setResult] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getData = async () => {
      const result = await getFiltredPostsByQuery(query);
      setResult(result);
      setLoading(false);
    };
    getData();
  }, [query]);

  return (
    <Property
      title={`Recherche pour '${query}'`}
      loading={loading}
      posts={result}
    />
  );
}

// export async function getStaticProps({ params = {} }) {
//   const { query } = params;
//   return {
//     props: { query },
//   };
// }

export default Search;
