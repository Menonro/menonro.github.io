import React, { Component } from 'react'
import Layout from '../components/Layout/Layout'

import Header from '../components/Layout/Header'
import ContactsGrid from '../components/Contacts/ContactsGrid'

class Contacts extends Component {

  render() {
    return (
      <Layout>
        <Header title="Контакты"/>
        <ContactsGrid />
      </Layout>
    )
  }
}

export default Contacts
