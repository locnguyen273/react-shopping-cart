import Carousel from "../../components/Carousel";
import NewLatest from "../../components/NewLatest";
import NewsLetter from "../../components/NewsLetter";
import ProductNewArrival from "../../components/ProductNewArrival";

const Home = () => {
  return (
    <>
      <Carousel />
      <ProductNewArrival />
      <NewLatest />
      <NewsLetter />
    </>
  );
};

export default Home;
