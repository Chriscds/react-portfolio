import React from 'react';
import { Container } from 'react-bootstrap';
import './styles/Home.css';
import ProfilePhoto from '../assets/chris-southon-profile-photo.png';

const Home = () => (
    <div className="container-fluid homeBackground">
        <Container>
            <div>
                <img className="img-fluid" src={ProfilePhoto} alt="Chris Southon Profile"/>
            </div>
        </Container>
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