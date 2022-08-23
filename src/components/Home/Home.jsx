import './Welcome.css'
import { Link } from 'react-router-dom';
import logoCargill from '../../images/logoCargill.jpg';
import cow from '../../images/cow.jpg';
import pig from '../../images/pig.jpg';

export function Home () {
    return (
    <div className="conponent-home">
        <div>
            <div>
                <div>
                    <img src={logoCargill} alt="images-logoCargill" />
                    <figure className="component-home-figure">
                        <img src={cow} alt="images-cow" />
                        <img src={pig} alt="images-pig" />
                    </figure>
                </div>
            </div>
        </div>
        <h1>¡Queremos escucharte!</h1>
        <Link to="/login" className="link-login">QUEJAS Y RECLAMOS</Link>
        <Link to="/sugerencias" className="link-sugerencias">SUGERENCIAS</Link>
    </div>
    );
};