import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="/js/jquery-min.js"></script>
          <script src="/js/popper.min.js"></script>
          <script src="/js/bootstrap.min.js"></script>
          <script src="/js/jquery.mixitup.js"></script>
          <script src="/js/jquery.counterup.min.js"></script>
          <script src="/js/ion.rangeSlider.js"></script>
          <script src="/js/jquery.parallax.js"></script>
          <script src="/js/waypoints.min.js"></script>
          <script src="/js/wow.js"></script>
          <script src="/js/owl.carousel.min.js"></script>
          <script src="/js/jquery.slicknav.js"></script>
          <script src="/js/nivo-lightbox.js"></script>
          <script src="/js/jquery.slicknav.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.js"></script>
          <script src="/js/main.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
