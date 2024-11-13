import React from "react";
import Header from "../components/header/Header";
import DomainTransferBanner from "../components/domain-transfer/DomainTransferBanner";
import DomainTransferService from "../components/domain-transfer/DomainTransferService";
import DomainTransferList from "../components/domain-transfer/DomainTransferList";
import DomainTransferWhy from "../components/domain-transfer/DomainTransferWhy";

import PricingFaq from "../components/pricing/PricingFaq";

function DomainTransfer() {
  return (
    <div className="page-template template-resell">
      <Header />
      <DomainTransferBanner />
      <DomainTransferService />
      <DomainTransferList />
      <DomainTransferWhy />
      <PricingFaq />
    </div>
  );
}

export default DomainTransfer;
