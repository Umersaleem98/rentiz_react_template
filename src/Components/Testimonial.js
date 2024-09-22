import React from "react";

export default function Testimonial() {
  return (
    <section id="testimonial">
      <div className="container my-5">
        <div className="swiper testimonial-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="row my-5 py-lg-5">
                <div className="col-md-8 mx-auto text-center">
                  <img
                    src="images/quote.png"
                    className="rounded mx-auto d-inline"
                    alt="Quote"
                  />
                  <p className="testimonial-p mt-4">
                    Massa semper non rutrum orci facilisi sit. Lectus porta quam
                    a fringilla eget viverra sem. Vulputate massa hendrerit
                    turpis gravida tempor, porttitor.
                  </p>

                  <div className="row">
                    <div className="col-md-8 mx-auto">
                      <p className="pt-5 mb-1">Elena Pravo</p>
                      <p className="text-muted">CEO, Upstate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="row my-5 py-lg-5">
                <div className="col-md-8 mx-auto text-center">
                  <img
                    src="images/quote.png"
                    className="rounded mx-auto d-inline"
                    alt="Quote"
                  />
                  <p className="testimonial-p mt-4">
                    Massa semper non rutrum orci facilisi sit. Lectus porta quam
                    a fringilla eget viverra sem. Vulputate massa hendrerit
                    turpis gravida tempor, porttitor.
                  </p>

                  <div className="row">
                    <div className="col-md-8 mx-auto">
                      <p className="pt-5 mb-1">Elena Pravo</p>
                      <p className="text-muted">CEO, Upstate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="row my-5 py-lg-5">
                <div className="col-md-8 mx-auto text-center">
                  <img
                    src="images/quote.png"
                    className="rounded mx-auto d-inline"
                    alt="Quote"
                  />
                  <p className="testimonial-p mt-4">
                    Massa semper non rutrum orci facilisi sit. Lectus porta quam
                    a fringilla eget viverra sem. Vulputate massa hendrerit
                    turpis gravida tempor, porttitor.
                  </p>

                  <div className="row">
                    <div className="col-md-8 mx-auto">
                      <p className="pt-5 mb-1">Elena Pravo</p>
                      <p className="text-muted">CEO, Upstate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-swiper-button col-md-3 position-absolute">
            <div className="swiper-button-prev testimonial-arrow"></div>
            <div className="arrow-divider"> | </div>
            <div className="swiper-button-next testimonial-arrow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
