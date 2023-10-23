import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {
  ConnectWallet,
  useDisconnect
} from "@thirdweb-dev/react"
import './App.css'

import logoImage from "../images/icon_640.png"

const Navigation = ({ walletAddress }) => {
  const disconnect = useDisconnect();

  return (
    <Navbar className='navigation-section' expand='lg'>
      <img
        alt="logo"
        src={logoImage}
        width="50"
        height="50"
        className="d-inline-block align-top mx-3"
      />
      <Navbar.Brand className="navbar-title">Best Pet Poll</Navbar.Brand>

      <Navbar.Toggle aria-controls="nav" />
      <Navbar.Collapse id="nav" className="justify-content-end">
        {walletAddress ? (
          <Button
            variant="dark"
            style={{ width: "150px", height: "50px", marginTop: "20px", color: "white" }}
            onClick={disconnect}
          >
            Disconnect...
          </Button>
        ) : (
          <ConnectWallet
            theme={"light"}
            btnTitle={"Connect"}
            modalSize={"compact"}
            welcomeScreen={{}}
            modalTitleIconUrl={logoImage}
          />
        )}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
