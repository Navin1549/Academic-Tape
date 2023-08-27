import React from "react";
import Base from "../components/Base";
import img1 from "../images/pic2.jpeg"
import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";
function Home() {
    const backgroundImage = {
        backgroundImage: `url(${img1})`, // Replace with your image path
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '500px', // Set the height as needed
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white', // Set text color to contrast with the background
        fontSize: '15px',
        textShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)',
    };
    return (
        <Base>
            <div style={backgroundImage} className="">
                <h1>A GLOBAL RECORDED TAPE </h1>

            </div>
            <div className="bg-secondary text-center text-light p-3">
                <h4>Welcome to Global University</h4>
            </div>
            <Card
                className="text-center"
                color="info"
                outline
                style={{
                    width: '100%'
                }}
            >
                <CardHeader className="text-danger fw-bolder ">
                    ANNOUCEMENT
                </CardHeader>
                <CardBody>
                    <CardText className="fw-bolder text-center text-primary">
                        We are also create a unique Identity Card .
                    </CardText>
                </CardBody>
            </Card>
        </Base>
    );
};

export default Home;