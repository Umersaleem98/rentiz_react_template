export default function Residence() {
    return (
      <section id="residence">
        <div className="container my-5 py-5">
          <h2 className="text-capitalize m-0 py-lg-5">Popular Residence</h2>
  
          <div className="swiper-button-next residence-swiper-next residence-arrow"></div>
          <div className="swiper-button-prev residence-swiper-prev residence-arrow"></div>
  
          <div className="swiper residence-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="card">
                  <a href="index.html">
                    <img src="images/item15.png" className="card-img-top" alt="image" />
                  </a>
                  <div className="card-body p-0">
                    <a href="index.html">
                      <h5 className="card-title pt-4">Aliva Priva Jalvin</h5>
                    </a>
                    <p className="card-text">1087 Pin Oak Drive, Clinton, USA</p>
  
                    <div className="card-text">
                      <ul className="d-flex">
                        <li className="residence-list">
                          <img src="images/bed.png" alt="image" /> 4 bed
                        </li>
                        <li className="residence-list">
                          <img src="images/bath.png" alt="image" /> 2 bath
                        </li>
                        <li className="residence-list">
                          <img src="images/square.png" alt="image" /> 1203 Sqft.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* You can repeat the above block for each swiper slide */}
  
            </div>
          </div>
  
          <div className="residence-btn">
            <a href="index.html" className="btn btn-primary btn-lg my-5">
              View All Properties
            </a>
          </div>
        </div>
      </section>
    );
  }
  