import { Dayjs } from "dayjs"

export type TodoT = {
    id?: number
    due?: string | Dayjs
    title?: string
    description?: string
    isDone?: boolean
}