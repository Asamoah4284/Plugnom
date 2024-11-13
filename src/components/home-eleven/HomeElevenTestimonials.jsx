import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Core Swiper styles
import {
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

function HomeElevenTestimonials() {
  return (
    <>
      <section className="rts-testimonial testimonal__eleven section__padding">
        <div className="container">
          <div className="row ">
            <div className="col-12 d-flex justify-content-center">
              <div className="rts-section w-460 text-center">
                <h3
                  className="clr rts-section__title"
                  //   data-sal="slide-down"
                  //   data-sal-delay={300}
                  //   data-sal-duration={800}
                >
                  What our Clients say
                </h3>

                <p
                  className="rts-section__description"
                  //   data-sal="slide-down"
                  //   data-sal-delay={400}
                  //   data-sal-duration={800}
                >
                  From 24/7 support that acts as your extended team to
                  incredibly fast website performance
                </p>
              </div>
            </div>
          </div>
          {/* testimonial */}
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                modules={[Pagination, EffectFade, Scrollbar, A11y, Autoplay]}
                className="rts-testimonial__slider testimonial__slider--first"
                speed={1500}
                slidesPerView={3}
                spaceBetween={40}
                loop={true}
                autoplay={true}
                pagination={{
                  el: ".rts-dot__button",
                  clickable: true,
                }}
                breakpoints={{
                  1200: { slidesPerView: 3 },
                  900: { slidesPerView: 3 },
                  768: { slidesPerView: 2 },
                  580: { slidesPerView: 2 },
                  450: { slidesPerView: 1 },
                  0: { slidesPerView: 1 },
                }}
              >
                {/* single testimonial */}
                <SwiperSlide>
                  <div className="rts-testimonial__single">
                    <div className="rating">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <div className="content">
                      <p>
                        With all websites I manage as a Web developer, Plugnom
                        offers the right packages with secured and easy
                        navigation on the panel. Thank you Plugnom!
                      </p>
                    </div>
                    <div className="author__meta">
                      <div className="author__meta--image">
                        <img
                          src="assets/images/testimonials/author.png"
                          alt=""
                        />
                      </div>
                      <div className="author__meta--details">
                        <Link to="#">Bright Tenbil</Link>
                        <span>CEO, Hyperlink Media Africa</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* single testimonial end */}
                {/* single testimonial */}
                <SwiperSlide>
                  <div className="rts-testimonial__single">
                    <div className="rating">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <div className="content">
                      <p>
                        The best web hosting with good speed, I've been using
                        plugnom for 7 years now and I've not encounter any
                        issue.
                      </p>
                    </div>
                    <div className="author__meta">
                      <div className="author__meta--image">
                        <img
                          src="assets/images/testimonials/author-2.png"
                          alt=""
                        />
                      </div>
                      <div className="author__meta--details">
                        <Link to="#">Ebenezer Narh-ngwah</Link>
                        <span>CEO, Codextra Africa</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* single testimonial end */}
                {/* single testimonial */}
                <SwiperSlide>
                  <div className="rts-testimonial__single">
                    <div className="rating">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <div className="content">
                      <p>
                        Great customer service and great service provider. The
                        best and trust plug for all web services
                      </p>
                    </div>
                    <div className="author__meta">
                      <div className="author__meta--image">
                        <img
                          src="assets/images/testimonials/author-3.png"
                          alt=""
                        />
                      </div>
                      <div className="author__meta--details">
                        <Link to="#">Marian Miller</Link>
                        <span>CEO, Miller and Marian Ltd.</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* single testimonial end */}
                {/* single testimonial */}
                <SwiperSlide>
                  <div className="rts-testimonial__single">
                    <div className="rating">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <div className="content">
                      <p>
                        When getting a product or service from anywhere, I
                        always look for good customer service. Trust me, Plugnom
                        has got that. Prices are affordable too.
                      </p>
                    </div>
                    <div className="author__meta">
                      <div className="author__meta--image">
                        <img
                          src="assets/images/testimonials/author.png"
                          alt=""
                        />
                      </div>
                      <div className="author__meta--details">
                        <Link to="#">Gabriel Dangote</Link>
                        <span>Client</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* single testimonial end */}
                {/* pagination dot */}
                <div className="rts-dot__button slider-center" />
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeElevenTestimonials;
