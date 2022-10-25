import { Link } from "react-router-dom";
import  "./question.scss"
const Question = () => {
  return (
    <div className="question-page">
      <div className="container">
        <Link to="/dateils" className="icon-com-back">
          <img src="img/Back Arrow.png" alt="" />
        </Link>
        <div className="main-question">
          <div className="list-question">
            <ul>
              <li>
                <button>
                  <span>Câu 01</span>
                </button>
              </li>
              <li>
                <button>
                  <span>Câu 02</span>
                </button>
              </li>
              <li>
                <button>
                  <span>Câu 03</span>
                </button>
              </li>
              <li>
                <button>
                  <span>Câu 04</span>
                </button>
              </li>
              <li>
                <button>
                  <span>Câu 05</span>
                </button>
              </li>
              <li>
                <button>
                  <span>Câu 06</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="text-question">
            <p>
              Doanh nghiệp đi đầu trong lĩnh vực nào để sản xuất sản lượng sách
              tương đương với khối lượng của năm 2021 và các năm trước đó? Doanh
              nghiệp đi đầu trong lĩnh vực nào để sản xuất sản lượng? Doanh
              nghiệp đi đầu trong lĩnh vực nào để sản xuất?
            </p>
          </div>
          <ul className="answer-choice">
            <li className="bđ-bottom">
              <p className="text-answer-choice">A. kinh tế</p>
              <div className="icon-answer-choice"></div>
            </li>
            <li className="bđ-bottom">
              <p className="text-answer-choice">B. Tài năng</p>
              <div className="icon-answer-choice">
                <img src="img/checkmark-circle-fill.png" alt=""/>
              </div>
            </li>
            <li className="bđ-bottom">
              <p className="text-answer-choice">
                C. Hoạt động trong các hoạt động thiết yếu của công ty, nhân sự
                là bộ máy hiệu quả nhất hiện nay.
              </p>
              <div className="icon-answer-choice"></div>
            </li>
            <li>
              <p className="text-answer-choice">
                D. Nhân sự dẫn đầu trong các hoạt động thiết yếu của công ty,
                nhân sự là bộ máy hiệu quả.
              </p>
              <div className="icon-answer-choice"></div>
            </li>
          </ul>
        </div>
        <div className="footer">
          <button className="icon-next-left">
            <img src="img/arrow-right-o.png" alt="" />
          </button>
          <button className="button-center"><span>KIỂM TRA</span></button>
          <button className="icon-next-right">
            <img src="img/arrow-right-o (2).png" alt="" />
          </button>
        </div>
      </div>
    </div>
  )
};
export default Question;
