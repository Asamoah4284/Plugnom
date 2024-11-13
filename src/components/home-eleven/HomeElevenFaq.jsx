import React, { useState } from "react";

function HomeElevenFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="rts-hosting-faq faq__eleven">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="rts-section text-center">
              <h2 className="rts-section__title mb-0">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="rts-faq__accordion">
              <div className="accordion accordion-flush" id="rts-accordion">
                {[
                  {
                    id: "one",
                    question: "What is your domain name?",
                    answer:
                      "A domain name is a unique web address that users type into their browsers to access your website. It serves as your online identity, making it easier for visitors to find and remember your site, e.g., plugnom.com.",
                  },
                  {
                    id: "two",
                    question: "Does my business really need a domain name?",
                    answer:
                      "Yes, having a domain name is crucial for building a professional online presence. It enhances credibility, brand recognition, and makes it easier for customers to find you on the internet.",
                  },
                  {
                    id: "three",
                    question: "What is Web Hosting?",
                    answer:
                      "Web hosting is a service that stores your website's files, images, and content on a server. It ensures your website is accessible to users worldwide 24/7.",
                  },
                  {
                    id: "four",
                    question:
                      "Can I run my website or app on Google Cloud or AWS without any experience?",
                    answer:
                      "Google Cloud and AWS offer powerful cloud computing services. However, you need technical expertise to set up, configure, and manage. With Plugnom, you don't have to.",
                  },
                  {
                    id: "five",
                    question:
                      "What do I need to set up a remote or hybrid workplace?",
                    answer:
                      "To establish a remote or hybrid workplace, you'll need secure online communication tools, reliable internet connectivity, virtual collaboration software, and a well-defined remote work policy. Ensuring data security and employee well-being is also essential.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.id}
                    className={`accordion-item ${
                      activeIndex === index ? "active" : ""
                    }`}
                  >
                    <div className="accordion-header" id={item.id}>
                      <h4
                        className={`accordion-button ${
                          activeIndex === index ? "" : "collapsed"
                        }`}
                        onClick={() => handleToggle(index)}
                        aria-controls={`item__${item.id}`}
                        aria-expanded={activeIndex === index}
                      >
                        {item.question}
                      </h4>
                    </div>
                    <div
                      id={`item__${item.id}`}
                      className={`accordion-collapse collapse ${
                        activeIndex === index ? "show" : ""
                      }`}
                      aria-labelledby={item.id}
                      data-bs-parent="#rts-accordion"
                    >
                      <div className="accordion-body">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeElevenFaq;
