import { Outlet } from "react-router-dom";
import BrbItemsRight from "../components/BrbItemsRight";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import "../css/index.scss"

const Layout = () => {
  return (
    <div className="containerr">
    <div className="biboo">
      <Menu/>
      <Outlet />
      <BrbItemsRight/>
    </div>
    <Footer/>
    </div>
  );
};
export default Layout;
