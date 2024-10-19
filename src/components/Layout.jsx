import React from "react";
import { NavLink, Outlet, useNavigate, Navigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const user = {
    name: "ali",
    type: "admin",
  };

  // eğerki kullanıcı tipi admin değilse alt routelara erişime izin verme
  if (user.type !== "admin") {
    // hook kullanımı
    navigate("/");
    // bileşen kullanımıı
    <Navigate />;
  }

  return (
    <div className="d-flex p-4 gap-3">
      <aside className="d-flex flex-column bg-light p-3 gap-4 rounded">
        <NavLink to={"/ekstra/kategoriler"}>Kategoriler</NavLink>
        <NavLink to={"/ekstra/kampanyalar"}>Kampanyalar</NavLink>
        <NavLink to={"/ekstra/ayarlar"}>Ayarlar</NavLink>
      </aside>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
