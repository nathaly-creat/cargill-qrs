import { useNavigate } from 'react-router-dom';

// Componente LogOut
export const LogOut = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className='logout-btn'
        onClick={() => {
          sessionStorage.removeItem('user');
          localStorage.removeItem('react-use-cart');
          navigate(`/`, { replace: true });
        }}
        data-testid='logout-btn'>
        <i class='fa-solid fa-right-from-bracket'></i></button>
    </>
  );
};