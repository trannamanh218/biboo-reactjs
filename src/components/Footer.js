import "../css/footer.scss"
const Footer = () => {
  return (
    <footer>
        <div className="row top-footer">
          <div className="col-12 col-md-3">
            <div className="about-us">
              <div className="company-name">
                <div className="icon-logo-company-name">
                  <img src="img/Logo.png" alt="" />
                </div>
                <div className="title-company-name">
                  <p>CÔNG TY CỔ PHẦN BIBOO</p>
                </div>
              </div>
              <p className="company-origin">
                Giấy CNĐKKD: 0315637603, đăng ký lần đầu ngày 18/04/2019 cấp bởi
                Sở KHĐT thành phố Hồ Chí Minh.
              </p>
              <a href="#" className="company-address">
                <div className="icon-company-address">
                  <img src="img/Location.png" alt="" />
                </div>
                <p className="text-company-address">
                  E34, Khu đấu giá 3ha, Phúc Diễn, Bắc Từ Liêm, Hà Nội, Việt
                  Nam.
                </p>
              </a>
              <a href="#" className="corporate-email">
                <div className="icon-corporate-email">
                  <img src="img/Mail.png" alt="" />
                </div>
                <p className="text-corporate-email">support@biboo.vn</p>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="company-policy">
              <div className="title-company-policy">Chính sách đổi trả</div>
              <a href="#" className="items-company-policy">
                {" "}
                Chính sách bảo hành{" "}
              </a>
              <a href="#" className="items-company-policy">
                Chính sách thanh toán
              </a>
              <a href="#" className="items-company-policy">
                Chính sách giao nhận
              </a>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="company-app">
              <div className="title-company-app">Tải ứng dụng</div>
              <div className="app-store">
                <img src="img/Badge.png" alt="" />
              </div>
              <div className="google-play">
                <img src="img/Badge (1).png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="connection">
              <div className="title-connection">Kết nối với biboo</div>
              <div className="connection-platform">
                <div className="facebook-connection-platform">
                  <img src="img/facebook2.png" alt="" />
                </div>
                <div className="instagram-connection-platform">
                  <img src="img/inta.png" alt="" />
                </div>
                <div className="twitter-connection-platform">
                  <img src="img/twiiter.png" alt="" />
                </div>
                <div className="youtube-connection-platform">
                  <img src="img/YouTube.png" alt="" />
                </div>
              </div>
              <p className="title-quick-link">Liên kết nhanh</p>
              <a href="#" className="blog-connection-platform">
                {" "}
                Bibloo blog{" "}
              </a>
              <a href="#" className="individual-connection-platform">
                Tủ sách cá nhân
              </a>
            </div>
          </div>
        </div>
        <div className="row bottom-footer">
          <div className="col-12 col-md-6">
            <a href="#" className="logo-bottom-footer">
              <img src="img/bo-cong-thuong-1170x780 1.png" alt="" />
            </a>
          </div>
          <div className="col-12 col-md-6">
            <div className="text-bottom-footer">
              <p>
                Cam kết sách nói bản quyền |<span>Copyright 2022 By Biboo</span>
              </p>
            </div>
          </div>
        </div>
    </footer>
  );
};
export default Footer;
