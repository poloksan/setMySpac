'use client';

import { useEffect, useState } from 'react';

interface Country {
    uuid: string;
    name: string;
}

interface State {
    uuid: string;
    name: string;
    country: string;
}

interface City {
    uuid: string;
    name: string;
}

export default function LocationDropdown() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [states, setStates] = useState<State[]>([]);
    const [cities, setCities] = useState<City[]>([]);

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const [loadingState, setLoadingState] = useState(false);
    const [loadingCity, setLoadingCity] = useState(false);

    // Load Countries
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await fetch('https://api-dev.autoby24.ch/api/core/country?limit=all');

                const data = await res.json();

                if (data?.results) {
                    setCountries(data.results);
                }
            } catch (error) {
                console.error('Country fetch error:', error);
            }
        };

        fetchCountries();
    }, []);

    // Country Change
    const handleCountryChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const countryName = e.target.value;

        setSelectedCountry(countryName);

        setSelectedState('');
        setSelectedCity('');
        setStates([]);
        setCities([]);

        if (!countryName) return;
        try {
            setLoadingState(true);

            const res = await fetch(
                `https://api-dev.autoby24.ch/api/core/state?country=${countryName}&limit=all`,
            );

            const data = await res.json();

            setStates(data?.results || []);
        } catch (error) {
            console.error('State fetch error:', error);
        } finally {
            setLoadingState(false);
        }
    };

    // State Change
    const handleStateChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const stateUUID = e.target.value;

        setSelectedState(stateUUID);

        setSelectedCity('');
        setCities([]);

        if (!stateUUID) return;

        try {
            setLoadingCity(true);

            const res = await fetch(
                `https://api-dev.autoby24.ch/api/core/city?state=${stateUUID}&limit=all`,
            );

            const data = await res.json();

            setCities(data?.results || []);
        } catch (error) {
            console.error('City fetch error:', error);
        } finally {
            setLoadingCity(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg space-y-4">
            <div className="w-full d-flex mx-auto">
                <h2 className="text-xl font-semibold text-gray-700 text-center">Select Location</h2>
            </div>

            {/* Country */}

            <select
                value={selectedCountry}
                onChange={handleCountryChange}
                className="w-full border p-2 rounded"
            >
                <option value="">Select Country</option>

                {countries.map((country) => (
                    <option key={country.uuid} value={country.name}>
                        {country.name}
                    </option>
                ))}
            </select>

            {/* State */}

            <select
                value={selectedState}
                onChange={handleStateChange}
                disabled={!selectedCountry || loadingState}
                className="w-full border p-2 rounded"
            >
                <option value="">{loadingState ? 'Loading states...' : 'Select State'}</option>

                {states.map((state) => (
                    <option key={state.uuid} value={state.name}>
                        {state.name}
                    </option>
                ))}
            </select>

            {/* City */}

            <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                disabled={!selectedState || loadingCity}
                className="w-full border p-2 rounded"
            >
                <option value="">{loadingCity ? 'Loading cities...' : 'Select City'}</option>

                {cities.map((city) => (
                    <option key={city.uuid} value={city.uuid}>
                        {city.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
