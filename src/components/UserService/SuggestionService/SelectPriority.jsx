import 'bootstrap'

export const SelectPriority = () => {
  return (
  <>
  <div className="dropdown">
    <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
     Opciones
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li>Por asignar</li>
      <li>Alto</li>
      <li>Medio</li>
      <li>Bajo</li>
    </ul>
  </div>
  </>
  )
  }