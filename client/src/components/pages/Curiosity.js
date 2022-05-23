import React, { useState, useEffect } from 'react';

// rover page
function Curiosity() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [FHAZ, setFHAZ] = useState([]);

    const apiKey = "Zo8kqmCDwTNnP4Z5aMz5uyoVq6wR2BFGTT9tqNGe"


    useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=FHAZ&api_key=${apiKey}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);

                    const { photos } = result;

                    const { img_src, rover, camera } = photos[0];
                    const { full_name } = camera;
                    const { name, status, landing_date, launch_date } = rover;


                    setFHAZ({ name: name, status: status, img_src: img_src, full_name: full_name, landing_date: landing_date, launch_date: launch_date });


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

                <p>Rover's name: {FHAZ.name}</p>

                <p>Curiosity's status: {FHAZ.status}</p>

                <p>Camera: {FHAZ.full_name}</p>

                <p>Date Curiosity was launched: {FHAZ.launch_date}</p>

                <p>Date Curiosity landed: {FHAZ.landing_date}</p>

                <img src={FHAZ.img_src}></img>

            </div>

        );
    }
}



export default Curiosity;