// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BrunoToken is ERC20 {
  constructor(string memory name, string memory symbol) ERC20(name, symbol) {
    // Mint 1 million tokens to msg.sender
    _mint(msg.sender, 1000000 * 10**18);
  }
}
