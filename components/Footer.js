import React from 'react'

export default function Footer() {
    return (
      <footer id="footer" class="footer-area section-padding">
        <div class="container">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <h3 class="footer-titel">
                  A propos de <span>Nous</span>
                </h3>
                <ul class="footer-link">
                  <li>
                    <a href="#">Companie</a>
                  </li>
                  <li>
                    <a href="#">Equipe</a>
                  </li>
                  <li>
                    <a href="#">Carière</a>
                  </li>
                  <li>
                    <a href="#">Expérience</a>
                  </li>
                  <li>
                    <a href="#">Trophées</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <h3 class="footer-titel">
                  Liens <span> Utiles</span>
                </h3>
                <ul class="footer-link">
                  <li>
                    <a href="#">Colonel Ebeya, Kinshasa</a>
                  </li>
                  <li>
                    <a href="#">Sankola, Lubumbashi</a>
                  </li>
                  <li>
                    <a href="#">Rukuru, Goma</a>
                  </li>
                  <li>
                    <a href="#">Boso, Matadi</a>
                  </li>
                  <li>
                    <a href="#">Gungu, Kikwit</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <h3 class="footer-titel">
                  Contact <span>Info</span>
                </h3>
                <ul class="address">
                  <li>
                    <a href="#">
                      <i class="lni-map-marker"></i>N°3, Colonel Ebeya, Gombe,{" "}
                      <br />
                      Kinshasa
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="lni-phone-handset"></i> +243 999 992 118
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="lni-envelope"></i> blaisembombo@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <h3 class="footer-titel">
                  Nous sommes sur les <span>Réseaux</span>
                </h3>
                {/* <form
                  method="post"
                  id="subscribe-form"
                  name="subscribe-form"
                  class="validate"
                >
                  <div class="form-group is-empty">
                    <input
                      type="email"
                      value=""
                      name="Email"
                      class="form-control"
                      id="EMAIL"
                      placeholder="Email address"
                      required=""
                    />
                    <button
                      type="submit"
                      name="subscribe"
                      id="subscribes"
                      class="btn btn-common sub-btn"
                    >
                      <i class="lni-envelope"></i>
                    </button>
                    <div class="clearfix"></div>
                  </div>
                </form>
                 */}
                <div class="social-icon">
                  <a class="facebook" href="#">
                    <i class="lni-facebook-filled"></i>
                  </a>
                  <a class="twitter" href="#">
                    <i class="lni-twitter-filled"></i>
                  </a>
                  <a class="instagram" href="#">
                    <i class="lni-instagram-filled"></i>
                  </a>
                  <a class="linkedin" href="#">
                    <i class="lni-linkedin-filled"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}
