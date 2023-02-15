import "./style.scss";
import Logo from "../../assets/images/logo.jpg";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

const LeftMenu = () => {
  const handleSelected = (value :any) => {
    console.log(value.target);
  }
  return (
    <div className="left-menu">
      <div className="left-menu__top">
        <img src={Logo} alt="logo" />
        <Typography variant="h5">Bamboo Shop</Typography>
      </div>
      <nav aria-label="main mailbox folders">
        <List>
          <Link to="/" onClick={handleSelected}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Trang chủ" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="/manage-product">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Inventory2Icon />
                </ListItemIcon>
                <ListItemText primary="Sản phẩm" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/manage-order">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Đặt hàng" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/manage-user">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Khách hàng" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <Link to="/setting">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Cài đặt" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </nav>
    </div>
  );
};

export default LeftMenu;
