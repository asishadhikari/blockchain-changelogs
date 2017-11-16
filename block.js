

class Block{
	constructor(index, previousHash, timestamp,data,hash){
		this.index=index;
		this.previousHash=previousHash.toString();
		this.timestamp=timestamp;
		this.data=data;
		this.hash=hash.toString();
  }
  toString() =function(){
  	return "This is so easy and insanely cool";
  }
	

}
