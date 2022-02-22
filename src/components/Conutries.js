import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
    const  [data, setData] = useState([]);
    useEffect(() => {

        axios
        .get('https://restcountries.com/v3.1/all')
        .then((res) => setData(res.data));
    }, []);
    return (
        <>
    <div className="countries">
        <ul className="countries-list">
            {
                data.map((country) => (
                    <li key={country.name.common}>
                        <Card country={country} key={country.name.common} />
                    </li>
                ))
            }
        </ul>
    </div>
    </>
    );
}

export default Countries;