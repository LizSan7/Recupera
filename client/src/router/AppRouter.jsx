//navegar entre componentes por medio de URL

import React, { useContext } from 'react';
import SignInPage from '../module/auth/SingInpage';
import AuthContext from '../config/context/auth-context'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AdminLayout from '../module/AdminLayout';
const AppRouter = () => {
  const userRole = localStorage.getItem("userRole");
  const username = localStorage.getItem("username");
  const {user}= useContext(AuthContext);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
       
        {
          // Publico 
        }
        {   
          user.signed ? (<>
            <Route path='/' element= {<AdminLayout username={username} userRole={userRole}/>}>
              <Route path='admin' element={<>ADMIN HOME</>}/>
              <Route path='user' element={<>USUARIOS</>}/>
              <Route path='client' element={<>CLIENTES</>}/>

            </Route>
          </>
           ):  <Route path='/' element={<SignInPage />} /> }
           <Route path='*' element={<>404 NOT FOUND </>} />
      </>
    )
  );
  return <RouterProvider router={router}/>;
}

export default AppRouter