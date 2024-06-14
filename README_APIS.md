# APIs

* For local development use the data in the doerz-jsonserver repo.
* Just clone the repo csjcode/doerz-jsonserver
* Then follow instructions below.

### doerz-jsonserver

json-server --watch db.json --port 3003





Here is a detailed example of a reward data object, including the fields you've mentioned and a few additional ones that might be useful. Additionally, I've included an example of a `RewardPool` as a parent to a reward, allowing multiple rewards to be funded from one pool.

### Reward Data Object Fields:
- `rewardUuid`: Unique identifier for the reward.
- `rewardTitle`: Title of the reward.
- `rewardDescription`: Description of the reward.
- `rewardType`: Type of the reward (e.g., DOERZ coin, other coin types, NFTs, etc.).
- `rewardDecay`: Indicates whether the reward decays over time (true or false).
- `maxRewardPerUser`: Maximum number of rewards a single user can receive.
- `maxRewardPerDay`: Maximum number of rewards that can be distributed per day.
- `expiration`: Expiration date of the reward.
- `totalRewardsFunded`: Total number of rewards funded.
- `rewardPoolUuid`: Identifier of the reward pool (if using a RewardPool).
- `rewardCreationDate`: Date when the reward was created.
- `rewardStatus`: Status of the reward (e.g., active, expired, etc.).

### RewardPool Data Object Fields:
- `rewardPoolUuid`: Unique identifier for the reward pool.
- `rewardPoolTitle`: Title of the reward pool.
- `rewardPoolDescription`: Description of the reward pool.
- `totalFunds`: Total funds allocated to the pool.
- `remainingFunds`: Remaining funds in the pool.
- `rewardPoolCreationDate`: Date when the reward pool was created.
- `rewardPoolStatus`: Status of the reward pool (e.g., active, depleted, etc.).

### Example Data Objects:

#### RewardPool Example:
```json
{
  "rewardPoolUuid": "pool-1234-5678",
  "rewardPoolTitle": "Launch Promotion Pool",
  "rewardPoolDescription": "Funds allocated for promoting the new app launch.",
  "totalFunds": 10000,
  "remainingFunds": 7500,
  "rewardPoolCreationDate": "2024-06-10T12:00:00Z",
  "rewardPoolStatus": "active"
}
```

#### Reward Example:
```json
{
  "rewardUuid": "reward-9876-5432",
  "rewardTitle": "Early Adopter Bonus",
  "rewardDescription": "Reward for the first 100 users who complete the task.",
  "rewardType": "DOERZ coin",
  "rewardDecay": false,
  "maxRewardPerUser": 1,
  "maxRewardPerDay": 10,
  "expiration": "2024-07-10T12:00:00Z",
  "totalRewardsFunded": 100,
  "rewardPoolUuid": "pool-1234-5678",
  "rewardCreationDate": "2024-06-10T12:00:00Z",
  "rewardStatus": "active"
}
```

### Explanation:
- **Reward Data Object**:
  - `rewardUuid`, `rewardTitle`, `rewardDescription`, `rewardType`, `rewardDecay`, `maxRewardPerUser`, `maxRewardPerDay`, `expiration`, `totalRewardsFunded`, `rewardPoolUuid`, `rewardCreationDate`, `rewardStatus`
  - These fields describe the specific reward, its limitations, its relation to the reward pool, and its current status.

- **RewardPool Data Object**:
  - `rewardPoolUuid`, `rewardPoolTitle`, `rewardPoolDescription`, `totalFunds`, `remainingFunds`, `rewardPoolCreationDate`, `rewardPoolStatus`
  - These fields describe the pool of funds that can be used to fund multiple rewards, allowing for better management and allocation of resources.

### Use Case:
- **Makerz** create a task.
- **Makerz** create a `RewardPool` to allocate funds for rewards.
- **Makerz** create multiple rewards linked to the `RewardPool`.
- **Doerz** complete tasks and receive rewards funded by the `RewardPool`.

This setup allows flexibility in managing and distributing rewards, ensuring that funds are allocated efficiently and transparently.