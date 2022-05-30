// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./Ownable.sol";
import "./Stakeable.sol";
import "./IERC20.sol";
import "./Freezeable.sol";

/**
* @notice consts are the constants used in the contract
 */

contract consts {
  IERC20 constant USDT = IERC20(address(0xc2132D05D31c914a87C6611C10748AEb04B58e8F));
  address constant ICO_WALLET = 0xA9c3960AFE8dAF157Ee9173C2184F8D58A83C51d;
  address constant STAKE_WALLET = 0xA9c3960AFE8dAF157Ee9173C2184F8D58A83C51d;
}

/**
* @notice IllumiShareToken is token used for transfers in the Illumishare ecosystem 
*/
contract IllumiShareToken is Ownable, Stakeable, consts, Freezeable{
  uint private _totalSupply;
  uint8 private _decimals;
  string private _symbol;
  string private _name;
  bool private _ICO;
  uint256 private _unitPriceUSDT;

  mapping (address => uint256) private _balances;
  
  mapping (address => mapping (address => uint256)) private _allowances;

  event Transfer(address indexed from, address indexed to, uint256 value);
  
  event Approval(address indexed owner, address indexed spender, uint256 value);

  event Mint(address minter, uint256 amount);

  event Burn(address burner, uint256 amount);

  event ICOMint(address indexed buyer, uint256 amount);

  constructor(string memory token_name, string memory short_symbol, uint8 token_decimals, uint256 token_totalSupply, uint256 unitPriceUSDT){
      _name = token_name;
      _symbol = short_symbol;
      _decimals = token_decimals;
      _totalSupply = token_totalSupply;
      _unitPriceUSDT = unitPriceUSDT;
      _ICO = true;

      _balances[msg.sender] = _totalSupply;

      emit Transfer(address(0), msg.sender, _totalSupply);
  }

  function getOwner() external view returns (address) {
    return owner();
  }

  function decimals() external view returns (uint8) {
    return _decimals;
  }
 
  function symbol() external view returns (string memory){
    return _symbol;
  }

  function name() external view returns (string memory){
    return _name;
  }

  function totalSupply() external view returns (uint256){
    return _totalSupply;
  }

  function balanceOf(address account) public view returns (uint256) {
    return _balances[account];
  }

  function allowance(address owner, address spender) external view returns(uint256){
    return _allowances[owner][spender];
  }

  function _mint(address account, uint256 amount) internal {
    require(account != address(0), "illumiShare: cannot mint to zero address");

    _totalSupply = _totalSupply + (amount);
    _balances[account] = _balances[account] + amount;
  }

  function mint(address account, uint256 amount) public onlyOwner returns(bool){
    _mint(account, amount);

    emit Mint(account, amount);
    return true;
  }

  function _burn(address account, uint256 amount) internal {
    require(account != address(0), "illumiShare: cannot burn from zero address");
    require(_balances[account] >= amount, "illumiShare: Cannot burn more than the account owns");

    _balances[account] = _balances[account] - amount;
    _totalSupply = _totalSupply - amount;
    
  }

  function burn(address account, uint256 amount) public onlyOwner returns(bool) {
    _burn(account, amount);

    emit Burn(account, amount);

    return true;
  }

  function _transfer(address sender, address recipient, uint256 amount) internal {
    require(sender != address(0), "illumiShare: transfer from zero address");
    require(recipient != address(0), "illumiShare: transfer to zero address");
    require(_balances[sender] >= amount, "illumiShare: cant transfer more than your account holds");

    _balances[sender] = _balances[sender] - amount;
    _balances[recipient] = _balances[recipient] + amount;

  }

  function transfer(address recipient, uint256 amount) external returns (bool) {
    _transfer(msg.sender, recipient, amount);

    emit Transfer(msg.sender, recipient, amount);

    return true;
  }

  function _approve(address owner, address spender, uint256 amount) internal {
    require(owner != address(0), "illumiShare: approve cannot be done from zero address");
    require(spender != address(0), "illumiShare: approve cannot be to zero address");
    
    _allowances[owner][spender] = amount;

  }

  function approve(address spender, uint256 amount) external returns (bool) {
    _approve(msg.sender, spender, amount);

    emit Approval(msg.sender, spender, amount);

    return true;
  }

  function transferFrom(address spender, address recipient, uint256 amount) external returns(bool){
    require(_allowances[spender][msg.sender] >= amount, "illumiShare: You cannot spend that much on this account");

    _transfer(spender, recipient, amount);
    _approve(spender, msg.sender, _allowances[spender][msg.sender] - amount);

    return true;
  }

  function increaseAllowance(address spender, uint256 amount) external returns (bool) {
    _approve(msg.sender, spender, _allowances[msg.sender][spender] + amount);
    return true;
  }

  function decreaseAllowance(address spender, uint256 amount) external returns (bool) {
    _approve(msg.sender, spender, _allowances[msg.sender][spender] - amount);
    return true;
  }

  function freezeTransfer(address recepient, address sender, uint256 amount, uint256 end_date) internal {
    require(balanceOf(sender) >= amount, "illumiShare: Insufficent funds");
    _freeze(recepient, amount, end_date);
    _burn(sender, amount);
  }

  function withdrawFreeze(uint256 freeze_index) public {
    _mint(msg.sender, _withdrawFreeze(freeze_index));
  }

  /**
  * Add functionality like burn to the _stake afunction
  *
    */
  function stake(uint256 _amount, uint endDate) public {
    require(_amount < _balances[msg.sender], "illumiShare: Cannot stake more than you own");
    
    _stake(_amount, endDate);
            // Burn the amount of tokens on the sender
    _burn(msg.sender, _amount);
  }

  /**
  * @notice withdrawStake is used to withdraw stakes from the account holder
    */
  function withdrawStake(uint256 amount, uint256 stake_index)  public {
    uint256 amount_to_mint = _withdrawStake(amount, stake_index);
    _burn(STAKE_WALLET, calculateStakeReward(stake_index));
    // Return staked tokens to user
    _mint(msg.sender, amount_to_mint);
  }

  function buyTokens(uint256 amount) external {
    require(balanceOf(ICO_WALLET) > amount, "illumiShare: Not enough tokens for mint");
    uint cost = amount * _unitPriceUSDT;
    require(USDT.allowance(msg.sender, address(this)) >= cost, "Not enough allowance");

    _transfer(ICO_WALLET, msg.sender, amount);
            
    emit ICOMint(msg.sender, amount);

    USDT.transferFrom(msg.sender, address(this), cost);
  }  
}