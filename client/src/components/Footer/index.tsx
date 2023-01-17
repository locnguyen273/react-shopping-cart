import styled from "styled-components";
import { mobile } from "../../hooks/responsive";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Container = styled.div`
  display: flex;
  padding: 1rem 3rem;
  ${mobile({
    flexDirection: "column",
    padding: "1rem"
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    display: "none",
  })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    backgroundColor: "#fff8f8",
  })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Bamboo Shop</Logo>
        <Desc>
          Bamboo SHOP sẵn sàng hỗ trợ đổi sản phẩm cho bạn trong vòng 07 ngày
          trên toàn hệ thống.Chính sách khách hàng thân thiết của Bamboo SHOP
          khi mua đơn hàng, quý khách sẽ được cấp thẻ MEMBERSHIP có ưu đãi
          5%,10%,15% và các ưu đãi khác.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Về Bamboo Shop</Title>
        <List>
          <ListItem>Giới thiệu</ListItem>
          <ListItem>Thỏa thuận sử dụng</ListItem>
          <ListItem>Chính sách bảo mật</ListItem>
          <ListItem>Chính sách vận chuyển</ListItem>
          <ListItem>Chính sách đổi trả</ListItem>
          <ListItem>Tin tức</ListItem>
          <ListItem>Sản phẩm</ListItem>
          <ListItem>Các cửa hàng</ListItem>
          <ListItem>Hướng dẫn mua hàng</ListItem>
          <ListItem>Câu hỏi thường gặp</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Thông Tin Liên Hệ</Title>
        <ContactItem>
          <MeetingRoomIcon style={{ marginRight: "10px" }} />
          503 Nguyễn Văn Quá, Quận 12, TP.HCM
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} /> 0987654321
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{ marginRight: "10px" }} /> contact@loc.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
