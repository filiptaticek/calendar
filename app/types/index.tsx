export interface IEvent {
    name: string
    from: string
    to:string
    color: Color
    id:number
}

export type Color = "red" | "blue" | "green" | "yellow" | "orange" | "purple" | "pink" | "brown"
export interface State {
    events: IEvent[]
}