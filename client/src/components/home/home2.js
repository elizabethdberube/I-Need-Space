import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {

} from "react-icons/ai";


function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET TALK <span className="purple"> SPACE </span> Stuff
                        </h1>
                        <p className="home-about-body">
                            Welcome and I hope you enjoy our website
                            <br />
                            <br />Be Sure to Sign in and Sign up to see the full site.
                            <i>
                                <b className="purple"> Created by Chinda, Liz and Michael </b>
                            </i>
                            <br />
                            <br />

                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>

            </Container>
        </Container>
    );
}
export default Home2;