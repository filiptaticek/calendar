import { Color } from "../types"

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
export const inputSameProperties ="w-full rounded-md border border-black p-2 m-auto"
export const fakeEvents = [
  {
    name: "Running",
    from: "2021-08-01T10:00:00.000Z",
    to: "2021-08-01T11:00:00.000Z",
    color: "red" as Color,
    id:1
  },
  {
    name: "Gym",
    from: "2023-03-02T12:00:00.000Z",
    to: "2021-08-01T13:00:00.000Z",
    color: "blue" as Color,
    id:2
  },
  {
    name: "Plane",
    from: "2021-08-01T14:00:00.000Z",
    to: "2021-08-01T15:00:00.000Z",
    color: "green" as Color,
    id:3
  }
]