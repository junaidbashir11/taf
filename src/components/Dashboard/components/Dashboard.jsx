import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router';
import Transition from '../../Transition';
import Sidebar from "./Sidebar";

function Dashboard() {
  const [showSidebar, onSetShowSidebar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!(localStorage.getItem("user"))) {
      navigate("/login");
    }
  }, [])
  return (
    <Transition>
      <div className="flex dashboard-bg">
        <Sidebar
          onSidebarHide={() => {
            onSetShowSidebar(false);
          }}
          showSidebar={showSidebar}
        />
        <Outlet />
      </div>
    </Transition>
  );
}

export default Dashboard