import React from "react";

function PropertyDetail() {
  return (
    <>
      <div id="page-banner-area" class="page-banner">
        <div class="page-banner-title">
          <div class="text-center">
            <h2>Properties</h2>
            <a href="#">
              <i class="lni-home"></i> Home
            </a>
            <span class="crumbs-spacer">
              <i class="lni-chevron-right"></i>
            </span>
            <span class="current">Standard Detail</span>
          </div>
        </div>
      </div>

      <div id="content" class="section-padding">
        <div class="container">
          <div class="property-details">
            <div class="row">
              <div class="col-lg-4 col-md-12 col-xs-12">
                <div class="info">
                  <h3>
                    Luxury Apartment <span class="badge">sale</span>
                  </h3>
                  <p class="room-type">Living Room</p>
                  <p class="address">
                    <i class="lni-map-marker"></i> York Blvd, Los Angeles, US
                    View, CA 94041USA
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-xs-12">
                <div class="details">
                  <div class="details-listing">
                    <p>Bedrooms</p>
                    <h5>05</h5>
                  </div>
                  <div class="details-listing">
                    <p>Washrooms</p>
                    <h5>06</h5>
                  </div>
                  <div class="details-listing">
                    <p>Size (Sq.ft)</p>
                    <h5>1650</h5>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-xs-12">
                <div class="others">
                  <ul>
                    <li>
                      <span>$22,500.00</span>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lni-bookmark-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lni-heart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 col-md-12 col-xs-12">
              <div class="property-slider">
                <div
                  id="property-slider"
                  class="owl-carousel owl-theme"
                  style={{ opacity: 1, display: "block" }}
                >
                  <div class="owl-wrapper-outer">
                    <div
                      class="owl-wrapper"
                      style={{
                        width: 4380,
                        left: 0,
                        display: "block",
                        transition: "all 800ms ease 0s",
                        transform: "translate3d(-1460px, 0px, 0px)",
                      }}
                    >
                      <div class="owl-item" style={{ width: 730 }}>
                        <div class="item">
                          <img src="assets/img/productinfo/img1.jpg" alt="" />
                        </div>
                      </div>
                      <div class="owl-item" style={{ width: 730 }}>
                        <div class="item">
                          <img src="assets/img/productinfo/img2.jpg" alt="" />
                        </div>
                      </div>
                      <div class="owl-item" style={{ width: 730 }}>
                        <div class="item">
                          <img src="assets/img/productinfo/img3.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="owl-controls clickable">
                    <div class="owl-buttons">
                      <div class="owl-prev">
                        <i class="lni-chevron-left"></i>
                      </div>
                      <div class="owl-next">
                        <i class="lni-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="inner-box property-dsc">
                <h2 class="desc-title">Property Description</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  et dui vestibulum, bibendum purus sit amet, vulputate mauris.
                  Ut adipiscing gravida tincidunt. Duis euismod placerat
                  rhoncus. Phasellus mollis imperdiet placerat. Sed ac turpis
                  nisl. Mauris at ante mauris. Aliquam posuere fermentum lorem,
                  a aliquam mauris rutrum a. Curabitur sit amet pretium lectus,
                  nec consequat orci.
                </p>
                <p>
                  Duis non tincidunt dui. Sed vehicula, libero at eleifend
                  accumsan, lectus massa mollis metus, a malesuada velit orci
                  nec elit Suspendisse nisl mauris, rhoncus quis faucibus vitae,
                  commodo vitae neque. Nullam vulputate feugiat diam, id tempor
                  neque hendreit quis. Curabitur ut felis ultrices, pellentesque
                  augue ac, bibendum lorem. Curabitur non volutpat augue.
                  Aliquam malesuada scelerisque tortor eget mollis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facere nisi sequi quo laborum eveniet illum ex doloremque
                  porro repellat. Saepe sed atque eos inventore facilis officiis
                  dolorum, incidunt optio iure! Itaque libero et vel labore
                  voluptatem natus nulla, sunt quaerat velit officia! Ipsum fuga
                  magni, sapiente reprehenderit dolores eaque excepturi facilis,
                  praesentium.
                </p>
              </div>
              <div class="inner-box short-info">
                <h2 class="desc-title">Quick Summary</h2>
                <ul class="additional-details">
                  <li>
                    <strong>AC:</strong>
                    <span>Central</span>
                  </li>
                  <li>
                    <strong>ACRES:</strong>
                    <span>0.14</span>
                  </li>
                  <li>
                    <strong>ACRES SOURCE:</strong>
                    <span>Assessor</span>
                  </li>
                  <li>
                    <strong>AP #:</strong>
                    <span>2639-017-020</span>
                  </li>
                  <li>
                    <strong>APPLIANCES:</strong>
                    <span>
                      Cooktop - Gas, Dishwasher, Freestanding Gas Range, Garbage
                      Disposal
                    </span>
                  </li>
                  <li>
                    <strong>BATHROOM DESCRIPTION:</strong>
                    <span>Remodeled, Skylight(s), Tile Walls</span>
                  </li>
                  <li>
                    <strong>DOORS &amp; WINDOWS:</strong>
                    <span>Double Pane Windows, Skylights</span>
                  </li>
                  <li>
                    <strong>FIREPLACE DESCRIPTION:</strong>
                    <span>Brick</span>
                  </li>
                  <li>
                    <strong>FIREPLACE FUEL:</strong>
                    <span>Uses Both Gas &amp; Wood</span>
                  </li>
                  <li>
                    <strong>FIREPLACE LOCATION:</strong>
                    <span>Living Room</span>
                  </li>
                  <li>
                    <strong>FLOORS:</strong>
                    <span>Carpet - Partial, Ceramic Tile</span>
                  </li>
                  <li>
                    <strong>PLUMBING:</strong>
                    <span>Full Copper Plumbing</span>
                  </li>
                </ul>
              </div>
              <div class="inner-box featured">
                <h2 class="desc-title">Details</h2>
                <ul class="property-features">
                  <li>
                    Building Age: <span>2 Years</span>
                  </li>
                  <li>
                    Parking: <span>Attached Garage</span>
                  </li>
                  <li>
                    Cooling: <span>Central Cooling</span>
                  </li>
                  <li>
                    Heating: <span>Forced Air, Gas</span>
                  </li>
                  <li>
                    Sewer: <span>Public/City</span>
                  </li>
                  <li>
                    Water: <span>City</span>
                  </li>
                  <li>
                    Exercise Room: <span>Yes</span>
                  </li>
                  <li>
                    Storage Room: <span>Yes</span>
                  </li>
                </ul>
              </div>
              <div class="inner-box featured">
                <h2 class="desc-title">Features</h2>
                <ul class="property-features checkboxes">
                  <li>
                    <i class="lni-check-box"></i> Air Conditioning
                  </li>
                  <li>
                    <i class="lni-check-box"></i> Central Heating
                  </li>
                  <li>
                    <i class="lni-check-box"></i> Laundry Room
                  </li>
                  <li>
                    <i class="lni-check-box"></i> Window Covering
                  </li>
                  <li>
                    <i class="lni-check-box"></i> Swimming Pool
                  </li>
                  <li>
                    <i class="lni-check-box"></i> Central Heating
                  </li>
                  <li>
                    <i class="lni-check-box"></i> Gym
                  </li>
                  <li>
                    <i class="lni-check-box"></i> Internet
                  </li>
                  <li>
                    <i class="lni-check-box"></i> Alarm
                  </li>
                </ul>
              </div>
              <div class="inner-box accordion-fp">
                <h2 class="desc-title">Floor Plans</h2>
                <div id="accordion">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <h3 class="accordion-heading">
                        <button
                          class="accordion-title"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          First Floor
                        </button>
                      </h3>
                    </div>
                    <div
                      id="collapseOne"
                      class="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div class="card-body">
                        <div class="thumb">
                          <img
                            class="img-fluid"
                            src="assets/img/productinfo/floor-thumb-1.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                      <h3 class="accordion-heading">
                        <button
                          class="accordion-title collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Second Floor
                        </button>
                      </h3>
                    </div>
                    <div
                      id="collapseTwo"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div class="card-body">
                        <div class="thumb">
                          <img
                            class="img-fluid"
                            src="assets/img/productinfo/floor-thumb-2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h3 class="accordion-heading">
                        <button
                          class="accordion-title collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Third Floor
                        </button>
                      </h3>
                    </div>
                    <div
                      id="collapseThree"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div class="card-body">
                        <div class="thumb">
                          <img
                            class="img-fluid"
                            src="assets/img/productinfo/floor-thumb-3.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="inner-box location-map">
                <h2 class="desc-title">Location On Map</h2>
                <div
                  id="conatiner-map"
                  style={{ position: relative, overflow: hidden }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      backgroundColor: "rgb(229, 227, 223)",
                    }}
                  >
                    <div
                      class="gm-style"
                      style="
                      position: absolute;
                      z-index: 0;
                      left: 0px;
                      top: 0px;
                      height: 100%;
                      width: 100%;
                      padding: 0px;
                      border-width: 0px;
                      margin: 0px;
                    "
                    >
                      <div>
                        <button
                          draggable="false"
                          aria-label="Raccourcis clavier"
                          title="Raccourcis clavier"
                          type="button"
                          style="
                          background: none transparent;
                          display: block;
                          border: none;
                          margin: 0px;
                          padding: 0px;
                          text-transform: none;
                          appearance: none;
                          position: absolute;
                          cursor: pointer;
                          user-select: none;
                          z-index: 1000002;
                          left: -100000px;
                          top: -100000px;
                        "
                        ></button>
                      </div>
                      <div
                        tabindex="0"
                        aria-label="Map"
                        aria-roledescription="map"
                        role="group"
                        style="
                        position: absolute;
                        z-index: 0;
                        left: 0px;
                        top: 0px;
                        height: 100%;
                        width: 100%;
                        padding: 0px;
                        border-width: 0px;
                        margin: 0px;
                        cursor: url('https://maps.gstatic.com/mapfiles/openhand_8_8.cur'),
                          default;
                        touch-action: pan-x pan-y;
                      "
                      >
                        <div
                          style="
                          z-index: 1;
                          position: absolute;
                          left: 50%;
                          top: 50%;
                          width: 100%;
                          transform: translate(0px, 0px);
                        "
                        >
                          <div
                            style="
                            position: absolute;
                            left: 0px;
                            top: 0px;
                            z-index: 100;
                            width: 100%;
                          "
                          >
                            <div
                              style="
                              position: absolute;
                              left: 0px;
                              top: 0px;
                              z-index: 0;
                            "
                            >
                              <div
                                style="
                                position: absolute;
                                z-index: 986;
                                transform: matrix(1, 0, 0, 1, -39, -55);
                              "
                              >
                                <div
                                  style="
                                  position: absolute;
                                  left: 0px;
                                  top: 0px;
                                  width: 256px;
                                  height: 256px;
                                "
                                >
                                  <div style="width: 256px; height: 256px"></div>
                                </div>
                                <div
                                  style="
                                  position: absolute;
                                  left: -256px;
                                  top: 0px;
                                  width: 256px;
                                  height: 256px;
                                "
                                >
                                  <div style="width: 256px; height: 256px"></div>
                                </div>
                                <div
                                  style="
                                  position: absolute;
                                  left: -256px;
                                  top: -256px;
                                  width: 256px;
                                  height: 256px;
                                "
                                >
                                  <div style="width: 256px; height: 256px"></div>
                                </div>
                                <div
                                  style="
                                  position: absolute;
                                  left: 0px;
                                  top: -256px;
                                  width: 256px;
                                  height: 256px;
                                "
                                >
                                  <div style="width: 256px; height: 256px"></div>
                                </div>
                                <div
                                  style="
                                  position: absolute;
                                  left: 256px;
                                  top: -256px;
                                  width: 256px;
                                  height: 256px;
                                "
                                >
                                  <div style="width: 256px; height: 256px"></div>
                                </div>
                                <div
                                  style="
                                  position: absolute;
                                  left: 256px;
                                  top: 0px;
                                  width: 256px;
                                  height: 256px;
                                "
                                >
                                  <div style="width: 256px; height: 256px"></div>
                                </div>
                                <div
                                  style="
                                  position: absolute;
                                  left: 256px;
                                  top: 256px;
                                  width: 256px;
                                  height: 256px;
                                "
                                >
                                  <div style="width: 256px; height: 256px"></div>
                                </div>
                                <div
                                  style="
                                  position: absolute;
                                  left: 0px;
                                  top: 256px;
                                  width: 256px;
                                  height: 256px;
                                "
                                >
                                  <div style="width: 256px; height: 256px"></div>
                                </div>
                                <div
                                  style="
                                  position: absolute;
                                  left: -256px;
                                  top: 256px;
                                  width: 256px;
                                  height: 256px;
                                "
                                >
                                  <div style="width: 256px; height: 256px"></div>
                                </div>
                                <div
                                  style="
                                  position: absolute;
                                  left: -512px;
                                  top: 256px;
                                  width: 256px;
                                  height: 256px;
                                "
                                >
                                  <div style="width: 256px; height: 256px"></div>
                                </div>
                                <div
                                  style="
                                  position: absolute;
                                  left: -512px;
                                  top: 0px;
                                  width: 256px;
                                  height: 256px;
                                "
                                >
                                  <div style="width: 256px; height: 256px"></div>
                                </div>
                                <div
                                  style="
                                  position: absolute;
                                  left: -512px;
                                  top: -256px;
                                  width: 256px;
                                  height: 256px;
                                "
                                >
                                  <div style="width: 256px; height: 256px"></div>
                                </div>
                                <div
                                  style="
                                  position: absolute;
                                  left: -512px;
                                  top: -512px;
                                  width: 256px;
                                  height: 256px;
                                "
                                >
                                  <div style="width: 256px; height: 256px"></div>
                                </div>
                                <div
                                  style="
                                  position: absolute;
                                  left: -256px;
                                  top: -512px;
                                  width: 256px;
                                  height: 256px;
                                "
                                >
                                  <div style="width: 256px; height: 256px"></div>
                                </div>
                                <div
                                  style="
                                  position: absolute;
                                  left: 0px;
                                  top: -512px;
                                  width: 256px;
                                  height: 256px;
                                "
                                >
                                  <div style="width: 256px; height: 256px"></div>
                                </div>
                                <div
                                  style="
                                  position: absolute;
                                  left: 256px;
                                  top: -512px;
                                  width: 256px;
                                  height: 256px;
                                "
                                >
                                  <div style="width: 256px; height: 256px"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            style="
                            position: absolute;
                            left: 0px;
                            top: 0px;
                            z-index: 101;
                            width: 100%;
                          "
                          ></div>
                          <div
                            style="
                            position: absolute;
                            left: 0px;
                            top: 0px;
                            z-index: 102;
                            width: 100%;
                          "
                          ></div>
                          <div
                            style="
                            position: absolute;
                            left: 0px;
                            top: 0px;
                            z-index: 103;
                            width: 100%;
                          "
                          >
                            <div
                              style="
                              width: 64px;
                              height: 64px;
                              overflow: hidden;
                              position: absolute;
                              left: -32px;
                              top: -64px;
                              z-index: 0;
                            "
                            >
                              <img
                                alt=""
                                src="assets/img/location.png"
                                draggable="false"
                                style="
                                position: absolute;
                                left: 0px;
                                top: 0px;
                                user-select: none;
                                width: 64px;
                                height: 64px;
                                border: 0px;
                                padding: 0px;
                                margin: 0px;
                                max-width: none;
                              "
                              />
                            </div>
                            <div
                              style="
                              position: absolute;
                              left: 0px;
                              top: 0px;
                              z-index: -1;
                            "
                            >
                              <div
                                style="
                                position: absolute;
                                z-index: 986;
                                transform: matrix(1, 0, 0, 1, -39, -55);
                              "
                              >
                                <div
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  overflow: hidden;
                                  position: absolute;
                                  left: 0px;
                                  top: 0px;
                                "
                                ></div>
                                <div
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  overflow: hidden;
                                  position: absolute;
                                  left: -256px;
                                  top: 0px;
                                "
                                ></div>
                                <div
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  overflow: hidden;
                                  position: absolute;
                                  left: -256px;
                                  top: -256px;
                                "
                                ></div>
                                <div
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  overflow: hidden;
                                  position: absolute;
                                  left: 0px;
                                  top: -256px;
                                "
                                ></div>
                                <div
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  overflow: hidden;
                                  position: absolute;
                                  left: 256px;
                                  top: -256px;
                                "
                                ></div>
                                <div
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  overflow: hidden;
                                  position: absolute;
                                  left: 256px;
                                  top: 0px;
                                "
                                ></div>
                                <div
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  overflow: hidden;
                                  position: absolute;
                                  left: 256px;
                                  top: 256px;
                                "
                                ></div>
                                <div
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  overflow: hidden;
                                  position: absolute;
                                  left: 0px;
                                  top: 256px;
                                "
                                ></div>
                                <div
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  overflow: hidden;
                                  position: absolute;
                                  left: -256px;
                                  top: 256px;
                                "
                                ></div>
                                <div
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  overflow: hidden;
                                  position: absolute;
                                  left: -512px;
                                  top: 256px;
                                "
                                ></div>
                                <div
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  overflow: hidden;
                                  position: absolute;
                                  left: -512px;
                                  top: 0px;
                                "
                                ></div>
                                <div
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  overflow: hidden;
                                  position: absolute;
                                  left: -512px;
                                  top: -256px;
                                "
                                ></div>
                                <div
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  overflow: hidden;
                                  position: absolute;
                                  left: -512px;
                                  top: -512px;
                                "
                                ></div>
                                <div
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  overflow: hidden;
                                  position: absolute;
                                  left: -256px;
                                  top: -512px;
                                "
                                ></div>
                                <div
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  overflow: hidden;
                                  position: absolute;
                                  left: 0px;
                                  top: -512px;
                                "
                                ></div>
                                <div
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  overflow: hidden;
                                  position: absolute;
                                  left: 256px;
                                  top: -512px;
                                "
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div
                            style="
                            position: absolute;
                            left: 0px;
                            top: 0px;
                            z-index: 0;
                          "
                          >
                            <div
                              style="
                              position: absolute;
                              z-index: 986;
                              transform: matrix(1, 0, 0, 1, -39, -55);
                            "
                            >
                              <div
                                style="
                                position: absolute;
                                left: 0px;
                                top: 0px;
                                width: 256px;
                                height: 256px;
                                transition: opacity 200ms linear 0s;
                              "
                              >
                                <img
                                  draggable="false"
                                  alt=""
                                  role="presentation"
                                  src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i2812!3i6538!4i256!2m3!1e0!2sm!3i583308978!2m3!1e2!6m1!3e5!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyCsa2Mi2HqyEcEnM1urFSIGEpvualYjwwM&amp;token=1817"
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  user-select: none;
                                  border: 0px;
                                  padding: 0px;
                                  margin: 0px;
                                  max-width: none;
                                "
                                />
                              </div>
                              <div
                                style="
                                position: absolute;
                                left: -256px;
                                top: 0px;
                                width: 256px;
                                height: 256px;
                                transition: opacity 200ms linear 0s;
                              "
                              >
                                <img
                                  draggable="false"
                                  alt=""
                                  role="presentation"
                                  src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i2811!3i6538!4i256!2m3!1e0!2sm!3i583308978!2m3!1e2!6m1!3e5!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyCsa2Mi2HqyEcEnM1urFSIGEpvualYjwwM&amp;token=3781"
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  user-select: none;
                                  border: 0px;
                                  padding: 0px;
                                  margin: 0px;
                                  max-width: none;
                                "
                                />
                              </div>
                              <div
                                style="
                                position: absolute;
                                left: -256px;
                                top: -256px;
                                width: 256px;
                                height: 256px;
                                transition: opacity 200ms linear 0s;
                              "
                              >
                                <img
                                  draggable="false"
                                  alt=""
                                  role="presentation"
                                  src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i2811!3i6537!4i256!2m3!1e0!2sm!3i583308978!2m3!1e2!6m1!3e5!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyCsa2Mi2HqyEcEnM1urFSIGEpvualYjwwM&amp;token=34009"
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  user-select: none;
                                  border: 0px;
                                  padding: 0px;
                                  margin: 0px;
                                  max-width: none;
                                "
                                />
                              </div>
                              <div
                                style="
                                position: absolute;
                                left: 0px;
                                top: -256px;
                                width: 256px;
                                height: 256px;
                                transition: opacity 200ms linear 0s;
                              "
                              >
                                <img
                                  draggable="false"
                                  alt=""
                                  role="presentation"
                                  src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i2812!3i6537!4i256!2m3!1e0!2sm!3i583308978!2m3!1e2!6m1!3e5!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyCsa2Mi2HqyEcEnM1urFSIGEpvualYjwwM&amp;token=32045"
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  user-select: none;
                                  border: 0px;
                                  padding: 0px;
                                  margin: 0px;
                                  max-width: none;
                                "
                                />
                              </div>
                              <div
                                style="
                                position: absolute;
                                left: 256px;
                                top: -256px;
                                width: 256px;
                                height: 256px;
                                transition: opacity 200ms linear 0s;
                              "
                              >
                                <img
                                  draggable="false"
                                  alt=""
                                  role="presentation"
                                  src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i2813!3i6537!4i256!2m3!1e0!2sm!3i583308978!2m3!1e2!6m1!3e5!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyCsa2Mi2HqyEcEnM1urFSIGEpvualYjwwM&amp;token=30081"
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  user-select: none;
                                  border: 0px;
                                  padding: 0px;
                                  margin: 0px;
                                  max-width: none;
                                "
                                />
                              </div>
                              <div
                                style="
                                position: absolute;
                                left: 256px;
                                top: 0px;
                                width: 256px;
                                height: 256px;
                                transition: opacity 200ms linear 0s;
                              "
                              >
                                <img
                                  draggable="false"
                                  alt=""
                                  role="presentation"
                                  src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i2813!3i6538!4i256!2m3!1e0!2sm!3i583308978!2m3!1e2!6m1!3e5!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyCsa2Mi2HqyEcEnM1urFSIGEpvualYjwwM&amp;token=130924"
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  user-select: none;
                                  border: 0px;
                                  padding: 0px;
                                  margin: 0px;
                                  max-width: none;
                                "
                                />
                              </div>
                              <div
                                style="
                                position: absolute;
                                left: 256px;
                                top: 256px;
                                width: 256px;
                                height: 256px;
                                transition: opacity 200ms linear 0s;
                              "
                              >
                                <img
                                  draggable="false"
                                  alt=""
                                  role="presentation"
                                  src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i2813!3i6539!4i256!2m3!1e0!2sm!3i583308978!2m3!1e2!6m1!3e5!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyCsa2Mi2HqyEcEnM1urFSIGEpvualYjwwM&amp;token=100696"
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  user-select: none;
                                  border: 0px;
                                  padding: 0px;
                                  margin: 0px;
                                  max-width: none;
                                "
                                />
                              </div>
                              <div
                                style="
                                position: absolute;
                                left: 0px;
                                top: 256px;
                                width: 256px;
                                height: 256px;
                                transition: opacity 200ms linear 0s;
                              "
                              >
                                <img
                                  draggable="false"
                                  alt=""
                                  role="presentation"
                                  src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i2812!3i6539!4i256!2m3!1e0!2sm!3i583308978!2m3!1e2!6m1!3e5!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyCsa2Mi2HqyEcEnM1urFSIGEpvualYjwwM&amp;token=102660"
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  user-select: none;
                                  border: 0px;
                                  padding: 0px;
                                  margin: 0px;
                                  max-width: none;
                                "
                                />
                              </div>
                              <div
                                style="
                                position: absolute;
                                left: -256px;
                                top: 256px;
                                width: 256px;
                                height: 256px;
                                transition: opacity 200ms linear 0s;
                              "
                              >
                                <img
                                  draggable="false"
                                  alt=""
                                  role="presentation"
                                  src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i2811!3i6539!4i256!2m3!1e0!2sm!3i583308978!2m3!1e2!6m1!3e5!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyCsa2Mi2HqyEcEnM1urFSIGEpvualYjwwM&amp;token=104624"
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  user-select: none;
                                  border: 0px;
                                  padding: 0px;
                                  margin: 0px;
                                  max-width: none;
                                "
                                />
                              </div>
                              <div
                                style="
                                position: absolute;
                                left: -512px;
                                top: 256px;
                                width: 256px;
                                height: 256px;
                                transition: opacity 200ms linear 0s;
                              "
                              >
                                <img
                                  draggable="false"
                                  alt=""
                                  role="presentation"
                                  src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i2810!3i6539!4i256!2m3!1e0!2sm!3i583308978!2m3!1e2!6m1!3e5!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyCsa2Mi2HqyEcEnM1urFSIGEpvualYjwwM&amp;token=106588"
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  user-select: none;
                                  border: 0px;
                                  padding: 0px;
                                  margin: 0px;
                                  max-width: none;
                                "
                                />
                              </div>
                              <div
                                style="
                                position: absolute;
                                left: -512px;
                                top: 0px;
                                width: 256px;
                                height: 256px;
                                transition: opacity 200ms linear 0s;
                              "
                              >
                                <img
                                  draggable="false"
                                  alt=""
                                  role="presentation"
                                  src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i2810!3i6538!4i256!2m3!1e0!2sm!3i583308978!2m3!1e2!6m1!3e5!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyCsa2Mi2HqyEcEnM1urFSIGEpvualYjwwM&amp;token=5745"
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  user-select: none;
                                  border: 0px;
                                  padding: 0px;
                                  margin: 0px;
                                  max-width: none;
                                "
                                />
                              </div>
                              <div
                                style="
                                position: absolute;
                                left: -512px;
                                top: -256px;
                                width: 256px;
                                height: 256px;
                                transition: opacity 200ms linear 0s;
                              "
                              >
                                <img
                                  draggable="false"
                                  alt=""
                                  role="presentation"
                                  src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i2810!3i6537!4i256!2m3!1e0!2sm!3i583308978!2m3!1e2!6m1!3e5!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyCsa2Mi2HqyEcEnM1urFSIGEpvualYjwwM&amp;token=35973"
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  user-select: none;
                                  border: 0px;
                                  padding: 0px;
                                  margin: 0px;
                                  max-width: none;
                                "
                                />
                              </div>
                              <div
                                style="
                                position: absolute;
                                left: -512px;
                                top: -512px;
                                width: 256px;
                                height: 256px;
                                transition: opacity 200ms linear 0s;
                              "
                              >
                                <img
                                  draggable="false"
                                  alt=""
                                  role="presentation"
                                  src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i2810!3i6536!4i256!2m3!1e0!2sm!3i583308978!2m3!1e2!6m1!3e5!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyCsa2Mi2HqyEcEnM1urFSIGEpvualYjwwM&amp;token=66201"
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  user-select: none;
                                  border: 0px;
                                  padding: 0px;
                                  margin: 0px;
                                  max-width: none;
                                "
                                />
                              </div>
                              <div
                                style="
                                position: absolute;
                                left: -256px;
                                top: -512px;
                                width: 256px;
                                height: 256px;
                                transition: opacity 200ms linear 0s;
                              "
                              >
                                <img
                                  draggable="false"
                                  alt=""
                                  role="presentation"
                                  src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i2811!3i6536!4i256!2m3!1e0!2sm!3i583308978!2m3!1e2!6m1!3e5!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyCsa2Mi2HqyEcEnM1urFSIGEpvualYjwwM&amp;token=64237"
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  user-select: none;
                                  border: 0px;
                                  padding: 0px;
                                  margin: 0px;
                                  max-width: none;
                                "
                                />
                              </div>
                              <div
                                style="
                                position: absolute;
                                left: 0px;
                                top: -512px;
                                width: 256px;
                                height: 256px;
                                transition: opacity 200ms linear 0s;
                              "
                              >
                                <img
                                  draggable="false"
                                  alt=""
                                  role="presentation"
                                  src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i2812!3i6536!4i256!2m3!1e0!2sm!3i583308978!2m3!1e2!6m1!3e5!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyCsa2Mi2HqyEcEnM1urFSIGEpvualYjwwM&amp;token=62273"
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  user-select: none;
                                  border: 0px;
                                  padding: 0px;
                                  margin: 0px;
                                  max-width: none;
                                "
                                />
                              </div>
                              <div
                                style="
                                position: absolute;
                                left: 256px;
                                top: -512px;
                                width: 256px;
                                height: 256px;
                                transition: opacity 200ms linear 0s;
                              "
                              >
                                <img
                                  draggable="false"
                                  alt=""
                                  role="presentation"
                                  src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i14!2i2813!3i6536!4i256!2m3!1e0!2sm!3i583308978!2m3!1e2!6m1!3e5!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&amp;key=AIzaSyCsa2Mi2HqyEcEnM1urFSIGEpvualYjwwM&amp;token=60309"
                                  style="
                                  width: 256px;
                                  height: 256px;
                                  user-select: none;
                                  border: 0px;
                                  padding: 0px;
                                  margin: 0px;
                                  max-width: none;
                                "
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          style="
                          z-index: 3;
                          position: absolute;
                          height: 100%;
                          width: 100%;
                          padding: 0px;
                          border-width: 0px;
                          margin: 0px;
                          left: 0px;
                          top: 0px;
                          touch-action: pan-x pan-y;
                        "
                        >
                          <div
                            style="
                            z-index: 4;
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            width: 100%;
                            transform: translate(0px, 0px);
                          "
                          >
                            <div
                              style="
                              position: absolute;
                              left: 0px;
                              top: 0px;
                              z-index: 104;
                              width: 100%;
                            "
                            ></div>
                            <div
                              style="
                              position: absolute;
                              left: 0px;
                              top: 0px;
                              z-index: 105;
                              width: 100%;
                            "
                            ></div>
                            <div
                              style="
                              position: absolute;
                              left: 0px;
                              top: 0px;
                              z-index: 106;
                              width: 100%;
                            "
                            >
                              <div
                                title=""
                                tabindex="-1"
                                style="
                                width: 64px;
                                height: 64px;
                                overflow: hidden;
                                position: absolute;
                                cursor: pointer;
                                touch-action: none;
                                left: -32px;
                                top: -64px;
                                z-index: 0;
                              "
                              >
                                <img
                                  alt=""
                                  src="https://maps.gstatic.com/mapfiles/transparent.png"
                                  draggable="false"
                                  style="
                                  width: 64px;
                                  height: 64px;
                                  user-select: none;
                                  border: 0px;
                                  padding: 0px;
                                  margin: 0px;
                                  max-width: none;
                                "
                                />
                              </div>
                            </div>
                            <div
                              style="
                              position: absolute;
                              left: 0px;
                              top: 0px;
                              z-index: 107;
                              width: 100%;
                            "
                            ></div>
                          </div>
                        </div>
                        <div
                          class="gm-style-moc"
                          style="
                          z-index: 4;
                          position: absolute;
                          height: 100%;
                          width: 100%;
                          padding: 0px;
                          border-width: 0px;
                          margin: 0px;
                          left: 0px;
                          top: 0px;
                          opacity: 0;
                        "
                        >
                          <p class="gm-style-mot"></p>
                        </div>
                      </div>
                      <iframe
                        aria-hidden="true"
                        frameborder="0"
                        tabindex="-1"
                        style="
                        z-index: -1;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        top: 0px;
                        left: 0px;
                        border: none;
                      "
                      ></iframe>
                      <div
                        style="
                        pointer-events: none;
                        width: 100%;
                        height: 100%;
                        box-sizing: border-box;
                        position: absolute;
                        z-index: 1000002;
                        opacity: 0;
                        border: 2px solid rgb(26, 115, 232);
                      "
                      ></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div>
                        <div
                          style="
                          z-index: 0;
                          position: absolute;
                          top: 0px;
                          left: 0px;
                        "
                        ></div>
                      </div>
                      <div>
                        <button
                          draggable="false"
                          aria-label="Passer en plein écran"
                          title="Passer en plein écran"
                          type="button"
                          class="gm-control-active gm-fullscreen-control"
                          style="
                          background: none rgb(255, 255, 255);
                          border: 0px;
                          margin: 10px;
                          padding: 0px;
                          text-transform: none;
                          appearance: none;
                          position: absolute;
                          cursor: pointer;
                          user-select: none;
                          border-radius: 2px;
                          height: 40px;
                          width: 40px;
                          box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
                          overflow: hidden;
                          top: 0px;
                          right: 0px;
                        "
                        >
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                            alt=""
                            style="height: 18px; width: 18px"
                          />
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                            alt=""
                            style="height: 18px; width: 18px"
                          />
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                            alt=""
                            style="height: 18px; width: 18px"
                          />
                        </button>
                      </div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div>
                        <div
                          class="
                          gmnoprint
                          gm-bundled-control gm-bundled-control-on-bottom
                        "
                          draggable="false"
                          data-control-width="0"
                          data-control-height="0"
                          style="
                          margin: 10px;
                          user-select: none;
                          position: absolute;
                          display: none;
                          bottom: 14px;
                          right: 0px;
                        "
                        >
                          <div
                            class="gmnoprint"
                            data-control-width="40"
                            data-control-height="40"
                            style="display: none; position: absolute"
                          >
                            <div
                              style="
                              background-color: rgb(255, 255, 255);
                              box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
                              border-radius: 2px;
                              width: 40px;
                              height: 40px;
                            "
                            >
                              <button
                                draggable="false"
                                aria-label="Faire pivoter la carte dans le sens des aiguilles d'une montre"
                                title="Faire pivoter la carte dans le sens des aiguilles d'une montre"
                                type="button"
                                class="gm-control-active"
                                style="
                                background: none;
                                display: none;
                                border: 0px;
                                margin: 0px;
                                padding: 0px;
                                text-transform: none;
                                appearance: none;
                                position: relative;
                                cursor: pointer;
                                user-select: none;
                                left: 0px;
                                top: 0px;
                                overflow: hidden;
                                width: 40px;
                                height: 40px;
                              "
                              >
                                <img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                  style="width: 20px; height: 20px"
                                />
                                <img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                  style="width: 20px; height: 20px"
                                />
                                <img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                  style="width: 20px; height: 20px"
                                />
                              </button>
                              <div
                                style="
                                position: relative;
                                overflow: hidden;
                                width: 30px;
                                height: 1px;
                                margin: 0px 5px;
                                background-color: rgb(230, 230, 230);
                                display: none;
                              "
                              ></div>
                              <button
                                draggable="false"
                                aria-label="Faire pivoter la carte dans le sens inverse des aiguilles d'une montre"
                                title="Faire pivoter la carte dans le sens inverse des aiguilles d'une montre"
                                type="button"
                                class="gm-control-active"
                                style="
                                background: none;
                                display: none;
                                border: 0px;
                                margin: 0px;
                                padding: 0px;
                                text-transform: none;
                                appearance: none;
                                position: relative;
                                cursor: pointer;
                                user-select: none;
                                left: 0px;
                                top: 0px;
                                overflow: hidden;
                                width: 40px;
                                height: 40px;
                                transform: scaleX(-1);
                              "
                              >
                                <img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                  style="width: 20px; height: 20px"
                                />
                                <img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                  style="width: 20px; height: 20px"
                                />
                                <img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                  style="width: 20px; height: 20px"
                                />
                              </button>
                              <div
                                style="
                                position: relative;
                                overflow: hidden;
                                width: 30px;
                                height: 1px;
                                margin: 0px 5px;
                                background-color: rgb(230, 230, 230);
                                display: none;
                              "
                              ></div>
                              <button
                                draggable="false"
                                aria-label="Incliner la carte"
                                title="Incliner la carte"
                                type="button"
                                class="gm-tilt gm-control-active"
                                style="
                                background: none;
                                display: block;
                                border: 0px;
                                margin: 0px;
                                padding: 0px;
                                text-transform: none;
                                appearance: none;
                                position: relative;
                                cursor: pointer;
                                user-select: none;
                                top: 0px;
                                left: 0px;
                                overflow: hidden;
                                width: 40px;
                                height: 40px;
                              "
                              >
                                <img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E"
                                  style="width: 18px"
                                />
                                <img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E"
                                  style="width: 18px"
                                />
                                <img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E"
                                  style="width: 18px"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          style="
                          margin: 0px 5px;
                          z-index: 1000000;
                          position: absolute;
                          left: 0px;
                          bottom: 0px;
                        "
                        >
                          <a
                            target="_blank"
                            rel="noopener"
                            title="Ouvrir cette zone dans Google&nbsp;Maps (dans une nouvelle fenêtre)"
                            aria-label="Ouvrir cette zone dans Google&nbsp;Maps (dans une nouvelle fenêtre)"
                            href="https://maps.google.com/maps?ll=34.121566,-118.209561&amp;z=14&amp;t=m&amp;hl=fr-FR&amp;gl=US&amp;mapclient=apiv3"
                            style="display: inline"
                          >
                            <div style="width: 66px; height: 26px">
                              <img
                                alt="Google"
                                src="https://maps.gstatic.com/mapfiles/api-3/images/google_white5.png"
                                draggable="false"
                                style="
                                position: absolute;
                                left: 0px;
                                top: 0px;
                                width: 66px;
                                height: 26px;
                                user-select: none;
                                border: 0px;
                                padding: 0px;
                                margin: 0px;
                              "
                              />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div></div>
                      <div>
                        <div
                          class="gmnoprint"
                          style="
                          z-index: 1000001;
                          position: absolute;
                          right: 471px;
                          bottom: 0px;
                        "
                        >
                          <div
                            draggable="false"
                            class="gm-style-cc"
                            style="
                            user-select: none;
                            height: 14px;
                            line-height: 14px;
                          "
                          >
                            <div
                              style="
                              opacity: 0.7;
                              width: 100%;
                              height: 100%;
                              position: absolute;
                            "
                            >
                              <div style="width: 1px"></div>
                              <div
                                style="
                                background-color: rgb(245, 245, 245);
                                width: auto;
                                height: 100%;
                                margin-left: 1px;
                              "
                              ></div>
                            </div>
                            <div
                              style="
                              position: relative;
                              padding-right: 6px;
                              padding-left: 6px;
                              box-sizing: border-box;
                              font-family: Roboto, Arial, sans-serif;
                              font-size: 10px;
                              color: rgb(0, 0, 0);
                              white-space: nowrap;
                              direction: ltr;
                              text-align: right;
                              vertical-align: middle;
                              display: inline-block;
                            "
                            >
                              <button
                                draggable="false"
                                aria-label="Raccourcis clavier"
                                title="Raccourcis clavier"
                                type="button"
                                style="
                                background: none;
                                display: inline-block;
                                border: 0px;
                                margin: 0px;
                                padding: 0px;
                                text-transform: none;
                                appearance: none;
                                position: relative;
                                cursor: pointer;
                                user-select: none;
                                color: rgb(0, 0, 0);
                                font-family: inherit;
                                line-height: inherit;
                              "
                              >
                                Raccourcis clavier
                              </button>
                            </div>
                          </div>
                        </div>
                        <div
                          class="gmnoprint"
                          style="
                          z-index: 1000001;
                          position: absolute;
                          right: 278px;
                          bottom: 0px;
                          width: 193px;
                        "
                        >
                          <div
                            draggable="false"
                            class="gm-style-cc"
                            style="
                            user-select: none;
                            height: 14px;
                            line-height: 14px;
                          "
                          >
                            <div
                              style="
                              opacity: 0.7;
                              width: 100%;
                              height: 100%;
                              position: absolute;
                            "
                            >
                              <div style="width: 1px"></div>
                              <div
                                style="
                                background-color: rgb(245, 245, 245);
                                width: auto;
                                height: 100%;
                                margin-left: 1px;
                              "
                              ></div>
                            </div>
                            <div
                              style="
                              position: relative;
                              padding-right: 6px;
                              padding-left: 6px;
                              box-sizing: border-box;
                              font-family: Roboto, Arial, sans-serif;
                              font-size: 10px;
                              color: rgb(0, 0, 0);
                              white-space: nowrap;
                              direction: ltr;
                              text-align: right;
                              vertical-align: middle;
                              display: inline-block;
                            "
                            >
                              <button
                                draggable="false"
                                aria-label="Données cartographiques"
                                title="Données cartographiques"
                                type="button"
                                style="
                                background: none;
                                display: none;
                                border: 0px;
                                margin: 0px;
                                padding: 0px;
                                text-transform: none;
                                appearance: none;
                                position: relative;
                                cursor: pointer;
                                user-select: none;
                                color: rgb(0, 0, 0);
                                font-family: inherit;
                                line-height: inherit;
                              "
                              >
                                Données cartographiques
                              </button>
                              <span>Données cartographiques ©2021 Google</span>
                            </div>
                          </div>
                        </div>
                        <div
                          class="gmnoprint gm-style-cc"
                          draggable="false"
                          style="
                          z-index: 1000001;
                          user-select: none;
                          height: 14px;
                          line-height: 14px;
                          position: absolute;
                          right: 165px;
                          bottom: 0px;
                        "
                        >
                          <div
                            style="
                            opacity: 0.7;
                            width: 100%;
                            height: 100%;
                            position: absolute;
                          "
                          >
                            <div style="width: 1px"></div>
                            <div
                              style="
                              background-color: rgb(245, 245, 245);
                              width: auto;
                              height: 100%;
                              margin-left: 1px;
                            "
                            ></div>
                          </div>
                          <div
                            style="
                            position: relative;
                            padding-right: 6px;
                            padding-left: 6px;
                            box-sizing: border-box;
                            font-family: Roboto, Arial, sans-serif;
                            font-size: 10px;
                            color: rgb(0, 0, 0);
                            white-space: nowrap;
                            direction: ltr;
                            text-align: right;
                            vertical-align: middle;
                            display: inline-block;
                          "
                          >
                            <a
                              href="https://www.google.com/intl/fr-FR_US/help/terms_maps.html"
                              target="_blank"
                              rel="noopener"
                              style="
                              text-decoration: none;
                              cursor: pointer;
                              color: rgb(0, 0, 0);
                            "
                            >
                              Conditions d'utilisation
                            </a>
                          </div>
                        </div>
                        <div
                          draggable="false"
                          class="gm-style-cc"
                          style="
                          user-select: none;
                          height: 14px;
                          line-height: 14px;
                          position: absolute;
                          right: 0px;
                          bottom: 0px;
                        "
                        >
                          <div
                            style="
                            opacity: 0.7;
                            width: 100%;
                            height: 100%;
                            position: absolute;
                          "
                          >
                            <div style="width: 1px"></div>
                            <div
                              style="
                              background-color: rgb(245, 245, 245);
                              width: auto;
                              height: 100%;
                              margin-left: 1px;
                            "
                            ></div>
                          </div>
                          <div
                            style="
                            position: relative;
                            padding-right: 6px;
                            padding-left: 6px;
                            box-sizing: border-box;
                            font-family: Roboto, Arial, sans-serif;
                            font-size: 10px;
                            color: rgb(0, 0, 0);
                            white-space: nowrap;
                            direction: ltr;
                            text-align: right;
                            vertical-align: middle;
                            display: inline-block;
                          "
                          >
                            <a
                              target="_blank"
                              rel="noopener"
                              title="Signaler à Google une erreur dans la carte routière ou les images"
                              dir="ltr"
                              href="https://www.google.com/maps/@34.1215659,-118.2095611,14z/data=!10m1!1e1!12b1?source=apiv3&amp;rapsrc=apiv3"
                              style="
                              font-family: Roboto, Arial, sans-serif;
                              font-size: 10px;
                              color: rgb(0, 0, 0);
                              text-decoration: none;
                              position: relative;
                            "
                            >
                              Signaler une erreur cartographique
                            </a>
                          </div>
                        </div>
                        <div
                          class="gmnoscreen"
                          style="position: absolute; right: 0px; bottom: 0px"
                        >
                          <div
                            style="
                            font-family: Roboto, Arial, sans-serif;
                            font-size: 11px;
                            color: rgb(0, 0, 0);
                            direction: ltr;
                            text-align: right;
                            background-color: rgb(245, 245, 245);
                          "
                          >
                            Données cartographiques ©2021 Google
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style="
                    background-color: white;
                    font-weight: 500;
                    font-family: Roboto, sans-serif;
                    padding: 15px 25px;
                    box-sizing: border-box;
                    top: 5px;
                    border: 1px solid rgba(0, 0, 0, 0.12);
                    border-radius: 5px;
                    left: 50%;
                    max-width: 375px;
                    position: absolute;
                    transform: translateX(-50%);
                    width: calc(100% - 10px);
                    z-index: 1;
                  "
                  >
                    <div>
                      <img
                        alt=""
                        src="https://maps.gstatic.com/mapfiles/api-3/images/google_gray.svg"
                        draggable="false"
                        style="
                        padding: 0px;
                        margin: 0px;
                        border: 0px;
                        height: 17px;
                        vertical-align: middle;
                        width: 52px;
                        user-select: none;
                      "
                      />
                    </div>
                    <div style="line-height: 20px; margin: 15px 0px">
                      <span style="color: rgba(0, 0, 0, 0.87); font-size: 14px">
                        Impossible de charger Google&nbsp;Maps correctement sur
                        cette page.
                      </span>
                    </div>
                    <table style="width: 100%">
                      <tr>
                        <td style="line-height: 16px; vertical-align: middle">
                          <a
                            href="https://developers.google.com/maps/documentation/javascript/error-messages?utm_source=maps_js&amp;utm_medium=degraded&amp;utm_campaign=billing#api-key-and-billing-errors"
                            target="_blank"
                            rel="noopener"
                            style="color: rgba(0, 0, 0, 0.54); font-size: 12px"
                          >
                            Ce site Web vous appartient&nbsp;?
                          </a>
                        </td>
                        <td style="text-align: right">
                          <button class="dismissButton">OK</button>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <aside
              id="sidebar"
              class="col-lg-4 col-md-12 col-xs-12 right-sidebar"
            >
              <div class="widget mb2">
                <button class="widget-button">
                  <i class="lni-printer"></i>
                </button>
                <button class="widget-button">
                  <i class="lni-star"></i>
                </button>
                <button class="widget-button">
                  <i class="lni-zip"></i>
                </button>
                <div class="clearfix"></div>
              </div>

              <div class="widget mt3">
                <div class="agent-inner">
                  <div class="agent-title">
                    <div class="agent-photo">
                      <a href="#">
                        <img src="assets/img/productinfo/agent.jpg" alt="" />
                      </a>
                    </div>
                    <div class="agent-details">
                      <h3>
                        <a href="#">Simon Heqburn</a>
                      </h3>
                      <span>
                        <i class="lni-phone-handset"></i>(123) 123-456
                      </span>
                    </div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Email"
                  />
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Phone"
                  />
                  <p>
                    I'm interested in this property [ID 123456] and I'd like to
                    know more details.
                  </p>
                  <button class="btn btn-common fullwidth mt-4">
                    Send Message
                  </button>
                </div>
              </div>

              <div class="widget mt3">
                <h3 class="sidebar-title">Featured Properties</h3>
                <div
                  id="listing-carousel"
                  class="owl-carousel owl-theme"
                  style="opacity: 1; display: block"
                >
                  <div class="owl-wrapper-outer">
                    <div
                      class="owl-wrapper"
                      style="width: 2100px; left: 0px; display: block"
                    >
                      <div class="owl-item" style="width: 350px">
                        <div class="item">
                          <div class="listing-item">
                            <a href="#" class="listing-img-container">
                              <img
                                src="assets/img/productinfo/listing1.jpg"
                                alt=""
                              />
                              <div class="listing-badges">
                                <span class="featured">Featured</span>
                                <span>For Sale</span>
                              </div>
                              <div class="listing-content">
                                <span class="listing-title">
                                  Eagle Apartments <i>$275,000</i>
                                </span>
                                <ul class="listing-content">
                                  <li>
                                    Area <span>530 sq ft</span>
                                  </li>
                                  <li>
                                    Rooms <span>3</span>
                                  </li>
                                  <li>
                                    Beds <span>1</span>
                                  </li>
                                  <li>
                                    Baths <span>1</span>
                                  </li>
                                </ul>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="owl-item" style="width: 350px">
                        <div class="item">
                          <div class="listing-item">
                            <a href="#" class="listing-img-container">
                              <img
                                src="assets/img/productinfo/listing2.jpg"
                                alt=""
                              />
                              <div class="listing-badges">
                                <span class="featured">Featured</span>
                                <span>For Sale</span>
                              </div>
                              <div class="listing-content">
                                <span class="listing-title">
                                  Eagle Apartments <i>$275,000</i>
                                </span>
                                <ul class="listing-content">
                                  <li>
                                    Area <span>530 sq ft</span>
                                  </li>
                                  <li>
                                    Rooms <span>3</span>
                                  </li>
                                  <li>
                                    Beds <span>1</span>
                                  </li>
                                  <li>
                                    Baths <span>1</span>
                                  </li>
                                </ul>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="owl-item" style="width: 350px">
                        <div class="item">
                          <div class="listing-item">
                            <a href="#" class="listing-img-container">
                              <img
                                src="assets/img/productinfo/listing3.jpg"
                                alt=""
                              />
                              <div class="listing-badges">
                                <span class="featured">Featured</span>
                                <span>For Sale</span>
                              </div>
                              <div class="listing-content">
                                <span class="listing-title">
                                  Eagle Apartments <i>$275,000</i>
                                </span>
                                <ul class="listing-content">
                                  <li>
                                    Area <span>530 sq ft</span>
                                  </li>
                                  <li>
                                    Rooms <span>3</span>
                                  </li>
                                  <li>
                                    Beds <span>1</span>
                                  </li>
                                  <li>
                                    Baths <span>1</span>
                                  </li>
                                </ul>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="owl-controls clickable">
                    <div class="owl-buttons">
                      <div class="owl-prev">
                        <i class="lni-chevron-left"></i>
                      </div>
                      <div class="owl-next">
                        <i class="lni-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="widget">
                <h3 class="sidebar-title">Mortgage Calculator</h3>
                <form class="mortgage-calc">
                  <p class="tip-content">Set This Property Price</p>
                  <div class="calc-input">
                    <input
                      type="text"
                      class="form-control"
                      name="amount"
                      placeholder="Sale Price"
                      required=""
                    />
                    <label>$</label>
                  </div>
                  <div class="calc-input">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Down Payment"
                    />
                    <label class="fa fa-usd">$</label>
                  </div>
                  <div class="calc-input">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Loan Term (Years)"
                      required=""
                    />
                    <label class="lni-calendar"></label>
                  </div>
                  <div class="calc-input">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Interest Rate"
                      required=""
                    />
                    <label>%</label>
                  </div>
                  <button class="btn btn-common">Calculate</button>
                </form>
              </div>

              <div class="widget widget-social">
                <h3 class="sidebar-title">Social Media</h3>
                <ul class="social-icons">
                  <li>
                    <a class="twitter" href="#">
                      <i class="lni-twitter-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a class="facebook" href="#">
                      <i class="lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a class="google" href="#">
                      <i class="lni-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a class="linkedin" href="#">
                      <i class="lni-linkedin-filled"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="desc-title">Similar Properties</h2>
            </div>
            <div class="col-lg-4 col-md-6 col-xs-12">
              <div class="property-main">
                <div class="property-wrap">
                  <div class="property-item">
                    <div class="item-thumb">
                      <a class="hover-effect" href="property.html">
                        <img
                          class="img-fluid"
                          src="assets/img/property/house-1.jpg"
                          alt=""
                        />
                      </a>
                      <div class="label-inner">
                        <span class="label-status label bg-red">For Sale</span>
                      </div>
                    </div>
                    <div class="item-body">
                      <h3 class="property-title">
                        <a href="property.html">Amazing oceanfront apartment</a>
                      </h3>
                      <div class="adderess">
                        <i class="lni-map-marker"></i> Drive Street, Los
                        Angeles, US
                      </div>
                      <div class="pricin-list">
                        <div class="property-price">
                          <span>$1,500</span>
                        </div>
                        <p>
                          <span>4 bds</span> . <span>4 ba</span> .
                          <span>2500 Sqft</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-xs-12">
              <div class="property-main">
                <div class="property-wrap">
                  <div class="property-item">
                    <div class="item-thumb">
                      <a class="hover-effect" href="property.html">
                        <img
                          class="img-fluid"
                          src="assets/img/property/house-2.jpg"
                          alt=""
                        />
                      </a>
                      <div class="label-inner">
                        <span class="label-status label">For Rent</span>
                      </div>
                    </div>
                    <div class="item-body">
                      <h3 class="property-title">
                        <a href="property.html">Family Condo</a>
                      </h3>
                      <div class="adderess">
                        <i class="lni-map-marker"></i> Louis, Missouri, US
                      </div>
                      <div class="pricin-list">
                        <div class="property-price">
                          <span>$27,00</span>
                        </div>
                        <p>
                          <span>6 bds</span> . <span>8 ba</span> .
                          <span>2600 Sqft</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-xs-12">
              <div class="property-main">
                <div class="property-wrap">
                  <div class="property-item">
                    <div class="item-thumb">
                      <a class="hover-effect" href="property.html">
                        <img
                          class="img-fluid"
                          src="assets/img/property/house-3.jpg"
                          alt=""
                        />
                      </a>
                      <div class="label-inner">
                        <span class="label-status label bg-yellow">New</span>
                      </div>
                    </div>
                    <div class="item-body">
                      <h3 class="property-title">
                        <a href="property.html">Guaranteed modern home</a>
                      </h3>
                      <div class="adderess">
                        <i class="lni-map-marker"></i> Avenue C, New York, US
                      </div>
                      <div class="pricin-list">
                        <div class="property-price">
                          <span>$1,750</span>
                        </div>
                        <p>
                          <span>8 bds</span> . <span>8 ba</span> .
                          <span>3000 Sqft</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyDetail;
