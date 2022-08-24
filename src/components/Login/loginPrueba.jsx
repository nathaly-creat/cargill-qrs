import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

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
    <div className="component-formLogin">
      <Form inline onSubmit={handleSubmit}>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
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
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
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
    </div>
    );
    }