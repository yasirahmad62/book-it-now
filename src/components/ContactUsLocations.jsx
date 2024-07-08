import React from 'react';
import './ContactUsLocations.css';

const ContactUsLocations = () => {
    return (
        <div className="location-wrap">
            <h2>Visit us here</h2>
            <div className="location">
                <h3>Corporate Office</h3>
                <p>
                    Tech Solutions Inc.<br />
                    1234 Innovation Drive, Suite 500, Waterloo, Ontario N2L 3G1, Canada
                </p>
                <a href="https://www.google.com/maps/place/1234+Innovation+Dr,+Waterloo,+ON+N2L+3G1,+Canada/" target="_blank" rel="noreferrer">
                    View on Google Map
                </a>
            </div>
            <div className="location">
                <h3>Registered Office</h3>
                <p>
                    Tech Innovations Ltd.<br />
                    5678 Technology Avenue, Toronto, Ontario M5G 1Z8, Canada
                </p>
                <a href="https://www.google.com/maps/place/5678+Technology+Ave,+Toronto,+ON+M5G+1Z8,+Canada/" target="_blank" rel="noreferrer">
                    View on Google Map
                </a>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.3723774322554!2d-79.387057!3d43.6510708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d6f52336b7%3A0x5f89e8f9058f8f4b!2s5678%20Technology%20Ave%2C%20Toronto%2C%20ON%20M5G%201Z8%2C%20Canada!5e0!3m2!1sen!2sca!4v1623318632000!5m2!1sen!2sca"
                    width="100%" height="300" frameBorder="0" title="Google Map" allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default ContactUsLocations;
