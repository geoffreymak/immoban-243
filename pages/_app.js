// import "../styles/index.css";
import Head from "next/head";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>Agence Immoban 243</title>
        <meta
          name="description"
          content="L'immobilier est notre service de prédilection.  pour la gestion de votre patrimoine immobilier , achat , location et vente , confiez vous à  nous. Nous mettons à votre disposition   notre expertise, assistance juridique et notre savoir faire. vous satisfaire est notre préoccupation. Immoban 243 est l'idéal."
        />

        <meta
          name="twitter:description"
          content="L'immobilier est notre service de prédilection.  pour la gestion de votre patrimoine immobilier , achat , location et vente , confiez vous à  nous. Nous mettons à votre disposition   notre expertise, assistance juridique et notre savoir faire. vous satisfaire est notre préoccupation. Immoban 243 est l'idéal."
        />
        <meta name="twitter:image" content="/img/icon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Agence Immoban 243" />
        <meta
          property="og:description"
          content="L'immobilier est notre service de prédilection.  pour la gestion de votre patrimoine immobilier , achat , location et vente , confiez vous à  nous. Nous mettons à votre disposition   notre expertise, assistance juridique et notre savoir faire. vous satisfaire est notre préoccupation. Immoban 243 est l'idéal."
        />
        <meta property="og:image" content="/img/icon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />

        <link rel="stylesheet" type="text/css" href="/fonts/line-icons.css" />

        <link rel="stylesheet" type="text/css" href="/css/slicknav.css" />

        <link
          rel="stylesheet"
          type="text/css"
          href="/css/ion.rangeSlider.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="/css/ion.rangeSlider.skinFlat.css"
        />

        <link rel="stylesheet" type="text/css" href="/css/nivo-lightbox.css" />

        <link rel="stylesheet" type="text/css" href="/css/animate.css" />

        <link rel="stylesheet" type="text/css" href="/css/owl.carousel.css" />

        <link rel="stylesheet" type="text/css" href="/extras/settings.css" />
        <link rel="stylesheet" type="text/css" href="/extras/layers.css" />
        <link rel="stylesheet" type="text/css" href="/extras/navigation.css" />

        <link rel="stylesheet" type="text/css" href="/css/main.css" />

        <link rel="stylesheet" type="text/css" href="/css/responsive.css" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
