export interface Task {
  id: string;
  dateCreated: number;
  dateStarted: number;
  dateModified: number;
  dateExpired: number;
  rewardId: string;
  tags: string[];
  taskIdName: string;
  title: string;
  status: string;
  label: string;
  rewardSize: "small" | "medium" | "large";
  brand: string;
  description: string;
  image: string;
  userInstructions: string[];
}
