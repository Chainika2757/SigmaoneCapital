import NavBar from '../components/Navbar/NavBar';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';


const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <Intro />
            <Services />
            {/* <Portfolio /> */}
            {/* <Clients /> */}
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

