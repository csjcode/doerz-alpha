import { z } from "zod"

export const taskSchemaMakerzForm = z.object({
  taskIdName: z.string().nonempty("Task ID Name is required"),
  title: z.string().nonempty("Title is required"),
  status: z.string().nonempty("Status is required"),
  taskType: z.string().nonempty("Task Type is required"),
  rewardSize: z.enum(["small", "medium", "large"]),
  rewardInDOERZ: z.number().multipleOf(1).nonnegative("Reward in DOERZ is required"),
  brand: z.string().nonempty("Brand is required"),
  description: z.string().nonempty("Description is required"),
  image: z.string().url().optional(),
  draft: z.enum(["true", "false"]),
  ownerUser: z.string().nonempty("Owner User is required"),
  ownerGroup: z.string().optional(),
  ownerAdmin: z.string().optional(),
  ownerProject: z.string().optional(),
  userInstructions: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
});

export type TaskSchemaMakerzForm = z.infer<typeof taskSchemaMakerzForm>