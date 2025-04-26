import Footer from "./Footer";
import Hero from "./Hero";
import Landing from "./Landing";
import Navigation from "./Navigation";
import Trending from "./Trending";

const HomeScreen = () => {
    return (
        <div className="space-y-1">
            <Hero />
            <Trending />
            <Landing />
            <Footer />
            <Navigation />
        </div>
    )
}

export default HomeScreen;