import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Services from '../components/Services';


const Home = () => {
    return (
        <>
            <Hero />
            {/* <Intro /> */}
            <Services />
            {/* <Portfolio /> */}
            <Clients />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

