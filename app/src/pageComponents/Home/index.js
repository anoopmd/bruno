import React, { useEffect } from "react";
import Web3 from "web3";
import BruABI from "../../token/bru-abi";

const Home = () => {
  const web3 = new Web3(process.env.NEXT_PUBLIC_RPC_URL);
  const contract = new web3.eth.Contract(BruABI, process.env.NEXT_PUBLIC_BRU_CONTRACT_ADDRESS);

  console.log(BruABI);

  useEffect(async () => {
    const account = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
    const balance = await web3.eth.getBalance(account);

    const totalSupply = await contract.methods.totalSupply().call();
    const name = await contract.methods.name().call();
    const symbol = await contract.methods.symbol().call();

    const bruBalance = await contract.methods.balanceOf(account).call();

    console.log(totalSupply);
    console.log(name);
    console.log(symbol);
    console.log(bruBalance);
    console.log(balance);
    console.log(web3.utils.fromWei(balance, 'ether'));
  }, []);

  return (
    <div className="flex justify-center p-10 m-10">
      <h2>React Tailwind Starter</h2>
    </div>
  );
}

export default Home;
