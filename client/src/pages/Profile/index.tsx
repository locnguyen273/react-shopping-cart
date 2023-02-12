/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import "./style.scss";
import ShowProfile from "../../components/Profile/ShowProfile";

const Profile = () => {
  const [selectedContent, setSelectedContent] = React.useState({
    showProfile: true,
    showBill: false,
  });

  return (
    <div className="profile">
      <div className="profile__left">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton
            onClick={() => {
              setSelectedContent({
                showProfile: true,
                showBill: false,
              });
            }}
            selected={selectedContent.showProfile}
          >
            <ListItemIcon>
              <AccountCircleOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Tài khoản của tôi" />
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              setSelectedContent({
                showProfile: false,
                showBill: true,
              });
            }}
            selected={selectedContent.showBill}
          >
            <ListItemIcon>
              <ReceiptLongOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Đơn Mua" />
          </ListItemButton>
        </List>
      </div>
      <div className="profile__right">
        {selectedContent.showProfile ? (
          <ShowProfile />
        ) : (
          // <></>
          <>Show bill</>
        )}
      </div>
    </div>
  );
};

export default Profile;
