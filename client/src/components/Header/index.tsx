/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useLocation } from "react-router-dom";
import "./style.scss";
import { menuPages, loggedInMenu, noLoggedInMenu } from "../../assets/data";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = () => {
  const logged = false;
  const location = useLocation();
  const [active, setActive] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    setActive(location.pathname);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <Link to="/" className="header__left">
        <Typography variant="h2">Bamboo Shop</Typography>
      </Link>
      <div className="header__center">
        {menuPages.length > 0 &&
          menuPages.map((item, index) => {
            return (
              <Link
                to={item.pathName}
                key={index}
                onClick={() => setActive(item.pathName)}
                className={`header__center--item ${
                  active === item.pathName && "active"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
      </div>
      <div className="header__right">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <AccountCircleRoundedIcon style={{ fontSize: "2.5rem" }} />
        </Button>
        <Link to="/cart" className="header__right__cart">
          <ShoppingCartOutlinedIcon />
          <div className="header__right__cart--info">
            <p>Giỏ hàng</p>
            <p>( 0 Sản phẩm )</p>
          </div>
        </Link>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {logged
            ? loggedInMenu.length > 0 &&
              loggedInMenu.map((item, index) => {
                return (
                  <MenuItem key={index}>
                    <Link
                      to={item.pathName}
                      className="header__right__menu--item"
                    >
                      {item.label}
                    </Link>
                  </MenuItem>
                );
              })
            : noLoggedInMenu.length > 0 &&
              noLoggedInMenu.map((item, index) => {
                return (
                  <MenuItem key={index}>
                    <Link
                      to={item.pathName}
                      className="header__right__menu--item"
                    >
                      {item.label}
                    </Link>
                  </MenuItem>
                );
              })}
        </Menu>
      </div>
    </div>
  );
};

export default Header;
