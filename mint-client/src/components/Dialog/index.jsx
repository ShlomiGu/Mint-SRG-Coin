import React, { useState } from 'react';
import { ethers } from "ethers";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import { WalletButton } from '../../ButtonElements';

const MintDialog = props => {
//   const [open, setOpen] = React.useState(props);
  const [open, setOpen] = React.useState(true);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const [scrollNav, setScrollNav] = useState(false);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [buttonText, setButtonText] = useState("Connect Wallet");
  const [isConnected, setConnected] = useState(false);
  const [isEthNet, setEthNet] = useState(false);

  const { setDialog } = props 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDialog(false)
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_chainId" }).then((chainId) => {
        if (chainId !== "0x1") {
          setButtonText("Change Network");
        } else {
          setEthNet(true);
          window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((accounts) => {
              changeAccount(accounts[0]);
            });
        }
      });
    } else {
      disconnectWalletHandler();
      setButtonText("Install Metamask");
    }
  };

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
      >
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            {/* <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor="max-width">maxWidth</InputLabel>
              <Select
                autoFocus
                value={maxWidth}
                onChange={handleMaxWidthChange}
                label="maxWidth"
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <MenuItem value={false}>false</MenuItem>
                <MenuItem value="xs">xs</MenuItem>
                <MenuItem value="sm">sm</MenuItem>
                <MenuItem value="md">md</MenuItem>
                <MenuItem value="lg">lg</MenuItem>
                <MenuItem value="xl">xl</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              sx={{ mt: 1 }}
              control={
                <Switch checked={fullWidth} onChange={handleFullWidthChange} />
              }
              label="Full width"
            /> */}
            <div>
                <WalletButton 
                    onClick={
                    isConnected ? disconnectWalletHandler : connectWalletHandler
                    }
                >Connect
                </WalletButton>
            </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default MintDialog;