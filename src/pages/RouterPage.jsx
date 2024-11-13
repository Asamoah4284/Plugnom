import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadTop from "../components/LoadTop";
import BackToTop from "../components/BackToTop";
// import Home from "./Home";

import HomeEleven from "./HomeEleven";

function RouterPage() {
  return (
    <div>
      <Router>
        <LoadTop />
        <Routes>
          <Route path="/" element={<HomeEleven />}></Route>
        </Routes>
        <BackToTop />
      </Router>
    </div>
  );
}

export default RouterPage;
