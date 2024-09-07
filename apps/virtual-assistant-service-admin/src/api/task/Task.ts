export type Task = {
  createdAt: Date;
  description: string | null;
  id: string;
  status?: "Option1" | null;
  taskName: string | null;
  updatedAt: Date;
};
