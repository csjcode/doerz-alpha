import React from "react";
import TaskCard from "./TaskCard";
import { Task } from "@/types";

interface TaskCardListProps {
  tasks: Task[];
}

const TaskCardList = ({tasks}: TaskCardListProps) => {
  return (
    <div>
      {/* <div>TaskCardList</div> */}
      <div className="flex flex-wrap justify-center">
        {tasks.map((task) => (
          <TaskCard key={task.taskId} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskCardList;
