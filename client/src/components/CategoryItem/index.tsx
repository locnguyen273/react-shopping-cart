import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../hooks/responsive";
import { CategoryType } from "../../types";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({
    height: "20vh",
  })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: #fff;
  margin: 0 0 20px 0;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #fff;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = (category: CategoryType) => {
  return (
    <Container>
      <Link to={`/products/${category.cat}`}>
        <Image src={category.img} alt={category.title} />
        <Info>
          <Title>{category.title}</Title>
          <Button>Mua Ngay</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
