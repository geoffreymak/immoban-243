import React from "react";

export default function Preloader() {
  return (
    <>
      <a href="#" className="back-to-top">
        <i className="lni-chevron-up"></i>
      </a>

      <div id="preloader">
        <div className="loader" id="loader-1"></div>
      </div>
    </>
  );
}
