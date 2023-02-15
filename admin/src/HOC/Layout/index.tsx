import React from "react";
import { Outlet } from "react-router-dom";
import LeftMenu from "../../components/LeftMenu";
import "./style.scss";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <LeftMenu />
      <div className="admin-layout__right">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
