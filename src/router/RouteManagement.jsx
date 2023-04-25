import React, { Suspense, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoadingComponent from '../components/loadingComponent/loadingComponent';
import LoginPage from '../pages/loginPage/LoginPage';
import LayoutComponent from '../components/layouts/LayoutComponent'

import Home from '../pages/home/home';
import FormComponent from '../pages/form/FormComponent';
import Portofolio from '../pages/portfolio/Portfolio'
import Portfolio from '../pages/portfolio/Portfolio';
import AboutMe from '../pages/aboutMe/AboutMe';
import CreateProduct from '../pages/createProduct/CreateProduct';

import Code from '../pages/codeCompetance2/Code';
import LandingPage from '../pages/landingPage/LandingPage';
import Swiper from '../pages/swiper/swiper';
import SwiperName from '../pages/swiper/swiper';
import FormCRUD from '../pages/form/FormComponent copy';
import LoginPageQuery from '../pages/loginPage/exp/LoginPageQuery';


const RouteManagement = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

 useEffect(() => {
   if (!token) {
     navigate("/");
   }
 }, [token]);
    return (
        <Suspense fallback={LoadingComponent}>
          {!token ? (
       <Routes>
         <Route path="/" element={<LoginPage />} />
       </Routes>
     ) : ( 
        <LayoutComponent>
          <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPageQuery />} />
            <Route path="/form" element={<FormComponent />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path='/portofolio' element={<Portfolio/>}/>
            <Route path='/about-me' element={<AboutMe/>}/>  
            <Route path='/about-me/:id' element={<AboutMe/>}/>
            <Route path="/create-product" element={<CreateProduct/>}/>

            <Route path="/create-product/:id" element={<CreateProduct />} />
            <Route path="/code" element={<Code/>}/>
            <Route path='/swiper' element={<SwiperName/>}/>
            <Route path="/crud" element={<FormCRUD/> }/>


            <Route path="/code" element={<Code/>}/>
          </Routes>
        </LayoutComponent>
    
     )}
        </Suspense>
    );
}



export default RouteManagement;
