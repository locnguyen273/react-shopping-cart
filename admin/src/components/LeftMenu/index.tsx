import { useEffect, useState } from "react";
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
import { useLocation } from "react-router-dom";

const LeftMenu = () => {
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState({
    home: false,
    manageProduct: false,
    manageOrder: false,
    manageClient: false,
    setting: false,
  });
  
  useEffect(() => {
    if (location.pathname === "/") {
      setSelectedMenu({
        home: true,
        manageProduct: false,
        manageOrder: false,
        manageClient: false,
        setting: false,
      });
    } else if (location.pathname === "/manage-product") {
      setSelectedMenu({
        home: false,
        manageProduct: true,
        manageOrder: false,
        manageClient: false,
        setting: false,
      });
    } else if (location.pathname === "/manage-order") {
      setSelectedMenu({
        home: false,
        manageProduct: false,
        manageOrder: true,
        manageClient: false,
        setting: false,
      });
    } else if (location.pathname === "/manage-user") {
      setSelectedMenu({
        home: false,
        manageProduct: false,
        manageOrder: false,
        manageClient: true,
        setting: false,
      });
    } else if (location.pathname === "/setting") {
      setSelectedMenu({
        home: false,
        manageProduct: false,
        manageOrder: false,
        manageClient: false,
        setting: true,
      });
    }
  }, [location.pathname]);

  return (
    <div className="left-menu">
      <div className="left-menu__top">
        <img src={Logo} alt="logo" />
        <Typography variant="h5">Bamboo Shop</Typography>
      </div>
      <nav aria-label="main mailbox folders">
        <List>
          <Link to="/">
            <ListItem disablePadding selected={selectedMenu.home}>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Trang chủ" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="/manage-product">
            <ListItem disablePadding selected={selectedMenu.manageProduct}>
              <ListItemButton>
                <ListItemIcon>
                  <Inventory2Icon />
                </ListItemIcon>
                <ListItemText primary="Sản phẩm" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/manage-order">
            <ListItem disablePadding selected={selectedMenu.manageOrder}>
              <ListItemButton>
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Đặt hàng" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/manage-user">
            <ListItem disablePadding selected={selectedMenu.manageClient}>
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
            <ListItem disablePadding selected={selectedMenu.setting}>
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
