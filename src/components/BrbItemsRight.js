import { Link } from "react-router-dom";
import "../css/BrbItemsRight.scss"
const BrbItemsRight = () => {
  return (
    <div className="brb-items-right">
      <div className="option-brb-items-right dp-flex">
        <div className="cart-option-brb-items-right">
          <img src="img/Cart.png" alt="" />
        </div>
        <div className="bell-option-brb-items-right">
          <img src="img/Group 321.png" alt="" />
        </div>
        <Link to="/login" className="user-option-brb-items-right">
          <img src="img/Avatar.png" alt="" />
        </Link>
      </div>
      <div className="listen-a-lot-brb-items-right">
        <div className="title-listen-a-lot">
          <p>Nghe Nhiều Nhất</p>
        </div>
        <div className="books-listen-a-lot dp-flex">
          <div className="right-books-listen-a-lott">
            <a to="#">
              <img src="img/Rectangle 613.png" alt="" />
            </a>
            <div className="numerical-order-book">
              <img src="img/Badge Tags.png" alt="" />
            </div>
          </div>
          <div className="left-books-listen-a-lott">
            <div className="book-topic">
              <a to="#">
                <p>Kinh tế và tài chính</p>
              </a>
            </div>
            <div className="title-book-topic">
              <a to="#">
                <p>
                  Đàn ông sao <br />
                  hỏa đàn bà sao
                </p>
              </a>
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
          </div>
        </div>
        <div className="books-listen-a-lot dp-flex">
          <div className="right-books-listen-a-lott">
            <a to="#">
              <img src="img/Rectangle 614.png" alt="" />
            </a>
            <div className="numerical-order-book">
              <img src="img/Badge Tags.png" alt="" />
            </div>
          </div>
          <div className="left-books-listen-a-lott">
            <div className="book-topic">
              <a to="#">
                <p>Kinh tế và tài chính</p>
              </a>
            </div>
            <div className="title-book-topic">
              <a to="#">
                <p>
                  The Way of the <br />
                  Nameless
                </p>
              </a>
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
          </div>
        </div>
        <div className="books-listen-a-lot dp-flex">
          <div className="right-books-listen-a-lott">
            <a to="#">
              <img src="img/Rectangle 615.png" alt="" />
            </a>
            <div className="numerical-order-book">
              <img src="img/Badge Tags.png" alt="" />
            </div>
          </div>
          <div className="left-books-listen-a-lott">
            <div className="book-topic">
              <a to="#">
                <p>Kinh tế và tài chính</p>
              </a>
            </div>
            <div className="title-book-topic">
              <a to="#">
                <p>
                  Clap when you <br />
                  landing
                </p>
              </a>
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
          </div>
        </div>
      </div>
      <div className="target">
        <p className="title-cardd">Mục tiêu đọc sách</p>
        <div className="cardd">
          <div className="percent">
            <svg>
              <circle cx="180" cy="150" r="140"></circle>
              <circle cx="180" cy="150" r="140" style={{"--percent": "25"}}></circle>
            </svg>
            <div className="number">
              <h3>24/30</h3>
              <p>Số trang sách đã đọc hôm nay</p>
            </div>
            <button type="button" className="button-reading-goal">
              <span>THAY ĐỔI MỤC TIÊU</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrbItemsRight;
