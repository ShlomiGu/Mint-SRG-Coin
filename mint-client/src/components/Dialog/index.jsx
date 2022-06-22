import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { WalletButton } from "../../ButtonElements";
import Web3 from "web3-eth";
import abi from "./StakeToken.json";

import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

// import { connector } from "./trustWallet"; 


const MintDialog = (props) => {
  //   const [open, setOpen] = React.useState(props);
  const [open, setOpen] = React.useState(true);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const [scrollNav, setScrollNav] = useState(false);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [buttonText, setButtonText] = useState("Connect Wallet");
  const [isConnected, setConnected] = useState(false);
  const [isEthNet, setEthNet] = useState(false);
  const [myToken, setMyToken] = useState();
  const [accounts, setAccounts] = useState(0);
  const [buyAmount, setBuyAmount] = useState(0);

  const CONTRACT_ADDRESS = "0xd7655fAe300d29F085545D5Fb7F74e2DE87EfBbB";
  const DECIMALS = 18;
  const TOKEN_PER_MATIC = 10;

  const { setDialog } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDialog(false);
  };

  const onAmountChange = (event) => {
    setBuyAmount(event.target.value);
  };

  const connectWalletHandler = () => {
    // Here we check if there is web3 support
    if (typeof web3 !== "undefined") {
      window.web3 = new Web3(window.web3.currentProvider);
      // Check if its MetaMask that is installed
      if (window.web3.currentProvider.isMetaMask === true) {
        connectMetaMask().then(() => {
          connectToSelectedNetwork();
        });
      } else {
        // Another web3 provider, add support if you want
      }
    } else {
      // The browser has no web3
      // Suggest the user to install a web3 compatible browser plugin
      throw new Error(
        "No web3 support, redirect user to a download page or something :) "
      );
    }
  };
  // connectMetaMask is used to connect to MetaMask and ask permission to grab account information
  async function connectMetaMask() {
    // We need to make the connection to MetaMask work.
    // Send Request for accounts and to connect to metamask.
    window.web3
      .requestAccounts()
      .then((result) => {
        console.log(result);
        // Whenever the user accepts this will trigger
        setAccounts(result);
      })
      .catch((error) => {
        // Handle errors, such as when a user does not accept
        throw new Error(error);
      });
  }

  const getContractAddress = () => CONTRACT_ADDRESS;

  function connectToSelectedNetwork() {
    const web3 = new Web3(Web3.givenProvider);
    const address = getContractAddress();
    const devtoken = new web3.Contract(abi, address);

    setMyToken(devtoken);
  }

  const disconnectWalletHandler = () => {
    if (window.ethereum) {
      //setScrollNav(false);
      setDefaultAccount(null);
      setUserBalance(null);
      setButtonText("Connect Wallet");
      setConnected(false);
      setEthNet(null);
    }
  };

  const changeAccount = (newAccount) => {
    setConnected(true);
    changeButtonTextToAddress(newAccount.toString());
    setDefaultAccount(newAccount);
    getUserBalance(newAccount.toString());
  };




  /////////////////////////////////Trust-Wallet//////////////////////////////////////
    // Create a connector
  
  /////////////////////////////////Trust-Wallet//////////////////////////////////////

  const mint = () => {
    const price = buyAmount / TOKEN_PER_MATIC * (10 ** DECIMALS)
    console.log(
      myToken.methods
        .buy()
        .estimateGas({ from: accounts[0], value: price })
        .then((gas) => {
          myToken.methods
            .buy()
            .send({ from: accounts[0], gas: gas, value: price });
        })
    );
  };

  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((result) => {
        setUserBalance(ethers.utils.formatEther(result));
      });
  };

  const changeButtonTextToAddress = (address) => {
    setButtonText(
      address.substring(0, 2) + "..." + address.substring(address.length - 4)
    );
  };

  const chainChangedHandler = () => {
    window.location.reload();
  };

  if (window.ethereum) {
    window.ethereum.on("accountsChanged", disconnectWalletHandler);
  }

  if (window.ethereum) {
    window.ethereum.on("chainChanged", chainChangedHandler);
  }

  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={setDialog}
        PaperProps={{
          style: {
            backgroundColor: '#060707',
            alignItems: 'center',
            border: '2px solid #F1F1F1',
            borderRadius: '15px',
          },
        }}
      >
        <DialogTitle>{accounts[0]}</DialogTitle>
        <DialogContent
          PaperProps={{
            style: {
              backgroundColor: '#060707',
              alignItems: 'center',
            },
          }}>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}
          >
            {!accounts[0] && (
              <div>
                <WalletButton
                  onClick={
                    isConnected ? disconnectWalletHandler : connectWalletHandler
                  }
                >
                  Login with MetaMask
                </WalletButton>
                <br/>
                <WalletButton>
                  Login with Trust Wallet
                </WalletButton>
              </div>
            )}

            {!!myToken && (
              <>
                <div>
                  <input
                    type="number"
                    value={buyAmount}
                    onChange={onAmountChange}
                  />
                  <WalletButton onClick={mint}>Mint</WalletButton>
                </div>
                <div style={{ display: 'flex', alignItems: 'center'}}>
                  <span>
                    Price: {buyAmount / TOKEN_PER_MATIC} + gas
                  </span>
                  <img src="./assets/polygon-matic-logo.svg" alt="MATIC" style={{ width: '30px', marginLeft: '20px' }}/>
                </div>
              </>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default MintDialog;
