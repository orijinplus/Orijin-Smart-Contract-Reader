/**
 * Documentation
 *
 * Find a compiled version of our own smart contract on the blockchain here: https://etherscan.io/bytecode-decompiler?a=0xcd858884f28a2ba0ee4ea5f0cc571606abd11d1e
 * (note that this is the post-compiler code, which is useful for seeing what is stored at each storage index)
 *
 * The smart contract's source code: https://github.com/orijinplus/backend/blob/main/solidity/genesis.sol
 * (if you don't have access to that repo, the source code is pretty much exactly the same as the decompiled code above)
 *
 * Notes on setting up the web3 library: https://www.dappuniversity.com/articles/web3-js-intro
 * (mainly for how to use an rpc node like infura)
 *
 * Notes on accessing smart contract storage: https://medium.com/@dariusdev/how-to-read-ethereum-contract-storage-44252c8af925
 * (see mainly index 7— uintarray, which should be similar to how can decode our own index 2— the merkle root array)
 */

async function main() {
  const Web3Lib = require("web3");

  const rpcURL = "https://ethereum.blockpi.network/v1/rpc/public"; // Optional: Pick your own RPC Gateway for added confidence, for example: https://mainnet.infura.io/v3/YOUR_API_KEY_HERE

  const web3_client = new Web3Lib.Web3(rpcURL);

  const contractAddress = "0xCd858884F28a2ba0Ee4eA5F0cc571606abd11D1e"; // You would only need to change this if our smart contract ends up needing to be updated

  const index = 2;
  const storage2 = await web3_client.eth.getStorageAt(contractAddress, index);
  const array_length = Web3Lib.utils.toDecimal(storage2);

  const array_head = Web3Lib.utils.soliditySha3(index);
  const array_0 = BigInt(array_head);

  for (i = 0; i < array_length; i++) {
    const key = "0x" + (array_0 + BigInt(i)).toString(16);
    const data = await web3_client.eth.getStorageAt(contractAddress, key);
    const formatted_data = data.toString().replace(/0x/, "");
    const nonce = i + 1;
    console.log(nonce, formatted_data);
  }
}

main();
