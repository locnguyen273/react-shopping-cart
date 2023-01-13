import CategoryItem from "../CategoryItem";
import { categories } from "../../assets/data";
import { CategoryType } from "../../types";
import styled from "styled-components";
import { mobile } from "../../hooks/responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  ${mobile({
    flexDirection: "column",
    padding: "0px",
  })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.length > 0 &&
        categories.map((category: CategoryType) => {
          return <CategoryItem key={category.id} {...category} />;
        })}
    </Container>
  );
};

export default Categories;
