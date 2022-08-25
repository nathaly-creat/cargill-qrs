import 'bootstrap';

export const SelectClasification = () => {
  return (
  <>
  <div className="dropdown">
    <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
     Opciones
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
  </>
  )
  }