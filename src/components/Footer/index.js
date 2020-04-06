import React from "react";
import "./style.css";
import Container from '../Container';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        Employee Directory {new Date().getFullYear()}
      </Container>
    </footer>
  );
}

export default Footer;
