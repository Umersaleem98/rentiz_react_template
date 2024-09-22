import React from 'react';

export default function Feature() {
  return (
    <section id="feature">
      <div className="container py-5">
        <div className="row">
          <div className="section-header align-center mb-5">
            <h2 className="text-capitalize m-0">Featured In</h2>
          </div>
        </div>
        <div className="row d-flex justify-content-between">
          <div className="col-md-2">
            <div className="my-3" role="group" aria-label="3 / 7" style={{ width: '158.667px', marginRight: '20px' }}>
              {/* Ensure the image path is correct */}
              <img alt="image" src="/images/logo1.png" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="my-3" role="group" aria-label="3 / 7" style={{ width: '158.667px', marginRight: '20px' }}>
              <img alt="image" src="/images/logo2.png" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="my-3" role="group" aria-label="3 / 7" style={{ width: '158.667px', marginRight: '20px' }}>
              <img alt="image" src="/images/logo3.png" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="my-3" role="group" aria-label="3 / 7" style={{ width: '158.667px', marginRight: '20px' }}>
              <img alt="image" src="/images/logo4.png" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="my-3" role="group" aria-label="3 / 7" style={{ width: '158.667px', marginRight: '20px' }}>
              <img alt="image" src="/images/logo6.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
