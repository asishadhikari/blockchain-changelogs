# Blockchain implementation to track google Drive files

###Author: Ashish Adhikari, Howard University
###Credits: Lauri Hartikka :github.com/lhartikk
### Motivation
Non repudiation is an important requirement in any functional system comprising of multiple interacting entities. As such, to provide an easily verifiable log of modifications of important files, this project is a blockchain based implementation to securely and transparently store modifications made to files in form of log. 

As a proof of concept, this project makes use of google drive APIs as made available through **googleapis**  and **google-auth-library** npm packages in order to store 20 items from the validated google drive.

### Architecture
* HTTP interface to control the node
* Use Websockets to communicate with other nodes (P2P)
* Super simple "protocols" in P2P communication
* Data is not persisted in nodes
* No proof-of-work or proof-of-stake: a block can be added to the blockchain without competition

### Dependencies:
* Nodejs
* npm packages:
  * body-parser : 1.15.2
	* crypto-js : 3.1.6
	* express : 4.11.1
	* google-auth-library : 0.11.0
	* googleapis : 22.2.0
	* request-to-curl : 0.1.1
	* sync : 0.2.5
	* ws : 1.1.0

### Quick start

```
npm install
HTTP_PORT=3001 P2P_PORT=6001 npm start
HTTP_PORT=3002 P2P_PORT=6002 PEERS=ws://localhost:6001 npm start
curl -H "Content-type:application/json" --data '{"data" : "Some data to the first block"}' http://localhost:3001/mineBlock
```

















### HTTP API
##### Get blockchain
```
curl http://localhost:3001/blocks
```
##### Create block
```
curl -H "Content-type:application/json" --data '{"data" : "Some data to the first block"}' http://localhost:3001/mineBlock
``` 
##### Add peer
```
curl -H "Content-type:application/json" --data '{"peer" : "ws://localhost:6001"}' http://localhost:3001/addPeer
```
#### Query connected peers
```
curl http://localhost:3001/peers
```
