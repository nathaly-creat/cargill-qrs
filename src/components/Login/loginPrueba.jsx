import { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { logInEmailClient } from '../../firebase/firebase.js';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export const HomePrueba = ({ setUserData }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await logInEmailClient(user.email, user.password, setUserData);
    navigate('/handler');
  };

  return (
    <div className='form-login'>
      <h2 className='title-login'>Ingresa tus datos</h2>
      <Form inline onSubmit={handleSubmit}>
        <FormGroup className='mb-2 me-sm-2 mb-sm-3'>
          <Label className='me-sm-2' for='exampleEmail'>
            Correo
          </Label>
          <Input
            id='exampleEmail'
            name='email'
            placeholder='correo@email.com'
            type='email'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className='mb-2 me-sm-2 mb-sm-4'>
          <Label className='me-sm-2' for='examplePassword'>
            Contraseña
          </Label>
          <Input
            id='examplePassword'
            name='password'
            type='password'
            placeholder='contraseña'
            onChange={handleChange}
          />
        </FormGroup>
        <button className='button-login' onClick={handleSubmit}>
          {' '}
          Ingresar
        </button>
      </Form>
    </div>
  );
};
