import { collatedTasksExist } from "../constants"

export const collatedTasksExist = selectedProject =>
  collatedTasksExist.find(task => task.key === selectedProject)