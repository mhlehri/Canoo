import { Outlet } from "react-router-dom";
import { FooterWithLogo } from "./Component/Footer/Footer";
import { StickyNavbar } from "./Component/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <StickyNavbar></StickyNavbar>
      <Outlet></Outlet>
      <FooterWithLogo></FooterWithLogo>
    </div>
  );
};

export default MainLayout;
