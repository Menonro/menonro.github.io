import React, { Component } from 'react'
import Layout from '../components/Layout/Layout'

import Header from '../components/Layout/Header'
import BiographyGrid from '../components/Biography/BiographyGrid'

class About extends Component {

  render() {
    return (
      <Layout>
        <Header title="Биография"/>
        <BiographyGrid />
      </Layout>
    )
  }
}

export default About
