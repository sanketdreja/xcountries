import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                setCountries(response.data);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err);
            }
        };

        fetchCountries();
    }, []);

    if (error) {
        return <div>Error loading countries data.</div>;
    }

    return (
        <div>
            {countries.map((country) => (
                <div key={country.name.common}>
                    <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
                    <p>{country.name.common}</p>
                </div>
            ))}
        </div>
    );
};

export default Countries;
