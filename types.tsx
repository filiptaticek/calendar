export type IEvent = {
  id: number,
  title: string,
  description: string,
  start: string,
  end: string,
  color: "red" | "blue" | "green" | "yellow" | "purple" | "pink" | "orange"
}