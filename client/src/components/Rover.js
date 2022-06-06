import React, { useState, useEffect } from 'react';
import { useQuery } from "@apollo/client"
import { FHAZ_Data, RHAZ_Data, NAVCAM_Data, twitter_Data } from "../utils/queries"
import roverPic from '../images/rover.jpg'
import "./PictureStyle.css"

import { isConstValueNode } from 'graphql';
import "./PictureStyle.css";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel'

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

  //load rover pic
  useEffect(() => {
    setRover(roverPic);
  }, []);

  //change rover pic
  const setRHAZ = () => {

    setRover(RHAZ.img_src);

  };


  //change rover pic
  const setFHAZ = () => {
    setRover(FHAZ.img_src);

  };


  //change rover pic
  const setNAVCAM = () => {
    setRover(NAVCAM.img_src);


  };
  if (loading_FHAZ || loading_RHAZ || loading_NAVCAM || loading_twitter) {
    return <div>Loading...</div>;
  } return (
    <>
      <div className="wrapper">

        <div className="curiosity">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={rover}
                alt="Rover"
              />
              <Carousel.Caption>
                <h3>Explore with Curiosity</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={setFHAZ}
                alt="Front Hazard Avoidance Camera"
              />
              <Carousel.Caption>
                <h3>Front Hazard Avoidance Camera</h3>
                <p>Status: {FHAZ.status}</p>
                <p>Launch Date: {FHAZ.launch_date}</p>
                <p>Landing Date:{FHAZ.landing_date}</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={setRHAZ}
                alt="Rear Hazard Avoidance Camera"
              />
              <Carousel.Caption>
                <h3>Rear Hazard Avoidance Camera</h3>
                <p>Status: {RHAZ.status}</p>
                <p>Launch Date: {RHAZ.launch_date}</p>
                <p>Landing Date: {RHAZ.landing_date}</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={setNAVCAM}
                alt="Navigation Camera"
              />
              <Carousel.Caption>
                <h3>Navigation Camera</h3>
                <p>Status: {NAVCAM.status}</p>
                <p>Launch Date: {NAVCAM.launch_date}</p>
                <p>Landing Date: {NAVCAM.landing_date}</p>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>

        </div>

        <div className="twitterFeed">
          <Card style={{ width: '25rem', height: '15rem' }}>
            <div class="space_feed card-header text-dark"><h1>@marscuriosity</h1></div>
            <div class="card-body scroll">
              <ul class="list-group list-group-flush">
                {twitter.map((item, i) => (

                  <li className="list-group-item" key={i}>
                    <p> Date: {item.created_at} </p>
                    <p> Name: {item.name} </p>
                    <p> {item.text} </p>
                    <p> Rover's Location: {item.location} </p>
                    <p>{item.description}  {item.screen_name} </p>
                    <a href={item.url} target="_blank" rel="noreferrer" className="links">Link to Curiosity's page </a>
                  </li>
                ))}
              </ul>
=======
    const { loading: loading_FHAZ, data: data_FHAZ } = useQuery(FHAZ_Data);
    const { loading: loading_RHAZ, data: data_RHAZ } = useQuery(RHAZ_Data);
    const { loading: loading_NAVCAM, data: data_NAVCAM } = useQuery(NAVCAM_Data);
    const { loading: loading_twitter, data: data_twitter } = useQuery(twitter_Data);


    const [rover, setRover] = useState("");


    const twitter = data_twitter?.getTwitter || [];

    const RHAZ = data_RHAZ?.getRHAZ || {};

    const FHAZ = data_FHAZ?.getFHAZ || {};

    const NAVCAM = data_NAVCAM?.getNAVCAM || {};

    //load rover pic
    useEffect(() => {
        setRover(roverPic);
    }, []);

    //change rover pic
    const setRHAZ = () => {

        setRover(RHAZ.img_src);

    };


    //change rover pic
    const setFHAZ = () => {
        setRover(FHAZ.img_src);

    };


    //change rover pic
    const setNAVCAM = () => {
        setRover(NAVCAM.img_src);


    };
    if (loading_FHAZ || loading_RHAZ || loading_NAVCAM || loading_twitter) {
        return <div>Loading...</div>;
    } return (
        <>
            <div className="wrapper">


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
          </Card >
        </div>

      </div>
    </>
  );
}


