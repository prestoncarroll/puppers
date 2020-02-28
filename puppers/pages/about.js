import React from "react";
import Container from "../../01-Class-Content/20-react/01-Activities/06-Stu_PupsterApp/Solved/src/components/Container";

function About() {

    return (
        <div>
            <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
                <h1>Welcome to Pupster</h1>
                <p>A place to find your new best friend.</p>
            </Hero>

            <Container style={(marginTop = 20)}>
                <Card>
                    <Card.Body><p>Search up your new best friend.</p></Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default About;