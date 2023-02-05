import { useEffect } from "react";
import Carousel from "../../components/Carousel";
import NewLatest from "../../components/NewLatest";
import ProductNewArrival from "../../components/ProductNewArrival";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <>
      <Carousel />
      <ProductNewArrival />
      <NewLatest />
    </>
  );
};

export default Home;
