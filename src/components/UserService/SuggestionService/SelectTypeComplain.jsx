import 'bootstrap'; 

export const SelectTypeComplain = () => {
  return (
  <>
  <div className="dropdown">
    <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
     Opciones
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li>Producto</li>
      <li>Servicio</li>
    </ul>
  </div>
  </>
  )
  }