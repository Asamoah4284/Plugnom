import React, { useState } from "react";

function HomeElevenFaq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div className="rts-hosting-faq faq__eleven">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="rts-section text-center">
                <h2
                  className="rts-section__title mb-0"
                  // data-sal="slide-down"
                  // data-sal-delay={100}
                  // data-sal-duration={800}
                >
                  Frequently Asked Questions
                </h2>
              </div>
              <div
                className="rts-faq__accordion"
                // data-sal="slide-down"
                // data-sal-delay={100}
                // data-sal-duration={800}
              >
                <div className="accordion accordion-flush" id="rts-accordion">
                  <div
                    className={`accordion-item ${
                      activeIndex === 0 ? "active" : ""
                    }`}
                    onClick={() => handleToggle(0)}
                  >
                    <div className="accordion-header" id="one">
                      <h4
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#item__one"
                        aria-controls="item__one"
                      >
                        What is your domain name?
                      </h4>
                    </div>
                    <div
                      id="item__one"
                      className="accordion-collapse collapse show"
                      aria-labelledby="one"
                      data-bs-parent="#rts-accordion"
                    >
                      <div className="accordion-body">
                        A domain name is a unique web address that users type
                        into their browsers to access your website. It serves as
                        your online identity, making it easier for visitors to
                        find and remember your site, e.g. plugnom.com.
                      </div>
                    </div>
                  </div>
                  <div
                    className={`accordion-item ${
                      activeIndex === 1 ? "active" : ""
                    }`}
                    onClick={() => handleToggle(1)}
                  >
                    <div className="accordion-header" id="two">
                      <h4
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#item__two"
                        aria-controls="item__two"
                      >
                        Does my business really need a domain name?
                      </h4>
                    </div>
                    <div
                      id="item__two"
                      className="accordion-collapse collapse"
                      aria-labelledby="two"
                      data-bs-parent="#rts-accordion"
                    >
                      <div className="accordion-body">
                        Yes, having a domain name is crucial for building a
                        professional online presence. It enhances credibility,
                        brand recognition, and makes it easier for customers to
                        find you on the internet.
                      </div>
                    </div>
                  </div>
                  <div
                    className={`accordion-item ${
                      activeIndex === 2 ? "active" : ""
                    }`}
                    onClick={() => handleToggle(2)}
                  >
                    <div className="accordion-header" id="three">
                      <h4
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#item__three"
                        aria-controls="item__three"
                      >
                        What is Web Hosting
                      </h4>
                    </div>
                    <div
                      id="item__three"
                      className="accordion-collapse collapse"
                      aria-labelledby="three"
                      data-bs-parent="#rts-accordion"
                    >
                      <div className="accordion-body">
                        Web hosting is a service that stores your website's
                        files, images, and content on a server. It ensures your
                        website is accessible to users worldwide 24/7
                      </div>
                    </div>
                  </div>
                  <div
                    className={`accordion-item ${
                      activeIndex === 3 ? "active" : ""
                    }`}
                    onClick={() => handleToggle(3)}
                  >
                    <div className="accordion-header" id="four">
                      <h4
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#item__four"
                        aria-controls="item__four"
                      >
                        Can I run my website or app on Google Cloud or Aws
                        without any experience
                      </h4>
                    </div>
                    <div
                      id="item__four"
                      className="accordion-collapse collapse"
                      aria-labelledby="four"
                      data-bs-parent="#rts-accordion"
                    >
                      <div className="accordion-body">
                        Google Cloud and AWS offer powerful cloud computing
                        services, however, you need technical expertise to
                        setup, configure, and manage. With Plugnom, you don't
                        have to.
                      </div>
                    </div>
                  </div>
                  <div
                    className={`accordion-item ${
                      activeIndex === 4 ? "active" : ""
                    }`}
                    onClick={() => handleToggle(4)}
                  >
                    <div className="accordion-header" id="five">
                      <h4
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#item__five"
                        aria-controls="item__four"
                      >
                        What do I need to setup a remote or hybrid workplace
                      </h4>
                    </div>
                    <div
                      id="item__five"
                      className="accordion-collapse collapse"
                      aria-labelledby="five"
                      data-bs-parent="#rts-accordion"
                    >
                      <div className="accordion-body">
                        To establish a remote or hybrid workplace, you'll need
                        secure online communication tools, reliable internet
                        connectivity, virtual collaboration software, and a
                        well-defined remote work policy. Ensuring data security
                        and employee well-being is also essential.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeElevenFaq;
