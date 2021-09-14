import React from "react";
import { imageBuilder } from "../lib/sanity";
export default function Testimonial({ testimonies }) {
  return (
    <section class="testimonial section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div id="testimonials" class="owl-carousel">
              {!!testimonies &&
                testimonies.map((testimonial) => (
                  <div class="item">
                    <div class="testimonial-item">
                      <div class="content">
                        <p class="description">{testimonial.testimonial}</p>
                      </div>
                    </div>
                    <div class="client-info">
                      <div class="img-thumb">
                        <img
                          alt=""
                          src={imageBuilder(testimonial.image)
                            .width(80)
                            .height(80)
                            .url()}
                        />
                      </div>
                      <div class="info-text">
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

              {/* <div class="item">
                <div class="testimonial-item">
                  <div class="content">
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Explicabo quidem, excepturi facere magnam illum, at
                      accusantium doloremque odio.
                    </p>
                  </div>
                </div>
                <div class="client-info">
                  <div class="img-thumb">
                    <img src="/img/testimonial/img2.png" alt="" />
                  </div>
                  <div class="info-text">
                    <h2>
                      <a href="#">Josh Rossi</a>
                    </h2>
                    <h4>
                      <a href="#">Manager</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-item">
                  <div class="content">
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Explicabo quidem, excepturi facere magnam illum, at
                      accusantium doloremque odio.
                    </p>
                  </div>
                </div>
                <div class="client-info">
                  <div class="img-thumb">
                    <img src="/img/testimonial/img3.png" alt="" />
                  </div>
                  <div class="info-text">
                    <h2>
                      <a href="#">Daniel Greem</a>
                    </h2>
                    <h4>
                      <a href="#">Customer</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-item">
                  <div class="content">
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Explicabo quidem, excepturi facere magnam illum, at
                      accusantium doloremque odio.
                    </p>
                  </div>
                </div>
                <div class="client-info">
                  <div class="img-thumb">
                    <img src="/img/testimonial/img4.png" alt="" />
                  </div>
                  <div class="info-text">
                    <h2>
                      <a href="#">John Doe</a>
                    </h2>
                    <h4>
                      <a href="#">Manager</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-item">
                  <div class="content">
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Explicabo quidem, excepturi facere magnam illum, at
                      accusantium doloremque odio.
                    </p>
                  </div>
                </div>
                <div class="client-info">
                  <div class="img-thumb">
                    <img src="/img/testimonial/img5.png" alt="" />
                  </div>
                  <div class="info-text">
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
