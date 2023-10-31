import { Nav } from "react-bootstrap"
import './App.css'

import sw3Logo from "../images/SW3-Logo-100.png"
import thirdwebLogo from "../images/Thirdweb-Icon-Transparent-100.png"

const Footer = () => {
  return (
    <footer className="footer-section">
      <span className="sw3-link">
        <img
          alt="sw3 Logo"
          src={sw3Logo}
          width="50"
          height="40"
          className="d-inline-block align-top me-2"
        />
        {'created by '}
        <a href="https://sw3.tech" target="_blank">
          {`SW3 Consulting`}
        </a>
      </span>
      <span className="thirdweb-link">
        {`powered by `}
        <a href="https://thirdweb.com/account-abstraction" target="_blank">
          {`thirdweb`}
        </a>
        <img
          alt="sw3 Logo"
          src={thirdwebLogo}
          width="40"
          height="26"
          className="d-inline-block align-top ms-3"
        />
      </span>
      {/* <Nav className="social-links">
        <Nav.Link href="https://github.com/sw-3" target="_blank">GitHub</Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/scottweberg/" target="_blank">LinkedIn</Nav.Link>
      </Nav> */}
    </footer>
  )
}

export default Footer
