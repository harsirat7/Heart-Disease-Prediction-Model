import React from 'react'

export default async function dataAPI(data, setDiseaseResult) {

    const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const reply = await response.json();
    setDiseaseResult(reply.prediction);

};
