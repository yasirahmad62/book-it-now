
import React from 'react';
import './ContactUsForm.css';

const ContactUsForm = () => {
    return (
        <div className="main-box large-view border-view content-section">
            <div className="form-wrap">
                <h2>Have a Query? Ask our Team</h2>
                <form className="form-container" data-id="contact-us-form">
                    <div className="form-item">
                        <div className="input-wrap drop-down-wrap">
                            <select className="auxiliary-input drop-down-filled" tabIndex="0">
                                <option value="" disabled selected>Select Type of Query</option>
                                <option value="general">General</option>
                                <option value="support">Support</option>
                                <option value="sales">Sales</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-item">
                        <div className="text-area-wrap">
                            <textarea maxLength="500" placeholder="Describe Your Query" id="text-area" className="text-area-field" rows="4"></textarea>
                        </div>
                    </div>
                    <div className="form-item">
                        <div className="input-wrap">
                            <input type="text" className="auxiliary-input" maxLength="50" name="user-name" id="user-name" placeholder="Enter Your Name" />
                        </div>
                    </div>
                    <div className="form-item">
                        <div className="input-wrap">
                            <input type="tel" className="auxiliary-input" maxLength="10" name="mobile-number" id="mobile-number" placeholder="Enter Your Mobile Number" />
                        </div>
                    </div>
                    <div className="form-item">
                        <div className="input-wrap">
                            <input type="email" className="auxiliary-input" maxLength="50" name="email" id="email" placeholder="Enter Your Email" />
                        </div>
                    </div>
                    <button type="submit" className="btn primary full-width">
                        <span className="btn-inner-content">Submit</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUsForm;
