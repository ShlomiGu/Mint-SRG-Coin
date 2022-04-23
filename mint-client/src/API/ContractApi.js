function call(func, callback, ...args) {
  // Trigger the function with the arguments
  func(...args)
    .call()
    .then((result) => {
      // Apply given callback, this is our stateSetters
      callback(result);
    })
    .catch((error) => {
      throw new Error(error);
    });
}

function send(func, from, ...args) {
  func(...args)
    .estimateGas({ from: from })
    .then((gas) => {
      func(...args)
        .send({ from: from, gas:gas })
        .catch((error) => {
          throw new Error(error);
        });
    })
    .catch((error) => {
      throw new Error(error);
    });
}

export const useGetTotalSupply = (contract) => {
  const result = call(contract.methods.totalSupply);
  return result;
};

export const useMint = ({ contract, amount, target }) => {
    send(contract.methods.mint, target, amount)
};

export const useAccountBalance = ({ contract, account })