import React from 'react'
import Header from '../components/Layout/Header'

export default function Form() {
  return (
    <>
        <Header title="Контакты" />
        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc1BJ4JpWbCZGs1_9fzVEWNa3Nd1loAoZpWTrve9Ohyjgif0g/viewform?embedded=true"
            style={{
                width: '100%',
                height: '80vh',
            }}
            className='bg-white py-3 rounded'
            frameborder="0"
            marginheight="0"
            marginwidth="0">
            Загрузка…
        </iframe>
    </>
  )
}
