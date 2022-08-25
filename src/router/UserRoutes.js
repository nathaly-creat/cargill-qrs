import { Routes, Route } from "react-router-dom";
import { NotAccess } from "../components/Shared/NotAccess";
// import { ComplainView } from "../views/ComplainView.js";
import { ServiceView } from "../views/ServiceView.js";

// ROUTER SEGUN USUARIO ACTIVO
export const UserRoutes = () => {
  const activeUser = JSON.parse(sessionStorage.getItem("user"));

  return (
    <>
      <Routes>
        {activeUser?.user ? (
          <Route path="/quejas"></Route>
        ) : (
          <Route path="/*" element={<NotAccess />} />
          )}
        {activeUser?.user ? (
          <Route path="/servicios" element={<ServiceView />}></Route>
            ) : (
          <Route path="/*" element={<NotAccess />} />
        )}
      </Routes>
    </>
  );
};
