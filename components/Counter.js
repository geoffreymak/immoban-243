import React from 'react'

export default function Counter() {
    return (
      <section
        className="counter-section section-padding"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget text-center">
              <div className="counter">
                <div className="icon">
                  <i className="lni-users"></i>
                </div>
                <div className="counterUp">6252</div>
                <p>CLIENTS HEUREUX</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget text-center">
              <div className="counter">
                <div className="icon">
                  <i className="lni-apartment"></i>
                </div>
                <div className="counterUp">3091</div>
                <p>PROJECTS ACCOMPLIS</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget text-center">
              <div className="counter">
                <div className="icon">
                  <i className="lni-key"></i>
                </div>
                <div className="counterUp">1200</div>
                <p>MAISONS VENDUS</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget text-center">
              <div className="counter">
                <div className="icon">
                  <i className="lni-cup"></i>
                </div>
                <div className="counterUp">79</div>
                <p>TROPHÉS DE MÉRITE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
