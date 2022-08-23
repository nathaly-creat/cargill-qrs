// IMPORTACION HOOKS
import { useNavigate } from 'react-router-dom';
import notFound from '../../assets/not-found.jpg'

// COMPONENTE PARA INDICAR DE PAGINA NO ENCONTRADA.
export const NotAccess = () => {
  const navigate = useNavigate();
  return (
    <div className='without-access' data-testid='without-access'>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >Volver</button>
      <p>Upps..! Página no encontrada.</p>
      <img src={notFound} alt='not-found'/>
      <p>Es posible que la página que solicita ya no esté disponible o que se haya movido a otra ubicación en el sitio.</p>
    </div>
  )
}