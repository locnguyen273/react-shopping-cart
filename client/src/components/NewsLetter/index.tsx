import Typography from "@mui/material/Typography";
import facebook from "../../assets/images/facebook.svg";
import google from "../../assets/images/google-plus-logo.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import "./style.scss";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <div className="news-letter__container">
        <div className="news-letter__left">
          <div className="news-letter__left--item">
            <Typography variant="h5" className="news-letter__title">
              QUY ĐỊNH ĐỔI TRẢ HÀNG
            </Typography>
            <p>
              <span>Bamboo Shop</span> sẵn sàng hỗ trợ đổi sản phẩm cho bạn
              trong vòng 07 ngày trên toàn hệ thống
            </p>
          </div>
          <div className="news-letter__left--item">
            <Typography variant="h5" className="news-letter__title">
              KHÁCH HÀNG THÂN THIẾT
            </Typography>
            <p>
              Chính sách khách hàng thân thiết của Bamboo Shop khi mua đơn hàng,
              quý khách sẽ được cấp thẻ MEMBERSHIP có ưu đãi 5%,10%,15% và các
              ưu đãi khác.
            </p>
          </div>
        </div>
        <div className="news-letter__right">
          <div className="news-letter__right--item">
            <Typography variant="h5" className="news-letter__title">
              KẾT NỐI VỚI Bamboo Shop
            </Typography>
            <div className="news-letter__right__list-icon">
              <div className="news-letter__right__list-icon--item">
                <img src={facebook} alt="fb" />
              </div>
              <div className="news-letter__right__list-icon--item">
                <img src={google} alt="fb" />
              </div>
              <div className="news-letter__right__list-icon--item">
                <img src={twitter} alt="fb" />
              </div>
              <div className="news-letter__right__list-icon--item">
                <img src={instagram} alt="fb" />
              </div>
            </div>
          </div>
          <div className="news-letter__right--item">
            <Typography variant="h5" className="news-letter__title">
              ĐĂNG KÝ NHẬN TIN TỪ CHÚNG TÔI
            </Typography>
            <p>Đăng ký nhận thông tin và nhận nhiều ưu đãi từ Bamboo Shop</p>
            <form 
              id="subscribe-form" 
              name="mc-embedded-subscribe-form" 
              target="_blank" 
              className="news-letter__right__form">
              <input
                className="news-letter__right__form--input"
                type="email"
                value=""
                placeholder="Nhập email của bạn..."
                name="EMAIL"
                id="mail"
                aria-label="general.newsletter_form.newsletter_email"
              />
              <button 
                className="news-letter__right__form--subscribe" 
                name="subscribe" 
                id="subscribe"
              >
                <i className="fa-sharp fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
