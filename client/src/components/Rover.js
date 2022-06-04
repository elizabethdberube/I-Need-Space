import React, { useState, useEffect } from 'react';
import { useQuery } from "@apollo/client"
import { FHAZ_Data, RHAZ_Data, NAVCAM_Data, twitter_Data } from "../utils/queries"
import roverPic from './images/rover.jpg';
import { isConstValueNode } from 'graphql';


export default function RoverPage() {

    const { loading: loading_FHAZ, data: data_FHAZ } = useQuery(FHAZ_Data);
    const { loading: loading_RHAZ, data: data_RHAZ } = useQuery(RHAZ_Data);
    const { loading: loading_NAVCAM, data: data_NAVCAM } = useQuery(NAVCAM_Data);
    const { loading: loading_twitter, data: data_twitter } = useQuery(twitter_Data);


    const [rover, setRover] = useState("");


    const twitter = data_twitter?.getTwitter || [];

    const RHAZ = data_RHAZ?.getRHAZ || {};

    const FHAZ = data_FHAZ?.getFHAZ || {};

    const NAVCAM = data_NAVCAM?.getNAVCAM || {};


    useEffect(() => {
        setRover(roverPic);
    }, []);

    const setRHAZ = () => {

        setRover(RHAZ.img_src);

    };

    const setFHAZ = () => {
        setRover(FHAZ.img_src);

    };

    const setNAVCAM = () => {
        setRover(NAVCAM.img_src);


    };
    if (loading_FHAZ || loading_RHAZ || loading_NAVCAM || loading_twitter) {
        return <div>Loading...</div>;
    } return (
        <>
            <div>


                <img src={rover}></img>
                <div src={FHAZ.name}></div>
                <div src={FHAZ.status}></div>
                <div src={FHAZ.launch_date}></div>
                <div src={FHAZ.landing_date}></div>
                <div>Click the different buttons to see Curiosity's different camera angles</div>
                <button onClick={setFHAZ}>Front Hazard Avoidance Camera</button>
                <button onClick={setRHAZ}>Rear Hazard Avoidance Camera </button>
                <button onClick={setNAVCAM}>Navigation Camera</button>
            </div>
            <div>
                <div className="list-group">
                    <ul className="list-group">
                        {twitter.map((item, i) => (

                            <li className="list-group-item" key={i}>
                                {item.name}  {item.date}{item.url}   {item.location}    {item.description}  {item.screen_name}  {item.source}
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}


