import React from "react";

export default function Intro() {
  return (
    <div class="search-container">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title-header text-center">
              <h2 class="section-title">Recherche par propriétés</h2>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-xs-12">
              <div class="search-category-container">
                <label class="styled-select">
                  <select class="classic">
                    <option>Toutes les actions</option>
                    <option>Rentals (12)</option>
                    <option>Sales (17)</option>
                  </select>
                </label>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-xs-12">
              <div class="search-category-container">
                <label class="styled-select">
                  <select class="classic">
                    <option>Tous les types</option>
                    <option>Apartments (3)</option>
                    <option>Houses (2)</option>
                    <option>Condos (1)</option>
                    <option>Industrial (2)</option>
                    <option>Land (3)</option>
                    <option>Offices (1)</option>
                    <option>Retail (2)</option>
                    <option>Villas (1)</option>
                  </select>
                </label>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-xs-12">
              <div class="search-category-container">
                <label class="styled-select">
                  <select class="classic">
                    <option>Toutes les communes</option>
                    <option>New York</option>
                    <option>California</option>
                    <option>Washington</option>
                    <option>Chicago</option>
                    <option>Phoenix</option>
                    <option>Birmingham</option>
                  </select>
                </label>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-xs-12">
              <div class="text-right btn-section">
                <button type="button" class="btn btn-common">
                  <i class="lni-search"></i> Recherchez
                </button>
              </div>
            </div>
          </div>
          <div class="row range-slider option-hide" style={{ display: "none" }}>
            <div class="col-lg-3 col-md-6 col-xs-12">
              <div class="search-category-container">
                <label class="styled-select">
                  <select class="classic">
                    <option>Toutes les provinces</option>
                    <option>San Jose</option>
                    <option>Salt Lake City</option>
                    <option>Las Vegas</option>
                    <option>Boston</option>
                    <option>Tampa</option>
                    <option>Orlando</option>
                  </select>
                </label>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-xs-12">
              <div class="search-category-container">
                <label class="styled-select">
                  <select class="classic">
                    <option>Chambres</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                  </select>
                </label>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-xs-12">
              <input type="text" id="range" value="" name="range" />
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 text-left">
              <a href="#" class="show-options">
                {" "}
               Plus d'options
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
