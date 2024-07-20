import { resources } from "./test-data";

export const getColorByFirstLast = (id: string | undefined) =>
  resources.find(
    (resource) => `${resource.firstName} ${resource.lastName}` === id,
  )?.color;
