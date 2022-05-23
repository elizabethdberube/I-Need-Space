import React, { useState, useEffect } from 'react';

// rover page
function Practice() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [practice, setPractice] = useState([]);

    const apiKey = "Zo8kqmCDwTNnP4Z5aMz5uyoVq6wR2BFGTT9tqNGe"


    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);

                    const { date, explanation, url, title } = result;



                    setPractice({ date: date, explanation: explanation, url: url, title: title });


                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])



    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (


            <div>
                <img src={practice.url}></img>

                <p>Date: {practice.date}</p>

                <p> {practice.title}</p>

                <p>What you are seeing: {practice.explanation}</p>




            </div>

        );
    }
}



export default Practice;