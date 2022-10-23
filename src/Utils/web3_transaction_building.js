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
    console.log(contract)
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
    return worldContract.methods.getFarmAt(x , y).call();
}

export async function upgradeResource(web3, x, y, resourceIdx) {
    var farmManagerContract = await initFarmManagerContract(web3)
    var resourceManagerContract = await initResourceManagerContract(web3)
    var plot = await usersFarm(web3, x, y)
    var account = await getAccount(web3)

    var total = await resourceManagerContract.methods.totalResources().call()
    var res = await resourceManagerContract.methods.getResource(resourceIdx).call()
    
    console.log(res)
    console.log(total)
    var token = res['underlying']
    console.log(token)
    var tokenContract = await initTokenContract(web3, token)

    await tokenContract.methods.approve(chainInfo['default'][0]['deployedFarmManager'], 100e18.toString()).send({from:account[0]})
    await farmManagerContract.methods.levelUpResource(plot, resourceIdx).send({from:account[0]})
}

export async function harvest(web3, x, y){
    var farmManagerContract = await initFarmManagerContract(web3)
    var account = await getAccount(web3)
    var plot = await usersFarm(web3, x, y)
    console.log(plot)
    await farmManagerContract.methods.harvestAll(plot).send({from:account[0]})
}
