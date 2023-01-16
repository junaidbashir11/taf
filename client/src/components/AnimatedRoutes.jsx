import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./Home";
import { AnimatePresence } from "framer-motion";
import Login from "./Login";
import Dashboard from "./Dashboard/components/Dashboard";
import AiPrediction from "./Dashboard/Pages/AiPrediction";
import TechnicalIndicator from "./Dashboard/Pages/TechnicalIndicator";
import Content from "./Dashboard/Pages/Content";
import EmailVerify from "./EmailVerify";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import UserProfile from "./Dashboard/Pages/UserProfile";
import PasswordReset from "./PasswordReset";

function AnimatedRoutes() {
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Login />} >
          <Route path="/dashboard/aiprediction" element={user ? <AiPrediction /> : <Login />} />
          <Route path="/dashboard/technical" element={user ? <TechnicalIndicator /> : <Login />} />
          <Route path="/dashboard/profile" element={user ? <UserProfile /> : <Login />} />
          <Route index path="/dashboard" element={user ? <Content /> : <Login />} />
        </Route>
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/verify" element={user?.emailVerified ? <Home /> : <EmailVerify />} />
        <Route path="/passwordreset" element={user ? <Home /> : <PasswordReset />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;