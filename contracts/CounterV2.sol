// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "hardhat/console.sol";

contract CounterV2 is Initializable {
    uint256 private count;
    address private owner;

    event CountedTo(uint256 number);

    function initialize(uint256 number) public initializer {
        count = number;
    }

    function getCount() public view returns (uint256) {
        return count;
    }

    function setOwner() public {
        owner = msg.sender;
    }

    function getOwner() public {
        owner = msg.sender;
    }

    function countUp() public returns (uint256) {
        console.log("countUp: count =", count);
        uint256 newCount = count + 1;
        require(newCount > count, "Uint256 overflow");
        count = newCount;
        emit CountedTo(count);
        return count;
    }

    function countDown() public returns (uint256) {
        console.log("countDown: count =", count);
        uint256 newCount = count - 1;
        require(newCount < count, "Uint256 underflow");
        count = newCount;
        emit CountedTo(count);
        return count;
    }
}
