import React from 'react';

export default function Billboard() {
  return (
    <section id="billboard">
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center">
          <div className="col-lg-6">
            {/* Ensure the image path is correct. For example, place the image in the public folder */}
            <img
              src="/images/billboard.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>

          <div className="col-lg-6">
            <h1 className="text-capitalize lh-1 my-3">Perfect way to buy and sell a home</h1>
            <p className="lead">
              Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna, massa aliqua dui pellentesque. Ac,
              gravida in eget non amet eget purus non.
            </p>
            <nav className="navbar navbar-expand-lg billboard-nav">
              <div className="container billboard-search p-0">
                <div className="row billboard-row">
                  <div className="col-lg-3 billboard-select">
                    <select className="form-select mb-2 mb-lg-0" aria-label="Purpose">
                      <option selected>Purpose</option>
                      <option value="1">Buy</option>
                      <option value="2">Rent</option>
                      <option value="3">Sell</option>
                      <option value="4">Something else here</option>
                    </select>
                  </div>
                  <div className="col-lg-3 billboard-select">
                    <select className="form-select mb-2 mb-lg-0" aria-label="Location">
                      <option selected>Location</option>
                      <option value="1">Texas</option>
                      <option value="2">Miami</option>
                      <option value="3">Chicago</option>
                      <option value="4">New York</option>
                      <option value="5">Something else here</option>
                    </select>
                  </div>
                  <div className="col-lg-3 billboard-select">
                    <select className="form-select mb-2 mb-lg-0" aria-label="Type">
                      <option selected>Type</option>
                      <option value="1">House</option>
                      <option value="2">Apartment</option>
                      <option value="3">Villa</option>
                      <option value="4">Loft</option>
                      <option value="5">Bungalow</option>
                      <option value="6">Something else here</option>
                    </select>
                  </div>

                  <div className="col-lg-3 billboard-btn">
                    <button type="submit" className="btn btn-primary btn-lg billboard-search">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
