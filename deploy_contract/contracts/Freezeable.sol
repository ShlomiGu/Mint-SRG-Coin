// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
contract Freezeable {
    constructor() {
        freezeholders.push();
    }
    
    struct FreezeAmount{
        address user;
        uint256 amount;
        uint256 end_date;
    }
    
    struct FreezeHolder{
        address user;
        FreezeAmount[] freezes_address;
    }
     
    struct FreezeSummary{
        uint256 total_amount;
        FreezeAmount[] freezes;
    }

    FreezeHolder[] internal freezeholders;

    mapping(address => uint256) internal freezes;

    event Freezed(address indexed user, uint256 amount, uint256 index, uint256 endDate);

    event Unfreezed(address holder, uint256 amount);

    function _addFreezeholder(address freezer) internal returns (uint256){
        freezeholders.push();
        uint256 userIndex = freezeholders.length - 1;

        freezeholders[userIndex].user = freezer;
        freezes[freezer] = userIndex;

        return userIndex; 
    }

    function _freeze(address freezer, uint256 _amount, uint256 end_date) internal{
        require(end_date > block.timestamp, "Freezeable: Invalid date range");
        require(_amount > 0, "Freezeable: Cannot freeze nothing");

        uint256 index = freezes[freezer];

        if(index == 0){
            index = _addFreezeholder(freezer);
        }

        freezeholders[index].freezes_address.push(FreezeAmount(freezer, _amount, end_date));

        emit Freezed(freezer, _amount, index, end_date);
    }

    function _withdrawFreeze(uint256 index) internal returns(uint256){
        uint256 user_index = freezes[msg.sender];
        FreezeAmount memory current_freeze = freezeholders[user_index].freezes_address[index];
        require(current_freeze.end_date < block.timestamp, "Freezeable: Not freeze end date");

        delete freezeholders[user_index].freezes_address[index];

        emit Unfreezed(msg.sender, current_freeze.amount);

        return current_freeze.amount;
    }

    function hasFreeze(address _freezer) public view returns(FreezeSummary memory){
        uint256 totalFreezedAmount; 
        FreezeSummary memory summary = FreezeSummary(0, freezeholders[freezes[_freezer]].freezes_address);
       
        for (uint256 s = 0; s < summary.freezes.length; s += 1){
           totalFreezedAmount = totalFreezedAmount + summary.freezes[s].amount;
       }
       
       summary.total_amount = totalFreezedAmount;
       return summary;
    }
}
