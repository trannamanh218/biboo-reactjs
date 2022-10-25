import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import "./player.scss";
const Player = () => {
  return (
    <div className="player">
      <div className="listen-radio">
        <div className="navigation-bar-radio">
          <Link to="/dateils" className="left-come-back">
            <img src="img/Back Arrow.png" alt="" />
          </Link>
          <div className="right-option">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                ...
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ marginbottom: "80px" }}>
                <li>
                  <Link className="dropdown-item" href="#">
                    <div className="icon">
                      <img src="img/Actions Plus.png" alt="" />
                    </div>
                    <div className="text">Thêm và thư viện</div>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    <div className="icon">
                      <img src="img/Comment.png" alt="" />
                    </div>
                    <div className="text">Viết bài đánh giá</div>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    <div className="icon">
                      <img src="img/chia-se.png" alt="" />
                    </div>
                    <div className="text">Chia sẻ</div>
                  </Link>
                </li>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="img-listen-radio">
          <img src="img/Sách.png" alt="" />
        </div>
        <div className="information-listen-radio">
          <div className="title">
            Chương 01: Bàn về kế hoạch cuộc sống của b..
          </div>
          <div className="text">
            Đoạn 01: Lời mở đầu - Cách cuộc sống vận hành và nh..
          </div>
        </div>

        <div className="range">
          <div id="timeline">
            <span id="current-time">0.45</span>
            <span id="total-time">04.00</span>
            <div className="slider" data-direction="horizontal">
              <div className="progress" style={{ width: "18.1111%" }}>
                <div
                  className="pin"
                  id="progress-pin"
                  datamethod="rewind"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="left-footer">
          <div className="ebook">
            <div className="icon-ebook">
              <img src="img/Read Book2.png" alt="" />
            </div>
            <div className="text-ebook">Ebook</div>
          </div>
          <div className="speed">
            <div className="icon-speed">
              <Dropdown className="dropup-center dropup">
                <Dropdown.Toggle
                  className="dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>1x</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <li>
                    <p className="title">Tốc độ nghe</p>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      0.75
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      1x
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      1.25x
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      1.5x
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      1.75x
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      2x
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      3x
                    </Link>
                  </li>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="text-speed">Tốc độ</div>
          </div>
        </div>
        <div className="center-footer">
          <div className="replay-left">
            <img src="img/ic_replay_30.png" alt="" />
          </div>
          <div className="skip-left">
            <img src="img/ic_skip_previous.png" alt="" />
          </div>
          <div className="center-play">
            <img src="img/Play.png" alt="" />
          </div>
          <div className="skip-right">
            <img src="img/ic_skip_next.png" alt="" />
          </div>
          <div className="replay-right">
            <img src="img/ic_forward_30.png" alt="" />
          </div>
        </div>
        <div className="right-footer">
          <div className="timer">
            <div className="icon-timer">
              <Dropdown className="dropup-center dropup">
                <Dropdown.Toggle
                  className="dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="img/timer-flash-line.png" alt="" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <li>
                    <p className="title">Hẹn giờ tắt</p>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Hết phần
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Hết chương
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      120 Phút
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      60 Phút
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      45 Phút
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      30 Phút
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      15 Phút
                    </Link>
                  </li>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="text-timer">Hẹn giờ</div>
          </div>
          <div className="table-of-contents">
            <div className="icon-table-of-contents">
              <img src="img/Playlist.png" alt="" />
            </div>
            <div className="text-table-of-contents">Mục lục</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Player;
