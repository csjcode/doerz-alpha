import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Task } from "@/types";

interface TaskCardProps {
  task: Task;
}
const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <Card className="m-4 w-[350px]">
      <CardHeader>
        <img
          src={task.images[0]}
          alt={task.title}
          className="h-48 w-full object-cover"
        />
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-bold">{task.title}</h2>
        <p className="text-gray-600">{task.description}</p>
        <div className="mt-2 flex flex-wrap">
          {task.tags.map((tag, index) => (
            <span
              key={index}
              className="mr-2 rounded bg-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-2">
          <p>
            <strong>Status:</strong> {task.status}
          </p>
          <p>
            <strong>Reward Size:</strong> {task.rewardSize}
          </p>
          <p>
            <strong>Expires:</strong>{" "}
            {new Date(task.dateExpired * 1000).toLocaleDateString()}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-gray-500">Task ID: {task.taskId}</p>
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
