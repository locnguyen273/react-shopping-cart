import { Link } from "react-router-dom";
import styled from "styled-components";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Info = styled.div``;
const Container = styled.div``;
const Circle = styled.div``;
const Image = styled.image``;
const Icon = styled.div``; 

const Product = () => {
  return (
    <Container>
      <Circle />
      <Image />
      <Info>
        <Icon>
          <ShoppingCartIcon />
        </Icon>
        <Icon>
          <Link to={`/product/`}>
            <SearchIcon />
          </Link>
        </Icon>
        <Icon>
          <FavoriteOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
