# Best Pet Poll

This project is a demo blockchain app using [thirdweb's](https://thirdweb.com/) account abstraction toolkit.

Any user can connect to this app with just their email address, Google account, or even as a Guest. (No wallet or crypto needed!)

## Usage
Best Pet Poll is deployed [here](https://cold-river-9444.on.fleek.co/). It is a simple app to allow anyone to vote for their favorite type of pet. After connecting to the site, the voting buttons are displayed and the user may cast their vote. Subsequent votes will always replace the previous vote (1 vote per person).

## Smart Contract Info
The source for the smart contract which tracks this poll can be found [in this repo](https://github.com/sw-3/aa-test-contracts).

The BestPetPoll smart contract is deployed [here](https://mumbai.polygonscan.com/address/0xf6B35b22C9dB8caD52e537012AB569E71CB3e532) on the Polygon testnet.

## Some Notes on the Code
This is a React app. See the packages.json file for the needed things. Here are a few pertinent points about the code:

- **.env-example** has placeholders for environement variables that allow connection to the thirdweb API. This is needed for the Account Abstraction functionality. When you have set these up in the thirdweb developer dashboard, you can save them into a .env file on your local dev system.
- **src/config.json** contains the smart contract address for the app to use.
- **src/index.js** wraps the main App component inside the thirdweb provider component. It uses your thirdweb Account Factory and API Client ID, which need to be defined in the .env file. ***This is how your app talks to thirdweb.***
- **src/components/App.js** is the main App component, which manages the connection status in the React state.
- **src/components/Navigation.js** handles the Connect/Disconnect button, which is at the heart of the account abstraction.
- **src/components/Poll.js** handles the voting buttons, using the thirdweb API behind the scenes to talk to the smart contract.

 
Enjoy!!

ScottW3 -- [SW3 Consulting](https://sw3.tech)
