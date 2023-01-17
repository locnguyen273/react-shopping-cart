/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { fetchListProduct } from "../../redux/actions/productAction";
import { AppDispatch } from "../../redux/configStore";
import Product from "../Product";

const Products = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListProduct())
  },[]);

  return (
    <div>
      <Product/>
      <Product/>
      <Product/>
      <Product/>

    </div>
  )
}

export default Products