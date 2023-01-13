import styled from "styled-components";
import { mobile } from "../../hooks/responsive";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({
    display: "none",
  })}
`;

const Announcement = () => {
  return (
    <Container>Siêu ưu đãi! Giao hàng miễn phí cho các đơn hàng trên 500.000 VNĐ</Container>
  )
}

export default Announcement