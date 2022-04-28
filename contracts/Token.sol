// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract JUSDT is ERC20{
    constructor() ERC20("jUSDT", "jUSDT"){
        _mint(msg.sender, 100000000000*10**18);
    }
}

contract JDAI is ERC20{
    constructor() ERC20("jDAI", "jDAI"){
        _mint(msg.sender, 100000000000*10**18);
    }
}

contract JWBTC is ERC20{
    constructor() ERC20("jWBTC", "jWBTC"){
        _mint(msg.sender, 100000000000*10**18);
    }
}