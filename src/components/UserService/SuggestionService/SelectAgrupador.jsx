import 'bootstrap'; 

export const SelectAgrupador = () => {
return (
<>
<div className="dropdown">
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   Opciones
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li>Calidad</li>
    <li>CBS</li>
    <li>Cliente</li>
    <li>Comercial</li>
    <li>CTL</li>
    <li>Embarques</li>
    <li>Facturación</li>
    <li>Operaciones</li>
    <li>Pricing</li>
    <li>SAC</li>
    <li>SMT</li>
    <li>Supply Planning</li>
    <li>IT</li>
  </ul>
</div>
</>
)
}

// export default SelectAgrupador;