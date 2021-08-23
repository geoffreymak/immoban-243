// import "../styles/index.css";
import Head from 'next/head'

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
     <>
     <Head>
 
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

    <title>Home | EstateBit Real Estate Theme Bootstrap HTML5 Template</title>

   
    <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css"/>
  
    <link rel="stylesheet" type="text/css" href="/fonts/line-icons.css"/>

    <link rel="stylesheet" type="text/css" href="/css/slicknav.css"/>

 
    <link rel="stylesheet" type="text/css" href="/css/ion.rangeSlider.css"/>
  
    <link rel="stylesheet" type="text/css" href="/css/ion.rangeSlider.skinFlat.css"/>
   
    <link rel="stylesheet" type="text/css" href="/css/nivo-lightbox.css"/>
 
    <link rel="stylesheet" type="text/css" href="/css/animate.css"/>
    
    <link rel="stylesheet" type="text/css" href="/css/owl.carousel.css"/>

    <link rel="stylesheet" type="text/css" href="/extras/settings.css"/>
    <link rel="stylesheet" type="text/css" href="/extras/layers.css"/>
    <link rel="stylesheet" type="text/css" href="/extras/navigation.css"/>
   
    <link rel="stylesheet" type="text/css" href="/css/main.css"/>
    
    <link rel="stylesheet" type="text/css" href="/css/responsive.css"/>
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp;
