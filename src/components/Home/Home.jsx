import "./Home.css";
import { Link } from "react-router-dom";

import fondoLogin from "../../Images/fondoLogin.png";

export function Home() {
  return (
        <div>
        <div className="component-home">
            <section className="container-image">
                <figure className="component-home-image">
                <img
                    src={fondoLogin}
                    className="image-login"
                    alt="Images-fondo-login"
                />
                </figure>
            </section>
        <section className="container-home">
            <h1 className="title-home">¡Queremos escucharte!</h1>
            <h2 className="second-title-home">Portal de quejas y reclamos</h2>
            <div className="container-link-login">
                <Link to="/login" className="link-login">
                CLIENTE
                </Link>
            </div>
            <div className="container-link-login">
                <Link to="/login" className="link-service-area">
                AREA DE SERVICIO
                </Link>
            </div>
        </section>
        </div>
        </div>
    );
}
