import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styled from "styled-components";
import { mobile } from "../../hooks/responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({
    height: "50px",
  })}
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  ${mobile({
    padding: "10px 0",
  })}
`;
const Left = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({
    flex: 2,
  })}
`;
const Center = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  ${mobile({
    display: "none",
  })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    flex: 2,
    justifyContent: "center",
  })}
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
    fontSize: "24px",
  })}
`;

const BottomSearch = styled.div`
  display: none;
  ${mobile({
    padding: "0 30px",
    display: "block",
  })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  max-width: 465px;
`;
const Input = styled.input`
  border: none;
  width: 390px;
  padding: 10px;
  font-size: 15px;
  &:focus {
    outline: none !important;
  }
`;

const SearchButton = styled.button`
  border: none;
  padding: 7px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-left: 1px solid lightgrey;
  background: #fff;
  transition: all 0.5s ease-in-out;
  :hover {
    color: #fff;
    background: #69b3f1;
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = 0;
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Bamboo Shop</Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchButton>
              <SearchIcon />
            </SearchButton>
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
      <BottomSearch>
        <SearchContainer>
          <Input placeholder="Search" />
          <SearchButton>
            <SearchIcon />
          </SearchButton>
        </SearchContainer>
      </BottomSearch>
    </Container>
  );
};

export default Navbar;
