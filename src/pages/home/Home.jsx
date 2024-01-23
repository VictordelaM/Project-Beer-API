import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <>
        <Link to = "/randomBeer">Random Beer</Link>
        <Link to = "/allBeers">all Beers</Link>
        <h1>Home</h1>
        </>
    );
}

export default Home;