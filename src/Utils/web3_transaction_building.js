import { useReducer } from 'react';
import Swal from 'sweetalert2'
var chainInfo = require('./ChainInfo.js');

function infoSwal(title) {
    Swal.fire({ title: title, icon: 'info', timer: 30000, showConfirmButton: false, position: 'center' });
}

function txnSwal(title, type) {
    Swal.fire({ title: title, icon: type, timer: 30000, showConfirmButton: false, position: 'center' });
}

export async function getAccount(web3) {
    var account = await web3.eth.getAccounts()
    return account
}

export async function initWorldContract(web3) {
    console.log(chainInfo)
    var contract_json = require('./Abi/build/contracts/World.json');
    var contact_abi = contract_json['abi'];
    var contract_address = chainInfo['default'][0]['deployedWorldContract']
    var contract = await new web3.eth.Contract(contact_abi, contract_address);
    return contract
}

export async function initFarmManagerContract(web3) {
    var contract_json = require('./Abi/build/contracts/FarmManager.json');
    var contact_abi = contract_json['abi'];
    var contract_address = chainInfo['default'][0]['deployedFarmManager']
    var contract = await new web3.eth.Contract(contact_abi, contract_address);
    return contract
}

export async function initResourceManagerContract(web3) {
    var contract_json = require('./Abi/build/contracts/ResourceManager.json');
    var contact_abi = contract_json['abi'];
    var contract_address = chainInfo['default'][0]['deployedResourceManager']
    var contract = await new web3.eth.Contract(contact_abi, contract_address);
    return contract
}

export async function initTokenContract(web3, address) {
    var contract_json = require('./Abi/build/contracts/IERC20.json');
    var contact_abi = contract_json['abi'];
    var contract = await new web3.eth.Contract(contact_abi, address);
    return contract
}

export async function createFarm(web3, x, y) {
    var contract = await initWorldContract(web3)
    var account = await getAccount(web3)
    await contract.methods.buyPlot(x, y).send({ from: account[0]})
}

export async function usersFarm(web3, x, y) {
    var worldContract = await initWorldContract(web3);
    var account = await getAccount(web3)
    return worldContract.methods.getFarmAt(x , y);
}

export async function upgradeResource(web3, plot, resourceIdx) {
    var farmManagerContract = await initFarmManagerContract(web3)
    var resourceManagerContract = await initResourceManagerContract(web3)
    var account = await getAccount(web3)

    var total = await resourceManagerContract.methods.totalResources().call()
    var resources = []
    
    for(var i=0; i< total; i++){
        resources.push((await resourceManagerContract.methods.getResource(i).call()))
    }

    var token = resources[resourceIdx]['underlying']
    var tokenContract = await initTokenContract(web3, token)

    await token.methods.approve(chainInfo[0]['deployedFarmManager'], 100e18.toString()).send({from:account[0]})
    await farmManagerContract.methods.levelUpResource(plot, resourceIdx).send({from:account[0]})
}

export async function harvest(web3, plot){
    var farmManagerContract = await initFarmManagerContract(web3)
    var account = await getAccount(web3)
    await farmManagerContract.methods.harvestAll().send({from:account[0]})
}
