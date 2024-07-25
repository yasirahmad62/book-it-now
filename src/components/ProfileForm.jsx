import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import { database } from '../firebase';
import './ProfileForm.css';
import LoadingIcon from "../icons/LoadingIcon";

const ProfileForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobileNumber: '',
        location: '',
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
        const timestamp = new Date().toISOString();
        const userProfileData = {
            ...formData,
            timestamp,
            userType: 'user',
        };

        const userProfileRef = ref(database, 'profiles/' + userId);
        await set(userProfileRef, userProfileData);

        setLoading(false);
        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
        }, 2000);
    };

    return (
        <div className="main-box large-view border-view content-section">
            <div className="form-wrap">
                <h2>Update Your Profile</h2>
                <form className="form-container" onSubmit={handleSubmit}>
                    <div className="form-item">
                        <div className="input-wrap">
                            <input type="text" className="auxiliary-input" maxLength="50" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter Your Full Name" required />
                        </div>
                    </div>
                    <div className="form-item">
                        <div className="input-wrap">
                            <input type="email" className="auxiliary-input" maxLength="50" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" required />
                        </div>
                    </div>
                    <div className="form-item">
                        <div className="input-wrap">
                            <input type="tel" className="auxiliary-input" maxLength="10" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Enter Your Mobile Number" required />
                        </div>
                    </div>
                    <div className="form-item">
                        <div className="input-wrap">
                            <input type="text" className="auxiliary-input" maxLength="100" name="location" value={formData.location} onChange={handleChange} placeholder="Enter Your Location" required />
                        </div>
                    </div>
                    <button type="submit" className="btn primary full-width" disabled={loading}>
                        {loading ? <div className="loadingIcon"><LoadingIcon /></div> : submitted ? 'Submitted' : <span className="btn-inner-content">Submit</span>}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfileForm;
