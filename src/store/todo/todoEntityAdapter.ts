import { TodoT } from "@src/typing/todo";
import { createEntityAdapter } from '@reduxjs/toolkit'

const todoEntityAdapter = createEntityAdapter<TodoT>({})
export default todoEntityAdapter