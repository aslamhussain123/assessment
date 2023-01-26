import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CompanyInsight from "./pages/CompanyInsight";
import Details from './pages/Details';
const Loadpages = () => {
  return (
    <section className="main-body p-4">
      <div className="content--wrapper h-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CompanyInsight" element={<CompanyInsight />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
      </div>
    </section>
  );
};

export default Loadpages;
