import { resources } from "./test-data/resources";

export const getColorByFirstLast = (id) =>
  resources.find(
    (resource) => `${resource.firstName} ${resource.lastName}` === id,
  )?.color;
