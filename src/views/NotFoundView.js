import { NotAccess } from "../components/Shared/NotAccess.jsx";
import "../components/Shared/NotAccess.css";

// CONTENEDOR DE VISTA 404.
export const NotFoundView = () => {
  return (
    <>
      <div className="notFound-view">
        <NotAccess />
      </div>
    </>
  );
};
