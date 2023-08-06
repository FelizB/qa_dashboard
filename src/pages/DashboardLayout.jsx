import React from "react";
import "../assets/styles/dashLayout.css";
import {
  SmallSidebar,
  BigSidebar,
  Navbar,
} from "../components/indexComponents";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <main className="dashboard">
        <div className="row">
          <div className="col-2">
            <BigSidebar className="bigSide" />
          </div>
          <div className="col">
            <Navbar />
            <div className="dashboardPage">
              <Outlet className="dashItems" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
