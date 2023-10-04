# Orijin Plus Smart Contract Reader

The Smart Contract we have deployed can be found on the Ethereum chain here: https://etherscan.io/address/0xcd858884f28a2ba0ee4ea5f0cc571606abd11d1e  
This is a small script for listing out the manifests that have been stored on that contract.

## Setup

This is more of a guide for how to run Web3 scripts using NodeJS.
If you already know how to do that just run the `read_contract.js` script.

### Requirements

- Node.js (with NPM recommended)

- An RPC Gateway for the Ethereum network
  - I've included a public RPC URL in the code, but that node is not affiliated with us nor can I guarantee it will remain available.
  - If you have issues I suggest you pick another RPC URL from https://chainlist.org/chain/1 or use a paid service like [Infura](https://www.infura.io/)
    > Some gateways may limit the amount you can fetch, which usually results in receiving an unhandled InvalidResponseError.

### Install

This script uses the Web3.js library.

To install the web3 package globally, run: `npm install -g web3`  
To install it within this directory only, run: `npm i`

### Run

Run the script with: `node read_contract.js`
