# Blockchain implementation to track google Drive files

##### Author: Ashish Adhikari, Howard University
### Motivation:
Non repudiation is an important requirement in any functional system comprising of multiple interacting entities. As such, to provide an easily verifiable log of modifications of important files, this project is a blockchain based implementation to securely and transparently store modifications made to files in form of log. 

As a proof of concept, this project makes use of google drive APIs as made available through **googleapis**  and **google-auth-library** npm packages in order to store 20 items from the validated google drive.

### Architecture:
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
	* sleep: 5.1.1

### Discretion:
When adding a new node to the network, ```PEERS``` must always be explicitly defined. For instance, ```PEERS=ws://localhost:6001,ws://localhost:6002``` would be added to specifications when initialising a third node with peers on socket 6001 and 6002. If not, add peer For more information, see the initiaisation of second node in Quick start.   

### To initialise two nodes and mine a block:

```
npm install
HTTP_PORT=3001 P2P_PORT=6001 npm start
HTTP_PORT=3002 P2P_PORT=6002 PEERS=ws://localhost:6001 npm start
curl -H "Content-type:application/json" --data '{"data" : "Some data to the first block"}' http://localhost:3001/mineBlock
```

### HTTP API:
Use the following APIs as provided by the express app to interact with the blockchain maintained in the p2p network:
##### View the data of the blockchain
```
curl http://localhost:3001/blocks
```
##### Add 10 most recent changed files to block

```
node browser-request.js
```

##### Add peer
note that peer must be populated for all nodes (except the first node)
```
curl -H "Content-type:application/json" --data '{"peer" : "ws://localhost:6001"}' http://localhost:3001/addPeer
```
#### Query connected peers
```
curl http://localhost:3001/peers
```

credits:
Lauri Hartikka :github.com/lhartikk for naivechain
Google inc : samples for API usage 
