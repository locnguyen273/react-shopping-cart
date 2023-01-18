/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchListProduct } from "../../redux/actions/productAction";
import { AppDispatch } from "../../redux/configStore";
import Product from "../Product";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListProduct());
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} style={{ maxWidth: "85vw", margin: "auto" }}>
        <Grid
          container
          spacing={2}
          style={{ margin: "auto", marginBottom: "2rem", marginTop: "1rem" }}
        >
          <Grid item lg={2.4} md={3} sm={4} xs={12}>
            <Link to="/cart" style={{textDecoration: "none"}}>
              <Product />
            </Link>
          </Grid>
          <Grid item lg={2.4} md={3} sm={4} xs={12}>
            <Link to="/cart" style={{textDecoration: "none"}}>
              <Product />
            </Link>
          </Grid>
          <Grid item lg={2.4} md={3} sm={4} xs={12}>
            <Link to="/cart" style={{textDecoration: "none"}}>
              <Product />
            </Link>
          </Grid>
          <Grid item lg={2.4} md={3} sm={4} xs={12}>
            <Link to="/cart" style={{textDecoration: "none"}}>
              <Product />
            </Link>
          </Grid>
          <Grid item lg={2.4} md={3} sm={4} xs={12}>
            <Link to="/cart" style={{textDecoration: "none"}}>
              <Product />
            </Link>
          </Grid>
          <Grid item lg={2.4} md={3} sm={4} xs={12}>
            <Link to="/cart" style={{textDecoration: "none"}}>
              <Product />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Products;
