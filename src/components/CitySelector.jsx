import React, { useEffect } from 'react';
import { Modal, Typography } from '@mui/material';
import './CitySelector.css';
import Toronto from "../icons/CN_Tower_Icon.png";
import Calgary from "../icons/Calgary.png";
import Vancouver from "../icons/Vancouver.png";
import Montreal from "../icons/Montreal.png";

const cities = [
    { name: 'Toronto', icon: Toronto },
    { name: 'Calgary', icon: Calgary },
    { name: 'Montreal', icon: Montreal },
    { name: 'Vancouver', icon: Vancouver }
];

function CitySelector({ open, onClose, onSelectCity, selectedCity }) {
    useEffect(() => {
        const savedCity = sessionStorage.getItem('selectedCity');
        if (savedCity) {
            onSelectCity(savedCity);
        }
    }, []);

    const handleCitySelect = (cityName) => {
        sessionStorage.setItem('selectedCity', cityName);
        onSelectCity(cityName);
    };

    return (
        <Modal open={open} onClose={onClose}>
            <div className="modal-container">
                <Typography variant="h6" className="modal-title">Select a city</Typography>
                <div className="city-list">
                    {cities.map((city) => (
                        <div key={city.name} className="styles__cityDivWrapper">
                            <div role="none" className="Ripple__container" data-id=""></div>
                            <div
                                className={`styles__cityDiv ${selectedCity === city.name ? 'styles__active' : ''}`}
                                role="none"
                                onClick={() => handleCitySelect(city.name)}
                            >
                                <span className="styles__cityIcon">
                                    <img src={city.icon} width="72px" height="72px" alt={`${city.name} icon`} />
                                </span>
                                <span className="styles__cityText" style={{ color: selectedCity === city.name ? 'rgb(99, 0, 163)' : 'inherit' }}>
                                    {city.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    );
}

export default CitySelector;
