import React, { useState, useEffect } from 'react';

// rover page
function Oppurtunity() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [NAVCAM, setNAVCAM] = useState([]);
    const apiKey = "Zo8kqmCDwTNnP4Z5aMz5uyoVq6wR2BFGTT9tqNGe"


    useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=NAVCAM&api_key=${apiKey}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);

                    const { photos } = result;

                    const { img_src, rover, camera } = photos[0];
                    const { full_name } = camera;
                    const { name, status, landing_date, launch_date } = rover;


                    setNAVCAM({ name: name, status: status, img_src: img_src, full_name: full_name, landing_date: landing_date, launch_date: launch_date });


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

                <p>Rover's name: {NAVCAM.name}</p>

                <p>Curiosity's status: {NAVCAM.status}</p>

                <p>Camera: {NAVCAM.full_name}</p>

                <p>Date Curiosity was launched: {NAVCAM.launch_date}</p>

                <p>Date Curiosity landed: {NAVCAM.landing_date}</p>

                <img src={NAVCAM.img_src}></img>

            </div>

        );
    }
}



export default Oppurtunity;