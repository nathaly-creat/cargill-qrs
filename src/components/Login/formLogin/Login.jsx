import './Login.css'
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import logoCargill from '../../../images/logoCargill.jpg';
import { formLogin } from "./formLogin";

export function Login () {
    return (
    <div>
        <nav>
        <img src={logoCargill} alt="images-logoCargill" />
        </nav>
        <div>
            <formLogin  />
        </div>
    </div>
    );
};