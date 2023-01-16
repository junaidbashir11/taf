import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AiPrediction from "./Pages/AiPrediction";
import TechnicalIndicator from "./Pages/TechnicalIndicator";
import Dashboard from "./components/Dashboard";

function Routes() {
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <Layout {...props}>
                    <Routes>
                        <Route path="/dashboard/aiprediction" element={<AiPrediction />} />
                        <Route path="/dashboard/technical" element={<TechnicalIndicator />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </Layout>
            )} />
        </BrowserRouter>
    )
}

export default Routes;