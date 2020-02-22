import PropTypes from "prop-types"
import React from "react"
import linkedin from '../files/linkedin.png'
import github from '../files/github-logo.png'
import email from '../files/email.png'
import download from "../files/download.png";
import { Row, Col } from 'reactstrap';


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: ` 0rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        maxHeight: 300,
        padding: `1.45rem 1.0875rem`,
      }}
    >
        <Row style={{
          textAlign: 'center'
        }}>
        <Col sm={{ size: 'auto', offset: 9}}>
        <a href="https://www.linkedin.com/in/solveighelland/"
        style={{
          paddingRight: '1rem',
        }}>
          
      <img src={linkedin} alt="" width='35'/>
      </a>
     
      <a href="https://github.com/hellasol/"
      style={{
          paddingRight: '1rem',
        }}>
        <img src={github} alt="" width='35'/>
      </a>
     

      <a href="mailto:hi@solveig.io"
       style={{
        paddingRight: '1rem',
      }}>
        
        <img src={email} alt="" width='35'/>
      </a>

      <a href="cv.pdf">
        <img src={download} alt="" width='35'/>
      </a>
      </Col>

      </Row>

          <h1>SOLVEIG HELLAND</h1>
          <h5>ZURICH SWITZERLAND</h5>
<hr></hr>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
