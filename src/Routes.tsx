import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SettingPageSecurity = React.lazy(
  () => import("pages/SettingPageSecurity"),
);
const SettingPagePreferences = React.lazy(
  () => import("pages/SettingPagePreferences"),
);
const SettingEditProfile = React.lazy(() => import("pages/SettingEditProfile"));
const Services = React.lazy(() => import("pages/Services"));
const Loan = React.lazy(() => import("pages/Loan"));
const CreditCards = React.lazy(() => import("pages/CreditCards"));
const Investments = React.lazy(() => import("pages/Investments"));
const Accounts = React.lazy(() => import("pages/Accounts"));
const Transaction = React.lazy(() => import("pages/Transaction"));
const MainDashboard = React.lazy(() => import("pages/MainDashboard"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<MainDashboard />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/creditcards" element={<CreditCards />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/services" element={<Services />} />
          <Route path="/settingeditprofile" element={<SettingEditProfile />} />
          <Route
            path="/settingpagepreferences"
            element={<SettingPagePreferences />}
          />
          <Route
            path="/settingpagesecurity"
            element={<SettingPageSecurity />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
