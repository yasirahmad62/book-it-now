import React from 'react';
import './ContactUsLocations.css';

const ContactUsLocations = () => {
    return (
        <div className="location-wrap">
            <h2>Visit us here</h2>
            <div className="location">
                <h3>Corporate Office</h3>
                <p>
                    Valuedrive Technologies Private Limited<br />
                    8th Floor, Capital Business Park, Sector 48, Gurugram, Haryana 122018
                </p>
                <a href="https://www.google.com/maps/place/CAPITAL+BUSINESS+PARK/@28.4156001,77.0391555,18.89z/data=!4m6!3m5!1s0x390d23776c51cacd:0x7077dd947071569f!8m2!3d28.4156818!4d77.0393364!16s%2Fg%2F11gh6b__74" target="_blank" rel="noreferrer">
                    View on Google Map
                </a>
            </div>
            <div className="location">
                <h3>Registered Office</h3>
                <p>
                    Pureride Technologies Private Limited<br />
                    B1/H3 Mohan Cooperative Industrial Area Mathura Road, Block -B Delhi South Delhi 110044
                </p>
                <a href="https://www.google.com/maps/place/B-1,+Block+E,+Mohan+Cooperative+Industrial+Estate,+Badarpur,+New+Delhi,+Delhi+110044/data=!3m1!4b1!4m5!3m4!1s0x390ce6cf6c89da1b:0x4a38a2bd22f3bf06!8m2!3d28.50857!4d77.29672" target="_blank" rel="noreferrer">
                    View on Google Map
                </a>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1754.5605906002131!2d77.0391555!3d28.4156001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23776c51cacd%3A0x7077dd947071569f!2sCAPITAL%20BUSINESS%20PARK!5e0!3m2!1sen!2sin!4v1683271250393!5m2!1sen!2sin"
                    width="100%" height="300" frameBorder="0" title="Google Map" allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default ContactUsLocations;
