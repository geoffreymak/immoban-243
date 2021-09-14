import React from "react";

import { imageBuilder } from "../lib/sanity";

export default function Team({ teams }) {
  return (
    <section id="team" className="section-padding text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title">Nos Agents</h2>
              <p>
                Des experts immobiliers avec des années d'experience dans le
                domaine.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {!!teams &&
            teams.map((team) => (
              <div className="col-sm-6 col-md-6 col-lg-3">
                <div className="team-item text-center">
                  <div className="team-img">
                    <img
                      className="img-fluid"
                      src={imageBuilder(team.image)
                        .width(540)
                        .height(480)
                        .url()}
                      alt=""
                    />
                    <div className="team-overlay">
                      <div className="overlay-social-icon text-center">
                        <ul className="social-icon-team">
                          <li>
                            <a href="#">
                              <i
                                className="lni-facebook-filled"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="lni-twitter-filled"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="lni-instagram-filled"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="lni-linkedin-filled"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="info-text">
                    <h3>
                      <a href="#">{team.name}</a>
                    </h3>
                    <p>{team.role}</p>
                  </div>
                </div>
              </div>
            ))}

          {/* <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="team-item text-center">
              <div className="team-img">
                <img className="img-fluid" src="/img/team/team-02.jpg" alt="" />
                <div className="team-overlay">
                  <div className="overlay-social-icon text-center">
                    <ul className="social-icon-team">
                      <li>
                        <a href="#">
                          <i
                            className="lni-facebook-filled"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="lni-twitter-filled"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="lni-instagram-filled"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="lni-linkedin-filled"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="info-text">
                <h3>
                  <a href="#">John Doe</a>
                </h3>
                <p>Real Estate Agent</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="team-item text-center">
              <div className="team-img">
                <img className="img-fluid" src="/img/team/team-03.jpg" alt="" />
                <div className="team-overlay">
                  <div className="overlay-social-icon text-center">
                    <ul className="social-icon-team">
                      <li>
                        <a href="#">
                          <i
                            className="lni-facebook-filled"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="lni-twitter-filled"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="lni-instagram-filled"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="lni-linkedin-filled"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="info-text">
                <h3>
                  <a href="#">Darrell S.Allen</a>
                </h3>
                <p>Real Estate Agent</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="team-item text-center">
              <div className="team-img">
                <img className="img-fluid" src="/img/team/team-04.jpg" alt="" />
                <div className="team-overlay">
                  <div className="overlay-social-icon text-center">
                    <ul className="social-icon-team">
                      <li>
                        <a href="#">
                          <i
                            className="lni-facebook-filled"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="lni-twitter-filled"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="lni-instagram-filled"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="lni-linkedin-filled"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="info-text">
                <h3>
                  <a href="#">Justyna Michallek</a>
                </h3>
                <p>Real Estate Agent</p>
              </div>
            </div>
          </div>
        */}
        </div>
      </div>
    </section>
  );
}
