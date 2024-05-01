import React from 'react'

import Header from '../components/Layout/Header'
import ContactsGrid from '../components/Contacts/ContactsGrid'

export default function Contacts() {
  return (
    <>
      <Header title="Контакты"/>
      <ContactsGrid />
    </>
  )
}
