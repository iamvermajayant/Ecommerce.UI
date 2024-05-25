import Announcements from "../components/Announcements"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import Categories from "../components/Categories"

const Home = () => {
  return (
    <div>
        <Announcements/>
        <Navbar/>
        <Slider/>
        <Categories/>
    </div>
  )
}

export default Home