var calculateHash=(index,previousHash,timestamp,data)=>{
	return CryptoJS.SHA256(index+previousHash+timestamp+data).toString();
};

console.log(calculateHash(1,2,3,4));
