import React, { useState, useEffect } from 'react';


// rover page
function Picture() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [picture, setPicture] = useState([]);

  let API_KEY = 'Zo8kqmCDwTNnP4Z5aMz5uyoVq6wR2BFGTT9tqNGe';

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);

          const { date, explanation, url, title } = result;



          setPicture({ date: date, explanation: explanation, url: url, title: title });


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
      <>
        <div><h1 className="mx-auto d-flex justify-content-center">Astronomy Picture of the Day!</h1>
          <h5 class="text-center font-weight-bold">Date: {picture.date}</h5></div>

        <div className="text-center"><img src={picture.url} alt="pic of the day" height="500" width="500" />
          <h2 class="text-center"> {picture.title}</h2></div>

        <div className="explanation">
          <p>{picture.explanation}</p>


        </div>

      </>
    );
  }
};

export default Picture;