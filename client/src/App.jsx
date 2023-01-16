import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import AnimatedRoutes from './components/AnimatedRoutes';
export const history = createBrowserHistory({ window });

function App() {

  return (
    <div className=''>
      <HistoryRouter history={history}>
        <AnimatedRoutes />
      </HistoryRouter>
    </div>
  )
}

export default App
