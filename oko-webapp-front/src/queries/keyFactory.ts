const userKeys = {
  all: ["users"] as const,
  lists: () => [...userKeys.all, "list"] as const,
  list: (filters: string) => [...userKeys.lists(), { filters }] as const,
  details: () => [...userKeys.all, "detail"] as const,
  detail: (id: number) => [...userKeys.details(), id] as const,
};

const machineKeys = {
  all: ["machine"] as const,
  lists: () => [...machineKeys.all, "list"] as const,
  list: (filters: string) => [...machineKeys.lists(), { filters }] as const,
  details: () => [...machineKeys.all, "detail"] as const,
  detail: (id: number) => [...machineKeys.details(), id] as const,
};

const keyFactory = {
  userKeys,
  machineKeys,
};

export default keyFactory;
