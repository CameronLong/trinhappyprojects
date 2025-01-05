import Header from "../Header";
import ImageSlider from "../ImageSlider";
import NavBar from "../NavBar";
import Cards from "../Cards";
import Footer from "../Footer";
import ianAndLaura from "../../ianAndLaura.png";
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
                <div className="quoteContainer">
                    <h3>"TAKING PICTURES IS SAVOURING LIFE INTENSELY, EVERY HUNDREDTH OF A SECOND."</h3>
                    <p>- MARC RIBOUD</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
