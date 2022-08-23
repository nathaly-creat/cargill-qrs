import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { FcGoogle } from "react-icons/fc";

import { logInEmail, signInGoogle } from "../../firebase/firebase.js";

export const HomePrueba = () => {
  // const [data , setData] = useState({email:'', password:''})
  // console.log('style:red', data)

  //   const ChangeImput = () => {
  // }
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
    // console.log('user', user)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logInEmail(user.email, user.password);
    console.log("user", user);
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
        <FcGoogle onClick={signInGoogle} />
      </Form>
    </div>
  );
};
