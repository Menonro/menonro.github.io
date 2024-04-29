import React from 'react'
import Background from './layout/Background'
import { Routes, Route, useLocation } from "react-router-dom";

import Main from './pages/Main';

import Layout from './components/Layout/Layout';

import './styles/global.sass'
import Form from './pages/Form';
import Bitrix from './pages/Bitrix';
import About from './pages/About';

function MyApp() {
  const location = useLocation();

  return <>
    <Layout>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Main />} />
        <Route path="contacts" element={<Form />} />
        <Route path="bitrix" element={<Bitrix />} />
        <Route path="about" element={<About />} />
        
        {/* <Route path="cases" element={<Cases />} /> */}
        {/* <Route path="contacts" element={<Contacts />} /> */}
      </Routes>
    </Layout>
    <Background/>
  </>
}

export default MyApp
