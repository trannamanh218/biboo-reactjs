import Accordion from "react-bootstrap/Accordion";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";
import "./dateils.scss";
const Dateils = () => {
  return (
    <div className="containerr detail">
      <div className="roww">
        <div className="col-1a">
          <div className="tab-bar-menu-biboo">
            <Link to="/" className="logo-biboo">
              <img src="img/Logo.png" alt="" />
            </Link>
            <ul className="item-tab-bar-menu">
              <li>
                <Link to="/">
                  <img src="img/Home.png" alt="" />
                </Link>
              </li>
              <li>
                <Link to="/seach">
                  <img src="img/Search2.png" alt="" />
                </Link>
              </li>
              <li>
                <Link to="/categoryleft">
                  <img src="img/Feed List.png" alt="" />
                </Link>
              </li>
              <li>
                <Link to="/individualleft">
                  <img src="img/Profile.png" alt="" />
                </Link>
              </li>
            </ul>
            <div className="cover-img-tab-bar-menu">
              <img src="img/Layer 1.png" alt="" />
            </div>
          </div>
        </div>
        <div className="col-11b">
          <div className="details-biboo">
            <div className="listen-to-read-books">
              <div className="header-listen-to-read-books">
                <div className="left-come-back">
                  <Link to="/">
                    <img src="img/Back Arrow.png" alt="" />
                  </Link>
                </div>
                <div className="right-icon">
                  <Link to="#" className="cart-right-icon">
                    <img src="img/Cart.png" alt="" />
                  </Link>
                  <Link to="#" className="bell-right-icon">
                    <img src="img/Group 321.png" alt="" />
                  </Link>
                  <Link to="#" className="avata-right-icon">
                    <img src="img/Avatar.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="book-details-biboo">
                <div className="left-book-details-biboo">
                  <img src="img/Sách.png" alt="" />
                  <div className="ratings-listen-to-read-books">
                    <div>
                      <img src="img/alert-circle-fill.png" alt="" />
                    </div>
                    <div>
                      <img src="img/alert-circle-fill.png" alt="" />
                    </div>
                    <div>
                      <img src="img/alert-circle-fill.png" alt="" />
                    </div>
                    <div>
                      <img src="img/alert-circle-fill.png" alt="" />
                    </div>
                    <div>
                      <img src="img/alert-circle-fill.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="right-book-details-biboo">
                  <div className="title-book-details-biboo">
                    The Swallow A Novel Can they do that tomorrow night?
                  </div>
                  <div className="author-book-details-biboo">Lisa Lutz</div>
                  <div className="items-right-book-details-biboo">
                    <Link to="/player" className="listen-for-free">
                      NGHE AUDIO MIỄN PHÍ
                    </Link>
                    <Link to="/pdf" className="proofread">ĐỌC THỬ</Link>
                    <button className="buy-books">
                      <div className="icon">
                        <img src="" alt="" />
                        <span>MUA NGAY</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="book-details-details-biboo">
              <Tabs
                defaultActiveKey="gioithieu"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="gioithieu" title="Giới Thiệu">
                  <div className="time-books">
                    <div className="title">Thời lượng:</div>
                    <div className="text">2 tiếng 45 phút</div>
                  </div>
                  <div className="number-books">
                    <div className="title">Số trang:</div>
                    <div className="text">203 trang</div>
                  </div>
                  <div className="Category-books">
                    <div className="title">Thể loại:</div>
                    <div className="text">Tiểu thuyết</div>
                  </div>
                  <div className="introduce-book">
                    <div className="title">Giới thiệu về cuốn sách</div>
                    <div className="text">
                      The war against Voldemort is not going well, even the
                      Muggles have been affected. Dumbledore is absent from
                      Hogwarts for long stretc hes of time, and the Order of the
                      Phoenix has alread. The war against Voldemort is not going
                      well, even the Muggles have been affected. Dumbledore is
                      absent from Hogwarts for long stretc hes of time, and the
                      Order of the Phoenix has alread.The war against Voldemort
                      is not going well, even the Muggles have been affected.
                      Dumbledore is absent from Hogwarts for long stretc hes of
                      time, and the Order of the Phoenix has alread.
                    </div>
                  </div>
                  <div className="Table-of-contents">
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Chương 01: Bàn về kế hoạch cuộc sống trong 30 phút
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="paragraph paragraph-one">
                            <div className="title">
                              Đoạn 01: Lời mở đầu - Cách cuộc sống vận hành và
                              những lời cam kết với cuộc đời của chính mình
                            </div>
                            <div className="option-paragraph">
                              <Link to="/pdf" className="read-a-book">
                                ĐỌC EBOOOK
                              </Link>
                              <Link to="/player" className="listen-radio">
                                <div className="icon">
                                  <img src="img/Playhead.png" alt="" />
                                </div>
                                <span>NGHE AUDIO</span>
                              </Link>
                            </div>
                          </div>
                          <div className="paragraph paragraph-two">
                            <div className="title">
                              Đoạn 02: Hướng dẫn tạo bản đánh giá công việc chi
                              tiết trong vòng 24 ngày thay đổi cuộc sống bạn
                            </div>
                            <div className="option-paragraph">
                              <Link to="/pdf" className="read-a-book">
                                ĐỌC EBOOOK
                              </Link>
                              <Link to="/player" className="listen-radio">
                                <div className="icon">
                                  <img src="img/Playhead.png" alt="" />
                                </div>
                                <span>NGHE AUDIO</span>
                              </Link>
                            </div>
                          </div>
                          <div className="paragraph paragraph-three">
                            <div className="title">
                              Đoạn 03: Đoạn 03: Sản phẩm khiến bạn chưa thành
                              công trong công việc kinh doanh của mình.
                            </div>
                            <div className="option-paragraph">
                              <div className="key-Paragraph">
                                <div className="icon-key-paragraph">
                                  <img src="img/Lock.png" alt="" />
                                </div>
                                <div className="text-key-paragraph">
                                  CHƯA MỞ KHÓA
                                </div>
                              </div>
                              <button className="listen-radio">
                                <div className="icon">
                                  <img src="img/Cart2.png" alt="" />
                                </div>
                                <span>MUA SÁCH ĐỂ MỞ KHÓA TOÀN BỘ</span>
                              </button>
                            </div>
                          </div>
                          <div className="paragraph paragraph-four">
                            <div className="title">
                              Đoạn 04: Bí quyết giúp bạn thành công
                            </div>
                            <div className="option-paragraph">
                              <div className="key-Paragraph">
                                <div className="icon-key-paragraph">
                                  <img src="img/Lock-black.png" alt="" />
                                </div>
                                <div className="text-key-paragraph">
                                  CHƯA MỞ KHÓA
                                </div>
                              </div>
                              <button className="listen-radio">
                                <div className="icon">
                                  <img src="img/Cart2.png" alt="" />
                                </div>
                                <span>MUA SÁCH ĐỂ MỞ KHÓA TOÀN BỘ</span>
                              </button>
                            </div>
                          </div>
                          <div className="paragraph paragraph-four">
                            <div className="title">
                              Đoạn 05: 24 Thói quen tốt để thành công
                            </div>
                            <div className="option-paragraph">
                              <div className="key-Paragraph">
                                <div className="icon-key-paragraph">
                                  <img src="img/Lock-black.png" alt="" />
                                </div>
                                <div className="text-key-paragraph">
                                  CHƯA MỞ KHÓA
                                </div>
                              </div>
                              <button className="listen-radio">
                                <div className="icon">
                                  <img src="img/Cart2.png" alt="" />
                                </div>
                                <span>MUA SÁCH ĐỂ MỞ KHÓA TOÀN BỘ</span>
                              </button>
                            </div>
                          </div>
                          <div className="paragraph paragraph-two">
                            <div className="title">
                              Tổng kết chương 01: Bàn về kế hoạch cuộc sống
                              trong 30p
                            </div>
                            <div className="option-paragraph">
                              <button className="read-a-book">
                                ĐỌC EBOOOK
                              </button>
                              <button className="listen-radio">
                                <div className="icon">
                                  <img src="img/Playhead.png" alt="" />
                                </div>
                                <span>NGHE AUDIO</span>
                              </button>
                            </div>
                          </div>
                          <div className="paragraph paragraph-five">
                            <div className="title">
                              Ôn luyện kiến thức chương 01
                            </div>
                            <div className="option-paragraph">
                              <div className="read-a-book">8/10 CÂU</div>
                              <Link to="/question" className="listen-radio">
                                <div className="icon">
                                  <img src="img/Read Book.png" alt="" />
                                </div>
                                <span>LÀM BÀI NGAY</span>
                              </Link>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          Chương 02: Bàn về kế hoạch cuộc sống trong 120 phút
                          giúp bạn có tầm nhìn
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          Chương 03: Thành công đến từ những điều nhỏ nhặt nhất
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          Chương 04: Bàn về tâm thế khởi nghiệp
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </Tab>
                <Tab eventKey="danhgia" title="Đánh giá">
                  <h1>Trang đánh giá</h1>
                </Tab>
              </Tabs>
            </div>
            <div className="suggested-book">
              <div className="title-suggested-book">
                <p>Sách hay đọc</p>
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
        </div>
      </div>
    </div>
  );
};
export default Dateils;
