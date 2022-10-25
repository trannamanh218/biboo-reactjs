import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/menu.scss";
import classNames from "classnames";

const Menu = () => {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <div className="menu">
      <div className="box-left-biboo">
        <div className="logo" onClick={() => setCurrentPage("home")}>
          <Link to="/" className="icon-logo">
            <img src="img/Logo.png" alt="" />
          </Link>
        </div>
        <Link
          to="/"
          className={classNames("nav-item dp-flex", {
            active: currentPage === "home",
          })}
          onClick={() => setCurrentPage("home")}
        >
          <img src="img/Home.png" alt="anhminhhoa" />
          <p>Home</p>
        </Link>
        <Link
          to="seach"
          className={classNames("nav-item dp-flex", {
            active: currentPage === "seach",
          })}
          onClick={() => setCurrentPage("seach")}
        >
          <img src="img/Search2.png" alt="anhminhhoa" />
          <p>Tìm kiếm</p>
        </Link>
        <Link
          to="categoryleft"
          className={classNames("nav-item dp-flex", {
            active: currentPage === "categoryleft",
          })}
          onClick={() => setCurrentPage("categoryleft")}
        >
          <img src="img/Feed List.png" alt="anhminhhoa" />
          <p>Danh Mục</p>
        </Link>
        <Link
          to="individualleft"
          className={classNames("nav-item dp-flex", {
            active: currentPage === "individualleft",
          })}
          onClick={() => setCurrentPage("individualleft")}
        >
          <img src="img/Profile.png" alt="anhminhhoa" />
          <p>Cá nhân</p>
        </Link>
        <div className="cover-img-left-biboo">
          <img src="img/Layer 1.png" alt="" />
        </div>
      </div>
      <div className="menu-mobi">
        <Link to="/" className="nav-item">
          <img src="img/Home-mobi.png" alt="anhminhhoa" />
          <p>Home</p>
        </Link>
        <Link to="seach" className="nav-item">
          <img src="img/Search-mobi.png" alt="anhminhhoa" />
          <p>Tìm kiếm</p>
        </Link>
        <Link to="categoryleft" className="nav-item">
          <img src="img/Cart-mobi.png" alt="anhminhhoa" />
          <p>Giỏ hàng</p>
        </Link>
        <Link to="individualleft" className="nav-item">
          <img src="img/Profile-mobi.png" alt="anhminhhoa" />
          <p>Cá nhân</p>
        </Link>
      </div>
    </div>
  );
};
export default Menu;
