import React from "react";
import {Container, Jumbotron, Card} from "react-bootstrap";

function About() {

    return (
        <div>
            <Jumbotron style={{backgroundImage: "URL(https://i.imgur.com/qkdpN.jpg)"}}>
                <h1>Welcome to Pupster</h1>
                <p>A place to find your new best friend.</p>
            </Jumbotron>

            <Container style={{marginTop: 20}}>
                <Card>
                    <Card.Body><p>Search up your new best friend.</p></Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default About;