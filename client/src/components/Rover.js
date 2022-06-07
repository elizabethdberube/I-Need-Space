import React, { useState, useEffect } from 'react';
import { useQuery } from "@apollo/client"
import { FHAZ_Data, RHAZ_Data, NAVCAM_Data, twitter_Data } from "../utils/queries"
import roverPic from '../images/rover.jpg';
import { isConstValueNode } from 'graphql';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./PictureStyle.css";
import Carousel from 'react-bootstrap/Carousel'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

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

      <div wrapper>
        <div className="rover">
          <Card className="picture">
            <Card.Img variant="top" src={rover} />
            <Card.Body>
              <Card.Title>Curiosity</Card.Title>
              <Card.Text>
                Click the different buttons to see Curiosity's different camera angles
              </Card.Text>
              <div className="btn">
                <Button onClick={setFHAZ} width="400" height="200">Front Hazard Avoidance Camera</Button>
                <Button onClick={setRHAZ} id="roverpix">Rear Hazard Avoidance Camera</Button>
                <Button onClick={setNAVCAM} id="roverpix">Navigation Camera</Button>
              </div>
            </Card.Body>
          </Card>

          <div className="centerContent">
            <div className="selfCenter spaceBetween">
              <TwitterTimelineEmbed
                onLoad={function noRefCheck() { }}
                options={{
                  height: 400
                }}
                sourceType="widget"
                widgetId="15473958"
              />
            </div>
          </div>

        </div>

        <div className="twitterFeed">
          <div class="space_feed card-header text-dark">
            <div class="space_feed card-header text-dark scroll"></div>
            <a class="twitter-timeline" data-width="220" data-height="200" href="https://twitter.com/MarsCuriosity?ref_src=twsrc%5Etfw">Tweets by MarsCuriosity</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
        </div>
      </div>

    </>
  );
}