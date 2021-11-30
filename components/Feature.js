import React from "react";

export default function Feature() {
  return (
    <section class="featured-bg section-padding">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title-header text-center">
              <h2 class="section-title">A propos de nous</h2>
              <p>Notre agence opère sur l'immobilier depuis 2005.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-lg-6 col-xs-12">
            <img class="img-fluid" src="/img/about/img-1.jpg" alt="" />
          </div>
          <div class="col-md-12 col-lg-6 col-xs-12">
            <h2 class="intro-title">Qui sommes-nous ?</h2>
            <h3 class="title-sub">
              Meilleur entreprise immobilier <br />
              Affaire immobilière en RDC 2019
            </h3>
            <p class="intro-desc">
              L'immobilier est notre service de prédilection. Pour la gestion de
              votre patrimoine immobilier, achat, location et vente, confiez
              vous à nous. Nous mettons à votre disposition notre expertise,
              assistance juridique et notre savoir faire. Vous satisfaire est
              notre préoccupation. Immoban 243 est l'idéal.
            </p>
            <div class="row">
              <div class="col-lg-6 col-md-12 col-xs-12">
                <div class="featured-item">
                  <div class="icon">
                    <i class="lni-medall"></i>
                  </div>
                  <h3>
                    <a href="#">Entreprise certifié</a>
                  </h3>
                  <div class="featured-content">
                    <p>Meilleur entreprise immobilier dans la RDC</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-xs-12">
                <div class="featured-item">
                  <div class="icon">
                    <i class="lni-thumbs-up"></i>
                  </div>
                  <h3>
                    <a href="#">Très experimenté</a>
                  </h3>
                  <div class="featured-content">
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
