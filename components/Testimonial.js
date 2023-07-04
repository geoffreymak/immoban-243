import React from "react";
import { imageBuilder } from "../lib/sanity";
export default function Testimonial({ testimonies }) {
  return (
    <section className="testimonial section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title">Témoignages</h2>
              <p>Nos clients sont satisfaits.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div id="testimonials" className="owl-carousel">
              {!!testimonies &&
                testimonies.map((testimonial) => (
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="content">
                        <p className="description">{testimonial.testimonial}</p>
                      </div>
                    </div>
                    <div className="client-info">
                      <div className="img-thumb">
                        <img
                          alt=""
                          src={imageBuilder(testimonial.image)
                            .width(80)
                            .height(80)
                            .url()}
                        />
                      </div>
                      <div className="info-text">
                        <h2>
                          <a href="#">{testimonial.name}</a>
                        </h2>
                        <h4>
                          <a href="#">{testimonial.role}</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}

              {/* <div className="item">
                <div className="testimonial-item">
                  <div className="content">
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Explicabo quidem, excepturi facere magnam illum, at
                      accusantium doloremque odio.
                    </p>
                  </div>
                </div>
                <div className="client-info">
                  <div className="img-thumb">
                    <img src="/img/testimonial/img2.png" alt="" />
                  </div>
                  <div className="info-text">
                    <h2>
                      <a href="#">Josh Rossi</a>
                    </h2>
                    <h4>
                      <a href="#">Manager</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-item">
                  <div className="content">
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Explicabo quidem, excepturi facere magnam illum, at
                      accusantium doloremque odio.
                    </p>
                  </div>
                </div>
                <div className="client-info">
                  <div className="img-thumb">
                    <img src="/img/testimonial/img3.png" alt="" />
                  </div>
                  <div className="info-text">
                    <h2>
                      <a href="#">Daniel Greem</a>
                    </h2>
                    <h4>
                      <a href="#">Customer</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-item">
                  <div className="content">
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Explicabo quidem, excepturi facere magnam illum, at
                      accusantium doloremque odio.
                    </p>
                  </div>
                </div>
                <div className="client-info">
                  <div className="img-thumb">
                    <img src="/img/testimonial/img4.png" alt="" />
                  </div>
                  <div className="info-text">
                    <h2>
                      <a href="#">John Doe</a>
                    </h2>
                    <h4>
                      <a href="#">Manager</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-item">
                  <div className="content">
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Explicabo quidem, excepturi facere magnam illum, at
                      accusantium doloremque odio.
                    </p>
                  </div>
                </div>
                <div className="client-info">
                  <div className="img-thumb">
                    <img src="/img/testimonial/img5.png" alt="" />
                  </div>
                  <div className="info-text">
                    <h2>
                      <a href="#">Michael Papirov</a>
                    </h2>
                    <h4>
                      <a href="#">Customer</a>
                    </h4>
                  </div>
                </div>
              </div>
             */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
