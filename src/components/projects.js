import React from 'react';
import { Button } from 'reactstrap';

const Project = (props) => {
  return (
    <div>
         <br></br>
         <br></br>
      <h1>MY PROJECTS</h1>
      <br></br>
      <h5>THIRSTY CACTUS</h5>
      <hr></hr>
      <b>Keeping plants alive using Google Vision API and trefle.io</b>
      <br></br>
      <br></br>
      <li>App based on React Native, Express and MongoDB</li>
      <li>Snap a picture of your house plants</li>
      <li>Get high level information, such as scientific name and family</li>
      <li>Image recognition using google vision API</li>
      <li>Semantic information using trefle plants API</li>
      <Button href="https://thirstycactus-frontend.herokuapp.com" color="dark" className="submitButton">Check it out!</Button>
    
      <br/>
      <br/>
      
      <h5>DECENTRALIGHT</h5>
      <hr></hr>
      <b>A blockchain managed light bulb </b>
      <br></br>
      <br></br>
      <li>App based on a solidity smart contract and a Node.js backend</li>
      <li>Every five minutes, whoever pays the most gets to control the lightbulb</li>
      <li>A market efficient light switch</li>
      <br></br> 
       <br></br>
      </div>
    
  );
};


export default Project;