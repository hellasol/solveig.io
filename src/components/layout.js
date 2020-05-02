import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";

import Header from "./header";
import "./layout.css";
import linkedin from "../files/linkedin.png";
import github from "../files/github-logo.png";
import email from "../files/email.png";
import download from "../files/download.png";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>

        <footer>
          <Row
            style={{
              textAlign: "center",
            }}
          >
            <Col sm={{ size: "auto", offset: 9 }}>
              <a
                href="https://www.linkedin.com/in/solveighelland/"
                style={{
                  paddingRight: "1rem",
                }}
              >
                <img src={linkedin} alt="" width="35" />
              </a>

              <a
                href="https://github.com/hellasol/"
                style={{
                  paddingRight: "1rem",
                }}
              >
                <img src={github} alt="" width="35" />
              </a>

              <a
                href="mailto:hi@solveig.io"
                style={{
                  paddingRight: "1rem",
                }}
              >
                <img src={email} alt="" width="35" />
              </a>

              <a href="../files/cv.pdf" download="Solveig Helland CV">
                <img src={download} alt="" width="35" />
              </a>
            </Col>
          </Row>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
