import React from 'react'
import Toast from '../components/Toast'

const Layout = ({children}) => {
  return (
    <>
      <main>{children}</main>
      <Toast />
    </>
  )
}

export default Layout