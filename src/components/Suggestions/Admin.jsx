import { Link, Outlet } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import { LogOut } from '../../components/Shared/LogOut';
import { useForm } from 'react-hook-form'
import Header from "../Suggestions/Header";
import '../Suggestions/styles/styles.css'
// import logocargill from 

// COMPONENTE ADMIN CON B. DE NAVEGACION PARA ADMINISTRADOR.
export const Suggestions = () => {
  return (
    <>
      <Header />
      {/* <Navbar expand='sm' className='general-nav'>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='general-nav-dir'>
            <Link to='/quejas'>Quejas y Reclamos</Link>
            <Link to='/sugerencias' >Sugerencias</Link>
            <Link to='/seguimiento' >Seguimiento</Link>
            <LogOut/>
          </Nav>
        </Navbar.Collapse>
        <img
          alt='logo-cargill'
          // src={logocargill}
          className='general-nav-img'
        />
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          className='general-nav-toggle'
        />
      </Navbar>
      <section className='general-selected-component'>
        <Outlet/>
      </section> */}
      <form class="formSuggestion">
        <div class="form-group">
          <h2> Sugerencias</h2>
          <label for="cliente">Cliente</label>
          <input type='text' name='name' />
        </div>
        <div class="form-group">
          <label>Correo</label>
          <input type="text" class="form-control" id="name" placeholder="name@example.com" />
        </div>
        <section class='modal-text-content'>
          <textarea style={{color:"#f1f1f1",overflow:"hidden", resize: "both", height: "6em", width: "300px"}} type='text'  id='input-post' class='inp-post-modal-post' placeholder='Deja aqui tu sugerencias' maxlength='600' required>  
          </textarea>
        </section>
        <button type='submit'  class='btn btn-info'>Enviar</button>
      </form>
    </>
  )
}


// export default function AddSuggestions({addsuggest}) {
//   const {register, handleSubmit, formState: { errors }} = useForm();
//   const onSubmit = (e) => {
//     e.preventDefault();
//     const suggestion = e.target.value;
//     onSubmit(suggestion);
//   };
//   return (
//  <>
//   </>
//   );
// }