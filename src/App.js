import React from 'react'
import Background from './layout/Background'
import { Routes, Route, useLocation } from "react-router-dom";

import Layout from './layout/Layout';

import './styles/global.sass'
import Form from './pages/Form';
// import About from './pages/About';
import Landing from './pages/Landing';
import Menu from './layout/Menu';
import Page from './layout/Page';

function MyApp() {
  const location = useLocation();

  return <>
    <Menu/>
    <Layout>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Landing />} />
        <Route path="contacts" element={<Page><Form /></Page>} />
        {/* <Route path="bitrix" element={<Bitrix />} /> */}
        {/* <Route path="about" element={<About />} /> */}
        
        {/* <Route path="cases" element={<Cases />} /> */}
        {/* <Route path="contacts" element={<Contacts />} /> */}
      </Routes>
    </Layout>
    <Background/>
  </>
}

export default MyApp
