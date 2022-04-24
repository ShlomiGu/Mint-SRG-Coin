
const JSON_ROUTE = './StakeToken.json'
const CONTRACT_ADDRESS = '0x30E0e400697499E2A5e3231ED73e367783dF72E1'

const getContractAddress = () => CONTRACT_ADDRESS

// getABI loads the ABI of the contract
// This is an async function so we can wait for it to finish executing
async function getABI(){
// DevToken.json should be placed inside the public folder so we can reach it
let ABI = "";
await fetch(JSON_ROUTE, {
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    }
}).then((response) => {
    // We have a Response, make sure its 200 or throw an error
    if (response.status == 200) {
    // This is actually also a promise so we need to chain it to grab data
    return response.json();
    } else {
    throw new Error('Error fetching ABI');
    }
}).then((data) => {
    // We have the data now, set it using the state
    ABI = data;
}).catch((error) => {
    throw new Error(error);
});

return ABI;
}

async function connectToSelectedNetwork() {
    // This will connect to the selected network inside MetaMask
    const web3 = new Web3(Web3.givenProvider);
    // Set the ABI of the Built contract so we can interact with it
    const abi = await getABI();
    const address = getContractAddress();

    // Make a new instance of the contract by giving the address and abi
    const devtoken = new web3.Contract(abi, address);
    // Set the state of the app by passing the contract so we can reach it from other places
    setDevToken(devtoken);
}