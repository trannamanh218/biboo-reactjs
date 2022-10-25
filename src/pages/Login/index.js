import "./login.scss"
const Login = () => {
  return (
    <div className="container login">
      <div className="login">
        <div className="left-login">
          <div className="title-left-login">
            <p>
              Hàng ngàn cuốn sách <br />
              trong tầm tay
            </p>
          </div>
        </div>
        <div className="right-login">
          <div className="title-right-login">
            <p>
              Đăng nhập <br />
              và khám phá
            </p>
            <a href="#" className="bottom-skip-login">
              <div className="text-bottom-skip-login">Bỏ qua</div>
              <div className="icon-bottom-skip-login">
                <img src="img/Forward Arrow.png" alt="" />
              </div>
            </a>
          </div>
          <button type="bottom" className="facebook-right-login">
            <div className="img-facebook-right-login">
              <img src="img/facebook.png" alt="anhminhhoa" />
            </div>
            <span>Đăng nhập bằng Facebook</span>
          </button>
          <button type="bottom" className="gmail-right-login">
            <div className="img-gmail-right-login">
              <img src="img/icongoogle.png" alt="anhminhhoa" />
            </div>
            <span>Đăng nhập bằng Gmail</span>
          </button>
          <button type="bottom" className="gmail-right-login apple-right-login">
            <div className="img-gmail-right-login">
              <img src="img/Iconapple.png" alt="anhminhhoa" />
            </div>
            <span>Đăng nhập bằng Apple</span>
          </button>
          <button type="bottom" className="bottom-bizbooks-right-login">
            <span>Đăng nhập tài khoản Bizbooks</span>
          </button>
          <div className="no-account-login">
            <p>
              Chưa có tài khoản ? <br />
              <strong>Đăng ký</strong> Tài khoản Bizbooks
            </p>
          </div>
          <a href="#" className="bottom-skip-login">
            <div className="text-bottom-skip-login">Bỏ qua</div>
            <div className="icon-bottom-skip-login">
              <img src="img/Forward Arrow.png" alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Login;
