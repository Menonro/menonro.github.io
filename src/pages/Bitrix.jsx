import React from 'react'
import Header from '../layout/Header'

export default function Bitrix() {
  return (
    <>
        <Header title={'Bitrix24'}/>
        <section style={{
                width: '100%',
                height: '80vh',
            }}
            className='bg-white text-black p-3 rounded'>
            Привет
        </section>
    </>
  )
}
