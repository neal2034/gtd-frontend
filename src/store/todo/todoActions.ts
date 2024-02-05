import { todoService } from '@src/api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { TodoT } from '@src/typing/todo'


export const addTodo = createAsyncThunk('addTodo', async (todoPayload: Omit<TodoT, "id">) => {
    return await todoService.addTodo(todoPayload)
})

export const listAllTodo = createAsyncThunk('listTodo', async (isDone: boolean) => {
    return (await todoService.listAllTodo(isDone)).data
})


export const updateTodo = createAsyncThunk('updateTodo', async (todoPayload: TodoT) => {
    return await todoService.updateTodo(todoPayload)
})

export const deleteTodo = createAsyncThunk('deleteTodo', async (id: number) => {
    return await todoService.deleteTodo(id)
})

export const doneTodo = createAsyncThunk('doneTodo', async (id: number) => {
    return await todoService.updateTodo({ id, isDone: true })
})