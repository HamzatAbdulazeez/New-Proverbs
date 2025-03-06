import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Dashboard from "../dashboard/Dashboard";
import EmployeePage from "../dashboard/EmployeePage";
import NotificationPage from "../dashboard/NotificationPage";
import Proverb from "../dashboard/Proverb";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Layout Wrapping Dashboard Pages */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="proverbs" element={<Proverb />} />
          <Route path="employees" element={<EmployeePage />} />
          <Route path="notifications" element={<NotificationPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
