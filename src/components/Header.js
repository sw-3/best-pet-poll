import './App.css'

const Header = ({ walletAddress }) => {
  return (
    <div className="header-section">
      <h1 className="title">Vote for the Best Pet</h1>
      <h2 className="subtitle">Your vote is recorded on a blockchain!</h2>
      {walletAddress ? (
        <div>
          <p className="instruction">
            Click a button below to vote for which animal makes the best pet!
          </p>
          <span><i>
            (<strong>NOTE: </strong>Everyone gets 1 vote! 
              If you vote again it will cancel your previous vote.)
          </i></span>
        </div>
      ) : (
        <div>
          <p className="instruction">
            To cast a vote, connect with your email, Google, or as a Guest.
          </p>
          <span><i>
            (<strong>NOTE: </strong>This is a test application, interacting with a test blockchain.)
          </i></span>
        </div>
      )}
    </div>
  )
}

export default Header
