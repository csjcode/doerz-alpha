import React from 'react'
import { State } from './reducerMakerzTaskFor';
import { MdFormatListBulletedAdd } from 'react-icons/md';
import { PiNumberCircleFour, PiNumberCircleOne, PiNumberCircleThree, PiNumberCircleTwo } from 'react-icons/pi';
import { FaCircleCheck } from 'react-icons/fa6';

type MakerzTaskCreateHeaderProps = {
  state: State;
}

const MakerzTaskCreateHeader = ({state}: MakerzTaskCreateHeaderProps) => {
  return (
    <div className="flex flex-row items-center justify-start pl-4">
    <MdFormatListBulletedAdd className="text-zinc-500" />
    <div className="ml-2 mr-2 font-medium">Create Task</div>
    {state.makerzFormStep < 2 ? (
      <div className="mr-1">
        <PiNumberCircleOne
          className={`${
            state.makerzFormStep === 1
              ? "text-green-700 dark:text-green-300"
              : "dark:zinc-600 text-zinc-400"
          }`}
        />
      </div>
    ) : (
      <div className="mr-1">
        <FaCircleCheck className="text-green-600 dark:text-green-400" />
      </div>
    )}
    {state.makerzFormStep < 3 ? (
      <div className="mr-1">
        <PiNumberCircleTwo
          className={`${
            state.makerzFormStep === 2
              ? "text-green-700 dark:text-green-300"
              : "dark:zinc-600 text-zinc-400"
          }`}
        />
      </div>
    ) : (
      <div className="mr-1">
        <FaCircleCheck className="text-green-600 dark:text-green-400" />
      </div>
    )}
    {state.makerzFormStep < 4 ? (
      <div className="mr-1">
        <PiNumberCircleThree
          className={`${
            state.makerzFormStep === 3
              ? "text-green-700 dark:text-green-300"
              : "dark:zinc-600 text-zinc-400"
          }`}
        />
      </div>
    ) : (
      <div className="mr-1">
        <FaCircleCheck className="text-green-600 dark:text-green-400" />
      </div>
    )}
    {state.makerzFormStep < 5 ? (
      <div className="">
        <PiNumberCircleFour
          className={`${
            state.makerzFormStep === 4
              ? "text-green-700 dark:text-green-300"
              : "dark:zinc-600 text-zinc-400"
          }`}
        />
      </div>
    ) : (
      <div className="mr-1">
        <FaCircleCheck className="text-green-600 dark:text-green-400" />
      </div>
    )}
  </div>
  )
}

export default MakerzTaskCreateHeader