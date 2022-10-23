import Swal from 'sweetalert2'
var contractAddresses = require('./addresses.json');
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

export async function initWorldContract(web3, chainId) {
    var contract_json = require('./Abi/build/contracts/World.json');
    var contact_abi = contract_json['abi'];
    var contract_address = contractAddresses[chainId]['deployer']
    var contract = await new web3.eth.Contract(contact_abi, contract_address);
    return contract
}

export async function createFarm(web3, x, y) {
    
}

export async function unstakeGSVE(web3, chainId) {
    infoSwal('Unstake Transaction Created')
    var contract = await initCoreContract(web3, chainId);
    var account = await getAccount(web3)
    await contract.methods.unstake().send({ from: account[0] }).then(res => txnSwal('Transaction Successful', 'success')).catch(err => txnSwal('Transaction Error', 'error'));
}

export async function userTotalReward(web3, account, chainId) {
    var contract = await initCoreContract(web3, chainId);
    var totalReward = await contract.methods.totalRewardUser(account[0]).call();
    return web3.utils.fromWei(totalReward)
}
