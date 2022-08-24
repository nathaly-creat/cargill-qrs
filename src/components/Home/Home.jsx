import "./Home.css";
import { Link } from "react-router-dom";

import fondoLogin from "../../Images/fondoLogin.png";

export function Home() {
  return (
        <div className="component-home">
        <div>
            <div>
            <section className="container-image">
                <figure className="component-home-image">
                <img
                    src={fondoLogin}
                    className="image-login"
                    alt="Images-fondo-login"
                />
                </figure>
            </section>
            </div>
        </div>
        <section className="container-home">
            <h1>¡Queremos escucharte!</h1>
            <div className="container-link-login-suggestions">
                <Link to="/login" className="link-login">
                CLIENTE
                </Link>
            </div>
            <div className="container-link-login-suggestions">
                <Link to="/Suggestions" className="link-suggestions">
                AREA DE SERVICIO
                </Link>
            </div>
        </section>
        </div>
    );
}
