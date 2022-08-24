import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";


import { logInEmail, signInGoogle } from "../../firebase/firebase.js";
import "./Login.css"

import { logInEmailClient } from "../../firebase/firebase.js";

export const LoginPrueba = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    rol: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logInEmailClient(user.email, user.password, user.rol);
  };

  return (
    <div className="form-login">
      <h2 className="title-login">Ingresa tus datos</h2>
      <Form inline onSubmit={handleSubmit}>
        <FormGroup className="mb-2 me-sm-2 mb-sm-3">
          <Label className="me-sm-2" for="exampleEmail">
            Correo
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="correo@email.com"
            type="email"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-4">
          <Label className="me-sm-2" for="examplePassword">
            Contraseña
          </Label>
          <Input
            id="examplePassword"
            name="password"
            type="password"
            placeholder="contraseña"
            onChange={handleChange}
          />
        </FormGroup>


        <Button>Ingresar</Button>

      </Form>
      <button className="button-login" onClick={logInEmail}> Ingresar</button>
    </div>

  );
};
//       58 <FcGoogle onClick={signInGoogle} />


    

