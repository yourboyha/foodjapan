import { Outlet, NavLink } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <nav className="My-header p-2 mb-3 text-left">
        <NavLink className='link px-3' to="/">หน้าแรก</NavLink>
        <NavLink className='link px-3' to="/menu">เมนูอาหารญี่ปุ่น</NavLink>
        <NavLink className='link px-3' to="/contact">ผู้จัดทำ</NavLink>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;