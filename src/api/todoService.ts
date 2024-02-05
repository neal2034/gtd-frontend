import { APIResponse } from '@src/typing/api'
import { request } from './request'
import { TodoT } from '@src/typing/todo'

export async function addTodo(todo: Omit<TodoT, "id">): Promise<APIResponse> {
    return request.post('/todo', todo)
}

export async function listAllTodo(isDone = false): Promise<APIResponse> {
    return request.get(`/todo/all/?isDone=${isDone}`)
}

export async function deleteTodo(id: number): Promise<APIResponse> {
    return request.delete(`/todo/id=${id}`)
}

export async function updateTodo(todo: Partial<TodoT>): Promise<APIResponse> {
    return request.put('/todo/', todo)
}