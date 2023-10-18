import { Outlet } from "react-router-dom";
import { FooterWithLogo } from "./Component/Footer/Footer";
import { StickyNavbar } from "./Component/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MainLayout = () => {
  return (
    <>
      <StickyNavbar></StickyNavbar>
      <Outlet></Outlet>
      <ToastContainer />
      <FooterWithLogo></FooterWithLogo>
    </>
  );
};

export default MainLayout;
