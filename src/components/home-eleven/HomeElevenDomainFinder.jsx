import React from "react";

function HomeElevenDomainFinder() {
  return (
    <>
      <div className="rts-domain-finder wp__hosting__option">
        <div className="">
          <div className="row">
            <div className="col-12">
              <div className="rts-domain-finder__content domain-finder-bg">
                <h3
                //   data-sal="slide-down"
                //   data-sal-delay={300}
                //   data-sal-duration={800}
                >
                  Build and Manage your website here
                </h3>
                <form
                  action="https://hostie-whmcs.themewant.com/cart.php"
                  class="domain-checker"
                  //   data-sal="slide-down"
                  //   data-sal-delay="400"
                  //   data-sal-duration="800"
                >
                  <input
                    type="text"
                    id="domain-name"
                    name="query"
                    placeholder="Your domain.com"
                    required=""
                  />
                  <input type="hidden" name="domain" value="register" />
                  <input type="hidden" name="a" value="add" />
                  <button type="submit" name="domain_type">
                    search domain
                  </button>
                </form>
                <div className="compare">
                  <div className="compare__list">
                    <ul>
                      <li
                      // data-sal="slide-down"
                      // data-sal-delay={500}
                      // data-sal-duration={800}
                      ></li>
                      <li
                      // data-sal="slide-down"
                      // data-sal-delay={600}
                      // data-sal-duration={800}
                      >
                        <span className="ext">.com</span>
                      </li>
                      <li
                      // data-sal="slide-down"
                      // data-sal-delay={700}
                      // data-sal-duration={800}
                      >
                        <span className="ext">.org</span>
                      </li>
                      <li
                      // data-sal="slide-down"
                      // data-sal-delay={800}
                      // data-sal-duration={800}
                      >
                        <span className="ext">.net</span>
                      </li>
                      <li
                      // data-sal="slide-down"
                      // data-sal-delay={900}
                      // data-sal-duration={800}
                      >
                        <span className="ext">.biz</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hello */}
      </div>
    </>
  );
}

export default HomeElevenDomainFinder;
