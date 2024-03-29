import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="footer-area section-padding">
      <div className="container">
        <div className="container">
          <div className="row">
            <div className=" col-md-6 col-sm-12 col-xs-12">
              <h3 className="footer-titel">
                A propos de <span>Nous</span>
              </h3>
              L'immobilier est notre service de prédilection. Pour la gestion de
              votre patrimoine immobilier, achat, location et vente, confiez
              vous à nous.Vous satisfaire est notre préoccupation.
            </div>
            {/*  <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <h3 className="footer-titel">
                Liens <span> Utiles</span>
              </h3>
              <ul className="footer-link">
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
            </div> */}
            <div className="col-md-6 col-sm-12 col-xs-12">
              <h3 className="footer-titel">
                Contact <span>Info</span>
              </h3>
              <ul className="address">
                <li>
                  <a href="#">
                    <i className="lni-map-marker"></i>N°3, Colonel Ebeya, Gombe,{" "}
                    Kinshasa
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="lni-phone-handset"></i> +243 999 992 118
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="lni-envelope"></i> blaisembombo@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            {/*  <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <h3 className="footer-titel">
                Nous sommes sur les <span>Réseaux</span>
              </h3>
              <form
                  method="post"
                  id="subscribe-form"
                  name="subscribe-form"
                  className="validate"
                >
                  <div className="form-group is-empty">
                    <input
                      type="email"
                      value=""
                      name="Email"
                      className="form-control"
                      id="EMAIL"
                      placeholder="Email address"
                      required=""
                    />
                    <button
                      type="submit"
                      name="subscribe"
                      id="subscribes"
                      className="btn btn-common sub-btn"
                    >
                      <i className="lni-envelope"></i>
                    </button>
                    <div className="clearfix"></div>
                  </div>
                </form>
                 
              <div className="social-icon">
                <a className="facebook" href="#">
                  <i className="lni-facebook-filled"></i>
                </a>
                <a className="twitter" href="#">
                  <i className="lni-twitter-filled"></i>
                </a>
                <a className="instagram" href="#">
                  <i className="lni-instagram-filled"></i>
                </a>
                <a className="linkedin" href="#">
                  <i className="lni-linkedin-filled"></i>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
