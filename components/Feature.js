import React from "react";

export default function Feature() {
  return (
    <section className="featured-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title">A propos de nous</h2>
              <p>Notre agence opère sur l'immobilier depuis 2005.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-6 col-xs-12">
            <img className="img-fluid" src="/img/about/img-1.jpg" alt="" />
          </div>
          <div className="col-md-12 col-lg-6 col-xs-12">
            <h2 className="intro-title">Qui sommes-nous ?</h2>
            <h3 className="title-sub">
              Meilleur entreprise immobilier <br />
              Affaire immobilière en RDC 2019
            </h3>
            <p className="intro-desc">
              L'immobilier est notre service de prédilection. Pour la gestion de
              votre patrimoine immobilier, achat, location et vente, confiez
              vous à nous. Nous mettons à votre disposition notre expertise,
              assistance juridique et notre savoir faire. Vous satisfaire est
              notre préoccupation. Immoban 243 est l'idéal.
            </p>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-xs-12">
                <div className="featured-item">
                  <div className="icon">
                    <i className="lni-medall"></i>
                  </div>
                  <h3>
                    <a href="#">Entreprise certifié</a>
                  </h3>
                  <div className="featured-content">
                    <p>Meilleur entreprise immobilier dans la RDC</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-xs-12">
                <div className="featured-item">
                  <div className="icon">
                    <i className="lni-thumbs-up"></i>
                  </div>
                  <h3>
                    <a href="#">Très experimenté</a>
                  </h3>
                  <div className="featured-content">
                    <p>
                      Nous sommes spécialisée dans la gestion, achat, vente,
                      location et estimation des biens immobiliers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
