/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.scss";
import { menuPages, loggedInMenu, noLoggedInMenu } from "../../assets/data";
import useViewport from "../../hooks/useViewPort";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import { ACCESS_TOKEN, clearStore, getStore } from "../../utils/config";
import { logoutAction } from "../../redux/reducers/authReducer";

const Header = () => {
  const isLoggedIn = getStore(ACCESS_TOKEN);
  const location = useLocation();
  const [active, setActive] = useState<string>("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const viewPort = useViewport();
  const isMobile = viewPort.width < 1024;
  const dispatch = useDispatch();
  useEffect(() => {
    setActive(location.pathname);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuCenter = () => {
    return (
      <>
        {menuPages.length > 0 &&
          menuPages.map((item, index) => {
            if (!isMobile) {
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
            } else {
              return (
                <MenuItem key={index}>
                  <Link
                    to={item.pathName}
                    onClick={() => setActive(item.pathName)}
                    className={`${active === item.pathName && "active"}`}
                  >
                    {item.label}
                  </Link>
                </MenuItem>
              );
            }
          })}
      </>
    );
  };

  const menuAuth = () => {
    return (
      <>
        {isLoggedIn
          ? loggedInMenu.map((item, index) => {
              return (
                <MenuItem key={index}>
                  <Link
                    to={item.pathName}
                    onClick={() => setActive(item.pathName)}
                  >
                    {item.label}
                  </Link>
                </MenuItem>
              );
            })
          : noLoggedInMenu.map((item, index) => {
              return (
                <MenuItem key={index}>
                  <Link
                    to={item.pathName}
                    onClick={() => setActive(item.pathName)}
                    className={`${active === item.pathName && "active"}`}
                  >
                    {item.label}
                  </Link>
                </MenuItem>
              );
            })}
      </>
    );
  };
  const cart = useSelector((state: RootState) => state.cartReducer.cart);
  const { userInfoLogin } = useSelector((state: RootState) => state.AuthReducer);
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item: any) => {
      total += item.quantity;
    });
    return total;
  };
  const handleLogout = () => {
    clearStore(ACCESS_TOKEN);
    dispatch(logoutAction(userInfoLogin));
  }

  return (
    <div className={isMobile ? "header-mobile" : "header"}>
      {isMobile && (
        <div>
          <Button
            onClick={() => setOpenDrawer(true)}
            className="header-mobile__menu"
          >
            <MenuIcon />
          </Button>
          <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <Box
              width={300}
              role="presentation"
              onClick={() => setOpenDrawer(false)}
              onKeyDown={() => setOpenDrawer(false)}
            >
              {menuCenter()}
              {menuAuth()}
            </Box>
          </Drawer>
        </div>
      )}
      <Link
        to="/"
        className={isMobile ? "header-mobile__left" : "header__left"}
      >
        <Typography variant="h2">Bamboo Shop</Typography>
      </Link>
      {!isMobile && <div className="header__center">{menuCenter()}</div>}
      <div className={isMobile ? "header-mobile__right" : "header__right"}>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className={
            isMobile ? "header-mobile__right--user" : "header__right--user"
          }
        >
          <AccountCircleRoundedIcon style={{ fontSize: "2.5rem" }} />
        </Button>
        <Link
          to="/cart"
          className={
            isMobile ? "header-mobile__right__cart" : "header__right__cart"
          }
        >
          <ShoppingCartOutlinedIcon
            className={
              isMobile
                ? "header-mobile__right__cart--icon"
                : "header__right__cart--icon"
            }
          />
          <p>{getTotalQuantity() || 0}</p>
        </Link>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          style={{ top: "20px" }}
        >
          {isLoggedIn ? (
            <div>
              <MenuItem>
                <Link
                  className={
                    isMobile
                      ? "header-mobile__right__menu--item"
                      : "header__right__menu--item"
                  }
                  to="/profile"
                >
                  Tài khoản của tôi
                </Link>
              </MenuItem>
              <MenuItem
                onClick={handleLogout}
                className={
                  isMobile
                    ? "header-mobile__right__menu--item"
                    : "header__right__menu--item"
                }
              >
                Đăng xuất
              </MenuItem>
            </div>
          ) : (
            noLoggedInMenu.length > 0 &&
            noLoggedInMenu.map((item, index) => {
              return (
                <MenuItem key={index}>
                  <Link
                    className={
                      isMobile
                        ? "header-mobile__right__menu--item"
                        : "header__right__menu--item"
                    }
                    to={item.pathName}
                  >
                    {item.label}
                  </Link>
                </MenuItem>
              );
            })
          )}
        </Menu>
      </div>
    </div>
  );
};

export default Header;
