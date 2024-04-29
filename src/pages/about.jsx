import React, { Component } from 'react'

import Header from '../components/Layout/Header'
import BiographyGrid from '../components/Biography/BiographyGrid'

export default function About() {
  return (
    <>
      <Header title="О себе"/>
      <BiographyGrid />
    </>
  )
}