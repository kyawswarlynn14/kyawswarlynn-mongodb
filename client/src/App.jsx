import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cookies from 'js-cookie';
import { Admin, CreateCertificate, CreateItem, CreatePortfolio, CreateService, CreateSocial, Login, UpdateCertificate, UpdateItem, UpdatePortfolio, UpdateService, UpdateSocial } from './pages/admin';

export default function App() {
  const token = Cookies.get('access_token');

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

        {
        token && 
        <>
          <Route path='/admin' element={<Admin />} />

          <Route path='/create-certificate' element={<CreateCertificate />} />
          <Route path='/update-certificate/:id' element={<UpdateCertificate />} />

          <Route path='/create-item' element={<CreateItem />} />
          <Route path='/update-item/:id' element={<UpdateItem />} />

          <Route path='/create-portfolio' element={<CreatePortfolio />} />
          <Route path='/update-portfolio/:id' element={<UpdatePortfolio />} />

          <Route path='/create-service' element={<CreateService />} />
          <Route path='/update-service/:id' element={<UpdateService />} />

          <Route path='/create-social' element={<CreateSocial />} />
          <Route path='/update-social/:id' element={<UpdateSocial />} />
        </>
        }
      </Routes>
    </BrowserRouter>
  );
}
