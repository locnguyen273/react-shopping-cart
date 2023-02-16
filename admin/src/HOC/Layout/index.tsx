/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import LeftMenu from "../../components/LeftMenu";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./style.scss";
import { handleGetListProduct } from "../../redux/reducers/productReducer";
import { AppDispatch } from "../../redux/configStore";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const AdminLayout = () => {
  const dispatch : AppDispatch = useDispatch();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  useEffect(() => {
    dispatch(handleGetListProduct());
  },[]);

  return (
    <div className="admin-layout">
      <LeftMenu />
      <div className="admin-layout__right">
        <div className="admin-layout__right__header">
          <Box className="admin-layout__right__header--notification">
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" aria-label="show 17 new notifications" color="inherit" >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
            <Menu sx={{ mt: "45px" }} id="menu-appbar" anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right", }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right", }}
              open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
