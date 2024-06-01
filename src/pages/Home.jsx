import Announcements from "../components/Announcements"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import Categories from "../components/Categories"
import Products from "../components/Products"

const Home = () => {
  return (
    <div>
        <Announcements/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
    </div>
  )
}

export default Home