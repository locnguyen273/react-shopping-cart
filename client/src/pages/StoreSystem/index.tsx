import "./style.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import { AddressType } from "../../redux/models/type";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import Typography from "@mui/material/Typography";

const StoreSystem = () => {
  const listStore = useSelector(
    (state: RootState) => state.addressReducer.listAddresses
  );
  console.log(listStore);

  return (
    <div className="store-system">
    <Typography className="store-system--title" variant="h4">
      danh sách của hàng của chúng tôi
    </Typography>
      <div className="store-system__container">
        {listStore.data.length > 0 &&
          listStore.data.map((item: AddressType) => {
            return (
              <div key={item._id} className="store-system__card">
                <img
                  src={item.image}
                  alt={item.locate}
                  className="store-system__card--image"
                />
                <p><PlaceIcon />{item.locate}</p>
                <p><PhoneIphoneIcon />{item.phoneNumber}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default StoreSystem;
