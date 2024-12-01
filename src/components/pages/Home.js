import Header from "../Header";
import ImageSlider from "../ImageSlider";
import NavBar from "../NavBar";
import Cards from "../Cards";
import Footer from "../Footer";
import ianAndLaura from "../../IMG_7832.jpg";
import "../../index.css";

function Home() {
    return(
        <>
            <Header />
            <div>
                <ImageSlider />
                <NavBar />
                <Cards />
            </div>
            <div className="quoteSection">
                <img className="homeImage" src={ianAndLaura}></img>
            </div>
            <Footer />
        </>
    );
}

export default Home;
