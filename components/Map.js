import React from "react";

export default function Map() {
  return (
    <section id="google-map-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 padding-0">
            <object
              style={{ border: 0, height: 450, width: "100%" }}
              data="https://www.google.com/maps/embed/v1/place?q=Immoban243&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></object>
          </div>
        </div>
      </div>
    </section>
  );
}
