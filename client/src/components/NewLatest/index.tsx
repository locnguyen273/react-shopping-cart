import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./style.scss";

const NewsLatest = () => {
  return (
    <div className="news-latest">
      <Typography variant="h5" className="news-latest__title">
        tin tức mới nhất
      </Typography>
      <div className="news-latest__list">
        <Card sx={{ maxWidth: 450 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="230"
              image="https://bizweb.dktcdn.net/thumb/large/100/395/283/articles/112.jpg?v=1634104252713"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="news-latest__list--title">
                THÔNG BÁO MỞ CỬA TRỞ LẠI TOÀN CHI NHÁNH TẠI SÀI GÒN - SALE UP
                50%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Bamboo Shop – WE ARE FULLY VACCINATED – SALE UP TO 50% Chào mừng
                Bamboo Shop trở lại sau chuỗi ngày giãn cách tại Sài Gòn th...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Đọc tiếp
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 450 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="230"
              image="https://bizweb.dktcdn.net/thumb/large/100/395/283/articles/hqdefault.jpg?v=1596796095297"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="news-latest__list--title">
                CÁCH BẢO QUẢN QUẦN JEANS MỚI MUA
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CÁCH BẢO QUẢN QUẦN JEANS MỚI MUA PHÂN LOẠI CHẤT LIỆU DENIM
                &nbsp; &nbsp; &nbsp;1.Raw denim Đây là loại chất liệu...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Đọc tiếp
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 450 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="230"
              image="https://bizweb.dktcdn.net/thumb/large/100/395/283/articles/94731a744269bd37e478-1.jpg?v=1599291661357"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="news-latest__list--title">
                Bamboo Shop ĐÀ NẴNG - THÔNG BÁO HOẠT ĐỘNG TRỞ LẠI TỪ 06/09/2020
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Bamboo Shop ĐÀ NẴNG &nbsp;THÔNG BÁO HOẠT ĐỘNG TRỞ LẠI Quý Khách
                Hàng thân mến. Sau một thời gian tạm đóng cửa vì dịch...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Đọc tiếp
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default NewsLatest;
