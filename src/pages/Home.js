import BottomNavBar from "../components/BottomNavBar"
import FeaturedProducts from "../components/FeaturedProducts"
import MiddleNavBar from "../components/MiddleNavBar"
import TopNavBar from "../components/TopNavBar"


const Home = () => {
    return (
        <>
            <TopNavBar/>
            <MiddleNavBar/>
            <BottomNavBar/>
            <FeaturedProducts/>
        </>

    )
}

export default Home