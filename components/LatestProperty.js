import React from "react";

import Link from "next/link";

import { imageBuilder } from "../lib/sanity";

export default function LatestProperty({ posts }) {
  return (
    <section className="latest-property section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title">Les derniers ajoutés</h2>
              <p>Explorer les dernières appartements de notre catalogue.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 wow fadeIn" data-wow-delay="0.8s">
            <div id="latest-property" className="owl-carousel">
              {posts &&
                posts.map((post) => (
                  <div className="item">
                    <div className="property-main">
                      <div className="property-wrap">
                        <div className="property-item">
                          <div className="item-thumb">
                            <Link href="/">
                              <a className="hover-effect">
                                <img
                                  width={480}
                                  height={320}
                                  className="img-fluid"
                                  alt=""
                                  src={imageBuilder(post.image)
                                    .width(480)
                                    .height(320)
                                    .url()}
                                />
                              </a>
                            </Link>
                            <div className="label-inner">
                              <span
                                className={`label-status label ${
                                  post.category === "Vente"
                                    ? "bg-yellow"
                                    : "bg-red"
                                }`}
                              >
                                {post.category}
                              </span>
                            </div>
                          </div>
                          <div className="item-body">
                            <h3 className="property-title">
                              <a href="property.html">{post.title}</a>
                            </h3>
                            <div className="adderess">
                              <i className="lni-map-marker"></i>
                              {`${post.avenue}, Q/${post.quartier}, C/${post.commune}, ${post.province}`}
                            </div>
                            <div className="pricin-list">
                              <div className="property-price">
                                <span>${post.prix}</span>
                              </div>
                              <p>
                                <span>{post.description}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
