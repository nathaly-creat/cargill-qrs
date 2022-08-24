import { Routes, Route } from 'react-router-dom';

// ROUTER SEGUN USUARIO ACTIVO
export const UserRoutes = () => {
    const activeUser = JSON.parse(sessionStorage.getItem('user'));
    console.log('aquiii', activeUser)
    return (
      <>
      Hola
        {/* <Routes>
          {
            activeUser?.user.roles.proveedor
              ? (
                <Route path='' element={<AdminView/>}>
                  <Route index element={<Employees/>}></Route>
                  <Route path='delivered-orders' element={<DeliveredOrders/>}></Route>
                </Route>
                )
              : (<Route path='*' element={<WithoutAccess/>}/>)
          }
          {
            activeUser?.user.roles.waiter
              ? (
                <Route path='waiter' element={<WaiterView/>}>
                    <Route index element={<NewOrder/>}></Route>
                    <Route path='orders' element={<Orders/>}></Route>
                    <Route path='delivered-orders' element={<DeliveredOrders/>}></Route>
                </Route> 
                )
              : (<Route path='*' element={<WithoutAccess/>}/>)
          }
          {
            activeUser?.user.roles.kitchen
              ? (
                <Route path='kitchen' element={<KitchenView/>}>
                  <Route index element={<OrdersToCook/>}></Route>
                  <Route path='delivered-orders' element={<DeliveredOrders/>}></Route>
                </Route>
                )
              : (<Route path='*' element={<WithoutAccess/>}/>)
          }
          <Route path='*' element={<WithoutAccess/>} /> 
        </Routes> */}
      </>
    );
  };