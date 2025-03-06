import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Notification from "../components/Layout/Notification";

function NotificationPage() {
  return (
    <Routes>
      <Route index element={<Notification />} />
    </Routes>
  );
}

export default NotificationPage;
