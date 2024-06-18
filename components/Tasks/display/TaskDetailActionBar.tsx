
import { Button } from '@/components/ui/button'
import { Task } from '@/types'
import Link from 'next/link'
import React from 'react'
import { PiHandCoinsLight } from 'react-icons/pi'
import { RxHeart } from 'react-icons/rx'

type TaskDetailActionBarProps = {
  data: Task
}

const TaskDetailActionBar = ({data}: TaskDetailActionBarProps) => {
  return (
    <div>      {data?.taskIdName && (
      <div className="mt-4 flex flex-row">
        <Link className="" href={`/doerz/validate/${data.taskIdName}`}>
          <Button className="bg-blue-500 px-8 hover:bg-blue-600 dark:text-white">
            <PiHandCoinsLight className="mr-2" size={24} />
            Validate and Get Rewards
          </Button>
        </Link>
        <div className="ml-1">
          <Button variant={"ghost"} className="text-black dark:text-white">
            <RxHeart className="mr-1" size={24} />
            Favorite
          </Button>
        </div>
      </div>
    )}</div>
  )
}

export default TaskDetailActionBar