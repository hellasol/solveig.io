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
      <p>(Server needs about 20 seconds to load)</p>
    
      <br/>
      <br/>
      
      <h5>DECENTRALIGHT</h5>
      <hr></hr>
      <b>A blockchain managed light bulb </b>
      <br></br>
      <br></br>
      <li>A decentralized app based on solidity smart contracts, web3.js, Ethereum and React.js </li>
      <li>Get a free decentralight coin from the faucet and use it to control the light</li>
      <li>Will eventually be connected to a real light bulb!</li>
      <Button href="https://decentralight.solveig.io" color="dark" className="submitButton">Check it out!</Button>
      <br></br> 
       <br></br>
      </div>
    
  );
};


export default Project;