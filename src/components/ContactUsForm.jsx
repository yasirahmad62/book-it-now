import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import { database } from '../firebase';
import './ContactUsForm.css';
import LoadingIcon from "../icons/LoadingIcon"
const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        queryType: '',
        queryDescription: '',
        userName: '',
        mobileNumber: '',
        email: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const userId = sessionStorage.getItem("userId");
        const newQueryRef = ref(database, 'queries/' + userId);
        await set(newQueryRef, formData);
        setLoading(false);
        setSubmitted(true);
        setFormData({
            queryType: '',
            queryDescription: '',
            userName: '',
            mobileNumber: '',
            email: ''
        });
        setTimeout(() => {
            setSubmitted(false);
        }, 2000); 
    };

    return (
        <div className="main-box large-view border-view content-section">
            <div className="form-wrap">
                <h2>Have a Query? Ask our Team</h2>
                <form className="form-container" data-id="contact-us-form" onSubmit={handleSubmit}>
                    <div className="form-item">
                        <div className="input-wrap drop-down-wrap">
                            <select className="auxiliary-input drop-down-filled" name="queryType" value={formData.queryType} onChange={handleChange} tabIndex="0">
                                <option value="" disabled>Select Type of Query</option>
                                <option value="general">General</option>
                                <option value="support">Support</option>
                                <option value="sales">Sales</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-item">
                        <div className="text-area-wrap">
                            <textarea maxLength="500" placeholder="Describe Your Query" name="queryDescription" value={formData.queryDescription} onChange={handleChange} className="text-area-field" rows="4"></textarea>
                        </div>
                    </div>
                    <div className="form-item">
                        <div className="input-wrap">
                            <input type="text" className="auxiliary-input" maxLength="50" name="userName" value={formData.userName} onChange={handleChange} placeholder="Enter Your Name" />
                        </div>
                    </div>
                    <div className="form-item">
                        <div className="input-wrap">
                            <input type="tel" className="auxiliary-input" maxLength="10" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Enter Your Mobile Number" />
                        </div>
                    </div>
                    <div className="form-item">
                        <div className="input-wrap">
                            <input type="email" className="auxiliary-input" maxLength="50" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" />
                        </div>
                    </div>
                    <button type="submit" className="btn primary full-width" disabled={loading}>
                        {loading ? <div className="loadingIcon"> <LoadingIcon /></div> : submitted ? 'Submitted' : <span className="btn-inner-content">Submit</span>}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUsForm;
