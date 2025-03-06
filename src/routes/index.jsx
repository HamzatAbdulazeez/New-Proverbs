import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Header from "../pages/Header";
import Home from "../pages/Home"; 
import Register from "../pages/auth/Register"; 

// Dashboard Pages
import Dashboard from "../dashboard/Dashboard";
import EmployeePage from "../dashboard/EmployeePage";
import NotificationPage from "../dashboard/NotificationPage";
import Proverb from "../dashboard/Proverb";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<HomeWithHeader />} />

        {/* Authentication Pages */}
        <Route path="/auth/register" element={<Register />} />

        {/* Dashboard Pages */}
        <Route path="/dashboard/*" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="proverbs" element={<Proverb />} />
          <Route path="employees" element={<EmployeePage />} />
          <Route path="notifications" element={<NotificationPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

// Wrapper Component for Home with Header
function HomeWithHeader() {
  return (
    <>
      <Header />
    </>
  );
}
