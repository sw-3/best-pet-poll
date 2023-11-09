import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {
  ConnectWallet,
  useDisconnect,
  lightTheme
} from "@thirdweb-dev/react"
import './App.css'

import logoImage from "../images/page-logo_640.png"
import privacyPolicy from "../images/bestpetpoll-privacy-policy.pdf"

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
            onClick={disconnect}
          >
            Disconnect
          </Button>
        ) : (
          <ConnectWallet
            theme={lightTheme({
              colors: {
                primaryButtonBg: "#4d2283",
                accentButtonBg: "#4d2283",
              },
            })}
            btnTitle={"Connect"}
            modalSize={"compact"}
            modalTitleIconUrl={logoImage}
            privacyPolicyUrl={privacyPolicy}
          />
        )}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
