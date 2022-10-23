

const Reducer = (state, action) => {
    switch (action.type) {
        case 'web3_connected':
            return {
                ...state,
                web3: action.payload,
            };
        case 'web3_caller_connected':
            return {
                ...state,
                web3_caller: action.payload,
            };
        case 'set_reload':
            return {
                ...state,
                reload: action.payload,
            };
        case 'web3_disconnected':
            return {
                ...state,
                web3: null,
                account: "0x00",
                connected: false
            };
        case 'chainId':
            return {
                ...state,
                chainId: action.payload,
            };
        case 'set_account':
            return {
                ...state,
                account: action.payload
            };
        case 'set_connected':
            return {
                ...state,
                connected: action.payload
            };
        case 'set_connected_web3':
            return {
                ...state,
                connectedWeb3: action.payload
            };
        case 'farm':
            return {
                ...state,
                farm: action.payload
            };
        case 'selectedAddress':
            return {
                ...state,
                selectedAddress: action.payload
            };
        case 'selectedChain':
            return {
                ...state,
                selectedChain: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;