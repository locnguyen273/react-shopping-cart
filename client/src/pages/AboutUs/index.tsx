import { Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import BackgroundPray from "../../assets/images/nha-tho-duc-ba.jpg";
import "./style.scss";

const AboutUs = () => {
  const styles = {
    backgroundImage: `url(${BackgroundPray})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }
  return (
    <div className="about-us">
      <div style={styles} className="about-us__container">
        <Typography variant="h3">Bamboo Shop streetwear & unisex</Typography>
        <p>
          Cho ra mắt cửa hàng đầu tiên vào năm 2010, với mong muốn mang đến sản
          phẩm thời trang youthful style chất lượng giá cả hợp lý. Sau 5 năm tìm
          hiểu và nổ lực hết mình vào đầu năm 2016, chúng tôi bắt đầu cho ra
          những sản phẩm made in Vietnam mang xu hướng mới mẻ cùng chất lượng
          tốt nhất và được bán trên toàn quốc. Các sản phẩm của Bambo Shop hầu
          như được lấy cảm hứng từ văn hóa thời trang đường phố, tự do hoặc mang
          hơi hướng retro.
        </p>
        <Typography variant="h5">"It's Today"</Typography>
        <p>
          Biểu tượng cho tinh thần khiêm nhường nhưng không ngừng sáng tạo. Mang
          theo ý nghĩa "Nó là ngày hôm nay" với mỗi trang phục tạo ra, nên luôn
          phù hợp với bạn mỗi ngày. Những sản phẩm của chúng tôi sẽ không bao
          giờ đi trước thời đại và cũng không bao giờ lỗi thời, nó sẽ luôn dành
          cho "ngày hôm nay".
        </p>
        <div className="about-us__container--rate">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
