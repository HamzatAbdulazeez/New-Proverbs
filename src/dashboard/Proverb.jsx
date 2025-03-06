import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ProverbPage from "../components/Layout/ProverbPage";

function Proverb() {
  return (
    <Routes>
       <Route index element={<ProverbPage />} />
    </Routes>
  );
}

export default Proverb;
