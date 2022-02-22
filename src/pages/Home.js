import React from "react";
import Countries from "../components/Conutries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <Logo />
            <Countries />
            <h1> Acceuil  </h1>
        </div>
    );
}
export default Home;