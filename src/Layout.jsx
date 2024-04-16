import Navbar from './components/Navbar/Navbar'
// import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <>
      <Navbar z_index="z-40"/>
      <Outlet/>
      {/* <Footer/> */}
    </>
  )
}

export default Layout
