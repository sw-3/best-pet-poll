import './App.css'

const Header = ({ walletAddress }) => {
  return (
    <div className="header-section">
      <h1 className="title">Vote for the Best Pet!</h1>
      <h2 className="subtitle">(Votes recorded on a blockchain.)</h2>
      {walletAddress ? (
        <div>
          <p className="instruction">
            Click a button below to vote for which animal makes the best pet!
          </p>
          <span><i>
            <strong>NOTE: </strong>
            Everyone gets 1 vote on the blockchain!<br />
            <span style={{fontSize: "18px"}}>
              If you vote again it will <strong style={{fontSize: "22px", color: "#fcd840"}}>
              change</strong> your vote.
            </span>
          </i></span>
        </div>
      ) : (
        <div>
          <p className="instruction">
            To cast a vote, connect with your email, Google, or as a Guest.
          </p>
          <span><i>
            <strong>NOTE: </strong>
            This is a fun demo app using the Mumbai testnet.<br />
            <span style={{fontSize: "18px"}}>
              It is <strong style={{fontSize: "22px", color: "#fcd840"}}>
              this easy</strong> to interact with a blockchain!
            </span>
          </i></span>
        </div>
      )}
    </div>
  )
}

export default Header
