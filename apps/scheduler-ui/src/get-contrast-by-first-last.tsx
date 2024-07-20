import { resources } from "./test-data";

export const getContrastByFirstLast = (id: string | undefined) => {
  // console.log('id', id)
  return resources.find(
      (resource) => `${resource.firstName} ${resource.lastName}` === id,
  )?.contrast;
}