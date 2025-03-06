import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import EmployeePage from "../components/Layout/StudentEmployee";

function App() {
  return (
    <Routes>
       <Route index element={<EmployeePage />} />
    </Routes>
  );
}

export default App;
