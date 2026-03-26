import React, { useContext } from 'react'
import "./CSS/Form.css";
import dataAPI from '../API/dataAPI';
import { dataContextAPI } from '../ContextAPI/ContextAPI';

export default function Form() {

    const { diseaseResult, setDiseaseResult } = useContext(dataContextAPI);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        dataAPI(data, setDiseaseResult);
    };



    return (
        <div className='mainContainer'>
            <div className="mainTitleContainer">
                <h1 className="mainTitle">Heart Disease Predictor</h1>
            </div>

            <div className="bodyContainer">
                <div className="formContainer">
                    <form action="/" className="form" id='form' onSubmit={handleSubmit}>
                        <div className="labelContainer">
                            <label htmlFor="age" className="labels">Age</label>
                            <label htmlFor="gender" className="labels">Gender</label>
                            <label htmlFor="chestPain" className="labels">chest Pain Type</label>
                            <label htmlFor="restingBp" className="labels">Resting BP</label>
                            <label htmlFor="cholesterol" className="labels">cholesterol Level</label>
                            <label htmlFor="sugar" className="labels">Fasting Blood Sugar</label>
                            <label htmlFor="ecg" className="labels">Resting ECG</label>
                            <label htmlFor="heartRate" className="labels">Max Heart Rate</label>
                            <label htmlFor="angina" className="labels">Exercise Angina</label>
                            <label htmlFor="depression" className="labels">ST Depression</label>
                            <label htmlFor="slope" className="labels">ST Slope</label>
                            <label htmlFor="numVessels" className="labels">Num Major Vessels</label>
                            <label htmlFor="thalassemia" className="labels">Thalassemia</label>
                        </div>

                        <div className="inputContainer">
                            <input type="text" className="inputs" name='age' required />
                            <div className="radioDiv">
                                <input type="radio" name='gender' value="male" required />Male&nbsp;&nbsp;&nbsp;
                                <input type="radio" name='gender' value="Female" required />Female
                            </div>
                            <select name="chestPain" id="chestPain" className='selectionBox' required>
                                <option defaultValue="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <input type="text" className='inputs' name='restingBp' required />
                            <input type="text" name="cholesterol" className='inputs' required />
                            <div className="radioDiv">
                                <input type="radio" name='sugar' value="yes" required />Yes&nbsp;&nbsp;&nbsp;
                                <input type="radio" name='sugar' value="no" required />No
                            </div>
                            <select name="ecg" id="ecg" className='selectionBox' required>
                                <option defaultValue="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                            <input type="text" className="inputs" name='heartRate' required />
                            <div className="radioDiv">
                                <input type="radio" name='angina' value="yes" required />Yes&nbsp;&nbsp;&nbsp;
                                <input type="radio" name='angina' value="no" required />No
                            </div>
                            <input type="text" className="inputs" name='depression' required />
                            <select name="slope" id="slope" className='selectionBox' required>
                                <option defaultValue="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                            <select name="numVessels" id="numVessels" className='selectionBox' required>
                                <option defaultValue="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                            <select name="thalassemia" id="thalassemia" className='selectionBox' required>
                                <option defaultValue="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>

            <div className="submitBtnContainer">
                <button type='submit' form='form' className='submitBtn'>Submit</button>
            </div>

            <div className="resultContainer">
                <span className='result'>
                    {
                        diseaseResult ? `You have ${diseaseResult} chances to have Heart diseases` : "This is a testing message , actual result may vary"
                    }
                </span>
            </div>


        </div>
    )
}


