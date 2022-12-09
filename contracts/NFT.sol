// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
contract NFT is ERC721{
using Counters for Counters.Counter;
Counters.Counter private _tokenIds;

struct Characters{
            uint index;
            string name;
            string imageuri;
            uint strength;
            uint speed;
            uint power;
            
}
Characters[] characters;
mapping (uint=>Characters) public nftattribute;
mapping (address=>uint) public nftholders;
 
    constructor( 
        string[] memory characterNames,
        string[] memory characterImageURIs,
        uint[] memory characterstrength,
        uint[]memory characterspeed,
        uint[]memory characterpower) 
       
        ERC721("Superhero","Heroes") {
    for(uint i = 0; i<characterNames.length; i += 1) {
      characters.push(Characters({
        index: i,
        name: characterNames[i],
        imageuri: characterImageURIs[i],
        strength: characterstrength[i],
        speed: characterspeed[i],
        power: characterpower[i]
      }));
       
      Characters memory c = characters[i];
       console.log("Done initializing %s w/ index %s, img %s", c.name, c.index, c.imageuri);
       
    }
   _tokenIds.increment();
    }


function mintNFT(uint _index) external{
    
    uint newid=_tokenIds.current();
    _safeMint(msg.sender, newid);

     nftattribute[newid] = Characters({
      index: _index,
      name: characters[_index].name,
      imageuri: characters[_index].imageuri,
      strength: characters[_index].strength,
      speed: characters[_index].speed,
      power: characters[_index].power
    });

    console.log("Minted NFT w/ tokenId %s and characterIndex %s", newid, _index);
    nftholders[msg.sender] = newid;
    _tokenIds.increment();
}
 

}