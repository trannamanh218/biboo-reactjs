
import { Link } from "react-router-dom";
import "./pdf.scss"

const Pdf = () => {
  return (
    <div className="pdf">
      <div className="row">
        <div className="col-12">
          <div className="navigation-bar-pdf">
            <div className="right">
              <Link to="/dateils" className="come-back">
                <img src="img/Back Arrow.png" alt="" />
              </Link>
              <div className="title">
                The Swallow A Novel Can they do that tomorrow night?
              </div>
            </div>
            <div className="left">
              <div className="icon-left">
                <img src="img/Playhead2.png" alt="" />
              </div>
              <Link to="/player" className="text-left">Nghe-Audio</Link>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="read-a-book">
            <div className="book-page-number">1/138</div>
            <button className="next-left">
              <img src="img/Vector.png" alt="" />
            </button>
            <div className="img-book">
              <img src="img/Rectangle 5055.png" alt="" />
            </div>
            <button className="next-right">
              <img src="img/Vector 2.png" alt="" />
            </button>
          </div>
        </div>
        <div className="col-12">
          <div className="options-pdf">
            <ul>
              <li>
                <img src="img/Actions Plus.png" alt="" />
              </li>
              <li>
                <img src="img/Actions Minus.png" alt="" />
              </li>
              <li>
                <img src="img/Play2.png" alt="" />
              </li>
              <li>
                <img src="img/codicon_file-pdf.png" alt="" />
              </li>
              <li>
                <img src="img/cil_flip.png" alt="" />
              </li>
              <li>
                <img src="img/Save Favorite Bookmark.png" alt="" />
              </li>
              <li>
                <img src="img/Bullets Numbered.png" alt="" />
              </li>
              <li>
                <img src="img/Grid Feed Cards.png" alt="" />
              </li>
              <li>
                <img src="img/chia-se.png" alt="" />
              </li>
              <li>
                <img src="img/carbon_text-creation.png" alt="" />
              </li>
              <li>
                <img src="img/Full Screen Expand Resize.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pdf;
