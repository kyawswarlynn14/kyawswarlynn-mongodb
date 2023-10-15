import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Cookies from 'js-cookie';
import { Admin, AdminCertificates, AdminPortfolios, AdminServices, AdminSocials, CreateCertificate, CreateItem, CreatePortfolio, CreateService, CreateSocial, Login, UpdateCertificate, UpdateItem, UpdatePortfolio, UpdateService, UpdateSocial } from './pages/admin';
import AdminNav from './components/AdminNav';

export default function App() {
  const token = Cookies.get('access_token');
  const { pathname } = useLocation();
  const adminPaths = [
    '/admin',
    '/certificates',
    '/portfolios',
    '/services',
    '/socials'
  ];
  console.log(pathname);

  return (
    <>
      { token && adminPaths.includes(pathname) && <AdminNav /> }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

        {
        token && 
        <>
          <Route path='/admin' element={<Admin />} />
          <Route path='/certificates' element={<AdminCertificates />} />
          <Route path='/portfolios' element={<AdminPortfolios />} />
          <Route path='/services' element={<AdminServices />} />
          <Route path='/socials' element={<AdminSocials />} />

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
    </>
  );
}
