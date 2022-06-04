import React, { createRef, useRef, useEffect, useState } from 'react';
import Webcam from "react-webcam";
import { useScreenshot } from 'use-react-screenshot'
import downloadjs from 'downloadjs';
import curiosity from '../images/curiosity.png';
import spiritOpportunity from '../images/spiritOpportunity.png';
import perseverance from '../images/perseverance.png';
import sojourner from '../images/sojourner.png';
import "./PictureStyle.css";



// rover page
function Camera() {
    const ref = createRef(null);
    const [display, setDisplay] = useState("");
    const [image, takeScreenshot] = useScreenshot();
    const webcamRef = React.createRef(null);
    const storedPic = React.createRef(null);
    const width = 288;
    const videoConstraints = {
        width: 750,
        height: 405,
        facingMode: "user"
    };

    const updateScreenshot = () => {
        setTimeout(() => {
            if (ref.current && webcamRef.current && display && storedPic.current) { takeScreenshot(ref.current) }
        }, 100);
    }
    useEffect(updateScreenshot)

    const getImage = () => {

        setTimeout(() => {
            downloadjs(image, "rover" + (Date.now()) + ".jpg", "image/jpeg");
        }, 500);
    }



    const setPerseverance = () => {
        setDisplay(perseverance);
        updateScreenshot();
    };

    const setSojourner = () => {
        setDisplay(sojourner);
        updateScreenshot();
    };

    const setSpiritOpportunity = () => {
        setDisplay(spiritOpportunity);
        updateScreenshot();
    };

    const setCuriosity = () => {
        setDisplay(curiosity);
        updateScreenshot();

    };




    const capture = React.useCallback(
        () => {

            const storedPicElement = storedPic.current;
            const imageSrc = webcamRef.current.getScreenshot();
            storedPicElement.src = imageSrc;
            updateScreenshot();
        },
        [storedPic, webcamRef, updateScreenshot]
    )




    return (
        <div className="wrapper" >

            <h5 className="card-title">Would you like to see yourself with a Mar's Rover?</h5>


            <Webcam
                audio={false}
                height={405}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={750}
                videoConstraints={videoConstraints}
            />
            <button onClick={capture}>Capture photo</button>

            <h5 className="card-title">Pick which Rover you would like to take a picture with:</h5>


            <button alt="curiosity" style={{ margin: '20px' }} className={'nav-link active'} onClick={setCuriosity} >Curiosity </button><button alt="sojourner" style={{ margin: '20px' }} className={'nav-link active'} onClick={setSojourner}  >Sojourner </button>
            <button alt="perseverance" style={{ margin: '20px' }} className={'nav-link active'} onClick={setPerseverance}>Perseverance </button> <button alt="spiritOpportunity" className={'nav-link active'} onClick={setSpiritOpportunity}>Spirit and Opportunity </button>
            <div style={{ padding: "10px" }}>
                <button onClick={getImage}>
                    Download
                </button>
            </div>
            <div ref={ref} style={{ width: "750", height: "405" }}>
                <img ref={storedPic} style={{ position: "absolute" }} ></img>
                <img style={{ position: "relative" }} src={display} ></img>
            </div>


            <img style={{ display: "none" }} width={width} src={image} alt={'Screenshot'} />

        </div >

    );
}


export default Camera;