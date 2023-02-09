import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import { UserInfoUpdate } from "../../redux/models/type";
import { handleUpdateUserProfile } from "../../redux/reducers/authReducer";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ShowProfile = () => {
  const dispatch : AppDispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.authReducer.user._id);
  const userProfile = useSelector(
    (state: RootState) => state.authReducer.userProfile
  );
  const [userInfo, setUserInfo] = useState<UserInfoUpdate>({
    name: userProfile.name,
    email: userProfile.email,
    username: userProfile.username,
    phone: userProfile.phone,
    address: userProfile.address,
    gender: userProfile.gender,
  });
  const [open, setOpen] = useState(false);

  const handleChangeUserInfo = (event: any) => {
    const name = event.target.name;
    setUserInfo((prev: any) => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

  const handleSaveChange = () => {
    dispatch(handleUpdateUserProfile(userId , userInfo));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className="show-profile">
      <div className="show-profile__form">
        <div className="show-profile__form--item">
          <TextField
            name="username"
            label="Tên đăng nhập"
            value={userInfo.username}
            onChange={handleChangeUserInfo}
          />
        </div>
        <div className="show-profile__form--item">
          <TextField
            name="name"
            label="Tên người dùng"
            value={userInfo.name}
            onChange={handleChangeUserInfo}
          />
        </div>
        <div className="show-profile__form--item">
          <TextField
            name="email"
            label="Email"
            value={userInfo.email}
            onChange={handleChangeUserInfo}
          />
        </div>
        <div className="show-profile__form--item">
          <TextField
            name="phone"
            label="Số điện thoại"
            value={userInfo.phone}
            onChange={handleChangeUserInfo}
          />
        </div>
        <div className="show-profile__form--item">
          <TextField
            name="address"
            label="Địa chỉ"
            value={userInfo.address}
            onChange={handleChangeUserInfo}
          />
        </div>
        <div className="show-profile__form--item">
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Giới tính</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="gender"
              onChange={handleChangeUserInfo}
            >
              <FormControlLabel 
                value="male" 
                control={<Radio />} 
                label="Nam" 
                checked={userInfo.gender === "male" ? true : false}
              />
              <FormControlLabel 
                value="female" 
                control={<Radio />} 
                label="Nữ" 
                checked={userInfo.gender === "female" ? true : false}
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="show-profile__form__group-btn">
        <Button 
          className="show-profile__form__group-btn--btn-save"
          onClick={handleSaveChange}
        >
          Lưu
        </Button>
        <Button 
          className="show-profile__form__group-btn--change-password"
          onClick={handleClickOpen}
        >
          Thay đổi mật khẩu
        </Button>
        </div>
        
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Thay đổi mật khẩu"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ShowProfile;
