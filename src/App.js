import React from 'react'
import { Routes, Route } from "react-router-dom";

import ScrollToAnchor from './layout/ScrollToAnchor';
import Background from './layout/Background'
import Layout from './layout/Layout';
import Menu from './layout/Menu';

import './styles/global.sass'

import Landing from './pages/Landing';
import Form from './pages/Form';
import Page from './layout/Page';

function MyApp() {
  return <>
    <ScrollToAnchor />
    <Menu/>
    <Layout>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="form" element={<Page><Form /></Page>} />
      </Routes>
    </Layout>
    <Background/>
  </>
}

export default MyApp
