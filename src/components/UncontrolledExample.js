import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/UncontrolledExample.scss";
import { Link } from "react-router-dom";
const UncontrolledExample = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 1.4,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <div className="tab-home">
          <div className="brb-search">
            <Link href="#" className="icon-brb-search">
              <img src="img/Search.png" alt="anhminhhoa" />
            </Link>
            <input type="text" placeholder="Tìm kiếm chủ đề" name="search" />
          </div>
          <div className="brb-recently-watched">
            <div className="left-brb-recently-watched">
              <Link href="#">
                <img
                  className="left-brb-recently-watched"
                  src="img/Rectangle 504.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="right-brb-recently-watched">
              <p className="watching-right-brb-recently-watched">
                Đang xem gần đây
              </p>
              <Link href="#" className="title-right-brb-recently-watched">
                Barack Obama và sự nghiệp The Audacie <br />
                of the Legend of all the time
              </Link>
              <div className="text-right-brb-recently-watched">
                <p>Barack Obama</p>
              </div>
              <div className="right-brb-recently-watched-progress">
                <div className="index-progress">29%</div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-label="Success example"
                    style={{ width: "20%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="bottom-right-brb-recently-watched">
                <button type="bottom">
                  <span>Tiếp tục đọc</span>
                </button>
              </div>
            </div>
          </div>
          <div className="suggested-book">
            <div className="title-suggested-book">
              <p>Gợi ý cho bạn</p>
            </div>
            <div className="box-suggested-book dp-flex sp-between">
              <Link to="/dateils" className="items-suggested-book">
                <div className="img-items-suggested-book">
                  <img src="img/Rectangle 510.png" alt="" />
                </div>
                <div className="add-to-cart">
                  <img src="img/Cart.png" alt="" />
                  <button type="button">Thêm vào giỏ hàng</button>
                </div>
                <div className="information-items-suggested-book">
                  <div className="title-book">
                    Can they do <br />
                    that tomorrow?
                  </div>
                  <div className="author-book">Amada Natsuki</div>
                </div>
              </Link>
              <Link to="/dateils" className="items-suggested-book">
                <div className="img-items-suggested-book">
                  <img src="img/Rectangle 505.png" alt="" />
                </div>
                <div className="add-to-cart">
                  <img src="img/Cart.png" alt="" />
                  <button type="button">Thêm vào giỏ hàng</button>
                </div>
                <div className="information-items-suggested-book">
                  <div className="title-book">
                    Đàn ông sao <br />
                    hỏa đàn bà sao
                  </div>
                  <div className="author-book">Amada Natsuki</div>
                </div>
              </Link>
              <Link to="/dateils" className="items-suggested-book">
                <div className="img-items-suggested-book">
                  <img src="img/Rectangle 511.png" alt="" />
                </div>
                <div className="add-to-cart">
                  <img src="img/Cart.png" alt="" />
                  <button type="button">Thêm vào giỏ hàng</button>
                </div>
                <div className="information-items-suggested-book">
                  <div className="title-book">
                    Follow me to <br />
                    ground
                  </div>
                  <div className="author-book">Nguyễn Hiến Lê</div>
                </div>
              </Link>
              <Link to="/dateils" className="items-suggested-book">
                <div className="img-items-suggested-book">
                  <img src="img/Rectangle 612.png" alt="" />
                </div>
                <div className="add-to-cart">
                  <img src="img/Cart.png" alt="" />
                  <button type="button">Thêm vào giỏ hàng</button>
                </div>
                <div className="information-items-suggested-book">
                  <div className="title-book">
                    Barrack Obama <br />
                    the audacity of
                  </div>
                  <div className="author-book">Barrack Obama</div>
                </div>
              </Link>
            </div>
          </div>
          <div className="suggested-book">
            <div className="title-suggested-book">
              <p>Sách hay phải đọc</p>
            </div>
            <div className="box-suggested-book dp-flex sp-between">
              <Link to="/dateils" className="items-suggested-book">
                <div className="img-items-suggested-book">
                  <img src="img/Rectangle 510.png" alt="" />
                </div>
                <div className="add-to-cart">
                  <img src="img/Cart.png" alt="" />
                  <button type="button">Thêm vào giỏ hàng</button>
                </div>
                <div className="information-items-suggested-book">
                  <div className="title-book">
                    Can they do <br />
                    that tomorrow?
                  </div>
                  <div className="author-book">Amada Natsuki</div>
                </div>
              </Link>
              <Link to="/dateils" className="items-suggested-book">
                <div className="img-items-suggested-book">
                  <img src="img/Rectangle 505.png" alt="" />
                </div>
                <div className="add-to-cart">
                  <img src="img/Cart.png" alt="" />
                  <button type="button">Thêm vào giỏ hàng</button>
                </div>
                <div className="information-items-suggested-book">
                  <div className="title-book">
                    Đàn ông sao <br />
                    hỏa đàn bà sao
                  </div>
                  <div className="author-book">Amada Natsuki</div>
                </div>
              </Link>
              <Link to="/dateils" className="items-suggested-book">
                <div className="img-items-suggested-book">
                  <img src="img/Rectangle 511.png" alt="" />
                </div>
                <div className="add-to-cart">
                  <img src="img/Cart.png" alt="" />
                  <button type="button">Thêm vào giỏ hàng</button>
                </div>
                <div className="information-items-suggested-book">
                  <div className="title-book">
                    Follow me to <br />
                    ground
                  </div>
                  <div className="author-book">Nguyễn Hiến Lê</div>
                </div>
              </Link>
              <Link to="/dateils" className="items-suggested-book">
                <div className="img-items-suggested-book">
                  <img src="img/Rectangle 612.png" alt="" />
                </div>
                <div className="add-to-cart">
                  <img src="img/Cart.png" alt="" />
                  <button type="button">Thêm vào giỏ hàng</button>
                </div>
                <div className="information-items-suggested-book">
                  <div className="title-book">
                    Barrack Obama <br />
                    the audacity of
                  </div>
                  <div className="author-book">Barrack Obama</div>
                </div>
              </Link>
            </div>
          </div>
          <div className="caroseo-brb-items">
            <Slider {...settings}>
              <div>
                <Link href="#">
                  <img
                    src="https://salt.tikicdn.com/ts/lp/10/ca/b1/ec36af1edef3b456d7d4b25296850a05.png"
                    alt=""
                  />
                </Link>
              </div>
              <div>
                <Link href="#">
                  <img
                    src="https://photo2.tinhte.vn/data/attachment-files/2021/02/5368382_lichsansalemoituan.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div>
                <Link href="#">
                  <img
                    src="https://salt.tikicdn.com/ts/lp/10/ca/b1/ec36af1edef3b456d7d4b25296850a05.png"
                    alt=""
                  />
                </Link>
              </div>
              <div>
                <Link href="#">
                  <img
                    src="https://photo2.tinhte.vn/data/attachment-files/2021/02/5368382_lichsansalemoituan.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div>
                <Link href="#">
                  <img
                    src="https://salt.tikicdn.com/ts/lp/10/ca/b1/ec36af1edef3b456d7d4b25296850a05.png"
                    alt=""
                  />
                </Link>
              </div>
              <div>
                <Link href="#">
                  <img
                    src="https://photo2.tinhte.vn/data/attachment-files/2021/02/5368382_lichsansalemoituan.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div>
                <Link href="#">
                  <img
                    src="https://salt.tikicdn.com/ts/lp/10/ca/b1/ec36af1edef3b456d7d4b25296850a05.png"
                    alt=""
                  />
                </Link>
              </div>
            </Slider>
          </div>
          <div className="list-a-lot-brb-items-right">
            <div className="title-listen-a-lot">
              <p>Nghe Nhiều Nhất</p>
            </div>
            <div className="books-listen-a-lot dp-flex">
              <div className="right-books-listen-a-lott">
                <Link href="#">
                  <img src="img/Rectangle 613.png" alt="" />
                </Link>
                <div className="numerical-order-book">
                  <img src="img/Badge Tags.png" alt="" />
                </div>
              </div>
              <div className="left-books-listen-a-lott">
                <div className="book-topic">
                  <Link href="#">
                    <p>Kinh tế và tài chính</p>
                  </Link>
                </div>
                <div className="title-book-topic">
                  <Link href="#">
                    <p>Đàn ông sao hỏa đàn bà sao</p>
                  </Link>
                </div>
                <div className="author-book">
                  <p>Amada Natsuki</p>
                </div>
                <div className="evaluate-book dp-flex">
                  <img src="img/alert-circle-fill.png" alt="" />
                  <img src="img/alert-circle-fill.png" alt="" />
                  <img src="img/alert-circle-fill.png" alt="" />
                  <img src="img/alert-circle-fill.png" alt="" />
                  <img src="img/alert-circle-fill.png" alt="" />
                  <p>(122)</p>
                </div>
                <button className="button-see-more">
                  <span>Xem sách</span>
                </button>
              </div>
            </div>
            <div className="books-listen-a-lot dp-flex">
              <div className="right-books-listen-a-lott">
                <Link href="#">
                  <img src="img/Rectangle 614.png" alt="" />
                </Link>
                <div className="numerical-order-book">
                  <img src="img/Badge Tags.png" alt="" />
                </div>
              </div>
              <div className="left-books-listen-a-lott">
                <div className="book-topic">
                  <Link href="#">
                    <p>Kinh tế và tài chính</p>
                  </Link>
                </div>
                <div className="title-book-topic">
                  <Link href="#">
                    <p>The Way of the Nameless</p>
                  </Link>
                </div>
                <div className="author-book">
                  <p>Amada Natsuki</p>
                </div>
                <div className="evaluate-book dp-flex">
                  <img src="img/alert-circle-fill.png" alt="" />
                  <img src="img/alert-circle-fill.png" alt="" />
                  <img src="img/alert-circle-fill.png" alt="" />
                  <img src="img/alert-circle-fill.png" alt="" />
                  <img src="img/alert-circle-fill.png" alt="" />
                  <p>(122)</p>
                </div>
                <button className="button-see-more">
                  <span>Xem sách</span>
                </button>
              </div>
            </div>
            <div className="books-listen-a-lot dp-flex">
              <div className="right-books-listen-a-lott">
                <Link href="#">
                  <img src="img/Rectangle 615.png" alt="" />
                </Link>
                <div className="numerical-order-book">
                  <img src="img/Badge Tags.png" alt="" />
                </div>
              </div>
              <div className="left-books-listen-a-lott">
                <div className="book-topic">
                  <Link href="#">
                    <p>Kinh tế và tài chính</p>
                  </Link>
                </div>
                <div className="title-book-topic">
                  <Link href="#">
                    <p>Clap when you landing</p>
                  </Link>
                </div>
                <div className="author-book">
                  <p>Amada Natsuki</p>
                </div>
                <div className="evaluate-book dp-flex">
                  <img src="img/alert-circle-fill.png" alt="" />
                  <img src="img/alert-circle-fill.png" alt="" />
                  <img src="img/alert-circle-fill.png" alt="" />
                  <img src="img/alert-circle-fill.png" alt="" />
                  <img src="img/alert-circle-fill.png" alt="" />
                  <p>(122)</p>
                </div>
                <button className="button-see-more">
                  <span>Xem sách</span>
                </button>
              </div>
            </div>
          </div>
          <div className="suggested-book">
            <div className="title-suggested-book">
              <p>Marketing và bán hàng</p>
            </div>
            <div className="box-suggested-book dp-flex sp-between">
              <Link to="/dateils" className="items-suggested-book">
                <div className="img-items-suggested-book">
                  <img src="img/Rectangle 510.png" alt="" />
                </div>
                <div className="add-to-cart">
                  <img src="img/Cart.png" alt="" />
                  <button type="button">Thêm vào giỏ hàng</button>
                </div>
                <div className="information-items-suggested-book">
                  <div className="title-book">
                    Can they do <br />
                    that tomorrow?
                  </div>
                  <div className="author-book">Amada Natsuki</div>
                </div>
              </Link>
              <Link to="/dateils" className="items-suggested-book">
                <div className="img-items-suggested-book">
                  <img src="img/Rectangle 505.png" alt="" />
                </div>
                <div className="add-to-cart">
                  <img src="img/Cart.png" alt="" />
                  <button type="button">Thêm vào giỏ hàng</button>
                </div>
                <div className="information-items-suggested-book">
                  <div className="title-book">
                    Đàn ông sao <br />
                    hỏa đàn bà sao
                  </div>
                  <div className="author-book">Amada Natsuki</div>
                </div>
              </Link>
              <Link to="/dateils" className="items-suggested-book">
                <div className="img-items-suggested-book">
                  <img src="img/Rectangle 511.png" alt="" />
                </div>
                <div className="add-to-cart">
                  <img src="img/Cart.png" alt="" />
                  <button type="button">Thêm vào giỏ hàng</button>
                </div>
                <div className="information-items-suggested-book">
                  <div className="title-book">
                    Follow me to <br />
                    ground
                  </div>
                  <div className="author-book">Nguyễn Hiến Lê</div>
                </div>
              </Link>
              <Link to="/dateils" className="items-suggested-book">
                <div className="img-items-suggested-book">
                  <img src="img/Rectangle 612.png" alt="" />
                </div>
                <div className="add-to-cart">
                  <img src="img/Cart.png" alt="" />
                  <button type="button">Thêm vào giỏ hàng</button>
                </div>
                <div className="information-items-suggested-book">
                  <div className="title-book">
                    Barrack Obama <br />
                    the audacity of
                  </div>
                  <div className="author-book">Barrack Obama</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="library" title="Thư viện">
        <h1>Thư viện</h1>
      </Tab>
      <Tab eventKey="gift" title="Quà tặng">
        <h1>quà tặng</h1>
      </Tab>
    </Tabs>
  );
};

export default UncontrolledExample;
