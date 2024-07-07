import { resources } from "./test-data/resources";

export const getContrastByFirstLast = (id) => {
  console.log('id', id)
  return resources.find(
      (resource) => `${resource.firstName} ${resource.lastName}` === id,
  )?.contrast;
}