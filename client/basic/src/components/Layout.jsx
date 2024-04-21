import {Outlet} from 'react-router-dom'
import {Header} from './index'
import '../App.css'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Layout