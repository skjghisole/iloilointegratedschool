/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function Footer() {
  return (
    <>
      <footer className="footer">
        <Container>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed and Coded by {" "}
            Skjghisole with ❤️
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
