import Typography from "@mui/material/Typography";
import facebook from "../../assets/images/facebook.svg";
import google from "../../assets/images/google-plus-logo.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import SendIcon from '@mui/icons-material/Send';
import "./style.scss";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <div className="news-letter__left">
        <div className="news-letter__left--item">
          <Typography variant="h5" className="news-letter__title">
            QUY ĐỊNH ĐỔI TRẢ HÀNG
          </Typography>
          <p>
            Bamboo Shop sẵn sàng hỗ trợ đổi sản phẩm cho bạn trong vòng 07 ngày
            trên toàn hệ thống
          </p>
        </div>
        <div className="news-letter__left--item">
          <Typography variant="h5" className="news-letter__title">
            KHÁCH HÀNG THÂN THIẾT
          </Typography>
          <p>
            Chính sách khách hàng thân thiết của Bamboo Shop khi mua đơn hàng,
            quý khách sẽ được cấp thẻ MEMBERSHIP có ưu đãi 5%,10%,15% và các ưu
            đãi khác.
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
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Nhập email của bạn..."
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            >
              <SendIcon />
            </IconButton>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
