import React from "react";
import HeaderEleven from "../components/header/HeaderEleven";

import HomeElevenWhyChoose from "../components/home-eleven/HomeElevenWhyChoose";
import HomeElevenTestimonials from "../components/home-eleven/HomeElevenTestimonials";
import HomeElevenFaq from "../components/home-eleven/HomeElevenFaq";
import HomeElevenCta from "../components/home-eleven/HomeElevenCta";
import HomeElevenFooter from "../components/footer/HomeElevenFooter";
import HomeElevenDomainFinder from "../components/home-eleven/HomeElevenDomainFinder";

function HomeEleven() {
  return (
    <div className="style__eleven">
      <HeaderEleven />
      <HomeElevenDomainFinder />
      <HomeElevenWhyChoose className="whychoose__eleven" />
      <HomeElevenTestimonials />
      <HomeElevenFaq />
      <HomeElevenCta />
      <HomeElevenFooter />
    </div>
  );
}

export default HomeEleven;
