import React from "react";

type DisplayTaskRewardProps = {
  rewardSize: string;
};

const DisplayTaskReward = ({rewardSize}:DisplayTaskRewardProps) => {
  return (
    <div>
      {" "}
      <div className="mt-4 text-lg font-bold">Reward Amount</div>
      <div className="flex flex-row">
      <div className="mt-2">1,000 DOERZ</div>
      <div className="mt-2 ml-2">/ {`${rewardSize[0].toUpperCase() + rewardSize.slice(1)}`} reward size</div>

      </div>

    </div>
  );
};

export default DisplayTaskReward;
