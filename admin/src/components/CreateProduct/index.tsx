import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import "./style.scss";

const CreateProduct = () => {
  return (
    <div className="create-product">
      <Typography variant="h3" className="create-product__title">
        Tạo mới sản phẩm
      </Typography>
      <div className="create-product__form-group">
        <div className="create-product__form-item">
          <Typography variant="h5" className="create-product__title">
            Tên sản phẩm:
          </Typography>
          <FormControl sx={{ m: 1, width: "20vw" }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
        </div>
        <div className="create-product__form-item"></div>
        <div className="create-product__form-item"></div>
        <div className="create-product__form-item"></div>
        <div className="create-product__form-item"></div>
        <div className="create-product__form-item"></div>
      </div>
    </div>
  );
};

export default CreateProduct;
