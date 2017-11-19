'use strict'
var SHA256 = require("crypto-js/sha256");
//for client(browser), needs bower install crypto-js

//define Block objects for blockchain
class Block{
	constructor(index,previousHash,timestamp,data,hash){
		//simple data used
		this.index = index;
		this.previousHash = previousHash.toString();
		this.timestamp = timestamp;
		this.data = data;  //??in my case, will be pulled from google drive api
		this.hash = hash.toString();//not required but makes life easier	
	}
}

//genesis block must be hardcoded as we need to check when deciding a valid blockchain
var getGenesisBlock = () => {
    return new Block(0, "0", 1465154705, "my genesis block!!", "816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7");
};
var calculateHash = (index,previousHash,timestamp,data)=>{
	return SHA256(index+previousHash+timestamp+data).toString();
}

var calculateBlockHash = (block) =>{
	return SHA256(block.index+block.previousHash+block.timestamp+block.data);
}

var getLatestBlock = ()=>{
	return blockchain[blockchain.length - 1];
}
var generatenextBlock = (data) =>{
	var previousBlock = getLatestBlock();  
	var timestamp = new Date().getTime();
	var index = previousBlock.index+1;
	var previousHash = previousBlock.hash;
	var hash = calculateHash(index,previousHash,timestamp,data);
	return new Block(index,previousHash,timestamp,data,hash);
	}

//return bool
var isvalidNewBlock = (newBlock)=>{
	var previousBlock = getLatestBlock();
	if( newBlock.index!=(previousBlock.index + 1)){
		console.log("Error.. The new block has invalid index!");
		return false;
	}else if(newBlock.previousHash!=previousBlock.hash){
		console.log("Error.. The hash value does not match that of previousBlock");
		return false;
	}else if(newBlock.hash!=calculateBlockHash(newBlock)){
		console.log("Error.. Malicious block, the hash field has been faked");
	}
	return true;
}

//replace chain if valid chain and length is longer?? Need to implement
var replaceChain = (blockChainToUpdateTo) =>{
	   //??need to implement
	if(isValidChain(blockChainToUpdateTo) && blockChainToUpdateTo.length > blockchain.length){
		console.log("Valid blockchain received, replacing current blockchain with new one");
		blockchain = blockChainToUpdateTo;
		broadcast(responseLatestMsg()); //??Need to implement the network part
	}else{
		console.log("Invalid blockchain received");
	}
}
//check genesis block
var isValidChain = (blockchainToValidate)=>{
	//check if a valid genesis block
	if(blockchainToValidate[0].hash != blockchain[0].hash)
		return false;
	else{

	}
	return false;
}



//initialise blockchain
var blockchain = [getGenesisBlock()];

var blockchain1 = [getGenesisBlock()];

console.log(isValidChain(blockchain,blockchain1));

console.log(JSON.stringify(getGenesisBlock()));