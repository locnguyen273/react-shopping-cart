/* eslint-disable jsx-a11y/iframe-has-title */
import Typography from "@mui/material/Typography";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__list">
        <div className="footer__list__item">
          <Typography variant="h3">Bamboo Shop</Typography>
          <ul>
            <li>Address: 503 NVQ, Quận 12, TP.HCM</li>
            <li>Điện thoại: 0906756517</li>
            <li>Email: tanloc20600@gmail.com</li>
          </ul>
        </div>
        <div className="footer__list__item">
          <Typography variant="h5">Thông tin</Typography>
          <ul>
            <li>Về Chúng Tôi</li>
            <li>Sản phẩm</li>
            <li>Các cửa hàng</li>
            <li>Hướng dẫn mua hàng</li>
          </ul>
        </div>
        <div className="footer__list__item">
          <Typography variant="h5">Các cửa hàng</Typography>
          <ul>
            <li>TP. Hồ Chí Minh</li>
            <li>Đà Nẵng</li>
            <li>Cần Thơ</li>
            <li>Biên Hòa</li>
          </ul>
        </div>
        <div className="footer__list__item">
          <Typography variant="h5">Kết nối với chúng tôi</Typography>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d15675.040854524585!2d106.64379547806396!3d10.829653500171373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m3!3m2!1d10.833910699999999!2d106.6461987!4m0!5e0!3m2!1svi!2s!4v1674897065109!5m2!1svi!2s"
            width="300"
            height="150"
          ></iframe>
        </div>
      </div>
      <p className="footer__note">
        Bản quyền thuộc về Bamboo | Thiết kế website bởi tanloc20600@gmail.com
      </p>
    </div>
  );
};

export default Footer;
