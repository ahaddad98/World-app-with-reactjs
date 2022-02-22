import React from "react";

const Card = (props) => {
    const {country} = props;
    return (
        <div className="card">
            <img src={country.flags.svg} alt="flag" />
            <div className="data-container">
                <ul>
                    <li>{country.name.common}</li>
                    <li>{country.capital}</li>
                    <li>Pop. {country.population}</li>
                </ul>
            </div>
        </div>
    );
}
export default Card;