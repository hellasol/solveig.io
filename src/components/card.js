import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import { Button, Col, Row } from 'reactstrap';
import profilePic from '../files/IMG_2974.jpg'


export default function ProfileCard(props) {
    return (
    <Row>
      <Col sm="6">
        <Card body style={{ backgroundColor: 'white', borderColor: '#333', textAlign: 'center'}}>
        <img class="profilePic" alt="" src={profilePic} />
        <CardBody>
          <CardTitle><h5>ABOUT</h5></CardTitle>
          <CardText> I am a self taught JavaScript developer and tech enthusiast, currently studying Computer Science, Business and Economics at ZHAW. I have strong technical skills as well as excellent interpersonal skills, enabling me to understand, communicate and solve problems effectively. I am eager to be challenged in order to grow and further improve my skills. Take a look at my work and get in touch! </CardText>
        </CardBody>
      </Card>
      </Col>

<Col sm="6">
  <div className='cardText' style={{ marginTop: '2rem', textAlign: "center"}}>
    <Button  size="lg"color="dark">Hard Skills</Button> 
    <Button  size="lg" outline color="dark">JavaScript</Button> 
    <Button  size="lg" outline color="dark">Java</Button> 
    <Button size="lg" outline color="dark">SQL</Button>
    <Button  size="lg" outline color="dark">Express.js</Button>
    <Button size="lg" outline color="dark">Spring Boot</Button>
    <Button  size="lg" outline color="dark">CSS</Button> 
    <Button  size="lg" outline color="dark">React.js</Button>
    <Button size="lg" outline color="dark">HTML</Button> 
    <Button size="lg" outline color="dark">Node.js</Button> 
    <Button size="lg" outline color="dark">Vue.js</Button> 
    <Button size="lg" outline color="dark">Solidity</Button> 
    <Button size="lg" outline color="dark">Git</Button> 
    <Button size="lg" outline color="dark">Heroku</Button> 
    <Button size="lg" outline color="dark">MySQL</Button> 
    <Button size="lg" outline color="dark">MongoDB</Button> 
    <Button  size="lg" outline color="dark">CRM</Button> 
    <Button  size="lg" outline color="dark">Postman</Button> 
    <Button size="lg" outline color="dark">User Interface Design</Button> 
    <Button size="lg" outline color="dark">ERM</Button> 
    <Button size="lg" outline color="dark">XML</Button> 
    <Button size="lg" outline color="dark">Database Design</Button> 
    <Button  size="lg" outline color="dark">JSON</Button> 
    <Button size="lg" outline color="dark">RM</Button> 
    <Button size="lg" outline color="dark">ERP</Button> 

<br>
</br>
    <Button  size="lg"color="dark">Soft Skills</Button> 
    <Button  size="lg" outline color="dark">Design Thinking</Button> 
    <Button size="lg" outline color="dark">English</Button> 
    <Button  size="lg" outline color="dark">Team Player</Button> 
    <Button size="lg" outline color="dark">Norwegian</Button> 
    <Button  size="lg" outline color="dark">German</Button> 
    <Button  size="lg" outline color="dark">Self-motivated</Button> 
    <Button  size="lg" outline color="dark">Requirements Engineering</Button> 
    <Button size="lg" outline color="dark">Certified Associate in Project Management</Button> 
    <Button  size="lg" outline color="dark">Curious</Button> 
    <Button  size="lg" outline color="dark">Problem solver</Button> 


  </div>
</Col>
</Row>
  );
}

