export interface Task {
  taskId: string;
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

export interface Favorite {
  idFavorites: string;
  username: string;
  dateModified: number;
  favoritesTaskId: string[];
  favoritesTaskIdName: string[];
}
