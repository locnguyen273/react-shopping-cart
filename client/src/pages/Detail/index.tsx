
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import ProductNewArrival from "../../components/ProductNewArrival";
import { ProductType } from "../../redux/models/ProductModel";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import "./style.scss";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Detail = () => {
  let { id } = useParams();
  const { listProduct } = useSelector((state: RootState) => state.productReducer);
  const productDetail: ProductType = listProduct.find((item: ProductType) => item._id === id);
  const [imgSelected, setImgSelected] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {productDetail && (
        <div className="detail">
          <div className="detail__left">
            <img
              className="detail__left--item"
              src={imgSelected !== null ? imgSelected : productDetail.img}
              alt={productDetail.title}
            />
            <div className="detail__left__list">
              {productDetail.imgDetail.length > 0 &&
                productDetail.imgDetail.map((item: any, index) => {
                  return (
                    <img
                      key={index}
                      className={`detail__left__list--item ${imgSelected === item ? "flex-active" : ""}`}
                      src={item}
                      alt={productDetail.title}
                      onClick={() => setImgSelected(item)}
                    />
                  );
                })}
            </div>
          </div>
          <div className="detail__right">
            <Typography variant="h4" className="detail__right--title">{productDetail.title}</Typography>
            <Typography variant="h5" className="detail__right--price">
              {productDetail.price.toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}
            </Typography>
            <div className="detail__right__group">
              <Button className="detail__right__group--add">thêm vào giỏ hàng</Button>
              <Button className="detail__right__group--shop-now">mua ngay</Button>
              <Button className="detail__right__group--view">xem cửa hàng</Button>
            </div>
            <Typography variant="h5" className="detail__right__intro">
              Tư vấn mua hàng 
              <span className="detail__right__intro--icon">
                <PhoneInTalkIcon/>
              </span>
              <span className="detail__right__intro--phone">0987654321</span>
            </Typography>
          </div>
          <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          Text
        </IconButton>
        <IconButton aria-label="share">
          share
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
        </div>
      )}
      <ProductNewArrival />
    </>
  );
};

export default Detail;
