// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;


contract Stakeable {
    constructor() {
        stakeholders.push();
    }
    
    struct Stake{
        address user;
        uint256 amount;
        uint256 since;
        uint256 end_date;
        uint256 reward;
    }
    
    struct Stakeholder{
        address user;
        Stake[] address_stakes;
    }
     
    struct StakingSummary{
        uint256 total_amount;
        Stake[] stakes;
    }

    /**
    * @notice 
    *   This is a array where we store all Stakes that are performed on the Contract
    *   The stakes for each address are stored at a certain index, the index can be found using the stakes mapping
    */
    Stakeholder[] internal stakeholders;
    /**
    * @notice 
    * stakes is used to keep track of the INDEX for the stakers in the stakes array
     */
    mapping(address => uint256) internal stakes;
    /**
    * @notice Staked event is triggered whenever a user stakes tokens, address is indexed to make it filterable
    */
    event Staked(address indexed user, uint256 amount, uint256 index, uint256 timestamp, uint256 endDate);

    /**
     * @notice
      rewardPerHour is 200000 because it is used to represent 0.002, since we only use integer numbers
      This will give users 0.002% reward for each staked token / H
    */
    uint256 internal rewardPerHour = 200000;

    /**
    * @notice _addStakeholder takes care of adding a stakeholder to the stakeholders array
     */
    function _addStakeholder(address staker) internal returns (uint256){
        // Push a empty item to the Array to make space for our new stakeholder
        stakeholders.push();
        // Calculate the index of the last item in the array by Len-1
        uint256 userIndex = stakeholders.length - 1;
        // Assign the address to the new index
        stakeholders[userIndex].user = staker;
        // Add index to the stakeHolders
        stakes[staker] = userIndex;
        return userIndex; 
    }

    /**
    * @notice
    * _Stake is used to make a stake for an sender. It will remove the amount staked from the stakers account and place those tokens inside a stake container
    * StakeID 
    */
    function _stake(uint256 _amount, uint256 end_date) internal{
        uint256 timestamp = block.timestamp;
        require(((end_date - timestamp) / 30 days) >= 1 && ((end_date - timestamp) / 365 days) <= 1, "Stakeable: Invalid date range");
        require(_amount > 0, "Stakeable: Cannot stake nothing");

        uint256 index = stakes[msg.sender];

        if(index == 0){
            index = _addStakeholder(msg.sender);
        }

        stakeholders[index].address_stakes.push(Stake(msg.sender, _amount, timestamp , end_date, 0));

        emit Staked(msg.sender, _amount, index, timestamp, end_date);
    }

    /**
      * @notice
      * calculateStakeReward is used to calculate how much a user should be rewarded for their stakes
      * and the duration the stake has been active
    */
    function calculateStakeReward(Stake memory _current_stake) internal view returns(uint256){
        // First calculate how long the stake has been active
        // Use current seconds since epoch - the seconds since epoch the stake was made
        // The output will be duration in SECONDS ,
        // We will reward the user 0.1% per Hour So thats 0.1% per 3600 seconds
        // the alghoritm is  seconds = block.timestamp - stake seconds (block.timestap - _stake.since)
        // hours = Seconds / 3600 (seconds /3600) 3600 is an variable in Solidity names hours
        // we then multiply each token by the hours staked , then divide by the rewardPerHour rate 
        return (((_current_stake.end_date - _current_stake.since) / 1 hours) * _current_stake.amount) / rewardPerHour;
    }
    /**
      * @notice
      * calculateStakeReward is used to calculate how much a user should be rewarded for their stakes
      * and the duration the stake has been active
     */
      function calculateStakeReward(uint256 index) internal view returns(uint256){
          // First calculate how long the stake has been active
          // Use current seconds since epoch - the seconds since epoch the stake was made
          // The output will be duration in SECONDS ,
          // We will reward the user 0.1% per Hour So thats 0.1% per 3600 seconds
          // the alghoritm is  seconds = block.timestamp - stake seconds (block.timestap - _stake.since)
          // hours = Seconds / 3600 (seconds /3600) 3600 is an variable in Solidity names hours
          // we then multiply each token by the hours staked , then divide by the rewardPerHour rate 
          uint256 user_index = stakes[msg.sender];
          Stake memory _current_stake = stakeholders[user_index].address_stakes[index];
          
          return (((_current_stake.end_date - _current_stake.since) / 1 hours) * _current_stake.amount) / rewardPerHour;
      }

    /**
     * @notice
     * withdrawStake takes in an amount and a index of the stake and will remove tokens from that stake
     * Notice index of the stake is the users stake counter, starting at 0 for the first stake
     * Will return the amount to MINT onto the acount
     * Will also calculateStakeReward and reset timer
    */
    function _withdrawStake(uint256 amount, uint256 index) internal returns(uint256){
        uint256 user_index = stakes[msg.sender];
        Stake memory current_stake = stakeholders[user_index].address_stakes[index];
        require(current_stake.end_date < block.timestamp, "Stakeable: Not stake end date");

        uint256 reward = calculateStakeReward(current_stake);       
        delete stakeholders[user_index].address_stakes[index];

        return amount+reward;
    }

     /**
     * @notice
     * hasStake is used to check if a account has stakes and the total amount along with all the seperate stakes
     */
    function hasStake(address _staker) public view returns(StakingSummary memory){
        uint256 totalStakeAmount; 
        StakingSummary memory summary = StakingSummary(0, stakeholders[stakes[_staker]].address_stakes);
       
        for (uint256 s = 0; s < summary.stakes.length; s += 1){
           uint256 availableReward = calculateStakeReward(summary.stakes[s]);
           summary.stakes[s].reward = availableReward;
           totalStakeAmount = totalStakeAmount+summary.stakes[s].amount;
       }
       
       summary.total_amount = totalStakeAmount;
       return summary;
    }

}