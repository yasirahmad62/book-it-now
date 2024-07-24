import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setCategory, setSubcategory, setRecommendations } from '../store/bookingSlice';
import './RecommendationModal.css';
import { ERSQuestionsconst } from "../const/const";

const RecommendationModal = ({ isOpen, onRequestClose }) => {
    const [step, setStep] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectedCategory = useSelector((state) => state.booking.selectedCategory);
    const selectedSubcategory = useSelector((state) => state.booking.selectedSubcategory);

    const handleNextStep = (response, action) => {
        dispatch(action(response));
        setStep(step + 1);
    };

    const handleBackStep = () => {
        setStep(step - 1);
    };

    const capitalizeFirstLetter = (word) => {
        if (!word) return '';
        return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    };

    const handleClose = () => {
        onRequestClose();
        setStep(0); // Reset steps on close
    };

    const handleRecommendationFetch = async () => {
        const userInput = {
            entertainmentType: selectedCategory,
            subcategory: selectedSubcategory,
            timeFrame: 'This week', // Adjust as necessary based on user input
        };
        console.log('Fetching recommendations with input:', userInput);
        try {
            const response = await axios.post('http://localhost:8000/api/recommendations', userInput);
            console.log('Response data:', response.data);
            dispatch(setRecommendations(response.data));
            handleClose();
            navigate(`/${selectedCategory.toLowerCase()}?from=recommendations`); // Navigate to the appropriate route with query param
        } catch (error) {
            console.error('Error fetching recommendations:', error);
        }
    };

    const getCurrentQuestion = () => {
        if (step === 0) {
            return { question: "Do you know what you are looking for?" };
        } else if (step === 1) {
            return ERSQuestionsconst[0];
        } else if (step === 2) {
            return ERSQuestionsconst.find(q => q.condition === selectedCategory) || {};
        } else if (step === 3) {
            return ERSQuestionsconst[4]; // The final question about when to attend
        }
    };

    const currentQuestion = getCurrentQuestion();

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            contentLabel="Recommendation Modal"
            className="recommendation-modal"
            shouldCloseOnEsc={true}
            overlayClassName="recommendation-modal-overlay"
            ariaHideApp={false}
        >
            <div className="modal-content">
                <div className="modal-header">
                    {step > 0 && (
                        <button onClick={handleBackStep} className="back-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" version="1.1" style={{ transform: 'rotate(180deg)' }}>
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="State-5.1-Evaluation-Two---Book-CTA-(Collapsed-Inspection-1)" transform="translate(-319.000000, -103.000000)">
                                        <g id="chevron_right-24px-copy" transform="translate(331.000000, 115.000000) rotate(90.000000) translate(-331.000000, -115.000000) translate(319.000000, 103.000000)">
                                            <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                            <path d="M9.29,6.71 C8.9,7.1 8.9,7.73 9.29,8.12 L13.17,12 L9.29,15.88 C8.9,16.27 8.9,16.9 9.29,17.29 C9.68,17.68 10.31,17.68 10.7,17.29 L15.29,12.7 C15.68,12.31 15.68,11.68 15.29,11.29 L10.7,6.7 C10.32,6.32 9.68,6.32 9.29,6.71 Z" id="Path" fill="#acacac" fillRule="nonzero"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </button>
                    )}
                    <button onClick={handleClose} className="close-button">X</button>
                </div>
                <div className="modal-body">
                    {step === 0 && (
                        <>
                            <p className='option-heading'>{currentQuestion.question}</p>
                            <div className="button-group-1">
                                <button onClick={handleClose} className="modal-button yes-button">
                                    YES
                                </button>
                                <button onClick={() => setStep(step + 1)} className="modal-button no-button">
                                    NO
                                </button>
                            </div>
                        </>
                    )}
                    {step > 0 && step < 3 && (
                        <>
                            <p className='option-heading'>{currentQuestion.question}</p>
                            <div className="button-group">
                                {currentQuestion.options.map(option => (
                                    <button
                                        key={option.text}
                                        onClick={() => handleNextStep(option.text, step === 1 ? setCategory : setSubcategory)}
                                        className="modal-button option-button"
                                    >
                                        <div className="option-content">
                                            <div className='option-left' style={{ display: step === 0 ? 'none' : 'flex' }}>
                                                <span className='option-text'>{capitalizeFirstLetter(option.text)}</span>
                                                <span className='option-subtext'>{option.subcontext}</span>
                                            </div>
                                            <div>
                                                <img src={option.icon} alt={`${option.text} icon`} className='iconOption' style={{ display: step === 0 ? 'none' : 'block' }} />
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                    {step === 3 && (
                        <>
                            <p className='option-heading'>{currentQuestion.question}</p>
                            <div className="button-group">
                                {currentQuestion.options.map(option => (
                                    <button
                                        key={option.text}
                                        onClick={handleRecommendationFetch}
                                        className="modal-button option-button"
                                    >
                                        <div className="option-content">
                                            <div className='option-left'>
                                                <span className='option-text'>{option.text}</span>
                                                <span className='option-subtext'>{option.subcontext}</span>
                                            </div>
                                            <div>
                                                <img src={option.icon} alt={`${option.text} icon`} className='iconOption' />
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default RecommendationModal;
