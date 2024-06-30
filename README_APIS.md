# APIs

* For local development
* API Endpoints for Funding
* API Endpoints for Rewards


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



-----------------------------


### API Endpoints for Funding

#### Create a New Funding Pool
**POST** `/funding/pools/`
- **Description**: Creates a new funding pool.
- **URL**: `http://localhost:3003/funding/pools/`
- **Body** (raw JSON):
    ```json
    {
        "id": "1",
        "idPool": "doerzalpha-sd2sd",
        "poolDisplayName": "doerzalpha-csjcodetest",
        "creator": "csjcodetest",
        "dateAmountAdded": [{
            "date": 1717446387,
            "amount": 10000
        }],
        "amountCurrent": 10000,
        "dateCreated": 1717446387,
        "dateModified": 1717446387,
        "dateExpired": 1717456387
    }
    ```
- **Example Request**:
    ```http
    POST /funding/pools/ HTTP/1.1
    Host: localhost:3003
    Content-Type: application/json

    {
        "id": "1",
        "idPool": "doerzalpha-sd2sd",
        "poolDisplayName": "doerzalpha-csjcodetest",
        "creator": "csjcodetest",
        "dateAmountAdded": [{
            "date": 1717446387,
            "amount": 10000
        }],
        "amountCurrent": 10000,
        "dateCreated": 1717446387,
        "dateModified": 1717446387,
        "dateExpired": 1717456387
    }
    ```
- **Example Response**:
    ```json
    {
        "message": "Funding pool created successfully.",
        "idPool": "doerzalpha-sd2sd"
    }
    ```

#### Add Funds to an Existing Pool
**POST** `/funding/pools/:idPool/add`
- **Description**: Adds funds to an existing funding pool.
- **URL**: `http://localhost:3003/funding/pools/:idPool/add`
- **Path Variables**:
    - `idPool`: The ID of the funding pool
- **Body** (raw JSON):
    ```json
    {
        "date": 1718834850,
        "amount": 5000,
        "addedBy": "csjcodetest"
    }
    ```
- **Example Request**:
    ```http
    POST /funding/pools/doerzalpha-sd2sd/add HTTP/1.1
    Host: localhost:3003
    Content-Type: application/json

    {
        "date": 1718834850,
        "amount": 5000,
        "addedBy": "csjcodetest"
    }
    ```
- **Example Response**:
    ```json
    {
        "message": "Funds added successfully.",
        "newTotal": 15000
    }
    ```

#### Retrieve All Funding Pools
**GET** `/funding/pools/`
- **Description**: Retrieves all funding pools.
- **URL**: `http://localhost:3003/funding/pools/`
- **Example Request**:
    ```http
    GET /funding/pools/ HTTP/1.1
    Host: localhost:3003
    ```
- **Example Response**:
    ```json
    [
        {
            "id": "1",
            "idPool": "doerzalpha-sd2sd",
            "poolDisplayName": "doerzalpha-csjcodetest",
            "creator": "csjcodetest",
            "dateAmountAdded": [{
                "date": 1717446387,
                "amount": 10000
            }],
            "amountCurrent": 10000,
            "dateCreated": 1717446387,
            "dateModified": 1717446387,
            "dateExpired": 1717456387
        },
        {
            "id": "2",
            "idPool": "doerzalpha-df3gh",
            "poolDisplayName": "doerzalpha-anotheruser",
            "creator": "anotheruser",
            "dateAmountAdded": [{
                "date": 1717446500,
                "amount": 15000
            }],
            "amountCurrent": 15000,
            "dateCreated": 1717446500,
            "dateModified": 1717446500,
            "dateExpired": 1717456500
        }
    ]
    ```

#### Retrieve Details of a Specific Funding Pool
**GET** `/funding/pools/:idPool`
- **Description**: Retrieves details of a specific funding pool.
- **URL**: `http://localhost:3003/funding/pools/:idPool`
- **Path Variables**:
    - `idPool`: The ID of the funding pool
- **Example Request**:
    ```http
    GET /funding/pools/doerzalpha-sd2sd HTTP/1.1
    Host: localhost:3003
    ```
- **Example Response**:
    ```json
    {
        "id": "1",
        "idPool": "doerzalpha-sd2sd",
        "poolDisplayName": "doerzalpha-csjcodetest",
        "creator": "csjcodetest",
        "dateAmountAdded": [
            {
                "date": 1717446387,
                "amount": 10000
            },
            {
                "date": 1718834850,
                "amount": 5000
            }
        ],
        "amountCurrent": 15000,
        "dateCreated": 1717446387,
        "dateModified": 1718834850,
        "dateExpired": 1717456387
    }
    ```
