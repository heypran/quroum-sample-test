const Web3=require('web3-quorum');
const ethereumTx= require('ethereumjs-tx');
const testContractAbi= require('./build/contracts/Test.json');
var web3 = new Web3( new Web3.providers.HttpProvider("http://172.13.0.4:8545"));

//var coinbase = web3.eth.coinbase;
//var balance = web3.eth.getBalance(coinbase);
//var contract = new web3.eth.Contract(
//var ContractOne = artifacts.require("Test");
//console.log(ContractOne);
//console.log(web3.eth.getAccounts[0]);
var TestContract = web3.eth.Contract(testContractAbi.abi,'0xa2D81f99AA4134D7cD9822018309af7F71bD4b48');
//0xabbb828dc9e098944f7579419cdf0e6a489cc429
//0x3E82E2f50C5A743E65cceC614D78Ce210c366fcC
//0xa2D81f99AA4134D7cD9822018309af7F71bD4b48

//console.log(testContractAbi.abi);
//TestContract.methods.getOwner().call(async (err,result)=> await console.log(result));
function get(){
web3.eth.personal.unlockAccount('0x59a83f92034da597b815debb45d4e8bd215763ee','',15000).then((response) => {
TestContract.methods.getRO().call({from:'0x59a83f92034da597b815debb45d4e8bd215763ee'},async (err,result)=> await console.log(result));
}).catch((error)=>{
  console.log(error);
});
}
//get();



function setnew(){
  TestContract.methods.setRO("testPriv").send({from: '0x35d5214de23f9b5ae50f6bf7846ed3f9525b7566',gas: 1500000,privateFor:['VmGTZXbTDsM3mr0Il8dkj4saP7pzhG8VQagJ3hLmtXM=']})
  .then(function(receipt){
      // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
      console.log(receipt);
  });
}

//setnew();

//1 - 0x296d1d0dc699a49d7bf83ff58ed617098fe648cb
//2 - 13c439bf92eebc88bf7c88ae7ac306a7442d3756
//3- 0x35d5214de23f9b5ae50f6bf7846ed3f9525b7566

function getnew(){
  TestContract.methods.getRO().call({from:'0x296d1d0dc699a49d7bf83ff58ed617098fe648cb'},(err,result)=> { 
    if(err) console.log(err);
    else console.log(result)});
}

//getnew();

//console.log(testContractAbi.bytecode);
function createContract(){
  const newContract = new web3.eth.Contract(testContractAbi.abi);
  newContract.options.data =testContractAbi.bytecode;
  newContract.deploy().send({from: '0x35d5214de23f9b5ae50f6bf7846ed3f9525b7566',gas: 1500000,privateFor:['VmGTZXbTDsM3mr0Il8dkj4saP7pzhG8VQagJ3hLmtXM=']})
  .then((e, contract)=>{
      if(e) console.log(e);
      else if(!contract.address) console.log(contract.transactionHash);
      else console.log("Address is "+contract.address);
    // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
      //console.log(receipt);
  });
}

createContract();


// Node 1 public key: egJw3TVCcEUvxdOQ6Dw5qhuRbj+AkSgpt4XF0KNgnwA=
// Node 2 public key: VmGTZXbTDsM3mr0Il8dkj4saP7pzhG8VQagJ3hLmtXM=
// Node 3 public key: 5R23cAKrPoPnpVfB48LpJHsH2IlRtXkGR2Z7HjhvUhY=

// var simple = simpleContract.new(42, {from:web3.eth.accounts[0], data: simpleCompiled[simpleRoot].code, gas: 300000, privateFor: toKeys}, function(e, contract) {
// 	if (e) {
// 		console.log("err creating contract", e);
// 	} else {
// 		if (!contract.address) {
// 			console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
// 		} else {
// 			console.log("Contract mined! Address: " + contract.address);
// 			console.log(contract);
// 		}
// 	}
// });

function set(){
web3.eth.personal.unlockAccount('0x59a83f92034da597b815debb45d4e8bd215763ee','',15000).then((response) => {
  console.log(response);
  TestContract.methods.setRO("test4").send({from: '0x59a83f92034da597b815debb45d4e8bd215763ee',gas: 1500000,privateFor:['YCOlLojQtSl5PZ0vzInDjvdMextHW67caW5MVpH1g2A=']})
.then(function(receipt){
    // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
    console.log(receipt);
});
}).catch((error) => {
  console.log(error);
});
}
//set();

///RDHUQGqgEtD/63YzD7Jn1YtxOcKqfLG+0cWssWlfQo=

// const privateKeyBuffer = Buffer.from('0x', 'hex');
// web3.eth.getTransactionCount('0xae00c67dd12669c0c1a7c4173c95aeda95e8d2d1', (err, txCount) => {
//   // Build the transaction
//   const txObject = {
//     nonce:    web3.utils.toHex(txCount),
//     to:       '0x7031c2e1b0332b424484ea053a123d4dfd2f04ef',
//     value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
//     gasLimit: web3.utils.toHex(21000),
//     gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
//   }

//  // Sign the transaction
//  const tx = new ethereumTx(txObject)
 
//  tx.sign(privateKeyBuffer);
//  const serializedTx = tx.serialize()
//  const raw = '0x' + serializedTx.toString('hex')

//  // Broadcast the transaction
//  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//    console.log('txHash:', txHash)

// });

// });
//TestContract.methods.setNumber()
//getOwner();
//TestContract.methods.getOwner.call((err,res)=>{ console.log(res)});


//console.log(contract.);

//const owner = TestContract.getOwner.call(;

//console.log(TestContract.options);

//contract.methods.getOwner.call({from:'0xae00c67dd12669c0c1a7c4173c95aeda95e8d2d1'},(error,result)=>{console.log(result)});

//console.log(web3.eth.accounts);

//TestContract.getOwner();
//TestContract.deployed().then(function(instance){
//   return instance; //call method on contract class
//}).then(function(instance){
//	console.log(instance);
//}).catch(function(err){
//   console.log(err);
//})


// Load contract data
// TestContract.deployed().then(function(instance) {
//   testContractInstance = instance;
//   return testContractInstance.getOwner();
// }).then(function(owner) {
//   console.log(owner);
// }).catch(function(error) {
//   console.warn(error);
// });



