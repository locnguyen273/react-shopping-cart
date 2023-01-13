import Announcement from "../../components/Announcement";
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import Products from "../../components/Products";
import Sliders from "../../components/Slider";


const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Sliders />
      <Categories />
      <Products/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default Home