import React from 'react';
// import { Container } from 'react-bootstrap';
import './styles/Home.css';
import ProfilePhoto from '../assets/chris-southon-profile-photo.png';

const Home = () => (
    <div className="container-fluid homeBackground">
        {/* <Container> */}
            <div className="photo">
                <img className="img-fluid rounded-5 shadow-lg" src={ProfilePhoto} alt="Chris Southon Profile"/>
            </div>
        {/* </Container> */}
            <div>
                <h1>Chris Southon</h1>
                <h3>Frontend Developer</h3>
            </div>
            <div>
                <p></p>
            </div>
    </div>

);

export default Home;

// TODO:
// Photo
// Chris Southon
    // Front-end Developer

    // Welocome to my portfolio
    // Aspiring frontend web developer, specialising in HTML, CSS, JavaScript, Node.js and React. 
    // I'm enthusiastic when it comes to learning something new and I love a challenge and problem solving.